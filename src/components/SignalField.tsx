// Brand-native "Signal, not Noise" motif — scattered noise dots pulled through
// faint convergence lines into a single focused point, wrapped in sonar/lens
// rings. Reads: Noise (scatter) → the lens (Ø) → Signal (one sharp point).
// Doubles as the visual for the data layer (SONAR listens, focus = the signal).
// Deterministic (seeded, no Math.random) so SSR == client. Drop-in like TopoField.

const W = 1200;
const H = 800;
const CINNABAR = "#EB5939";

// mulberry32 — small, stable seeded PRNG (server and client agree)
function rng(seed: number) {
  let a = (seed >>> 0) || 1;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Dot = { x: number; y: number; r: number; o: number };
type Line = { x1: number; y1: number; x2: number; y2: number; o: number };

function build(fxF: number, fyF: number, seed: number) {
  const fx = W * fxF;
  const fy = H * fyF;
  const rand = rng(Math.round(seed * 9973 + 7));
  const maxD = Math.hypot(W, H) * 0.6;

  const dots: Dot[] = [];
  const lines: Line[] = [];
  const N = 48;
  for (let i = 0; i < N; i++) {
    const x = rand() * W;
    const y = rand() * H;
    const dx = fx - x;
    const dy = fy - y;
    const dist = Math.hypot(dx, dy) || 1;
    const t = Math.min(1, dist / maxD); // 0 at focus → 1 far away (more "noise")
    dots.push({ x, y, r: 0.8 + 1.6 * rand(), o: 0.05 + 0.13 * t });
    // a third of the outer dots get a faint line converging toward the focus,
    // stopping short so the centre stays clean
    if (dist > 140 && rand() < 0.36) {
      const gap = 34;
      lines.push({
        x1: x,
        y1: y,
        x2: fx - (dx / dist) * gap,
        y2: fy - (dy / dist) * gap,
        o: 0.04 + 0.07 * (1 - t),
      });
    }
  }

  // sonar / lens rings around the focus
  const rings = [46, 104, 178, 268].map((rad, i) => ({
    rad,
    o: 0.22 - i * 0.045,
  }));

  return { fx, fy, dots, lines, rings };
}

interface Props {
  /** focal point (the Signal) as viewport fraction */
  fx?: number;
  fy?: number;
  seed?: number;
  className?: string;
  /** overall opacity multiplier */
  intensity?: number;
}

const SignalField = ({ fx = 0.72, fy = 0.42, seed = 0, className = "", intensity = 1 }: Props) => {
  const { fx: cx, fy: cy, dots, lines, rings } = build(fx, fy, seed);
  const uid = `sig-${seed}-${Math.round(fx * 100)}-${Math.round(fy * 100)}`;
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      style={{ opacity: intensity }}
    >
      <defs>
        <filter id={`fg-${uid}`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>

      {/* Noise → convergence lines pulling toward the focus */}
      {lines.map((l, i) => (
        <line key={`l${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
          stroke={CINNABAR} strokeWidth={0.7} opacity={l.o} />
      ))}

      {/* Noise — scattered dots, fainter the farther from Signal */}
      {dots.map((d, i) => (
        <circle key={`d${i}`} cx={d.x} cy={d.y} r={d.r} fill={CINNABAR} opacity={d.o} />
      ))}

      {/* the lens / sonar rings */}
      {rings.map((r, i) => (
        <circle key={`r${i}`} cx={cx} cy={cy} r={r.rad} fill="none"
          stroke={CINNABAR} strokeWidth={i === 0 ? 1.1 : 0.7} opacity={r.o} />
      ))}

      {/* Signal — the focused point (soft glow + sharp core) */}
      <circle cx={cx} cy={cy} r={13} fill={CINNABAR} opacity={0.5} filter={`url(#fg-${uid})`} />
      <circle cx={cx} cy={cy} r={3.6} fill={CINNABAR} opacity={0.95} />
    </svg>
  );
};

export default SignalField;
