import { useState, useEffect } from "react";
import { X, Play } from "lucide-react";
import Reveal from "@/components/Reveal";
import ClosingCTA from "@/components/ClosingCTA";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import { portfolio, type GalleryImage, type VideoItem } from "@/data/portfolio";

const SITE_URL = "https://orions.agency";

/** Deterministic shuffle — stable for a given seed (reshuffles only when seed changes). */
const shuffle = <T,>(arr: T[], seed: number): T[] => {
  const a = [...arr];
  let s = seed + 1;
  const rnd = () => { s = (s * 1103515245 + 12345) & 0x7fffffff; return s / 0x7fffffff; };
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const Work = () => {
  const [active, setActive] = useState<string>("all");
  const [shuffleKey, setShuffleKey] = useState(0);
  const [lightbox, setLightbox] = useState<{ kind: "img" | "video"; val: string } | null>(null);
  const visible = portfolio.filter((c) => active === "all" || c.key === active);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
                onClick={() => { setActive(c.key); setShuffleKey((k) => k + 1); }}
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

            {cat.videos ? (
              <div className="mt-6 flex flex-wrap gap-2.5 md:gap-3">
                {shuffle<VideoItem>(cat.videos, shuffleKey).map((v) => {
                  const ar = v.ar ?? 16 / 9;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setLightbox({ kind: "video", val: v.id })}
                      style={{ flexGrow: ar, flexBasis: `${ar * 200}px` }}
                      className="group relative overflow-hidden rounded-lg border border-foreground/12 hover:border-cinnabar/70 transition-colors cursor-pointer"
                    >
                      <span className="block relative w-full" style={{ aspectRatio: String(ar) }}>
                        <img
                          src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                          alt={v.title}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                        />
                        <span className="absolute inset-0 grid place-items-center">
                          <span className="grid place-items-center w-11 h-11 rounded-full bg-background/55 border border-foreground/25 text-foreground/90 group-hover:text-cinnabar group-hover:border-cinnabar transition-colors">
                            <Play className="w-4 h-4 ml-0.5" />
                          </span>
                        </span>
                      </span>
                    </button>
                  );
                })}
                <i aria-hidden className="grow-[10] basis-0" />
              </div>
            ) : cat.gallery ? (
              <div className="mt-6 columns-2 md:columns-3 gap-2.5 md:gap-3">
                {shuffle<GalleryImage>(cat.gallery, shuffleKey).map((g, i) => (
                  <button
                    key={g.src}
                    type="button"
                    onClick={() => setLightbox({ kind: "img", val: g.src })}
                    className="group relative block w-full mb-2.5 md:mb-3 break-inside-avoid overflow-hidden rounded-lg border border-foreground/12 hover:border-cinnabar/70 transition-colors cursor-pointer"
                  >
                    <img
                      src={g.src}
                      alt={`${cat.title} — ${i + 1}`}
                      loading="lazy"
                      className="block w-full h-auto group-hover:opacity-90 transition-opacity"
                    />
                  </button>
                ))}
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

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center p-4 md:p-10"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="ปิด"
            className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 grid place-items-center rounded-full border border-foreground/30 text-foreground/80 hover:border-cinnabar hover:text-cinnabar transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          {lightbox.kind === "video" ? (
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[1100px] aspect-video rounded-lg overflow-hidden border border-foreground/15 bg-black"
            >
              <iframe
                src={`https://www.youtube.com/embed/${lightbox.val}?autoplay=1&rel=0`}
                title="Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          ) : (
            <img
              src={lightbox.val}
              alt=""
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-[88vh] w-auto h-auto object-contain rounded-lg border border-foreground/15"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Work;
