import { ReactNode } from "react";

export interface Tier {
  name: string;
  highlight?: boolean;
}

export interface TierRow {
  feature: string;
  values: ReactNode[]; // ordered same as tiers
  isPrice?: boolean;
}

interface Props {
  tiers: Tier[];
  rows: TierRow[];
  className?: string;
}

/** Rate-card tier matrix — Feature × Tiers table with optional highlighted column */
const TierMatrix = ({ tiers, rows, className = "" }: Props) => (
  <div className={`overflow-x-auto ${className}`}>
    <table className="tier-matrix">
      <thead>
        <tr>
          <th>FEATURE</th>
          {tiers.map((t) => (
            <th key={t.name} className={t.highlight ? "tier-highlight" : ""}>{t.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.feature} className={r.isPrice ? "tier-price" : ""}>
            <td>{r.feature}</td>
            {r.values.map((v, i) => (
              <td key={i} className={tiers[i]?.highlight ? "tier-highlight" : ""}>{v ?? "—"}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TierMatrix;