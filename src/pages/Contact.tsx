import { useState } from "react";
import { ArrowUpRight, MessageCircle, Phone, Mail } from "lucide-react";
import { z } from "zod";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import PageMark from "@/components/PageMark";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const inquirySchema = z.object({
  name:    z.string().trim().min(1, "Please tell us your name").max(100, "Name is too long"),
  company: z.string().trim().min(1, "Company name required").max(150, "Company name is too long"),
  email:   z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  brief:   z.string().trim().min(10, "Tell us a little more (10+ characters)").max(2000, "Brief is too long"),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof inquirySchema>, string>>;

const Contact = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", brief: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
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
    const { error } = await supabase
      .from("contact_inquiries")
      .insert({ name: name!, company: company!, email: email!, brief: brief! });
    setSubmitting(false);
    if (error) {
      toast.error("ส่งไม่สำเร็จ ลองใหม่อีกครั้งหรืออีเมลหาเราที่ hello@orions.agency");
      return;
    }
    toast.success("ได้รับข้อมูลแล้ว — ทีม ØRIONS จะติดต่อกลับภายใน 24 ชม.");
    setForm({ name: "", company: "", email: "", brief: "" });
  };

  const inputCls = "w-full bg-transparent border-b border-foreground/40 px-0 py-3 text-[15px] text-foreground placeholder:text-foreground/45 focus:outline-none focus:border-foreground transition-colors font-thai";
  const labelCls = "font-mono text-[10px] tracking-[0.14em] uppercase text-foreground/70";

  return (
    <div>
      <SEO
        title="Contact — ØRIONS"
        description="Let's talk. We'll point out the dead-end and the way out."
        path="/contact"
        schema={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://orions.agency/" },
            { "@type": "ListItem", position: 2, name: "Contact", item: "https://orions.agency/contact" },
          ],
        }}
      />

      {/* 01 · HERO */}
      <section className="px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto pt-32 md:pt-40 pb-16 md:pb-24">
          <PageMark index="01" total="02" />
          <Reveal>
            <h1 className="font-serif text-[52px] md:text-[88px] lg:text-[112px] leading-[1.0] tracking-[-0.03em] max-w-[14ch]">
              Tell us about <em className="text-orion italic">the brand.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 font-serif italic text-[18px] md:text-[22px] text-muted-foreground max-w-[640px] leading-[1.5]">
              30-min discovery call. Free. We reply within 24 hours — with an honest fit-check.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 items-center">
              <a href="mailto:hello@orions.agency" className="group inline-flex items-center gap-2 btn-label text-foreground border-b border-foreground pb-1 hover:opacity-70 transition-opacity">
                <Mail className="w-3.5 h-3.5" /> Email us
              </a>
              <a href="tel:+66923905464" className="group inline-flex items-center gap-2 btn-label text-foreground border-b border-foreground pb-1 hover:opacity-70 transition-opacity">
                <Phone className="w-3.5 h-3.5" /> +66 92 390 5464
              </a>
              <a href="https://line.me/ti/p/~orions" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 btn-label text-foreground border-b border-foreground pb-1 hover:opacity-70 transition-opacity">
                <MessageCircle className="w-3.5 h-3.5" /> LINE / WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 · INQUIRY — form + direct */}
      <section className="px-6 md:px-10 border-t border-foreground">
        <div className="max-w-[1280px] mx-auto py-20 md:py-28">
          <PageMark index="02" total="02" />
          <Reveal>
            <h2 className="font-serif text-[40px] md:text-[64px] lg:text-[80px] leading-[1.0] tracking-[-0.03em] max-w-[14ch]">
              Send a <em className="text-orion italic">brief.</em>
            </h2>
          </Reveal>

          <div className="mt-16 md:mt-24 border-t border-foreground grid grid-cols-1 md:grid-cols-12">
            {/* Form */}
            <Reveal className="md:col-span-7">
              <div className="py-10 md:py-12 md:pr-10">
                <div className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground">— FORM</div>
                <h3 className="mt-8 font-serif italic text-[40px] md:text-[48px] leading-[1] tracking-[-0.02em]">Brief.</h3>
                <p className="mt-6 font-serif italic text-orion text-[16px] md:text-[18px] leading-[1.4] max-w-[28ch]">"บอกเราว่าธุรกิจคุณติดอะไรอยู่ — เราตอบกลับภายใน 24 ชั่วโมง."</p>

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
                    <label className={labelCls}>— 04 / Brief</label>
                    <textarea
                      rows={5}
                      maxLength={2000}
                      value={form.brief}
                      onChange={(e) => setForm({ ...form, brief: e.target.value })}
                      placeholder="บอกเราว่าธุรกิจคุณติดอะไรอยู่"
                      aria-invalid={!!errors.brief}
                      className={`${inputCls} resize-none`}
                    />
                    {errors.brief && (
                      <p className="mt-2 font-mono text-[10px] tracking-[0.15em] uppercase text-destructive">{errors.brief}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="md:col-span-2 mt-4 inline-flex items-center justify-center gap-3 bg-foreground text-background px-7 py-4 btn-label hover:bg-orion transition-colors disabled:opacity-50"
                  >
                    <span>{submitting ? "Sending…" : "Send inquiry"}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </Reveal>

            {/* Direct */}
            <Reveal delay={0.08} className="md:col-span-5 border-t md:border-t-0 md:border-l border-foreground">
              <div className="py-10 md:py-12 md:pl-10">
                <div className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground">— DIRECT</div>
                <h3 className="mt-8 font-serif italic text-[40px] md:text-[48px] leading-[1] tracking-[-0.02em]">Direct.</h3>
                <p className="mt-6 font-serif italic text-orion text-[16px] md:text-[18px] leading-[1.4] max-w-[24ch]">"ตอบกลับภายใน 24 ชั่วโมง — Mon–Fri."</p>
                <p className="mt-4 font-thai text-[14px] leading-[1.7] text-muted-foreground">
                  อยากคุยตรง ๆ ทักได้เลย ทุกช่องทาง — ทีมเราอ่านเอง ตอบเอง ไม่ผ่านบอท.
                </p>

                <ul className="mt-7 pt-6 border-t border-dashed border-foreground/25 divide-y divide-foreground/10">
                  {[
                    { k: "Email", v: "hello@orions.agency", href: "mailto:hello@orions.agency" },
                    { k: "Phone", v: "+66 92 390 5464",    href: "tel:+66923905464" },
                    { k: "LINE",  v: "@orions",            href: "https://line.me/ti/p/~orions", ext: true },
                    { k: "WhatsApp", v: "+66 92 390 5464", href: "https://wa.me/66923905464",   ext: true },
                  ].map((row) => (
                    <li key={row.k} className="grid grid-cols-12 gap-3 py-3 items-baseline">
                      <span className="col-span-4 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">{row.k}</span>
                      <a
                        href={row.href}
                        target={row.ext ? "_blank" : undefined}
                        rel={row.ext ? "noreferrer" : undefined}
                        className="col-span-8 font-thai text-[15px] text-foreground hover:text-orion transition-colors break-all"
                      >
                        {row.v}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-dashed border-foreground/25">
                  <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">Studio</div>
                  <p className="mt-3 font-thai text-[14px] leading-[1.7] text-foreground/80">
                    246/8 Soi Yothinphatthana 3<br />
                    Khlong Chan, Bang Kapi<br />
                    Bangkok 10240, Thailand
                  </p>
                </div>

                <p className="mt-7 font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground">
                  Reply within 24 hours · Mon–Fri
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
