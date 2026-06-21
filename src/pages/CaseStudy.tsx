import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import ClosingCTA from "@/components/ClosingCTA";
import SectionLabel from "@/components/SectionLabel";
import { getCaseStudy, getAdjacent, caseStudies } from "@/data/caseStudies";

// Honest method (matches the studio's stated process on /services)
const approach = [
  { n: "01", t: "ฟังโจทย์ + เงื่อนไข", d: "audit แบรนด์ คู่แข่ง และกรอบที่ต้องอยู่ในนั้น" },
  { n: "02", t: "Refine เรื่องที่จริง", d: "ตกผลึกทิศทาง — คมพอจะลงในกรอบได้" },
  { n: "03", t: "ผลิต + วัดผล", d: "craft ภายใต้ทิศทางเดียว แล้ววัด ปรับ ทำต่อเนื่อง" },
];

const CaseStudy = () => {
  const { slug = "" } = useParams();
  const cs = getCaseStudy(slug);

  if (!cs) return <Navigate to="/work" replace />;

  const { next } = getAdjacent(slug);
  const total = String(caseStudies.length).padStart(2, "0");
  const url = `https://orions.agency/work/${cs.slug}`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: cs.title,
      headline: cs.title,
      abstract: cs.summary,
      about: cs.niche,
      dateCreated: cs.year,
      url,
      creator: { "@type": "Organization", name: "ØRIONS", url: "https://orions.agency" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Work", item: "https://orions.agency/work" },
        { "@type": "ListItem", position: 2, name: cs.title, item: url },
      ],
    },
  ];

  return (
    <div>
      <SEO
        title={`${cs.title} — Selected Work · ØRIONS`}
        description={cs.summary}
        path={`/work/${cs.slug}`}
        image={cs.cover}
        schema={schema}
      />

      {/* 01 — HERO */}
      <section className="px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto pt-28 md:pt-32 pb-12 md:pb-16">
          <Reveal>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Work
            </Link>
          </Reveal>

          <div className="mt-10">
            <SectionLabel index={`Act ${cs.act}`} label={`Case ${cs.n} / ${total}`} />
          </div>

          <Reveal delay={0.1}>
            <h1 lang="th" className="mt-8 h-display-lg max-w-[18ch] thai-wrap">
              {cs.title}
              <em className="text-cinnabar">.</em>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p lang="th" className="mt-6 font-serif text-[18px] md:text-[24px] text-muted-foreground max-w-[640px] leading-[1.45]">
              {cs.summary}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-2">
              {cs.scope.split("·").map((s) => (
                <span key={s} className="meta-chip">{s.trim()}</span>
              ))}
            </div>
          </Reveal>

          {/* Meta strip */}
          <Reveal delay={0.24}>
            <dl className="card-soft mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 p-8">
              {[
                { k: "Brand", v: cs.title, th: true },
                { k: "Category", v: cs.niche },
                { k: "Scope", v: cs.scope },
                { k: "Year", v: cs.year },
              ].map((m) => (
                <div key={m.k}>
                  <dt className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                    {m.k}
                  </dt>
                  <dd lang={m.th ? "th" : undefined} className="mt-3 h-display-sm">
                    {m.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {cs.domain && (
            <Reveal delay={0.3}>
              <a
                href={cs.url || `https://${cs.domain}`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-foreground hover:text-cinnabar transition-colors"
              >
                {cs.domain} <ArrowUpRight className="w-3 h-3" />
              </a>
            </Reveal>
          )}
        </div>
      </section>

      {/* 02 — COVER */}
      <section className="px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto pb-16 md:pb-20">
          <Reveal>
            <div className="group relative w-full overflow-hidden rounded-2xl bg-muted" style={{ aspectRatio: "16 / 9" }}>
              <img
                src={cs.cover}
                alt={`${cs.title} — cover`}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — THE CONSTRAINT */}
      <section className="px-6 md:px-10 border-t border-foreground/15">
        <div className="max-w-[1280px] mx-auto py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionLabel index="01" label="The constraint" />
            <Reveal delay={0.05}>
              <p lang="th" className="mt-6 font-thai thai-wrap text-[13px] leading-[1.7] text-muted-foreground max-w-[28ch]">
                {cs.actTitle}
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.05}>
              <p lang="th" className="editorial-quote max-w-[680px] text-[20px] md:text-[26px]">
                {cs.constraint}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 04 — WHAT WE DID */}
      <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
        <div className="max-w-[1280px] mx-auto py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionLabel index="02" label="What we did" />
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.05}>
              <h2 lang="th" className="h-display-sm max-w-[20ch] thai-wrap">
                refine มันจนคมพอจะ <em className="text-cinnabar">ลงในกรอบนั้นได้.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p lang="th" className="mt-8 font-thai thai-wrap text-[16px] md:text-[18px] leading-[1.7] text-foreground/85 max-w-[640px]">
                {cs.whatWeDid}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 04b — APPROACH (honest method) */}
      <section className="px-6 md:px-10 border-t border-foreground/15">
        <div className="max-w-[1280px] mx-auto py-20 md:py-28">
          <SectionLabel index="03" label="Approach" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {approach.map((a, i) => (
              <Reveal key={a.n} delay={i * 0.07}>
                <div className="card-soft h-full p-7 md:p-8">
                  <div className="num-display text-cinnabar text-[34px]">{a.n}</div>
                  <h3 lang="th" className="mt-4 font-display text-[18px] md:text-[20px] font-semibold">{a.t}</h3>
                  <p lang="th" className="mt-3 font-thai thai-wrap text-[13px] leading-[1.7] text-muted-foreground">{a.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER — hidden until each case has real before/after frames (no placeholder imagery in production). */}

      {/* 04 — GALLERY (only if >1 image) */}
      {cs.gallery.length > 1 && (
        <section className="px-6 md:px-10 border-t border-foreground/15">
          <div className="max-w-[1280px] mx-auto py-20 md:py-28">
            <SectionLabel index="04" label="Selected Frames" />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {cs.gallery.map((img, i) => (
                <Reveal key={i} delay={0.04 * i}>
                  <div
                    className={`group relative w-full overflow-hidden rounded-2xl bg-muted ${
                      i === 0 ? "md:col-span-2" : ""
                    }`}
                    style={{ aspectRatio: i === 0 ? "16 / 9" : "4 / 5" }}
                  >
                    <img
                      src={img}
                      alt={`${cs.title} — frame ${i + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 06 — NEXT */}
      {next && (
        <section className="px-6 md:px-10 border-t border-foreground/15">
          <Link
            to={`/work/${next.slug}`}
            className="group block max-w-[1280px] mx-auto py-20 md:py-28"
          >
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
              Next —
            </div>
            <div className="mt-6 flex items-center justify-between gap-8">
              <h3 lang="th" className="h-display-md group-hover:text-cinnabar transition-all duration-500">
                {next.title}
              </h3>
              <ArrowUpRight className="w-10 h-10 md:w-14 md:h-14 text-cinnabar shrink-0 transition-transform duration-500" />
            </div>
            <div className="mt-4 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
              {next.niche} · {next.scope}
            </div>
          </Link>
        </section>
      )}

      <ClosingCTA
        title={<>มีโจทย์ที่ <em className="text-cinnabar">มีกรอบ</em> แบบนี้ไหม?</>}
        description="คุยฟรี 45 นาที ไม่มีข้อผูกมัด — เล่าโจทย์และเงื่อนไขมาได้เลย."
        ctas={[
          { label: "เริ่มต้นบทสนทนา", to: "/contact" },
          { label: "ดูผลงานทั้งหมด", to: "/work", variant: "ghost" },
        ]}
      />
    </div>
  );
};

export default CaseStudy;
