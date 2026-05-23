import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";

const indexLinks = [
  { n: "01", to: "/manifesto",    title: "Manifesto",   th: "ทำไม Generic Content ถึงตายแล้ว — และเราเชื่ออะไรแทน" },
  { n: "02", to: "/approach",     title: "Approach",    th: "Three pillars · Data-refined creative · 6:3:1 system" },
  { n: "03", to: "/services",     title: "Services",    th: "3 ระดับ · 1 เป้าหมาย — แพ็กเกจที่ออกแบบรอบ Content Loop" },
  { n: "04", to: "/health-check", title: "Health Check",th: "12 คำถาม · 2 นาที — รู้ว่าแบรนด์คุณ refined แค่ไหน" },
];

const marquee = ["Branding", "Social Media", "Creative Production", "Data-Refined", "Brand Journey"];

const Index = () => (
  <div>
    <SEO
      title="ØRIONS — Stories, refined."
      description="Boutique creative studio in Bangkok. We refine stories through data, craft, and strategy."
      path="/"
    />

    {/* HERO */}
    <section className="relative min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col justify-center items-center text-center px-6 md:px-10 pt-32 pb-20 max-w-[1400px] mx-auto w-full">
        <Reveal>
          <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
            Boutique Creative Studio · Est. 2026
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-10 font-serif h-display-xl leading-[0.92] whitespace-nowrap">
            Stories, <em className="italic text-cinnabar">refined.</em>
          </h1>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-12 max-w-[640px] mx-auto font-thai text-[17px] md:text-[20px] leading-[1.55] text-muted-foreground">
            เราไม่ผลิตให้ครบจำนวน เราไม่ตามเทรนด์ที่อัลกอริทึมเขียนบท —
            เราตัดส่วนเกิน สกัดเนื้อแท้ และกลั่นกรองเรื่องราว เพื่อให้แบรนด์คุณ ถึงคนที่ใช่
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-6 border-t border-foreground/15 pt-8 max-w-[860px] mx-auto">
            {[
              { en: "6 : 3 : 1",            sub: "Refined Content System" },
              { en: "Data-Refined",         sub: "Creative Process" },
              { en: "Industry Exclusivity", sub: "For Elite clients" },
            ].map((m) => (
              <div key={m.en}>
                <div className="font-serif text-[22px] md:text-[26px] tracking-[-0.015em]">{m.en}</div>
                <div className="mt-1 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{m.sub}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Marquee */}
      <div className="border-y border-foreground/20 py-6 overflow-hidden whitespace-nowrap">
        <div className="inline-flex gap-16 animate-[marquee_38s_linear_infinite] will-change-transform">
          {[...marquee, ...marquee, ...marquee, ...marquee].map((m, i) => (
            <span key={i} className="font-serif text-[22px] md:text-[34px] tracking-[-0.01em] inline-flex items-center gap-16">
              {m} <span className="text-cinnabar">◐</span>
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* INDEX of pages */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground flex items-center gap-3">
            <span className="block w-6 h-px bg-cinnabar" />
            Index
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-md max-w-[20ch]">
            Four ways in. <em className="italic text-cinnabar">One studio.</em>
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-foreground/20">
          {indexLinks.map((l, i) => (
            <Reveal key={l.to} delay={i * 0.06}>
              <Link
                to={l.to}
                className="group block border-b border-foreground/20 py-8 md:py-10 grid grid-cols-12 gap-4 items-baseline transition-colors hover:bg-foreground/[0.02]"
              >
                <span className="col-span-2 md:col-span-1 font-mono text-[11px] tracking-[0.2em] text-cinnabar font-semibold">{l.n}</span>
                <span className="col-span-10 md:col-span-4 font-serif text-[32px] md:text-[48px] tracking-[-0.02em] leading-[1] group-hover:italic group-hover:text-cinnabar transition-all">
                  {l.title}
                </span>
                <span className="col-span-12 md:col-span-6 font-thai text-[14px] md:text-[15px] leading-[1.65] text-muted-foreground">
                  {l.th}
                </span>
                <span className="col-span-12 md:col-span-1 md:justify-self-end opacity-50 group-hover:opacity-100 group-hover:text-cinnabar transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 flex flex-wrap items-center gap-5">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-cinnabar text-background px-7 py-4 btn-label hover:bg-foreground transition-colors duration-300"
            >
              <span>Start a project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:hello@orions.agency"
              className="group inline-flex items-center gap-2 btn-label border-b border-foreground pb-1 hover:text-cinnabar hover:border-cinnabar transition-colors"
            >
              hello@orions.agency →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);

export default Index;