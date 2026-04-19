import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import SEO from "@/components/SEO";
import heroCyclist from "@/assets/deck/hero-cyclist.jpg";
import povCrosswalk from "@/assets/deck/pov-crosswalk.jpg";
import whatVortex from "@/assets/deck/what-vortex.jpg";
import whatSkater from "@/assets/deck/what-skater.jpg";
import whatWindow from "@/assets/deck/what-window.jpg";
import unlockRunners from "@/assets/deck/unlock-runners.jpg";
import gravityTaxi from "@/assets/deck/gravity-taxi.jpg";

const pressures = [
  { stat: 1.7, suffix: "s", decimals: 1, label: "ADHD SPAN", body: "attention สั้นลงกว่าเดิมมาก" },
  { stat: 41, prefix: "+", suffix: "%", decimals: 0, label: "DIGITAL INFLATION", body: "ต้นทุนของการเข้าถึงลูกค้าสูงขึ้น" },
  { stat: 4.6, suffix: "×", decimals: 1, label: "AI FLOOD", body: "content มากขึ้นจนความแตกต่างถูกกลบ" },
];

const whatWeDo = [
  { n: "01", img: whatSkater, alt: "Skater on crosswalk", t: "วิเคราะห์ธุรกิจชัด", b: "ว่าคือใคร และควรยืนตรงไหน" },
  { n: "02", img: whatVortex, alt: "Vortex silhouette", t: "เปลี่ยนการสื่อสาร", b: "ให้น่าสนใจ พอที่จะถูกเห็นและถูกจำ" },
  { n: "03", img: whatWindow, alt: "Window view", t: "ให้ทุกจุดสัมผัสลูกค้า", b: "แปลเป็นผลลัพธ์ของธุรกิจ" },
];

const orionsAcronym = [
  { l: "O", n: "Observe",     b: "อ่านสิ่งที่เกิดขึ้นจริงในตลาด พฤติกรรม และบริบทธุรกิจ" },
  { l: "R", n: "Reframe",     b: "ตีโจทย์ใหม่ให้คม เพื่อเห็นโอกาสที่ซ่อนอยู่" },
  { l: "I", n: "Imagine",     b: "สร้างความเป็นไปได้ใหม่ที่ตอบโจทย์ได้จริง" },
  { l: "O", n: "Orchestrate", b: "ประกอบ solution ที่ตรงจุด และพร้อม execute" },
  { l: "N", n: "Nurture",     b: "Refine และ optimize ให้งานดีขึ้นต่อเนื่อง" },
  { l: "S", n: "Scale",       b: "ขยายสิ่งที่พิสูจน์แล้วว่าเวิร์กในระดับใหญ่ขึ้น" },
];

const SectionMeta = ({ index, total = "13", label }: { index: string; total?: string; label: string }) => (
  <div className="flex items-center justify-between border-b border-border pb-4 mb-12">
    <span className="index-badge">INDEX {index} / {total}</span>
    <span className="index-badge text-foreground/80">{label}</span>
  </div>
);

const Index = () => (
  <div id="top">
    <SEO title="ØRIONS — Idea-Led Creative Agency, Bangkok" description="Sharper ideas. Clearer direction. Creative agency for businesses that want to escape the social vicious cycle." path="/" />

    {/* HERO */}
    <section className="relative min-h-screen flex flex-col px-6 md:px-12 pt-28 md:pt-32 pb-10">
      <Reveal>
        <div className="flex items-center justify-between border-b border-border pb-4">
          <span className="index-badge">◐ INDEX 01 / 13</span>
          <span className="index-badge text-foreground/80 hidden sm:inline">IDEA-LED CREATIVE AGENCY</span>
          <span className="index-badge">EST. BKK</span>
        </div>
      </Reveal>

      <div className="flex-1 flex flex-col justify-center">
        <Reveal delay={0.05}>
          <h1 className="font-brand text-foreground text-[22vw] md:text-[18vw] lg:text-[17vw] leading-[0.85] tracking-[-0.06em] text-left">
            ØRIONS
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
            <div className="md:col-span-6">
              <p className="font-display normal-case-force italic text-[22px] md:text-[32px] font-light text-foreground leading-[1.2]">
                Sharper ideas. <span className="text-accent">Clearer direction.</span>
              </p>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <p className="text-[14px] leading-[1.7] text-muted-foreground font-thai">
                เอเจนซีสำหรับธุรกิจที่ไม่อยากติดอยู่ใน social vicious cycle — ไอเดียที่ชัด คือทางรอด
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.3}>
        <div className="flex items-end justify-between border-t border-border pt-4 mt-8">
          <span className="index-badge">EST. BANGKOK · ORIONS.AGENCY</span>
          <a href="#cycle" className="index-badge text-foreground hover:text-accent transition-colors flex items-center gap-2">
            <span>↓ NEXT — THE PRESSURE</span>
          </a>
        </div>
      </Reveal>
    </section>

    {/* MARQUEE */}
    <section className="border-y border-border py-3 overflow-hidden bg-surface">
      <div className="marquee">
        {[0, 1].map((k) => (
          <div key={k} className="marquee-track" aria-hidden={k === 1}>
            {["BRAND DIRECTION", "CREATIVE DIRECTION", "DIGITAL EXPERIENCE", "FILM & PRODUCTION", "BANGKOK ↔ WORLD"].map((w, i) => (
              <span key={i} className="font-display text-[14px] md:text-[16px] leading-none tracking-[0.05em] flex items-center gap-12">
                <span className="text-foreground/80">{w}</span>
                <span className="text-accent">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>

    {/* THE PRESSURE — 3 Pressures */}
    <section id="cycle" className="px-6 md:px-12 py-28 md:py-36 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionMeta index="02" label="THE PRESSURE" /></Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-16">
          <div className="md:col-span-3">
            <Reveal>
              <div className="font-display text-accent text-[64px] md:text-[88px] leading-[0.9] tracking-[-0.04em]">02</div>
              <div className="mt-4 label-mono text-muted-foreground">THE PRESSURE</div>
            </Reveal>
          </div>
          <div className="md:col-span-9">
            <Reveal delay={0.1}>
              <h2 className="font-thai font-semibold text-[28px] md:text-[44px] leading-[1.25] max-w-[820px]">
                ธุรกิจไม่ได้สู้แค่กับคู่แข่ง<br />
                แต่กำลังรับ <span className="text-accent">แรงกดดันพร้อมกันจาก 3 ด้าน</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-border border-t border-border">
          {pressures.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.1}>
              <div className="md:px-10 first:md:pl-0 py-10">
                <div className="label-mono text-muted-foreground">{p.label}</div>
                <CountUp to={p.stat} prefix={p.prefix} suffix={p.suffix} decimals={p.decimals}
                  className="mt-4 font-display text-accent text-[88px] md:text-[120px] leading-[0.9] tracking-[-0.05em] block" />
                <div className="mt-6 hairline w-10" />
                <p className="mt-6 text-[15px] leading-[1.7] text-muted-foreground font-thai max-w-[280px]">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* THE VICIOUS CYCLE */}
    <section className="px-6 md:px-12 py-28 md:py-36 border-t border-border bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionMeta index="03" label="THE VICIOUS CYCLE" /></Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-3">
            <Reveal>
              <div className="font-display text-accent text-[64px] md:text-[88px] leading-[0.9] tracking-[-0.04em]">03</div>
              <div className="mt-4 label-mono text-muted-foreground">VICIOUS CYCLE</div>
              <div className="mt-12 hidden md:block">
                <div className="hairline w-12 mb-3" />
                <p className="font-mono text-[10px] italic text-muted-foreground/80 leading-relaxed">
                  Source: ØRIONS<br />Industry Observation, 2025
                </p>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-9 md:border-l md:border-border md:pl-12">
            <Reveal delay={0.15}>
              <blockquote>
                <p className="font-thai text-[24px] md:text-[40px] leading-[1.4] font-normal max-w-[820px]">
                  <span className="text-foreground">"หลายธุรกิจกำลังติดอยู่ใน</span>{" "}
                  <span className="text-accent italic">วงจรอุบาทว์</span>
                  <span className="text-foreground">,</span>
                  <br />
                  <span className="text-muted-foreground">ทำมากขึ้น จ่ายมากขึ้น</span>
                  <br />
                  <span className="text-muted-foreground">งบไหลออก แต่ผลลัพธ์</span>
                  <span className="text-foreground"> เท่าเดิม</span>
                  <span className="text-muted-foreground">"</span>
                </p>
              </blockquote>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-12 flex items-center gap-4">
                <div className="hairline w-16" />
                <p className="label-mono text-accent">THIS IS WHERE ØRIONS BEGINS.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>

    {/* WHO IS ØRIONS — Photo + Text */}
    <section className="px-6 md:px-12 py-28 md:py-36 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionMeta index="04" label="WHO IS ØRIONS" /></Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <Reveal className="md:col-span-7">
            <div className="aspect-[4/5] md:aspect-[5/6] overflow-hidden">
              <img src={heroCyclist} alt="Cyclist on cobblestone street at sunset" className="w-full h-full object-cover duotone" loading="lazy" />
            </div>
          </Reveal>

          <div className="md:col-span-5 flex flex-col justify-center">
            <Reveal delay={0.15}>
              <div className="label-mono text-accent">IDEA-LED CREATIVE AGENCY</div>
              <h2 className="mt-6 font-display text-[40px] md:text-[56px] leading-[1.05]">
                ØRIONS
              </h2>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] font-thai">
                คือ <span className="text-accent">Creative Agency</span> สำหรับธุรกิจที่ไม่อยากติดอยู่ใน social vicious cycle
              </p>
              <p className="mt-6 text-[15px] leading-[1.75] text-muted-foreground font-thai">
                เราช่วยให้สิ่งที่คุณทำ ชัดขึ้น คมขึ้น และทำงานได้จริงขึ้น
                ไอเดียที่ชัด คอนเทนต์ที่มีคุณภาพ และการสื่อสารที่มีกลยุทธ์ —
                ไม่ใช่แค่ทางเลือก <span className="text-foreground italic">แต่คือทางรอด</span>
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <Link to="/about" className="mt-10 inline-flex items-center gap-3 label-mono text-foreground border-b border-foreground/40 hover:border-accent hover:text-accent pb-1 w-fit">
                More about us <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>

    {/* THE POINT OF VIEW */}
    <section className="px-6 md:px-12 py-28 md:py-36 border-t border-border bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionMeta index="05" label="THE POINT OF VIEW" /></Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5 md:order-2">
            <Reveal>
              <div className="aspect-[4/5] overflow-hidden">
                <img src={povCrosswalk} alt="Busy crosswalk in warm sunlight" className="w-full h-full object-cover duotone" loading="lazy" />
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-7 md:order-1 space-y-8">
            <Reveal delay={0.1}>
              <p className="font-thai text-[20px] md:text-[24px] leading-[1.55]">
                <span className="text-foreground font-medium">ปัญหาของหลายธุรกิจวันนี้</span>
                <span className="text-muted-foreground"> ไม่ใช่การทำไม่พอ แต่คือการทำมากเกินไป โดยไม่ได้ความชัดเจนกลับมา</span>
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-thai text-[20px] md:text-[24px] leading-[1.55]">
                <span className="text-foreground font-medium">สิ่งที่หายไปทุกวัน</span>
                <span className="text-muted-foreground"> ไม่ใช่แค่งบประมาณ แต่คือเวลาของทีม พลังงาน และความหมาย ที่ถูกใช้ไปกับ </span>
                <span className="text-accent">digital waste</span>
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="font-thai text-[20px] md:text-[24px] leading-[1.55]">
                <span className="text-foreground font-medium">ØRIONS</span>
                <span className="text-muted-foreground"> ไม่ได้เข้ามาสร้าง noise เพิ่ม แต่เข้ามาเพื่อ </span>
                <span className="text-accent">ลด digital waste</span>
                <span className="text-muted-foreground"> ด้วยงานที่คิดมาดี ทำมาคม</span>
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>

    {/* WHAT WE DO */}
    <section className="px-6 md:px-12 py-28 md:py-36 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionMeta index="06" label="WHAT WE DO" /></Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-display text-[36px] md:text-[56px] leading-[1.05] max-w-[900px]">
            3 ขั้น <span className="text-accent">เปลี่ยนธุรกิจ</span><br />ให้ขยับได้จริง
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {whatWeDo.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <article>
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={s.img} alt={s.alt} className="w-full h-full object-cover duotone" loading="lazy" />
                </div>
                <div className="mt-6 font-display text-accent text-[44px] leading-none">{s.n}</div>
                <h3 className="mt-4 font-thai font-semibold text-[22px] leading-[1.3]">{s.t}</h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-muted-foreground font-thai">{s.b}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* SIGNATURE APPROACHES */}
    <section className="px-6 md:px-12 py-28 md:py-36 border-t border-border bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionMeta index="07" label="SIGNATURE APPROACHES" /></Reveal>

        <div className="space-y-24 md:space-y-32">
          {/* 01 CREATIVE UNLOCK */}
          <Reveal>
            <article className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
              <div className="md:col-span-5">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={unlockRunners} alt="Runners in field" className="w-full h-full object-cover duotone" loading="lazy" />
                </div>
              </div>
              <div className="md:col-span-7 md:pl-6">
                <div className="label-mono text-muted-foreground">01 — APPROACH</div>
                <h3 className="mt-4 font-display text-[40px] md:text-[64px] leading-[1] tracking-[-0.04em]">
                  CREATIVE<br /><span className="text-accent">UNLOCK</span>
                </h3>
                <p className="mt-8 font-thai text-[17px] leading-[1.7] max-w-[520px]">
                  ปลดล็อกสิ่งที่ธุรกิจมีอยู่แล้ว แต่ยังสื่อสารออกมาได้ไม่เต็มที่ —
                  ทำงานกับ <span className="text-foreground font-medium">message, flow และ value</span> เพื่อให้สิ่งที่อยู่แล้วเริ่มทำงานได้ดีขึ้นจริง
                </p>
                <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
                  {[
                    { n: "+30%", l: "CONVERSION CLARITY" },
                    { n: "−25%", l: "DIGITAL WASTE" },
                    { n: "+40%", l: "ACTION RATE" },
                  ].map((m) => (
                    <div key={m.l}>
                      <div className="font-display text-accent text-[28px] md:text-[36px] leading-none">{m.n}</div>
                      <div className="mt-2 label-mono text-muted-foreground text-[9px]">{m.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>

          <div className="hairline" />

          {/* 02 DEMAND GRAVITY */}
          <Reveal>
            <article className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
              <div className="md:col-span-7 md:order-1">
                <div className="label-mono text-muted-foreground">02 — APPROACH</div>
                <h3 className="mt-4 font-display text-[40px] md:text-[64px] leading-[1] tracking-[-0.04em]">
                  DEMAND<br /><span className="text-accent">GRAVITY</span>
                </h3>
                <p className="mt-8 font-thai text-[17px] leading-[1.7] max-w-[520px]">
                  สร้างแรงดึงดูดให้คนอยากขยับเข้ามา ก่อนต้องซื้อ reach เพิ่ม —
                  ทำงานกับ <span className="text-foreground font-medium">idea, system และ communication</span> เพื่อสร้าง momentum ที่ไปได้ไกลกว่า
                </p>
                <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
                  {[
                    { n: "3×",   l: "ENGAGEMENT QUALITY" },
                    { n: "+35%", l: "QUALIFIED RESPONSE" },
                    { n: "−20%", l: "PAID REACH RELIANCE" },
                  ].map((m) => (
                    <div key={m.l}>
                      <div className="font-display text-accent text-[28px] md:text-[36px] leading-none">{m.n}</div>
                      <div className="mt-2 label-mono text-muted-foreground text-[9px]">{m.l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-5 md:order-2">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={gravityTaxi} alt="Busy street with taxis" className="w-full h-full object-cover duotone" loading="lazy" />
                </div>
              </div>
            </article>
          </Reveal>
        </div>

        <p className="mt-16 text-[11px] text-muted-foreground/80 font-mono italic">
          ตัวเลขเป็นช่วงโดยประมาณจากรูปแบบงานที่ใกล้เคียง และขึ้นอยู่กับบริบทของแต่ละโปรเจกต์
        </p>
      </div>
    </section>

    {/* HOW WE WORK — ORIONS PROCESS */}
    <section className="px-6 md:px-12 py-28 md:py-36 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionMeta index="08" label="HOW WE WORK" /></Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-display text-[36px] md:text-[56px] leading-[1.05] max-w-[900px]">
            THE <span className="text-accent">ØRIONS</span><br />PROCESS
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-[640px] text-[16px] leading-[1.7] text-muted-foreground font-thai">
            เราไม่เริ่มจากสิ่งที่ลูกค้าขอ แต่เริ่มจากสิ่งที่ธุรกิจกำลังเจออยู่จริง —
            กระบวนการของ ØRIONS ถูกออกแบบให้ค้นหาปัญหาที่แท้จริงก่อนเสมอ
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-border">
          {orionsAcronym.map((s, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="border-r border-b border-border p-6 md:p-8 h-full">
                <div className="font-display text-accent text-[64px] leading-none">{s.l}</div>
                <div className="mt-6 font-display text-[15px] tracking-[0.05em]">{s.n}</div>
                <p className="mt-3 text-[12px] leading-[1.65] text-muted-foreground font-thai">{s.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* HERO PROJECTS preview */}
    <section className="px-6 md:px-12 py-28 md:py-36 border-t border-border bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionMeta index="09" label="HERO PROJECTS" /></Reveal>

        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <Reveal>
            <h2 className="font-display text-[36px] md:text-[56px] leading-[1.05] max-w-[700px]">
              Hero <span className="text-accent">Projects</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/work" className="label-mono text-muted-foreground hover:text-accent inline-flex items-center gap-2 border-b border-border pb-1">
              All Work <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {[
            { n: "01", name: "พรรคประชาธิปัตย์", cat: "POLITICAL CREATIVE", body: "ทำการเมืองสร้างสรรค์ผ่านกิจกรรมที่ไม่ใช่การหาเสียง", url: "democrat.or.th" },
            { n: "02", name: "GCOO",            cat: "MOBILITY · LOCALIZATION", body: "เปิดตลาดในไทยด้วย localization และ payment gateway", url: "gcoo.io" },
            { n: "03", name: "MY HOTEL",        cat: "HOSPITALITY TECH", body: "วางตัวเป็น first smart hotel OTA ของไทย", url: "pzentsmart.com" },
            { n: "04", name: "HONG MOVE",       cat: "APPLIED UTILITY", body: "Taxi VIP EV ใน AOT พร้อมระบบหลายภาษา", url: "hongmove.co.th" },
          ].map((p) => (
            <Reveal key={p.n}>
              <Link to="/work" className="group block bg-background p-8 md:p-10 h-full hover:bg-surface-2 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="font-display text-accent text-[40px] leading-none">{p.n}</div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <div className="mt-8 label-mono text-muted-foreground">{p.cat}</div>
                <h3 className="mt-3 font-thai font-semibold text-[24px] md:text-[28px] leading-[1.2]">{p.name}</h3>
                <p className="mt-4 text-[14px] leading-[1.7] text-muted-foreground font-thai max-w-[420px]">{p.body}</p>
                <div className="mt-8 pt-6 border-t border-border font-mono text-[11px] text-accent tracking-[0.1em]">{p.url}</div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 md:px-12 py-28 md:py-40 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionMeta index="10" label="LET'S TALK" /></Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-9">
            <Reveal>
              <h2 className="font-display text-[44px] md:text-[88px] leading-[0.98] tracking-[-0.04em]">
                <span className="text-foreground">Sharper ideas.</span><br />
                <span className="text-accent">Clearer direction.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-10 font-thai text-foreground text-[18px] md:text-[22px] max-w-[640px] leading-[1.6]">
                ถ้าธุรกิจของคุณกำลังหาความชัดเจน — เราพร้อมเป็นทีมที่ช่วยตีโจทย์ใหม่
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-3 bg-accent-solid text-accent-foreground px-7 py-4 label-mono hover:opacity-90 transition-opacity">
                  Let's Talk <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/work" className="inline-flex items-center gap-3 border border-foreground/30 text-foreground px-7 py-4 label-mono hover:border-accent hover:text-accent transition-colors">
                  See Our Work
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
