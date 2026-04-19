import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", brief: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log("INQUIRY:", form);
    toast.success("ได้รับข้อมูลแล้ว — ทีม ØRIONS จะติดต่อกลับภายใน 24 ชม.");
    setForm({ name: "", company: "", email: "", brief: "" });
  };

  const inputCls = "bg-transparent border-b border-foreground px-0 py-3 text-[15px] placeholder:text-muted-foreground focus:outline-none focus:border-b-2 transition-all font-thai";

  return (
    <div>
      <SEO title="Contact — ØRIONS" description="Let's talk. We'll point out the dead-end and the way out." path="/contact" />

      <section className="px-6 md:px-10 pt-28 md:pt-32 pb-16 md:pb-24">
        <Reveal>
          <h1 className="font-display text-[56px] md:text-[128px] leading-[0.86] tracking-[-0.05em]">
            Tell us<br />
            what's{" "}
            <span
              className="italic font-normal"
              style={{ fontFamily: "'Cutive', serif", textTransform: "none", letterSpacing: "-0.02em" }}
            >
              stuck
            </span>
            <span className="text-muted-foreground">.</span>
          </h1>
        </Reveal>
      </section>

      {/* ØRIONS AUDIT — featured anchor card */}
      <section id="audit" className="px-6 md:px-10 pb-16 md:pb-24 scroll-mt-24">
        <Reveal>
          <div className="border border-foreground bg-foreground text-background grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 p-8 md:p-12 lg:border-r lg:border-background/20">
              <div className="index-badge opacity-70">FREE DIAGNOSTIC · LIMITED SLOTS</div>
              <h2 className="mt-6 font-display text-[36px] md:text-[56px] leading-[0.95] tracking-[-0.03em]">
                ØRIONS Audit.<br />Free.
              </h2>
              <p className="mt-6 max-w-[520px] text-[15px] md:text-[16px] leading-[1.7] font-thai opacity-85">
                เราไม่ได้มาขอโอกาส แต่มาเพื่อชี้ 'จุดตาย' และหา 'ทางรอด' ให้ธุรกิจของคุณ — รับเฉพาะธุรกิจที่ต้องการความเปลี่ยนแปลงจริงๆ เท่านั้น
              </p>
              <a href="#inquiry" className="mt-10 inline-flex items-center gap-3 bg-background text-foreground px-7 py-4 index-badge hover:opacity-90 transition-opacity">
                Request your audit <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <ul className="lg:col-span-5 p-8 md:p-12 space-y-6">
              {[
                { n: "01", t: "60-min Diagnostic", b: "วิเคราะห์จุดตันและจุดที่งบรั่วไหลด้วยตรรกะและข้อมูล" },
                { n: "02", t: "Applied Roadmap", b: "แนวทางแก้ไขเบื้องต้น พร้อมลำดับความสำคัญ" },
                { n: "03", t: "No Strings", b: "ไม่มีค่าใช้จ่าย ไม่มี pitch deck — ตรงประเด็นเท่านั้น" },
              ].map((it) => (
                <li key={it.n} className="border-t border-background/20 pt-5">
                  <div className="index-badge opacity-60">{it.n}</div>
                  <div className="mt-2 font-display text-[20px] md:text-[22px]">{it.t}</div>
                  <p className="mt-2 text-[13px] leading-[1.6] font-thai opacity-80">{it.b}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section id="inquiry" className="px-6 md:px-10 pb-20 md:pb-28 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              <div className="md:col-span-1">
                <label className="index-badge text-muted-foreground">01 / NAME</label>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name"
                  className={`w-full ${inputCls}`} />
              </div>
              <div className="md:col-span-1">
                <label className="index-badge text-muted-foreground">02 / COMPANY</label>
                <input required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company"
                  className={`w-full ${inputCls}`} />
              </div>
              <div className="md:col-span-2 mt-4">
                <label className="index-badge text-muted-foreground">03 / EMAIL</label>
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com"
                  className={`w-full ${inputCls}`} />
              </div>
              <div className="md:col-span-2 mt-4">
                <label className="index-badge text-muted-foreground">04 / BRIEF</label>
                <textarea required value={form.brief} onChange={(e) => setForm({ ...form, brief: e.target.value })} placeholder="บอกเราว่าธุรกิจคุณติดอะไรอยู่" rows={5}
                  className={`w-full ${inputCls} resize-none`} />
              </div>
              <button type="submit"
                className="md:col-span-2 mt-8 inline-flex items-center justify-between bg-foreground text-background px-7 py-5 index-badge hover:opacity-90 transition-opacity">
                <span>Send inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5 lg:border-l lg:border-foreground lg:pl-12 space-y-10">
            <div className="border-t border-foreground pt-3">
              <span className="index-badge font-bold">DIRECT</span>
            </div>
            <div>
              <div className="index-badge text-muted-foreground">EMAIL</div>
              <a href="mailto:hello@orions.agency" className="mt-2 block font-display text-[20px] md:text-[24px] hover:underline break-all">
                hello@orions.agency
              </a>
            </div>
            <div>
              <div className="index-badge text-muted-foreground">TELEPHONE</div>
              <a href="tel:+66923905464" className="mt-2 block font-display text-[20px] md:text-[24px] hover:underline">
                +66 92 390 5464
              </a>
            </div>
            <div>
              <div className="index-badge text-muted-foreground">STUDIO</div>
              <p className="mt-2 font-display text-[16px] md:text-[18px] leading-[1.5] font-thai font-normal normal-case">
                246/8 Soi Yothinphatthana<br />
                Bang Kapi, Bangkok 10240<br />
                Thailand
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
