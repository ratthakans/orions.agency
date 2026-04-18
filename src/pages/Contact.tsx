import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
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

      <PageHero
        eyebrowNumber="01"
        eyebrowLabel="LET'S TALK"
        title="Tell us what's stuck."
        subtitle="เริ่มจากการคุยสั้นๆ — เราจะฟังโจทย์ ชี้จุดตันและทางรอดให้คุณภายใน 60 นาที โดยไม่มีค่าใช้จ่าย"
      />

      <section className="px-6 md:px-10 pb-20 md:pb-28">
        <SectionHeader left="02 — INQUIRY" right="reply within 24h" />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
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
            <div className="border-t border-foreground pt-6">
              <span className="index-badge font-bold">WHAT YOU'LL GET</span>
              <ul className="mt-5 space-y-3 text-[14px] leading-[1.6] font-thai">
                <li className="flex gap-3"><span className="font-display text-[12px] mt-[2px]">→</span><span>วิเคราะห์จุดตันของธุรกิจคุณภายใน 60 นาที</span></li>
                <li className="flex gap-3"><span className="font-display text-[12px] mt-[2px]">→</span><span>แนวทางแก้ไขเบื้องต้น พร้อมลำดับความสำคัญ</span></li>
                <li className="flex gap-3"><span className="font-display text-[12px] mt-[2px]">→</span><span>รับเฉพาะธุรกิจที่ต้องการเปลี่ยนแปลงจริง</span></li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
