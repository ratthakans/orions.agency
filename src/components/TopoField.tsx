// Brand-native "topographic contour" art — cinnabar glow lines on transparent
// dark, echoing the ORIONS DNA. Deterministic (no random) so SSR == client.
// Used as a decorative backdrop / divider to break visual monotony.

const W = 1200;
const H = 1600;
const CINNABAR = "#EB5939";

type Ring = { d: string; bright: boolean; o: number };

function buildField(cxF: number, cyF: number, seed: number, rings = 32): Ring[] {
  const cx = W * cxF;
  const cy = H * cyF;
  const SEG = 150;
  const out: Ring[] = [];
  for (let r = 1; r <= rings; r++) {
    const base = r * 24;
    let d = "";
    for (let s = 0; s <= SEG; s++) {
      const a = (s / SEG) * Math.PI * 2;
      const dist =
        base +
        26 * Math.sin(3 * a + r * 0.33 + seed) +
        15 * Math.sin(5 * a - r * 0.22 + seed * 1.7) +
        9 * Math.sin(2 * a + r * 0.5 + seed * 0.6);
      const x = cx + Math.cos(a) * dist * 1.7;
      const y = cy + Math.sin(a) * dist;
      d += (s === 0 ? "M" : "L") + x.toFixed(1) + " " + y.toFixed(1) + " ";
    }
    d += "Z";
    out.push({ d, bright: r % 6 === 0, o: Math.max(0.06, 0.5 - r * 0.014) });
  }
  return out;
}

interface Props {
  /** focal point as viewport fraction */
  fx?: number;
  fy?: number;
  seed?: number;
  className?: string;
  /** overall opacity multiplier */
  intensity?: number;
}

const TopoField = ({ fx = 0.5, fy = 0.42, seed = 0, className = "", intensity = 1 }: Props) => {
  const rings = buildField(fx, fy, seed);
  const uid = `topo-${seed}-${Math.round(fx * 100)}-${Math.round(fy * 100)}`;
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
        <filter id={`glow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>
      {/* soft halos for the bright contour lines */}
      {rings.filter((r) => r.bright).map((r, i) => (
        <path key={`h${i}`} d={r.d} fill="none" stroke={CINNABAR} strokeWidth={2.4}
          opacity={Math.min(0.7, r.o + 0.2)} filter={`url(#glow-${uid})`} />
      ))}
      {/* the contour field */}
      {rings.map((r, i) => (
        <path key={i} d={r.d} fill="none" stroke={CINNABAR}
          strokeWidth={r.bright ? 1.5 : 0.7}
          opacity={r.bright ? Math.min(0.85, r.o + 0.25) : r.o * 0.55} />
      ))}
    </svg>
  );
};

export default TopoField;
