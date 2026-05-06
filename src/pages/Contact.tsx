import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { toast } from "sonner";

const accent = "text-gradient";

const whyUs = [
  { n: "01", title: "Small team. Your team.",     body: "You talk to who's doing the work. No telephone game." },
  { n: "02", title: "Strategy before pretty.",    body: "We plan before we post." },
  { n: "03", title: "Ads inside the plan.",       body: "Paid ads built into your strategy from day one." },
  { n: "04", title: "Built for boutique brands.", body: "We work with brands who care about quality." },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", brief: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log("INQUIRY:", form);
    toast.success("ได้รับข้อมูลแล้ว — ทีม ØRIONS จะติดต่อกลับภายใน 24 ชม.");
    setForm({ name: "", company: "", email: "", brief: "" });
  };

  const inputCls = "bg-transparent border-b border-foreground px-0 py-3 text-[15px] placeholder:text-muted-foreground focus:outline-none focus:border-foreground focus:placeholder:opacity-40 transition-all font-thai";

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

      <PageHero
        eyebrow="CONTACT · INDEX"
        verticalLabel="/ 05 · CONTACT"
        title={<>Tell us about<br /><span className="italic text-muted-foreground">the brand.</span></>}
      />

      <section id="audit" className="px-6 md:px-10 py-16 md:py-24 scroll-mt-24">
        {/* Live availability marquee */}
        <Reveal>
          <div className="border border-foreground border-b-0 bg-background overflow-hidden">
            <div className="marquee py-3">
              <div className="marquee-track index-badge text-foreground items-center">
                {Array.from({ length: 2 }).flatMap((_, loop) =>
                  [
                    { dot: true, text: "Now booking — Q3 2026" },
                    { text: "New inquiry · F&B · Bangkok" },
                    { text: "Discovery booked · Fashion drop" },
                    { dot: true, text: "Reply within 24h" },
                    { text: "New inquiry · Boutique hotel" },
                    { text: "Discovery booked · Café group" },
                    { dot: true, text: "30-min · Free · Honest" },
                    { text: "New inquiry · Hospitality group" },
                  ].map((item, i) => (
                    <span key={`${loop}-${i}`} className="inline-flex items-center gap-3 shrink-0">
                      {item.dot ? (
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-60"></span>
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground"></span>
                        </span>
                      ) : (
                        <span className="font-mono text-[10px] text-muted-foreground">●</span>
                      )}
                      <span>{item.text}</span>
                      <span className="text-muted-foreground">/</span>
                    </span>
                  ))
                )}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="border border-foreground bg-foreground text-background grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 p-8 md:p-12 lg:border-r lg:border-background/20">
              <div className="index-badge opacity-90 inline-flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ backgroundColor: "hsl(var(--accent-from))" }}></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: "hsl(var(--accent-from))" }}></span>
                </span>
                ✦ NOW BOOKING — Q3 2026
              </div>
              <h2 className="mt-6 font-display h-display-sm">
                30-min discovery<span className="text-background/60">.</span><br /><span className="italic">Free</span><span className="text-background/60">.</span>
              </h2>
              <p className="mt-6 max-w-[520px] text-[15px] md:text-[16px] leading-[1.7] font-thai text-background/85">
                Tell us about the brand. We'll reply within 24 hours with an honest fit-check — และถ้าเหมาะ เราจะส่ง short proposal พร้อมตัวเลขจริงให้
              </p>
              <a href="#inquiry" className="mt-10 inline-flex items-center gap-3 bg-background text-foreground px-7 py-4 index-badge hover:bg-muted-foreground hover:text-background transition-colors">
                Book the call <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <ul className="lg:col-span-5 p-8 md:p-12 space-y-6">
              {[
                { n: "01", t: "30-min call", b: "เราฟังก่อน — เข้าใจแบรนด์ เข้าใจเป้าหมาย" },
                { n: "02", t: "Honest fit-check", b: "ถ้าไม่เหมาะ เราจะบอกตรง ๆ ไม่มี pitch deck" },
                { n: "03", t: "Short proposal", b: "ถ้าเหมาะ ส่งตัวเลขจริงและ scope ภายใน 1 สัปดาห์" },
              ].map((it) => (
                <li key={it.n} className="border-t border-background/20 pt-5">
                  <div className="index-badge text-background/60">{it.n}</div>
                  <div className="mt-3 font-display h-display-2xs">{it.t}</div>
                  <p className="mt-2 text-[13px] leading-[1.6] font-thai text-background/80">{it.b}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section id="inquiry" className="px-6 md:px-10 scroll-mt-24">
        <div className="border-t border-foreground py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          <Reveal className="lg:col-span-7">
            <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              <div className="md:col-span-1">
                <label className="index-badge text-muted-foreground">01 / NAME</label>
                <input required autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name"
                  className={`w-full ${inputCls}`} />
              </div>
              <div className="md:col-span-1">
                <label className="index-badge text-muted-foreground">02 / COMPANY</label>
                <input required autoComplete="organization" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company"
                  className={`w-full ${inputCls}`} />
              </div>
              <div className="md:col-span-2 mt-4">
                <label className="index-badge text-muted-foreground">03 / EMAIL</label>
                <input required type="email" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com"
                  className={`w-full ${inputCls}`} />
              </div>
              <div className="md:col-span-2 mt-4">
                <label className="index-badge text-muted-foreground">04 / BRIEF</label>
                <textarea required value={form.brief} onChange={(e) => setForm({ ...form, brief: e.target.value })} placeholder="บอกเราว่าธุรกิจคุณติดอะไรอยู่" rows={5}
                  className={`w-full ${inputCls} resize-none`} />
              </div>
              <button type="submit"
                className="md:col-span-2 mt-8 inline-flex items-center justify-between bg-foreground text-background px-7 py-5 index-badge hover:opacity-95 transition-opacity">
                <span>Send inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5 lg:border-l lg:border-foreground lg:pl-12 space-y-10">
            <div className="border-t border-foreground pt-3">
              <span className="index-badge">DIRECT</span>
            </div>
            <div>
              <div className="index-badge text-muted-foreground">EMAIL</div>
              <a href="mailto:hello@orions.agency" className="mt-3 block font-display h-display-2xs hover:underline break-all">
                hello@orions.agency
              </a>
            </div>
            <div>
              <div className="index-badge text-muted-foreground">TELEPHONE</div>
              <a href="tel:+66923905464" className="mt-3 block font-display h-display-2xs hover:underline">
                +66 92 390 5464
              </a>
            </div>
            <div>
              <div className="index-badge text-muted-foreground">STUDIO</div>
              <p className="mt-3 font-thai text-[15px] md:text-[16px] leading-[1.6]">
                246/8 Soi Yothinphatthana 3<br />
                Khlong Chan, Bang Kapi<br />
                Bangkok 10240, Thailand
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative px-6 md:px-10">
        <div className="border-t border-foreground py-20 md:py-28 max-w-[1200px] mx-auto">
          <Reveal><p className="index-badge text-muted-foreground">— WHY US</p></Reveal>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start">
            <Reveal>
              <h2 className="font-display h-display-sm">
                Why <span className={accent}>us?</span>
              </h2>
            </Reveal>
            <div className="md:col-span-2 md:border-l border-foreground md:pl-10">
              <ul>
                {whyUs.map((w, i) => (
                  <Reveal key={w.n} delay={0.05 * i}>
                    <li className={`grid grid-cols-[auto,1fr] gap-8 py-6 ${i < whyUs.length - 1 ? "border-b border-soft" : ""}`}>
                      <div className={`font-display ${accent} text-[28px] leading-[1] tracking-[-0.02em] tabular-nums`}>{w.n}</div>
                      <div>
                        <div className="font-display text-[16px] md:text-[18px] tracking-[-0.01em]">{w.title}</div>
                        <p className="mt-2 font-thai text-[13px] leading-[1.6] text-foreground/70">{w.body}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
