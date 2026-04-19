import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";

import democratImg from "@/assets/projects/democrat.jpg";
import gcooImg from "@/assets/projects/gcoo.jpg";
import myhotelImg from "@/assets/projects/myhotel.jpg";
import hongmoveImg from "@/assets/projects/hongmove.jpg";
import heavyImg from "@/assets/projects/heavy.jpg";
import khaoyaiImg from "@/assets/projects/khaoyai.jpg";
import rtafImg from "@/assets/projects/rtaf.jpg";
import polawatImg from "@/assets/projects/polawat.jpg";
import leicesterImg from "@/assets/projects/leicester.jpg";
import buriramImg from "@/assets/projects/buriram.jpg";
import audiImg from "@/assets/projects/audi.jpg";
import sirirajImg from "@/assets/projects/siriraj.jpg";
import tatImg from "@/assets/projects/tat.jpg";
import thuean1Img from "@/assets/projects/thuean1.jpg";
import thuean2Img from "@/assets/projects/thuean2.jpg";
import upgradeImg from "@/assets/projects/upgrade.jpg";
import khuanhaeoImg from "@/assets/projects/khuanhaeo.jpg";
import koetkaeImg from "@/assets/projects/koetkae.jpg";
import lastnoteImg from "@/assets/projects/lastnote.jpg";

const heroProjects = [
  { name: "พรรคประชาธิปัตย์", image: democratImg, tag: "POLITICAL", challenge: "แรงต้านทางการเมืองฝั่งซ้าย / ข้อจำกัดของกฎหมายเลือกตั้ง", url: "democrat.or.th" },
  { name: "GCOO", image: gcooImg, tag: "MOBILITY", challenge: "ข้อกฎหมาย และการติดตั้งจุดวางรถ", url: "gcoo.io" },
  { name: "MY HOTEL", image: myhotelImg, tag: "HOSPITALITY", challenge: "การดีลกับผู้ให้บริการให้เกิดความเชื่อถือ", url: "pzentsmart.com" },
  { name: "HONG MOVE", image: hongmoveImg, tag: "MOBILITY", challenge: "ความหลากหลายทางภาษา รองรับมาลายู จีน อาราบิก ฮินดี", url: "hongmove.co.th" },
];

const selectedProjects = [
  { name: "HEAVY ORGANIZER", image: heavyImg, tag: "EVENTS", challenge: "Green music festival ที่ลด carbon footprint", url: "heavyorganizer.com" },
  { name: "เขาใหญ่ คันทรีคลับ", image: khaoyaiImg, tag: "HOSPITALITY", challenge: "ปรับมุมมองให้เป็น leisure golf โดยไม่เสียภาพลักษณ์เดิม", url: "brc-kycgolf.com" },
  { name: "กองทัพอากาศ (RTAF)", image: rtafImg, tag: "GOVERNMENT", challenge: "Fake news / สื่อสารโดยรักษาความลับทางราชการ", url: "rtaf.mi.th" },
  { name: "พรรคพลวัต", image: polawatImg, tag: "POLITICAL", challenge: "พรรคใหม่ที่ต้องนำเสนอภายใต้เวลาจำกัด", url: "polawatparty.com" },
];

const commercials = [
  { name: "LEICESTER CITY", image: leicesterImg, category: "SPORTS BRAND" },
  { name: "BURIRAM ESPORT", image: buriramImg, category: "ESPORT" },
  { name: "AUDI THAILAND", image: audiImg, category: "AUTOMOTIVE" },
  { name: "SIRIRAJ HOSPITAL", image: sirirajImg, category: "HEALTHCARE" },
  { name: "TAT", image: tatImg, category: "TOURISM" },
];

const longform = [
  { name: "เถื่อน Travel — Bad Bad World", image: thuean1Img, category: "DOCUMENTARY" },
  { name: "เถื่อน Travel — Ukraine", image: thuean2Img, category: "DOCUMENTARY" },
  { name: "THE UPGRADE", image: upgradeImg, category: "SERIES" },
  { name: "เพลงลำคำเขื่อนแก้ว", image: khuanhaeoImg, category: "MUSIC & CULTURE" },
  { name: "เกิด แก่ เจ็บ โต", image: koetkaeImg, category: "DOCUMENTARY" },
  { name: "FINDING THE LAST NOTE", image: lastnoteImg, category: "FILM" },
];

const Work = () => (
  <div>
    <SEO title="Work — ØRIONS" description="Selected projects across mobility, hospitality, politics, healthcare and culture." path="/work" />

    <PageHero
      eyebrowNumber="01"
      eyebrowLabel="SELECTED WORK"
      title="Direction turned into work."
      subtitle="งานที่เราเลือกมาเพื่อแสดงวิธีคิดของ ØRIONS — ตั้งแต่กลยุทธ์ การสื่อสาร ไปจนถึงงานผลิตที่สร้างผลลัพธ์จริง"
    />

    {/* HERO PROJECTS */}
    <section className="px-6 md:px-12 py-20 md:py-28 border-t border-border bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionLabel number="02" label="HERO PROJECTS" /></Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {heroProjects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <article className="group bg-background border border-border ring-grad-hover transition-all duration-300 h-full flex flex-col">
                <div className="aspect-[16/10] relative overflow-hidden bg-muted">
                  <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" loading="lazy" />
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <div className="label-mono text-grad-soft">{p.tag}</div>
                  <h3 className="mt-4 font-display text-[22px] md:text-[26px] font-thai">{p.name}</h3>
                  <p className="mt-3 text-[14px] leading-[1.65] text-muted-foreground font-thai">
                    <span className="label-mono text-foreground/80 mr-2">CHALLENGE</span>{p.challenge}
                  </p>
                  <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                    <span className="font-mono text-[12px] text-muted-foreground">{p.url}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* SELECTED */}
    <section className="px-6 md:px-12 py-20 md:py-28 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionLabel number="03" label="MORE SELECTED PROJECTS" /></Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {selectedProjects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.1}>
              <article className="group flex flex-col md:flex-row border border-border ring-grad-hover transition-colors">
                <div className="md:w-[42%] aspect-[16/10] md:aspect-square relative overflow-hidden shrink-0 bg-muted">
                  <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" loading="lazy" />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="label-mono text-grad-soft">{p.tag}</div>
                  <h3 className="mt-3 font-display text-[20px] md:text-[24px] font-thai">{p.name}</h3>
                  <p className="mt-3 text-[14px] leading-[1.65] text-muted-foreground font-thai">
                    <span className="label-mono text-foreground/80 mr-2">CHALLENGE</span>{p.challenge}
                  </p>
                  <div className="mt-5 font-mono text-[12px] text-muted-foreground">{p.url}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* COMMERCIALS */}
    <section className="px-6 md:px-12 py-20 md:py-28 border-t border-border bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionLabel number="04" label="SOCIAL & COMMERCIALS" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display italic text-[28px] md:text-[40px] leading-[1] font-light normal-case-force max-w-[760px]">
            Social-led work and commercials.
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {commercials.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <article className="group bg-background border border-border ring-grad-hover transition-colors">
                <div className="aspect-video relative overflow-hidden bg-muted flex items-center justify-center">
                  <img src={c.image} alt={c.name} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" loading="lazy" />
                  <div className="relative z-10 w-12 h-12 border border-foreground/70 bg-background/40 backdrop-blur-sm flex items-center justify-center group-hover:bg-foreground transition-colors">
                    <Play className="w-4 h-4 text-foreground group-hover:text-background" fill="currentColor" />
                  </div>
                </div>
                <div className="p-5">
                  <div className="label-mono text-grad-soft">{c.category}</div>
                  <h3 className="mt-2 font-display text-[16px]">{c.name}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* LONG-FORM */}
    <section className="px-6 md:px-12 py-20 md:py-28 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionLabel number="05" label="ENTERTAINMENT & LONG-FORM" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display italic text-[28px] md:text-[40px] leading-[1] font-light normal-case-force max-w-[760px]">
            Mastery in storytelling.
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {longform.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.08}>
              <article className="group bg-surface border border-border ring-grad-hover transition-colors">
                <div className="aspect-video relative overflow-hidden bg-muted flex items-center justify-center">
                  <img src={l.image} alt={l.name} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" loading="lazy" />
                  <div className="relative z-10 w-12 h-12 border border-foreground/70 bg-background/40 backdrop-blur-sm flex items-center justify-center group-hover:bg-foreground transition-colors">
                    <Play className="w-4 h-4 text-foreground group-hover:text-background" fill="currentColor" />
                  </div>
                </div>
                <div className="p-5">
                  <div className="label-mono text-grad-soft">{l.category}</div>
                  <h3 className="mt-2 font-display text-[15px] font-thai leading-[1.35]">{l.name}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 md:px-12 py-28 border-t border-border">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <h2 className="font-display text-[32px] md:text-[44px] leading-[1]">
            Have a project in mind?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 bg-grad text-background px-7 py-4 label-mono hover:opacity-90 transition-opacity">
            Start a conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  </div>
);

export default Work;
