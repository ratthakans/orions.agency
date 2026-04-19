import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";

import projKhaoyai from "@/assets/deck/proj-khaoyai.jpg";
import projHeavy from "@/assets/deck/proj-heavy.jpg";
import projPolawat from "@/assets/deck/proj-polawat.jpg";
import comSiriraj from "@/assets/deck/com-siriraj.jpg";
import comLeicester from "@/assets/deck/com-leicester.jpg";
import comBuriram from "@/assets/deck/com-buriram.jpg";
import comAudi from "@/assets/deck/com-audi.jpg";
import entLastnote from "@/assets/deck/ent-lastnote.jpg";
import entPbs from "@/assets/deck/ent-pbs.jpg";
import entUpgrade from "@/assets/deck/ent-upgrade.jpg";

const heroProjects = [
  { n: "01", name: "พรรคประชาธิปัตย์", cat: "POLITICAL CREATIVE", body: "ทำการเมืองสร้างสรรค์ผ่านกิจกรรมที่ไม่ใช่การหาเสียง", challenge: "แรงต้านการเมืองฝั่งซ้าย / ข้อจำกัดของกฎหมายเลือกตั้ง", url: "democrat.or.th" },
  { n: "02", name: "GCOO",            cat: "MOBILITY · LOCALIZATION", body: "เปิดตลาดในไทยด้วย localization และ payment gateway", challenge: "ปรับโมเดลต่างประเทศให้เข้ากับพฤติกรรมคนไทย", url: "gcoo.io" },
  { n: "03", name: "MY HOTEL",        cat: "HOSPITALITY TECH", body: "วางตัวเป็น first smart hotel OTA ของไทย", challenge: "การดีลกับผู้ให้บริการให้เกิดความเชื่อถือ", url: "pzentsmart.com" },
  { n: "04", name: "HONG MOVE",       cat: "APPLIED UTILITY", body: "Taxi VIP EV ใน AOT พร้อมวางระบบความเป็นไปได้", challenge: "รองรับหลายภาษา — มาลายู จีน อาราบิก ฮินดี", url: "hongmove.co.th" },
];

const moreProjects = [
  { name: "HEAVY ORGANIZER",       cat: "FESTIVAL", body: "Green music festival with low carbon footprint", img: projHeavy, url: "heavyorganizer.com" },
  { name: "เขาใหญ่ คันทรีคลับ",       cat: "HOSPITALITY", body: "เปลี่ยนสนามกอล์ฟดั้งเดิมสู่ประสบการณ์พรีเมียม", img: projKhaoyai, url: "khaoyaicountryclub.com" },
  { name: "RTAF",                  cat: "INSTITUTIONAL", body: "การสื่อสารโดยรักษาความลับทางราชการ", img: projPolawat, url: "rtaf.mi.th" },
  { name: "พรรคพลวัต",              cat: "POLITICAL", body: "พรรคใหม่ที่นำเสนอมุมมองภายใต้เวลาจำกัด", img: projPolawat, url: "polawat.party" },
];

const commercials = [
  { name: "LEICESTER CITY",  cat: "SPORTS",    body: "Thailand Smiles With You — global football brand", img: comLeicester },
  { name: "BURIRAM ESPORT",  cat: "ESPORTS",   body: "BRU.THECRUZ Free Fire campaign", img: comBuriram },
  { name: "AUDI THAILAND",   cat: "AUTOMOTIVE", body: "Q8 TFSI e Edition One — premium brand film", img: comAudi },
  { name: "SIRIRAJ HOSPITAL", cat: "HEALTHCARE", body: "ความเชื่อมั่นทางการแพทย์ที่เข้าถึงง่าย", img: comSiriraj },
];

const longform = [
  { name: "เถื่อน TRAVEL",         cat: "DOCUMENTARY", body: "Bad Bad World — สารคดีที่ฟังเสียงของคนจริง", img: entPbs },
  { name: "THE UPGRADE",          cat: "SERIES & VARIETY", body: "รายการที่ผสานความบันเทิงกับความรู้", img: entUpgrade },
  { name: "FINDING THE LAST NOTE", cat: "FILM", body: "Long-form storytelling เกี่ยวกับดนตรีและความทรงจำ", img: entLastnote },
];

const Work = () => (
  <div>
    <SEO title="Work — ØRIONS" description="Hero projects, commercials, and long-form storytelling from ØRIONS." path="/work" />

    <PageHero
      eyebrowNumber="01"
      eyebrowLabel="SELECTED WORK"
      title="Work that moves things forward."
      subtitle="งานที่เลือกมาเพื่อแสดงวิธีคิดของ ØRIONS — ตั้งแต่กลยุทธ์ การออกแบบการสื่อสาร ไปจนถึงงานผลิตที่สร้างผลลัพธ์จริง"
    />

    {/* HERO PROJECTS */}
    <section className="px-6 md:px-12 py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionLabel number="02" label="HERO PROJECTS" /></Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          {heroProjects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <article className="bg-background p-8 md:p-10 h-full hover:bg-surface transition-colors">
                <div className="flex items-start justify-between">
                  <div className="font-display text-accent text-[40px] leading-none">{p.n}</div>
                  <span className="label-mono text-muted-foreground">{p.cat}</span>
                </div>
                <h3 className="mt-8 font-thai font-semibold text-[26px] md:text-[32px] leading-[1.2]">{p.name}</h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-muted-foreground font-thai max-w-[480px]">{p.body}</p>
                <div className="mt-8 pt-6 border-t border-border space-y-3">
                  <div>
                    <div className="label-mono text-muted-foreground text-[10px]">CHALLENGE</div>
                    <p className="mt-2 text-[13px] leading-[1.65] text-foreground/80 font-thai">{p.challenge}</p>
                  </div>
                  <div className="font-mono text-[11px] text-accent tracking-[0.08em]">{p.url}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* MORE PROJECTS */}
    <section className="px-6 md:px-12 py-20 md:py-28 border-t border-border bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionLabel number="03" label="MORE SELECTED PROJECTS" /></Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {moreProjects.map((w, i) => (
            <Reveal key={w.name} delay={(i % 2) * 0.1}>
              <article className="group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={w.img} alt={w.name} className="w-full h-full object-cover duotone group-hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
                </div>
                <div className="mt-6 flex items-baseline justify-between">
                  <div className="label-mono text-accent">{w.cat}</div>
                  <div className="font-mono text-[11px] text-muted-foreground">{w.url}</div>
                </div>
                <h3 className="mt-3 font-thai font-semibold text-[22px] md:text-[26px]">{w.name}</h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-muted-foreground font-thai">{w.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* SOCIAL & COMMERCIALS */}
    <section className="px-6 md:px-12 py-20 md:py-28 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionLabel number="04" label="SOCIAL & COMMERCIALS" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-[36px] md:text-[52px] leading-[1.05] max-w-[700px]">
            Execution at <span className="text-accent">brand level.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commercials.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <article className="group">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover duotone" loading="lazy" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 border border-foreground/80 bg-background/40 backdrop-blur-sm flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                      <Play className="w-4 h-4 text-foreground group-hover:text-accent-foreground" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 label-mono text-accent">{c.cat}</div>
                <h3 className="mt-2 font-thai font-semibold text-[18px]">{c.name}</h3>
                <p className="mt-2 text-[13px] leading-[1.65] text-muted-foreground font-thai">{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ENTERTAINMENT */}
    <section className="px-6 md:px-12 py-20 md:py-28 border-t border-border bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionLabel number="05" label="ENTERTAINMENT & LONG-FORM" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-[36px] md:text-[52px] leading-[1.05] max-w-[700px]">
            Mastery in <span className="text-accent">storytelling.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {longform.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.1}>
              <article className="group">
                <div className="aspect-video overflow-hidden">
                  <img src={l.img} alt={l.name} className="w-full h-full object-cover duotone" loading="lazy" />
                </div>
                <div className="mt-4 label-mono text-accent">{l.cat}</div>
                <h3 className="mt-2 font-thai font-semibold text-[18px]">{l.name}</h3>
                <p className="mt-2 text-[13px] leading-[1.65] text-muted-foreground font-thai">{l.body}</p>
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
          <h2 className="font-display text-[36px] md:text-[52px] leading-[1.05]">
            Have a project <span className="text-accent">in mind?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 bg-accent-solid text-accent-foreground px-7 py-4 label-mono hover:opacity-90 transition-opacity">
            Start a conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  </div>
);

export default Work;
