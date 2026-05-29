import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";

const packages = [
  {
    tier: "i. Starter",
    name: ["Starter"],
    tagline: "For brands taking their first refined steps.",
    price: "฿35,000",
    sub: "/ เดือน · สัญญา 1 เดือน · ไม่ผูกมัด",
    annual: "Annual ฿350,000 · save 17%",
    features: [
      "1 Content Loop ครบวงจร — 6 Reels / 3 Static / 1 Horizontal",
      "Stories 6 + Photos 6 ครั้ง/เดือน",
      "Monthly Audience Insight Snapshot",
      "Competitor Analysis 3 brands",
      "1 Production Day · ทีมถ่ายทำ 2 คน + อุปกรณ์ระดับโปร",
      "1 แพลตฟอร์ม + Cross-post",
      "Free Onboarding + Brand Audit",
    ],
    deliverables: "Reels 6 · Static 3 · Hero 1 · Stories 6 · Photos 6",
    production: "1 production day · 2-person crew · pro mirrorless camera + lighting",
    strategy:   "Monthly Insight Snapshot · 3 competitors tracked",
    reporting:  "Monthly performance report · 1 platform + cross-post",
    bestFor:    "Brands launching their refined voice (0–10k followers)",
    cta: "Get Started",
    featured: false,
  },
  {
    tier: "ii. Pro · Featured Package",
    name: ["Pro"],
    tagline: "For brands ready to cut through the noise.",
    price: "฿69,000",
    sub: "/ เดือน · สัญญาขั้นต่ำ 3 เดือน",
    annual: "Annual ฿690,000 · save 17%",
    features: [
      "12 Reels · 6 Static · 2 Hero Video · 12 Photos",
      "Stories 12 ครั้ง/เดือน",
      "+ Quarterly Signature Campaign",
      "+ Quarterly Audience Lifecycle Map",
      "Persona Mapping + A/B Testing",
      "2 Production Days · ทีมถ่ายทำ 3 คน + pro lighting",
      "Ads Management ฟรี ≤ ฿50k",
      "2 แพลตฟอร์ม + Monthly Report + QSR",
    ],
    deliverables: "Reels 12 · Static 6 · Hero 2 · Stories 12 · Photos 12",
    production: "2 production days · 3-person crew · pro camera + cinematic lighting",
    strategy:   "Persona Mapping · A/B Testing · Quarterly Lifecycle Map",
    reporting:  "Monthly report + QSR · 2 platforms · Ads mgmt ≤ ฿50k included",
    bestFor:    "Growing brands cutting through the noise (10–100k followers)",
    cta: "Start with Pro",
    featured: true,
  },
  {
    tier: "iii. Elite",
    name: ["Elite"],
    tagline: "For brands becoming a name remembered.",
    price: "฿139,000",
    sub: "/ เดือน · สัญญาขั้นต่ำ 6 เดือน",
    annual: "Annual ฿1,390,000 · save 17%",
    features: [
      "24 Reels · 12 Static · 3 Signature Stories",
      "Stories 16/mo · 24 Photos",
      "3 Production Days · full crew + cinematic rig",
      "+ Quarterly Creative Lab (4hr workshop)",
      "+ Annual Audience Lifecycle Strategy",
      "+ Brand Manual (มูลค่า ฿30k · ฟรี)",
      "+ Brand Film 1 ครั้ง/6 เดือน (฿80k · ฟรี)",
      "Custom Dashboard + Dedicated AM",
      "Industry Exclusivity",
    ],
    deliverables: "Reels 24 · Static 12 · Signature 3 · Stories 16 · Photos 24",
    production: "3 production days · full crew + cinematic rig · Brand Film every 6 months",
    strategy:   "Quarterly Creative Lab · Annual Lifecycle Strategy · Brand Manual",
    reporting:  "Custom Dashboard · Dedicated AM · Industry Exclusivity",
    bestFor:    "Established brands building lasting legacy (100k+ followers)",
    cta: "Talk to Us",
    featured: false,
  },
];

const compareRows = [
  { label: "Loops / month",   starter: "1",       pro: "2 + Campaign", elite: "3 + Lab" },
  { label: "Production Days", starter: "1",       pro: "2",            elite: "3" },
  { label: "Team Size",       starter: "2 crew",  pro: "3 crew",       elite: "Full crew" },
  { label: "Strategy Layer",  starter: "Insight", pro: "Persona + A/B", elite: "Lifecycle + Lab" },
  { label: "Platforms",       starter: "1",       pro: "2",            elite: "Custom" },
];

const addOnCategories = [
  {
    label: "Branding",
    items: [
      { name: "Brand Identity Package", italic: false, desc: "ชุดอัตลักษณ์แบรนด์ครบ — โลโก้ สี ฟอนต์ และคู่มือการใช้งาน · เหมาะกับแบรนด์เปิดใหม่หรือรีแบรนด์", price: "From ฿80,000" },
      { name: "Signature Campaign Concept", italic: true,  desc: "ไอเดียแคมเปญใหญ่ 1 เรื่อง พร้อม creative direction และแผนปล่อยตาม 6:3:1 · สำหรับการเปิดตัวสินค้า/ซีซัน", price: "From ฿35,000" },
      { name: "Brand Deep Dive Session", italic: false, desc: "เวิร์กช็อปครึ่งวันเจาะเรื่องเดียวที่แบรนด์ติดอยู่ พร้อม summary deck · เหมาะกับทีมที่ต้องการเคลียร์ทิศทาง", price: "฿20,000" },
    ],
  },
  {
    label: "Social Media",
    items: [
      { name: "Community Management Plus", italic: false, desc: "ดูแลคอมเมนต์และ DM ขยายเวลา 8:00–23:00 พร้อมตอบเชิงรุก · สำหรับแบรนด์ที่ engagement สูง", price: "฿8,000 / mo" },
      { name: "Influencer / KOL Management", italic: true,  desc: "คัด brief และบริหารแคมเปญกับ KOL ตั้งแต่ต้นจนรายงานผล · สำหรับแคมเปญที่ต้องการ reach เพิ่ม", price: "10% · min ฿10,000" },
      { name: "Paid Ads Audit & Analyze", italic: false, desc: "รีวิวประสิทธิภาพแอด พร้อมคำแนะนำปรับให้คุ้มงบขึ้น · เหมาะกับแบรนด์ที่ยิงแอดอยู่แล้วแต่ยังไม่แน่ใจผล", price: "฿15,000" },
    ],
  },
  {
    label: "Creative Production",
    items: [
      { name: "Brand Film (3–5 min)", italic: true,  desc: "หนังสั้นเล่าเรื่องแบรนด์ 3–5 นาที พร้อมผู้กำกับและทีมครบชุด · สำหรับใช้เปิดตัวหรือเล่าจุดยืน", price: "From ฿80,000" },
      { name: "Commercial Video Production", italic: false, desc: "วิดีโอโฆษณามีสคริปต์ นักแสดง และทีมโปรดักชันครบ · สำหรับแคมเปญหรือเปิดตัวสินค้า", price: "From ฿50,000" },
      { name: "Professional Photoshoot", italic: false, desc: "ถ่ายภาพ 1 วัน พร้อมรีทัช 20–40 ภาพ · สำหรับคอนเทนต์รายเดือนหรือแคตตาล็อกสินค้า", price: "฿15,000 / day" },
    ],
  },
];

const masterBlueprint = [
  { n: "Ø1", name: "Creative Agency",     tag: "[ Cashflow Driver ]",       desc: "บริการเชิงพาณิชย์ ตอบโจทย์การตลาดและยอดขาย สร้างกระแสเงินสดและกำไรระยะสั้น-กลาง" },
  { n: "Ø2", name: "Creative Consulting", tag: "[ Predictable Revenue ]",   desc: "ที่ปรึกษาเชิงกลยุทธ์ระดับบน ยกระดับแบรนด์และองค์กร สัญญาระยะยาว 2–3 ปี เพื่อรายได้ฐานที่มั่นคง" },
  { n: "Ø3", name: "Creative Studio",     tag: "[ Asset & Valuation ]",     desc: "สร้างสินทรัพย์และนวัตกรรมของตัวเอง อิสระ 100% ไม่ขึ้นตรงกับลูกค้า เพื่อการเติบโตแบบก้าวกระโดด" },
];

const ecosystemRows = [
  {
    rowN: "1",
    rowTitle: "Creative Agency",
    rowTag: "Service-Based",
    units: [
      {
        code: "1.1",
        name: "Digital & Performance Agency",
        tag: "High-Velocity Growth Driver",
        desc: "ขับเคลื่อนยอดขายด้วย data-driven content วางระบบ Marketing Funnel",
        services: "Social Retainer · Content Machine · Performance Media · E-commerce Ops",
        target: "แบรนด์ E-commerce, ธุรกิจ Scale-Up",
      },
      {
        code: "1.2",
        name: "Boutique Agency",
        tag: "High Margin & Profile Creator",
        desc: "งานออกแบบและกลยุทธ์แบรนด์ที่มีรสนิยมลุ่มลึก อัตลักษณ์เฉพาะตัวสูง (High-End Craft)",
        services: "Brand Identity · Premium Packaging · Hero Brand Campaign",
        target: "แบรนด์พรีเมียม/Luxury · คลินิกความงามระดับบน · โรงแรมดีไซน์",
      },
      {
        code: "1.3",
        name: "Creative Production",
        tag: "Commercial-Grade Execution Hub",
        desc: "คลังแสงโปรดักชันส่วนกลาง นำโดยซีเนียร์ครูว์ คุมคุณภาพและต้นทุนไม่ให้รั่วไหล",
        services: "Commercial Crew · Post-Production Suite · Raw Footage System",
        target: "ทีมภายใน + รับงานตรงจากแบรนด์/เอเจนซี่ภายนอก",
      },
    ],
  },
  {
    rowN: "2",
    rowTitle: "Creative Consulting",
    rowTag: "Predictable Revenue",
    units: [
      {
        code: "2.1",
        name: "Business Creative Solution",
        tag: "Brand Transformation",
        desc: "X-ray โครงสร้างแบรนด์และโมเดลธุรกิจ ใช้ creativity พลิกโฉมและแก้ปัญหาเชิงโครงสร้าง",
        services: "Brand Audit · Strategic Rebranding · Legacy Modernization",
        target: "บริษัทมหาชน · แบรนด์ดั้งเดิมสืบทอดสู่รุ่นลูก",
      },
      {
        code: "2.2",
        name: "Strategic Creative Direction",
        tag: "Fractional CCO",
        desc: "ทำหน้าที่เสมือน CCO นอกองค์กร วางแผนแม่บทประจำปี คุมคุณภาพภาพลักษณ์",
        services: "Annual Creative Blueprint · Agency Quality Audit · C-Level Advisory",
        target: "Conglomerate · เครืออสังหา · เครือโรงพยาบาล",
      },
      {
        code: "2.3",
        name: "Creative Culture & Training",
        tag: "Organization Transition",
        desc: "พัฒนาบุคลากรและปรับเปลี่ยนวัฒนธรรมองค์กร ให้เท่าทันเทคโนโลยีครีเอทีฟยุคใหม่",
        services: "Generative AI สำหรับธุรกิจ · Design Thinking Academy · Workplace Consulting",
        target: "HR · ฝ่ายนวัตกรรมขององค์กรขนาดใหญ่",
      },
    ],
  },
  {
    rowN: "3",
    rowTitle: "Creative Studio",
    rowTag: "Asset-Based & Innovation",
    units: [
      {
        code: "3.1",
        name: "Startup & Product Ventures",
        tag: "Asset-Based Growth",
        desc: "เปลี่ยนจากผู้รับจ้างผลิตสู่ \"เจ้าของผลิตภัณฑ์\" ปั้นไอเดียธุรกิจ ซอฟต์แวร์ หรือสินค้า",
        services: "In-house Brand Incubation · Creative SaaS Development",
        target: "B2C · B2B SaaS · กลุ่มนักลงทุน (VC)",
      },
      {
        code: "3.2",
        name: "Owned Media & IP",
        tag: "The Playground",
        desc: "บริหารสถานีสื่อ ช่องทางออนไลน์ และรายการคอนเทนต์ของตัวเอง 100% ทำเงินจากสปอนเซอร์",
        services: "IP Development · Audience Monetization · Native Advertising Slots",
        target: "Audience · แบรนด์สินค้าต่างๆ",
      },
      {
        code: "3.3",
        name: "Creative Experimental Lab",
        tag: "The R&D Engine",
        desc: "ห้องวิจัยล้ำสมัย ทดลองเทคโนโลยี สื่อ และ format คอนเทนต์แปลกใหม่ (AI, VR/AR)",
        services: "Advanced AI Workflows · Virtual Experiences · Trend-Setting Format",
        target: "ทีมภายใน · แบรนด์กลุ่ม Innovation-Driven",
      },
    ],
  },
];

const standardMetrics = [
  { label: "Branded search",     value: "↑ 20–40%", note: "ความคุ้นหูคุ้นชื่อแบรนด์" },
  { label: "Engagement rate",    value: "↑ 30–50%", note: "การมีปฏิสัมพันธ์ที่แท้จริง" },
  { label: "Earned media",       value: "Tracked", note: "PR, mentions, organic share" },
  { label: "Audience composition", value: "Mapped", note: "ก่อน vs หลัง launch" },
  { label: "CPL (cost / lead)",  value: "↓ 20%",    note: "ต้นทุนต่อ lead ลดลง" },
  { label: "ROAS",               value: "↑ 20%",    note: "Return on ad spend" },
  { label: "Leads",              value: "↑ 30%",    note: "Qualified leads" },
];

const ladderPaths = [
  { code: "Ø Boutique",   start: "Brand Identity · From ฿80,000", term: "Project-based", best: "แบรนด์เปิดใหม่ · rebrand · launch" },
  { code: "Ø Digital",    start: "Retainer · From ฿69,000/mo",     term: "3–12 months",   best: "ต้องการสเกลยอดและวัดผล" },
  { code: "Ø Production", start: "Production Day · From ฿50,000",  term: "Per project",   best: "ต้องการคอนเทนต์โปรดักชันคุณภาพ" },
  { code: "Ø Consulting", start: "Fractional CCO · From ฿180,000/mo", term: "12–36 months", best: "องค์กรใหญ่ที่ต้องการ creative leadership" },
];

const Services = () => (
  <div>
    <SEO
      title="Services & Packages — ØRIONS"
      description="3 tiers. 1 goal. Refined content packages designed around our 6:3:1 system."
      path="/services"
    />

    {/* HERO */}
    <section className="px-6 md:px-10 pt-32 md:pt-40 pb-16 md:pb-20">
      <div className="max-w-[1280px] mx-auto">
        <SectionLabel index="01" label="The Ecosystem" />
        <Reveal delay={0.1}>
          <h1 className="mt-10 font-serif h-display-xl max-w-[16ch]">
            ØRIONS.co — <em className="italic text-cinnabar">The Creative Company.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 font-serif italic text-[15px] md:text-[18px] text-muted-foreground">
            Three axes. One company. Cashflow · Predictable Revenue · Asset & Valuation.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-[720px] font-thai text-[16px] md:text-[18px] leading-[1.7] text-muted-foreground">
            พิมพ์เขียวโครงสร้างธุรกิจแบ่งเป็น 3 แกนหลัก สมดุลระหว่างกระแสเงินสดระยะสั้น เสถียรภาพระยะยาว และการเติบโตด้วยนวัตกรรม.
          </p>
        </Reveal>

        {/* Master Blueprint — 3 axes */}
        <Reveal delay={0.3}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border border-foreground/20">
            {masterBlueprint.map((m, i) => (
              <div
                key={m.n}
                className={`p-10 md:p-12 h-full bg-background ${i > 0 ? "border-t md:border-t-0 md:border-l border-foreground/20" : ""}`}
              >
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">{m.tag}</div>
                <div className="mt-6 font-serif italic text-cinnabar text-[28px] md:text-[34px] leading-none">{m.n}</div>
                <h3 className="mt-4 font-serif text-[26px] md:text-[30px] leading-[1.1] tracking-[-0.02em]">{m.name}</h3>
                <p className="mt-5 font-thai text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">{m.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    {/* ECOSYSTEM DEEP DIVE — 9 units */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <SectionLabel index="02" label="Ecosystem Deep Dive" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-md max-w-[24ch]">
            โครงสร้างและรายละเอียดหน้าที่ <em className="italic text-cinnabar">แต่ละยูนิตงาน.</em>
          </h2>
        </Reveal>

        <div className="mt-16 space-y-20 md:space-y-24">
          {ecosystemRows.map((row, ri) => (
            <div key={row.rowN}>
              <Reveal>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar flex items-center gap-3 mb-6">
                  <span className="block w-6 h-px bg-cinnabar" />
                  {row.rowN} — {row.rowTitle} <span className="text-muted-foreground">· {row.rowTag}</span>
                </div>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-3 border border-foreground/20">
                {row.units.map((u, i) => (
                  <Reveal key={u.code} delay={i * 0.06}>
                    <div className={`p-8 md:p-10 h-full bg-background flex flex-col ${i > 0 ? "border-t md:border-t-0 md:border-l border-foreground/20" : ""}`}>
                      <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">{u.code}</div>
                      <h3 className="mt-4 font-serif text-[22px] md:text-[26px] leading-[1.15] tracking-[-0.015em]">{u.name}</h3>
                      <div className="mt-3 font-serif italic text-cinnabar text-[14px] md:text-[15px]">[ {u.tag} ]</div>
                      <p className="mt-5 font-thai text-[13px] md:text-[14px] leading-[1.7] text-foreground/85">{u.desc}</p>
                      <div className="mt-6 pt-6 border-t border-foreground/15 space-y-4 text-[12px]">
                        <div>
                          <div className="font-mono tracking-[0.22em] uppercase text-cinnabar text-[10px]">— Services</div>
                          <p className="mt-2 font-thai leading-[1.6] text-foreground/75">{u.services}</p>
                        </div>
                        <div>
                          <div className="font-mono tracking-[0.22em] uppercase text-cinnabar text-[10px]">— Target</div>
                          <p className="mt-2 font-thai leading-[1.6] text-foreground/75">{u.target}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* THE STANDARD — Proof Metrics */}
    <section className="px-6 md:px-10 border-t border-foreground/15 bg-surface">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <SectionLabel index="03" label="The Standard" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-md max-w-[22ch]">
            ผลลัพธ์ที่วัดได้ · <em className="italic text-cinnabar">ภายใน 90 วัน.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-[680px] font-serif italic text-[16px] md:text-[20px] leading-[1.5] text-muted-foreground">
            Craft ที่ honest คือ craft ที่เทียบกับ baseline ก่อนเริ่ม แล้ว track หลัง launch.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-px bg-foreground/15 border border-foreground/15">
          <div className="bg-background p-8 md:p-12">
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar mb-8">— Data Table</div>
            <div className="border-t border-foreground/15">
              {standardMetrics.map((m) => (
                <div key={m.label} className="grid grid-cols-[1fr_auto] md:grid-cols-[1.4fr_auto_1.4fr] gap-4 md:gap-8 items-baseline py-5 border-b border-foreground/15">
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-foreground/75">{m.label}</div>
                  <div className="font-serif italic text-cinnabar text-[22px] md:text-[28px] tabular-nums">{m.value}</div>
                  <div className="hidden md:block font-thai text-[13px] text-muted-foreground">{m.note}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-background p-8 md:p-12 flex flex-col justify-center">
            <div className="border-l-2 border-cinnabar pl-6">
              <p className="font-serif italic text-[20px] md:text-[26px] leading-[1.4] tracking-[-0.01em]">
                ไม่ถึงเป้าที่ตกลงร่วมกัน → เราเปิด <em className="text-cinnabar">adjustment chapter</em> เพื่อแก้ต่ออย่างมีระบบ ไม่ทิ้งงานไว้เป็นไฟล์สวย ๆ ที่ไม่มีใครใช้.
              </p>
              <p className="mt-6 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                — เราเดิมพันที่ความสัมพันธ์ระยะยาว
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* THE LADDER — Engagement paths */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <SectionLabel index="04" label="The Ladder" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-md max-w-[22ch]">
            เลือก <em className="italic text-cinnabar">บท</em> ของคุณ.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-[680px] font-thai text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground">
            4 เส้นทางหลัก — เลือกเริ่มจากจุดที่ใช่กับสถานะแบรนด์คุณตอนนี้ และต่อยอดเป็น ecosystem ได้เมื่อพร้อม.
          </p>
        </Reveal>

        <div className="mt-16 border-t border-foreground/20">
          {ladderPaths.map((p, i) => (
            <Reveal key={p.code} delay={i * 0.05}>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr_0.8fr_1.4fr] gap-3 md:gap-10 items-baseline py-7 md:py-8 border-b border-foreground/20">
                <h3 className="font-serif italic text-cinnabar text-[22px] md:text-[26px] tracking-[-0.015em]">{p.code}</h3>
                <div className="font-serif text-[16px] md:text-[18px] tracking-[-0.005em]">{p.start}</div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">{p.term}</div>
                <p className="font-thai text-[14px] md:text-[15px] leading-[1.65] text-foreground/80">{p.best}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 05 — PACKAGES (retainer tiers) */}
    <section className="px-6 md:px-10 border-t border-foreground/15 pt-20 md:pt-28">
      <div className="max-w-[1280px] mx-auto">
        <SectionLabel index="05" label="Retainer Packages" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-md max-w-[18ch]">
            3 ระดับ. 1 <em className="italic text-cinnabar">เป้าหมาย.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-[680px] font-thai text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground">
            สำหรับเส้นทาง Ø Digital — แพ็กเกจรายเดือนออกแบบตาม Content Loop + Data Depth + Strategic Layer.
          </p>
        </Reveal>
      </div>
    </section>

    {/* PACKAGES */}
    <section className="px-6 md:px-10 pb-24">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 border border-foreground/20">
        {packages.map((p, i) => (
          <Reveal key={p.tier} delay={i * 0.08}>
            <div className={`relative p-10 md:p-12 h-full flex flex-col bg-background ${i > 0 ? "md:border-l border-foreground/20 border-t md:border-t-0" : ""} ${p.featured ? "md:-my-px md:-mx-px border border-cinnabar" : ""}`}>
              {p.featured && (
                <div className="absolute top-0 left-0 right-0 -translate-y-1/2 flex justify-center">
                  <span className="bg-cinnabar text-background font-mono text-[10px] tracking-[0.22em] uppercase px-4 py-2">
                    Featured Package
                  </span>
                </div>
              )}
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">
                {p.tier}
              </div>
              <h3 className="mt-8 font-serif text-[48px] md:text-[56px] leading-[1] tracking-[-0.02em]">
                <em className="italic">{p.name[0]}</em>
              </h3>
              <p className="mt-5 font-serif italic text-[15px] md:text-[16px] leading-[1.5] text-muted-foreground">
                {p.tagline}
              </p>

              <div className="mt-10 pt-8 border-t border-current/20">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase mb-3 text-muted-foreground">
                  Start from
                </div>
                <div className="font-serif text-[42px] md:text-[48px] tracking-[-0.025em] leading-none">{p.price}</div>
                <div className="mt-2 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
                  {p.sub}
                </div>
                <div className="mt-3 font-mono text-[10px] tracking-[0.18em] uppercase text-cinnabar">
                  {p.annual}
                </div>
              </div>

              <ul className="mt-8 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 font-thai text-[14px] leading-[1.6]">
                    <Check className="w-4 h-4 mt-1 shrink-0 text-cinnabar" />
                    <span className="text-foreground/85">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Expanded detail groups */}
              <div className="mt-10 pt-8 border-t border-foreground/15 space-y-6">
                {[
                  { label: "Deliverables / mo", value: p.deliverables },
                  { label: "Production",        value: p.production },
                  { label: "Strategy & Data",   value: p.strategy },
                  { label: "Reporting",         value: p.reporting },
                  { label: "Best For",          value: p.bestFor },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar flex items-center gap-3">
                      <span className="block w-4 h-px bg-cinnabar" />
                      {row.label}
                    </div>
                    <p className="mt-2 font-thai text-[13px] md:text-[14px] leading-[1.6] text-foreground/80">
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className={`mt-10 group inline-flex items-center justify-between gap-3 px-7 py-4 btn-label border transition-colors duration-300 ${
                  p.featured
                    ? "border-cinnabar bg-cinnabar text-background hover:opacity-90"
                    : "border-foreground bg-background text-foreground hover:bg-cinnabar hover:text-background hover:border-cinnabar"
                }`}
              >
                <span>{p.cta}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        ))}
      </div>

      {/* COMPARISON STRIP */}
      <Reveal delay={0.15}>
        <div className="max-w-[1280px] mx-auto mt-12 border border-foreground/20">
          <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr] bg-surface text-foreground font-mono text-[10px] tracking-[0.22em] uppercase border-b border-foreground/15">
            <div className="p-4 md:p-5">At a glance</div>
            <div className="p-4 md:p-5 border-l border-foreground/15">Starter</div>
            <div className="p-4 md:p-5 border-l border-foreground/15 text-cinnabar">Pro</div>
            <div className="p-4 md:p-5 border-l border-foreground/15">Elite</div>
          </div>
          {compareRows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-[1.2fr_1fr_1fr_1fr] ${i > 0 ? "border-t border-foreground/15" : ""} font-thai text-[13px] md:text-[14px]`}
            >
              <div className="p-4 md:p-5 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                {row.label}
              </div>
              <div className="p-4 md:p-5 border-l border-foreground/15">{row.starter}</div>
              <div className="p-4 md:p-5 border-l border-foreground/15 bg-foreground/[0.03] text-foreground">{row.pro}</div>
              <div className="p-4 md:p-5 border-l border-foreground/15">{row.elite}</div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Founder's deal */}
      <Reveal delay={0.2}>
        <div className="max-w-[1280px] mx-auto mt-12 border-y border-cinnabar bg-background text-foreground px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar flex items-center gap-3">
              <span className="block w-6 h-px bg-cinnabar" />
              Founder's Deal · 20 Slots
            </div>
            <h4 className="mt-4 font-serif text-[24px] md:text-[28px] tracking-[-0.015em]">
              <em className="italic text-cinnabar">20 รายแรก</em> เท่านั้น
            </h4>
            <p className="mt-3 font-thai text-[14px] md:text-[15px] leading-[1.6] text-muted-foreground max-w-[560px]">
              3 เดือนแรกที่ ฿29,000/เดือน (Save ฿18,000) + ฟรี Brand Audit Report (มูลค่า ฿8,000)
            </p>
          </div>
          <div className="text-right shrink-0">
            <div className="font-serif italic text-cinnabar text-[64px] md:text-[80px] leading-none tracking-[-0.03em] tabular-nums">20</div>
            <div className="mt-2 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">Slots Only</div>
          </div>
        </div>
      </Reveal>
    </section>

    {/* ADD-ONS — editorial table */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <SectionLabel index="02" label="Add-ons" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-md max-w-[16ch]">
            Beyond the<br /><em className="italic text-cinnabar">package.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-[680px] font-thai text-[16px] md:text-[18px] leading-[1.7] text-muted-foreground">
            Standalone services — ไม่ต้องอัปเกรด package ก็เลือกใช้ได้. เหมาะกับแบรนด์ที่มีเป้าหมายเฉพาะ หรือต้องการเพิ่มช่องทางใหม่.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-4 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
            All prices exclude VAT 7% · one-time fees unless marked monthly
          </p>
        </Reveal>

        <div className="mt-16 space-y-16 md:space-y-20">
          {addOnCategories.map((cat, ci) => (
            <Reveal key={cat.label} delay={ci * 0.05}>
              <div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar flex items-center gap-3 mb-6">
                  <span className="block w-6 h-px bg-cinnabar" />
                  {cat.label}
                </div>
                <div className="border-t border-foreground/20">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="group grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)_auto] gap-3 md:gap-10 items-baseline py-6 md:py-7 border-b border-foreground/20"
                    >
                      <h3 className={`font-serif text-[20px] md:text-[24px] leading-[1.15] tracking-[-0.01em] transition-all ${item.italic ? "italic text-cinnabar" : "group-hover:italic group-hover:text-cinnabar"}`}>
                        {item.name}
                      </h3>
                      <p className="font-thai text-[14px] md:text-[15px] leading-[1.6] text-muted-foreground">
                        {item.desc}
                      </p>
                      <div className="font-serif text-[20px] md:text-[22px] tracking-[-0.01em] tabular-nums text-foreground whitespace-nowrap md:text-right">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bundle Discount — ink on snow, hairline band */}
        <Reveal delay={0.2}>
          <div className="mt-20 border-t border-b border-foreground py-10 md:py-14 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar flex items-center gap-3">
                <span className="block w-6 h-px bg-cinnabar" />
                Bundle Discount
              </div>
              <h4 className="mt-5 font-serif text-[28px] md:text-[40px] tracking-[-0.02em] leading-[1.05] max-w-[20ch]">
                Buy 3 add-ons or more — <em className="italic text-cinnabar">15% off, instantly.</em>
              </h4>
              <p className="mt-4 font-thai text-[14px] md:text-[15px] leading-[1.6] text-muted-foreground max-w-[560px]">
                Mix and match — package + add-ons ปรับให้เข้ากับโจทย์ของคุณ. คุยกับ Account Manager เพื่อขอใบเสนอราคา.
              </p>
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-between gap-4 px-7 py-4 btn-label border border-cinnabar bg-cinnabar text-background hover:opacity-90 transition-opacity duration-300 shrink-0"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);

export default Services;