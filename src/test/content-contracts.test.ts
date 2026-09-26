import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { blogPosts, currentNotes } from "@/data/blog";
import { caseStudies } from "@/data/caseStudies";
import { portfolio } from "@/data/portfolio";
import { craft, engagements, foundation, movementBridge, movements } from "@/data/practice";

const fromRoot = (path: string) => readFileSync(resolve(process.cwd(), path), "utf8");
const sitemapUrls = new Set(Array.from(fromRoot("public/sitemap.xml").matchAll(/<loc>([^<]+)<\/loc>/g), (match) => match[1]));

describe("public routes", () => {
  it("keeps every published page and case reachable", () => {
    ["/", "/about", "/practice", "/work", "/thinking", "/blog", "/contact", "/privacy"].forEach((path) => {
      expect(sitemapUrls).toContain(`https://orions.agency${path}`);
    });
    currentNotes.forEach((post) => expect(sitemapUrls).toContain(`https://orions.agency/blog/${post.slug}`));
    blogPosts.filter((post) => !currentNotes.includes(post)).forEach((post) => expect(sitemapUrls).not.toContain(`https://orions.agency/blog/${post.slug}`));
    caseStudies.forEach((item) => expect(sitemapUrls).toContain(`https://orions.agency/work/${item.slug}`));
  });

  it("no longer advertises the retired /system pages", () => {
    Array.from(sitemapUrls).forEach((url) => expect(url).not.toMatch(/\/system(\/|$)/));
    expect(fromRoot("public/llms.txt")).not.toContain("/system");
    expect(fromRoot("src/App.tsx")).not.toContain("System");
  });
});

describe("brand architecture", () => {
  /** The site may only ever give one answer to "what do you sell". Three
   *  movements is that answer; craft sits under it and must not grow into a
   *  second model on the homepage. */
  it("has exactly three movements, in order", () => {
    expect(movements.map((item) => item.slug)).toEqual(["expand", "reframe", "embed"]);
    expect(movements.map((item) => item.name)).toEqual(["Expand", "Reframe", "Embed"]);
    movements.forEach((item) => {
      expect(item.question.length).toBeGreaterThan(0);
      expect(item.list.length).toBeGreaterThan(2);
    });
  });

  it("keeps Story · Direction · Expression as craft, not as a second model", () => {
    expect(craft.map((item) => item.name)).toEqual(["Story", "Direction", "Expression"]);
    // The retired five-step method must not come back anywhere public.
    const surfaces = ["src/pages/Index.tsx", "src/pages/Practice.tsx", "src/data/practice.ts"].map(fromRoot).join("\n");
    expect(surfaces).not.toContain("The ORIONS method");
    expect(surfaces).not.toMatch(/Discover.{0,40}Connect.{0,40}Shape/s);
  });

  it("routes every engagement into a movement, and keeps Brand Foundation outside", () => {
    const slugs = new Set(movements.map((item) => item.slug));
    engagements.forEach((item) => expect(slugs).toContain(item.movement));
    expect(new Set(engagements.map((item) => item.slug)).size).toBe(engagements.length);
    expect(foundation.movement).toBeNull();
    expect(engagements.map((item) => item.slug)).not.toContain(foundation.slug);
  });

  /** Acts and movements were two names for one grouping. The acts are gone;
   *  this fails if they come back and start competing again. */
  it("labels a case by its movement only, never by an act", () => {
    const data = fromRoot("src/data/caseStudies.ts");
    expect(data).not.toMatch(/^\s+act(Title)?:/m);
    expect(fromRoot("src/pages/CaseStudy.tsx")).not.toMatch(/cs\.act/);
    movements.forEach((m) => expect(m.record.length).toBeGreaterThan(0));
  });

  /** The model has to describe work we actually did, or it is a claim. If a
   *  movement ever empties out, either the model or the record is wrong. */
  it("backs every movement with at least one case study", () => {
    movements.forEach((m) => {
      expect(caseStudies.filter((cs) => cs.movement === m.slug).length).toBeGreaterThan(0);
    });
    const slugs = new Set(movements.map((item) => item.slug));
    caseStudies.forEach((cs) => expect(slugs).toContain(cs.movement));
  });

  /** The site keeps re-growing duplicate section heads — the same statement
   *  landing on the homepage and on /practice. Each public heading belongs to
   *  exactly one page. */
  it("does not repeat a section heading across pages", () => {
    const pages = ["src/pages/Index.tsx", "src/pages/Practice.tsx", "src/pages/Thinking.tsx", "src/pages/About.tsx"];
    const seen = new Map<string, string>();
    pages.forEach((page) => {
      const heads = Array.from(fromRoot(page).matchAll(/<h2[^>]*>([^<{]+)<\/h2>/g), (m) => m[1].trim());
      heads.forEach((head) => {
        const owner = seen.get(head);
        expect(owner, `"${head}" appears on both ${owner} and ${page}`).toBeUndefined();
        seen.set(head, page);
      });
    });
    // The bridge line and its /practice counterpart must stay distinct too.
    expect(movementBridge.line).not.toBe(movementBridge.reason);
  });

  it("uses the same primary positioning across the main public surfaces", () => {
    expect(fromRoot("src/pages/Index.tsx")).toContain("Stories,");
    expect(fromRoot("index.html")).toContain("Stories, refined.");
    expect(fromRoot("public/llms.txt")).toContain("Stories, refined.");
    const primary = ["src/pages/Index.tsx", "src/pages/Practice.tsx", "src/pages/About.tsx", "src/pages/Contact.tsx", "index.html", "public/llms.txt"].map(fromRoot).join("\n");
    expect(primary).not.toMatch(/Where aesthetic meets algorithm|every engagement starts at stage 01|ทุกงานเริ่มที่การวินิจฉัย/);
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
    const work = fromRoot("src/pages/Work.tsx");
    expect(work).not.toMatch(/Math\.random|shuffle\(/);
  });
});
