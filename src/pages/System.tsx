import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";
import SignalField from "@/components/SignalField";
import Picture from "@/components/Picture";
import { innovations } from "@/data/system";

const SITE_URL = "https://orions.agency";

const System = () => (
  <div>
    <SEO
      title="The System — VÆST · First Draft · Routte · ØRIONS"
      description="สามเครื่องมือของ ØRIONS ขับเคลื่อนด้วย VÆST — AI creative director ที่มีรสนิยม. VÆST (aesthetic intelligence), First Draft (เขียนบท+โปรดักชัน), Routte (AI trip planner). Where aesthetic meets algorithm."
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
          url: `${SITE_URL}/system/${it.slug}`,
        })),
      }}
    />

    {/* HERO */}
    <section className="relative overflow-hidden section-ink px-6 md:px-10 min-h-[70svh] flex flex-col justify-center">
      <SignalField fx={0.8} fy={0.34} seed={9} intensity={0.75}
        className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="relative z-10 max-w-[1400px] mx-auto w-full pt-32 md:pt-40 pb-20 md:pb-24">
        <Reveal>
          <SectionLabel label="The System · Three Instruments" />
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-10 font-serif font-medium text-[clamp(44px,8vw,120px)] leading-[0.98] tracking-[-0.025em] max-w-[16ch]">
            One universe, powered by <em className="text-cinnabar italic">VÆST.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p lang="th" className="mt-10 max-w-[720px] font-serif text-[20px] md:text-[26px] leading-[1.5] text-foreground/80 thai-wrap">
            สามเครื่องมือที่เราสร้างเอง — จากห้องคิดถึงหน้างานจริง: คิด · เขียน · ออกเดินทาง. ทุกตัวมีสมองเดียวกันคือ VÆST, ปัญญาที่มีรสนิยม. นี่คือฝั่ง <em>algorithm</em> ของ where aesthetic meets algorithm.
          </p>
        </Reveal>
      </div>
    </section>

    {/* PRODUCT GRID */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {innovations.map((it, i) => (
            <Reveal key={it.slug} delay={i * 0.07}>
              <Link
                to={`/system/${it.slug}`}
                viewTransition
                className="group relative flex flex-col h-full overflow-hidden border border-foreground/12 bg-surface-2 hover:border-foreground/35 transition-colors duration-500"
              >
                <div className="relative overflow-hidden bg-muted" style={{ aspectRatio: "4 / 3" }}>
                  <Picture
                    data={it.shot}
                    alt={`${it.name} — screenshot`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-top grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-[1.04] transition-[transform,filter] duration-700"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-background via-background/5 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500" />
                </div>
                <div className="flex-1 flex flex-col p-6 md:p-7">
                  <div className="flex items-center justify-between gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                    <span className="tabular-nums" style={{ color: it.accent }}>{it.n}</span>
                    <span>{it.role}</span>
                  </div>
                  <h2 className="mt-4 font-display text-[30px] md:text-[34px] font-medium tracking-[-0.02em] leading-[0.95]" style={{ color: it.accent }}>
                    {it.name}
                  </h2>
                  <p lang="th" className="mt-3 font-serif text-[15px] md:text-[16px] leading-[1.4] text-foreground/80 max-w-[26ch]">
                    {it.kind}
                  </p>
                  <span className="mt-auto pt-6 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-foreground/60 group-hover:text-foreground transition-colors">
                    ดูรายละเอียด
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <CTABand
      eyebrow="Work with us"
      title={<>อยากใช้ หรือสร้าง<em className="text-foreground">ไปด้วยกัน</em>?</>}
      subtitle="สนใจนำ VÆST · First Draft · Routte ไปใช้ หรืออยากร่วมสร้างอนาคตของงานครีเอทีฟ — คุยกับทีม ORIONS ได้เลย."
      primary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
      secondary={{ label: "อ่านแนวคิดของเรา", to: "/thinking" }}
      tone="ink"
    />
  </div>
);

export default System;
