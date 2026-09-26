import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";
import {
  movements,
  movementBridge,
  movementSummary,
  craft,
  foundation,
  filmCraft,
  getEngagementsFor,
} from "@/data/practice";
import { caseStudies } from "@/data/caseStudies";

const Practice = () => (
  <div>
    <SEO
      title="What We Do — Expand, Reframe, Embed · ORIONS"
      description="ORIONS ทำงานผ่านสาม movement — EXPAND สร้างพื้นที่เติบโตใหม่ REFRAME เปลี่ยนมุมที่แบรนด์ถูกมอง EMBED ทำให้ตัวตนอยู่ในทุกจุดสัมผัส"
      path="/practice"
    />

    <section className="section-ink px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto pt-28 md:pt-36 pb-24 md:pb-36">
        <SectionLabel label="What we do" />
        <Reveal emphasis="lead">
          <h1 className="mt-9 h-display-lg max-w-[16ch]">Three movements.</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p lang="th" className="mt-9 max-w-[680px] font-thai thai-wrap text-[17px] md:text-[20px] leading-[1.8] text-foreground/85">
            แบรนด์ไม่ได้ต้องการทำมากขึ้นเสมอไป บางครั้งต้องหาเส้นทางใหม่ บางครั้งต้องถูกมองในมุมใหม่ และบางครั้งต้องทำให้ทุกสิ่งกลับมาเป็นเรื่องเดียวกัน
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-14 md:mt-20 pt-7 border-t border-foreground/30 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {movements.map((m) => (
              <a key={m.slug} href={`#${m.slug}`} className="group block">
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">{m.name}</span>
                <p lang="th" className="mt-3 font-thai text-[16px] md:text-[18px] leading-[1.7] text-foreground/85 group-hover:text-foreground transition-colors">
                  {m.question}
                </p>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-24">
        <SectionLabel label="Why three" />
        <div>
          <Reveal emphasis="lead">
            <h2 className="font-serif text-[30px] md:text-[42px] leading-[1.1]">{movementBridge.line}</h2>
          </Reveal>
          <p lang="th" className="mt-7 max-w-[620px] font-thai thai-wrap text-[16px] md:text-[18px] leading-[1.8] text-foreground/80">
            {movementBridge.body}
          </p>
        </div>
      </div>
    </section>

    {movements.map((m, i) => {
      const ways = getEngagementsFor(m.slug);
      const proof = caseStudies.filter((c) => c.movement === m.slug).slice(0, 3);
      return (
        <section
          key={m.slug}
          id={m.slug}
          className={`${i % 2 === 0 ? "bg-surface" : ""} px-6 md:px-10 border-t border-foreground/15 scroll-mt-20`}
        >
          <div className="max-w-[1280px] mx-auto py-24 md:py-36">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-24 items-start">
              {/* The movement name holds while the long right column scrolls —
                  otherwise the reader loses which move they are inside. */}
              <div className="lg:sticky lg:top-28">
                <span className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground">0{i + 1} / Movement</span>
                <Reveal emphasis="lead">
                  <h2 className="mt-6 h-display-lg">{m.name}</h2>
                </Reveal>
                <p className="mt-4 font-body text-[21px] md:text-[26px] leading-[1.25]">{m.line}</p>
                <p lang="th" className="mt-8 font-thai text-[15px] md:text-[16px] leading-[1.8] text-muted-foreground">
                  เมื่อคำถามคือ “{m.question}”
                </p>
              </div>
              <div>
                <p lang="th" className="max-w-[640px] font-thai thai-wrap text-[16px] md:text-[18px] leading-[1.85] text-foreground/85">
                  {m.body}
                </p>
                <p className="mt-9 font-serif text-[25px] md:text-[33px] leading-[1.15]">{m.pivot}</p>

                <ul className="mt-10 pt-7 border-t border-foreground/15 flex flex-wrap gap-x-7 gap-y-3">
                  {m.list.map((item) => (
                    <li key={item} className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>

                <p lang="th" className="mt-9 max-w-[560px] font-thai text-[14px] md:text-[15px] leading-[1.8] text-muted-foreground">
                  {m.note}
                </p>

                {ways.length > 0 && (
                  <div className="mt-12 pt-7 border-t border-foreground/15">
                    <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">Ways in</span>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                      {ways.map((w) => (
                        <article key={w.slug} id={w.slug} className="scroll-mt-24">
                          <h3 className="font-display text-[22px] md:text-[26px] leading-[1.15]">{w.name}</h3>
                          <p className="mt-2 font-body text-[16px] md:text-[17px]">{w.line}</p>
                          <p lang="th" className="mt-4 font-thai text-[14px] leading-[1.8] text-muted-foreground">เหมาะกับ: {w.fit}</p>
                          <p lang="th" className="mt-2 font-thai text-[14px] leading-[1.8]">สิ่งที่ต้องการให้เกิดขึ้น: {w.outcome}</p>
                          <Link to={`/contact?pkg=${encodeURIComponent(w.name)}`} className="cta-link mt-5">
                            <span>คุยเรื่อง {w.name}</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </Link>
                        </article>
                      ))}
                    </div>
                  </div>
                )}

                {proof.length > 0 && (
                  <div className="mt-12 pt-7 border-t border-foreground/15">
                    <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">In the record</span>
                    <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                      {proof.map((c) => (
                        <Link key={c.slug} to={`/work/${c.slug}`} className="cta-link">
                          <span>{c.title}</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <p className="mt-12 font-display text-[19px] md:text-[22px] text-foreground/70">{m.closer}</p>
              </div>
            </div>
          </div>
        </section>
      );
    })}

    <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36">
        <SectionLabel label="Before the movements" />
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-24">
          <div>
            <Reveal emphasis="lead">
              <h2 className="h-display-md max-w-[16ch]">{foundation.name}</h2>
            </Reveal>
            <p className="mt-4 font-body text-[19px] md:text-[22px]">{foundation.line}</p>
          </div>
          <div className="lg:pt-3">
            <p lang="th" className="max-w-[620px] font-thai thai-wrap text-[16px] md:text-[17px] leading-[1.8] text-foreground/85">
              ทั้งสาม movement เริ่มจากสิ่งที่แบรนด์มีอยู่แล้ว — equity ที่ต่อยอดได้ product ที่เปลี่ยนมุมมองได้ หรือแบรนด์ที่โตจนเริ่มกระจัดกระจาย แบรนด์ที่กำลังสร้างจากศูนย์ยังไม่มีสิ่งเหล่านั้น จึงต้องหาเรื่องของตัวเองให้เจอก่อน
            </p>
            <p lang="th" className="mt-6 font-thai text-[14px] leading-[1.8] text-muted-foreground">เหมาะกับ: {foundation.fit}</p>
            <p lang="th" className="mt-2 font-thai text-[14px] leading-[1.8]">สิ่งที่ต้องการให้เกิดขึ้น: {foundation.outcome}</p>
            <Link to={`/contact?pkg=${encodeURIComponent(foundation.name)}`} className="cta-link mt-7">
              <span>คุยเรื่อง {foundation.name}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36">
        <SectionLabel label="How any movement is made" />
        <Reveal emphasis="lead">
          <h2 className="mt-8 h-display-md max-w-[20ch]">Meaning before medium.</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 border-t border-foreground/15">
          {craft.map((item, i) => (
            <div key={item.name} className="py-8 md:pr-8 border-b md:border-r border-foreground/15 last:border-r-0">
              <span className="font-mono text-[11px] text-muted-foreground">0{i + 1}</span>
              <h3 className="mt-4 font-display text-[26px]">{item.name}</h3>
              <p className="mt-2 font-body text-[17px]">{item.line}</p>
              <p className="mt-5 font-mono text-[11px] leading-[1.9] text-muted-foreground">{item.examples}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-8 border-t border-foreground/15 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-24">
          <h3 className="font-display text-[26px] md:text-[31px] leading-[1.1]">{filmCraft.name}</h3>
          <div>
            <p className="font-body text-[18px] md:text-[20px]">{filmCraft.line}</p>
            <p lang="th" className="mt-4 max-w-[600px] font-thai text-[15px] leading-[1.8] text-muted-foreground">{filmCraft.body}</p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36">
        <SectionLabel label="The ORIONS view" />
        <Reveal emphasis="lead">
          <h2 className="mt-8 h-display-md max-w-[22ch]">Growth should not turn a brand into someone else.</h2>
        </Reveal>
        <p lang="th" className="mt-8 max-w-[660px] font-thai thai-wrap text-[16px] md:text-[18px] leading-[1.8] text-foreground/80">
          มันควรทำให้ตัวตนเดิมไปได้ไกลขึ้น มีความหมายกว้างขึ้น และชัดขึ้นในทุกที่ที่มันปรากฏ
        </p>
        <div className="mt-14 pt-8 border-t border-foreground/15 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {movementSummary.map((item) => (
            <p key={item.name} className="font-display text-[21px] md:text-[25px] leading-[1.2]">
              {item.name} <span className="text-foreground/55">{item.line}</span>
            </p>
          ))}
        </div>
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
