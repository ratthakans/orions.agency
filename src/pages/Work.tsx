import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Play, ChevronLeft, ChevronRight, Layers, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import ClosingCTA from "@/components/ClosingCTA";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import { portfolio, type GalleryImage, type VideoItem } from "@/data/portfolio";
import type { SiteItem } from "@/data/portfolio";
import Picture, { type PictureData } from "@/components/Picture";

const SITE_URL = "https://orions.agency";

/** Company flagship showreel — featured at the top of /work. */
const SHOWREEL_ID = "308_jYAVkwI";

/** Justified tile — flex-grows by the image's real aspect (read on load), uncropped. */
const JustifiedTile = ({ data, alt, rowH, onClick }: { data: PictureData; alt: string; rowH: number; onClick: () => void }) => {
  const [ar, setAr] = useState(data.img.w / data.img.h || 1.4);
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ flexGrow: ar, flexBasis: `${ar * rowH}px` }}
      className="group relative block overflow-hidden rounded-none border border-foreground/12 hover:border-foreground/40 transition-colors cursor-pointer"
    >
      <Picture
        data={data}
        alt={alt}
        loading="lazy"
        onLoad={(e) => { const t = e.currentTarget; if (t.naturalHeight) setAr(t.naturalWidth / t.naturalHeight); }}
        className="block w-full h-auto group-hover:opacity-90 transition-opacity"
      />
    </button>
  );
};

const Work = () => {
  // Curated case studies are the default sales surface; "ทั้งหมด" still lets
  // visitors browse every craft board. Order is deterministic (SSG-safe).
  const [active, setActive] = useState<string>("cases");
  const [hoverVid, setHoverVid] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<
    | { kind: "img" | "video"; val: string; ar?: number }
    | { kind: "album"; images: string[]; i: number }
    | null
  >(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusRef = useRef<HTMLElement | null>(null);
  const albumStep = (d: number) =>
    setLightbox((lb) =>
      lb && lb.kind === "album" ? { ...lb, i: (lb.i + d + lb.images.length) % lb.images.length } : lb
    );
  const visible = portfolio.filter((c) => active === "all" || c.key === active);
  const lightboxOpen = lightbox !== null;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      else if (e.key === "ArrowRight") albumStep(1);
      else if (e.key === "ArrowLeft") albumStep(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock page scroll while the lightbox is open.
  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  // Move focus into the modal and restore it to the triggering tile on close.
  useEffect(() => {
    if (lightboxOpen) {
      lastFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      requestAnimationFrame(() => closeButtonRef.current?.focus());
      return;
    }
    lastFocusRef.current?.focus();
    lastFocusRef.current = null;
  }, [lightboxOpen]);

  return (
    <div>
      <SEO
        title="Work — Selected Work · ØRIONS"
        description="ผลงาน ØRIONS บูทีคครีเอทีฟเอเจนซี — brand film · art direction · key visuals · photography · music video และงานครีเอทีฟ จัดตามประเภทงานให้ดูง่าย."
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
              Portfolio,<br /><em className="text-foreground">by craft.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p lang="th" className="mt-8 font-thai thai-wrap text-[15px] md:text-[17px] text-muted-foreground max-w-[640px] leading-[1.8]">
              งานจริงของ ØRIONS จัดเป็นหมวดให้ดูง่าย — เลือกหมวดที่อยากดูได้จากด้านล่าง.
            </p>
          </Reveal>
          <div className="mt-9 flex flex-wrap gap-2" aria-label="เลือกประเภทผลงาน">
            {[...portfolio, { key: "all", chip: "ทั้งหมด" }].map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => setActive(c.key)}
                aria-pressed={active === c.key}
                className={`font-mono text-[11px] tracking-[0.08em] uppercase px-4 py-2.5 rounded-none border transition-colors ${
                  active === c.key
                    ? "bg-foreground border-foreground text-background"
                    : "border-foreground/20 text-foreground/75 hover:border-foreground/60 hover:text-foreground"
                }`}
              >
                {c.chip}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 01b · FEATURED SHOWREEL — company flagship reel */}
      <section className="px-6 md:px-10 border-t border-foreground/15">
        <div className="max-w-[1280px] mx-auto py-12 md:py-16">
          <SectionLabel label="Showreel 2026" />
          <Reveal delay={0.05}>
            <button
              type="button"
              aria-label="เล่นโชว์รีล ØRIONS 2026"
              onClick={() => setLightbox({ kind: "video", val: SHOWREEL_ID, ar: 16 / 9 })}
              onMouseEnter={() => setHoverVid(SHOWREEL_ID)}
              onMouseLeave={() => setHoverVid((h) => (h === SHOWREEL_ID ? null : h))}
              className="group relative mt-6 block w-full overflow-hidden rounded-none border border-foreground/15 hover:border-foreground/40 transition-colors cursor-pointer"
            >
              <span className="block relative w-full" style={{ aspectRatio: "16 / 9" }}>
                <img
                  src={`https://i.ytimg.com/vi/${SHOWREEL_ID}/maxresdefault.jpg`}
                  onError={(e) => { e.currentTarget.src = `https://i.ytimg.com/vi/${SHOWREEL_ID}/hqdefault.jpg`; }}
                  alt="ØRIONS — Showreel 2026"
                  width={1280}
                  height={720}
                  className="absolute inset-0 w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                />
                {hoverVid === SHOWREEL_ID && (
                  <iframe
                    src={`https://www.youtube.com/embed/${SHOWREEL_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${SHOWREEL_ID}&modestbranding=1&playsinline=1&rel=0`}
                    title="ØRIONS — Showreel 2026"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full pointer-events-none"
                  />
                )}
                <span className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
                <span className="absolute inset-0 grid place-items-center pointer-events-none">
                  <span className={`grid place-items-center w-16 h-16 md:w-20 md:h-20 rounded-none bg-background/55 border border-foreground/25 text-foreground/90 transition-opacity ${hoverVid === SHOWREEL_ID ? "opacity-0" : "group-hover:text-foreground group-hover:border-foreground/50"}`}>
                    <Play className="w-6 h-6 md:w-7 md:h-7 ml-0.5" />
                  </span>
                </span>
                <span className="absolute left-4 bottom-4 md:left-6 md:bottom-6 font-mono text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-foreground/85 pointer-events-none">
                  ØRIONS · Showreel
                </span>
              </span>
            </button>
          </Reveal>
        </div>
      </section>

      {/* 02 · CATEGORY BOARDS */}
      {visible.map((cat) => (
        <section key={cat.key} className="px-6 md:px-10 border-t border-foreground/15">
          <div className="max-w-[1280px] mx-auto py-16 md:py-20">
            <div className="flex items-end gap-4 border-b border-foreground/15 pb-3.5">
              <span className="font-serif font-medium text-[52px] md:text-[60px] leading-[0.78] tracking-[-0.03em] text-foreground/25">
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
              <div className={cat.cols ? `mt-6 grid ${({ 3: "grid-cols-2 sm:grid-cols-3", 4: "grid-cols-2 sm:grid-cols-4", 5: "grid-cols-2 sm:grid-cols-5", 6: "grid-cols-3 sm:grid-cols-6" } as Record<number, string>)[cat.cols] || "grid-cols-2 sm:grid-cols-4"} gap-2.5 md:gap-3` : "mt-6 flex flex-wrap gap-2.5 md:gap-3"}>
                {cat.videos.map((v: VideoItem) => {
                  const ar = v.ar ?? 16 / 9;
                  const gridAr = (cat.videos?.[0]?.ar ?? 2) < 1 ? "9 / 16" : "16 / 9";
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setLightbox({ kind: "video", val: v.id, ar })}
                      onMouseEnter={() => setHoverVid(v.id)}
                      onMouseLeave={() => setHoverVid((h) => (h === v.id ? null : h))}
                      style={cat.cols ? undefined : { flexGrow: ar, flexBasis: `${ar * (cat.base ?? (ar < 1 ? 300 : 150))}px` }}
                      className="group relative overflow-hidden rounded-none border border-foreground/12 hover:border-foreground/40 transition-colors cursor-pointer"
                    >
                      <span className="block relative w-full" style={{ aspectRatio: cat.cols ? gridAr : String(ar) }}>
                        <img
                          src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                          alt={v.title}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                        />
                        {hoverVid === v.id && (
                          <iframe
                            src={`https://www.youtube.com/embed/${v.id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${v.id}&modestbranding=1&playsinline=1&rel=0`}
                            title={v.title}
                            tabIndex={-1}
                            aria-hidden="true"
                            className="absolute inset-0 w-full h-full pointer-events-none"
                          />
                        )}
                        <span className="absolute inset-0 grid place-items-center pointer-events-none">
                          <span className={`grid place-items-center w-11 h-11 rounded-none bg-background/55 border border-foreground/25 text-foreground/90 transition-opacity ${hoverVid === v.id ? "opacity-0" : "group-hover:text-foreground group-hover:border-foreground/50"}`}>
                            <Play className="w-4 h-4 ml-0.5" />
                          </span>
                        </span>
                      </span>
                    </button>
                  );
                })}
                {!cat.cols && <i aria-hidden className="grow-[10] basis-0" />}
              </div>
            ) : cat.albums ? (
              <div className="mt-8 space-y-10 md:space-y-12">
                {cat.albums.map((album, ai) => {
                  const imgs = album.images;
                  return (
                    <div key={ai}>
                      <div className="mb-3 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
                        <Layers className="w-3.5 h-3.5 text-foreground" /> {imgs.length} รูป
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        {imgs.map((s, i) => (
                          <JustifiedTile
                            key={i}
                            data={s}
                            alt={`Album ${ai + 1} — ${i + 1}`}
                            rowH={230}
                            onClick={() => setLightbox({ kind: "album", images: imgs.map((p) => p.img.src), i })}
                          />
                        ))}
                        <i aria-hidden className="grow-[10] basis-0" />
                      </div>
                    </div>
                  );
                })}
                {cat.gallery && (
                  <div>
                    <div className="mb-3 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
                      <Layers className="w-3.5 h-3.5 text-foreground" /> โพสต์เดี่ยว
                    </div>
                    <div className="columns-2 md:columns-4 gap-2.5 md:gap-3">
                      {cat.gallery.map((g: GalleryImage, i) => (
                        <button
                          key={g.src.img.src}
                          type="button"
                          onClick={() => setLightbox({ kind: "img", val: g.src.img.src })}
                          className="group relative block w-full mb-2.5 md:mb-3 break-inside-avoid overflow-hidden rounded-none border border-foreground/12 hover:border-foreground/40 transition-colors cursor-pointer"
                        >
                          <Picture
                            data={g.src}
                            alt={`${cat.title} — โพสต์ ${i + 1}`}
                            loading="lazy"
                            className="block w-full h-auto group-hover:opacity-90 transition-opacity"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : cat.gallery ? (
              <div className="mt-6 columns-2 md:columns-3 gap-2.5 md:gap-3">
                {shuffle<GalleryImage>(cat.gallery, shuffleKey).map((g, i) => (
                  <button
                    key={g.src.img.src}
                    type="button"
                    onClick={() => setLightbox({ kind: "img", val: g.src.img.src })}
                    className="group relative block w-full mb-2.5 md:mb-3 break-inside-avoid overflow-hidden rounded-none border border-foreground/12 hover:border-foreground/40 transition-colors cursor-pointer"
                  >
                    <Picture
                      data={g.src}
                      alt={`${cat.title} — ${i + 1}`}
                      loading="lazy"
                      className="block w-full h-auto group-hover:opacity-90 transition-opacity"
                    />
                  </button>
                ))}
              </div>
            ) : cat.sites ? (
              <div className="mt-8">
                <p lang="th" className="font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.8] text-muted-foreground max-w-[560px]">
                  เว็บไซต์และแอปพลิเคชันที่เราออกแบบและส่งมอบจริง — กดเพื่อเปิดของจริง.
                </p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {cat.sites.map((s, i) => (
                    <a
                      key={s.url}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`group relative flex flex-col justify-between gap-8 rounded-none border border-foreground/12 bg-foreground/[0.02] p-7 md:p-9 min-h-[196px] transition-colors hover:border-foreground/35 hover:bg-foreground/[0.04] ${
                        i === 0 ? "md:col-span-2" : ""
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                          {cat.n}.{String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="meta-chip">{s.kind}</span>
                      </div>
                      <div>
                        <div className="flex items-end justify-between gap-6">
                          <h3 lang={s.th ? "th" : undefined} className={i === 0 ? "h-display-md" : "h-display-sm"}>
                            {s.name}
                          </h3>
                          <ArrowUpRight className="w-6 h-6 md:w-7 md:h-7 shrink-0 text-foreground/45 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground" />
                        </div>
                        <p lang="th" className="mt-3 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.75] text-muted-foreground max-w-[52ch]">
                          {s.note}
                        </p>
                        <div className="mt-5 font-mono text-[11px] tracking-[0.14em] uppercase text-foreground/60">
                          {s.domain} <span className="text-muted-foreground">· {s.niche}</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ) : cat.cases ? (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {cat.cases.map((cs) => (
                  <Link
                    key={cs.slug}
                    to={`/work/${cs.slug}`}
                    className="group relative block overflow-hidden rounded-none border border-foreground/12 bg-foreground/[0.04] aspect-[4/5] hover:border-foreground/35 transition-colors"
                  >
                    <Picture
                      data={cs.cover}
                      alt={cs.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-[1.04] transition-[transform,filter] duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
                    <div className="absolute left-0 right-0 bottom-0 p-4 flex flex-col gap-1">
                      <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-foreground">{cs.niche} · {cs.year}</span>
                      <span lang="th" className="font-display text-[17px] md:text-[19px] font-medium tracking-[-0.01em] leading-tight">{cs.title}</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ))}

      <ClosingCTA
        title={<>โจทย์ของคุณมี <em className="text-foreground">เงื่อนไข</em> แบบไหน?</>}
        description="คุยฟรี 45 นาที ไม่มีข้อผูกมัด — เล่าโจทย์และเงื่อนไขมา เราช่วยมองว่าจะ refine มันยังไง."
        ctas={[
          { label: "เริ่มต้นบทสนทนา", to: "/contact" },
          { label: "อ่านแนวคิดของเรา", to: "/thinking", variant: "ghost" },
        ]}
      />

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center p-4 md:p-10"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="ตัวแสดงผลงาน"
        >
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="ปิด"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 grid place-items-center rounded-none border border-foreground/30 text-foreground/80 hover:border-foreground/60 hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          {lightbox.kind === "album" ? (
            <>
              <button
                type="button"
                aria-label="ก่อนหน้า"
                onClick={(e) => { e.stopPropagation(); albumStep(-1); }}
                className="absolute left-3 md:left-6 w-11 h-11 grid place-items-center rounded-none border border-foreground/30 text-foreground/80 hover:border-foreground/60 hover:text-foreground transition-colors bg-background/40"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <img
                src={lightbox.images[lightbox.i]}
                alt=""
                onClick={(e) => e.stopPropagation()}
                className="max-w-full max-h-[86vh] w-auto h-auto object-contain rounded-none border border-foreground/15"
              />
              <button
                type="button"
                aria-label="ถัดไป"
                onClick={(e) => { e.stopPropagation(); albumStep(1); }}
                className="absolute right-3 md:right-6 w-11 h-11 grid place-items-center rounded-none border border-foreground/30 text-foreground/80 hover:border-foreground/60 hover:text-foreground transition-colors bg-background/40"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <span className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-[11px] tracking-[0.1em] text-foreground/70 bg-background/50 border border-foreground/15 rounded-none px-3 py-1">
                {lightbox.i + 1} / {lightbox.images.length}
              </span>
            </>
          ) : lightbox.kind === "video" ? (
            <div
              onClick={(e) => e.stopPropagation()}
              style={{ aspectRatio: String(lightbox.ar ?? 16 / 9) }}
              className={`rounded-none overflow-hidden border border-foreground/15 bg-black ${
                (lightbox.ar ?? 16 / 9) < 1 ? "h-[86vh] max-w-[92vw]" : "w-full max-w-[1100px]"
              }`}
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
              className="max-w-full max-h-[88vh] w-auto h-auto object-contain rounded-none border border-foreground/15"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Work;
