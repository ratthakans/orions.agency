import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import ClosingCTA from "@/components/ClosingCTA";
import SectionLabel from "@/components/SectionLabel";
import { getCaseStudy, getAdjacent } from "@/data/caseStudies";

const CaseStudy = () => {
  const { slug = "" } = useParams();
  const cs = getCaseStudy(slug);

  if (!cs) return <Navigate to="/work" replace />;

  const { prev, next } = getAdjacent(slug);

  return (
    <div>
      <SEO
        title={`${cs.title} — ØRIONS`}
        description={cs.summary}
        path={`/work/${cs.slug}`}
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
            <SectionLabel index="Case Study" label={`${cs.n} / ${String(7).padStart(2, "0")}`} />
          </div>

          <Reveal delay={0.1}>
            <h1 className="mt-8 h-display-xl max-w-[16ch]">
              {cs.title}
              <em className="italic text-cinnabar">.</em>
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-10 font-serif italic text-[20px] md:text-[28px] leading-[1.4] max-w-[680px] text-muted-foreground">
              {cs.summary}
            </p>
          </Reveal>

          {/* Meta strip */}
          <Reveal delay={0.24}>
            <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 border-t border-foreground/15/15 pt-8">
              {[
                { k: "Niche", v: cs.niche },
                { k: "Scope", v: cs.scope },
                { k: "Year", v: cs.year },
                { k: "Impact", v: cs.impact, accent: true },
              ].map((m) => (
                <div key={m.k}>
                  <dt className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                    {m.k}
                  </dt>
                  <dd
                    className={`mt-3 font-serif text-[20px] md:text-[26px] tracking-[-0.01em] ${
                      m.accent ? "text-cinnabar italic" : ""
                    }`}
                  >
                    {m.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* 02 — COVER */}
      <section className="px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto pb-16 md:pb-20">
          <Reveal>
            <div className="relative w-full overflow-hidden bg-muted" style={{ aspectRatio: "16 / 9" }}>
              <img
                src={cs.cover}
                alt={`${cs.title} — cover`}
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — THE BRIEF */}
      <section className="px-6 md:px-10 border-t border-foreground/15">
        <div className="max-w-[1280px] mx-auto py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionLabel index="01" label="The Brief" />
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.05}>
              <p className="font-serif italic text-[24px] md:text-[32px] leading-[1.35] tracking-[-0.01em] max-w-[640px]">
                {cs.brief}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 04 — APPROACH */}
      <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
          <div className="max-w-[1280px] mx-auto py-20 md:py-28">
            <SectionLabel index="02" label="Approach" />
          <Reveal delay={0.05}>
            <h2 className="mt-10 h-display-md max-w-[20ch]">
              How we <em className="italic text-cinnabar">refined it.</em>
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/15 border border-foreground/15">
            {cs.approach.map((step, i) => (
              <Reveal key={step.n} delay={0.05 * i}>
                <div className="bg-background p-8 md:p-10 h-full">
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">
                    — {step.n}
                  </div>
                  <h3 className="mt-6 font-serif italic text-[28px] md:text-[34px] tracking-[-0.01em]">
                    {step.title}
                  </h3>
                  <p className="mt-5 font-thai text-[14px] leading-[1.7] text-foreground/75">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — GALLERY (only if >1 image) */}
      {cs.gallery.length > 1 && (
        <section className="px-6 md:px-10 border-t border-foreground/15">
          <div className="max-w-[1280px] mx-auto py-20 md:py-28">
            <SectionLabel index="03" label="Selected Frames" />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {cs.gallery.map((img, i) => (
                <Reveal key={i} delay={0.04 * i}>
                  <div
                    className={`relative w-full overflow-hidden bg-muted ${
                      i === 0 ? "md:col-span-2" : ""
                    }`}
                    style={{ aspectRatio: i === 0 ? "16 / 9" : "4 / 5" }}
                  >
                    <img
                      src={img}
                      alt={`${cs.title} — frame ${i + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 06 — RESULTS */}
      <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
        <div className="max-w-[1280px] mx-auto py-20 md:py-28">
          <SectionLabel index={cs.gallery.length > 1 ? "04" : "03"} label="Results" />
          <Reveal delay={0.05}>
            <h2 className="mt-10 h-display-lg max-w-[20ch]">
              Numbers we <em className="italic text-cinnabar">stand by.</em>
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 border-t border-foreground/15/15 pt-12">
            {cs.metrics.map((m, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <div>
                  <div className="font-serif italic text-cinnabar text-[64px] md:text-[96px] leading-[1] tracking-[-0.04em] tabular-nums">
                    {m.value}
                  </div>
                  <div className="mt-4 font-mono text-[10px] tracking-[0.22em] uppercase text-foreground/55">
                    {m.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — NEXT */}
      {next && (
        <section className="px-6 md:px-10 border-t border-foreground/15">
          <Link
            to={`/work/${next.slug}`}
            className="group block max-w-[1280px] mx-auto py-20 md:py-28"
          >
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
              Next case study —
            </div>
            <div className="mt-6 flex items-center justify-between gap-8">
              <h3 className="h-display-lg group-hover:italic group-hover:text-cinnabar transition-all duration-500">
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
        title={<>Want results <em className="italic text-cinnabar">like these?</em></>}
        description="30-min discovery call. Free. We reply within 24 hours."
        ctas={[
          { label: "Get a free proposal", to: "/contact" },
          { label: "See services", to: "/services", variant: "ghost" },
        ]}
      />
    </div>
  );
};

export default CaseStudy;