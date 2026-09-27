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

      {/* The case in one section: five rows, one per stage, every word from the
          case file. It used to be five full-screen sections of one paragraph
          each, alternating ink and paper — long to scroll for what it said. */}
      <section className="px-6 md:px-10 border-t border-foreground/15">
        <div className="max-w-[1280px] mx-auto py-20 md:py-28">
          {[
            { n: "01", label: "The Context", text: cs.symptom, quote: false },
            { n: "02", label: "What We Found", text: cs.verdict, quote: true },
            { n: "03", label: "The Conditions", text: cs.constraint, quote: false },
            { n: "04", label: "What We Shaped", text: cs.whatWeDid, quote: false },
            { n: "05", label: "The Refinement", text: cs.whatWeKilled, quote: false },
          ].map((row) => (
            <div key={row.n} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 py-10 md:py-12 border-t border-foreground/15 first:border-t-0 first:pt-0">
              <div className="md:col-span-4">
                <SectionLabel index={row.n} label={row.label} />
                {row.quote && (
                  <Link to={`/services#${cs.approach}`} className="cta-link mt-5">
                    <span>{getApproach(cs.approach)?.name}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
              <div className="md:col-span-8">
                <p
                  lang="th"
                  className={
                    row.quote
                      ? "editorial-quote max-w-[680px] text-[20px] md:text-[28px]"
                      : "font-thai thai-wrap text-[16px] md:text-[18px] leading-[1.85] text-foreground/85 max-w-[640px]"
                  }
                >
                  {row.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BEFORE / AFTER — hidden until each case has real before/after frames (no placeholder imagery in production). */}

      {/* Gallery (only if >1 image) */}
      {cs.gallery.length > 1 && (
        <section className="px-6 md:px-10 border-t border-foreground/15">
          <div className="max-w-[1280px] mx-auto py-24 md:py-36">
            <SectionLabel label="Selected Frames" />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {cs.gallery.map((img, i) => (
                // The span belongs on the grid item — Reveal — not the frame inside
                // it; on the inner div it did nothing, and the lead frame sat in
                // one column beside a taller one, leaving the last frame alone.
                <Reveal key={i} delay={0.04 * i} className={i === 0 ? "md:col-span-2" : ""}>
                  <div
                    className="group relative w-full overflow-hidden rounded-none bg-muted"
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
