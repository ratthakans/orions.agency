import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import ClosingCTA from "@/components/ClosingCTA";
import { currentNotes } from "@/data/blog";
import Picture from "@/components/Picture";

const SITE_URL = "https://orions.agency";
const featuredPost = currentNotes.find((post) => post.slug === "constraint-is-the-brief") ?? currentNotes[0];
const visiblePosts = currentNotes.filter((post) => post.slug !== featuredPost.slug);

export const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

const Blog = () => (
  <div>
    <SEO
      title="ORIONS Notes — Brand, Culture & Craft"
      description="บันทึกและมุมมองของ ORIONS เรื่องแบรนด์ ความคิดสร้างสรรค์ วัฒนธรรม และรายละเอียดเบื้องหลังงาน"
      path="/blog"
      schema={{
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "ØRIONS Blog",
        url: `${SITE_URL}/blog`,
        publisher: { "@type": "Organization", name: "ØRIONS", url: SITE_URL },
      }}
    />

    {/* HERO */}
    <section className="section-ink px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto pt-28 md:pt-32 pb-12 md:pb-16">
        <SectionLabel label="ORIONS Notes" />
        <Reveal delay={0.05}>
          <h1 className="mt-8 h-display-lg">
            Things worth<br /><em className="text-foreground">noticing.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p lang="th" className="mt-8 font-thai thai-wrap text-[15px] md:text-[17px] text-muted-foreground max-w-[640px] leading-[1.8]">
            มุมมองต่อแบรนด์ ความคิดสร้างสรรค์ วัฒนธรรม และรายละเอียดที่ทำให้งานมีความหมาย
          </p>
        </Reveal>
      </div>
    </section>

    {/* FEATURED — latest post as a quiet cover story */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-16 md:py-20">
        <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">— อ่านล่าสุด</div>
        <Reveal delay={0.05}>
          <Link
            to={`/blog/${featuredPost.slug}`}
            viewTransition
            className="group mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            <div className="lg:col-span-7 relative w-full overflow-hidden aspect-[16/10] border border-foreground/12">
              <Picture
                data={featuredPost.cover}
                alt={featuredPost.title}
                loading="eager"
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-[1.03] transition-[transform,filter] duration-700"
              />
              <span aria-hidden className="halftone absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/5 to-transparent" />
            </div>
            <div className="lg:col-span-5">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground">{featuredPost.category}</span>
              <h2 lang="th" className="mt-5 h-display-md thai-wrap group-hover:text-foreground transition-colors">
                {featuredPost.title}
              </h2>
              <p lang="th" className="mt-5 font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.8] text-muted-foreground max-w-[46ch]">
                {featuredPost.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-3 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
                <span>{fmtDate(featuredPost.date)} · {featuredPost.readMins} min read</span>
                <ArrowUpRight className="w-4 h-4 text-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>

    {/* GRID — the rest, as an index */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-16 md:py-20">
        <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">— บทความทั้งหมด</div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {visiblePosts.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 0.06}>
            <Link
              to={`/blog/${p.slug}`}
              viewTransition
              className="group flex flex-col h-full rounded-none border border-foreground/12 bg-foreground/[0.02] hover:border-foreground/40 transition-colors"
            >
              <div className="relative w-full overflow-hidden aspect-[16/10]">
                <Picture
                  data={p.cover}
                  alt={p.title}
                  loading={i < 3 ? "eager" : "lazy"}
                  className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-[1.04] transition-[transform,filter] duration-700"
                />
                <span aria-hidden className="halftone absolute inset-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
                <span className="absolute left-4 top-4 font-mono text-[9px] tracking-[0.2em] uppercase text-foreground bg-background/55 border border-foreground/20 backdrop-blur-sm px-2 py-1">
                  {p.category}
                </span>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h2 lang="th" className="font-display text-[19px] md:text-[21px] font-medium leading-snug tracking-[-0.01em] group-hover:text-foreground transition-colors">
                  {p.title}
                </h2>
                <p lang="th" className="mt-3 font-thai thai-wrap text-[14px] leading-[1.8] text-muted-foreground flex-1">
                  {p.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
                  <span>{fmtDate(p.date)} · {p.readMins} min</span>
                  <ArrowUpRight className="w-4 h-4 text-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
        </div>
      </div>
    </section>

    <ClosingCTA
      title={<>อยากคุยเรื่อง <em className="text-foreground">แบรนด์ของคุณ</em> บ้างไหม?</>}
      description="มีเรื่องของแบรนด์ที่อยากทำให้ชัดขึ้น? เล่าโจทย์ให้เราฟัง"
      ctas={[
        { label: "เริ่มต้นบทสนทนา", to: "/contact" },
        { label: "ดูผลงาน", to: "/work", variant: "ghost" },
      ]}
    />
  </div>
);

export default Blog;
