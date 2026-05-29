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

const Projects = () => (
  <div>
    <SEO
      title="Studio — ØRIONS"
      description="ØRIONS Studio — in-house lab. The products and ventures we build for ourselves."
      path="/studio"
    />

    {/* HERO */}
    <section className="bg-background text-foreground min-h-[78vh] flex flex-col border-b border-foreground/15">
      <div className="px-6 md:px-10 pt-32 md:pt-40 pb-20 md:pb-28 flex-1 flex flex-col justify-center max-w-[1280px] mx-auto w-full">
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

    {/* VENTURES */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/15 border border-foreground/15">
          {ventures.map((v, i) => (
            <Reveal key={v.name} delay={i * 0.08}>
              <a
                href={v.url}
                target="_blank"
                rel="noreferrer"
                className="group bg-background p-10 md:p-14 h-full flex flex-col hover:bg-cinnabar hover:text-background transition-colors duration-500"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-60">
                    {v.n} — {v.tag}
                  </div>
                  <ArrowUpRight className="w-6 h-6 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 text-cinnabar" />
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