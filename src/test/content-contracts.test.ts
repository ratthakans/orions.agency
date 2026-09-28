import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { caseStudies } from "@/data/caseStudies";
import { portfolio } from "@/data/portfolio";
import { approaches, method, principles, services } from "@/data/practice";
import { archive, archiveThemes } from "@/data/archive";
import { siteSchema } from "@/lib/site-schema";

const fromRoot = (path: string) => readFileSync(resolve(process.cwd(), path), "utf8");
const sitemapUrls = new Set(Array.from(fromRoot("public/sitemap.xml").matchAll(/<loc>([^<]+)<\/loc>/g), (match) => match[1]));
/** The document shell — what index.html held before the move to TanStack Start. */
const DOCUMENT = ["src/routes/__root.tsx", "src/lib/site-schema.ts"];
const documentSource = () => DOCUMENT.map(fromRoot).join("\n");
const redirects = JSON.parse(fromRoot("vercel.json")).redirects as { source: string; destination: string; permanent: boolean }[];

/** Concept, work, services, about — plus the Archive, contact and privacy. */
const PUBLIC_PAGES = ["/", "/work", "/services", "/about", "/archive", "/contact", "/privacy"];

describe("site shape", () => {
  it("publishes exactly the public pages, every case and every archive piece", () => {
    PUBLIC_PAGES.forEach((path) => expect(sitemapUrls).toContain(`https://orions.agency${path}`));
    caseStudies.forEach((item) => expect(sitemapUrls).toContain(`https://orions.agency/work/${item.slug}`));
    archive.forEach((piece) => expect(sitemapUrls).toContain(`https://orions.agency/archive/${piece.slug}`));
    const pages = Array.from(sitemapUrls).filter((url) => !/\/(work|archive)\/./.test(url));
    expect(pages).toHaveLength(PUBLIC_PAGES.length);
  });

  it("navigates to Work, Services, About and Archive only", () => {
    // Only the declared link arrays — the mobile menu appends Contact at render time.
    const labels = (file: string) => {
      const block = fromRoot(file).match(/const (?:links|navLinks) = \[([\s\S]*?)\](?: as const)?;/)?.[1] ?? "";
      return Array.from(block.matchAll(/label: "([^"]+)"/g), (m) => m[1]);
    };
    expect(labels("src/components/Nav.tsx")).toEqual(["Work", "Services", "About", "Archive"]);
    expect(labels("src/components/Footer.tsx")).toEqual(["Work", "Services", "About", "Archive", "Contact"]);
  });

  /** Every retired or renamed URL was indexed once. Dropping it without a
   *  redirect turns search results into 404s; chaining redirects slows them. */
  it("redirects every retired route, straight to a live page", () => {
    const bySource = new Map(redirects.map((r) => [r.source, r.destination]));
    ["/system", "/system/:slug*", "/practice", "/thinking"].forEach((source) => expect(bySource.has(source)).toBe(true));
    ["/blog", "/blog/:slug*", "/journal", "/journal/:slug*"].forEach((source) => expect(bySource.get(source)).toBe("/archive"));
    redirects.forEach((r) => {
      expect(r.permanent, `${r.source} should be a permanent redirect`).toBe(true);
      expect(bySource.has(r.destination.split("#")[0]), `${r.source} → ${r.destination} chains`).toBe(false);
    });
  });

  it("no longer advertises retired pages anywhere public", () => {
    const retired = /orions\.agency\/(?:system|thinking|blog|practice)\b/;
    Array.from(sitemapUrls).forEach((url) => expect(url).not.toMatch(retired));
    expect(fromRoot("public/llms.txt")).not.toMatch(retired);
    expect(documentSource()).not.toMatch(retired);
  });
});

describe("blueprint", () => {
  it("has three services of six items each, in the blueprint's order", () => {
    expect(services.map((s) => s.name)).toEqual(["Brand & Strategy", "Creative & Communication", "Brand Experience"]);
    services.forEach((s) => expect(s.items).toHaveLength(6));
  });

  /** "สองตัวนี้ไม่ใช่ service เพิ่ม" — they must never be listed as services. */
  it("has two signature approaches, kept apart from the services", () => {
    expect(approaches.map((a) => a.name)).toEqual(["Creative Unlock", "Stories Embed"]);
    expect(approaches.map((a) => a.equals)).toEqual(["Possibility", "Coherence"]);
    const serviceNames = new Set(services.map((s) => s.name));
    approaches.forEach((a) => expect(serviceNames.has(a.name)).toBe(false));
  });

  it("works Observe → Reframe → Shape → Embed, on four principles", () => {
    expect(method.steps.map((s) => s.name)).toEqual(["Observe", "Reframe", "Shape", "Embed"]);
    expect(principles).toHaveLength(4);
  });

  /** The site has changed models three times; none of the old ones may leak back. */
  it("does not grow a previous model back", () => {
    const surfaces = ["Index", "Services", "About", "Work", "CaseStudy", "Contact", "Archive", "ArchivePost"]
      .map((name) => fromRoot(`src/pages/${name}.tsx`))
      .concat([fromRoot("src/data/practice.ts"), documentSource(), fromRoot("public/llms.txt")])
      .join("\n");
    expect(surfaces).not.toMatch(/Three movements|getMovement|Story · Direction · Expression|The ORIONS method|Boutique by design|Where aesthetic meets algorithm/);
    expect(surfaces).not.toMatch(/Discover.{0,40}Connect.{0,40}Shape/s);
  });

  it("tags every case with an approach, and backs every approach with a case", () => {
    const slugs = new Set(approaches.map((a) => a.slug));
    caseStudies.forEach((cs) => expect(slugs).toContain(cs.approach));
    approaches.forEach((a) => expect(caseStudies.some((cs) => cs.approach === a.slug)).toBe(true));
    expect(fromRoot("src/data/caseStudies.ts")).not.toMatch(/^\s+(act|actTitle|movement):/m);
  });

  /** Each public heading belongs to exactly one page. Reads h1/h2 with inline
   *  markup (<br />, <em>) flattened, and the closing-band titles too — the
   *  first version of this check skipped both, and two headings slipped past it. */
  it("does not repeat a heading or closing line across pages", () => {
    const flatten = (html: string) => html.replace(/<br\s*\/?>/g, " ").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    const headings = (source: string) => [
      ...Array.from(source.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g), (m) => m[1]),
      ...Array.from(source.matchAll(/title=\{<>([\s\S]*?)<\/>\}/g), (m) => m[1]),
    ]
      .filter((raw) => !/\{[^}]*\}/.test(raw)) // data-driven headings are unique by construction
      .map(flatten)
      .filter(Boolean);
    const seen = new Map<string, string>();
    ["Index", "Services", "About", "Work", "Archive", "Contact", "CaseStudy"].forEach((name) => {
      const page = `src/pages/${name}.tsx`;
      new Set(headings(fromRoot(page))).forEach((head) => {
        const owner = seen.get(head.toLowerCase());
        expect(owner, `"${head}" appears on both ${owner} and ${page}`).toBeUndefined();
        seen.set(head.toLowerCase(), page);
      });
    });
  });

  /** Ø belongs to the drawn logo. Every piece of text — titles, schema, alt and
   *  aria labels a screen reader speaks — writes the name ORIONS. */
  it("spells the name ORIONS everywhere but the logo", () => {
    const files = ["Index", "Services", "About", "Work", "CaseStudy", "Contact", "Archive", "ArchivePost", "Privacy", "NotFound"]
      .map((n) => `src/pages/${n}.tsx`)
      .concat(["src/components/Nav.tsx", "src/components/Footer.tsx", "src/components/SEO.tsx", ...DOCUMENT, "public/llms.txt"]);
    files.forEach((f) => expect(fromRoot(f), f).not.toContain("ØRIONS"));
    expect(fromRoot("src/components/Logo.tsx")).not.toMatch(/aria-label="ØRIONS"/);
  });

  it("uses the master idea on the main public surfaces", () => {
    expect(fromRoot("src/pages/Index.tsx")).toContain("Stories,");
    // The schema computes these from practice.ts, so check the values it renders.
    const [org, service, site] = siteSchema;
    expect(org.slogan).toBe("Stories, Refined.");
    expect(site.alternateName).toBe("Stories, Refined.");
    const offers = (service.hasOfferCatalog as { itemListElement: { itemOffered: { name: string } }[] }).itemListElement;
    expect(offers.map((o) => o.itemOffered.name)).toEqual([...services, ...approaches].map((x) => x.name));
    expect(fromRoot("public/llms.txt")).toContain("Stories, Refined.");
    expect(fromRoot("src/data/practice.ts")).toContain("Independent Creative Studio");
  });

  /** The master line is Newsreader, and heading spans never fall to the Thai
   *  body face. Both regressed once: the hero drew in IBM Plex Sans Thai. */
  it("sets the master line in Newsreader and keeps heading spans in the heading face", () => {
    const css = fromRoot("src/index.css");
    expect(css).toMatch(/h1\.hero-title\s*\{[^}]*font-family:\s*'Newsreader'/);
    expect(css).toMatch(/:is\(h1, h2, h3, h4, h5, h6\):lang\(th\) span:not\(\[class\*="font-"\]\)\s*\{\s*font-family: inherit;/);
    expect(fromRoot("src/pages/Index.tsx")).toMatch(/<h1 className="[^"]*hero-title[^"]*">/);
  });

  /** One big closing CTA per page, and only where it earns it. */
  it("keeps the closing CTA band to the homepage and services", () => {
    ["src/pages/Index.tsx", "src/pages/Services.tsx"].forEach((p) => expect(fromRoot(p)).toContain("<CTABand"));
    ["About", "Work", "CaseStudy", "Archive", "ArchivePost"].forEach((name) =>
      expect(fromRoot(`src/pages/${name}.tsx`)).not.toMatch(/<CTABand|<ClosingCTA/),
    );
  });
});

describe("archive", () => {
  it("holds twelve pieces, three per theme, with unique slugs", () => {
    expect(archive).toHaveLength(12);
    archiveThemes.forEach((theme) => expect(archive.filter((p) => p.theme === theme)).toHaveLength(3));
    expect(new Set(archive.map((p) => p.slug)).size).toBe(12);
    expect(archive.map((p) => p.n)).toEqual(Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0")));
    archive.forEach((p) => expect(p.body.length, p.slug).toBeGreaterThanOrEqual(5));
  });

  /** Archive photographs come from Pexels, are saved in the repo (not
   *  hotlinked), and each is credited to its photographer with a link to the
   *  photo's Pexels page. */
  it("illustrates every piece with a credited Pexels photograph", () => {
    const used = Array.from(fromRoot("src/data/archive.ts").matchAll(/from "(@\/assets\/[^"?]+)/g), (m) => m[1]);
    expect(used).toHaveLength(archive.length);
    used.forEach((path) => expect(path, path).toMatch(/^@\/assets\/archive\/\d{2}\.jpg$/));
    archive.forEach((p) => {
      expect(p.credit, p.slug).toMatch(/^Photo by .+ on Pexels$/);
      expect(p.source, p.slug).toMatch(/^https:\/\/www\.pexels\.com\/photo\/\d+\/$/);
    });
    expect(new Set(archive.map((p) => p.source)).size).toBe(archive.length);
  });

  /** From the brand book. Guards the essays and every page they sit beside. */
  it("never uses the banned words", () => {
    const banned = ["Revolutionary", "Game-changing", "One-stop solution", "ครบวงจร", "ยกระดับธุรกิจของคุณ", "ปลดล็อกศักยภาพ", "เหนือระดับ", "ตอบโจทย์ทุกความต้องการ"];
    const text = [fromRoot("src/data/archive.ts"), fromRoot("src/data/practice.ts"), fromRoot("public/llms.txt")].join("\n").toLowerCase();
    banned.forEach((word) => expect(text, word).not.toContain(word.toLowerCase()));
  });
});

describe("work page", () => {
  it("shows client work first", () => {
    const work = fromRoot("src/pages/Work.tsx");
    expect(work.indexOf("{/* 02 · CATEGORY BOARDS */}")).toBeLessThan(work.indexOf("{/* 03 · STUDIO SHOWREEL"));
    expect(work).toContain("cs.verdictShort");
  });

  it("lets a visitor filter the record by approach", () => {
    expect(fromRoot("src/pages/Work.tsx")).toContain("cs.approach === approach");
  });

  /** A randomised-order gallery once caused a hydration mismatch, and the
   *  helper that replaced it was later deleted while a call site survived,
   *  crashing the whole route. Order stays deterministic and data-defined. */
  it("keeps the portfolio order deterministic", () => {
    expect(portfolio[0].key).toBe("cases");
    expect(fromRoot("src/pages/Work.tsx")).not.toMatch(/Math\.random|shuffle\(/);
  });
});

/** Runs against source, so it needs no build. An in-app link must land on a
 *  real route — not on a redirect — and template literals are checked by their
 *  static prefix. */
describe("internal links", () => {
  /** File-based routes: work.$slug.tsx → /work/$slug, work.index.tsx → /work. */
  const routePaths = readdirSync(resolve(process.cwd(), "src/routes"))
    .filter((f) => f.endsWith(".tsx") && !f.startsWith("__"))
    .map((f) => "/" + f.replace(/\.tsx$/, "").replace(/(^|\.)index$/, "").split(".").join("/"))
    .map((path) => path.replace(/\/$/, "") || "/");
  const resolves = (path: string) => routePaths.includes(path);

  /** A route that is never prerendered does not exist on the static host. */
  it("prerenders every route", () => {
    const config = fromRoot("vite.config.ts");
    routePaths.filter((p) => !p.includes("$")).forEach((p) => expect(config, p).toContain(`"${p}"`));
    routePaths.filter((p) => p.includes("$")).forEach((p) => expect(config, p).toContain("`" + p.split("$")[0]));
  });

  it("points every in-app link at a route that exists", () => {
    const files = ["Index", "Services", "Work", "CaseStudy", "About", "Contact", "Privacy", "NotFound", "Archive", "ArchivePost"]
      .map((name) => `src/pages/${name}.tsx`)
      .concat(["src/components/Nav.tsx", "src/components/Footer.tsx", "src/components/StickyMobileCTA.tsx"]);

    const bad: string[] = [];
    files.forEach((file) => {
      const source = fromRoot(file);
      const hrefs = [
        ...Array.from(source.matchAll(/(?:to|href)="(\/[^"]*)"/g), (m) => m[1]),
        ...Array.from(source.matchAll(/(?:to|href)=\{`(\/[^`$#?]*)/g), (m) => m[1]),
        ...Array.from(source.matchAll(/\bto: "(\/[^"]*)"/g), (m) => m[1]),
      ];
      hrefs.forEach((href) => {
        const path = href.split(/[#?]/)[0].replace(/\/$/, "") || "/";
        if (!resolves(path)) bad.push(`${file} → ${href}`);
      });
    });
    expect(bad, `dead or redirected in-app links:\n${bad.join("\n")}`).toEqual([]);
  });
});
