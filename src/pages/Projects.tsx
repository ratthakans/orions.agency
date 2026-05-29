import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import ClosingCTA from "@/components/ClosingCTA";
import SectionLabel from "@/components/SectionLabel";

type Venture = {
  n: string;
  name: string;
  url: string;
  tag: string;
  tagline: string;
  body: string;
};

const ventures: Venture[] = [
  {
    n: "01",
    name: "Routte",
    url: "https://routte.to/",
    tag: "Travel · Itinerary",
    tagline: "Plan trips like a local. Share them like a story.",
    body: "เครื่องมือสร้างและแชร์ itinerary ที่ทำให้การวางแผนทริปเป็นเรื่องสวย เร็ว และส่งต่อได้ — สำหรับนักเดินทางที่ใส่ใจรายละเอียด",
  },
  {
    n: "02",
    name: "First Draft Pro",
    url: "https://firstdraftpro.co/",
    tag: "Writing · AI",
    tagline: "Get the first draft out of the way.",
    body: "AI writing studio สำหรับ creator, founder และ marketer — เริ่มจากร่างแรกที่ดีพอ แล้วใช้เวลาที่เหลือกับการ refine ให้คมจริง",
  },
];

const studioUnits = [
  {
    code: "3.1",
    name: "Startup & Product Ventures",
    tag: "Asset-Based Growth",
    desc: "เปลี่ยนจากผู้รับจ้างผลิตสู่ 'เจ้าของผลิตภัณฑ์' — ปั้นไอเดียธุรกิจ ซอฟต์แวร์ และสินค้าของตัวเองเพื่อระดมทุน.",
    services: ["In-house Brand Incubation", "Creative SaaS Development"],
    target: "ตลาด B2C · B2B SaaS · กลุ่มนักลงทุน (VC)",
  },
  {
    code: "3.2",
    name: "Owned Media & IP",
    tag: "The Playground",
    desc: "บริหารสถานีสื่อ สังคมออนไลน์ และรายการคอนเทนต์ของตัวเอง 100% — ทำเงินจากสปอนเซอร์และโฆษณา.",
    services: ["IP Development", "Audience Monetization", "Native Advertising Slots"],
    target: "ผู้ชมทั่วไป (Audience) และแบรนด์สินค้าต่างๆ",
  },
  {
    code: "3.3",
    name: "Creative Experimental Lab",
    tag: "The R&D Engine",
    desc: "ห้องวิจัยล้ำสมัย ทดลองเทคโนโลยี สื่อ และ format คอนเทนต์แปลกใหม่ — AI, virtual experience, trend-setting formats.",
    services: ["Advanced AI Workflows", "Virtual Experiences", "Trend-Setting Formats"],
    target: "ทีมภายใน · แบรนด์ Innovation-Driven",
  },
];

const Projects = () => (
  <div>
    <SEO
      title="Studio — ØRIONS"
      description="ØRIONS Studio — in-house lab. The products and ventures we build for ourselves."
      path="/studio"
    />

    {/* HERO */}
    <section className="bg-background text-foreground min-h-[78vh] flex flex-col border-b border-foreground/15">
      <div className="px-6 md:px-10 pt-28 md:pt-32 pb-16 md:pb-20 flex-1 flex flex-col justify-center max-w-[1280px] mx-auto w-full">
        <SectionLabel index="01" label="Studio" />
        <Reveal delay={0.1}>
          <h1 className="mt-10 font-serif h-display-xl max-w-[18ch]">
            Studios build for clients. <em className="italic text-cinnabar">We build for ourselves, too.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-[640px] font-thai text-[16px] md:text-[18px] leading-[1.7] text-foreground/70">
            ØRIONS Studio คือ in-house lab ของสตูดิโอ — โปรเจกต์ที่เราออกแบบ พัฒนา และใช้เอง เพราะเชื่อว่าผู้สร้างที่ดีที่สุด คือลูกค้าที่ต้องการมันมากที่สุด
          </p>
        </Reveal>
      </div>
    </section>

    {/* THREE UNITS — Section 05 Row 3 */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="02" label="Three units" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-md max-w-[22ch]">
            สามยูนิตงาน · <em className="italic text-cinnabar">หนึ่งห้องทดลอง.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-[640px] font-thai text-[15px] md:text-[16px] leading-[1.7] text-muted-foreground">
            Asset-Based · Innovation-Driven — โครงสร้างของ Ø Studio แบ่งเป็นสามยูนิตที่หล่อเลี้ยงกัน เพื่อสร้างสินทรัพย์ของตัวเองและทดลองอนาคตของ creative.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border border-foreground/20">
          {studioUnits.map((u, i) => (
            <Reveal key={u.code} delay={i * 0.06}>
              <div className={`p-8 md:p-10 h-full bg-background flex flex-col ${i > 0 ? "border-t md:border-t-0 md:border-l border-foreground/20" : ""}`}>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">{u.code}</div>
                <h3 className="mt-4 font-serif text-[22px] md:text-[26px] leading-[1.15] tracking-[-0.015em]">{u.name}</h3>
                <div className="mt-3 font-serif italic text-cinnabar text-[14px] md:text-[15px]">[ {u.tag} ]</div>
                <p className="mt-5 font-thai text-[13px] md:text-[14px] leading-[1.7] text-foreground/85">{u.desc}</p>
                <div className="mt-6 pt-6 border-t border-foreground/15 space-y-4 text-[12px]">
                  <div>
                    <div className="font-mono tracking-[0.22em] uppercase text-cinnabar text-[10px]">— Services</div>
                    <ul className="mt-2 space-y-1 font-thai text-foreground/75 leading-[1.6]">
                      {u.services.map((s) => <li key={s}>· {s}</li>)}
                    </ul>
                  </div>
                  <div>
                    <div className="font-mono tracking-[0.22em] uppercase text-cinnabar text-[10px]">— Target</div>
                    <p className="mt-2 font-thai leading-[1.6] text-foreground/75">{u.target}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* VENTURES */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="03" label="Live ventures" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 mb-12 font-serif h-display-md max-w-[20ch]">
            ของจริง · <em className="italic text-cinnabar">ที่ shipped แล้ว.</em>
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/15 border border-foreground/15">
          {ventures.map((v, i) => (
            <Reveal key={v.name} delay={i * 0.08}>
              <a
                href={v.url}
                target="_blank"
                rel="noreferrer"
                className="group bg-background p-10 md:p-14 h-full flex flex-col hover:border-cinnabar transition-colors duration-500"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-60">
                    {v.n} — {v.tag}
                  </div>
                  <ArrowUpRight className="w-6 h-6 transition-transform duration-500 text-cinnabar" />
                </div>

                <h2 className="mt-16 md:mt-24 font-serif h-display-lg">
                  {v.name}
                </h2>

                <p className="mt-6 font-serif italic text-cinnabar text-[20px] md:text-[24px] leading-[1.25]">
                  {v.tagline}
                </p>

                <p className="mt-6 max-w-[42ch] font-thai text-[14px] md:text-[15px] leading-[1.7] opacity-75">
                  {v.body}
                </p>

                <div className="mt-auto pt-12 font-mono text-[10px] tracking-[0.22em] uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                  Visit {v.url.replace(/^https?:\/\//, "").replace(/\/$/, "")} →
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <ClosingCTA
      eyebrow="MORE COMING"
      title={<>Built in Bangkok. <em className="italic text-cinnabar">Shipped by ØRIONS.</em></>}
      description="มี idea ที่อยากร่วม build, invest หรือ collaborate? คุยกับเราได้เสมอ"
      ctas={[
        { label: "Get in touch", to: "/contact" },
        { label: "See services", to: "/services", variant: "ghost" },
      ]}
    />
  </div>
);

export default Projects;