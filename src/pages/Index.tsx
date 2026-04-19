import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import SEO from "@/components/SEO";
import Typewriter from "@/components/Typewriter";

const pressures = [
  { mark: "—", label: "ATTENTION", title: "Attention is brutal", body: "ผู้ชมเลื่อนเร็วกว่าที่ทีมคุณคิดเสมอ งานต้องชัดในวินาทีแรก" },
  { mark: "—", label: "COST",      title: "Media cost climbs", body: "ค่าโฆษณาขึ้นทุกปี ถ้าไม่มีกลยุทธ์ที่คม งบประมาณก็ระเหย" },
  { mark: "—", label: "NOISE",     title: "Noise drowns craft", body: "งานเฉลี่ยล้นฟีด มีแต่ไอเดียที่ 'ใช้ได้จริง' เท่านั้นที่อยู่รอด" },
];

const capabilities = ["Strategy", "Communication", "Social", "Production"];

const featured = [
  { name: "HONGMOVE", category: "APPLIED UTILITY", body: "ระบบสื่อสาร Seamless สำหรับ Taxi VIP", impact: "+25%", impactLabel: "CONVERSION CLARITY", size: "lg" },
  { name: "RTAF",     category: "APPLIED IMAGE",   body: "ปรับโฉมภาพลักษณ์ผ่าน High-end Production", impact: "2X", impactLabel: "ENGAGEMENT", size: "sm" },
  { name: "KHAO YAI", category: "APPLIED AESTHETIC", body: "เปลี่ยนสนามกอล์ฟดั้งเดิมสู่ประสบการณ์พรีเมียม", impact: "30%", impactLabel: "DECISION SPEED", size: "sm" },
];

const Index = () => (
  <div id="top">
    <SEO title="ØRIONS — Applied Creative Agency" description="Practical. Bold. Done. Creative Engineering from Bangkok." path="/" />

    {/* HERO */}
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
      <div className="liquid-blob" aria-hidden />
      <div className="relative z-10 text-center w-full max-w-[1400px] mx-auto pt-20">
        <Reveal>
          <div className="label-mono text-grad-soft mb-8">EST. BANGKOK · 2024</div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-brand text-[16vw] md:text-[110px] leading-[0.88] tracking-[-0.05em] text-foreground">
            ØRIONS
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className="h-px w-16 divider-grad" />
            <span className="label-mono text-foreground">APPLIED CREATIVE AGENCY</span>
            <span className="h-px w-16 divider-grad" />
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <Typewriter
            text="Practical. Bold. Done."
            className="mt-8 font-thai text-[18px] md:text-[22px] font-light text-foreground/90"
          />
        </Reveal>
      </div>

      <div className="absolute bottom-6 left-6 md:left-12 label-mono text-muted-foreground z-10">orions.agency</div>
      <a href="#stagnation" className="absolute bottom-6 right-6 md:right-12 flex items-center gap-2 label-mono text-muted-foreground hover:text-foreground transition-colors z-10">
        Scroll <ChevronDown className="w-4 h-4 animate-scroll-bounce" />
      </a>
    </section>

    {/* MARQUEE */}
    <section className="border-y border-border py-6 overflow-hidden">
      <div className="marquee">
        {[0, 1].map((k) => (
          <div key={k} className="marquee-track" aria-hidden={k === 1}>
            {["STRATEGY", "COMMUNICATION", "SOCIAL", "PRODUCTION", "BRAND FILM", "APPLIED CREATIVE", "BANGKOK ↔ WORLD"].map((w, i) => (
              <span key={i} className="font-display text-[28px] md:text-[32px] leading-none tracking-[-0.02em] flex items-center gap-16">
                <span className={i % 2 ? "text-grad" : "text-foreground/80"}>{w}</span>
                <span className="text-muted-foreground/40">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>

    {/* DIAGNOSIS — quote + 3 editorial pressures combined */}
    <section id="stagnation" className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="flex justify-center">
            <SectionLabel number="01" label="THE DIAGNOSIS" />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <blockquote className="mt-12 text-center max-w-[920px] mx-auto">
            <p className="font-thai text-[26px] md:text-[36px] leading-[1.4] font-medium">
              <span className="text-primary">"เมื่อวิธีเดิมมาถึง</span> <span className="text-grad font-bold">ทางตัน</span><br />
              <span className="text-primary">ไอเดียที่</span> <span className="text-grad">'ประยุกต์ได้จริง'</span><br />
              <span>จึงเป็นคำตอบ"</span>
            </p>
          </blockquote>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 mx-auto h-px w-24 divider-grad" />
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-8 mx-auto max-w-[620px] text-center body-m font-thai text-primary">
            หลายแบรนด์ติดอยู่ใน <span className="text-grad-soft">Vicious Cycle</span><br />
            จ่ายแพงขึ้น แต่ผลลัพธ์เท่าเดิม เพราะกติกาของโลกเปลี่ยนไปแล้ว
          </p>
        </Reveal>

        {/* 3 editorial pressures (no fake stats) */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {pressures.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.1}>
              <div className="border-t border-border pt-6">
                <span className="font-display text-grad text-[28px] leading-none">{p.mark}</span>
                <div className="mt-5 label-mono text-muted-foreground">{p.label}</div>
                <h3 className="mt-3 display-s font-thai">{p.title}</h3>
                <p className="mt-3 body-m text-muted-foreground font-thai max-w-[300px]">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* WHO IS ØRIONS */}
    <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border bg-surface">
      <div className="max-w-[1100px] mx-auto">
        <Reveal><SectionLabel number="02" label="WHO IS ØRIONS" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 display-l">
            Creative Engineering<br />from Bangkok.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-14 inline-block border-grad px-8 py-6 relative">
            <div className="display-s">
              <span className="text-grad">BANGKOK ENERGY</span>
              <span className="text-muted-foreground mx-4">×</span>
              <span className="text-grad">LOGICAL STANDARD</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-12 max-w-[760px] body-l font-thai">
            เราคือนักแก้ปัญหาที่นำความรวดเร็วแบบ Bangkok Energy มาผสานกับ Logical Standard ระดับสากล
          </p>
          <p className="mt-6 max-w-[760px] body-m text-muted-foreground font-thai">
            เราเชื่อมช่องว่างระหว่าง 'ไอเดียที่ดูดี' กับ 'ผลลัพธ์ทางธุรกิจที่วัดผลได้' เพื่อลดงบประมาณที่สูญเปล่าและสร้างผลกระทบที่แท้จริงให้กับแบรนด์
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <Link to="/about" className="mt-10 inline-flex items-center gap-3 label-mono text-foreground border-b border-border hover:border-foreground pb-1">
            More about us <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>

    {/* CAPABILITIES STRIP */}
    <section className="px-6 md:px-12 py-14 border-t border-border">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="label-mono text-muted-foreground">CAPABILITIES</div>
        <div className="flex flex-wrap gap-3">
          {capabilities.map((c) => (
            <Link key={c} to="/services" className="label-mono px-4 py-2 border border-border hover:border-foreground transition-colors">
              {c}
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* FEATURED WORK PREVIEW — asymmetric grid */}
    <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <Reveal><SectionLabel number="03" label="FEATURED WORK" /></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 display-m">Applied Creative in action.</h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link to="/work" className="label-mono text-muted-foreground hover:text-foreground inline-flex items-center gap-2">
              All Work <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large featured */}
          <Reveal>
            <article className="md:col-span-2 group bg-background border border-border ring-grad-hover transition-all duration-300 h-full flex flex-col">
              <div className="aspect-[16/9] bg-grad-radial relative overflow-hidden after:absolute after:inset-0 after:bg-background/55 group-hover:after:bg-background/30 after:transition-colors flex items-end p-8 md:p-10">
                <div className="relative z-10">
                  <div className="label-mono text-grad-soft">{featured[0].category}</div>
                  <h3 className="mt-3 display-l text-foreground">{featured[0].name}</h3>
                </div>
              </div>
              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <p className="body-l text-muted-foreground font-thai max-w-[520px]">{featured[0].body}</p>
                <div className="mt-8 pt-8 border-t border-border flex items-end justify-between gap-6">
                  <div>
                    <div className="font-display text-grad text-[44px] leading-none">{featured[0].impact}</div>
                    <div className="mt-2 label-mono text-muted-foreground">{featured[0].impactLabel}</div>
                  </div>
                  <Link to="/work" className="label-mono text-muted-foreground hover:text-foreground inline-flex items-center gap-2">
                    Case <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Two stacked smaller */}
          <div className="md:col-span-1 flex flex-col gap-6">
            {featured.slice(1).map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <article className="group bg-background border border-border ring-grad-hover transition-all duration-300">
                  <div className="aspect-[16/10] bg-grad-radial relative overflow-hidden after:absolute after:inset-0 after:bg-background/55 group-hover:after:bg-background/35 after:transition-colors flex items-end p-5">
                    <div className="relative z-10">
                      <div className="label-mono text-grad-soft">{p.category}</div>
                      <h3 className="mt-2 display-s text-foreground">{p.name}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="body-m text-muted-foreground font-thai">{p.body}</p>
                    <div className="mt-4 pt-4 border-t border-border flex items-baseline gap-3">
                      <span className="font-display text-grad text-[24px] leading-none">{p.impact}</span>
                      <span className="label-mono text-muted-foreground">{p.impactLabel}</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionLabel number="04" label="LET'S WORK" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-10 display-l">
            Let's make something<br /><span className="text-grad">that works.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-[620px] body-l text-muted-foreground font-thai">
            Book a 30-min Clarity Call. เราจะชี้จุดตันและทางออก โดยไม่มีค่าใช้จ่าย
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-3 bg-grad text-background px-7 py-4 label-mono hover:opacity-90 transition-opacity">
              Book a Clarity Call <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-3 border border-border px-7 py-4 label-mono hover:border-foreground transition-colors">
              Explore Services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);

export default Index;
