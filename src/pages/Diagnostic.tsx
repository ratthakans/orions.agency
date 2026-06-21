import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";

type W = { d?: number; b?: number; p?: number };

const questions: { id: string; label: string; opts: { t: string; w: W }[] }[] = [
  {
    id: "q1", label: "ตอนนี้ธุรกิจคุณ…",
    opts: [
      { t: "มีของ / บริการพร้อมขายแล้ว", w: { d: 2 } },
      { t: "ยังใหม่ / แบรนด์ยังไม่ชัด", w: { b: 2 } },
    ],
  },
  {
    id: "q2", label: "อยากเห็นผลเมื่อไหร่?",
    opts: [
      { t: "ยอด / ลีด ใน 30–60 วัน", w: { d: 2 } },
      { t: "ลงทุน 3–6 เดือน เพื่อของที่อยู่ยาว", w: { b: 2 } },
    ],
  },
  {
    id: "q3", label: "ตอนนี้คุณมีอะไรอยู่แล้ว?",
    opts: [
      { t: "มี brief เองแล้ว ขาดแค่ทีมถ่าย-ผลิต", w: { p: 3 } },
      { t: "อยากให้ช่วยคิดตั้งแต่ต้น", w: { d: 1, b: 1 } },
    ],
  },
  {
    id: "q4", label: "ถ้าต้องเลือกตอนนี้ น้ำหนักไปทาง…",
    opts: [
      { t: "ยอดมาก่อน", w: { d: 2 } },
      { t: "แบรนด์มาก่อน", w: { b: 2 } },
      { t: "ทั้งคู่พอ ๆ กัน", w: { d: 1, b: 1 } },
    ],
  },
];

const RESULTS: Record<string, { name: string; tag: string; why: string; pkg: string }> = {
  Digital: { name: "Digital", tag: "ยอด / ลีด เดี๋ยวนี้", pkg: "Digital",
    why: "คุณมีของพร้อมขายและอยากเห็นยอดเร็ว — เริ่มที่ Digital: ยิงแอด + คอนเทนต์ วัดผลรายเดือน." },
  Boutique: { name: "Boutique", tag: "แบรนด์ที่คนจำและเลือก", pkg: "Boutique",
    why: "แบรนด์คุณยังต้องปั้นให้คนจำก่อน — เริ่มที่ Boutique: วางแบรนด์ครบตั้งแต่คิดถึงวัดผล." },
  Production: { name: "Production", tag: "แค่ทีมถ่าย (มี brief เอง)", pkg: "Production",
    why: "คุณมี brief เองแล้ว ขาดแค่ทีมผลิต — Production: ทีมกองถ่าย senior จ่ายเป็นวัน." },
  Hybrid: { name: "Digital → Boutique", tag: "เริ่มยอด แล้วต่อแบรนด์ (ผสม 2 สาย)", pkg: "Hybrid",
    why: "คุณอยากได้ทั้งคู่ — เริ่มที่ Digital ให้เงินหมุนก่อน แล้วต่อ Boutique ให้แบรนด์แข็ง. ไม่ใช่สายแยก แต่คือการผสม Digital + Boutique." },
};

const Diagnostic = () => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const ready = questions.every((q) => answers[q.id] !== undefined);

  const score = { d: 0, b: 0, p: 0 };
  for (const q of questions) {
    const ai = answers[q.id];
    if (ai === undefined) continue;
    const w = q.opts[ai].w;
    score.d += w.d ?? 0; score.b += w.b ?? 0; score.p += w.p ?? 0;
  }
  const rec = !ready ? null
    : score.p >= 3 && score.p >= score.d && score.p >= score.b ? RESULTS.Production
    : score.d > score.b ? RESULTS.Digital
    : score.b > score.d ? RESULTS.Boutique
    : RESULTS.Hybrid;

  return (
    <div>
      <SEO
        title="ยอด หรือ แบรนด์? — เครื่องช่วยวินิจฉัย · ØRIONS"
        description="ตอบ 4 ข้อ แล้วเราช่วยบอกว่าคุณควรเริ่มที่สายไหน — Digital (ยอด) · Boutique (แบรนด์) · Production (ถ่าย)."
        path="/diagnostic"
      />

      {/* 01 — HERO */}
      <section className="section-ink px-6 md:px-10 border-b border-foreground/15">
        <div className="max-w-[1280px] mx-auto pt-28 md:pt-32 pb-16 md:pb-20">
          <SectionLabel label="ถามก่อนขาย" />
          <Reveal delay={0.05}>
            <h1 lang="th" className="mt-8 h-display-lg max-w-[18ch] thai-wrap">
              คุณควรเริ่มที่ <em className="text-cinnabar">ยอด หรือ แบรนด์?</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p lang="th" className="mt-8 max-w-[600px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.7] text-foreground/80">
              ตอบ 4 ข้อ แล้วเราช่วยบอกว่าควรเริ่มที่สายไหน — ไม่ผูกมัด ไม่ต้องกรอกข้อมูลติดต่อ.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 02 — QUIZ */}
      <section className="px-6 md:px-10">
        <div className="max-w-[860px] mx-auto py-16 md:py-24 space-y-10 md:space-y-12">
          {questions.map((q, qi) => (
            <Reveal key={q.id} delay={0.04 * qi}>
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-[11px] tracking-[0.18em] text-cinnabar tabular-nums">{String(qi + 1).padStart(2, "0")}</span>
                  <h2 lang="th" className="font-thai text-[16px] md:text-[18px] text-foreground">{q.label}</h2>
                </div>
                <div className={`mt-4 grid gap-3 ${q.opts.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
                  {q.opts.map((o, oi) => {
                    const on = answers[q.id] === oi;
                    return (
                      <button key={o.t} type="button" onClick={() => setAnswers((a) => ({ ...a, [q.id]: oi }))}
                        className={`group rounded-none border px-4 py-4 text-left transition-all duration-200 ${on ? "border-cinnabar bg-cinnabar" : "border-foreground/15 hover:border-cinnabar hover:bg-cinnabar/10"}`}>
                        <div className="flex items-start justify-between gap-3">
                          <span lang="th" className={`font-thai text-[14px] leading-[1.5] ${on ? "text-background" : "text-foreground"}`}>{o.t}</span>
                          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${on ? "text-background" : "text-transparent group-hover:text-cinnabar"}`} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}

          {/* Result */}
          <div className="card-accent p-7 md:p-9">
            {!rec ? (
              <div className="text-center py-8">
                <div className="num-display text-foreground/15 text-[64px] leading-none">?</div>
                <p lang="th" className="mt-3 font-thai text-[14px] text-muted-foreground">ตอบให้ครบ 4 ข้อ แล้วเราจะแนะนำสายที่ใช่ให้ทันที</p>
              </div>
            ) : (
              <div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">— เราแนะนำ</div>
                <div className="mt-4 flex items-baseline gap-3 flex-wrap">
                  <h3 className="font-unbounded text-[30px] md:text-[40px] leading-none tracking-[-0.01em]">{rec.name}</h3>
                  <span lang="th" className="font-serif text-foreground/70 text-[16px] md:text-[19px]">{rec.tag}</span>
                </div>
                <p lang="th" className="mt-5 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.7] text-foreground/85 max-w-[58ch]">{rec.why}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link to={`/contact?pkg=${encodeURIComponent(rec.pkg)}`} className="btn-accent">
                    <span>คุยต่อเรื่อง {rec.name}</span><ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <Link to="/services" className="btn-ghost"><span>ดูบริการ</span><ArrowUpRight className="w-4 h-4" /></Link>
                  <Link to="/package" className="btn-ghost"><span>ดูแพ็กเกจ</span><ArrowUpRight className="w-4 h-4" /></Link>
                </div>
                <p lang="th" className="mt-4 font-thai text-[11px] text-muted-foreground">ไม่แน่ใจ? คุยฟรี 45 นาที เราช่วยมองให้ตรง ๆ.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 03 — CTA */}
      <CTABand
        eyebrow="Start a conversation"
        title={<>อยากให้ช่วยมองให้ชัด? <em className="text-cinnabar">คุยฟรี 45 นาที.</em></>}
        subtitle="ไม่มีข้อผูกมัด — เล่าโจทย์มา เราบอกตรง ๆ ว่าควรเริ่มตรงไหน."
        primary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
        secondary={{ label: "ดูผลงาน", to: "/work" }}
        tone="ink"
      />
    </div>
  );
};

export default Diagnostic;
