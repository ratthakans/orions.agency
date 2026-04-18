interface Props {
  left: string;
  right?: string;
}

/** Page section divider — top hairline + meta + bottom hairline (newspaper style) */
const SectionHeader = ({ left, right }: Props) => (
  <div className="border-t border-foreground pt-3 pb-3 flex items-center justify-between">
    <span className="index-badge font-bold">{left}</span>
    {right && <span className="index-badge font-medium text-muted-foreground">{right}</span>}
  </div>
);

export default SectionHeader;
