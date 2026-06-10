import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight, MessageCircle, Calendar } from "lucide-react";
import { z } from "zod";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/ui/SectionHeading";
import BadgeChip from "@/components/ui/BadgeChip";
import FAQ from "@/components/FAQ";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { track } from "@/lib/analytics";
import pleum from "@/assets/pleum.jpg";

const inquirySchema = z.object({
  name:    z.string().trim().min(1, "Please tell us your name").max(100),
  company: z.string().trim().min(1, "Company name required").max(150),
  email:   z.string().trim().email("Please enter a valid email").max(255),
  brief:   z.string().trim().min(10, "Tell us a little more (10+ characters)").max(2000),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof inquirySchema>, string>>;

const packageOptions = [
  "Performance · เน้นยอด",
  "Branding · เน้นแบรนด์",
  "Hybrid · ทั้งคู่",
  "Custom · ออกแบบตามโจทย์",
  "ORIONS Production / ถ่ายงาน",
  "ยังไม่แน่ใจ / ขอคำแนะนำ",
];

const next = [
  { n: "01", t: "ตอบกลับใน 24 ชม.",      d: "ทีมอ่านเอง · ตอบเอง · 1 working day" },
  { n: "02", t: "คุยฟรี 45 นาที",        d: "ไม่มีข้อผูกมัด · fit-check ตรงไปตรงมา" },
  { n: "03", t: "มองว่าจะ refine ยังไง", d: "เล่าโจทย์และเงื่อนไข — เราช่วยมองทางออก" },
];

const faqs = [
  { q: "เริ่มต้นยังไง?",
    a: "คุยฟรี 45 นาที ไม่มีข้อผูกมัด — เล่าโจทย์และเงื่อนไขมา เราช่วยมองว่าจะ refine มันยังไง. ทักมาที่ hello@orions.agency, โทร 092 390 5464 หรือ LINE @orions ก็ได้." },
  { q: "ØRIONS ทำงานเร็วแค่ไหน?",
    a: "ทำงานเป็นทีมเดียวตั้งแต่กลยุทธ์ถึงการผลิต — จาก hello ขึ้นจริงได้ใน 4 สัปดาห์ ขึ้นอยู่กับ scope ของงาน." },
  { q: "ØRIONS ไม่เหมาะกับใคร?",
    a: "ถ้าคุณต้องการแค่ยอดให้เร็วที่สุดโดยไม่สนภาพจำระยะยาว, อยากได้คอนเทนต์เยอะที่สุดในราคาถูกที่สุดโดยไม่มีกลยุทธ์ หรือของยังไม่พร้อม — เราจะบอกตรง ๆ และยังไม่รับงานจนกว่าจะพร้อม." },
];

const Contact = () => {
  const [searchParams] = useSearchParams();
  const presetRaw = (searchParams.get("pkg") || "").trim();
  const presetPkg = (() => {
    if (!presetRaw) return "";
    const first = presetRaw.toLowerCase().split(" ")[0];
    return packageOptions.find((o) => o.toLowerCase().startsWith(first)) || "";
  })();
  const presetSize = (presetRaw.match(/\b([SML])\b/)?.[1] || "");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    pkg: presetPkg,
    size: presetSize,
    brief: presetRaw ? `สนใจแพ็กเกจ ${presetRaw} — ขอรายละเอียดและใบเสนอราคา` : "",
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
      setForm({ name: "", company: "", email: "", pkg: "", size: "", brief: "" });
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
    setSubmitting(true);
    const { name, company, email, brief } = parsed.data;
    const pkgFull = form.pkg ? `${form.pkg}${form.size ? ` · ${form.size}` : ""}` : "";
    const composedBrief = pkgFull ? `[แพ็กเกจที่สนใจ: ${pkgFull}]\n${brief}` : brief;
    const { error } = await supabase.from("contact_inquiries").insert({ name, company, email, brief: composedBrief });
    setSubmitting(false);
    if (error) {
      toast.error("ส่งไม่สำเร็จ ลองใหม่หรืออีเมลหาเราที่ hello@orions.agency");
      return;
    }
    track("ContactSubmit", { pkg: pkgFull || "none" });
    toast.success("ได้รับข้อมูลแล้ว — ทีม ØRIONS จะติดต่อกลับภายใน 24 ชม.");
    setForm({ name: "", company: "", email: "", pkg: "", size: "", brief: "" });
  };

  const inputCls = "w-full rounded-xl bg-background border border-foreground/15 px-4 py-3 text-[15px] text-foreground placeholder:text-foreground/45 focus:outline-none focus:border-cinnabar focus:ring-1 focus:ring-cinnabar/30 transition-colors font-thai";
  const labelCls = "font-mono text-[10px] tracking-[0.14em] uppercase text-foreground/70";

  return (
    <div>
      <SEO
        title="Contact — เริ่มต้นบทสนทนา · ØRIONS"
        description="คุยฟรี 45 นาที ไม่มีข้อผูกมัด — เล่าโจทย์และเงื่อนไขมา เราช่วยมองว่าจะ refine มันยังไง. hello@orions.agency · 092 390 5464."
        path="/contact"
      />

      {/* 01 — HERO + inline timeline */}
      <section className="section-ink px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto pt-28 md:pt-32 pb-20 md:pb-24">
          <Reveal>
            <BadgeChip>Start a conversation</BadgeChip>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 lang="th" className="mt-8 h-display-lg max-w-[16ch] thai-wrap">
              เล่าโจทย์มา — เราช่วย <em className="italic text-cinnabar">refine</em> มัน.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p lang="th" className="mt-8 max-w-[640px] font-thai thai-wrap text-[16px] md:text-[18px] leading-[1.65] text-foreground/85">
              คุยฟรี 45 นาที ไม่มีข้อผูกมัด — เล่าโจทย์และเงื่อนไขมา เราช่วยมองว่าจะ refine มันยังไง.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-8 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
              <span className="text-cinnabar">—</span> ตอบกลับใน 24 ชม. · คุยฟรี 45 นาที · NDA on request
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a href="#brief" className="btn-accent justify-between sm:w-auto">
                <span>ส่งโจทย์มา</span><ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="mailto:hello@orions.agency?subject=คุยฟรี 45 นาที — ØRIONS" className="btn-ghost justify-between sm:w-auto">
                <span>นัดคุย 45 นาที</span><Calendar className="w-4 h-4" />
              </a>
            </div>
          </Reveal>

          {/* Inline timeline (replaces 'what happens next' full section) */}
          <Reveal delay={0.25}>
            <div className="mt-14 pt-8 border-t border-foreground/20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {next.map((s) => (
                <div key={s.n} className="flex gap-4">
                  <div className="font-serif italic text-cinnabar text-[22px] leading-none tabular-nums shrink-0">{s.n}</div>
                  <div>
                    <h3 className="font-serif text-[16px] md:text-[18px] tracking-[-0.01em]">{s.t}</h3>
                    <p lang="th" className="mt-1.5 font-thai thai-wrap text-[13px] leading-[1.6] text-muted-foreground">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Direct lines — minimal */}
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
              <a href="mailto:hello@orions.agency" className="hover:text-cinnabar transition-colors">hello@orions.agency</a>
              <a href="tel:+66923905464" className="hover:text-cinnabar transition-colors">+66 92 390 5464</a>
              <a href="https://line.me/ti/p/~orions" target="_blank" rel="noreferrer" className="hover:text-cinnabar transition-colors">LINE @orions</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 — BRIEF */}
      <section id="brief" className="px-6 md:px-10 border-t border-foreground/15 scroll-mt-24">
        <div className="max-w-[1280px] mx-auto py-20 md:py-28">
          <SectionHeading
            eyebrow="02 — Send a brief"
            title={<>Tell us about <em className="italic text-cinnabar">the brand.</em></>}
          />

          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
            <div className="md:col-span-7 card-soft p-7 md:p-9">
              <p lang="th" className="font-thai thai-wrap text-[14px] leading-[1.7] text-foreground/75 max-w-[44ch]">
                ใส่รายละเอียดเท่าที่สะดวก. ยิ่งละเอียด ทีมเรายิ่งตอบได้ตรงจุด.
              </p>
              <form onSubmit={submit} noValidate className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { key: "name",    label: "Name",    type: "text",  ph: "Your name",       ac: "name",         span: "md:col-span-1" },
                  { key: "company", label: "Company", type: "text",  ph: "Company",         ac: "organization", span: "md:col-span-1" },
                  { key: "email",   label: "Email",   type: "email", ph: "you@company.com", ac: "email",        span: "md:col-span-2" },
                ].map((f, i) => (
                  <div key={f.key} className={f.span}>
                    <label className={labelCls}>— 0{i + 1} / {f.label}</label>
                    <input
                      type={f.type}
                      autoComplete={f.ac}
                      maxLength={f.key === "email" ? 255 : f.key === "company" ? 150 : 100}
                      value={form[f.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      placeholder={f.ph}
                      aria-invalid={!!errors[f.key as keyof FieldErrors]}
                      className={inputCls}
                    />
                    {errors[f.key as keyof FieldErrors] && (
                      <p className="mt-2 font-mono text-[10px] tracking-[0.15em] uppercase text-destructive">
                        {errors[f.key as keyof FieldErrors]}
                      </p>
                    )}
                  </div>
                ))}
                <div className="md:col-span-2">
                  <label className={labelCls}>— 04 / แพ็กเกจที่สนใจ <span className="text-foreground/40">(ไม่บังคับ)</span></label>
                  <select
                    value={form.pkg}
                    onChange={(e) => setForm({ ...form, pkg: e.target.value })}
                    className={`${inputCls} appearance-none cursor-pointer`}
                  >
                    <option value="">— เลือกแพ็กเกจ หรือข้ามได้ —</option>
                    {packageOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                  {/* size — only relevant for the 3 monthly tracks */}
                  <div className="mt-3 flex items-center gap-3">
                    <span lang="th" className="font-thai text-[11px] tracking-[0.02em] text-muted-foreground shrink-0">ขนาด</span>
                    <div className="inline-flex rounded-full border border-foreground/25 overflow-hidden">
                      {["S", "M", "L"].map((s) => (
                        <button key={s} type="button" onClick={() => setForm({ ...form, size: form.size === s ? "" : s })}
                          className={`px-4 py-1.5 font-mono text-[11px] tracking-[0.06em] transition-colors ${form.size === s ? "bg-cinnabar text-background" : "text-foreground/55 hover:text-foreground"} ${s !== "S" ? "border-l border-foreground/25" : ""}`}>
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className={labelCls}>— 05 / Brief</label>
                  <textarea
                    rows={5}
                    maxLength={2000}
                    value={form.brief}
                    onChange={(e) => setForm({ ...form, brief: e.target.value })}
                    placeholder="บอกเราว่าธุรกิจคุณติดอะไรอยู่ — timeline, budget range, ปัญหาที่อยากแก้"
                    aria-invalid={!!errors.brief}
                    className={`${inputCls} resize-none`}
                  />
                  {errors.brief && <p className="mt-2 font-mono text-[10px] tracking-[0.15em] uppercase text-destructive">{errors.brief}</p>}
                </div>
                {/* honeypot — hidden from humans */}
                <div aria-hidden className="hidden" style={{ position: "absolute", left: "-9999px" }}>
                  <label>Website<input type="text" tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} /></label>
                </div>
                <button type="submit" disabled={submitting} className="btn-accent md:col-span-2 mt-4 justify-center disabled:opacity-50">
                  <span>{submitting ? "Sending…" : "Send inquiry"}</span><ArrowUpRight className="w-4 h-4" />
                </button>
                <p lang="th" className="md:col-span-2 font-thai text-[12px] leading-[1.6] text-muted-foreground">
                  การส่งฟอร์มถือว่ายอมรับ <Link to="/privacy" className="underline hover:text-cinnabar">นโยบายความเป็นส่วนตัว</Link> · เราใช้ข้อมูลเพื่อติดต่อกลับเท่านั้น ไม่สแปม
                </p>
              </form>
            </div>

            <div className="md:col-span-5 flex flex-col gap-6">
              {/* Contact person — ปลื้ม */}
              <div className="card-soft p-7 md:p-8 flex items-center gap-5">
                <img src={pleum} alt="ปลื้ม — Sales Executive, ØRIONS" className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover object-top shrink-0" />
                <div>
                  <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-cinnabar">— ผู้ติดต่อ</div>
                  <h3 className="mt-1.5 font-serif text-[22px] tracking-[-0.01em]">ปลื้ม</h3>
                  <div lang="th" className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">Sales Executive</div>
                  <a href="tel:+66655169925" className="mt-2 inline-block font-thai text-[14px] text-foreground hover:text-cinnabar transition-colors">065-516-9925</a>
                </div>
              </div>

              {/* Book a call — primary highlight */}
              <div className="card-accent p-7 md:p-8">
                <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-cinnabar">— Book a call</div>
                <p lang="th" className="mt-4 font-thai thai-wrap text-[14px] leading-[1.7] text-foreground/80">
                  อยากคุยก่อนส่งโจทย์? นัดคุยฟรี 45 นาที ไม่มีข้อผูกมัด.
                </p>
                <a href="mailto:hello@orions.agency?subject=คุยฟรี 45 นาที — ØRIONS"
                  className="btn-accent mt-6 justify-between w-full">
                  <span>นัดคุย 45 นาที</span><Calendar className="w-4 h-4" />
                </a>
              </div>

              {/* Studio */}
              <div className="card-soft p-7 md:p-8">
                <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">— Studio</div>
                <p lang="th" className="mt-6 font-thai thai-wrap text-[14px] leading-[1.7] text-foreground/80">
                  246/8 Soi Yothinphatthana 3<br />
                  Khlong Chan, Bang Kapi<br />
                  Bangkok 10240, Thailand
                </p>
                <a href="https://maps.google.com/?q=246/8+Soi+Yothinphatthana+3+Bangkok" target="_blank" rel="noreferrer"
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

      {/* 03 — FAQ */}
      <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
        <div className="max-w-[1080px] mx-auto py-20 md:py-28">
          <SectionHeading
            eyebrow="03 — Before you ask"
            title={<>The short <em className="italic text-cinnabar">answers.</em></>}
          />
          <div className="mt-14"><FAQ items={faqs} /></div>
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
