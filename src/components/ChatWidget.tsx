"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X, Sparkles } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

const WELCOME: Message = {
  role: "assistant",
  content:
    "Assalamu Alaikum! 👋 I'm Ahmed's assistant. Ask me anything about his work, skills, projects, or how to reach him.",
};

const QUICK_QUESTIONS = [
  "Who is Ahmed Raza?",
  "What does he do now?",
  "Show me his projects",
  "How can I contact him?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [viewport, setViewport] = useState<{ height: number; top: number } | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  // Keep the panel sized to the visible area so the mobile keyboard never
  // pushes the input (or close button) off-screen. visualViewport shrinks/
  // shifts when the on-screen keyboard opens; we mirror it via CSS vars that
  // only the mobile layout consumes (desktop uses fixed sm: classes).
  useEffect(() => {
    if (!open || typeof window === "undefined") return;
    const vv = window.visualViewport;
    if (!vv) return;
    const update = () => setViewport({ height: vv.height, top: vv.offsetTop });
    update();
    vv.addEventListener("resize", update);
    vv.addEventListener("scroll", update);
    return () => {
      vv.removeEventListener("resize", update);
      vv.removeEventListener("scroll", update);
    };
  }, [open]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const history: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });

      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Request failed");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const next = [...prev];
          next[next.length - 1] = { role: "assistant", content: acc };
          return next;
        });
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setMessages((prev) => {
        const next = [...prev];
        next[next.length - 1] = {
          role: "assistant",
          content: `⚠️ ${msg} You can reach Ahmed directly via WhatsApp or email in the Contact section.`,
        };
        return next;
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Launcher button */}
      <motion.button
        type="button"
        aria-label={open ? "Close chat" : "Chat with Ahmed's assistant"}
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.9 }}
        className="glow-copper fixed bottom-6 right-6 z-[70] inline-flex h-14 w-14 items-center justify-center rounded-full bg-copper text-black shadow-lg transition-colors hover:bg-copper-dark"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={24} />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle size={24} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Chat with Ahmed's assistant"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            style={
              viewport
                ? ({
                    "--vv-height": `${viewport.height}px`,
                    "--vv-top": `${viewport.top}px`,
                  } as React.CSSProperties)
                : undefined
            }
            className="fixed inset-x-0 top-[var(--vv-top,0px)] z-[70] flex h-[var(--vv-height,100dvh)] w-full flex-col overflow-hidden rounded-none border border-copper/40 bg-bg-soft shadow-2xl glow-copper sm:inset-x-auto sm:right-6 sm:top-auto sm:bottom-24 sm:h-[70vh] sm:max-h-[560px] sm:w-[calc(100vw-3rem)] sm:max-w-sm sm:rounded-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-border bg-copper/10 px-4 py-3">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-copper text-black">
                <Sparkles size={18} />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-fg">Ahmed&rsquo;s Assistant</p>
                <p className="text-xs text-copper">Online · answers 24/7</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="ml-auto inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:bg-fg/10 hover:text-fg"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "rounded-br-sm bg-copper text-black"
                        : "rounded-bl-sm border border-border bg-fg/[0.04] text-fg"
                    }`}
                  >
                    {m.content || (
                      <span className="inline-flex gap-1">
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-copper [animation-delay:-0.3s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-copper [animation-delay:-0.15s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-copper" />
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {/* Quick questions (only before the first user message) */}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {QUICK_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => send(q)}
                      className="rounded-full border border-copper/40 px-3 py-1.5 text-xs text-copper transition-colors hover:bg-copper/10"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-border p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Ahmed…"
                aria-label="Type your message"
                className="min-w-0 flex-1 rounded-full border border-border bg-bg px-4 py-2 text-sm text-fg outline-none placeholder:text-muted focus:border-copper"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-copper text-black transition-colors hover:bg-copper-dark disabled:opacity-40"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
