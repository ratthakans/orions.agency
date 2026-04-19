import { useState } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { toast } from "sonner";

const SERVICES = [
  "Creative Solution",
  "Applied Communication",
  "Social Media Marketing",
  "High Impact Production",
  "Not sure yet",
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", service: "Not sure yet", brief: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log("AUDIT REQUEST:", form);
    toast.success("ได้รับข้อมูลแล้ว — ทีม ØRIONS จะติดต่อกลับภายใน 1 วันทำการ");
    setForm({ name: "", company: "", email: "", service: "Not sure yet", brief: "" });
  };

  const inputCls = "bg-transparent border border-border px-4 py-4 text-[15px] placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors";

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
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name" className={inputCls} />
              <input required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company" className={inputCls} />
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className={`md:col-span-2 ${inputCls}`} />

              <div className="md:col-span-2">
                <label className="label-mono text-muted-foreground">Service of interest</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className={`mt-3 w-full ${inputCls} appearance-none cursor-pointer`}
                >
                  {SERVICES.map((s) => (
                    <option key={s} value={s} className="bg-background text-foreground">{s}</option>
                  ))}
                </select>
              </div>

              <textarea required value={form.brief} onChange={(e) => setForm({ ...form, brief: e.target.value })} placeholder="Brief Challenge — บอกเราว่าธุรกิจคุณติดอะไรอยู่" rows={6}
                className={`md:col-span-2 ${inputCls} resize-none`} />
              <button type="submit"
                className="md:col-span-2 inline-flex items-center justify-center gap-3 bg-grad text-background px-8 py-4 label-mono hover:opacity-90 transition-opacity mt-2">
                Book Your Audit <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-8 flex items-center gap-3 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <a href="mailto:hello@orions.agency?subject=Book%20a%20call" className="label-mono hover:text-foreground transition-colors">
                Prefer to talk? Book a call →
              </a>
            </div>
          </Reveal>

          {/* INFO */}
          <Reveal delay={0.1} className="lg:col-span-5 lg:border-l border-border lg:pl-12 space-y-10">
            <div>
              <div className="label-mono text-grad-soft">Response promise</div>
              <p className="mt-3 body-l font-thai text-foreground/90">เราตอบกลับภายใน 1 วันทำการ ทุกข้อความ</p>
            </div>

            <div>
              <div className="label-mono text-muted-foreground">Email</div>
              <a href="mailto:hello@orions.agency" className="mt-3 block display-s hover:text-grad transition-colors break-all">
                hello@orions.agency
              </a>
            </div>

            <div>
              <div className="label-mono text-muted-foreground">Telephone</div>
              <a href="tel:+66923905464" className="mt-3 block display-s hover:text-grad transition-colors">
                +66 92 390 5464
              </a>
            </div>

            <div>
              <div className="label-mono text-muted-foreground">Studio</div>
              <p className="mt-3 body-l font-thai">
                246/8 Soi Yothin Pattana 3<br />
                Khlong Chan, Bang Kapi<br />
                Bangkok 10240, Thailand
              </p>
              <div className="mt-3 label-mono text-muted-foreground">Mon–Fri · 10:00–19:00 ICT</div>
            </div>

            <div className="border-t border-border pt-8">
              <div className="label-mono text-grad-soft">What you'll get</div>
              <ul className="mt-4 space-y-3 body-m font-thai text-foreground/85">
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
