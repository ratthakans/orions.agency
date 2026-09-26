import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";
import { approaches, method, services } from "@/data/practice";
import { caseStudies } from "@/data/caseStudies";

/** Services: three services, then the two signature approaches that combine
 *  them, then the method. Approaches are deliberately set apart from services —
 *  the blueprint is explicit that they are not two more things to buy. */
const Practice = () => (
  <div>
    <SEO
      title="Services — Brand & Strategy, Creative & Communication, Brand Experience · ORIONS"
      description="ORIONS ทำงานผ่านสาม services — Brand & Strategy, Creative & Communication และ Brand Experience — และสอง signature approaches: Creative Unlock และ Stories Embed"
      path="/services"
    />

    <section className="section-ink px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto pt-28 md:pt-36 pb-20 md:pb-28">
        <SectionLabel label="Services" />
        <Reveal emphasis="lead">
          <h1 className="mt-9 h-display-lg max-w-[18ch]">Three services. Two signature approaches.</h1>
        </Reveal>
      </div>
    </section>

    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28 grid grid-cols-1 md:grid-cols-3 border-t border-foreground/15 md:border-t-0">
        {services.map((s) => (
          <div key={s.slug} id={s.slug} className="py-10 md:py-0 md:pr-10 md:pl-10 first:md:pl-0 last:md:pr-0 border-b md:border-b-0 md:border-r border-foreground/15 last:border-0 scroll-mt-24">
            <span className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground">{s.n}</span>
            <h2 className="mt-5 font-display text-[26px] md:text-[30px] leading-[1.1]">{s.name}</h2>
            <p className="mt-3 font-body text-[18px] md:text-[20px]">{s.line}</p>
            <ul className="mt-8 flex flex-col gap-2.5">
              {s.items.map((item) => (
                <li key={item} className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">{item}</li>
              ))}
            </ul>
            <Link to={`/contact?pkg=${encodeURIComponent(s.name)}`} className="cta-link mt-9">
              <span>Talk about {s.name}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel label="Signature approaches" />
        <p lang="th" className="mt-8 max-w-[640px] font-thai thai-wrap text-[16px] md:text-[18px] leading-[1.8] text-foreground/80">
          สองตัวนี้ไม่ใช่ service เพิ่ม แต่คือวิธีที่ ORIONS นำ services หลายด้านมาคราฟต์รวมกัน เพื่อแก้โจทย์ที่ใหญ่กว่า
        </p>
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          {approaches.map((a) => {
            const proof = caseStudies.filter((c) => c.approach === a.slug);
            return (
              <article key={a.slug} id={a.slug} className="pt-8 border-t border-foreground/25 scroll-mt-24">
                <h2 className="h-display-md">{a.name}</h2>
                <p className="mt-3 font-body text-[19px] md:text-[22px]">{a.line}</p>
                <p lang="th" className="mt-8 max-w-[520px] font-thai text-[15px] md:text-[16px] leading-[1.8] text-foreground/80">{a.for}</p>
                <p className="mt-8 font-serif text-[24px] md:text-[30px] leading-[1.15]">{a.pivot}</p>
                <p className="mt-3 font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
                  {a.name} = {a.equals}
                </p>
                {proof.length > 0 && (
                  <div className="mt-9 flex flex-wrap items-baseline gap-x-6 gap-y-3">
                    <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">Work</span>
                    {proof.map((c) => (
                      <Link key={c.slug} to={`/work/${c.slug}`} className="cta-link">
                        <span>{c.title}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>

    <section id="how-we-work" className="px-6 md:px-10 border-t border-foreground/15 scroll-mt-20">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel label="How we work" />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 border-t border-foreground/15">
          {method.steps.map((step, i) => (
            <div key={step.name} className="py-8 pr-6 border-b md:border-b-0 md:border-r border-foreground/15 last:border-r-0 md:pl-6 first:md:pl-0">
              <span className="font-mono text-[11px] text-muted-foreground">0{i + 1}</span>
              <h3 className="mt-4 font-display text-[24px] md:text-[28px]">{step.name}</h3>
              <p className="mt-2 font-body text-[15px] md:text-[16px] text-muted-foreground">{step.line}</p>
            </div>
          ))}
        </div>
        <p className="mt-14 font-display text-[22px] md:text-[28px] leading-[1.2]">
          {method.close.line} <span className="text-foreground/55">{method.close.then}</span>
        </p>
      </div>
    </section>

    <CTABand
      eyebrow="Start a conversation"
      title={<>Tell us what you're working on.</>}
      subtitle="เล่าโจทย์ของแบรนด์ให้เราฟัง แล้วเราจะช่วยมองว่าควรเริ่มตรงไหน"
      primary={{ label: "Talk to ORIONS", to: "/contact" }}
      secondary={{ label: "See the work", to: "/work" }}
      tone="ink"
    />
  </div>
);

export default Practice;
