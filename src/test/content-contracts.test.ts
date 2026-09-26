import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { caseStudies } from "@/data/caseStudies";
import { portfolio } from "@/data/portfolio";
import { engagements, foundation, movements } from "@/data/practice";

const fromRoot = (path: string) => readFileSync(resolve(process.cwd(), path), "utf8");
const sitemapUrls = new Set(Array.from(fromRoot("public/sitemap.xml").matchAll(/<loc>([^<]+)<\/loc>/g), (match) => match[1]));
const redirects = JSON.parse(fromRoot("vercel.json")).redirects as { source: string; destination: string; permanent: boolean }[];

/** The site is four things — concept, work, services, about — plus contact and
 *  the legal page. Anything else that reappears is the clutter coming back. */
const PUBLIC_PAGES = ["/", "/work", "/services", "/about", "/contact", "/privacy"];

describe("site shape", () => {
  it("publishes exactly the four sections plus contact and privacy", () => {
    PUBLIC_PAGES.forEach((path) => expect(sitemapUrls).toContain(`https://orions.agency${path === "/" ? "/" : path}`));
    caseStudies.forEach((item) => expect(sitemapUrls).toContain(`https://orions.agency/work/${item.slug}`));
    const pages = Array.from(sitemapUrls).filter((url) => !url.includes("/work/"));
    expect(pages).toHaveLength(PUBLIC_PAGES.length);
  });

  it("navigates to Work, Services and About only", () => {
    // Only the declared link arrays — the mobile menu appends Contact at render time.
    const labels = (file: string) => {
      const block = fromRoot(file).match(/const (?:links|navLinks) = \[([\s\S]*?)\];/)?.[1] ?? "";
      return Array.from(block.matchAll(/label: "([^"]+)"/g), (m) => m[1]);
    };
    expect(labels("src/components/Nav.tsx")).toEqual(["Work", "Services", "About"]);
    expect(labels("src/components/Footer.tsx")).toEqual(["Work", "Services", "About", "Contact"]);
  });

  /** Every retired or renamed URL was in the sitemap at some point, so it is
   *  indexed. Dropping it without a redirect turns search results into 404s. */
  it("redirects every retired route instead of dropping it", () => {
    const sources = new Set(redirects.map((r) => r.source));
    ["/system", "/system/:slug*", "/practice", "/thinking", "/blog", "/blog/:slug*"].forEach((source) => expect(sources).toContain(source));
    redirects.forEach((r) => {
      expect(r.permanent, `${r.source} should be a permanent redirect`).toBe(true);
      // A redirect pointing at another redirect only chains toward a 404.
      expect(sources.has(r.destination.split("#")[0]), `${r.source} → ${r.destination} chains`).toBe(false);
    });
  });

  it("no longer advertises retired pages anywhere public", () => {
    const retired = /orions\.agency\/(?:system|thinking|blog|practice)\b/;
    Array.from(sitemapUrls).forEach((url) => expect(url).not.toMatch(retired));
    expect(fromRoot("public/llms.txt")).not.toMatch(retired);
    expect(fromRoot("index.html")).not.toMatch(retired);
  });
});

describe("brand architecture", () => {
  /** The site may only ever give one answer to "what do you sell". */
  it("has exactly three movements, in order", () => {
    expect(movements.map((item) => item.slug)).toEqual(["expand", "reframe", "embed"]);
    expect(movements.map((item) => item.name)).toEqual(["Expand", "Reframe", "Embed"]);
    movements.forEach((item) => expect(item.question.length).toBeGreaterThan(0));
  });

  it("does not grow a second model back", () => {
    const surfaces = ["src/pages/Index.tsx", "src/pages/Practice.tsx", "src/pages/About.tsx", "src/data/practice.ts"].map(fromRoot).join("\n");
    expect(surfaces).not.toContain("The ORIONS method");
    expect(surfaces).not.toMatch(/Discover.{0,40}Connect.{0,40}Shape/s);
    expect(surfaces).not.toMatch(/Our principles|Three beliefs/);
  });

  it("routes every engagement into a movement, and keeps Brand Foundation outside", () => {
    const slugs = new Set(movements.map((item) => item.slug));
    engagements.forEach((item) => expect(slugs).toContain(item.movement));
    expect(new Set(engagements.map((item) => item.slug)).size).toBe(engagements.length);
    expect(foundation.movement).toBeNull();
    expect(engagements.map((item) => item.slug)).not.toContain(foundation.slug);
  });

  /** Acts and movements were two names for one grouping. */
  it("labels a case by its movement only, never by an act", () => {
    expect(fromRoot("src/data/caseStudies.ts")).not.toMatch(/^\s+act(Title)?:/m);
    expect(fromRoot("src/pages/CaseStudy.tsx")).not.toMatch(/cs\.act/);
    movements.forEach((m) => expect(m.record.length).toBeGreaterThan(0));
  });

  /** The model has to describe work we actually did, or it is a claim. */
  it("backs every movement with at least one case study", () => {
    movements.forEach((m) => expect(caseStudies.filter((cs) => cs.movement === m.slug).length).toBeGreaterThan(0));
    const slugs = new Set(movements.map((item) => item.slug));
    caseStudies.forEach((cs) => expect(slugs).toContain(cs.movement));
  });

  /** Each public heading belongs to exactly one page. */
  it("does not repeat a section heading across pages", () => {
    const seen = new Map<string, string>();
    ["src/pages/Index.tsx", "src/pages/Practice.tsx", "src/pages/About.tsx", "src/pages/Work.tsx"].forEach((page) => {
      Array.from(fromRoot(page).matchAll(/<h[12][^>]*>([^<{]+)<\/h[12]>/g), (m) => m[1].trim()).forEach((head) => {
        const owner = seen.get(head);
        expect(owner, `"${head}" appears on both ${owner} and ${page}`).toBeUndefined();
        seen.set(head, page);
      });
    });
  });

  it("uses the same primary positioning across the main public surfaces", () => {
    expect(fromRoot("src/pages/Index.tsx")).toContain("Stories,");
    expect(fromRoot("index.html")).toContain("Stories, refined.");
    expect(fromRoot("public/llms.txt")).toContain("Stories, refined.");
    const primary = ["src/pages/Index.tsx", "src/pages/Practice.tsx", "src/pages/About.tsx", "src/pages/Contact.tsx", "index.html", "public/llms.txt"].map(fromRoot).join("\n");
    expect(primary).not.toMatch(/Where aesthetic meets algorithm|Boutique by design|every engagement starts at stage 01|ทุกงานเริ่มที่การวินิจฉัย/);
  });

  /** One big closing CTA per page, and only where it earns it. */
  it("keeps the closing CTA band to the homepage and services", () => {
    ["src/pages/Index.tsx", "src/pages/Practice.tsx"].forEach((p) => expect(fromRoot(p)).toContain("<CTABand"));
    ["src/pages/About.tsx", "src/pages/Work.tsx", "src/pages/CaseStudy.tsx"].forEach((p) =>
      expect(fromRoot(p)).not.toMatch(/<CTABand|<ClosingCTA/),
    );
  });
});

describe("work page", () => {
  it("shows client work first", () => {
    const work = fromRoot("src/pages/Work.tsx");
    expect(work.indexOf("{/* 02 · CATEGORY BOARDS */}")).toBeLessThan(work.indexOf("{/* 03 · STUDIO SHOWREEL"));
    expect(work).toContain("cs.verdictShort");
  });

  it("lets a visitor filter the record by movement", () => {
    expect(fromRoot("src/pages/Work.tsx")).toContain("cs.movement === move");
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
 *  real route — not on a redirect, which is an extra hop the site itself
 *  should never make — and template literals are checked by their static
 *  prefix, since `/services#${slug}` breaks just as hard as "/services" would. */
describe("internal links", () => {
  const staticRoutes = new Set(
    ["/", ...Array.from(fromRoot("src/App.tsx").matchAll(/path: "([^":]+)"/g), (m) => `/${m[1]}`)]
      .map((route) => route.replace(/\/$/, "") || "/"),
  );
  const dynamicPrefixes = ["/work/"];
  const resolves = (path: string) => staticRoutes.has(path) || dynamicPrefixes.some((prefix) => path.startsWith(prefix));

  it("points every in-app link at a route that exists", () => {
    const files = ["Index", "Practice", "Work", "CaseStudy", "About", "Contact", "Privacy", "NotFound"]
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
        if (path.startsWith("/work/") && path === "/work/") return; // `/work/${slug}` prefix
        if (!resolves(path)) bad.push(`${file} → ${href}`);
      });
    });
    expect(bad, `dead or redirected in-app links:\n${bad.join("\n")}`).toEqual([]);
  });
});
