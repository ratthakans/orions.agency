import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { blogPosts, currentNotes } from "@/data/blog";
import { caseStudies } from "@/data/caseStudies";
import { innovations } from "@/data/system";
import { capabilities, engagements, method } from "@/data/practice";

const fromRoot = (path: string) => readFileSync(resolve(process.cwd(), path), "utf8");
const sitemapUrls = new Set(Array.from(fromRoot("public/sitemap.xml").matchAll(/<loc>([^<]+)<\/loc>/g), (match) => match[1]));

describe("public routes", () => {
  it("keeps every published page and case reachable", () => {
    ["/", "/about", "/practice", "/work", "/system", "/thinking", "/blog", "/contact", "/privacy"].forEach((path) => {
      expect(sitemapUrls).toContain(`https://orions.agency${path}`);
    });
    currentNotes.forEach((post) => expect(sitemapUrls).toContain(`https://orions.agency/blog/${post.slug}`));
    blogPosts.filter((post) => !currentNotes.includes(post)).forEach((post) => expect(sitemapUrls).not.toContain(`https://orions.agency/blog/${post.slug}`));
    caseStudies.forEach((item) => expect(sitemapUrls).toContain(`https://orions.agency/work/${item.slug}`));
    innovations.forEach((item) => expect(sitemapUrls).toContain(`https://orions.agency/system/${item.slug}`));
  });
});

describe("brand architecture", () => {
  it("has three capabilities, five method steps, and six client entry points", () => {
    expect(capabilities.map((item) => item.name)).toEqual(["Story", "Direction", "Expression"]);
    expect(method.map((item) => item.name)).toEqual(["Discover", "Connect", "Shape", "Refine", "Express"]);
    expect(engagements).toHaveLength(6);
    expect(new Set(engagements.map((item) => item.slug)).size).toBe(6);
  });

  it("uses the same primary positioning across the main public surfaces", () => {
    expect(fromRoot("src/pages/Index.tsx")).toContain("Stories, refined.");
    expect(fromRoot("index.html")).toContain("Stories, refined.");
    expect(fromRoot("public/llms.txt")).toContain("Stories, refined.");
    const primary = ["src/pages/Index.tsx", "src/pages/Practice.tsx", "src/pages/About.tsx", "src/pages/Contact.tsx", "index.html", "public/llms.txt"].map(fromRoot).join("\n");
    expect(primary).not.toMatch(/Where aesthetic meets algorithm|every engagement starts at stage 01|ทุกงานเริ่มที่การวินิจฉัย/);
  });

  it("shows client work first on the Work page", () => {
    const work = fromRoot("src/pages/Work.tsx");
    expect(work.indexOf("{/* 02 · CATEGORY BOARDS */}")).toBeLessThan(work.indexOf("{/* 03 · STUDIO SHOWREEL"));
    expect(work).toContain("cs.verdictShort");
  });
});
