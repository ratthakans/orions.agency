import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", brief: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log("AUDIT REQUEST:", form);
    toast.success("ได้รับข้อมูลแล้ว — ทีม ØRIONS จะติดต่อกลับภายใน 24 ชม.");
    setForm({ name: "", company: "", email: "", brief: "" });
  };

  return (
    <div>
      <SEO title="Contact — ØRIONS" description="Book the Clarity Audit. We'll point out the dead-end and the way out, in 60 minutes." path="/contact" />

      <PageHero
        eyebrowNumber="01"
        eyebrowLabel="LET'S WORK"
        title="The Clarity Audit."
        subtitle="เราไม่ได้มาขอโอกาส เรามาเพื่อชี้ 'จุดตาย' และหา 'ทางรอด' ให้คุณ — ภายใน 60 นาที โดยไม่มีค่าใช้จ่าย"
      />

      <section className="px-6 md:px-12 py-16 md:py-24 border-t border-border">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* FORM */}
          <Reveal className="lg:col-span-7">
            <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name"
                className="bg-transparent border border-border px-4 py-4 text-[15px] placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors" />
              <input required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company"
                className="bg-transparent border border-border px-4 py-4 text-[15px] placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors" />
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email"
                className="md:col-span-2 bg-transparent border border-border px-4 py-4 text-[15px] placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors" />
              <textarea required value={form.brief} onChange={(e) => setForm({ ...form, brief: e.target.value })} placeholder="Brief Challenge — บอกเราว่าธุรกิจคุณติดอะไรอยู่" rows={6}
                className="md:col-span-2 bg-transparent border border-border px-4 py-4 text-[15px] placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none" />
              <button type="submit"
                className="md:col-span-2 inline-flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 label-mono hover:bg-foreground/90 transition-colors mt-2">
                Book Your Audit <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </Reveal>

          {/* INFO */}
          <Reveal delay={0.1} className="lg:col-span-5 lg:border-l border-border lg:pl-12 space-y-10">
            <div>
              <div className="label-mono text-muted-foreground">Email</div>
              <a href="mailto:hello@orions.agency" className="mt-3 block font-display text-[20px] md:text-[24px] hover:text-grad transition-colors break-all">
                hello@orions.agency
              </a>
            </div>
            <div>
              <div className="label-mono text-muted-foreground">Telephone</div>
              <a href="tel:+66923905464" className="mt-3 block font-display text-[20px] md:text-[24px] hover:text-grad transition-colors">
                +66 92 390 5464
              </a>
            </div>
            <div>
              <div className="label-mono text-muted-foreground">Studio</div>
              <p className="mt-3 font-display text-[18px] leading-[1.5] font-thai">
                246/8 Soi Yothinphatthana<br />
                Bang Kapi, Bangkok 10240<br />
                Thailand
              </p>
            </div>
            <div className="border-t border-border pt-8">
              <div className="label-mono text-grad-soft">What you'll get</div>
              <ul className="mt-4 space-y-3 text-[14px] leading-[1.6] font-thai text-foreground/85">
                <li className="flex gap-3"><span className="mt-[7px] h-[5px] w-[5px] bg-grad shrink-0" /> วิเคราะห์จุดตันของธุรกิจคุณภายใน 60 นาที</li>
                <li className="flex gap-3"><span className="mt-[7px] h-[5px] w-[5px] bg-grad shrink-0" /> แนวทางแก้ไขเบื้องต้น พร้อมลำดับความสำคัญ</li>
                <li className="flex gap-3"><span className="mt-[7px] h-[5px] w-[5px] bg-grad shrink-0" /> รับเฉพาะธุรกิจที่ต้องการเปลี่ยนแปลงจริง</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
