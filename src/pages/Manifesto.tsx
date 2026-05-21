import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";

const pains = [
  {
    n: "i.",
    en: "ADHD Culture",
    th: "สมาธิสั้นลงเหลือไม่กี่วินาที คนเลื่อนผ่านทุกอย่างที่ไม่สะกิดใจในวินาทีแรก",
  },
  {
    n: "ii.",
    en: "AI Content Flood",
    th: "ฟีดถูกถมด้วยคอนเทนต์ AI หน้าตาเหมือนกัน — คนชาชิน และมองหาคอนเทนต์จริง",
  },
  {
    n: "iii.",
    en: "Ads Inflation",
    th: "ค่าโฆษณาแพงขึ้นทุกวัน ผลลัพธ์น้อยลงทุกวัน — ยิง Ads ให้คอนเทนต์ไร้จิตวิญญาณ คือเผาเงินทิ้ง",
  },
];

const promises = [
  {
    n: "i.",
    en: "ทุกชิ้นที่เราส่ง คือชิ้นที่เราภูมิใจ",
    th: "คิดก่อนทำ แก้ก่อนส่ง — ถ้าคุณรู้สึกว่ายังไม่ใช่ เราจะแก้จนกว่าจะใช่",
  },
  {
    n: "ii.",
    en: "เราจะตรงเวลา",
    th: "Content Calendar ของเดือนถัดไป จะอยู่ในมือคุณภายในวันที่ 25 ของเดือนปัจจุบัน เสมอ",
  },
  {
    n: "iii.",
    en: "เราจะโปร่งใส",
    th: "ทุกตัวเลข ทุก performance ทุกค่า ads — เปิดให้คุณเห็นทั้งหมด ไม่มีค่าคอมแอบแฝง",
  },
];

const Manifesto = () => (
  <div>
    <SEO
      title="Manifesto — ØRIONS"
      description="The new landscape. Why generic content is dead — and what we believe instead."
      path="/manifesto"
    />

    {/* HERO — dark */}
    <section className="bg-foreground text-background min-h-[88vh] flex flex-col">
      <div className="px-6 md:px-10 pt-32 md:pt-40 pb-20 md:pb-28 flex-1 flex flex-col justify-center max-w-[1280px] mx-auto w-full">
        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-background/55 flex items-center gap-3">
            <span className="block w-6 h-px bg-cinnabar" />
            01 — Manifesto
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-10 font-serif h-display-xl">
            The New <em className="italic text-cinnabar">Landscape.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-[640px] font-thai text-[16px] md:text-[18px] leading-[1.7] text-background/70">
            โลกออนไลน์วันนี้ ขับเคลื่อนด้วย 3 ความจริงที่ทำให้ Generic Content ตายไปแล้ว
          </p>
        </Reveal>
      </div>

      {/* Pains */}
      <div className="px-6 md:px-10 pb-24 max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-background/20 pt-12">
          {pains.map((p, i) => (
            <Reveal key={p.en} delay={i * 0.08}>
              <div>
                <div className="font-serif italic text-cinnabar text-[18px] mb-6">{p.n}</div>
                <h3 className="font-serif text-[28px] leading-[1.1] tracking-[-0.02em]">{p.en}</h3>
                <p className="mt-4 font-thai text-[15px] leading-[1.65] text-background/65">{p.th}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Big quote */}
    <section className="bg-foreground text-background border-t border-background/15">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-28 md:py-40">
        <Reveal>
          <p className="font-serif italic text-[32px] md:text-[56px] lg:text-[68px] leading-[1.12] tracking-[-0.02em] max-w-[18ch]">
            ในโลกที่ทุกคนตะโกนเหมือนกัน <em className="text-cinnabar">จนกลายเป็น Noise</em> — การตะโกนให้ดังขึ้น ไม่ใช่ทางออก
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-16 font-serif text-cinnabar text-[26px] md:text-[40px] leading-[1.2] tracking-[-0.01em]">
            ตัดส่วนเกิน · สกัดเนื้อแท้ · กลั่นกรองเรื่องราว
          </p>
        </Reveal>
      </div>
    </section>

    {/* Promises — light */}
    <section className="bg-background text-foreground border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase flex items-center gap-3">
            <span className="block w-6 h-px bg-cinnabar" />
            02 — Our Promise
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-lg max-w-[20ch]">
            แทนที่จะการันตีเป็นข้อๆ — เราขอให้คำมั่นใน <em className="italic text-cinnabar">สิ่งที่สำคัญ.</em>
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-foreground/20 pt-12">
          {promises.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <div>
                <div className="font-serif italic text-cinnabar text-[18px] mb-6">{p.n}</div>
                <h3 className="font-serif text-[22px] md:text-[26px] leading-[1.2] tracking-[-0.015em]">{p.en}</h3>
                <p className="mt-4 font-thai text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">{p.th}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-24 flex flex-wrap items-center gap-5">
            <Link
              to="/approach"
              className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 btn-label hover:bg-cinnabar transition-colors duration-300"
            >
              <span>See how we work</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/health-check"
              className="group inline-flex items-center gap-2 btn-label border-b border-foreground pb-1 hover:text-cinnabar hover:border-cinnabar transition-colors"
            >
              Take the Health Check →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);

export default Manifesto;