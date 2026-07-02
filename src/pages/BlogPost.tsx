import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import ClosingCTA from "@/components/ClosingCTA";
import SectionLabel from "@/components/SectionLabel";
import { blogPosts, getBlogPost } from "@/data/blog";
import { fmtDate } from "./Blog";
import Picture from "@/components/Picture";

const SITE_URL = "https://orions.agency";

const BlogPost = () => {
  const { slug = "" } = useParams();
  const post = getBlogPost(slug);
  if (!post) return <Navigate to="/blog" replace />;

  const idx = blogPosts.findIndex((p) => p.slug === slug);
  const next = blogPosts[(idx + 1) % blogPosts.length];
  const url = `${SITE_URL}/blog/${post.slug}`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      image: post.cover.img.src,
      datePublished: post.date,
      articleSection: post.category,
      author: { "@type": "Organization", name: "ØRIONS", url: SITE_URL },
      publisher: { "@type": "Organization", name: "ØRIONS", url: SITE_URL },
      mainEntityOfPage: url,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 2, name: post.title, item: url },
      ],
    },
  ];

  return (
    <div>
      <SEO
        title={`${post.title} — Blog · ØRIONS`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.cover.img.src}
        ogType="article"
        schema={schema}
      />

      {/* HERO */}
      <section className="px-6 md:px-10">
        <div className="max-w-[820px] mx-auto pt-28 md:pt-32 pb-10 md:pb-12">
          <Reveal>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Blog
            </Link>
          </Reveal>
          <div className="mt-8">
            <SectionLabel label={post.category} />
          </div>
          <Reveal delay={0.1}>
            <h1 lang="th" className="mt-6 h-display-lg thai-wrap max-w-[20ch]">
              {post.title}
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-6 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
              {fmtDate(post.date)} · {post.readMins} min read
            </div>
          </Reveal>
        </div>
      </section>

      {/* COVER */}
      <section className="px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto pb-12 md:pb-16">
          <Reveal>
            <div className="w-full overflow-hidden rounded-none border border-foreground/15 bg-muted" style={{ aspectRatio: "16 / 9" }}>
              <Picture data={post.cover} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* BODY */}
      <section className="px-6 md:px-10">
        <div className="max-w-[680px] mx-auto pb-20 md:pb-28">
          {post.body.map((para, i) => {
            // Pull-quote: a body line prefixed with "> " renders as an
            // editorial pull-quote (one per article — magazine rhythm).
            if (para.startsWith(">")) {
              const q = para.replace(/^>\s*/, "");
              return (
                <Reveal key={i}>
                  <figure className="my-12 md:my-16 text-center">
                    <div className="mx-auto mb-6 h-px w-10 bg-cinnabar" />
                    <blockquote lang="th" className="font-thai thai-wrap mx-auto max-w-[24ch] text-[22px] md:text-[30px] leading-[1.45] tracking-[-0.01em] text-foreground">
                      {q}
                    </blockquote>
                  </figure>
                </Reveal>
              );
            }
            // First paragraph = standfirst / lead (larger, brighter).
            const isLead = i === 0;
            return (
              <Reveal key={i} delay={0.03 * i}>
                <p
                  lang="th"
                  className={
                    isLead
                      ? "font-thai thai-wrap text-[19px] md:text-[22px] leading-[1.7] text-foreground/95"
                      : "font-thai thai-wrap text-[16px] md:text-[18px] leading-[1.8] text-foreground/85 mt-6"
                  }
                >
                  {para}
                </p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* NEXT */}
      <section className="px-6 md:px-10 border-t border-foreground/15">
        <Link to={`/blog/${next.slug}`} viewTransition className="group block max-w-[1280px] mx-auto py-16 md:py-20">
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">อ่านต่อ —</div>
          <div className="mt-5 flex items-center justify-between gap-8">
            <h3 lang="th" className="h-display-md group-hover:text-cinnabar transition-colors">{next.title}</h3>
            <ArrowUpRight className="w-10 h-10 md:w-14 md:h-14 text-cinnabar shrink-0" />
          </div>
          <div className="mt-3 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">{next.category}</div>
        </Link>
      </section>

      <ClosingCTA
        title={<>มีโจทย์ที่อยาก <em className="text-cinnabar">เล่าให้เราฟัง</em> ไหม?</>}
        description="คุยฟรี 45 นาที ไม่มีข้อผูกมัด — เล่าโจทย์และเงื่อนไขมาได้เลย."
        ctas={[
          { label: "เริ่มต้นบทสนทนา", to: "/contact" },
          { label: "อ่านบทความอื่น", to: "/blog", variant: "ghost" },
        ]}
      />
    </div>
  );
};

export default BlogPost;
