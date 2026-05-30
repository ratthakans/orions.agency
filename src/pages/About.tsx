import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";

const pains = [
  { n: "i.",   en: "ADHD Culture",     th: "สมาธิสั้นลงเหลือไม่กี่วินาที คนเลื่อนผ่านทุกอย่างที่ไม่สะกิดใจในวินาทีแรก" },
  { n: "ii.",  en: "AI Content Flood", th: "ฟีดถูกถมด้วยคอนเทนต์ AI หน้าตาเหมือนกัน — คนชาชิน และมองหาคอนเทนต์จริง" },
  { n: "iii.", en: "Ads Inflation",    th: "ค่าโฆษณาแพงขึ้นทุกวัน ผลลัพธ์น้อยลง — ยิง Ads ให้คอนเทนต์ไร้จิตวิญญาณ คือเผาเงินทิ้ง" },
];

const promises = [
  { n: "i.",   en: "Work we're proud of.", th: "คิดก่อนทำ แก้ก่อนส่ง — ถ้าคุณรู้สึกว่ายังไม่ใช่ เราจะแก้จนกว่าจะใช่" },
  { n: "ii.",  en: "Always on time.",       th: "Content Calendar เดือนถัดไป อยู่ในมือคุณภายในวันที่ 25 ของเดือนปัจจุบัน เสมอ" },
  { n: "iii.", en: "Radically transparent.",th: "ทุกตัวเลข ทุก performance ทุกค่า ads — เปิดให้คุณเห็นทั้งหมด ไม่มีค่าคอมแอบแฝง" },
];

const pillars = [
  { sym: "i.",   en: "Craft",    th: "งานทุกชิ้นผ่านมือคน ไม่ใช่สายพาน — ตรวจสอบ กลั่นกรอง ส่งมอบเฉพาะชิ้นที่เราภูมิใจ" },
  { sym: "ii.",  en: "Strategy", th: "ทุกชิ้นมีเหตุผลที่อยู่ตรงนั้น — เริ่มจาก Data, ผ่าน Brand Voice, ไปสู่ Audience ที่ใช่" },
  { sym: "iii.", en: "Story",    th: "เรื่องเล่าที่ทำให้แบรนด์คุณถูกจดจำ — ไม่ใช่แค่ engagement แต่คือ long-term bond" },
];

const About = () => (
  <div>
    <SEO
      title="About — ØRIONS"
      description="What we believe, and how we work. The new landscape, our promise, and the three pillars of refined craft."
      path="/about"
    />

    {/* 01 — MANIFESTO */}
    <section className="section-ink min-h-[88vh] flex flex-col border-b border-foreground/15">
      <div className="px-6 md:px-10 pt-28 md:pt-32 pb-16 md:pb-20 flex-1 flex flex-col justify-center max-w-[1280px] mx-auto w-full">
        <SectionLabel index="01" label="Manifesto" />
        <Reveal delay={0.1}>
          <h1 className="mt-10 h-display-xl">The New <em className="italic text-cinnabar">Landscape.</em></h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p lang="th" className="mt-8 max-w-[640px] font-thai thai-wrap text-[16px] md:text-[18px] leading-[1.7] text-foreground/80">
            สามความจริงที่ทำให้ Generic Content ตายไปแล้ว.
          </p>
        </Reveal>
      </div>

      <div className="px-6 md:px-10 pb-24 max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-foreground/20 pt-12">
          {pains.map((p, i) => (
            <Reveal key={p.en} delay={i * 0.08}>
              <div>
                <div className="font-serif italic text-cinnabar text-[18px] mb-6">{p.n}</div>
                <h3 className="font-serif text-[28px] leading-[1.1] tracking-[-0.02em]">{p.en}</h3>
                <p lang="th" className="mt-4 font-thai thai-wrap text-[15px] leading-[1.65] text-muted-foreground">{p.th}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 02 — OUR PROMISE */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="02" label="Our Promise" />
        <Reveal delay={0.1}>
          <h2 lang="th" className="mt-10 h-display-md max-w-[24ch] thai-wrap">
            แทนที่จะการันตีเป็นข้อๆ — เราขอให้คำมั่นใน <em className="italic text-cinnabar">สิ่งที่สำคัญ.</em>
          </h2>
        </Reveal>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-foreground/20 pt-12">
          {promises.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <div>
                <div className="font-serif italic text-cinnabar text-[18px] mb-6">{p.n}</div>
                <h3 className="font-serif text-[22px] md:text-[26px] leading-[1.2] tracking-[-0.015em]">{p.en}</h3>
                <p lang="th" className="mt-4 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">{p.th}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 03 — THREE PILLARS */}
    <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="03" label="How We Refine" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 h-display-lg">สาม <em className="italic text-cinnabar">เสาหลัก.</em><br />หนึ่ง process.</h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border border-foreground/20">
          {pillars.map((p, i) => (
            <Reveal key={p.en} delay={i * 0.06}>
              <div className={`p-10 md:p-12 h-full ${i > 0 ? "md:border-l border-foreground/20 border-t md:border-t-0" : ""}`}>
                <div className="font-serif italic text-cinnabar text-[26px] leading-none">{p.sym}</div>
                <h3 className="mt-10 font-serif text-[26px] md:text-[30px] leading-[1.1] tracking-[-0.02em]">{p.en}</h3>
                <p lang="th" className="mt-5 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">{p.th}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 04 — CTA */}
    <CTABand
      eyebrow="Next step"
      title={<>See how the <em className="italic text-cinnabar">ecosystem</em> works.</>}
      subtitle="Three divisions · one team · one invoice."
      primary={{ label: "Browse services", to: "/services" }}
      secondary={{ label: "Take the diagnostic", to: "/diagnostic" }}
      tone="snow"
    />
  </div>
);

export default About;
