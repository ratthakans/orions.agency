import { Link, useParams, Navigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import Picture from "@/components/Picture";
import { archive, getAdjacentPieces, getPiece } from "@/data/archive";

const SITE_URL = "https://orions.agency";

/** One piece. Text only, one measure, a pull line where the essay turns.
 *  It ends on the next piece rather than a sales band — the Archive is read,
 *  not converted. */
const ArchivePost = () => {
  const { slug = "" } = useParams({ strict: false });
  const piece = getPiece(slug);
  if (!piece) return <Navigate to="/archive" replace />;

  const { prev, next } = getAdjacentPieces(slug);
  const url = `${SITE_URL}/archive/${piece.slug}`;
  const total = String(archive.length).padStart(2, "0");

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: piece.title,
      description: piece.dek,
      image: `${SITE_URL}${piece.image.img.src}`,
      articleSection: piece.theme,
      inLanguage: "th",
      author: { "@type": "Organization", name: "ORIONS", url: SITE_URL },
      publisher: { "@type": "Organization", name: "ORIONS", url: SITE_URL },
      mainEntityOfPage: url,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Archive", item: `${SITE_URL}/archive` },
        { "@type": "ListItem", position: 2, name: piece.title, item: url },
      ],
    },
  ];

  return (
    <div>
      <SEO title={`${piece.title} — Archive · ORIONS`} description={piece.dek} path={`/archive/${piece.slug}`} image={piece.image.img.src} ogType="article" schema={schema} />

      <article className="px-6 md:px-10">
        <div className="max-w-[760px] mx-auto pt-28 md:pt-36 pb-14 md:pb-20">
          <Link to="/archive" className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Archive
          </Link>
          <div className="mt-12">
            <SectionLabel label={`No. ${piece.n} / ${total}`} />
          </div>
          <Reveal emphasis="lead">
            <h1 className="mt-8 h-display-md">{piece.title}</h1>
          </Reveal>
          <p lang="th" className="mt-6 font-thai thai-wrap text-[18px] md:text-[21px] leading-[1.7] text-foreground/75">{piece.dek}</p>

          <figure className="mt-12">
            <div className="film-frame aspect-[3/2] bg-surface-2">
              <Picture
                data={piece.image}
                alt=""
                loading="eager"
                fetchPriority="high"
                style={{ objectPosition: piece.focus }}
                className="w-full h-full object-cover grayscale-[0.3] saturate-[0.85]"
              />
            </div>
            <figcaption className="mt-3 font-body text-[13px] leading-[1.6] text-muted-foreground">
              <a href={piece.source} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-foreground/25 hover:text-foreground transition-colors">
                {piece.credit}
              </a>
            </figcaption>
          </figure>

          <div className="mt-14 pt-10 border-t border-foreground/15 flex flex-col gap-7">
            {piece.body.map((para, i) =>
              para.startsWith("> ") ? (
                <p key={i} className="my-4 font-serif text-[24px] md:text-[30px] leading-[1.25]">{para.slice(2)}</p>
              ) : (
                <p key={i} lang="th" className="font-thai thai-wrap text-[16px] md:text-[18px] leading-[1.95] text-foreground/85">{para}</p>
              ),
            )}
          </div>
        </div>
      </article>

      <nav aria-label="More from the Archive" className="px-6 md:px-10 border-t border-foreground/15">
        <div className="max-w-[1280px] mx-auto py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          {[prev, next].map((item, i) =>
            item ? (
              <Link key={item.slug} to="/archive/$slug" params={{ slug: item.slug }} className={`group block ${i === 1 ? "md:text-right" : ""}`}>
                <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-muted-foreground">{i === 0 ? "Previous" : "Next"} · No. {item.n}</span>
                <span className="mt-3 flex items-baseline gap-3 font-display text-[21px] md:text-[25px] leading-[1.15] md:justify-[inherit]">
                  <span className="group-hover:opacity-80 transition-opacity">{item.title}</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-foreground/40 group-hover:text-foreground transition-colors" />
                </span>
              </Link>
            ) : (
              <span key={i} />
            ),
          )}
        </div>
      </nav>
    </div>
  );
};

export default ArchivePost;
