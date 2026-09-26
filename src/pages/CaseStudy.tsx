import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { getApproach } from "@/data/practice";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import { getCaseStudy, getAdjacent, caseStudies } from "@/data/caseStudies";
import Picture from "@/components/Picture";

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
      creator: { "@type": "Organization", name: "ORIONS", url: "https://orions.agency" },
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
        title={`${cs.title} — Selected Work · ORIONS`}
        description={cs.summary}
        path={`/work/${cs.slug}`}
        image={cs.cover.img.src}
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
            <SectionLabel index={getApproach(cs.approach)?.name ?? ""} label={`Case ${cs.n} / ${total}`} />
          </div>

          <Reveal delay={0.1} emphasis="lead">
            <h1 className="mt-8 h-display-lg max-w-[18ch]">
              {cs.title}
              <em className="text-foreground">.</em>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p lang="th" className="mt-6 font-body text-[18px] md:text-[24px] text-muted-foreground max-w-[640px] leading-[1.45]">
              {cs.verdictShort}
            </p>
          </Reveal>

          {/* Meta strip */}
          <Reveal delay={0.2}>
            <dl className="card-soft mt-16 grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-6 p-8">
              {[
                { k: "Brand", v: cs.title },
                { k: "Category", v: cs.niche },
                { k: "Year", v: cs.year },
              ].map((m) => (
                <div key={m.k}>
                  <dt className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                    {m.k}
                  </dt>
                  <dd className="mt-3 h-display-sm">
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
                className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-foreground hover:text-foreground transition-colors"
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
            <div className="group film-frame w-full bg-muted" style={{ aspectRatio: "16 / 9" }}>
              <Picture
                data={cs.cover}
                alt={`${cs.title} — cover`}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              <span className="absolute left-4 bottom-4 md:left-6 md:bottom-6 z-[3] font-mono text-[10px] tracking-[0.18em] uppercase text-white bg-black/60 px-2 py-1">Frame {cs.n} / {total}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Context: the brief and the conditions around it. */}
      <section className="px-6 md:px-10 border-t border-foreground/15">
        <div className="max-w-[1280px] mx-auto py-24 md:py-36 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionLabel index="01" label="The Context" />
            <Reveal delay={0.05}>
              <p lang="th" className="mt-6 font-thai thai-wrap text-[13px] leading-[1.8] text-muted-foreground max-w-[28ch]">
                จุดเริ่มต้นของโจทย์
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.05}>
              <p lang="th" className="font-body text-[22px] md:text-[30px] leading-[1.4] tracking-[-0.01em] text-foreground/75 max-w-[640px]">
                {cs.symptom}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What we found: the insight behind the work. */}
      <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
        <div className="max-w-[1280px] mx-auto py-24 md:py-36 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionLabel index="02" label="What We Found" />
            <Reveal delay={0.05}>
              <p lang="th" className="mt-6 font-thai thai-wrap text-[13px] leading-[1.8] text-muted-foreground max-w-[28ch]">
                {getApproach(cs.approach)?.line}
              </p>
              <Link to={`/services#${cs.approach}`} className="cta-link mt-5">
                <span>{getApproach(cs.approach)?.name}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.05} emphasis="lead">
              <p lang="th" className="editorial-quote max-w-[680px] text-[20px] md:text-[28px]">
                {cs.verdict}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 05 — เงื่อนไข (the constraint that shaped the answer) */}
      <section className="px-6 md:px-10 border-t border-foreground/15">
        <div className="max-w-[1280px] mx-auto py-24 md:py-36 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionLabel index="03" label="The Conditions" />
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.05}>
              <p lang="th" className="font-thai thai-wrap text-[16px] md:text-[18px] leading-[1.85] text-foreground/85 max-w-[640px]">
                {cs.constraint}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 06 — สิ่งที่ทำ */}
      <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
        <div className="max-w-[1280px] mx-auto py-24 md:py-36 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionLabel index="04" label="What We Shaped" />
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.05}>
              <p lang="th" className="font-thai thai-wrap text-[16px] md:text-[18px] leading-[1.85] text-foreground/85 max-w-[640px]">
                {cs.whatWeDid}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Refinement: what was deliberately left out. */}
      <section className="px-6 md:px-10 border-t border-foreground/15">
        <div className="max-w-[1280px] mx-auto py-24 md:py-36 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionLabel index="05" label="The Refinement" />
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.05}>
              <p lang="th" className="editorial-quote max-w-[680px] text-[20px] md:text-[26px]">
                {cs.whatWeKilled}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER — hidden until each case has real before/after frames (no placeholder imagery in production). */}

      {/* 04 — GALLERY (only if >1 image) */}
      {cs.gallery.length > 1 && (
        <section className="px-6 md:px-10 border-t border-foreground/15">
          <div className="max-w-[1280px] mx-auto py-24 md:py-36">
            <SectionLabel index="06" label="Selected Frames" />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {cs.gallery.map((img, i) => (
                <Reveal key={i} delay={0.04 * i}>
                  <div
                    className={`group relative w-full overflow-hidden rounded-none bg-muted ${
                      i === 0 ? "md:col-span-2" : ""
                    }`}
                    style={{ aspectRatio: i === 0 ? "16 / 9" : "4 / 5" }}
                  >
                    <Picture
                      data={img}
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
            className="group block max-w-[1280px] mx-auto py-24 md:py-36"
          >
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
              Next —
            </div>
            <div className="mt-6 flex items-center justify-between gap-8">
              <h3 className="h-display-md group-hover:text-foreground transition-all duration-500">
                {next.title}
              </h3>
              <ArrowUpRight className="w-10 h-10 md:w-14 md:h-14 text-foreground shrink-0 transition-transform duration-500" />
            </div>
            <div className="mt-4 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
              {next.niche} · {next.year}
            </div>
          </Link>
        </section>
      )}
    </div>
  );
};

export default CaseStudy;
