import { useState } from "react";
import Reveal from "@/components/Reveal";
import ClosingCTA from "@/components/ClosingCTA";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import { portfolio } from "@/data/portfolio";

const SITE_URL = "https://orions.agency";

const Work = () => {
  const [active, setActive] = useState<string>("all");
  const visible = portfolio.filter((c) => active === "all" || c.key === active);

  return (
    <div>
      <SEO
        title="Work — Selected Work · ØRIONS"
        description="พอร์ตโฟลิโอ ØRIONS จัดตามประเภทงาน — video, social & creative ads, reels, long-form, music, art direction, photography และ event."
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
              งานจริงของ ØRIONS จัดเป็นหมวดให้ดูง่าย — เลือกหมวดที่อยากดูได้จากด้านล่าง.
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

      {/* 02 · CATEGORY BOARDS */}
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

            {cat.gallery ? (
              <div className="mt-6 flex flex-wrap gap-2.5 md:gap-3">
                {cat.gallery.map((g, i) => (
                  <a
                    key={i}
                    href={g.src}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative block overflow-hidden rounded-lg border border-foreground/12 hover:border-cinnabar/70 transition-colors"
                    style={{ flexGrow: g.ar, flexBasis: `${g.ar * 240}px` }}
                  >
                    <img
                      src={g.src}
                      alt={`${cat.title} — ${i + 1}`}
                      loading="lazy"
                      className="block w-full h-auto group-hover:opacity-90 transition-opacity"
                    />
                  </a>
                ))}
                <i aria-hidden className="grow-[10] basis-0" />
              </div>
            ) : (
              <div className="mt-6 space-y-3 md:space-y-4">
                {cat.boards?.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${cat.title} — ${i + 1}`}
                    loading="lazy"
                    className="w-full rounded-xl border border-foreground/12"
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
