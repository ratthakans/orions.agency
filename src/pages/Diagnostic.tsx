import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, RotateCcw, Calendar, Printer } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import BadgeChip from "@/components/ui/BadgeChip";
import FAQ from "@/components/FAQ";
import { supabase } from "@/integrations/supabase/client";
import { CAL_URL } from "@/lib/config";
import { track } from "@/lib/analytics";

const leadSchema = z.object({
  name:  z.string().trim().min(1, "ใส่ชื่อด้วยนะ").max(100),
  brand: z.string().trim().min(1, "ใส่ชื่อแบรนด์").max(150),
  email: z.string().trim().email("อีเมลไม่ถูกต้อง").max(255),
  note:  z.string().trim().max(1500).optional(),
});

const auditFaqs = [
  { q: "ใช้เวลานานไหม?",
    a: "18 คำถาม ราว 3 นาที. ตอบตามจริงพอ ไม่ต้องเตรียมข้อมูลอะไรล่วงหน้า — ได้คะแนนทันทีหลังตอบจบ." },
  { q: "ฟรีจริงไหม? มีข้อผูกมัดไหม?",
    a: "ฟรีจริง ทั้งแบบทดสอบและการนัดคุยผล 45 นาที — ไม่มีข้อผูกมัด. ถ้าเราไม่ใช่คำตอบ เราจะบอกตรง ๆ." },
  { q: "นัดคุยผลแล้วได้อะไร?",
    a: "เราอ่านผลของคุณ แล้วชวนคุยว่าจุดอ่อน 3 อันดับแรกควรเริ่มแก้ตรงไหนก่อน และทางไหนเหมาะกับเงื่อนไขของคุณที่สุด." },
];

/* 6 axes, 3 questions each = 18 questions */
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
  { axis: 0, statement: <>เรามี <em className="italic text-cinnabar">positioning statement</em> ที่อธิบายแบรนด์ได้ใน 1 ประโยค</>, hint: "— ประโยคเดียวที่บอก who you serve, what you offer, why different" },
  { axis: 1, statement: <>เรามี <em className="italic text-cinnabar">content calendar</em> ที่วางล่วงหน้าทุกเดือน ไม่ใช่คิดวันต่อวัน</>, hint: "— Editorial calendar ที่วางก่อนผลิต ไม่ใช่ตอบสนองตามเทรนด์รายวัน" },
  { axis: 1, statement: <>โพสต์ของเราออกมา <em className="italic text-cinnabar">สม่ำเสมอ</em> ไม่ขาดช่วงนานเกินสัปดาห์</>, hint: "— Cadence ของการเผยแพร่ที่คงที่ ไม่ขึ้นกับ mood หรือ workload" },
  { axis: 1, statement: <>ทุกชิ้นเรามี <em className="italic text-cinnabar">visual + tone guideline</em> ที่ผู้ผลิตคนใหม่หยิบมาทำได้ทันที</>, hint: "— Brand book / template / SOP ที่ document ไว้ ไม่ขึ้นกับคน" },
  { axis: 2, statement: <>ทุกการตัดสินใจเรื่อง content เริ่มจาก <em className="italic text-cinnabar">data จริง</em> ไม่ใช่ความรู้สึก</>, hint: "— ใช้ Meta Insights, Google Analytics, social listening drive decision" },
  { axis: 2, statement: <>เรารู้ว่า <em className="italic text-cinnabar">คอนเทนต์ตัวไหน work / ไม่ work</em> และ why</>, hint: "— Performance review ทุก post + เข้าใจ pattern ที่ลึกกว่า engagement number" },
  { axis: 2, statement: <>เรามี <em className="italic text-cinnabar">measurement framework</em> ที่ตกลงกันแล้วว่าวัดอะไร = success</>, hint: "— North-star metric + supporting KPIs ที่ทุกคนในทีมเข้าใจตรงกัน" },
  { axis: 3, statement: <>ทุกชิ้นที่ส่งออกไป เรา <em className="italic text-cinnabar">ภูมิใจ</em> ที่ได้ส่ง</>, hint: "— ไม่ใช่ส่งเพราะถึงเวลา แต่เพราะคุณภาพเข้ามาตรฐาน" },
  { axis: 3, statement: <>เรามี <em className="italic text-cinnabar">Hero Content</em> รายเดือนที่สะกดใจ ไม่ใช่แค่ Reels รายวัน</>, hint: "— Cinematic / Long-form / Brand Story ที่ทำเป็นชิ้นโบแดงประจำเดือน" },
  { axis: 3, statement: <>การ production ของเราใช้ <em className="italic text-cinnabar">อุปกรณ์ + ทีมระดับ pro</em> ไม่ใช่ shoot ด้วยมือถือ</>, hint: "— Camera, lighting, sound, edit workflow ที่อยู่ในมาตรฐาน commercial" },
  { axis: 4, statement: <>เรารู้ว่า <em className="italic text-cinnabar">ลูกค้าจริงๆ</em> ของเราคือใคร — ลึกกว่า demographics</>, hint: "— Persona ที่ลึก: motivation, fears, daily routine, decision triggers" },
  { axis: 4, statement: <>เรามี <em className="italic text-cinnabar">community / loyal audience</em> ที่กลับมาทุกครั้งที่เราโพสต์</>, hint: "— Repeat engagers, brand advocates, members ที่ active" },
  { axis: 4, statement: <>เรา <em className="italic text-cinnabar">ตอบ comment / DM</em> ทุกอันภายใน 24 ชม. และมี tone ที่เป็นแบรนด์</>, hint: "— Community management ที่ active ไม่ใช่ปล่อยให้ comment ลอย" },
  { axis: 5, statement: <>เรามี <em className="italic text-cinnabar">3-12 month brand roadmap</em> ที่ชัด ไม่ใช่แค่แผนรายเดือน</>, hint: "— Long-term strategy, milestones, brand vision ที่ทุกคนในทีมเข้าใจตรงกัน" },
  { axis: 5, statement: <>ทุก content piece ที่เราทำ <em className="italic text-cinnabar">เชื่อมต่อกับ brand goal</em> ใหญ่</>, hint: "— ไม่มีชิ้นไหนที่ทำเพื่อให้ครบจำนวน — ทุกชิ้นมี strategic purpose" },
  { axis: 5, statement: <>เรารู้ว่า <em className="italic text-cinnabar">แตกต่างจากคู่แข่ง</em> อย่างไร — และสื่อสารจุดนั้นได้ชัด</>, hint: "— Competitor differentiation ที่ไม่ใช่แค่ราคา/ฟีเจอร์ แต่เป็น brand positioning" },
];

const scale = [
  { label: "ไม่ใช่เลย",  roman: "i.",   points: 1 },
  { label: "บางส่วน",    roman: "ii.",  points: 2 },
  { label: "ส่วนใหญ่",   roman: "iii.", points: 3 },
  { label: "ใช่เต็มที่", roman: "iv.",  points: 4 },
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

/* No-price path recommendation by overall % — routes to the right ORIONS path */
const recommendPath = (pct: number) => {
  if (pct >= 85) return {
    label: "ถ้าจะร่วมงานกับเรา",
    name: "Scale & deepen",
    pkg: { name: "Hybrid · L", price: "฿129,900 / เดือน" },
    why: "คุณ refined แล้ว — สิ่งที่เหลือคือ scale ความสม่ำเสมอและ deepen ความสัมพันธ์กับ audience. เหมาะกับ Social retainer ต่อเนื่อง หรือ Consulting มากำกับทิศทางระยะยาว.",
    primary: { label: "ดู Consulting", to: "/consulting" },
    secondary: { label: "เริ่มต้นบทสนทนา", to: "/contact" },
    honest: "ถ้าคุณต้องการแค่ยอดให้เร็วที่สุดโดยไม่สนภาพจำระยะยาว — performance shop เพียว ๆ อาจคุ้มกว่า เราพูดตรง.",
  };
  if (pct >= 65) return {
    label: "ถ้าจะร่วมงานกับเรา",
    name: "Sharpen the edge",
    pkg: { name: "Hybrid · M", price: "฿64,900 / เดือน" },
    why: "ฐานคุณดี — เหลือ sharpen creative และ tighten data loop. เหมาะกับ Brand Strategy เก็บ positioning ให้คม + Social ที่ผูกกับผลที่วัดได้.",
    primary: { label: "ดูบริการของเรา", to: "/services" },
    secondary: { label: "เริ่มต้นบทสนทนา", to: "/contact" },
    honest: "ถ้าทีมในของคุณแน่นอยู่แล้ว แค่ต้องการสายตา senior มากำกับ — Consulting อาจเหมาะกว่าการจ้างผลิตเต็มทีม.",
  };
  if (pct >= 45) return {
    label: "ถ้าจะร่วมงานกับเรา",
    name: "Build the system",
    pkg: { name: "Branding · M", price: "฿49,900 / เดือน" },
    why: "คุณอยู่ในช่วงสร้างระบบ — ต้องการ framework และ rhythm. เหมาะกับการทำงานเป็นทีมเดียวตั้งแต่ Brand Strategy ถึง Production และ Social.",
    primary: { label: "ดูบริการของเรา", to: "/services" },
    secondary: { label: "เริ่มต้นบทสนทนา", to: "/contact" },
    honest: "เราจะบอกตรง ๆ ถ้าของหรือ unit economics ยังไม่พร้อม — และยังไม่รับงานจนกว่าจะพร้อม.",
  };
  return {
    label: "ถ้าจะร่วมงานกับเรา",
    name: "Start from clarity",
    pkg: { name: "Branding · S", price: "฿24,900 / เดือน" },
    why: "ยังอยู่จุดเริ่มต้น — เริ่มจาก clarity ของแบรนด์ก่อน. เหมาะกับ Brand Strategy: หาเรื่องที่ใช่ ก่อนจะเร่งผลิตหรือยิงแอด.",
    primary: { label: "เริ่มที่ Brand Strategy", to: "/services" },
    secondary: { label: "เริ่มต้นบทสนทนา", to: "/contact" },
    honest: "ถ้าคุณอยากได้คอนเทนต์เยอะที่สุดในราคาถูกที่สุดโดยไม่ต้องมีกลยุทธ์ — เราไม่ใช่ที่นั้น.",
  };
};

const Diagnostic = () => {
  const total = questions.length;
  const [answers, setAnswers] = useState<(number | null)[]>(Array(total).fill(null));
  const [step, setStep] = useState(0); // 0..total-1 = question, total = result

  const axisScores = useMemo(() => {
    const out = axes.map((_, i) => ({ axis: i, score: 0, max: 0 }));
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
  const [unlocked, setUnlocked] = useState(false); // result revealed after email gate

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
    if (leadHp) { setUnlocked(true); return; } // bot — unlock without storing
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
    setUnlocked(true);
    toast.success("ปลดล็อกผลแล้ว — เลื่อนดูคะแนนแต่ละมิติได้เลย");
  };

  return (
    <div>
      <SEO
        title="The Diagnostic — Brand audit · ØRIONS"
        description="18 คำถาม · 6 มิติ · 3 นาที. ตรวจสุขภาพแบรนด์ของคุณ แล้วดูว่าทางไหนเหมาะกับคุณที่สุด — ตรงไปตรงมา."
        path="/diagnostic"
      />

      {/* HERO */}
      <section className="section-ink px-6 md:px-10 pt-28 md:pt-32 pb-16">
        <div className="max-w-[1080px] mx-auto">
          <SectionLabel index="01" label="The Diagnostic" />
          <Reveal delay={0.1}>
            <h1 lang="th" className="mt-10 h-display-lg max-w-[18ch]">
              ที่ทำอยู่ — <em className="italic text-cinnabar">ดีพอแล้ว</em> หรือยัง?
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p lang="th" className="mt-10 max-w-[680px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground">
              ตรวจแบรนด์ของคุณใน 6 มิติ — Brand Clarity, Content Consistency, Data Maturity, Creative Craft, Audience Connection และ Strategic Direction.
            </p>
            <p lang="th" className="mt-5 max-w-[680px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground">
              18 คำถาม · ใช้เวลา 3 นาที · ตอบตามจริง ไม่มีถูกผิด — ได้คะแนนแต่ละมิติ + ทางที่เหมาะกับคุณ ไม่มีข้อผูกมัด.
            </p>
          </Reveal>

          {/* What you get */}
          <Reveal delay={0.3}>
            <BadgeChip className="mt-12">สิ่งที่คุณจะได้</BadgeChip>
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
        <div className="max-w-[1080px] mx-auto card-soft hover:translate-y-0 hover:shadow-none p-8 md:p-14 min-h-[560px]">
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
                      <span className={`font-serif italic text-[22px] leading-none ${selected ? "text-cinnabar" : "text-cinnabar/70"}`}>{s.roman}</span>
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
                <div className="font-serif italic text-cinnabar text-[28px] md:text-[36px] tracking-[-0.01em]">{result.tier}</div>
                <p lang="th" className="mt-4 max-w-[560px] mx-auto font-thai text-[14px] md:text-[16px] leading-[1.7] text-muted-foreground">{result.summary}</p>
              </div>
            </div>
          )}

          {/* GATE — email unlocks the detailed breakdown */}
          {isResult && !unlocked && (
            <div className="mt-12 max-w-[640px] mx-auto text-center">
              <div className="font-thai text-[11px] tracking-[0.02em] text-cinnabar">— ดูเชิงลึก</div>
              <h2 lang="th" className="mt-6 h-display-sm">
                เห็นคะแนนแล้ว — <em className="italic text-cinnabar">ลงรายละเอียด</em> ต่อไหม?
              </h2>
              <p lang="th" className="mt-4 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">
                กรอกอีเมลเพื่อปลดล็อก: คะแนนรายมิติ 6 ด้าน · จุดอ่อน 3 อันดับแรก · ทางที่เหมาะกับคุณ — แล้วเรานัดคุยผลให้.
              </p>
              <form onSubmit={submitLead} noValidate className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 text-left">
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
                  <span>{leadSending ? "กำลังปลดล็อก…" : "ดูผลของฉัน"}</span><ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
              <p lang="th" className="mt-4 font-thai text-[12px] text-muted-foreground">
                ไม่สแปม · ใช้สำหรับส่งผลและนัดคุยเท่านั้น · <Link to="/privacy" className="underline hover:text-cinnabar">นโยบายความเป็นส่วนตัว</Link>
              </p>
            </div>
          )}

          {/* DETAILS — gated breakdown */}
          {isResult && unlocked && (
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

              {/* Recommended path (no price) */}
              {(() => {
                const rec = recommendPath(overallPct);
                return (
                  <div className="mt-16 text-left max-w-[860px] mx-auto card-accent text-foreground p-8 md:p-12">
                    <div className="font-thai text-[11px] tracking-[0.02em] text-cinnabar flex items-center gap-3">
                      <span className="block w-6 h-px bg-cinnabar" />
                      {rec.label}
                    </div>
                    <h3 className="mt-6 font-serif text-[34px] md:text-[44px] tracking-[-0.02em] leading-[1.05]">{rec.name}</h3>
                    <p lang="th" className="mt-6 font-thai text-[14px] md:text-[16px] leading-[1.7] text-foreground/85 max-w-[640px]">{rec.why}</p>

                    {/* Suggested package (rough) */}
                    <Link to="/package" className="mt-7 inline-flex items-center gap-4 rounded-xl bg-background/60 border border-foreground/20 hover:border-cinnabar transition-colors px-5 py-4 group">
                      <span className="font-thai text-[11px] tracking-[0.02em] text-muted-foreground">แพ็กเกจที่น่าจะเหมาะ</span>
                      <span className="font-serif italic text-cinnabar text-[20px] md:text-[22px]">{rec.pkg.name}</span>
                      <span lang="th" className="font-thai text-[11px] tracking-[0.02em] text-foreground/70">{rec.pkg.price}</span>
                      <ArrowUpRight className="w-4 h-4 text-foreground/50 group-hover:text-cinnabar transition-colors" />
                    </Link>

                    <div className="mt-8 flex flex-wrap gap-5">
                      <Link to={rec.primary.to} className="btn-accent"><span>{rec.primary.label}</span><ArrowUpRight className="w-4 h-4" /></Link>
                      <Link to={rec.secondary.to} className="group inline-flex items-center gap-2 btn-label border-b border-foreground/60 pb-1 text-foreground hover:text-cinnabar hover:border-cinnabar transition-colors">{rec.secondary.label} →</Link>
                    </div>
                    <p lang="th" className="mt-8 pt-6 border-t border-foreground/15 font-thai thai-wrap text-[13px] md:text-[14px] leading-[1.7] text-muted-foreground max-w-[640px]">
                      <span className="font-thai text-[11px] tracking-[0.02em] text-cinnabar">— พูดตรง</span>&nbsp;&nbsp;{rec.honest}
                    </p>
                  </div>
                );
              })()}

              {/* Book the audit call (email already captured at the gate) */}
              <div className="mt-16 text-left max-w-[860px] mx-auto card-soft hover:translate-y-0 hover:shadow-none p-8 md:p-12">
                <div className="font-thai text-[11px] tracking-[0.02em] text-cinnabar flex items-center gap-3">
                  <span className="block w-6 h-px bg-cinnabar" />
                  ขั้นต่อไป
                </div>
                <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                  <div>
                    <h3 lang="th" className="h-display-sm max-w-[20ch]">
                      นัดคุยผล <em className="italic text-cinnabar">45 นาที</em> ฟรี.
                    </h3>
                    <p lang="th" className="mt-4 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground max-w-[52ch]">
                      เราอ่านผลของคุณมาก่อน แล้วชวนคุยว่าจะเริ่ม refine ตรงไหน — เห็นคะแนนนี้ติดไปด้วย คุยได้ตรงจุด ไม่มีข้อผูกมัด.
                    </p>
                  </div>
                  <a
                    href={CAL_URL}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => track("BookClick", { from: "result" })}
                    className="btn-accent shrink-0 inline-flex"
                  >
                    <span>เลือกเวลาที่สะดวก</span><Calendar className="w-4 h-4" />
                  </a>
                </div>
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
        <div className="max-w-[1080px] mx-auto py-20 md:py-28">
          <SectionLabel index="02" label="Before you ask" />
          <SectionHeading
            className="mt-10"
            title={<>The short <em className="italic text-cinnabar">answers.</em></>}
          />
          <div className="mt-14"><FAQ items={auditFaqs} /></div>
        </div>
      </section>
    </div>
  );
};

export default Diagnostic;
