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
    ["/", "/about", "/practice", "/work", "/system", "/thinking", "/blog", "/contact", "/privacy"].forEach((path) => {
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
    "src/pages/Work.tsx",
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
  // comparison. Use "independent" or no modifier instead. Check both the
  // English word and its Thai transliteration (บูทีค) — a prior pass caught
  // only the English form and missed four live occurrences of the Thai one.
  it("does not use the retired word 'boutique' (or its Thai transliteration)", () => {
    expect(publicCopy).not.toMatch(/boutique/i);
    expect(publicCopy).not.toMatch(/บูทีค/);
  });

  // The site used to answer "what do you sell" four different ways (Home,
  // About, Thinking and Contact each carried their own trio, and none matched).
  // The four depths in src/data/practice.ts are now the single answer — keep
  // the old discipline trio from reappearing as a parallel offer list.
  it("keeps one answer to 'what do you sell'", () => {
    const offerSurfaces = [
      "src/pages/Index.tsx",
      "src/pages/About.tsx",
      "src/pages/Thinking.tsx",
      "src/pages/Contact.tsx",
    ].map(fromRoot).join("\n");
    expect(offerSurfaces).not.toMatch(/Communication Design/i);
    expect(offerSurfaces).not.toMatch(/Aesthetic Intelligence/i);
  });

  // The practice has one door: every engagement starts at the diagnostic.
  // A "we also take small production jobs" caveat used to sit at the end of
  // Thinking's "Limited by design" section, which told a reader the gate was
  // negotiable and undercut the section it lived in. Keep it from returning.
  it("does not offer a way around the diagnostic gate", () => {
    const gateSurfaces = [
      "src/pages/Index.tsx",
      "src/pages/Thinking.tsx",
      "src/pages/About.tsx",
      "src/pages/Practice.tsx",
      "src/data/practice.ts",
    ].map(fromRoot).join("\n");
    expect(gateSurfaces).not.toMatch(/สเกลย่อย/);
    expect(gateSurfaces).not.toMatch(/ยังเปิดรับงาน/);
  });

  // The practice was once modelled on an iceberg (Waterline / Sounding / Mass /
  // Roll at −40m…−900m). It was retired because it read as muddled: a borrowed
  // diagram, fighting the brand's own name (ØRIONS is a constellation — sky,
  // not sea), and it made a client learn four invented words plus a depth scale
  // before they could tell what we sell. The ladder is plain now; keep it that
  // way — this guard is the reason the model can't drift back into jargon.
  it("does not reintroduce the retired iceberg model", () => {
    const practiceSurfaces = [
      "src/data/practice.ts",
      "src/pages/Practice.tsx",
      "src/pages/Index.tsx",
      "src/pages/Contact.tsx",
      "src/pages/About.tsx",
      "src/pages/Thinking.tsx",
      "public/llms.txt",
    ].map(fromRoot).join("\n");
    // Depth-scale markers like −40m / −900m
    expect(practiceSurfaces).not.toMatch(/−\s?\d{2,3}m\b/);
    expect(practiceSurfaces).not.toMatch(/ภูเขาน้ำแข็ง/);
    expect(practiceSurfaces).not.toMatch(/แกะยอด|จัดมวล|หยั่งความลึก/);
    // The invented stage names, as standalone words
    expect(practiceSurfaces).not.toMatch(/\bWaterline\b/i);
    expect(practiceSurfaces).not.toMatch(/\bSounding\b/i);
  });

  // Cases describe what was done, not what it earned — so the site must not
  // claim "proof". Restore this language only alongside real outcome data.
  it("does not claim proof it cannot show", () => {
    expect(publicCopy).not.toMatch(/selected proof/i);
    expect(publicCopy).not.toMatch(/พิสูจน์ด้วยงาน/);
  });

  // Depth is the site's master metaphor and it means value ("the 90% no one
  // sees"). Water as suffocation inverts it — the same image meaning opposite
  // things in two places is what made the copy read as incoherent.
  it("does not use depth/water as a symbol of suffocation", () => {
    const narrative = ["src/pages/Index.tsx", "src/pages/Thinking.tsx"].map(fromRoot).join("\n");
    expect(narrative).not.toMatch(/ใต้น้ำที่กำลังเดือด/);
    expect(narrative).not.toMatch(/จมอยู่ในมัน/);
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
