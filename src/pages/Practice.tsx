import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";
import { movements, foundation, filmCraft, getEngagementsFor } from "@/data/practice";
import { caseStudies } from "@/data/caseStudies";

/** Services. Each movement says four things and stops: the client's question,
 *  what the move is, the ways in, and the work that proves it. */
const Practice = () => (
  <div>
    <SEO
      title="Services — Expand, Reframe, Embed · ORIONS"
      description="ORIONS ทำงานผ่านสาม movement — EXPAND สร้างพื้นที่เติบโตใหม่ REFRAME เปลี่ยนมุมที่แบรนด์ถูกมอง EMBED ทำให้ตัวตนอยู่ในทุกจุดสัมผัส"
      path="/services"
    />

    <section className="section-ink px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto pt-28 md:pt-36 pb-20 md:pb-28">
        <SectionLabel label="Services" />
        <Reveal emphasis="lead">
          <h1 className="mt-9 h-display-lg max-w-[16ch]">Three movements.</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p lang="th" className="mt-9 max-w-[680px] font-thai thai-wrap text-[17px] md:text-[20px] leading-[1.8] text-foreground/85">
            แบรนด์ไม่ได้ต้องการทำมากขึ้นเสมอไป บางครั้งต้องหาเส้นทางใหม่ บางครั้งต้องถูกมองในมุมใหม่ และบางครั้งต้องทำให้ทุกสิ่งกลับมาเป็นเรื่องเดียวกัน
          </p>
        </Reveal>
      </div>
    </section>

    {movements.map((m, i) => {
      const ways = getEngagementsFor(m.slug);
      const proof = caseStudies.filter((c) => c.movement === m.slug);
      return (
        <section key={m.slug} id={m.slug} className="px-6 md:px-10 border-t border-foreground/15 scroll-mt-20">
          <div className="max-w-[1280px] mx-auto py-20 md:py-28 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-24 items-start">
            <div className="lg:sticky lg:top-28">
              <span className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground">0{i + 1}</span>
              <h2 className="mt-5 h-display-lg">{m.name}</h2>
              <p className="mt-4 font-body text-[20px] md:text-[24px] leading-[1.25]">{m.line}</p>
              <p lang="th" className="mt-6 font-thai text-[15px] md:text-[16px] leading-[1.75] text-muted-foreground">
                เมื่อคำถามคือ “{m.question}”
              </p>
            </div>

            <div>
              <p lang="th" className="max-w-[620px] font-thai thai-wrap text-[16px] md:text-[18px] leading-[1.85] text-foreground/85">
                {m.body}
              </p>

              {ways.length > 0 && (
                <div className="mt-10 pt-6 border-t border-foreground/15 flex flex-col gap-5">
                  {ways.map((w) => (
                    <Link key={w.slug} id={w.slug} to={`/contact?pkg=${encodeURIComponent(w.name)}`} className="group flex items-baseline justify-between gap-6 scroll-mt-24">
                      <span>
                        <span className="block font-display text-[21px] md:text-[24px] leading-[1.15]">{w.name}</span>
                        <span className="mt-1 block font-body text-[15px] text-muted-foreground">{w.line}</span>
                      </span>
                      <ArrowUpRight className="w-5 h-5 shrink-0 text-foreground/45 group-hover:text-foreground transition-colors" />
                    </Link>
                  ))}
                </div>
              )}

              {proof.length > 0 && (
                <div className="mt-10 pt-6 border-t border-foreground/15 flex flex-wrap items-baseline gap-x-6 gap-y-3">
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">Work</span>
                  {proof.map((c) => (
                    <Link key={c.slug} to={`/work/${c.slug}`} className="cta-link">
                      <span>{c.title}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      );
    })}

    {/* The two offers outside the three movements, kept to a line each. */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {[
          { id: foundation.slug, name: foundation.name, line: foundation.line },
          { id: "film-visual-story", name: filmCraft.name, line: filmCraft.line },
        ].map((item) => (
          <Link key={item.id} id={item.id} to={`/contact?pkg=${encodeURIComponent(item.name)}`} className="group flex items-baseline justify-between gap-6 scroll-mt-24">
            <span>
              <span className="block font-display text-[21px] md:text-[24px] leading-[1.15]">{item.name}</span>
              <span className="mt-1 block font-body text-[15px] text-muted-foreground">{item.line}</span>
            </span>
            <ArrowUpRight className="w-5 h-5 shrink-0 text-foreground/45 group-hover:text-foreground transition-colors" />
          </Link>
        ))}
      </div>
    </section>

    <CTABand
      eyebrow="Start a conversation"
      title={<>Not louder. Not busier. More intentional.</>}
      subtitle="เล่าโจทย์ของแบรนด์ให้เราฟัง แล้วเราจะช่วยมองว่าควรเริ่มตรงไหน"
      primary={{ label: "Talk to ORIONS", to: "/contact" }}
      secondary={{ label: "ดูผลงาน", to: "/work" }}
      tone="ink"
    />
  </div>
);

export default Practice;
