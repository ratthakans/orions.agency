import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/CTABand";
import { journalPosts } from "@/data/journal";

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("th-TH", { year: "numeric", month: "short", day: "numeric" });

const Journal = () => (
  <div>
    <SEO
      title="Journal — Notes from the studio · ØRIONS"
      description="บันทึกมุมมองจากสตูดิโอ ORIONS — ว่าด้วยข้อจำกัด ความซื่อสัตย์ และการ refine เรื่องให้คม."
      path="/journal"
    />

    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto pt-28 md:pt-32 pb-12 md:pb-16">
        <SectionLabel label="Journal · Notes from the studio" />
        <Reveal delay={0.15}>
          <h1 lang="th" className="mt-8 h-display-lg max-w-[16ch] thai-wrap">
            บันทึกจาก <em className="text-cinnabar">สตูดิโอ.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p lang="th" className="mt-8 max-w-[640px] font-serif text-[16px] md:text-[20px] leading-[1.5] text-muted-foreground">
            มุมมองสั้น ๆ เรื่องการทำแบรนด์ใต้ข้อจำกัด — สิ่งที่เราเชื่อ และวิธีที่เราทำงาน.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto pb-16 md:pb-24">
        <SectionHeading
          eyebrow="Point of view"
          title={<>สิ่งที่เรา <em className="text-cinnabar">เชื่อ.</em></>}
          intro="สี่มุมมองที่อยู่เบื้องหลังวิธีทำงานของเรา."
          lang="th"
        />
        <div className="mt-12 grid grid-cols-1 gap-5">
          {journalPosts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link
                to={`/journal/${p.slug}`}
                className="group card-soft grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-12 p-8 md:p-10 hover:border-cinnabar/40 transition-colors"
              >
                <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-foreground">
                  — {p.n}<br /><span className="text-cinnabar normal-case tracking-[0.02em]">{fmtDate(p.date)}</span>
                </div>
                <div>
                  <h2 lang="th" className="h-display-sm max-w-[24ch] group-hover:text-cinnabar transition-colors">{p.title}</h2>
                  <p lang="th" className="mt-3 font-serif text-[16px] md:text-[18px] text-cinnabar">{p.dek}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.1em] uppercase text-foreground/55 group-hover:text-cinnabar transition-colors">
                    อ่านบันทึก →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <CTABand
      eyebrow="Start a conversation"
      title={<>เห็นด้วยกับวิธีคิดนี้? <em className="text-cinnabar">มาคุยกัน.</em></>}
      subtitle="คุยฟรี 45 นาที ไม่มีข้อผูกมัด — เล่าโจทย์และเงื่อนไขมาได้เลย."
      primary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
      secondary={{ label: "ดูผลงาน", to: "/work" }}
      tone="snow"
    />
  </div>
);

export default Journal;
