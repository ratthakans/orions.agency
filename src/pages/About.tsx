import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import povCrosswalk from "@/assets/deck/pov-crosswalk.jpg";

const About = () => (
  <div>
    <SEO title="About — ØRIONS" description="Idea-led creative agency from Bangkok. We help businesses escape the social vicious cycle." path="/about" />

    <PageHero
      eyebrowNumber="01"
      eyebrowLabel="WHO WE ARE"
      title="An idea-led creative agency."
      subtitle="ØRIONS เชื่อว่าวันนี้ ไอเดียที่ชัด คอนเทนต์ที่มีคุณภาพ และการสื่อสารที่มีกลยุทธ์ ไม่ใช่แค่ทางเลือก — แต่คือทางรอด"
    />

    {/* POV */}
    <section className="px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <Reveal className="md:col-span-5">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={povCrosswalk} alt="Crosswalk POV" className="w-full h-full object-cover duotone" loading="lazy" />
          </div>
        </Reveal>
        <div className="md:col-span-7 flex flex-col justify-center space-y-8">
          <Reveal><SectionLabel number="02" label="THE POINT OF VIEW" /></Reveal>
          <Reveal delay={0.1}>
            <p className="font-thai text-[20px] md:text-[26px] leading-[1.55]">
              <span className="text-foreground font-medium">ปัญหาของหลายธุรกิจวันนี้</span>
              <span className="text-muted-foreground"> ไม่ใช่การทำไม่พอ แต่คือการทำมากเกินไป โดยไม่ได้ความชัดเจนกลับมา</span>
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-thai text-[20px] md:text-[26px] leading-[1.55]">
              <span className="text-foreground font-medium">ØRIONS</span>
              <span className="text-muted-foreground"> ไม่ได้เข้ามาสร้าง noise เพิ่ม แต่เข้ามาเพื่อ </span>
              <span className="text-accent">ลด digital waste</span>
              <span className="text-muted-foreground"> ด้วยงานที่คิดมาดี ทำมาคม</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    {/* WHY AGENCY — Comparison */}
    <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionLabel number="03" label="WHY AGENCY" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-[36px] md:text-[56px] leading-[1.05] max-w-[900px]">
            Why an <span className="text-accent">agency</span>—<br />not just a consultant or studio.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-[640px] text-[16px] leading-[1.7] text-muted-foreground font-thai">
            ทำไมบางโจทย์ถึงต้องใช้ agency ไม่ใช่แค่ consultant หรือ studio
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {[
            { t: "CONSULTANT", s: "ช่วยคิดได้",  b: "แต่ไม่ได้พาไอเดียไปสู่ execution เสมอไป", muted: true },
            { t: "STUDIO",     s: "ช่วยทำได้",   b: "แต่ไม่ได้เริ่มจากปัญหาธุรกิจที่ลึกพอทุกครั้ง", muted: true },
            { t: "ØRIONS",     s: "เชื่อมการคิดเข้ากับการทำ", b: "เพื่อให้ direction กลายเป็นงานที่ใช้ได้จริง", muted: false },
          ].map((c) => (
            <Reveal key={c.t}>
              <div className={`p-8 md:p-10 h-full ${c.muted ? "bg-background" : "bg-foreground text-background relative"}`}>
                <div className={`label-mono ${c.muted ? "text-muted-foreground" : "text-background/60"}`}>
                  {c.muted ? "VS" : "OUR APPROACH"}
                </div>
                <h3 className={`mt-6 font-display text-[28px] md:text-[36px] ${c.muted ? "" : "text-background"}`}>{c.t}</h3>
                <div className={`mt-4 font-thai font-medium text-[18px] ${c.muted ? "text-foreground" : "text-background"}`}>{c.s}</div>
                <p className={`mt-4 text-[14px] leading-[1.7] font-thai ${c.muted ? "text-muted-foreground" : "text-background/75"}`}>{c.b}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-12 font-thai text-[18px] md:text-[22px] italic text-foreground/85 max-w-[720px]">
            "ไม่ใช่แค่คนที่คิดเป็น ไม่ใช่แค่คนที่ทำเป็น แต่คือคนที่ทำให้งาน <span className="text-accent">ขยับได้จริง</span>"
          </p>
        </Reveal>
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 md:px-12 py-28 border-t border-border">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <h2 className="font-display text-[36px] md:text-[52px] leading-[1.05]">
            Let's build the next<br /><span className="text-accent">chapter together.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 bg-accent-solid text-accent-foreground px-7 py-4 label-mono hover:opacity-90 transition-opacity">
            Get in touch <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  </div>
);

export default About;
