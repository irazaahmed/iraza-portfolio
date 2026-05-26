import Groq from "groq-sdk";
import { buildSystemPrompt } from "@/lib/chatContext";

// Groq's free model. Override with GROQ_MODEL if this name changes.
const MODEL = process.env.GROQ_MODEL ?? "llama-3.3-70b-versatile";
const MAX_MESSAGES = 20; // keep conversations bounded
const MAX_CHARS = 2000; // per message

// Best-effort in-memory rate limit (per server instance).
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 15;
const hits = new Map<string, { count: number; ts: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now - rec.ts > WINDOW_MS) {
    hits.set(ip, { count: 1, ts: now });
    return false;
  }
  rec.count += 1;
  return rec.count > MAX_PER_WINDOW;
}

type Incoming = { role?: unknown; content?: unknown };

function isValidMessage(
  m: Incoming
): m is { role: "user" | "assistant"; content: string } {
  return (
    (m.role === "user" || m.role === "assistant") &&
    typeof m.content === "string" &&
    m.content.trim().length > 0
  );
}

function json(data: unknown, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  if (!process.env.GROQ_API_KEY) {
    return json(
      { error: "The assistant isn't configured yet. Please add GROQ_API_KEY." },
      503
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return json({ error: "Too many messages — please slow down a moment." }, 429);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request body." }, 400);
  }

  const rawMessages = (body as { messages?: unknown })?.messages;
  if (!Array.isArray(rawMessages)) {
    return json({ error: "Missing messages." }, 400);
  }

  const messages = rawMessages
    .filter(isValidMessage)
    .slice(-MAX_MESSAGES)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }));

  if (messages.length === 0) {
    return json({ error: "No valid messages." }, 400);
  }

  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

  let completion;
  try {
    completion = await groq.chat.completions.create({
      model: MODEL,
      temperature: 0.4,
      max_tokens: 600,
      stream: true,
      messages: [
        { role: "system", content: buildSystemPrompt() },
        ...messages,
      ],
    });
  } catch {
    return json({ error: "The assistant is unavailable right now." }, 502);
  }

  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for await (const chunk of completion) {
          const text = chunk.choices[0]?.delta?.content ?? "";
          if (text) controller.enqueue(encoder.encode(text));
        }
      } catch {
        controller.enqueue(
          encoder.encode("\n\n[Sorry, something went wrong. Please try again.]")
        );
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
