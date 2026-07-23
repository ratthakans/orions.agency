import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { blogPosts } from "@/data/blog";
import { caseStudies } from "@/data/caseStudies";
import { innovations } from "@/data/system";

const fromRoot = (path: string) => readFileSync(resolve(process.cwd(), path), "utf8");
const sitemap = fromRoot("public/sitemap.xml");
const sitemapUrls = new Set(Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g), (match) => match[1]));

describe("search index contract", () => {
  it("lists every public route, article and case study", () => {
    ["/", "/about", "/work", "/system", "/thinking", "/blog", "/contact", "/privacy"].forEach((path) => {
      expect(sitemapUrls).toContain(`https://orions.agency${path}`);
    });
    blogPosts.forEach((post) => expect(sitemapUrls).toContain(`https://orions.agency/blog/${post.slug}`));
    caseStudies.forEach((item) => expect(sitemapUrls).toContain(`https://orions.agency/work/${item.slug}`));
    innovations.forEach((it) => expect(sitemapUrls).toContain(`https://orions.agency/system/${it.slug}`));
  });

  it("does not advertise retired article URLs", () => {
    expect(sitemapUrls).not.toContain("https://orions.agency/blog/emotion-economy");
    expect(sitemapUrls).not.toContain("https://orions.agency/blog/emotion-translator-not-content-factory");
  });
});

describe("public credibility contract", () => {
  const publicCopy = [
    "src/pages/Index.tsx",
    "src/pages/Thinking.tsx",
    "src/pages/System.tsx",
    "src/pages/SystemDetail.tsx",
    "src/pages/About.tsx",
    "src/data/system.ts",
    "src/data/blog.ts",
    "src/data/portfolio.ts",
    "src/data/caseStudies.ts",
    "public/llms.txt",
    "index.html",
  ].map(fromRoot).join("\n");

  it("does not publish unsupported headline statistics or provider branding", () => {
    expect(publicCopy).not.toMatch(/4\.6(?:×|\s*เท่า)/i);
    expect(publicCopy).not.toMatch(/1\.7(?:s|\s*วินาที)/i);
    expect(publicCopy).not.toMatch(/Gemini/i);
  });

  // COLLAPS and GODGEARS were cut from the live product lineup (COLLAPS folded
  // back out, GODGEARS never shipped) — keep them out of public copy so they
  // don't silently reappear in a future edit.
  it("does not advertise retired products", () => {
    expect(publicCopy).not.toMatch(/COLLAPS|GODGEARS|SONAR SQUAD/);
  });

  // "Boutique" was retired from public language (MASTER BLUEPRINT V5 §32) — it
  // places ORIONS in the mid-tier of the Bangkok market map that ends in price
  // comparison. Use "independent" or no modifier instead.
  it("does not use the retired word 'boutique'", () => {
    expect(publicCopy).not.toMatch(/boutique/i);
  });

  // Our own products must live on real domains. Client work in the portfolio
  // may still sit on a vercel.app host until the client wires their domain —
  // that reflects reality and is allowed.
  it("does not present our own products on temporary deployment domains", () => {
    const productCopy = ["src/data/system.ts", "public/llms.txt", "index.html"].map(fromRoot).join("\n");
    expect(productCopy).not.toMatch(/vercel\.app/i);
  });
});

describe("SSR stability contract", () => {
  const workSource = fromRoot("src/pages/Work.tsx");

  it("keeps the initial portfolio order deterministic", () => {
    expect(workSource).not.toMatch(/Math\.random/);
    expect(workSource).toContain('useState<string>("cases")');
  });
});
