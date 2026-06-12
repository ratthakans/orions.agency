import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, RotateCcw, Calendar, Printer } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQ from "@/components/FAQ";
import { supabase } from "@/integrations/supabase/client";
import { track } from "@/lib/analytics";

const leadSchema = z.object({
  name:  z.string().trim().min(1, "ใส่ชื่อด้วยนะ").max(100),
  brand: z.string().trim().min(1, "ใส่ชื่อแบรนด์").max(150),
  email: z.string().trim().email("อีเมลไม่ถูกต้อง").max(255),
  note:  z.string().trim().max(1500).optional(),
});

const auditFaqs = [
  { q: "ใช้เวลานานไหม?",
    a: "6 คำถาม · 1 นาที. ตอบตามจริงพอ ไม่ต้องเตรียมข้อมูลอะไรล่วงหน้า — ได้คะแนนทันทีหลังตอบจบ." },
  { q: "ฟรีจริงไหม? มีข้อผูกมัดไหม?",
    a: "ฟรีจริง ทั้งแบบทดสอบและการนัดคุยผล 45 นาที — ไม่มีข้อผูกมัด. ถ้าเราไม่ใช่คำตอบ เราจะบอกตรง ๆ." },
  { q: "นัดคุยผลแล้วได้อะไร?",
    a: "เราอ่านผลของคุณ แล้วชวนคุยว่าจุดอ่อน 3 อันดับแรกควรเริ่มแก้ตรงไหนก่อน และทางไหนเหมาะกับเงื่อนไขของคุณที่สุด." },
];

/* 6 axes, 1 question each = 6 questions */
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
  { axis: 0, statement: <>เรามี <em className="text-cinnabar">positioning statement</em> ที่อธิบายแบรนด์ได้ใน 1 ประโยค</>, hint: "— ประโยคเดียวที่บอก who you serve, what you offer, why different — และทุก touchpoint พูดตรงกัน" },
  { axis: 1, statement: <>โพสต์ของเราออกมา <em className="text-cinnabar">สม่ำเสมอ</em> ตาม calendar ที่วางล่วงหน้า ไม่ใช่คิดวันต่อวัน</>, hint: "— Editorial calendar + cadence ที่คงที่ ไม่ขึ้นกับ mood หรือ workload" },
  { axis: 2, statement: <>ทุกการตัดสินใจเรื่อง content เริ่มจาก <em className="text-cinnabar">data จริง</em> ไม่ใช่ความรู้สึก</>, hint: "— ใช้ Meta Insights, Analytics, performance review drive decision และรู้ว่าอะไร work / ไม่ work" },
  { axis: 3, statement: <>ทุกชิ้นที่ส่งออกไป เรา <em className="text-cinnabar">ภูมิใจ</em> — คุณภาพระดับ commercial ไม่ใช่ DIY</>, hint: "— Camera, lighting, sound, edit ที่อยู่ในมาตรฐาน pro ไม่ใช่ shoot ด้วยมือถือ" },
  { axis: 4, statement: <>เรารู้ว่า <em className="text-cinnabar">ลูกค้าจริงๆ</em> คือใคร และมี audience ที่กลับมาทุกครั้งที่โพสต์</>, hint: "— Persona ที่ลึกกว่า demographics + community / loyal audience ที่ active" },
  { axis: 5, statement: <>เรามี <em className="text-cinnabar">brand roadmap</em> ที่ชัด — ทุก content เชื่อมกับ goal ใหญ่</>, hint: "— Long-term strategy + competitor differentiation ที่ทุกคนในทีมเข้าใจตรงกัน" },
];

const scale = [
  { label: "ยังไม่ใช่", roman: "i.",   points: 1 },
  { label: "บางส่วน",   roman: "ii.",  points: 2 },
  { label: "ใช่เลย",    roman: "iii.", points: 3 },
];

const tierFor = (pct: number) => {
  if (pct >= 85) return { tier: "Refined",      summary: "แบรนด์คุณ refined แล้ว — สิ่งที่เหลือคือ scale และ deepen ความสัมพันธ์กับ audience" };
  if (pct >= 65) return { tier: "Polished",     summary: "ฐานคุณดี — เหลือแค่ sharpen creative + tighten data loop เพื่อยกขึ้นอีกระดับ" };
  if (pct >= 45) return { tier: "Developing",   summary: "อยู่ในช่วงสร้างระบบ — ต้องการ framework และ rhythm ที่สม่ำเสมอ" };
  return                  { tier: "Foundational", summary: "ยังอยู่ในจุดเริ่มต้น — เริ่มจาก clarity ของแบรนด์ก่อน แล้วค่อยขยับขึ้น" };
};

/* Per-axis verdict by % */
const axisVerdict = (axisIdx: number, pct: number) => {
  const verdicts: Record<number, { strong: string; dev: string; gap: string; action: { strong: string; dev: string; gap: string } }> = {
    0: {
      strong: "Voice และ visual ของคุณจดจำได้ — แบรนด์มีตัวตนชัด",
      dev:    "เริ่มมีทิศทาง แต่ยังไม่ consistent ทุก touchpoint",
      gap:    "แบรนด์ยังไม่มี voice/positioning ที่ชัด — คนจำไม่ได้",
      action: {
        strong: "Document brand book ให้ลึก — ครอบคลุม edge cases",
        dev:    "เขียน positioning statement + voice guideline ภายใน 30 วัน",
        gap:    "เริ่มจาก brand audit — หา core message ก่อนผลิตต่อ",
      },
    },
    1: {
      strong: "Cadence แน่น — มี calendar + SOP ที่ทีมใหม่ใช้ได้",
      dev:    "ผลิตได้สม่ำเสมอ แต่ยังขึ้นกับ key person",
      gap:    "ผลิตแบบ react-mode — ขาดช่วง / ไม่มี calendar",
      action: {
        strong: "Templatize ทุก format — ลด production friction",
        dev:    "วาง 90-day editorial calendar + template library",
        gap:    "เริ่มจาก 30-day content calendar + posting rhythm",
      },
    },
    2: {
      strong: "ทุก decision อิง data — มี framework การวัดที่ชัด",
      dev:    "ดู data แต่ยังไม่ได้ใช้ drive decision เสมอ",
      gap:    "ตัดสินใจด้วย gut feel — ไม่ track อะไรเป็นระบบ",
      action: {
        strong: "เพิ่ม cohort + lifecycle analysis — เกินกว่าตัวเลขโพสต์",
        dev:    "Set north-star metric + weekly performance review",
        gap:    "เริ่มจาก audience snapshot + competitor benchmark",
      },
    },
    3: {
      strong: "Production คุณภาพ commercial — Hero content สะกดใจ",
      dev:    "Craft อยู่ในระดับใช้ได้ แต่ยังไม่ standout",
      gap:    "Production ยัง DIY — ภาพ/เสียง/edit ไม่ถึงมาตรฐาน",
      action: {
        strong: "เพิ่ม Hero content รายไตรมาส — brand film / signature story",
        dev:    "Upgrade gear + lighting kit, hire dedicated editor",
        gap:    "เริ่มจาก production day แบบ pro 1 ครั้ง — เห็น gap ชัด",
      },
    },
    4: {
      strong: "Community active — มี loyal audience ที่กลับมาเสมอ",
      dev:    "มี audience แต่ engagement แบบ passive",
      gap:    "ยังไม่รู้จัก audience จริง — โพสต์แล้วเงียบ",
      action: {
        strong: "เปิด exclusive layer — newsletter, members-only content",
        dev:    "ทำ persona research + เริ่ม community management workflow",
        gap:    "เริ่มจาก audience interview 5 คน + Lifecycle Map",
      },
    },
    5: {
      strong: "Strategy + roadmap ชัด — ทุก content ตอบ business goal",
      dev:    "มีทิศทาง แต่ยังไม่ได้ link กับ brand metric",
      gap:    "ไม่มี roadmap — ทำไปวันๆ ไม่มี strategic anchor",
      action: {
        strong: "วาง 12-month brand journey + quarterly milestones",
        dev:    "Workshop quarterly strategy + competitor differentiation",
        gap:    "เริ่มจาก 6-month roadmap + clear brand goal",
      },
    },
  };
  const v = verdicts[axisIdx];
  if (pct >= 75) return { label: "Strong",     text: v.strong, action: v.action.strong };
  if (pct >= 50) return { label: "Developing", text: v.dev,    action: v.action.dev };
  return            { label: "Gap",        text: v.gap,    action: v.action.gap };
};

/* Prices per track + size (must match the rest of the site) */
const TRACK_PRICE = {
  Performance: { S: "฿24,900", M: "฿49,900", L: "฿99,900" },
  Branding:    { S: "฿24,900", M: "฿49,900", L: "฿99,900" },
  Hybrid:      { S: "฿32,900", M: "฿64,900", L: "฿129,900" },
} as const;

type Track = keyof typeof TRACK_PRICE;
type Size = "S" | "M" | "L";

/* Recommend a TRACK + SIZE from per-axis maturity.
   - TRACK: compare brand-leaning axes (Brand Clarity, Creative Craft, Strategic Direction)
     vs performance-leaning axes (Content Consistency, Data Maturity, Audience Connection).
     Performance side much weaker → Performance; brand side much weaker → Branding; else Hybrid.
   - SIZE: by overall maturity — lower = start S, mid = M, high/ambitious = M/L.
   axisPcts is indexed by axis (0..5). */
const recommendPath = (
  pct: number,
  axisPcts: number[],
  weakest: { name: string; pct: number }[],
) => {
  const brandSide = Math.round((axisPcts[0] + axisPcts[3] + axisPcts[5]) / 3);     // Clarity, Craft, Strategy
  const perfSide  = Math.round((axisPcts[1] + axisPcts[2] + axisPcts[4]) / 3);     // Consistency, Data, Audience
  const gap = brandSide - perfSide;

  let track: Track;
  let trackWhy: string;
  if (gap >= 15) {
    track = "Performance";
    trackWhy = "แบรนด์คุณคมแล้ว แต่ฝั่ง execution—ความสม่ำเสมอ, data, audience—ยังตามไม่ทัน. Performance เร่งให้ของดีออกไปถึงคนและวัดผลได้.";
  } else if (gap <= -15) {
    track = "Branding";
    trackWhy = "เครื่องยนต์ execution คุณเดินอยู่ แต่ฝั่งแบรนด์—positioning, craft, ทิศทาง—ยังไม่คม. Branding ทำให้สิ่งที่ปล่อยออกไปมีตัวตนและจดจำได้.";
  } else {
    track = "Hybrid";
    trackWhy = "ทั้งฝั่งแบรนด์และ execution ยังต้องขยับไปด้วยกัน. Hybrid คุมทั้งทิศทางแบรนด์และผลที่วัดได้ในทีมเดียว.";
  }

  // SIZE by overall maturity — lower maturity = start smaller and grow
  let size: Size;
  if (pct < 45) size = "S";
  else if (pct < 75) size = "M";
  else size = "L";
  const sizeLabel = size === "L" ? "M/L" : size;

  const name = `${track} · ${sizeLabel}`;
  const price = `${TRACK_PRICE[track][size]} / เดือน`;
  const weakNames = weakest.slice(0, 2).map((w) => w.name).join(" และ ");

  return {
    label: "ถ้าจะร่วมงานกับเรา",
    name,
    pkg: { name, price },
    why: `${trackWhy} จุดที่อ่อนที่สุดตอนนี้คือ ${weakNames} — เริ่มไซซ์ ${sizeLabel} แล้วค่อยขยายเมื่อระบบแน่นขึ้น.`,
    secondary: { label: "เริ่มต้นบทสนทนา", to: "/contact" },
    honest:
      track === "Hybrid"
        ? "ถ้าเป้าหมายเดียวคือยอดให้เร็วที่สุดโดยไม่สนภาพจำ — เลือก Performance เพียว ๆ จะคุ้มกว่า เราพูดตรง."
        : track === "Performance"
        ? "ถ้าของหรือ unit economics ยังไม่พร้อม เราจะบอกตรง ๆ — เร่งยอดบนฐานที่ไม่พร้อมคือการเผาเงิน."
        : "ถ้าคุณอยากได้คอนเทนต์เยอะที่สุดในราคาถูกที่สุดโดยไม่ต้องมีกลยุทธ์ — เราไม่ใช่ที่นั้น.",
  };
};

const Diagnostic = () => {
  const total = questions.length;
  const [answers, setAnswers] = useState<(number | null)[]>(Array(total).fill(null));
  const [step, setStep] = useState(0); // 0..total-1 = question, total = result

  const axisScores = useMemo(() => {
    const out = axes.map((_, i) => ({ axis: i, score: 0, max: 0 }));
    questions.forEach((q, i) => {
      out[q.axis].max += 3;
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
    if (answers.every((a) => a == null)) track("AuditStart");
    const next = [...answers];
    next[step] = points;
    setAnswers(next);
  };

  // Lead capture (shown after the result)
  const [lead, setLead] = useState({ name: "", brand: "", email: "", note: "" });
  const [leadErrors, setLeadErrors] = useState<Record<string, string>>({});
  const [leadSending, setLeadSending] = useState(false);
  const [leadHp, setLeadHp] = useState(""); // honeypot
  const [leadSent, setLeadSent] = useState(false); // optional lead form submitted (no gate — result is free)

  const canContinue = answers[step] != null;
  const next = () => {
    if (step < total - 1) setStep(step + 1);
    else if (step === total - 1 && canContinue) setStep(total);
  };
  const back = () => step > 0 && setStep(step - 1);
  const restart = () => { setAnswers(Array(total).fill(null)); setStep(0); };

  // Enter advances when an answer is picked (keyboard-friendly)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" && !isResult && answers[step] != null) {
        e.preventDefault();
        next();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step, answers, isResult]); // eslint-disable-line react-hooks/exhaustive-deps

  const result = tierFor(overallPct);

  // Fire AuditComplete once when the result screen appears
  useEffect(() => {
    if (isResult) track("AuditComplete", { score: overallPct, tier: result.tier });
  }, [isResult]); // eslint-disable-line react-hooks/exhaustive-deps

  const weakest = useMemo(
    () =>
      [...axisScores]
        .map((a) => ({ name: axes[a.axis].name, pct: a.max ? Math.round((a.score / a.max) * 100) : 0 }))
        .sort((a, b) => a.pct - b.pct)
        .slice(0, 3),
    [axisScores],
  );

  const submitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (leadHp) { setLeadSent(true); return; } // bot — swallow silently
    const parsed = leadSchema.safeParse(lead);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const i of parsed.error.issues) {
        const k = i.path[0] as string;
        if (k && !errs[k]) errs[k] = i.message;
      }
      setLeadErrors(errs);
      return;
    }
    setLeadErrors({});
    setLeadSending(true);
    const gaps = weakest.map((w) => `${w.name} ${w.pct}%`).join(", ");
    const brief =
      `[BRAND AUDIT] Score ${overallPct}/100 · ${result.tier}. Weakest: ${gaps}.` +
      (parsed.data.note ? ` — ${parsed.data.note}` : "");
    const { error } = await supabase.from("contact_inquiries").insert({
      name: parsed.data.name,
      company: parsed.data.brand,
      email: parsed.data.email,
      brief: brief.slice(0, 2000),
    });
    setLeadSending(false);
    if (error) {
      toast.error("ส่งไม่สำเร็จ ลองใหม่ หรืออีเมลหาเราที่ hello@orions.agency");
      return;
    }
    track("AuditLeadSubmit", { score: overallPct, tier: result.tier });
    setLeadSent(true);
    toast.success("ส่งแล้ว — เราจะอ่านผลของคุณก่อน แล้วติดต่อกลับเพื่อนัดคุย");
  };

  return (
    <div>
      <SEO
        title="The Diagnostic — Brand audit · ØRIONS"
        description="6 คำถาม · 6 มิติ · 1 นาที. ตรวจสุขภาพแบรนด์ของคุณ แล้วดูว่าทางไหนเหมาะกับคุณที่สุด — ตรงไปตรงมา."
        path="/diagnostic"
      />

      {/* HERO */}
      <section className="section-ink px-6 md:px-10 pt-28 md:pt-32 pb-16">
        <div className="max-w-[1280px] mx-auto">
          <SectionLabel label="The Diagnostic" />
          <Reveal delay={0.1}>
            <h1 lang="th" className="mt-8 h-display-lg max-w-[18ch]">
              ที่ทำอยู่ — <em className="text-cinnabar">ดีพอแล้ว</em> หรือยัง?
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p lang="th" className="mt-10 max-w-[680px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground">
              ตรวจแบรนด์ของคุณใน 6 มิติ — Brand Clarity, Content Consistency, Data Maturity, Creative Craft, Audience Connection และ Strategic Direction.
            </p>
            <p lang="th" className="mt-5 max-w-[680px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground">
              6 คำถาม · 1 นาที · ตอบตามจริง ไม่มีถูกผิด — ได้คะแนนแต่ละมิติ + ทางที่เหมาะกับคุณ ไม่มีข้อผูกมัด.
            </p>
          </Reveal>

          {/* What you get */}
          <Reveal delay={0.3}>
            <SectionLabel label="สิ่งที่คุณจะได้" reveal={false} className="mt-12" />
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { n: "01", t: "คะแนนเทียบ 6 มิติ", d: "เห็นภาพรวมว่าแบรนด์แข็ง/อ่อนตรงไหน" },
                { n: "02", t: "จุดอ่อน 3 อันดับแรก", d: "รู้ว่าควรลงมือแก้อะไรก่อน" },
                { n: "03", t: "ทางที่เหมาะกับคุณ", d: "เราบอกตรง ๆ ว่าควรเริ่มตรงไหน" },
              ].map((w) => (
                <div key={w.n} className="card-soft p-6 md:p-7">
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">— {w.n}</div>
                  <h3 lang="th" className="mt-4 font-thai text-[16px] md:text-[18px] font-medium leading-[1.3]">{w.t}</h3>
                  <p lang="th" className="mt-2 font-thai thai-wrap text-[13px] leading-[1.6] text-muted-foreground">{w.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* WIZARD */}
      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-[1280px] mx-auto card-soft hover:translate-y-0 hover:shadow-none p-8 md:p-14 min-h-[560px]">
          {/* Header */}
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-cinnabar font-semibold">
              {isResult ? "Result" : `Axis ${q!.axis + 1} · ${currentAxis!.name}`}
            </div>
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
              <span className="text-foreground font-semibold">{isResult ? total : step + 1}</span> / {total}
            </div>
          </div>

          {/* Axis progress */}
          <div className="mt-5 flex gap-[6px]">
            {axes.map((_, i) => {
              const completed = isResult || i < (q?.axis ?? 0);
              const active = !isResult && i === q!.axis;
              return (
                <div key={i} className={`flex-1 h-[3px] rounded-full ${active ? "bg-cinnabar" : completed ? "bg-cinnabar/50" : "bg-foreground/15"}`} />
              );
            })}
          </div>

          {/* QUESTION */}
          {!isResult && q && (
            <div className="mt-12">
              <h2 className="h-display-sm leading-[1.25] max-w-[760px]">{q.statement}</h2>
              <p lang="th" className="mt-4 font-thai text-[14px] md:text-[15px] text-muted-foreground max-w-[680px]">{q.hint}</p>

              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
                {scale.map((s) => {
                  const selected = answers[step] === s.points;
                  return (
                    <button
                      key={s.points}
                      type="button"
                      onClick={() => select(s.points)}
                      className={`flex flex-col items-center gap-3 px-4 py-6 rounded-xl border transition-colors duration-300 ${
                        selected ? "border-cinnabar bg-cinnabar/10" : "border-foreground/15 hover:border-cinnabar"
                      }`}
                    >
                      <span className={`font-serif text-[22px] leading-none ${selected ? "text-cinnabar" : "text-cinnabar/70"}`}>{s.roman}</span>
                      <span lang="th" className="font-thai text-[13px] font-medium">{s.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* FREE — overall score + tier, shown to everyone who finishes */}
          {isResult && (
            <div className="mt-12 text-center">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">Your Brand Health Score</div>
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
                  <div className="num-display text-[64px] leading-none">{overallPct}</div>
                  <div className="mt-2 font-mono text-[9px] tracking-[0.22em] uppercase text-muted-foreground">Refined Quality</div>
                </div>
              </div>
              <div className="mt-10">
                <div className="font-serif text-cinnabar text-[28px] md:text-[36px] tracking-[-0.01em]">{result.tier}</div>
                <p lang="th" className="mt-4 max-w-[560px] mx-auto font-thai text-[14px] md:text-[16px] leading-[1.7] text-muted-foreground">{result.summary}</p>
              </div>
            </div>
          )}

          {/* DETAILS — full breakdown, free for everyone who finishes (no email gate) */}
          {isResult && (
            <div className="mt-16 text-center">
              {/* Radar — 6 axes */}
              {(() => {
                const cx = 140, cy = 140, R = 110;
                const n = axisScores.length;
                const pts = axisScores.map((a, i) => {
                  const pct = a.max ? a.score / a.max : 0;
                  const angle = -Math.PI / 2 + (i * 2 * Math.PI) / n;
                  return {
                    x: cx + Math.cos(angle) * R * pct, y: cy + Math.sin(angle) * R * pct,
                    lx: cx + Math.cos(angle) * (R + 18), ly: cy + Math.sin(angle) * (R + 18),
                    label: axes[a.axis].short,
                  };
                });
                const rings = [0.25, 0.5, 0.75, 1];
                const spokes = Array.from({ length: n }, (_, i) => {
                  const a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
                  return { x: cx + Math.cos(a) * R, y: cy + Math.sin(a) * R };
                });
                const path = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + " Z";
                return (
                  <div className="mt-12 flex justify-center">
                    <svg viewBox="0 0 280 280" width="320" height="320" className="overflow-visible">
                      {rings.map((r) => (<circle key={r} cx={cx} cy={cy} r={R * r} fill="none" stroke="hsl(var(--foreground) / 0.12)" />))}
                      {spokes.map((s, i) => (<line key={i} x1={cx} y1={cy} x2={s.x} y2={s.y} stroke="hsl(var(--foreground) / 0.12)" />))}
                      <path d={path} fill="hsl(var(--accent) / 0.18)" stroke="hsl(var(--accent))" strokeWidth="1.5" />
                      {pts.map((p, i) => (
                        <g key={i}>
                          <circle cx={p.x} cy={p.y} r="3" fill="hsl(var(--accent))" />
                          <text x={p.lx} y={p.ly} textAnchor={p.lx > cx + 5 ? "start" : p.lx < cx - 5 ? "end" : "middle"} dominantBaseline="middle" className="fill-muted-foreground" style={{ font: "10px ui-monospace, monospace", letterSpacing: "0.18em", textTransform: "uppercase" }}>{p.label}</text>
                        </g>
                      ))}
                    </svg>
                  </div>
                );
              })()}

              {/* Per-axis insight cards */}
              <div className="mt-16 text-left">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground flex items-center gap-3 justify-center">
                  <span className="block w-6 h-px bg-cinnabar" />
                  Per-Axis Diagnosis
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {axisScores.map((a) => {
                    const pct = a.max ? Math.round((a.score / a.max) * 100) : 0;
                    const v = axisVerdict(a.axis, pct);
                    const tone = v.label === "Strong" ? "text-cinnabar" : v.label === "Developing" ? "text-foreground" : "text-muted-foreground";
                    return (
                      <div key={a.axis} className="stat-card p-6 md:p-7">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] tracking-[0.2em] uppercase">{axes[a.axis].name}</span>
                          <span className="num-display text-[20px]">{pct}%</span>
                        </div>
                        <div className="mt-3 h-1 rounded-full bg-foreground/10 overflow-hidden">
                          <div className="h-full rounded-full bg-cinnabar" style={{ width: `${pct}%` }} />
                        </div>
                        <div className={`mt-4 font-mono text-[10px] tracking-[0.22em] uppercase ${tone}`}>{v.label}</div>
                        <p lang="th" className="mt-2 font-thai text-[13px] md:text-[14px] leading-[1.65] text-foreground/85">{v.text}</p>
                        <div className="mt-4 pt-4 border-t border-foreground/15">
                          <div className="font-mono text-[9px] tracking-[0.22em] uppercase text-muted-foreground">Next action</div>
                          <p lang="th" className="mt-1 font-thai text-[13px] leading-[1.6]">→ {v.action}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Top 3 priorities */}
              {(() => {
                const ranked = [...axisScores]
                  .map((a) => ({ ...a, pct: a.max ? Math.round((a.score / a.max) * 100) : 0 }))
                  .sort((a, b) => a.pct - b.pct)
                  .slice(0, 3);
                return (
                  <div className="mt-16 text-left max-w-[720px] mx-auto">
                    <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground flex items-center gap-3">
                      <span className="block w-6 h-px bg-cinnabar" />
                      Top 3 Priorities
                    </div>
                    <ol className="mt-8 border-t border-foreground/15">
                      {ranked.map((a, idx) => {
                        const v = axisVerdict(a.axis, a.pct);
                        return (
                          <li key={a.axis} className="border-b border-foreground/15 py-5 grid grid-cols-12 gap-4 items-baseline">
                            <span className="col-span-2 md:col-span-1 font-mono text-[11px] tracking-[0.2em] text-cinnabar font-semibold">0{idx + 1}</span>
                            <span className="col-span-10 md:col-span-4 font-serif text-[20px] md:text-[22px] tracking-[-0.01em]">{axes[a.axis].name}</span>
                            <span lang="th" className="col-span-12 md:col-span-7 font-thai text-[14px] leading-[1.65] text-muted-foreground">→ {v.action}</span>
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                );
              })()}

              {/* Recommended path — track + size, deep-links to /contact?pkg= */}
              {(() => {
                const axisPcts = axes.map((_, i) => {
                  const a = axisScores[i];
                  return a.max ? Math.round((a.score / a.max) * 100) : 0;
                });
                const rec = recommendPath(overallPct, axisPcts, weakest);
                const pkgLink = `/contact?pkg=${encodeURIComponent(rec.pkg.name)}`;
                return (
                  <div className="mt-16 text-left max-w-[860px] mx-auto card-accent text-foreground p-8 md:p-12">
                    <div className="font-thai text-[11px] tracking-[0.02em] text-cinnabar flex items-center gap-3">
                      <span className="block w-6 h-px bg-cinnabar" />
                      {rec.label}
                    </div>
                    <h3 className="mt-6 font-serif text-[34px] md:text-[44px] tracking-[-0.02em] leading-[1.05]">{rec.name}</h3>
                    <p lang="th" className="mt-6 font-thai text-[14px] md:text-[16px] leading-[1.7] text-foreground/85 max-w-[640px]">{rec.why}</p>

                    {/* Suggested package — deep-links to contact preselected */}
                    <Link to={pkgLink} onClick={() => track("AuditPkgClick", { pkg: rec.pkg.name })} className="mt-7 inline-flex items-center gap-4 rounded-xl bg-background/60 border border-foreground/20 hover:border-cinnabar transition-colors px-5 py-4 group">
                      <span className="font-thai text-[11px] tracking-[0.02em] text-muted-foreground">แพ็กเกจที่น่าจะเหมาะ</span>
                      <span className="font-serif text-cinnabar text-[20px] md:text-[22px]">{rec.pkg.name}</span>
                      <span lang="th" className="font-thai text-[11px] tracking-[0.02em] text-foreground/70">{rec.pkg.price}</span>
                      <ArrowUpRight className="w-4 h-4 text-foreground/50 group-hover:text-cinnabar transition-colors" />
                    </Link>

                    <div className="mt-8 flex flex-wrap gap-5">
                      <Link to={pkgLink} onClick={() => track("AuditPkgClick", { pkg: rec.pkg.name, from: "cta" })} className="btn-accent"><span>เลือกแพ็กนี้</span><ArrowUpRight className="w-4 h-4" /></Link>
                      <Link to={rec.secondary.to} className="group inline-flex items-center gap-2 btn-label border-b border-foreground/60 pb-1 text-foreground hover:text-cinnabar hover:border-cinnabar transition-colors">{rec.secondary.label} →</Link>
                    </div>
                    <p lang="th" className="mt-8 pt-6 border-t border-foreground/15 font-thai thai-wrap text-[13px] md:text-[14px] leading-[1.7] text-muted-foreground max-w-[640px]">
                      <span className="font-thai text-[11px] tracking-[0.02em] text-cinnabar">— พูดตรง</span>&nbsp;&nbsp;{rec.honest}
                    </p>
                  </div>
                );
              })()}

              {/* Optional — leave an email so we read your result before the call (no gate; the full breakdown above is free) */}
              <div className="mt-16 text-left max-w-[860px] mx-auto card-soft hover:translate-y-0 hover:shadow-none p-8 md:p-12">
                <div className="font-thai text-[11px] tracking-[0.02em] text-cinnabar flex items-center gap-3">
                  <span className="block w-6 h-px bg-cinnabar" />
                  ขั้นต่อไป · ไม่บังคับ
                </div>
                {leadSent ? (
                  <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                      <h3 lang="th" className="h-display-sm max-w-[20ch]">ได้รับแล้ว — <em className="text-cinnabar">เราจะติดต่อกลับ.</em></h3>
                      <p lang="th" className="mt-4 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground max-w-[52ch]">
                        เราอ่านผลของคุณก่อน แล้วทักกลับไปนัดคุย — หรือจะกดนัดเลยตอนนี้ก็ได้.
                      </p>
                    </div>
                    <Link to="/contact?pkg=ยังไม่แน่ใจ" onClick={() => track("BookClick", { from: "result" })} className="btn-accent shrink-0 inline-flex">
                      <span>นัดคุย 45 นาที</span><Calendar className="w-4 h-4" />
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                      <div>
                        <h3 lang="th" className="h-display-sm max-w-[22ch]">
                          อยากให้เรา <em className="text-cinnabar">นัดคุยผล</em> 45 นาที ฟรี?
                        </h3>
                        <p lang="th" className="mt-4 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground max-w-[52ch]">
                          ทิ้งอีเมลไว้ เราอ่านผลของคุณก่อนแล้วทักกลับ — คุยได้ตรงจุด ไม่มีข้อผูกมัด · หรือกดนัดเลยก็ได้.
                        </p>
                      </div>
                      <Link to="/contact?pkg=ยังไม่แน่ใจ" onClick={() => track("BookClick", { from: "result" })} className="btn-ghost shrink-0 inline-flex">
                        <span>นัดเลย</span><Calendar className="w-4 h-4" />
                      </Link>
                    </div>
                    <form onSubmit={submitLead} noValidate className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                      {[
                        { k: "name",  label: "ชื่อ",   ph: "ชื่อของคุณ",       span: "sm:col-span-1" },
                        { k: "brand", label: "แบรนด์", ph: "ชื่อแบรนด์/บริษัท", span: "sm:col-span-1" },
                        { k: "email", label: "อีเมล",  ph: "you@brand.com",   span: "sm:col-span-2" },
                      ].map((f) => (
                        <div key={f.k} className={f.span}>
                          <label lang="th" className="font-thai text-[11px] tracking-[0.02em] text-foreground/70">{f.label}</label>
                          <input
                            type={f.k === "email" ? "email" : "text"}
                            value={lead[f.k as keyof typeof lead]}
                            onChange={(e) => setLead({ ...lead, [f.k]: e.target.value })}
                            placeholder={f.ph}
                            className="w-full bg-transparent border-b border-foreground/40 px-0 py-3 text-[15px] text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-cinnabar transition-colors font-thai"
                          />
                          {leadErrors[f.k] && <p lang="th" className="mt-2 font-thai text-[11px] tracking-[0.02em] text-destructive">{leadErrors[f.k]}</p>}
                        </div>
                      ))}
                      <div aria-hidden className="hidden" style={{ position: "absolute", left: "-9999px" }}>
                        <label>Website<input type="text" tabIndex={-1} autoComplete="off" value={leadHp} onChange={(e) => setLeadHp(e.target.value)} /></label>
                      </div>
                      <button type="submit" disabled={leadSending} className="btn-accent sm:col-span-2 mt-2 justify-center disabled:opacity-50">
                        <span>{leadSending ? "กำลังส่ง…" : "ส่งให้เรานัดคุย"}</span><ArrowUpRight className="w-4 h-4" />
                      </button>
                    </form>
                    <p lang="th" className="mt-4 font-thai text-[12px] text-muted-foreground">
                      ไม่สแปม · ใช้สำหรับนัดคุยผลเท่านั้น · <Link to="/privacy" className="underline hover:text-cinnabar">นโยบายความเป็นส่วนตัว</Link>
                    </p>
                  </>
                )}
              </div>

              <div className="mt-14 flex flex-wrap items-center justify-center gap-8">
                <button onClick={() => window.print()} className="group inline-flex items-center gap-2 btn-label text-muted-foreground hover:text-foreground transition-colors">
                  <Printer className="w-3.5 h-3.5" /> บันทึก / พิมพ์ผล
                </button>
                <button onClick={restart} className="group inline-flex items-center gap-2 btn-label text-muted-foreground hover:text-foreground transition-colors">
                  <RotateCcw className="w-3.5 h-3.5" /> Take again
                </button>
              </div>
            </div>
          )}

          {/* Nav */}
          {!isResult && (
            <div className="mt-12 pt-8 border-t border-foreground/15 flex items-center justify-between">
              <button onClick={back} className={`btn-label text-muted-foreground hover:text-foreground transition-colors ${step === 0 ? "invisible" : ""}`}>← Back</button>
              <button onClick={next} disabled={!canContinue} className="btn-accent disabled:opacity-25 disabled:cursor-not-allowed">
                {step === total - 1 ? "See result" : "Continue"} →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
        <div className="max-w-[1280px] mx-auto py-20 md:py-28">
          <SectionLabel label="Before you ask" />
          <SectionHeading
            className="mt-10"
            title={<>The short <em className="text-cinnabar">answers.</em></>}
          />
          <div className="mt-14"><FAQ items={auditFaqs} /></div>
        </div>
      </section>
    </div>
  );
};

export default Diagnostic;
