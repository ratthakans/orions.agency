import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import SectionHeader from "@/components/SectionHeader";
import SEO from "@/components/SEO";
import TypingLoop from "@/components/TypingLoop";
import heroStreet from "@/assets/hero-street.jpg";
import whoOrionsTeam from "@/assets/who-orions-team.jpg";
import approachRunning from "@/assets/approach-running.jpg";
import approachTaxi from "@/assets/approach-taxi.jpg";
import whatVortex from "@/assets/what-vortex.jpg";
import whatSkater from "@/assets/what-skater.jpg";
import whatWindow from "@/assets/what-window.jpg";

const pressures = [
  { stat: 1.7, suffix: "s", decimals: 1, label: "ATTENTION SPAN", body: "คุณมีเวลาไม่ถึง 2 วินาทีในการหยุดลูกค้าก่อนจะถูกปัดทิ้ง" },
  { stat: 41, prefix: "", suffix: "%", decimals: 0, label: "DIGITAL INFLATION", body: "ค่าโฆษณาแพงขึ้นเกือบเท่าตัว แต่ประสิทธิภาพกลับสวนทาง" },
  { stat: 4.6, suffix: "×", decimals: 1, label: "DIGITAL WASTE", body: "ขยะดิจิทัลล้นโลก จนงานที่ไม่มีคุณภาพถูกกลบหายไปหมด" },
];

const whatWeDo = [
  { n: "01", img: whatSkater, title: "วิเคราะห์ธุรกิจชัด", body: "ว่าคือใคร และควรยืนตรงไหน" },
  { n: "02", img: whatVortex, title: "เปลี่ยนการสื่อสาร", body: "ให้น่าสนใจ พอที่จะถูกเห็นและถูกจำ" },
  { n: "03", img: whatWindow, title: "ให้ทุกจุดสัมผัสลูกค้า", body: "แปลเป็นผลลัพธ์ของธุรกิจ" },
];

const Index = () => (
  <div id="top">
    <SEO title="ØRIONS — Sharper ideas. Clearer direction." description="Idea-led Creative Agency. We help brands cut through the noise with sharper ideas and clearer direction." path="/" />

    {/* HERO — Editorial cover */}
    <section className="relative px-6 md:px-10 min-h-screen flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center justify-center">
        <Reveal delay={0.05}>
          <h1 className="font-brand text-[18vw] md:text-[14vw] leading-[0.85] tracking-[-0.05em] text-foreground">
            ØRIONS
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 md:mt-10 index-badge font-bold">APPLIED CREATIVE AGENCY</p>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-4 font-display text-[20px] md:text-[28px] leading-[1.1] tracking-[-0.02em] min-h-[1.2em]">
            <TypingLoop text="PRACTICAL. BOLD. DONE." />
          </p>
        </Reveal>
      </div>

      <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="index-badge font-medium">SCROLL</span>
        <span className="block w-px h-10 bg-foreground/40 animate-pulse" />
      </div>
    </section>

    {/* MARQUEE */}
    <section className="border-y border-foreground py-3 overflow-hidden">
      <div className="marquee">
        {[0, 1].map((k) => (
          <div key={k} className="marquee-track" aria-hidden={k === 1}>
            {["BRAND DIRECTION", "CREATIVE DIRECTION", "DIGITAL EXPERIENCE", "FILM & PRODUCTION", "BANGKOK ↔ WORLD"].map((w, i) => (
              <span key={i} className="font-display text-[14px] md:text-[16px] leading-none tracking-[0.04em] flex items-center gap-12">
                <span>{w}</span>
                <span className="text-muted-foreground">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>

    {/* THE VICIOUS CYCLE */}
    <section className="relative px-6 md:px-10 min-h-screen flex items-center py-20 md:py-28 bg-surface border-y border-foreground overflow-hidden">

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 relative z-10">
        {/* Left */}
        <div className="md:col-span-5 md:sticky md:top-32 md:self-start">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="block w-8 h-px bg-foreground" />
              <p className="index-badge text-foreground">THE VICIOUS CYCLE</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-8 md:mt-10 font-thai text-[32px] md:text-[56px] leading-[1.2] tracking-[-0.02em] font-bold text-foreground">
              หลายธุรกิจติดอยู่ใน
              <br />
              <span className="font-extrabold">"วงจรอุบาท"</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 md:mt-8 font-thai text-[18px] md:text-[22px] leading-[1.55] text-muted-foreground max-w-[460px]">
              ทำงานหนักขึ้น จ่ายแพงขึ้น แต่ได้ผลลัพธ์เท่าเดิม
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 md:mt-12 hairline w-16" />
          </Reveal>
        </div>

        {/* Right */}
        <div className="md:col-span-7 flex flex-col">
          {pressures.map((p, i) => (
            <Reveal key={p.label} delay={0.2 + i * 0.1}>
              <div className={`group relative py-8 md:py-10 ${i === 0 ? "border-t" : ""} border-b border-foreground transition-colors duration-500 hover:bg-foreground hover:text-background cursor-default overflow-hidden`}>
                <div className="absolute top-3 right-3 md:top-4 md:right-4 font-mono text-[11px] tracking-[0.08em] text-muted-foreground transition-colors duration-500 group-hover:text-background/60">
                  0{i + 1} / 03
                </div>

                <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5" />
                </div>

                <div className="grid grid-cols-12 gap-4 md:gap-6 items-baseline px-2 md:px-4">
                  <div className="col-span-12 md:col-span-4">
                    <CountUp to={p.stat} prefix={p.prefix} suffix={p.suffix} decimals={p.decimals}
                      className="font-display text-[64px] md:text-[88px] leading-[0.9] tracking-[-0.04em] block transition-transform duration-500 group-hover:-translate-y-1" />
                  </div>
                  <div className="col-span-12 md:col-span-8">
                    <div className="index-badge text-foreground transition-colors duration-500 group-hover:text-background">{p.label}</div>
                    <p className="mt-4 text-[14px] md:text-[15px] leading-[1.65] text-muted-foreground font-thai transition-colors duration-500 group-hover:text-background/80">
                      {p.body}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* WHO IS ØRIONS */}
    <section className="px-6 md:px-10 py-20 md:py-32">
      <SectionHeader left="04 — WHO IS ØRIONS" right="creative agency from bangkok" />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div className="md:col-span-7 order-2 md:order-1">
          <div className="aspect-[4/5] overflow-hidden bg-surface-2">
            <img src={whoOrionsTeam} alt="ØRIONS team standing on a Bangkok rooftop with the city skyline" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="md:col-span-5 order-1 md:order-2 space-y-8">
          <Reveal>
            <h2 className="font-display text-[36px] md:text-[56px] leading-[0.95] tracking-[-0.03em]">
              Creative Agency<br />from Bangkok.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="hairline w-16" />
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-[16px] md:text-[18px] leading-[1.75] font-thai text-muted-foreground">
              เราคือนักแก้ปัญหาที่นำความรวดเร็วแบบ <span className="font-display normal-case font-bold text-foreground">Bangkok Energy</span> มาผสานกับ <span className="font-display normal-case font-bold text-foreground">Logical Standard</span> ระดับสากล เราเชื่อมช่องว่างระหว่าง <span className="text-foreground font-medium">"ไอเดียที่ดูดี"</span> กับ <span className="text-foreground font-medium">"ผลลัพธ์ทางธุรกิจที่วัดผลได้"</span> เพื่อลดงบประมาณที่สูญเปล่าและสร้างผลกระทบที่แท้จริงให้กับแบรนด์
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    {/* WHAT WE DO */}
    <section className="px-6 md:px-10 py-20 md:py-32 bg-surface border-y border-foreground">
      <SectionHeader left="05 — WHAT WE DO" right="three moves, one outcome" />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground border border-foreground">
        {whatWeDo.map((w, i) => (
          <Reveal key={w.n} delay={i * 0.1}>
            <article className="bg-background h-full flex flex-col">
              <div className="aspect-[4/3] overflow-hidden bg-surface-2">
                <img src={w.img} alt={w.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 md:p-8 flex-1">
                <div className="font-display text-[36px] md:text-[44px] leading-none">{w.n}</div>
                <h3 className="mt-6 font-display text-[18px] md:text-[20px] leading-[1.2] font-thai">{w.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-muted-foreground font-thai">{w.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { t: "BRAND DIRECTION", items: ["Brand Narrative", "Positioning", "Messaging", "Brand Voice", "Campaign Planning"] },
          { t: "CREATIVE DIRECTION", items: ["Campaign Concepts", "Content Systems", "Copywriting", "Creative Direction", "Film & Production"] },
          { t: "DIGITAL EXPERIENCE", items: ["Website Direction", "UX/UI", "Landing Pages", "Experience Design", "Touchpoint Design"] },
        ].map((g, i) => (
          <Reveal key={g.t} delay={i * 0.05}>
            <div className="border-t border-foreground pt-4">
              <div className="index-badge font-bold">{g.t}</div>
              <ul className="mt-4 space-y-2 text-[14px] font-thai text-muted-foreground">
                {g.items.map((item) => (
                  <li key={item} className="flex gap-2"><span>·</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* SIGNATURE APPROACH 01 */}
    <section className="px-6 md:px-10 py-20 md:py-32">
      <SectionHeader left="06 — SIGNATURE APPROACHES" right="↗" />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-4">
          <Reveal>
            <div className="font-display text-[24px]">01</div>
            <h2 className="mt-2 font-display text-[44px] md:text-[64px] leading-[0.9] tracking-[-0.03em]">
              Creative<br />Unlock
            </h2>
            <p className="mt-8 text-[15px] leading-[1.65] text-muted-foreground font-thai max-w-[320px]">
              ปลดล็อกสิ่งที่ธุรกิจมีอยู่แล้ว แต่ยังสื่อสารออกมาได้ไม่เต็มที่
            </p>
            <ul className="mt-6 space-y-2 text-[14px] font-thai">
              <li className="flex gap-2"><span>·</span><span>message ชัดขึ้น</span></li>
              <li className="flex gap-2"><span>·</span><span>flow ดีขึ้น</span></li>
              <li className="flex gap-2"><span>·</span><span>value ถูกมองเห็นมากขึ้น</span></li>
            </ul>
          </Reveal>
        </div>
        <div className="md:col-span-8">
          <Reveal delay={0.1}>
            <div className="aspect-[16/10] overflow-hidden bg-surface-2">
              <img src={approachRunning} alt="People running through a field at sunset" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-3 gap-4 md:gap-8">
            {[
              { v: "+30%", l: "conversion clarity" },
              { v: "−25%", l: "digital waste" },
              { v: "+40%", l: "action rate" },
            ].map((s, i) => (
              <Reveal key={s.l} delay={0.15 + i * 0.05}>
                <div className="border-t border-foreground pt-4">
                  <div className="font-display text-[28px] md:text-[44px] leading-none tracking-[-0.03em]">{s.v}</div>
                  <div className="mt-2 text-[12px] font-thai text-muted-foreground">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* SIGNATURE APPROACH 02 */}
    <section className="px-6 md:px-10 py-20 md:py-32 bg-surface border-y border-foreground">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-8 order-2 md:order-1">
          <Reveal>
            <div className="aspect-[16/10] overflow-hidden bg-surface-2">
              <img src={approachTaxi} alt="A blurred motion shot of a city street with taxis" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-3 gap-4 md:gap-8">
            {[
              { v: "3×", l: "engagement quality" },
              { v: "+35%", l: "qualified response" },
              { v: "−20%", l: "reliance on paid reach" },
            ].map((s, i) => (
              <Reveal key={s.l} delay={0.15 + i * 0.05}>
                <div className="border-t border-foreground pt-4">
                  <div className="font-display text-[28px] md:text-[44px] leading-none tracking-[-0.03em]">{s.v}</div>
                  <div className="mt-2 text-[12px] font-thai text-muted-foreground">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="md:col-span-4 order-1 md:order-2">
          <Reveal>
            <div className="font-display text-[24px]">02</div>
            <h2 className="mt-2 font-display text-[44px] md:text-[64px] leading-[0.9] tracking-[-0.03em]">
              Demand<br />Gravity
            </h2>
            <p className="mt-8 text-[15px] leading-[1.65] text-muted-foreground font-thai max-w-[320px]">
              สร้างแรงดึงดูดให้คนอยากขยับเข้าหา ก่อนต้องซื้อ reach เพิ่ม
            </p>
            <ul className="mt-6 space-y-2 text-[14px] font-thai">
              <li className="flex gap-2"><span>·</span><span>campaign idea ชัดขึ้น</span></li>
              <li className="flex gap-2"><span>·</span><span>content ทำงานต่อเนื่องขึ้น</span></li>
              <li className="flex gap-2"><span>·</span><span>communication น่าสนใจขึ้น</span></li>
            </ul>
          </Reveal>
        </div>
      </div>
      <p className="mt-12 font-mono text-[10px] text-muted-foreground">
        ตัวเลขเป็นช่วงโดยประมาณจากรูปแบบงานที่ใกล้เคียง และขึ้นอยู่กับบริบทของแต่ละโปรเจกต์
      </p>
    </section>

    {/* HOW WE WORK — ORIONS process */}
    <section className="px-6 md:px-10 py-20 md:py-32">
      <SectionHeader left="07 — HOW WE WORK" right="the ORIONS process" />

      <div className="mt-12">
        <Reveal>
          <h2 className="font-display text-[36px] md:text-[56px] leading-[0.95] tracking-[-0.03em] max-w-[820px]">
            We don't start with the brief.<br />We start with what's broken.
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-6 gap-px bg-foreground border border-foreground">
        {[
          { l: "O", n: "Observe", b: "อ่านสิ่งที่เกิดขึ้นจริงในตลาด พฤติกรรม และบริบทธุรกิจ" },
          { l: "R", n: "Reframe", b: "ตีโจทย์ใหม่ให้คม เพื่อให้เห็นโอกาสที่ซ่อนอยู่" },
          { l: "I", n: "Imagine", b: "สร้างความเป็นไปได้ใหม่ที่ตอบโจทย์ได้จริง" },
          { l: "O", n: "Orchestrate", b: "ประกอบ solution ที่ตรงจุด และพร้อม execute" },
          { l: "N", n: "Nurture", b: "Refine และ optimize ให้งานดีขึ้นอย่างต่อเนื่อง" },
          { l: "S", n: "Scale", b: "ขยายสิ่งที่พิสูจน์แล้วว่าเวิร์กในระดับที่ใหญ่ขึ้น" },
        ].map((s, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div className="bg-background p-5 md:p-6 h-full min-h-[200px]">
              <div className="font-display text-[64px] md:text-[80px] leading-[0.85]">{s.l}</div>
              <div className="mt-4 font-display text-[14px] tracking-[0.02em]">{s.n}</div>
              <p className="mt-3 text-[12px] leading-[1.55] text-muted-foreground font-thai">{s.b}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 md:px-10 py-20 md:py-32 bg-foreground text-background">
      <div className="border-t border-background pt-3 pb-3 flex items-center justify-between">
        <span className="index-badge font-bold">08 — LET'S TALK</span>
        <span className="index-badge font-medium opacity-60 hidden sm:inline">ØRIONS · BANGKOK</span>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-8">
          <Reveal>
            <h2 className="font-display text-[44px] md:text-[88px] leading-[0.9] tracking-[-0.04em]">
              Sharper ideas.<br />Clearer direction.<br />
              <span className="opacity-50">Done.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-3 bg-background text-foreground px-7 py-4 index-badge hover:opacity-90 transition-opacity">
                Start a project <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-3 border border-background px-7 py-4 index-badge hover:bg-background hover:text-foreground transition-colors">
                Explore services
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-4 md:border-l md:border-background/30 md:pl-8">
          <Reveal delay={0.3}>
            <div className="index-badge opacity-60">DIRECT</div>
            <a href="mailto:hello@orions.agency" className="mt-3 block font-display text-[16px] hover:underline">
              hello@orions.agency
            </a>
            <a href="tel:+66923905464" className="mt-1 block font-display text-[16px] hover:underline">
              +66 92 390 5464
            </a>
            <p className="mt-8 text-[12px] font-mono opacity-60 leading-relaxed">
              246/8 SOI YOTHINPHATTHANA<br />
              BANG KAPI · BANGKOK 10240
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
