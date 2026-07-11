import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";
import SignalField from "@/components/SignalField";
import Picture, { type PictureData } from "@/components/Picture";
import { innovations } from "@/data/system";
import shotVaest from "@/assets/system/vaest.png?as=picture";
import shotFirstdraft from "@/assets/system/firstdraft.png?as=picture";
import shotRoutte from "@/assets/system/routte.png?as=picture";
import shotSonar from "@/assets/system/sonar.png?as=picture";

const SITE_URL = "https://orions.agency";

const shots: Record<string, PictureData> = {
  "VÆST": shotVaest,
  "First Draft": shotFirstdraft,
  "Routte": shotRoutte,
  "SONAR": shotSonar,
};

const System = () => (
  <div>
    <SEO
      title="The System — VÆST · First Draft · Routte · SONAR · ØRIONS"
      description="สี่นวัตกรรมของ ØRIONS ขับเคลื่อนด้วย VÆST — AI creative director ที่มีรสนิยม. VÆST (aesthetic intelligence), First Draft (แพลตฟอร์มเขียนบท+โปรดักชัน), Routte (AI trip planner), SONAR (quantum creative CRM). Where aesthetic meets algorithm."
      path="/system"
      schema={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "ØRIONS — The System",
        itemListElement: innovations.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.name,
          description: it.kind,
          url: it.href,
        })),
      }}
    />

    {/* HERO */}
    <section className="relative overflow-hidden section-ink px-6 md:px-10 min-h-[80svh] flex flex-col justify-center">
      <SignalField fx={0.8} fy={0.34} seed={9} intensity={0.75}
        className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="relative z-10 max-w-[1400px] mx-auto w-full pt-32 md:pt-40 pb-20 md:pb-24">
        <Reveal>
          <SectionLabel label="The System · Four Innovations" />
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-10 font-serif font-medium text-[clamp(44px,8vw,120px)] leading-[0.98] tracking-[-0.025em] max-w-[16ch]">
            One universe, powered by <em className="text-cinnabar italic">VÆST.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p lang="th" className="mt-10 max-w-[720px] font-serif text-[20px] md:text-[26px] leading-[1.5] text-foreground/80 thai-wrap">
            สี่แพลตฟอร์มที่เราสร้างเอง — ทุกตัวมีสมองเดียวกันคือ VÆST, ปัญญาที่มีรสนิยม. นี่คือฝั่ง <em>algorithm</em> ของ where aesthetic meets algorithm.
          </p>
        </Reveal>
      </div>
    </section>

    {/* PRODUCTS */}
    {innovations.map((it, i) => (
      <section
        key={it.n}
        id={it.name.toLowerCase().replace(/[^a-z]/g, "")}
        className={`px-6 md:px-10 border-t border-foreground/15 scroll-mt-16 ${i % 2 === 1 ? "bg-surface" : ""}`}
      >
        <div className="max-w-[1400px] mx-auto py-24 md:py-40">
          {/* header */}
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-[10px] md:text-[11px] tracking-[0.24em] uppercase text-muted-foreground">
              <span className="tabular-nums" style={{ color: it.accent }}>{it.n}</span>
              <span>· {it.role}</span>
              {it.powered && <span className="text-foreground/45">· {it.powered}</span>}
            </div>
          </Reveal>
          <Reveal delay={0.04}>
            <h2 className="mt-5 font-display font-medium text-[clamp(52px,10vw,132px)] leading-[0.88] tracking-[-0.035em]" style={{ color: it.accent }}>
              {it.name}
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p lang="th" className="mt-5 font-serif text-[21px] md:text-[30px] leading-[1.2] tracking-[-0.01em] text-foreground/90 max-w-[26ch]">
              {it.kind}
            </p>
          </Reveal>

          {/* screenshot */}
          <Reveal delay={0.08}>
            <div className="mt-12 md:mt-16 overflow-hidden border border-foreground/15 bg-muted">
              <Picture data={shots[it.name]} alt={`${it.name} — screenshot`} loading="lazy" className="w-full h-auto block" />
            </div>
          </Reveal>

          {/* two columns: story + features/painpoints */}
          <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              {it.quote && (
                <Reveal>
                  <blockquote className="font-serif text-[26px] md:text-[40px] leading-[1.25] tracking-[-0.02em] text-foreground max-w-[18ch]">
                    “{it.quote}”
                  </blockquote>
                </Reveal>
              )}
              <Reveal delay={0.05}>
                <p lang="th" className={`font-thai thai-wrap text-[16px] md:text-[18px] leading-[1.85] text-muted-foreground max-w-[54ch] ${it.quote ? "mt-8" : ""}`}>
                  {it.body}
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <a href={it.href} target="_blank" rel="noreferrer" className="cta-link mt-10" style={{ color: it.accent }}>
                  <span>{it.hrefLabel}</span><ArrowUpRight className="w-4 h-4" />
                </a>
              </Reveal>
            </div>

            <div>
              {/* Features */}
              <div className="font-mono text-[10px] tracking-[0.24em] uppercase text-muted-foreground">— Features</div>
              <div className="mt-5 border-t border-foreground/12">
                {it.features.map((f, fi) => (
                  <Reveal key={f.k} delay={fi * 0.04}>
                    <div className="py-5 md:py-6 border-b border-foreground/12">
                      <h3 className="font-display text-[16px] md:text-[18px] font-medium tracking-[-0.01em]">{f.k}</h3>
                      <p lang="th" className="mt-1.5 font-thai thai-wrap text-[13px] md:text-[14px] leading-[1.75] text-muted-foreground max-w-[52ch]">{f.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Painpoints */}
              <div className="mt-10 font-mono text-[10px] tracking-[0.24em] uppercase text-muted-foreground">— ปัญหาที่แก้</div>
              <ul className="mt-5 space-y-3">
                {it.painpoints.map((p) => (
                  <Reveal key={p}>
                    <li className="flex gap-4">
                      <span aria-hidden className="mt-2 h-px w-5 shrink-0" style={{ background: it.accent }} />
                      <span lang="th" className="font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.75] text-foreground/85">{p}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>

          {/* CI at a glance */}
          <Reveal>
            <div className="mt-14 md:mt-16 pt-8 border-t border-foreground/12 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-muted-foreground">— CI</span>
                <div className="flex gap-1.5">
                  {it.ci.palette.map((c) => (
                    <span key={c} className="w-6 h-6 border border-foreground/15" style={{ background: c }} title={c} />
                  ))}
                </div>
              </div>
              <div className="font-mono text-[10px] md:text-[11px] tracking-[0.14em] uppercase text-foreground/70">{it.ci.type}</div>
              <div lang="th" className="font-thai text-[13px] leading-[1.7] text-muted-foreground max-w-[46ch]">{it.ci.note}</div>
            </div>
          </Reveal>
        </div>
      </section>
    ))}

    <CTABand
      eyebrow="Work with us"
      title={<>อยากใช้ หรือสร้าง<em className="text-cinnabar">ไปด้วยกัน</em>?</>}
      subtitle="สนใจนำ VÆST · First Draft · Routte · SONAR ไปใช้ หรืออยากร่วมสร้างอนาคตของงานครีเอทีฟ — คุยกับทีม ORIONS ได้เลย."
      primary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
      secondary={{ label: "อ่านแนวคิดของเรา", to: "/thinking" }}
      tone="ink"
    />
  </div>
);

export default System;
