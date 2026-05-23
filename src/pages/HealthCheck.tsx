import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, RotateCcw } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";

/* 6 axes, 2 questions each = 12 questions */
const axes = [
  { name: "Brand Clarity",       short: "Clarity" },
  { name: "Content Consistency", short: "Consistency" },
  { name: "Data Maturity",       short: "Data" },
  { name: "Creative Craft",      short: "Craft" },
  { name: "Audience Connection", short: "Audience" },
  { name: "Strategic Direction", short: "Strategy" },
] as const;

type Q = { axis: number; statement: React.ReactNode; hint: string };

const questions: Q[] = [
  { axis: 0, statement: <>แบรนด์เรามี <em className="italic text-cinnabar">voice framework</em> ที่ชัด ทุกชิ้นพูดเหมือนกัน</>, hint: "— Tone of voice, message hierarchy, brand personality ที่ถ่ายทอดออกมาตรงกันทุก touchpoint" },
  { axis: 0, statement: <>ลูกค้าเห็นโพสต์ของเรา <em className="italic text-cinnabar">โดยไม่ต้องดู logo</em> ก็รู้ว่าเป็นแบรนด์เรา</>, hint: "— Visual identity + voice ที่จดจำได้ทันทีโดยไม่ต้องเห็นชื่อแบรนด์" },
  { axis: 1, statement: <>เรามี <em className="italic text-cinnabar">content calendar</em> ที่วางล่วงหน้าทุกเดือน ไม่ใช่คิดวันต่อวัน</>, hint: "— Editorial calendar ที่วางก่อนผลิต ไม่ใช่ตอบสนองตามเทรนด์รายวัน" },
  { axis: 1, statement: <>โพสต์ของเราออกมา <em className="italic text-cinnabar">สม่ำเสมอ</em> ไม่ขาดช่วงนานเกินสัปดาห์</>, hint: "— Cadence ของการเผยแพร่ที่คงที่ ไม่ขึ้นกับ mood หรือ workload" },
  { axis: 2, statement: <>ทุกการตัดสินใจเรื่อง content เริ่มจาก <em className="italic text-cinnabar">data จริง</em> ไม่ใช่ความรู้สึก</>, hint: "— ใช้ Meta Insights, Google Analytics, social listening drive decision" },
  { axis: 2, statement: <>เรารู้ว่า <em className="italic text-cinnabar">คอนเทนต์ตัวไหน work / ไม่ work</em> และ why</>, hint: "— Performance review ทุก post + เข้าใจ pattern ที่ลึกกว่า engagement number" },
  { axis: 3, statement: <>ทุกชิ้นที่ส่งออกไป เรา <em className="italic text-cinnabar">ภูมิใจ</em> ที่ได้ส่ง</>, hint: "— ไม่ใช่ส่งเพราะถึงเวลา แต่เพราะคุณภาพเข้ามาตรฐาน" },
  { axis: 3, statement: <>เรามี <em className="italic text-cinnabar">Hero Content</em> รายเดือนที่สะกดใจ ไม่ใช่แค่ Reels รายวัน</>, hint: "— Cinematic / Long-form / Brand Story ที่ทำเป็นชิ้นโบแดงประจำเดือน" },
  { axis: 4, statement: <>เรารู้ว่า <em className="italic text-cinnabar">ลูกค้าจริงๆ</em> ของเราคือใคร — ลึกกว่า demographics</>, hint: "— Persona ที่ลึก: motivation, fears, daily routine, decision triggers" },
  { axis: 4, statement: <>เรามี <em className="italic text-cinnabar">community / loyal audience</em> ที่กลับมาทุกครั้งที่เราโพสต์</>, hint: "— Repeat engagers, brand advocates, members ที่ active" },
  { axis: 5, statement: <>เรามี <em className="italic text-cinnabar">3-12 month brand roadmap</em> ที่ชัด ไม่ใช่แค่แผนรายเดือน</>, hint: "— Long-term strategy, milestones, brand vision ที่ทุกคนในทีมเข้าใจตรงกัน" },
  { axis: 5, statement: <>ทุก content piece ที่เราทำ <em className="italic text-cinnabar">เชื่อมต่อกับ brand goal</em> ใหญ่</>, hint: "— ไม่มีชิ้นไหนที่ทำเพื่อให้ครบจำนวน — ทุกชิ้นมี strategic purpose" },
];

const scale = [
  { sym: "◌", label: "ไม่ใช่เลย",   roman: "i.",   points: 1 },
  { sym: "◔", label: "บางส่วน",     roman: "ii.",  points: 2 },
  { sym: "◑", label: "ส่วนใหญ่",    roman: "iii.", points: 3 },
  { sym: "●", label: "ใช่เต็มที่",  roman: "iv.",  points: 4 },
];

const tierFor = (pct: number) => {
  if (pct >= 85) return { tier: "Refined",     summary: "แบรนด์คุณ refined แล้ว — สิ่งที่เหลือคือ scale และ deepen ความสัมพันธ์กับ audience" };
  if (pct >= 65) return { tier: "Polished",    summary: "ฐานคุณดี — เหลือแค่ sharpen creative + tighten data loop เพื่อยกขึ้นอีกระดับ" };
  if (pct >= 45) return { tier: "Developing",  summary: "อยู่ในช่วงสร้างระบบ — ต้องการ framework และ rhythm ที่สม่ำเสมอ" };
  return                   { tier: "Foundational", summary: "ยังอยู่ในจุดเริ่มต้น — เริ่มจาก clarity ของแบรนด์ก่อน แล้วค่อยขยับขึ้น" };
};

const HealthCheck = () => {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(12).fill(null));
  const [step, setStep] = useState(0); // 0..11 = question, 12 = result
  const total = questions.length;

  const axisScores = useMemo(() => {
    const out: { axis: number; score: number; max: number }[] = axes.map((_, i) => ({ axis: i, score: 0, max: 0 }));
    questions.forEach((q, i) => {
      out[q.axis].max += 4;
      if (answers[i] != null) out[q.axis].score += answers[i] as number;
    });
    return out;
  }, [answers]);

  const overallPct = useMemo(() => {
    const sum = axisScores.reduce((a, b) => a + b.score, 0);
    const max = axisScores.reduce((a, b) => a + b.max, 0);
    return max ? Math.round((sum / max) * 100) : 0;
  }, [axisScores]);

  const isResult = step >= total;
  const q = !isResult ? questions[step] : null;
  const currentAxis = q ? axes[q.axis] : null;

  const select = (points: number) => {
    const next = [...answers];
    next[step] = points;
    setAnswers(next);
  };

  const canContinue = answers[step] != null;

  const next = () => {
    if (step < total - 1) setStep(step + 1);
    else if (step === total - 1 && canContinue) setStep(total);
  };
  const back = () => step > 0 && setStep(step - 1);
  const restart = () => { setAnswers(Array(12).fill(null)); setStep(0); };

  const progress = isResult ? 100 : Math.round(((step) / total) * 100);
  const result = tierFor(overallPct);

  return (
    <div>
      <SEO
        title="The Diagnostic — ØRIONS"
        description="12 questions across 6 axes. 2 minutes. Get a refined-quality score for your brand."
        path="/diagnostic"
      />

      {/* HERO */}
      <section className="px-6 md:px-10 pt-32 md:pt-40 pb-16">
        <div className="max-w-[1080px] mx-auto">
          <Reveal>
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground flex items-center gap-3">
              <span className="block w-6 h-px bg-cinnabar" />
              06 — The Diagnostic
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-10 font-serif h-display-lg max-w-[18ch]">
              ที่คุณทำอยู่ —<br /><em className="italic text-cinnabar">ดีพอแล้ว</em> หรือยัง?
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-[680px] font-thai text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground">
              ตรวจสุขภาพแบรนด์ของคุณใน 6 มิติ — Brand Clarity, Content Consistency, Data Maturity, Creative Craft, Audience Connection, และ Strategic Direction.
              <br /><br />
              12 คำถาม · ใช้เวลา 2 นาที · รับ Health Report ทันที
            </p>
          </Reveal>
        </div>
      </section>

      {/* WIZARD */}
      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-[1080px] mx-auto border border-foreground/15 bg-background p-8 md:p-14 min-h-[560px]">
          {/* Header */}
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-cinnabar font-semibold">
              {isResult ? "Result" : `Axis ${q!.axis + 1} · ${currentAxis!.name}`}
            </div>
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
              <span className="text-foreground font-semibold">{isResult ? total : step + 1}</span> / {total}
            </div>
          </div>

          {/* Progress */}
          <div className="mt-5 h-px bg-foreground/10 overflow-hidden">
            <div
              className="h-full bg-cinnabar transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Axis dots */}
          <div className="mt-4 flex gap-[6px]">
            {axes.map((_, i) => {
              const completed = isResult || i < (q?.axis ?? 0);
              const active = !isResult && i === q!.axis;
              return (
                <div
                  key={i}
                  className={`flex-1 h-[3px] ${active ? "bg-cinnabar" : completed ? "bg-cinnabar/50" : "bg-foreground/15"}`}
                />
              );
            })}
          </div>

          {/* QUESTION */}
          {!isResult && q && (
            <div className="mt-12">
              <h2 className="font-serif text-[24px] md:text-[36px] leading-[1.25] tracking-[-0.015em] max-w-[760px]">
                {q.statement}
              </h2>
              <p className="mt-4 font-thai text-[14px] md:text-[15px] text-muted-foreground max-w-[680px]">
                {q.hint}
              </p>

              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
                {scale.map((s) => {
                  const selected = answers[step] === s.points;
                  return (
                    <button
                      key={s.points}
                      type="button"
                      onClick={() => select(s.points)}
                      className={`flex flex-col items-center gap-3 px-4 py-6 border transition-all duration-300 ${
                        selected
                          ? "border-cinnabar bg-cinnabar/10 -translate-y-0.5"
                          : "border-foreground/20 hover:border-cinnabar hover:-translate-y-0.5"
                      }`}
                    >
                      <span className={`text-[26px] leading-none ${selected ? "text-cinnabar scale-110" : "text-cinnabar/70"} transition-transform`}>
                        {s.sym}
                      </span>
                      <span className="font-thai text-[13px] font-medium">{s.label}</span>
                      <span className="font-serif italic text-[11px] text-muted-foreground">{s.roman}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* RESULT */}
          {isResult && (
            <div className="mt-12 text-center">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">Your Brand Health Score</div>

              {/* Radial */}
              <div className="mt-10 relative inline-block">
                <svg viewBox="0 0 280 280" width="240" height="240">
                  <circle cx="140" cy="140" r="120" fill="none" stroke="hsl(var(--foreground) / 0.12)" strokeWidth="10" />
                  <circle
                    cx="140" cy="140" r="120" fill="none"
                    stroke="hsl(var(--accent))" strokeWidth="10" strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 120}
                    strokeDashoffset={2 * Math.PI * 120 * (1 - overallPct / 100)}
                    transform="rotate(-90 140 140)"
                    style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(0.16, 1, 0.3, 1)" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="font-serif text-[64px] leading-none tracking-[-0.03em]">{overallPct}</div>
                  <div className="mt-2 font-mono text-[9px] tracking-[0.22em] uppercase text-muted-foreground">Refined Quality</div>
                </div>
              </div>

              <div className="mt-10">
                <div className="font-serif italic text-cinnabar text-[28px] md:text-[36px] tracking-[-0.01em]">{result.tier}</div>
                <p className="mt-4 max-w-[560px] mx-auto font-thai text-[14px] md:text-[16px] leading-[1.7] text-muted-foreground">
                  {result.summary}
                </p>
              </div>

              {/* Axis breakdown */}
              <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                {axisScores.map((a) => {
                  const pct = Math.round((a.score / a.max) * 100);
                  return (
                    <div key={a.axis} className="border-t border-foreground/15 pt-4">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] tracking-[0.2em] uppercase">{axes[a.axis].name}</span>
                        <span className="font-serif text-[18px] tabular-nums">{pct}%</span>
                      </div>
                      <div className="mt-2 h-px bg-foreground/10 overflow-hidden">
                        <div className="h-full bg-cinnabar" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-14 flex flex-wrap items-center justify-center gap-5">
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-3 bg-cinnabar text-background px-7 py-4 btn-label hover:bg-foreground transition-colors duration-300"
                >
                  <span>Find your tier next</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={restart}
                  className="group inline-flex items-center gap-2 btn-label text-muted-foreground hover:text-foreground transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Take again
                </button>
              </div>
            </div>
          )}

          {/* Nav */}
          {!isResult && (
            <div className="mt-12 pt-8 border-t border-foreground/15 flex items-center justify-between">
              <button
                onClick={back}
                className={`btn-label text-muted-foreground hover:text-foreground transition-colors ${step === 0 ? "invisible" : ""}`}
              >
                ← Back
              </button>
              <button
                onClick={next}
                disabled={!canContinue}
                className="inline-flex items-center gap-2 bg-cinnabar text-background px-7 py-4 btn-label hover:bg-foreground transition-colors duration-300 disabled:opacity-25 disabled:cursor-not-allowed"
              >
                {step === total - 1 ? "See result" : "Continue"} →
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HealthCheck;