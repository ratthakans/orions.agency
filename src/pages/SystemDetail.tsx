import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import ClosingCTA from "@/components/ClosingCTA";
import SectionLabel from "@/components/SectionLabel";
import Picture from "@/components/Picture";
import { getInnovation, getAdjacentInnovation, innovations } from "@/data/system";

const SITE_URL = "https://orions.agency";

const SystemDetail = () => {
  const { slug = "" } = useParams();
  const it = getInnovation(slug);

  if (!it) return <Navigate to="/system" replace />;

  const { next } = getAdjacentInnovation(slug);
  const total = String(innovations.length).padStart(2, "0");
  const url = `${SITE_URL}/system/${it.slug}`;
  const isInternal = it.href.startsWith("/");

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: it.name,
      description: it.kind,
      applicationCategory: "BusinessApplication",
      url: isInternal ? SITE_URL : it.href,
      image: it.shot.img.src,
      creator: { "@type": "Organization", name: "ØRIONS", url: SITE_URL },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "System", item: `${SITE_URL}/system` },
        { "@type": "ListItem", position: 2, name: it.name, item: url },
      ],
    },
  ];

  return (
    <div>
      <SEO
        title={`${it.name} — The System · ØRIONS`}
        description={it.kind}
        path={`/system/${it.slug}`}
        image={it.shot.img.src}
        schema={schema}
      />

      {/* 01 — HERO */}
      <section className="px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto pt-28 md:pt-32 pb-12 md:pb-16">
          <Reveal>
            <Link
              to="/system"
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to System
            </Link>
          </Reveal>

          <div className="mt-10">
            <SectionLabel index={`Instrument ${it.n}`} label={`${it.n} / ${total}`} />
          </div>

          <Reveal delay={0.1}>
            <h1
              className="mt-8 font-display font-medium text-[clamp(52px,10vw,132px)] leading-[0.88] tracking-[-0.035em]"
              style={{ color: it.accent }}
            >
              {it.name}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p lang="th" className="mt-6 font-serif text-[18px] md:text-[24px] text-muted-foreground max-w-[640px] leading-[1.45]">
              {it.kind}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="meta-chip">{it.role}</span>
              {it.powered && <span className="meta-chip">{it.powered}</span>}
              <span className="meta-chip">{isInternal ? "Private beta" : "Live"}</span>
            </div>
          </Reveal>

          {it.quote && (
            <Reveal delay={0.24}>
              <blockquote className="editorial-quote mt-12 max-w-[560px] text-[20px] md:text-[26px]" style={{ borderColor: it.accent }}>
                “{it.quote}”
              </blockquote>
            </Reveal>
          )}

          <Reveal delay={0.3}>
            {isInternal ? (
              <Link to={it.href} className="mt-10 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-foreground hover:text-foreground transition-colors">
                {it.hrefLabel} <ArrowUpRight className="w-3 h-3" />
              </Link>
            ) : (
              <a
                href={it.href}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-foreground hover:text-foreground transition-colors"
              >
                {it.hrefLabel} <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
          </Reveal>
        </div>
      </section>

      {/* 02 — COVER */}
      <section className="px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto pb-16 md:pb-20">
          <Reveal>
            <div className="group relative w-full overflow-hidden rounded-none bg-muted" style={{ aspectRatio: "16 / 9" }}>
              <Picture
                data={it.shot}
                alt={`${it.name} — screenshot`}
                className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — WHAT IT IS */}
      <section className="px-6 md:px-10 border-t border-foreground/15">
        <div className="max-w-[1280px] mx-auto py-24 md:py-36 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionLabel index="01" label="What it is" />
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.05}>
              <p lang="th" className="font-thai thai-wrap text-[16px] md:text-[18px] leading-[1.85] text-foreground/85 max-w-[640px]">
                {it.body}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 04 — FEATURES */}
      <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
        <div className="max-w-[1280px] mx-auto py-24 md:py-36">
          <SectionLabel index="02" label="Features" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {it.features.map((f, i) => (
              <Reveal key={f.k} delay={i * 0.05}>
                <div className="card-soft h-full p-7 md:p-8">
                  <h3 className="font-display text-[18px] md:text-[20px] font-medium tracking-[-0.01em]">{f.k}</h3>
                  <p lang="th" className="mt-3 font-thai thai-wrap text-[13px] md:text-[14px] leading-[1.8] text-muted-foreground">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — PAINPOINTS */}
      <section className="px-6 md:px-10 border-t border-foreground/15">
        <div className="max-w-[1280px] mx-auto py-24 md:py-36 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionLabel index="03" label="ปัญหาที่แก้" />
          </div>
          <div className="md:col-span-8">
            <ul className="space-y-5">
              {it.painpoints.map((p) => (
                <Reveal key={p}>
                  <li className="flex gap-4">
                    <span aria-hidden className="mt-2.5 h-px w-6 shrink-0" style={{ background: it.accent }} />
                    <span lang="th" className="font-thai thai-wrap text-[16px] md:text-[17px] leading-[1.8] text-foreground/85 max-w-[56ch]">{p}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 06 — CI AT A GLANCE */}
      <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
        <div className="max-w-[1280px] mx-auto py-24 md:py-36">
          <SectionLabel index="04" label="CI at a glance" />
          <Reveal delay={0.05}>
            <div className="mt-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
              <div className="flex gap-1.5">
                {it.ci.palette.map((c) => (
                  <span key={c} className="w-10 h-10 md:w-12 md:h-12 border border-foreground/15" style={{ background: c }} title={c} />
                ))}
              </div>
              <div>
                <div className="font-mono text-[11px] md:text-[12px] tracking-[0.14em] uppercase text-foreground/80">{it.ci.type}</div>
                <div lang="th" className="mt-2 font-thai text-[14px] leading-[1.75] text-muted-foreground max-w-[52ch]">{it.ci.note}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 07 — NEXT */}
      {next && (
        <section className="px-6 md:px-10 border-t border-foreground/15">
          <Link
            to={`/system/${next.slug}`}
            viewTransition
            className="group block max-w-[1280px] mx-auto py-24 md:py-36"
          >
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
              Next —
            </div>
            <div className="mt-6 flex items-center justify-between gap-8">
              <h3
                className="font-display font-medium text-[clamp(36px,7vw,80px)] leading-[0.92] tracking-[-0.03em] transition-colors duration-500"
                style={{ color: next.accent }}
              >
                {next.name}
              </h3>
              <ArrowUpRight className="w-10 h-10 md:w-14 md:h-14 text-foreground shrink-0 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <div className="mt-4 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
              {next.role} · {next.kind}
            </div>
          </Link>
        </section>
      )}

      <ClosingCTA
        title={<>อยากใช้ หรือสร้าง<em className="text-foreground">ไปด้วยกัน</em>?</>}
        description="คุยฟรี 45 นาที ไม่มีข้อผูกมัด — เล่าโจทย์มาได้เลย."
        ctas={[
          { label: "เริ่มต้นบทสนทนา", to: "/contact" },
          { label: "ดูเครื่องมือทั้งหมด", to: "/system", variant: "ghost" },
        ]}
      />
    </div>
  );
};

export default SystemDetail;
