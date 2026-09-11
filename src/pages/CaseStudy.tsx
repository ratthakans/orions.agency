import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import ClosingCTA from "@/components/ClosingCTA";
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
            <SectionLabel index={`Act ${cs.act}`} label={`Case ${cs.n} / ${total}`} />
          </div>

          <Reveal delay={0.1} emphasis="lead">
            <h1 lang="th" className="mt-8 h-display-lg max-w-[18ch] thai-wrap">
              {cs.title}
              <em className="text-foreground">.</em>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p lang="th" className="mt-6 font-serif text-[18px] md:text-[24px] text-muted-foreground max-w-[640px] leading-[1.45]">
              {cs.summary}
            </p>
          </Reveal>

          {/* Meta strip */}
          <Reveal delay={0.2}>
            <dl className="card-soft mt-16 grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-6 p-8">
              {[
                { k: "Brand", v: cs.title, th: true },
                { k: "Category", v: cs.niche },
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
            <div className="group relative w-full overflow-hidden rounded-none bg-muted" style={{ aspectRatio: "16 / 9" }}>
              <Picture
                data={cs.cover}
                alt={`${cs.title} — cover`}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — อาการ (what they walked in asking for) */}
      <section className="px-6 md:px-10 border-t border-foreground/15">
        <div className="max-w-[1280px] mx-auto py-24 md:py-36 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionLabel index="01" label="อาการ" />
            <Reveal delay={0.05}>
              <p lang="th" className="mt-6 font-thai thai-wrap text-[13px] leading-[1.8] text-muted-foreground max-w-[28ch]">
                สิ่งที่ลูกค้าเดินเข้ามาขอ
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.05}>
              <p lang="th" className="font-serif text-[22px] md:text-[30px] leading-[1.4] tracking-[-0.01em] text-foreground/75 max-w-[640px]">
                “{cs.symptom}”
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 04 — คำวินิจฉัย (the real problem) — the hero field of the record */}
      <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
        <div className="max-w-[1280px] mx-auto py-24 md:py-36 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionLabel index="02" label="คำวินิจฉัย" />
            <Reveal delay={0.05}>
              <p lang="th" className="mt-6 font-thai thai-wrap text-[13px] leading-[1.8] text-muted-foreground max-w-[28ch]">
                {cs.actTitle}
              </p>
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
            <SectionLabel index="03" label="เงื่อนไข" />
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
            <SectionLabel index="04" label="สิ่งที่ทำ" />
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

      {/* 07 — สิ่งที่ตัดทิ้ง — the field no one else in the market ships */}
      <section className="px-6 md:px-10 border-t border-foreground/15">
        <div className="max-w-[1280px] mx-auto py-24 md:py-36 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionLabel index="05" label="สิ่งที่ตัดทิ้ง" />
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
              <h3 lang="th" className="h-display-md group-hover:text-foreground transition-all duration-500">
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

      <ClosingCTA
        title={<>มีโจทย์ที่ <em className="text-foreground">มีกรอบ</em> แบบนี้ไหม?</>}
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
