import { useState, type ElementType } from "react";
import Reveal from "@/components/Reveal";
import ClosingCTA from "@/components/ClosingCTA";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import { ArrowUpRight, Play } from "lucide-react";
import { portfolio, type PortItem, type PortLayout } from "@/data/portfolio";

const SITE_URL = "https://orions.agency";

/** More photos → taller masonry tile (ties tile height to the work). */
const masonryAspect = (count?: number) => {
  if (!count) return "1 / 1";
  if (count >= 6) return "4 / 5";
  if (count >= 4) return "3 / 4";
  return "5 / 4";
};

const aspectFor = (layout: PortLayout, item: PortItem) =>
  layout === "reels" ? "9 / 16" : layout === "wide" ? "16 / 9" : masonryAspect(item.count);

/** A single placeholder tile — swaps to a real image once `cover` is set. */
const Tile = ({
  item, index, layout, showPlay,
}: { item: PortItem; index: number; layout: PortLayout; showPlay: boolean }) => {
  const Wrapper: ElementType = item.url ? "a" : "div";
  const wrapProps = item.url ? { href: item.url, target: "_blank", rel: "noreferrer" } : {};
  return (
    <Wrapper
      {...wrapProps}
      className={`group relative block w-full overflow-hidden rounded-[10px] border border-foreground/12 bg-[#131210] transition-colors duration-300 hover:border-cinnabar/70 hover:bg-[#191712] ${
        layout === "masonry" ? "mb-3 break-inside-avoid" : ""
      } ${item.url ? "cursor-pointer" : ""}`}
      style={{ aspectRatio: aspectFor(layout, item) }}
    >
      <span className="absolute top-2.5 left-3 z-10 font-mono text-[10px] text-foreground/40">
        {String(index + 1).padStart(2, "0")}
      </span>
      {item.count ? (
        <span className="absolute top-2 right-2.5 z-10 font-mono text-[9px] tracking-[0.08em] text-foreground/70 bg-[rgba(10,10,9,0.5)] border border-foreground/15 px-2 py-0.5 rounded-full">
          {item.count} รูป
        </span>
      ) : null}
      {showPlay && (
        <span className="absolute inset-0 grid place-items-center text-foreground/30 group-hover:text-cinnabar/90 transition-colors">
          <Play className="w-6 h-6" />
        </span>
      )}
      <span className="absolute inset-x-0 bottom-0 p-3 bg-[rgba(10,10,9,0.42)]">
        <span lang="th" className="flex items-center gap-1.5 font-serif text-[14px] font-medium leading-[1.18] thai-wrap">
          {item.name}
          <ArrowUpRight className="w-3.5 h-3.5 text-cinnabar opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
        </span>
        {item.meta && (
          <span lang="th" className="block mt-1 font-mono text-[9.5px] tracking-[0.1em] uppercase text-foreground/55">
            {item.meta}
          </span>
        )}
      </span>
    </Wrapper>
  );
};

const gridClass = (layout: PortLayout) =>
  layout === "masonry"
    ? "columns-2 md:columns-3 gap-3"
    : layout === "reels"
    ? "grid grid-cols-[repeat(auto-fill,minmax(104px,1fr))] gap-2.5"
    : "grid grid-cols-[repeat(auto-fill,minmax(196px,1fr))] gap-3";

const Work = () => {
  const [active, setActive] = useState<string>("all");
  const visible = portfolio.filter((c) => active === "all" || c.key === active);

  return (
    <div>
      <SEO
        title="Work — Selected Work · ØRIONS"
        description="พอร์ตโฟลิโอ ØRIONS จัดตามประเภทงาน — social & creative ads, reels, entertainment, music, branding และ event."
        path="/work"
        schema={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/work` },
          ],
        }}
      />

      {/* 01 · HERO + filter */}
      <section className="section-ink px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto pt-28 md:pt-32 pb-12 md:pb-16">
          <SectionLabel label="Selected work" />
          <Reveal delay={0.05}>
            <h1 className="mt-8 h-display-lg">
              Portfolio,<br /><em className="text-cinnabar">by craft.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p lang="th" className="mt-8 font-thai thai-wrap text-[15px] md:text-[17px] text-muted-foreground max-w-[640px] leading-[1.7]">
              งานจริงของ ØRIONS จัดเป็นหมวดให้ดูง่าย — เลือกหมวดที่อยากดู หรือกดที่ชิ้นไหนก็เปิดดูตัวเต็ม.
            </p>
          </Reveal>
          <div className="mt-9 flex flex-wrap gap-2">
            {[{ key: "all", chip: "ทั้งหมด" }, ...portfolio].map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => setActive(c.key)}
                aria-pressed={active === c.key}
                className={`font-mono text-[11px] tracking-[0.08em] uppercase px-3.5 py-1.5 rounded-full border transition-colors ${
                  active === c.key
                    ? "bg-cinnabar border-cinnabar text-background"
                    : "border-foreground/20 text-foreground/75 hover:border-cinnabar hover:text-cinnabar"
                }`}
              >
                {c.chip}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 02 · CATEGORIES */}
      {visible.map((cat) => (
        <section key={cat.key} className="px-6 md:px-10 border-t border-foreground/15">
          <div className="max-w-[1280px] mx-auto py-16 md:py-20">
            <div className="flex items-end gap-4 border-b border-foreground/15 pb-3.5">
              <span className="font-serif font-medium text-[52px] md:text-[60px] leading-[0.78] tracking-[-0.03em] text-cinnabar/25">
                {cat.n}
              </span>
              <div className="flex-1">
                <h2 lang="th" className="font-serif text-[22px] md:text-[25px] font-medium tracking-[-0.01em] leading-[1.05]">
                  {cat.title}
                </h2>
                <div className="mt-1.5 font-mono text-[11px] tracking-[0.1em] uppercase text-muted-foreground">{cat.sub}</div>
              </div>
            </div>

            {cat.layout === "events" ? (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.items.map((it) => {
                  const W: ElementType = it.url ? "a" : "div";
                  const p = it.url ? { href: it.url, target: "_blank", rel: "noreferrer" } : {};
                  return (
                    <Reveal key={it.name}>
                      <W
                        {...p}
                        className="group flex flex-col justify-between min-h-[118px] h-full rounded-xl border border-foreground/14 bg-surface p-5 transition-colors hover:border-cinnabar/60 no-underline text-inherit"
                      >
                        <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-cinnabar">{it.meta}</span>
                        <span lang="th" className="mt-3 font-serif text-[19px] font-medium leading-[1.1] inline-flex items-center gap-2">
                          {it.name}
                          {it.url && <ArrowUpRight className="w-4 h-4 text-cinnabar opacity-0 group-hover:opacity-100 transition-opacity" />}
                        </span>
                        <span className="mt-2 font-mono text-[10px] text-muted-foreground">
                          {it.count ? `${it.count} รูป · activation` : "event · placeholder"}
                        </span>
                      </W>
                    </Reveal>
                  );
                })}
              </div>
            ) : (
              <div className={`mt-6 ${gridClass(cat.layout)}`}>
                {cat.items.map((it, i) => (
                  <Tile
                    key={it.name + i}
                    item={it}
                    index={i}
                    layout={cat.layout}
                    showPlay={cat.layout === "reels" || cat.layout === "wide"}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      <ClosingCTA
        title={<>โจทย์ของคุณมี <em className="text-cinnabar">เงื่อนไข</em> แบบไหน?</>}
        description="คุยฟรี 45 นาที ไม่มีข้อผูกมัด — เล่าโจทย์และเงื่อนไขมา เราช่วยมองว่าจะ refine มันยังไง."
        ctas={[
          { label: "เริ่มต้นบทสนทนา", to: "/contact" },
          { label: "ดูแพ็กเกจ", to: "/package", variant: "ghost" },
        ]}
      />
    </div>
  );
};

export default Work;
