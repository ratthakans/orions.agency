import Reveal from "@/components/Reveal";
import ClosingCTA from "@/components/ClosingCTA";
import SEO from "@/components/SEO";
import PageMark from "@/components/PageMark";

const SITE_URL = "https://orions.agency";

const principles = [
  { n: "01", en: "Strategy before pretty.",   th: "เริ่มจาก funnel · audience · KPI ก่อน — งานสวยมาทีหลัง วัดผลทุกชิ้นที่ปล่อย" },
  { n: "02", en: "We measure what we make.",  th: "รายงาน ROAS · CAC · retention ทุกเดือน ไม่ใช่แค่ likes กับ reach" },
  { n: "03", en: "One team, no handoff.",     th: "ทีมเดียวตั้งแต่กลยุทธ์ ถ่ายทำ ตัดต่อ ถึงยิงแอด — ไม่มีส่งต่อ vendor" },
  { n: "04", en: "Built for boutique.",       th: "รับลูกค้าจำกัดต่อไตรมาส — ทำงานกับแบรนด์ที่แคร์เรื่องคุณภาพและการเติบโต" },
];

const About = () => (
  <div>
    <SEO
      title="About — ØRIONS"
      description="A boutique creative agency in Bangkok. In-house branding, content, and paid ads for F&B, fashion, and hospitality brands."
      path="/about"
      schema={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
        ],
      }}
    />

    {/* 01 · HERO */}
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto pt-32 md:pt-40 pb-20 md:pb-28">
        <PageMark index="01" total="02" />
        <Reveal>
          <h1 className="font-serif text-[52px] md:text-[88px] lg:text-[112px] leading-[1.0] tracking-[-0.03em] max-w-[16ch]">
            A boutique creative <em className="text-gemini italic">agency.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-10 font-serif italic text-[18px] md:text-[22px] text-muted-foreground max-w-[640px] leading-[1.5]">
            In-house in Bangkok. Brand, content, and paid media — engineered to grow F&amp;B, fashion, and hospitality brands.
          </p>
        </Reveal>
      </div>
    </section>

    {/* 02 · MANIFESTO */}
    <section className="px-6 md:px-10 border-t border-foreground">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <PageMark index="02" total="02" />

        {/* Big quote */}
        <Reveal>
          <span className="font-serif italic text-orion text-[64px] md:text-[88px] leading-none block -mb-4 md:-mb-6">“</span>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-serif text-[40px] md:text-[64px] lg:text-[80px] leading-[1.05] tracking-[-0.03em]">
            From idea to <em className="text-gemini italic">final cut</em> —
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-2 md:mt-4 font-serif text-[40px] md:text-[64px] lg:text-[80px] leading-[1.05] tracking-[-0.03em]">
            one team, <em className="text-gemini italic">no handoff.</em>
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 pt-6 border-t border-dashed border-FGTOKEN30 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
            — THE ORIONS PHILOSOPHY
          </div>
        </Reveal>

        {/* Sub paragraph */}
        <Reveal delay={0.35}>
          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">— WHO WE ARE</p>
              <h3 className="mt-6 font-serif italic text-[28px] md:text-[36px] leading-[1.15] tracking-[-0.02em]">
                A small studio for brands that care.
              </h3>
            </div>
            <div className="md:col-span-7 font-thai text-[15px] md:text-[16px] leading-[1.8] text-background/80 space-y-5">
              <p>
                ØRIONS คือ creative agency เล็กๆ ในกรุงเทพ — ครอบคลุม strategy, branding, content production และ paid media ครบในทีมเดียว ไม่ส่งต่อ vendor หลายเจ้า
              </p>
              <p>
                เป้าหมายของเราไม่ใช่แค่ทำงานสวย — แต่คือทำให้แบรนด์โต วัดผลได้ทุกบาท ทุกชิ้นที่ปล่อยออกไปมี KPI กำกับ
              </p>
              <p className="text-FGTOKEN60">
                เลือกทำกับแบรนด์ใน F&amp;B, fashion และ hospitality ที่แคร์เรื่องคุณภาพและการเติบโต — รับลูกค้าจำกัดต่อไตรมาสเพื่อให้แต่ละงานได้เวลาเต็มที่
              </p>
            </div>
          </div>
        </Reveal>

        {/* Principles grid */}
        <div className="mt-20 md:mt-28 border-t border-foreground grid grid-cols-1 md:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.06}>
              <div className={`py-10 md:py-14 md:px-10 ${i > 0 ? "border-t border-foreground" : ""} ${i === 1 ? "md:border-t-0 md:border-l" : ""} ${i === 2 ? "md:border-l-0" : ""} ${i === 3 ? "md:border-l" : ""}`}>
                <div className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">— {p.n}</div>
                <h3 className="mt-6 font-serif italic text-[28px] md:text-[40px] leading-[1.1] tracking-[-0.02em]">
                  {p.en}
                </h3>
                <p className="mt-4 font-thai text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground max-w-[40ch]">
                  {p.th}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <ClosingCTA
      title={<>Tell us about <em className="text-gemini italic">the brand.</em></>}
      description="30-min discovery call. Free. We reply within 24 hours."
      ctas={[
        { label: "Get a free proposal", to: "/contact" },
        { label: "See services & pricing", to: "/services", variant: "ghost" },
      ]}
    />
  </div>
);

export default About;