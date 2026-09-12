import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import CTABand from "@/components/CTABand";
import Slash from "@/components/Slash";
import Picture from "@/components/Picture";
import { disciplines, process } from "@/data/capabilities";
import { caseStudies } from "@/data/caseStudies";

const SITE_URL = "https://orions.agency";
const FEATURED_CASE_SLUGS = ["hongmove", "heavy-organizer", "khaoyai-country-club"];

const featuredCases = FEATURED_CASE_SLUGS.flatMap((slug) => {
  const found = caseStudies.find((item) => item.slug === slug);
  return found ? [found] : [];
});

/* Hero headline — a quiet mask-up reveal (CSS; see .mask-line in index.css). */
const HeroTitle = () => {
  const Line = ({ children, delay }: { children: React.ReactNode; delay: number }) => (
    <span className="mask-line">
      <span style={{ animationDelay: `${delay}s` }}>{children}</span>
    </span>
  );
  return (
    <h1 className="h-display-xl leading-[0.92]">
      <span className="sr-only">Stories, refined.</span>
      <span aria-hidden="true">
        <Line delay={0.1}>Stories,</Line>
        <Line delay={0.22}>refined.</Line>
      </span>
    </h1>
  );
};

const Index = () => (
  <div>
    <SEO
      title="ØRIONS — Stories, refined."
      description="ORIONS คือ Boutique Creative Company ที่ช่วยแบรนด์ค้นหาเรื่องที่มีคุณค่าอยู่ภายใน ขัดเกลาให้ชัด และถ่ายทอดออกมาเป็น Creative ที่คนสามารถเข้าใจ รู้สึก และจดจำได้"
      path="/"
      schema={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "ØRIONS",
        url: SITE_URL,
        slogan: "Stories, refined.",
        description:
          "ORIONS is a boutique creative company that helps brands uncover, refine and express the stories that make them worth remembering.",
      }}
    />

    {/* 01 — HERO. No image and no star graphic: the constellation is a
        principle, not an aesthetic (brand book, Visual Idea). */}
    <section className="relative min-h-[100svh] flex flex-col px-6 md:px-10 overflow-hidden">
      <div className="relative z-10 max-w-[1400px] mx-auto w-full flex-1 flex flex-col justify-center pt-24 md:pt-32 pb-20 md:pb-28">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-foreground/70">
            <Slash className="text-[15px]" /> ØRIONS
          </div>
        </Reveal>
        <div className="mt-8">
          <HeroTitle />
        </div>
        <Reveal delay={0.5}>
          <p lang="th" className="mt-10 font-thai thai-wrap text-[17px] md:text-[21px] leading-[1.75] text-foreground/85 max-w-[40ch]">
            เราช่วยแบรนด์ค้นหาเรื่องที่มีความหมาย<br className="hidden md:block" />
            ขัดเกลาให้ชัด<br className="hidden md:block" />
            และถ่ายทอดออกมาในรูปแบบที่เหมาะสมที่สุด
          </p>
        </Reveal>
        <Reveal delay={0.56}>
          <p className="mt-6 font-mono text-[11px] md:text-[12px] tracking-[0.14em] uppercase text-muted-foreground">
            A story-led creative company.
          </p>
        </Reveal>
        <Reveal delay={0.62}>
          <div className="mt-12 flex flex-col sm:flex-row items-start gap-7 sm:gap-12">
            <Link to="/work" className="cta-link cta-link-lg">
              <span>ดูผลงาน</span><ArrowUpRight className="w-[18px] h-[18px]" />
            </Link>
            <Link to="/contact" className="cta-link cta-link-lg cta-link-muted">
              <span>Talk to ORIONS</span><ArrowUpRight className="w-[18px] h-[18px]" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 02 — THE IDEA */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-32 md:py-52">
        <Reveal>
          <div className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-muted-foreground">— The Idea</div>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-24 items-end">
          <Reveal emphasis="lead">
            <h2 className="h-display-lg max-w-[14ch]">
              Every brand has a story.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div lang="th" className="font-thai thai-wrap text-[16px] md:text-[19px] leading-[1.85] text-foreground/80 space-y-5">
              <p>บางครั้งเรื่องนั้นชัดอยู่แล้ว</p>
              <p>บางครั้งมันถูกซ่อนอยู่ใต้ Product, Campaign, Content และการเติบโตตลอดหลายปี</p>
              <p className="text-foreground">เราเข้าไปค้นหาเรื่องนั้น เชื่อมสิ่งที่สำคัญเข้าด้วยกัน และทำให้มันชัดพอที่จะถูกมองเห็น</p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <blockquote className="mt-20 md:mt-28 pt-10 border-t border-foreground/15 font-serif text-[26px] md:text-[44px] leading-[1.15] tracking-[-0.03em] text-foreground max-w-[22ch]">
            We don&rsquo;t create the stars.<br />
            <em className="text-foreground">We reveal the constellation.</em>
          </blockquote>
        </Reveal>
      </div>
    </section>

    {/* 03 — SELECTED WORK. Cards lead with the story line, not the deliverable. */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-32 md:py-44">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <div className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-muted-foreground">— Selected Work</div>
              <h2 className="mt-8 h-display-lg max-w-[16ch]">
                Different formats. <em className="text-foreground">One story.</em>
              </h2>
            </div>
            <Link to="/work" className="cta-link">
              <span>ดูผลงานทั้งหมด</span><ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {featuredCases.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.06} emphasis="quiet">
              <Link
                to={`/work/${item.slug}`}
                className="group relative block overflow-hidden border border-foreground/12 aspect-[4/5] bg-surface-2"
              >
                <Picture
                  data={item.cover}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <span lang="th" className="block font-thai text-[15px] md:text-[17px] leading-[1.55] text-foreground">{item.verdictShort}</span>
                  <span className="mt-4 block font-mono text-[10px] tracking-[0.16em] uppercase text-foreground/70">{item.title} · {item.niche} · {item.year}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 04 — CAPABILITIES */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-32 md:py-44">
        <Reveal>
          <div className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-muted-foreground">— Capabilities</div>
        </Reveal>
        <Reveal delay={0.05} emphasis="lead">
          <h2 className="mt-8 h-display-lg max-w-[18ch]">
            One story. <em className="text-foreground">Many expressions.</em>
          </h2>
        </Reveal>
        <div className="mt-14 md:mt-20 border-t border-foreground/20">
          {disciplines.map((d) => (
            <Reveal key={d.slug} emphasis="quiet">
              <div className="grid grid-cols-[60px_1fr] lg:grid-cols-[90px_0.7fr_1fr_1.1fr] items-baseline gap-x-5 gap-y-2 py-7 md:py-9 border-b border-foreground/12">
                <span className="font-mono text-[12px] md:text-[13px] tracking-[0.14em] tabular-nums text-muted-foreground">{d.n}</span>
                <span className="font-serif text-[28px] md:text-[40px] leading-[1.02] tracking-[-0.03em]">{d.name}</span>
                <span className="col-span-2 lg:col-span-1 font-serif text-[16px] md:text-[19px] leading-[1.35] tracking-[-0.01em] text-foreground/90">{d.line}</span>
                <span lang="th" className="col-span-2 lg:col-span-1 font-thai thai-wrap text-[14px] md:text-[16px] leading-[1.75] text-muted-foreground">{d.th}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <Link to="/practice" viewTransition className="cta-link mt-10">
            <span>Story → Direction → Expression</span><ArrowUpRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>

    {/* 05 — PROCESS. The constellation as structure: five points on one line,
        read left to right — Point → Connection → Form → Meaning. */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-32 md:py-44">
        <Reveal>
          <div className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-muted-foreground">— Process</div>
        </Reveal>
        <Reveal delay={0.05} emphasis="lead">
          <h2 className="mt-8 h-display-lg max-w-[20ch]">
            From scattered points to <em className="text-foreground">a story worth remembering.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <ol className="relative mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-5 gap-y-10 md:gap-x-6">
            <span aria-hidden className="hidden md:block absolute left-0 right-0 top-[5px] h-px bg-foreground/25" />
            {process.map((step) => (
              <li key={step.n} className="relative">
                <span aria-hidden className="hidden md:block w-[11px] h-[11px] rounded-full bg-foreground" />
                <div className="md:mt-8 flex md:block items-baseline gap-5">
                  <span className="font-mono text-[11px] tracking-[0.14em] tabular-nums text-muted-foreground">{step.n}</span>
                  <div>
                    <div className="md:mt-3 font-serif text-[24px] md:text-[28px] leading-none tracking-[-0.03em]">{step.name}</div>
                    <div className="mt-2 font-serif text-[14px] md:text-[15px] leading-[1.4] text-muted-foreground">{step.line}</div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>

    {/* 06 — ABOUT */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-32 md:py-44 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-14 lg:gap-24 items-end">
        <div>
          <Reveal>
            <div className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-muted-foreground">— About</div>
          </Reveal>
          <Reveal delay={0.05} emphasis="lead">
            <h2 className="mt-8 h-display-lg max-w-[12ch]">Boutique by design.</h2>
          </Reveal>
        </div>
        <div>
          <Reveal delay={0.1}>
            <div lang="th" className="font-thai thai-wrap text-[16px] md:text-[19px] leading-[1.85] text-foreground/80 space-y-5">
              <p>เราเลือกทำงานกับ Project จำนวนจำกัด เพื่อรักษาสิ่งที่เราให้คุณค่ามากที่สุด</p>
              <p className="text-foreground">ความเข้าใจ · ความคิด · รายละเอียด · และ Craft</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 font-serif text-[20px] md:text-[26px] leading-[1.25] tracking-[-0.02em] text-foreground">
              Great creative work requires attention.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/about" viewTransition className="cta-link mt-10">
              <span>เกี่ยวกับ ORIONS</span><ArrowUpRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>

    {/* 07 — CONTACT */}
    <CTABand
      eyebrow="Contact"
      title={<>Have a story <em className="text-foreground">worth refining?</em></>}
      primary={{ label: "Talk to ORIONS", to: "/contact" }}
      secondary={{ label: "ดูผลงาน", to: "/work" }}
      tone="ink"
    />
  </div>
);

export default Index;
