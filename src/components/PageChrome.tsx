interface Props {
  brand?: string;
  category?: string;
  meta?: string;
  page?: string;
  variant?: "top" | "bottom";
}

/** Rate Card 2026 page chrome — hairline band with mono caps brand left + category right. */
const PageChrome = ({
  brand = "ØRIONS · BOUTIQUE CREATIVE STUDIO",
  category = "BRANDING · SOCIAL · PRODUCTION",
  meta,
  page,
  variant = "top",
}: Props) => (
  <div className="px-6 md:px-10">
    <div className={`page-chrome ${variant === "bottom" ? "page-chrome--footer" : ""}`}>
      <span className="page-chrome__brand">{brand}</span>
      <span className="page-chrome__meta hidden sm:inline">{category}</span>
    </div>
    {(meta || page) && (
      <div className="flex items-center justify-between pt-3 pb-1 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
        <span>{meta}</span>
        {page && <span className="text-cinnabar">{page}</span>}
      </div>
    )}
  </div>
);

export default PageChrome;