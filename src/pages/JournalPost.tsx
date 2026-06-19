import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { journalPosts } from "@/data/journal";

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("th-TH", { year: "numeric", month: "long", day: "numeric" });

const JournalPost = () => {
  const { slug } = useParams();
  const idx = journalPosts.findIndex((p) => p.slug === slug);
  if (idx === -1) return <Navigate to="/journal" replace />;
  const post = journalPosts[idx];
  const next = journalPosts[(idx + 1) % journalPosts.length];
  const url = `https://orions.agency/journal/${post.slug}`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.dek,
      datePublished: post.date,
      inLanguage: "th",
      mainEntityOfPage: url,
      url,
      author: { "@type": "Organization", name: "ØRIONS", url: "https://orions.agency" },
      publisher: {
        "@type": "Organization",
        name: "ØRIONS",
        logo: { "@type": "ImageObject", url: "https://orions.agency/favicon.jpg" },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Journal", item: "https://orions.agency/journal" },
        { "@type": "ListItem", position: 2, name: post.title, item: url },
      ],
    },
  ];

  return (
    <div>
      <SEO title={`${post.title} · Journal — ØRIONS`} description={post.dek} path={`/journal/${post.slug}`} schema={schema} />

      <article className="section-ink px-6 md:px-10 border-b border-foreground/15">
        <div className="max-w-[760px] mx-auto pt-28 md:pt-32 pb-14 md:pb-18">
          <SectionLabel label={`Journal · ${post.n}`} />
          <Reveal delay={0.1}>
            <p className="mt-8 font-mono text-[10px] tracking-[0.04em] text-cinnabar">{fmtDate(post.date)}</p>
            <h1 lang="th" className="mt-3 h-display-lg thai-wrap">{post.title}</h1>
            <p lang="th" className="mt-6 font-serif text-[18px] md:text-[22px] leading-[1.5] text-cinnabar max-w-[58ch]">
              {post.dek}
            </p>
          </Reveal>
        </div>
      </article>

      <section className="px-6 md:px-10">
        <div className="max-w-[760px] mx-auto py-16 md:py-24">
          {post.body.map((para, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p lang="th" className="mb-6 font-thai thai-wrap text-[16px] md:text-[18px] leading-[1.9] text-foreground/90">
                {para}
              </p>
            </Reveal>
          ))}
          <div className="mt-12 pt-8 border-t border-foreground/15 flex items-center justify-between gap-4 font-mono text-[10px] tracking-[0.1em] uppercase">
            <Link to="/journal" className="text-muted-foreground hover:text-cinnabar transition-colors">← ทุกบันทึก</Link>
            <Link to={`/journal/${next.slug}`} className="text-foreground/80 hover:text-cinnabar transition-colors text-right">
              อ่านต่อ →
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Start a conversation"
        title={<>เห็นด้วยกับวิธีคิดนี้? <em className="text-cinnabar">มาคุยกัน.</em></>}
        subtitle="คุยฟรี 45 นาที ไม่มีข้อผูกมัด — เล่าโจทย์และเงื่อนไขมาได้เลย."
        primary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
        secondary={{ label: "ดูผลงาน", to: "/work" }}
        tone="snow"
      />
    </div>
  );
};

export default JournalPost;
