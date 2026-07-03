import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { z } from "zod";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionLabel from "@/components/SectionLabel";
import { toast } from "sonner";
import { track } from "@/lib/analytics";
import Picture from "@/components/Picture";
import founder from "@/assets/team/founder.jpg?as=picture";

const inquirySchema = z.object({
  name:    z.string().trim().min(1, "กรุณากรอกชื่อ").max(100),
  email:   z.string().trim().email("อีเมลไม่ถูกต้อง").max(255),
  phone:   z.string().trim().min(8, "กรุณากรอกเบอร์ติดต่อ").max(20),
  // optional — low friction, "ทักมาคุยได้เลย"
  company: z.string().trim().max(150),
  brief:   z.string().trim().max(2000),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof inquirySchema>, string>>;

const packageOptions = [
  "Brand strategy",
  "Creative production (brand film · video · photo · music)",
  "Communication design",
  "งานแบรนด์ครบวงจร",
  "ยังไม่แน่ใจ / ขอคำแนะนำ",
];

const Contact = () => {
  const [searchParams] = useSearchParams();
  const presetRaw = (searchParams.get("pkg") || "").trim();
  const presetPkg = (() => {
    if (!presetRaw) return "";
    const first = presetRaw.toLowerCase().split(" ")[0];
    return packageOptions.find((o) => o.toLowerCase().startsWith(first)) || "";
  })();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    pkg: presetPkg,
    brief: presetRaw ? `สนใจงาน ${presetRaw} — ขอรายละเอียดและใบเสนอราคา` : "",
  });

  // Came from a package card → jump straight to the form (just type name + email + send)
  useEffect(() => {
    if (presetRaw) document.getElementById("brief")?.scrollIntoView({ behavior: "smooth", block: "start" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [hp, setHp] = useState(""); // honeypot — humans never fill this

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (hp) { // bot filled the hidden field — pretend success, drop silently
      toast.success("ได้รับข้อมูลแล้ว — ทีม ØRIONS จะติดต่อกลับภายใน 24 ชม.");
      setForm({ name: "", email: "", phone: "", company: "", pkg: "", brief: "" });
      return;
    }
    const parsed = inquirySchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("กรุณาตรวจสอบข้อมูลในฟอร์ม");
      return;
    }
    setErrors({});
    // Two delivery channels — succeed if EITHER works:
    //   • Web3Forms → emails the studio inbox (set VITE_WEB3FORMS_KEY)
    //   • Supabase  → stores the row (source of truth; set VITE_SUPABASE_*)
    const env = import.meta.env;
    const w3key = env.VITE_WEB3FORMS_KEY as string | undefined;
    const hasSupabase = !!(env.VITE_SUPABASE_URL && env.VITE_SUPABASE_PUBLISHABLE_KEY);
    if (!w3key && !hasSupabase) {
      toast.error("ระบบฟอร์มขัดข้องชั่วคราว — อีเมลหาเราที่ hello@orions.agency ได้เลย");
      return;
    }
    setSubmitting(true);
    const { name, company, email, phone, brief } = parsed.data;
    const pkgFull = form.pkg || "";
    // phone has no column on contact_inquiries → fold it into the stored brief.
    const meta = [`โทร: ${phone}`, pkgFull && `งาน: ${pkgFull}`].filter(Boolean);
    const composedBrief = `[${meta.join(" · ")}]${brief ? `\n${brief}` : ""}`;

    let delivered = false;
    // 1) Email notification → studio inbox via Web3Forms
    if (w3key) {
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: w3key,
            subject: `เว็บไซต์ — ลูกค้าใหม่: ${name}${company ? ` · ${company}` : ""}`,
            from_name: "ØRIONS Website",
            replyto: email,
            name,
            email,
            phone,
            company: company || "—",
            package: pkgFull || "—",
            message: brief || "(ไม่ได้กรอกรายละเอียด — ขอให้ติดต่อกลับ)",
          }),
        });
        if (res.ok) delivered = true;
      } catch { /* best-effort — fall through to Supabase / error */ }
    }
    // 2) Store the inquiry in Supabase — SDK is code-split, loaded only on submit
    if (hasSupabase) {
      try {
        const { supabase } = await import("@/integrations/supabase/client");
        const { error } = await supabase.from("contact_inquiries").insert({ name, company, email, brief: composedBrief });
        if (!error) delivered = true;
      } catch { /* best-effort — Web3Forms may already have delivered */ }
    }
    setSubmitting(false);
    if (!delivered) {
      toast.error("ส่งไม่สำเร็จ ลองใหม่หรืออีเมลหาเราที่ hello@orions.agency");
      return;
    }
    track("ContactSubmit", { pkg: pkgFull || "none" });
    toast.success("ได้รับข้อมูลแล้ว — ทีม ØRIONS จะติดต่อกลับภายใน 24 ชม.");
    setForm({ name: "", email: "", phone: "", company: "", pkg: "", brief: "" });
  };

  const inputCls = "w-full rounded-none bg-background border border-foreground/15 px-4 py-3 text-[15px] text-foreground placeholder:text-foreground/55 focus:outline-none focus:border-cinnabar focus:ring-1 focus:ring-cinnabar/30 transition-colors font-thai";
  const labelCls = "font-mono text-[10px] tracking-[0.18em] uppercase text-foreground/70";

  return (
    <div>
      <SEO
        title="Contact — เริ่มต้นบทสนทนา · ØRIONS"
        description="คุยฟรี 45 นาที ไม่มีข้อผูกมัด — เล่าโจทย์และเงื่อนไขมา เราช่วยมองว่าจะ refine มันยังไง. hello@orions.agency · 089 354 2628 (คุณพลอย)."
        path="/contact"
      />

      {/* 01 — HERO + inline timeline */}
      <section className="section-ink px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto pt-28 md:pt-32 pb-20 md:pb-24">
          <SectionLabel label="Start a conversation" />
          <Reveal delay={0.05}>
            <h1 lang="th" className="mt-8 h-display-lg max-w-[16ch] thai-wrap">
              เล่าโจทย์มา —<br /> เราช่วย <em className="text-cinnabar">refine</em> มัน
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p lang="th" className="mt-8 max-w-[640px] font-thai thai-wrap text-[16px] md:text-[18px] leading-[1.8] text-foreground/85">
              คุยฟรี 45 นาที ไม่มีข้อผูกมัด — เล่าโจทย์และเงื่อนไขมา เราช่วยมองว่าจะ refine มันยังไง.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-8 font-mono text-[10px] tracking-[0.05em] text-muted-foreground">
              <span className="text-cinnabar">—</span> ตอบกลับใน 24 ชม. · คุยฟรี 45 นาที · NDA on request
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a href="#brief" className="btn-accent justify-between sm:w-auto">
                <span>ส่งโจทย์มา</span><ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="mailto:hello@orions.agency?subject=คุยฟรี 45 นาที — ØRIONS" className="btn-ghost justify-between sm:w-auto">
                <span>อีเมลนัดคุย</span><ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>

          {/* Direct lines — minimal (timeline removed; the meta line above already says what happens next) */}
          <Reveal delay={0.25}>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
              <a href="mailto:hello@orions.agency" className="hover:text-cinnabar transition-colors">hello@orions.agency</a>
              <a href="tel:+66893542628" className="hover:text-cinnabar transition-colors">+66 89 354 2628 · คุณพลอย</a>
              <a href="https://line.me/ti/p/~orions" target="_blank" rel="noreferrer" className="hover:text-cinnabar transition-colors">LINE @orions</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 01b — WHAT HAPPENS NEXT */}
      <section className="px-6 md:px-10 border-t border-foreground/15">
        <div className="max-w-[1280px] mx-auto py-16 md:py-20">
          <SectionLabel label="หลังกดส่ง เกิดอะไรขึ้น" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              { n: "01", when: "ภายใน 24 ชม.", t: "เราอ่านโจทย์ แล้วตอบกลับ", d: "บอกตรงๆ ว่าเราช่วยได้ไหม และควรเริ่มตรงไหนก่อน — ถ้ายังไม่ใช่จังหวะ เราก็จะบอก" },
              { n: "02", when: "คุยฟรี 45 นาที", t: "วินิจฉัยร่วมกัน", d: "นัดคุยออนไลน์หรือที่ออฟฟิศ ไม่มีข้อผูกมัด — เข้าใจธุรกิจ เป้าหมาย และเงื่อนไขของคุณ" },
              { n: "03", when: "หลังคุย 2–3 วัน", t: "เสนอแผน + ราคา", d: "สโคปชัด ราคาตีตามโจทย์จริง ไม่มีค่าซ่อน — เริ่มงานเมื่อคุณพร้อม" },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.07}>
                <div className="card-soft h-full p-7 md:p-8">
                  <div className="num-display text-cinnabar text-[32px] leading-none">{s.n}</div>
                  <div lang="th" className="mt-4 font-mono text-[10px] tracking-[0.18em] uppercase text-cinnabar">{s.when}</div>
                  <h3 lang="th" className="mt-2 font-display text-[18px] md:text-[20px] font-medium">{s.t}</h3>
                  <p lang="th" className="mt-3 font-thai thai-wrap text-[13px] leading-[1.8] text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — BRIEF */}
      <section id="brief" className="px-6 md:px-10 border-t border-foreground/15 scroll-mt-24">
        <div className="max-w-[1280px] mx-auto py-24 md:py-36">
          <SectionHeading
            lang="th"
            eyebrow="02 — Send a brief"
            title={<>เล่าเรื่อง<em className="text-cinnabar">แบรนด์</em>ให้เราฟัง.</>}
          />

          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
            <div className="md:col-span-7 card-soft p-7 md:p-9">
              <p lang="th" className="font-thai thai-wrap text-[14px] leading-[1.8] text-foreground/75 max-w-[44ch]">
                แค่ <span className="text-foreground">ชื่อ · เบอร์ · อีเมล</span> ก็ทักได้เลย — เดี๋ยวเราติดต่อกลับไปคุย. รายละเอียดอื่นไว้คุยตอนนัดก็ได้.
              </p>
              <form onSubmit={submit} noValidate className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { key: "name",    label: "Name",        type: "text",  ph: "ชื่อของคุณ",       ac: "name",         span: "md:col-span-1", opt: false },
                  { key: "phone",   label: "เบอร์ติดต่อ", type: "tel",   ph: "08x-xxx-xxxx",     ac: "tel",          span: "md:col-span-1", opt: false },
                  { key: "email",   label: "Email",       type: "email", ph: "you@company.com",  ac: "email",        span: "md:col-span-1", opt: false },
                  { key: "company", label: "Company",     type: "text",  ph: "ถ้ามี",            ac: "organization", span: "md:col-span-1", opt: true },
                ].map((f, i) => (
                  <div key={f.key} className={f.span}>
                    <label htmlFor={`field-${f.key}`} className={labelCls}>— 0{i + 1} / {f.label}{f.opt && <span className="text-foreground/60"> (ไม่บังคับ)</span>}</label>
                    <input
                      id={`field-${f.key}`}
                      type={f.type}
                      autoComplete={f.ac}
                      maxLength={f.key === "email" ? 255 : f.key === "company" ? 150 : f.key === "phone" ? 20 : 100}
                      value={form[f.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      placeholder={f.ph}
                      aria-invalid={!!errors[f.key as keyof FieldErrors]}
                      className={inputCls}
                    />
                    {errors[f.key as keyof FieldErrors] && (
                      <p className="mt-2 font-mono text-[10px] tracking-[0.18em] uppercase text-destructive">
                        {errors[f.key as keyof FieldErrors]}
                      </p>
                    )}
                  </div>
                ))}
                <div className="md:col-span-2">
                  <label htmlFor="field-pkg" className={labelCls}>— 05 / สนใจเริ่มตรงไหน <span className="text-foreground/60">(ไม่บังคับ)</span></label>
                  <select
                    id="field-pkg"
                    value={form.pkg}
                    onChange={(e) => setForm({ ...form, pkg: e.target.value })}
                    className={`${inputCls} appearance-none cursor-pointer`}
                  >
                    <option value="">— ยังไม่แน่ใจก็ได้ เดี๋ยวเราช่วยวินิจฉัย —</option>
                    {packageOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="field-brief" className={labelCls}>— 06 / Brief <span className="text-foreground/60">(ไม่บังคับ — จะคุยรายละเอียดตอนนัดก็ได้)</span></label>
                  <textarea
                    id="field-brief"
                    rows={5}
                    maxLength={2000}
                    value={form.brief}
                    onChange={(e) => setForm({ ...form, brief: e.target.value })}
                    placeholder="บอกเราว่าธุรกิจคุณติดอะไรอยู่ — timeline, budget range, ปัญหาที่อยากแก้"
                    aria-invalid={!!errors.brief}
                    className={`${inputCls} resize-none`}
                  />
                  {errors.brief && <p className="mt-2 font-mono text-[10px] tracking-[0.18em] uppercase text-destructive">{errors.brief}</p>}
                </div>
                {/* honeypot — hidden from humans */}
                <div aria-hidden className="hidden" style={{ position: "absolute", left: "-9999px" }}>
                  <label>Website<input type="text" tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} /></label>
                </div>
                <button type="submit" disabled={submitting} className="btn-accent md:col-span-2 mt-4 justify-center disabled:opacity-50">
                  <span>{submitting ? "Sending…" : "Send inquiry"}</span><ArrowUpRight className="w-4 h-4" />
                </button>
                <p lang="th" className="md:col-span-2 font-thai text-[12px] leading-[1.8] text-muted-foreground">
                  การส่งฟอร์มถือว่ายอมรับ <Link to="/privacy" className="underline hover:text-cinnabar">นโยบายความเป็นส่วนตัว</Link> · เราใช้ข้อมูลเพื่อติดต่อกลับเท่านั้น ไม่สแปม
                </p>
              </form>
            </div>

            <div className="md:col-span-5 flex flex-col gap-6">
              {/* Contact people — creative lead + sales line */}
              <div className="card-soft p-7 md:p-8">
                <div className="flex items-center gap-5">
                  <Picture data={founder} alt="Ratthakan Suwanphakdee — Founder & Creative Director, ØRIONS" className="w-20 h-20 md:w-24 md:h-24 rounded-none object-cover object-top shrink-0" />
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.04em] text-cinnabar">— คนที่ดูแลงานคุณ</div>
                    <h3 lang="th" className="mt-1.5 font-serif text-[22px] tracking-[-0.01em]">รัฐกันต์ สุวรรณภักดี</h3>
                    <div lang="th" className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">Founder & Creative Director</div>
                  </div>
                </div>
                <div className="mt-6 pt-5 border-t border-foreground/12">
                  <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">โทรคุยรายละเอียด — คุณพลอย · Sales Director</div>
                  <a href="tel:+66893542628" className="mt-1.5 inline-block font-thai text-[15px] text-foreground hover:text-cinnabar transition-colors">089-354-2628</a>
                </div>
              </div>

              {/* Book a call — primary highlight */}
              <div className="card-accent p-7 md:p-8">
                <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-cinnabar">— นัดคุย 45 นาที</div>
                <p lang="th" className="mt-4 font-thai thai-wrap text-[14px] leading-[1.8] text-foreground/80">
                  อยากคุยก่อนส่งโจทย์? อีเมลมานัดคุยฟรี 45 นาที ไม่มีข้อผูกมัด.
                </p>
                <a href="mailto:hello@orions.agency?subject=คุยฟรี 45 นาที — ØRIONS"
                  className="btn-accent mt-6 justify-between w-full">
                  <span>อีเมลนัดคุย</span><ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Studio */}
              <div className="card-soft p-7 md:p-8">
                <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">— Studio</div>
                <p lang="th" className="mt-6 font-thai thai-wrap text-[14px] leading-[1.8] text-foreground/80">
                  246/8 Soi Yothinphatthana 3<br />
                  Khlong Chan, Bang Kapi<br />
                  Bangkok 10240, Thailand
                </p>
                <a href="https://maps.app.goo.gl/zbgmhou54j55eKfg9" target="_blank" rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-foreground hover:text-cinnabar transition-colors">
                  Open in Maps <ArrowUpRight className="w-3 h-3" />
                </a>
                <p className="mt-8 font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground">
                  Reply within 24 hours · Mon–Fri · 09:00–18:00 ICT
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky mobile LINE pill */}
      <a href="https://line.me/ti/p/~orions" target="_blank" rel="noreferrer"
        className="md:hidden fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 bg-cinnabar text-background px-4 py-3 font-mono text-[10px] tracking-[0.22em] uppercase shadow-lg"
        aria-label="Chat on LINE">
        <MessageCircle className="w-4 h-4" /> Chat
      </a>
    </div>
  );
};

export default Contact;
