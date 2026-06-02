/**
 * Subtle Islamic geometric watermark for the hero background.
 * A tiled 8-pointed star (khatim / girih) lattice rendered in faint copper,
 * fading out toward the edges via a radial mask. Pure SVG - renders identically
 * on every system and adapts to both themes.
 */

const TILE = 110;
const C = TILE / 2;
const OUTER = 38;
const INNER = 15.5;

/** Vertices of an 8-pointed star as an SVG points string. */
function starPoints(): string {
  const verts: string[] = [];
  const points = 8;
  const step = Math.PI / points;
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? OUTER : INNER;
    const a = i * step - Math.PI / 2;
    verts.push(
      `${(C + r * Math.cos(a)).toFixed(2)},${(C + r * Math.sin(a)).toFixed(2)}`
    );
  }
  return verts.join(" ");
}

export default function IslamicPattern({
  className = "",
}: {
  className?: string;
}) {
  const points = starPoints();

  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full text-copper ${className}`}
      style={{
        maskImage:
          "radial-gradient(ellipse 70% 70% at 50% 45%, #000 35%, transparent 80%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 70% 70% at 50% 45%, #000 35%, transparent 80%)",
      }}
    >
      <defs>
        <pattern
          id="khatim"
          width={TILE}
          height={TILE}
          patternUnits="userSpaceOnUse"
        >
          {/* 8-pointed star outline */}
          <polygon
            points={points}
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
          />
          {/* inner ring for depth */}
          <circle
            cx={C}
            cy={C}
            r={6}
            fill="none"
            stroke="currentColor"
            strokeWidth={0.8}
          />
          {/* connecting struts so adjacent stars form a continuous lattice */}
          <g stroke="currentColor" strokeWidth={1}>
            <line x1={C} y1={C - OUTER} x2={C} y2={0} />
            <line x1={C} y1={C + OUTER} x2={C} y2={TILE} />
            <line x1={C - OUTER} y1={C} x2={0} y2={C} />
            <line x1={C + OUTER} y1={C} x2={TILE} y2={C} />
          </g>
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill="url(#khatim)"
        opacity={0.12}
      />
    </svg>
  );
}
