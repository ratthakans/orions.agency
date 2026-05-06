import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import ClosingCTA from "@/components/ClosingCTA";
import SEO from "@/components/SEO";

const SITE_URL = "https://orions.agency";
const accent = "text-gradient";

const services = [
  {
    n: "01",
    title: "Branding",
    lead: "Identity that works across every touchpoint.",
    detail:
      "ตั้งแต่ตั้งชื่อ ออกแบบ logo ระบบภาพ ไปจนถึง brand book ที่ทีมและคู่ค้าใช้งานจริงได้ — ทุกชิ้นถูกออกแบบให้ทำงานทั้งบน feed, store, และ packaging โดยไม่หลุดเสียงแบรนด์",
    items: ["Naming · Logo · Marks", "Visual identity system", "Brand guidelines + book", "Launch toolkit"],
  },
  {
    n: "02",
    title: "Content",
    lead: "Photo, video, and design that earn the scroll.",
    detail:
      "ถ่ายเอง ตัดเอง ออกแบบเอง — ไม่ส่งต่อ ทีม in-house ของเราถ่าย photo, video, reels, motion graphics และจัดการ asset library ให้แบรนด์ของคุณมีคลังพร้อมใช้ตลอดทั้งปี",
    items: ["Photo + video shoots", "Reels + short-form video", "Graphic + motion design", "Asset libraries"],
  },
  {
    n: "03",
    title: "Social media",
    lead: "Strategy, posting, community, and paid ads.",
    detail:
      "วางกลยุทธ์ → โพสต์รายวัน → ดูแลคอมมูนิตี้ → รัน paid ads ทั้งหมดอยู่ภายใต้ทีมเดียว — ไม่มี hand-off, ไม่มี telephone game, รายงานผลทุกเดือน",
    items: ["Strategy + content calendar", "Daily posting + scheduling", "Community management", "Paid ads (Meta, TikTok)"],
  },
];

type Tier = {
  name: string;
  from: string;        // "Start from THB 150,000"
  unit?: string;       // "/ project" or "/ month"
  forWho: string;
  includes: string[];
};

type ServiceTable = {
  n: string;
  title: string;
  lead: string;
  tiers: Tier[];
};

const serviceTables: ServiceTable[] = [
  {
    n: "01",
    title: "Branding",
    lead: "การลากเส้นสร้างตัวตน — เปลี่ยนจากจุดสว่างที่กระจัดกระจาย ให้กลายเป็นภาพลักษณ์ที่มีความหมาย.",
    tiers: [
      {
        name: "Essential Look",
        from: "Start from THB 150,000",
        unit: "/ project",
        forWho: "ธุรกิจเริ่มต้นที่ต้องการความ ‘แพง’ และ ‘มาตรฐาน’ ทันที",
        includes: [
          "Logo + marks",
          "Color + typography system",
          "Business card",
          "Basic brand guideline",
        ],
      },
      {
        name: "Full Brand System",
        from: "Start from THB 350,000",
        unit: "/ project",
        forWho: "ธุรกิจที่ต้องการยึดหัวหาดในตลาดและสร้างความเชื่อมั่นระยะยาว",
        includes: [
          "Everything in Essential",
          "Brand voice + verbal system",
          "Key visual / ad system",
          "Launch plan + rollout toolkit",
        ],
      },
    ],
  },
  {
    n: "02",
    title: "Content Production",
    lead: "งานคราฟต์หยุดนิ้วโป้ง — ผลิตเฉพาะสิ่งที่จำเป็นและสร้าง impact ไม่ทำขยะดิจิทัล.",
    tiers: [
      {
        name: "High-Impact Assets",
        from: "Start from THB 60,000",
        unit: "/ project",
        forWho: "แบรนด์ที่ต้องการชุดภาพ/วิดีโอสั้นที่หยุดสายตาภายใน 1.7 วินาที",
        includes: [
          "Photo or short-form video × 3–5",
          "Concept + art direction",
          "Shoot day + post-production",
          "Platform-ready exports",
        ],
      },
      {
        name: "Master Story",
        from: "Start from THB 180,000",
        unit: "/ project",
        forWho: "แบรนด์ที่ต้องการ brand film / documentary สร้างความศรัทธา",
        includes: [
          "Brand film or documentary",
          "Script + storyboard",
          "Full production crew",
          "Color, sound, finishing",
        ],
      },
    ],
  },
  {
    n: "03",
    title: "Social Media",
    lead: "ดูแลต่อเนื่องอย่างมีชั้นเชิง — บริหารจัดการโซเชียลมีเดียด้วยตรรกะและรสนิยม.",
    tiers: [
      {
        name: "Foundation",
        from: "Start from THB 50,000",
        unit: "/ month",
        forWho: "เน้นความนิ่ง ภูมิฐาน รักษาภาพลักษณ์ผู้นำ",
        includes: [
          "8–10 high-quality posts / month",
          "Content calendar + copy",
          "Community management (light)",
          "Monthly report",
        ],
      },
      {
        name: "Growth",
        from: "Start from THB 80,000",
        unit: "/ month",
        forWho: "เน้นการเติบโตและการเข้าถึงตลาดใหม่",
        includes: [
          "Everything in Foundation",
          "Short-form video production",
          "Paid ads strategy + management",
          "Bi-weekly performance review",
        ],
      },
      {
        name: "Mastery",
        from: "Start from THB 120,000",
        unit: "/ month",
        forWho: "ดูแลครบวงจรเหมือนมีแผนกการตลาดส่วนตัว",
        includes: [
          "Everything in Growth",
          "Senior consultant direction",
          "Full-funnel paid media",
          "Weekly strategy syncs",
        ],
      },
    ],
  },
];

const steps = [
  { n: "01", title: "Listen", body: "30-min call. Honest fit-check." },
  { n: "02", title: "Plan",   body: "Short proposal. Real numbers." },
  { n: "03", title: "Build",  body: "Strategy, identity, content, ads." },
  { n: "04", title: "Run",    body: "Monthly reports. Real results." },
];

const Services = () => (
  <div>
    <SEO
      title="Services — ØRIONS"
      description="Branding, content, and paid ads — managed end-to-end. One team, no handoff. Live in 4 weeks."
      path="/services"
      schema={[
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((s, i) => ({
            "@type": "Service",
            position: i + 1,
            name: s.title,
            description: s.lead,
            provider: { "@type": "Organization", name: "ØRIONS" },
          })),
        },
      ]}
    />

    <PageHero
      eyebrow="SERVICES · INDEX"
      verticalLabel="/ 02 · SERVICES"
      title={<>Three things, <span className={accent}>properly.</span></>}
      titleSize="md"
    />

    {/* KICKSTART — Audit */}
    <section className="px-6 md:px-10">
      <div className="border-t border-foreground max-w-[1200px] mx-auto py-16 md:py-24">
        <Reveal>
          <p className="index-badge text-muted-foreground">— 02 · THE KICKSTART</p>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          <div className="lg:col-span-5">
            <Reveal delay={0.05}>
              <h2 className="font-display h-display-sm">
                ØRIONS <span className={accent}>Audit.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 font-thai text-[15px] leading-[1.7] text-muted-foreground max-w-[420px]">
                ทางด่วนหาจุดตัน — เหมาะสำหรับธุรกิจที่ต้องการทิศทางที่แน่นอนก่อนเริ่มลงทุน.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="border-t border-foreground pt-6 grid grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <div className="index-badge text-muted-foreground">PRICE</div>
                  <div className="mt-2 font-mono text-[18px] md:text-[20px]">THB 30,000</div>
                  <div className="mt-1 text-[12px] font-thai text-muted-foreground">นำไปหักลบกับ phase ถัดไปได้</div>
                </div>
                <div>
                  <div className="index-badge text-muted-foreground">TIMELINE</div>
                  <div className="mt-2 font-mono text-[18px] md:text-[20px]">1–2 weeks</div>
                </div>
                <div className="col-span-2">
                  <div className="index-badge text-muted-foreground">WHAT YOU GET</div>
                  <ul className="mt-3 space-y-2 text-[14px] font-thai">
                    <li className="border-b border-soft pb-2">— วิเคราะห์จุดที่งบรั่วไหลและจุดที่แบรนด์นิ่ง</li>
                    <li className="border-b border-soft pb-2">— 1-Page Roadmap เพื่อปลดล็อกธุรกิจ</li>
                    <li className="border-b border-soft pb-2">— Working session 1 ครั้งกับทีม ØRIONS</li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>

    {/* PRICE TABLES — per service */}
    <section className="px-6 md:px-10">
      <div className="border-t border-foreground max-w-[1200px] mx-auto py-16 md:py-24">
        <Reveal>
          <p className="index-badge text-muted-foreground">— 03 · SERVICES &amp; PRICING</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display h-display-sm max-w-[820px]">
            Honest pricing, <span className={accent}>start from.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[640px] font-thai text-[15px] leading-[1.7] text-muted-foreground">
            ราคาด้านล่างคือจุดเริ่มต้น — final scope &amp; quote ขึ้นกับ deliverables ของแต่ละโปรเจกต์ พูดคุยกับเราเพื่อรับใบเสนอราคาเฉพาะแบรนด์ของคุณ.
          </p>
        </Reveal>

        <div className="mt-16 space-y-20 md:space-y-28">
          {serviceTables.map((svc) => (
            <Reveal key={svc.n}>
              <article>
                {/* Service header */}
                <header className="border-t border-foreground pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-end pb-8">
                  <div className="lg:col-span-2">
                    <div className="num-display text-[44px] md:text-[72px] leading-none">{svc.n}</div>
                  </div>
                  <div className="lg:col-span-5">
                    <h3 className="font-display h-display-xs">{svc.title}.</h3>
                  </div>
                  <div className="lg:col-span-5">
                    <p className={`font-thai text-[14px] md:text-[15px] leading-[1.7] ${accent}`}>{svc.lead}</p>
                  </div>
                </header>

                {/* Tier table */}
                <div className={`grid grid-cols-1 ${svc.tiers.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"} gap-px bg-foreground/15 border border-foreground/15`}>
                  {svc.tiers.map((t) => (
                    <div key={t.name} className="bg-background p-7 md:p-8 flex flex-col">
                      <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{svc.title}</div>
                      <h4 className="mt-3 font-display text-[20px] md:text-[24px] tracking-[-0.02em]">{t.name}.</h4>

                      <div className="mt-6 border-t border-foreground pt-4">
                        <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">{t.from.split(" ").slice(0, 2).join(" ")}</div>
                        <div className="mt-2 font-mono text-[20px] md:text-[24px]">
                          {t.from.replace("Start from ", "")}
                          {t.unit && <span className="text-[13px] text-muted-foreground"> {t.unit}</span>}
                        </div>
                      </div>

                      <p className="mt-5 font-thai text-[13px] leading-[1.65] text-muted-foreground">{t.forWho}</p>

                      <div className="mt-6 border-t border-soft pt-4">
                        <div className="index-badge text-muted-foreground">INCLUDES</div>
                        <ul className="mt-3 space-y-2 text-[13.5px] font-thai">
                          {t.includes.map((it) => (
                            <li key={it} className="flex gap-3 border-b border-soft pb-2">
                              <span className="text-muted-foreground">—</span>
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* PROCESS — dark, mirrors Index pattern */}
    <section className="relative px-6 md:px-10 bg-foreground text-background">
      <div className="border-t border-background/30 py-20 md:py-28 max-w-[1200px] mx-auto">
        <Reveal><p className="index-badge text-background/60">— 04 · PROCESS</p></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display h-display-sm">
            From hello, live in <span className={accent}>4 weeks.</span>
          </h2>
        </Reveal>
        <div className="mt-16 pt-8 border-t border-background/30 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {steps.map((st) => (
            <Reveal key={st.n}>
              <div>
                <div className={`font-mono text-[10px] tracking-[0.2em] ${accent}`}>— {st.n}</div>
                <h3 className="mt-5 font-display text-[22px] md:text-[26px] tracking-[-0.02em] text-background">
                  {st.title}.
                </h3>
                <p className="mt-3 text-[13px] leading-[1.55] font-thai text-background/65">
                  {st.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* FULL DETAILS LINK */}
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-16 md:py-20 max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="index-badge text-muted-foreground">— 05 · MORE</p>
          <h3 className="mt-4 font-display text-[22px] md:text-[28px] tracking-[-0.02em] max-w-[520px]">
            Add-ons, FAQs, ad-spend caps.
          </h3>
        </div>
        <a
          href="/pricing"
          className="group inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] uppercase border-b border-foreground/30 hover:border-foreground pb-1 transition-colors self-start md:self-end"
        >
          <span>View full pricing page</span>
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>

    <ClosingCTA
      eyebrow="✦ NOW BOOKING — Q3 2026"
      title={<>Tell us about <span className={accent}>the brand.</span></>}
      description="30-min discovery call. Free. We reply within 24 hours."
      ctas={[{ label: "Start the conversation", to: "/contact" }]}
    />
  </div>
);

export default Services;
