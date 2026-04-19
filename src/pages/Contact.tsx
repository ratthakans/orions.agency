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
    console.log("INQUIRY:", form);
    toast.success("ได้รับข้อมูลแล้ว — ทีม ØRIONS จะติดต่อกลับภายใน 24 ชม.");
    setForm({ name: "", company: "", email: "", brief: "" });
  };

  return (
    <div>
      <SEO title="Contact — ØRIONS" description="Let's talk. Sharper ideas, clearer direction — start the conversation." path="/contact" />

      <PageHero
        eyebrowNumber="01"
        eyebrowLabel="LET'S TALK"
        title="Let's talk."
        subtitle="ถ้าธุรกิจของคุณกำลังหาความชัดเจน — เราพร้อมเป็นทีมที่ช่วยตีโจทย์ใหม่ บอกเราว่าคุณกำลังเจออะไรอยู่"
      />

      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <Reveal className="lg:col-span-7">
            <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name"
                className="bg-transparent border border-border px-4 py-4 text-[15px] font-thai placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors" />
              <input required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company"
                className="bg-transparent border border-border px-4 py-4 text-[15px] font-thai placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors" />
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email"
                className="md:col-span-2 bg-transparent border border-border px-4 py-4 text-[15px] font-thai placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors" />
              <textarea required value={form.brief} onChange={(e) => setForm({ ...form, brief: e.target.value })} placeholder="Brief — บอกเราว่าธุรกิจคุณติดอะไรอยู่" rows={6}
                className="md:col-span-2 bg-transparent border border-border px-4 py-4 text-[15px] font-thai placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none" />
              <button type="submit"
                className="md:col-span-2 inline-flex items-center justify-center gap-3 bg-accent-solid text-accent-foreground px-8 py-4 label-mono hover:opacity-90 transition-opacity mt-2">
                Send Inquiry <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5 lg:border-l border-border lg:pl-12 space-y-10">
            <div>
              <div className="label-mono text-muted-foreground">Email</div>
              <a href="mailto:hello@orions.agency" className="mt-3 block font-display text-[20px] md:text-[24px] hover:text-accent transition-colors break-all">
                hello@orions.agency
              </a>
            </div>
            <div>
              <div className="label-mono text-muted-foreground">Telephone</div>
              <a href="tel:+66923905464" className="mt-3 block font-display text-[20px] md:text-[24px] hover:text-accent transition-colors">
                +66 92 390 5464
              </a>
            </div>
            <div>
              <div className="label-mono text-muted-foreground">Studio</div>
              <p className="mt-3 font-thai text-[18px] leading-[1.55]">
                246/8 Soi Yothinphatthana<br />
                Bang Kapi<br />
                Bangkok 10240, Thailand
              </p>
            </div>
            <div>
              <div className="label-mono text-muted-foreground">Web</div>
              <p className="mt-3 font-display text-[18px]">
                orions.agency
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
