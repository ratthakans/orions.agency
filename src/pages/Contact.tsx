import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { z } from "zod";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const accent = "text-gradient";

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

  const inputCls = "bg-transparent border-b border-foreground/30 px-0 py-3 text-[15px] placeholder:text-muted-foreground focus:outline-none focus:border-foreground focus:placeholder:opacity-40 transition-colors font-thai";

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

      {/* HERO — dark, single clear message */}
      <section className="relative bg-foreground text-background">
        <div className="px-6 md:px-10 pt-40 md:pt-48 pb-24 md:pb-32 max-w-[1200px] mx-auto">
          <Reveal delay={0.05}>
            <p className="font-mono text-[10px] tracking-[0.4em] text-background/60 mb-10">— CONTACT</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display h-display-md text-balance max-w-[900px]">
              Tell us about <span className={accent}>the brand.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 font-thai text-[15px] md:text-[17px] leading-[1.65] text-background/70 max-w-[560px]">
              30-min discovery call. Free. We reply within 24 hours — with an honest fit-check.
            </p>
          </Reveal>
        </div>
      </section>

      {/* INQUIRY — form + direct contact, single clean section */}
      <section className="px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-t border-foreground">
          {/* Form */}
          <Reveal className="lg:col-span-7 pt-12 md:pt-16">
            <p className="font-mono text-[10px] tracking-[0.4em] text-muted-foreground mb-6">— INQUIRY</p>
            <h2 className="font-display h-display-sm max-w-[520px]">
              Send us a <span className={accent}>brief.</span>
            </h2>
            <p className="mt-6 max-w-[480px] font-thai text-[14px] leading-[1.7] text-foreground/70">
              Tell us about your brand. We'll reply within 24 hours with an honest fit-check.
            </p>

            <form onSubmit={submit} noValidate className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {[
                { key: "name",    label: "Name",    type: "text",  ph: "Your name",            ac: "name",         span: "md:col-span-1" },
                { key: "company", label: "Company", type: "text",  ph: "Company",              ac: "organization", span: "md:col-span-1" },
                { key: "email",   label: "Email",   type: "email", ph: "you@company.com",      ac: "email",        span: "md:col-span-2" },
              ].map((f, i) => (
                <div key={f.key} className={f.span}>
                  <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                    — 0{i + 1} / {f.label}
                  </label>
                  <input
                    type={f.type}
                    autoComplete={f.ac}
                    maxLength={f.key === "email" ? 255 : f.key === "company" ? 150 : 100}
                    value={form[f.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    placeholder={f.ph}
                    aria-invalid={!!errors[f.key as keyof FieldErrors]}
                    className={`w-full ${inputCls}`}
                  />
                  {errors[f.key as keyof FieldErrors] && (
                    <p className="mt-2 font-mono text-[10px] tracking-[0.15em] uppercase text-destructive">
                      {errors[f.key as keyof FieldErrors]}
                    </p>
                  )}
                </div>
              ))}

              <div className="md:col-span-2">
                <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                  — 04 / Brief
                </label>
                <textarea
                  rows={5}
                  maxLength={2000}
                  value={form.brief}
                  onChange={(e) => setForm({ ...form, brief: e.target.value })}
                  placeholder="บอกเราว่าธุรกิจคุณติดอะไรอยู่"
                  aria-invalid={!!errors.brief}
                  className={`w-full ${inputCls} resize-none`}
                />
                {errors.brief && (
                  <p className="mt-2 font-mono text-[10px] tracking-[0.15em] uppercase text-destructive">{errors.brief}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="md:col-span-2 mt-4 inline-flex items-center justify-between bg-foreground text-background px-7 py-5 font-mono text-[10px] tracking-[0.25em] uppercase hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                <span>{submitting ? "Sending…" : "Send inquiry"}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </Reveal>

          {/* Direct contact */}
          <Reveal delay={0.1} className="lg:col-span-5 pt-12 md:pt-16 lg:border-l lg:border-soft lg:pl-12 space-y-10">
            <p className="font-mono text-[10px] tracking-[0.4em] text-muted-foreground">— DIRECT</p>
            <div>
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">EMAIL</div>
              <a href="mailto:hello@orions.agency" className="mt-3 block font-display text-[20px] md:text-[24px] tracking-[-0.01em] hover:opacity-60 transition-opacity break-all">
                hello@orions.agency
              </a>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">TELEPHONE</div>
              <a href="tel:+66923905464" className="mt-3 block font-display text-[20px] md:text-[24px] tracking-[-0.01em] hover:opacity-60 transition-opacity">
                +66 92 390 5464
              </a>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">STUDIO</div>
              <p className="mt-3 font-thai text-[14px] leading-[1.7] text-foreground/70">
                246/8 Soi Yothinphatthana 3<br />
                Khlong Chan, Bang Kapi<br />
                Bangkok 10240, Thailand
              </p>
            </div>
            <div className="pt-8 border-t border-soft">
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">RESPONSE</div>
              <p className="mt-3 font-thai text-[14px] leading-[1.7] text-foreground/70">
                We reply within <span className="text-foreground">24 hours</span>, Mon–Fri.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
