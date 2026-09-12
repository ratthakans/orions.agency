import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { blogPosts } from "@/data/blog";
import { caseStudies } from "@/data/caseStudies";

const fromRoot = (path: string) => readFileSync(resolve(process.cwd(), path), "utf8");
const sitemap = fromRoot("public/sitemap.xml");
const sitemapUrls = new Set(Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g), (match) => match[1]));

describe("search index contract", () => {
  it("lists every public route, article and case study", () => {
    ["/", "/about", "/practice", "/work", "/thinking", "/blog", "/contact", "/privacy"].forEach((path) => {
      expect(sitemapUrls).toContain(`https://orions.agency${path}`);
    });
    blogPosts.forEach((post) => expect(sitemapUrls).toContain(`https://orions.agency/blog/${post.slug}`));
    caseStudies.forEach((item) => expect(sitemapUrls).toContain(`https://orions.agency/work/${item.slug}`));
  });

  // The site presents ØRIONS as a creative agency and shows client work only.
  // The product line (VÆST · First Draft · Routte) was retired from it in the
  // monochrome rebrand; this keeps it from drifting back through the sitemap.
  it("does not advertise the retired product pages", () => {
    sitemapUrls.forEach((url) => expect(url).not.toMatch(/orions\.agency\/system/));
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
    "src/pages/About.tsx",
    "src/pages/Work.tsx",
    "src/data/blog.ts",
    "src/data/portfolio.ts",
    "src/data/caseStudies.ts",
    "src/data/capabilities.ts",
    "src/pages/Practice.tsx",
    "src/pages/Contact.tsx",
    "public/llms.txt",
    "index.html",
  ].map(fromRoot).join("\n");

  it("does not present the retired products as part of the offer", () => {
    expect(publicCopy).not.toMatch(/First Draft|Routte|VÆST/);
  });

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

  // The brand book reinstated "boutique" ("Boutique by design", "Boutique
  // Creative Company"), which retired the old guard against it. Its Verbal
  // Identity section names the clichés ØRIONS must never use instead — keep
  // them out of every public surface.
  it("does not use the advertising clichés the verbal identity bans", () => {
    expect(publicCopy).not.toMatch(/Revolutionary|Game-changing|One-stop solution/i);
    expect(publicCopy).not.toMatch(/ครบวงจร|ยกระดับธุรกิจของคุณ|ปลดล็อกศักยภาพ|เหนือระดับ|ตอบโจทย์ทุกความต้องการ/);
  });

  // The primary line is "Stories, refined." and the offer is Story → Direction →
  // Expression. The earlier tagline and the diagnosis model (a single "door",
  // a fixed-price diagnostic) were retired with it; keep both from drifting back.
  it("does not reintroduce the retired tagline or diagnosis model", () => {
    expect(publicCopy).not.toMatch(/aesthetic meets algorithm/i);
    expect(publicCopy).not.toMatch(/ประตูเดียว|The Diagnostic/);
  });

  // The site used to answer "what do you sell" several different ways. The
  // three disciplines in src/data/capabilities.ts are now the single answer —
  // keep older parallel offer lists from reappearing beside them.
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

  // The practice was once modelled on an iceberg (Waterline / Sounding / Mass /
  // Roll at −40m…−900m). It was retired because it read as muddled: a borrowed
  // diagram, fighting the brand's own name (ØRIONS is a constellation — sky,
  // not sea), and it made a client learn four invented words plus a depth scale
  // before they could tell what we sell. The ladder is plain now; keep it that
  // way — this guard is the reason the model can't drift back into jargon.
  it("does not reintroduce the retired iceberg model", () => {
    const practiceSurfaces = [
      "src/data/capabilities.ts",
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

  // Water-as-suffocation imagery once sat beside copy that used depth as value,
  // and the same image meaning opposite things made the narrative incoherent.
  // The constellation is the principle now; keep the old imagery out.
  it("does not use depth/water as a symbol of suffocation", () => {
    const narrative = ["src/pages/Index.tsx", "src/pages/Thinking.tsx"].map(fromRoot).join("\n");
    expect(narrative).not.toMatch(/ใต้น้ำที่กำลังเดือด/);
    expect(narrative).not.toMatch(/จมอยู่ในมัน/);
  });

  // Our own products must live on real domains. Client work in the portfolio
  // may still sit on a vercel.app host until the client wires their domain —
  // that reflects reality and is allowed.
  it("does not present our own products on temporary deployment domains", () => {
    const productCopy = ["public/llms.txt", "index.html"].map(fromRoot).join("\n");
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
