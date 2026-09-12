import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import ClosingCTA from "@/components/ClosingCTA";
import { disciplines, process } from "@/data/capabilities";

const SITE_URL = "https://orions.agency";

const roles = [
  "Strategic Creative Partner",
  "Brand Partner",
  "Campaign Partner",
  "Creative Direction Team",
  "Production Partner",
  "Extension ของ Internal Brand Team",
];

const Practice = () => (
  <div>
    <SEO
      title="Practice — Story · Direction · Expression · ØRIONS"
      description="ORIONS ทำงานผ่าน 3 ส่วนที่เชื่อมต่อกัน — Story: ค้นหาเรื่องที่ควรถูกเล่า · Direction: สร้างโลก Creative ที่เหมาะกับเรื่องนั้น · Expression: ทำให้เรื่องนั้นมีชีวิตผ่าน Medium ที่เหมาะสม. Discover · Connect · Shape · Refine · Express."
      path="/practice"
      schema={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "ØRIONS — Story → Direction → Expression",
        itemListElement: disciplines.map((d, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: d.name,
          description: d.line,
          url: `${SITE_URL}/practice#${d.slug}`,
        })),
      }}
    />

    {/* HERO */}
    <section className="section-ink px-6 md:px-10 border-b border-foreground/15">
      <div className="max-w-[1280px] mx-auto pt-28 md:pt-32 pb-16 md:pb-20">
        <SectionLabel label="Practice" />
        <Reveal delay={0.05} emphasis="lead">
          <h1 className="mt-8 h-display-lg max-w-[18ch]">
            Story → Direction → <em className="text-foreground">Expression</em>
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <div lang="th" className="mt-8 max-w-[640px] font-thai thai-wrap text-[16px] md:text-[19px] leading-[1.8] text-foreground/80 space-y-3">
            <p>นี่คือวิธีที่เรามองทุก Project</p>
            <p>บางแบรนด์อาจเริ่มจาก Story · บางแบรนด์มี Story อยู่แล้ว แต่ยังไม่มี Direction · บางแบรนด์มีทั้งสองอย่าง และต้องการทีมช่วยสร้าง Expression ที่ดีที่สุด</p>
            <p>ORIONS สามารถเข้าไปทำงานได้ในแต่ละช่วง หรือดูแลทั้ง Journey</p>
          </div>
        </Reveal>

        {/* The three disciplines at a glance */}
        <Reveal delay={0.18}>
          <div className="mt-14 md:mt-16 border-t border-foreground/20">
            {disciplines.map((d) => (
              <a
                key={d.slug}
                href={`#${d.slug}`}
                className="grid grid-cols-[52px_1fr] md:grid-cols-[80px_240px_1fr] items-baseline gap-x-4 gap-y-1 py-4 border-b border-foreground/12 hover:bg-foreground/[0.03] transition-colors"
              >
                <span className="font-mono text-[11px] md:text-[12px] tracking-[0.14em] tabular-nums text-muted-foreground">{d.n}</span>
                <span className="font-display text-[19px] md:text-[22px] font-medium tracking-[-0.02em]">{d.name}</span>
                <span className="col-span-2 md:col-span-1 font-serif text-[14px] md:text-[15px] leading-[1.6] text-muted-foreground">{d.line}</span>
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.22}>
          <p className="mt-8 font-serif text-[18px] md:text-[22px] leading-[1.3] tracking-[-0.02em] text-foreground">
            Does everything tell the same story?
          </p>
        </Reveal>
      </div>
    </section>

    {/* THE THREE DISCIPLINES */}
    {disciplines.map((d, i) => (
      <section
        key={d.slug}
        id={d.slug}
        className={`px-6 md:px-10 border-t border-foreground/15 scroll-mt-16 ${i % 2 === 1 ? "bg-surface" : ""}`}
      >
        <div className="max-w-[1280px] mx-auto py-24 md:py-36 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-4">
            <Reveal>
              <span className="font-mono text-[12px] tracking-[0.14em] tabular-nums text-muted-foreground">{d.n}</span>
            </Reveal>
            <Reveal delay={0.05} emphasis="lead">
              <h2 className="mt-4 font-display font-medium text-[clamp(34px,5vw,56px)] leading-[1.02] tracking-[-0.035em]">
                {d.name}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 font-serif text-[17px] md:text-[20px] leading-[1.3] tracking-[-0.015em] text-foreground/90 max-w-[20ch]">{d.line}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p lang="th" className="mt-5 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.75] text-muted-foreground max-w-[34ch]">
                {d.th}
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            {d.intro && (
              <Reveal delay={0.05}>
                <p lang="th" className="editorial-quote max-w-[680px] text-[19px] md:text-[24px]">
                  {d.intro}
                </p>
              </Reveal>
            )}
            <Reveal delay={0.1}>
              <div className={`${d.intro ? "mt-12" : ""} font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground`}>Capabilities</div>
              <ul className="mt-5 border-t border-foreground/12 grid grid-cols-1 sm:grid-cols-2">
                {d.capabilities.map((c) => (
                  <li key={c} className="py-4 border-b border-foreground/12 font-display text-[15px] md:text-[17px] tracking-[-0.01em] sm:odd:pr-6">
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    ))}

    {/* POSITIONING */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <SectionLabel label="Our Positioning" />
        </div>
        <div className="md:col-span-8">
          <Reveal emphasis="lead">
            <h2 className="h-display-md max-w-[20ch]">
              A story-led <em className="text-foreground">creative company.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div lang="th" className="mt-8 font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.85] text-foreground/85 max-w-[62ch] space-y-4">
              <p>ORIONS อยู่ระหว่าง <span className="text-foreground">Brand Thinking</span> และ <span className="text-foreground">Creative Execution</span></p>
              <p>เราไม่ได้อยากเป็น Agency ที่ถูกนิยามด้วย Format — เราไม่ใช่แค่ Branding Agency, Advertising Agency, Production House หรือ Content Agency เพราะ Story หนึ่งเรื่องอาจต้องถูกถ่ายทอดออกมาในหลายรูปแบบ</p>
              <p>บางครั้งคำตอบคือ Identity · บางครั้งคือ Film · บางครั้งคือ Campaign · บางครั้งคือ Website · บางครั้งอาจเป็นเพียงประโยคเดียว</p>
              <p className="text-foreground">เราเลือก Medium จาก Idea ไม่ใช่บิด Idea ให้เข้ากับ Medium ที่อยากขาย</p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 font-serif text-[20px] md:text-[26px] leading-[1.25] tracking-[-0.02em] text-foreground">Meaning before medium.</p>
          </Reveal>
        </div>
      </div>
    </section>

    {/* PROCESS — a real sequence, so it is numbered */}
    <section id="process" className="bg-surface px-6 md:px-10 border-t border-foreground/15 scroll-mt-16">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36">
        <SectionLabel label="Our Process" />
        <Reveal delay={0.05} emphasis="lead">
          <h2 className="mt-8 h-display-lg max-w-[20ch]">
            From scattered points to <em className="text-foreground">a story worth remembering.</em>
          </h2>
        </Reveal>
        <div className="mt-14 md:mt-20 border-t border-foreground/20">
          {process.map((s) => (
            <Reveal key={s.n} emphasis="quiet">
              <div className="py-10 md:py-12 border-b border-foreground/12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                <div className="md:col-span-4">
                  <span className="font-mono text-[11px] tracking-[0.14em] tabular-nums text-muted-foreground">{s.n}</span>
                  <h3 className="mt-3 font-display font-medium text-[28px] md:text-[36px] leading-none tracking-[-0.035em]">{s.name}</h3>
                  <p className="mt-3 font-serif text-[15px] md:text-[17px] leading-[1.35] text-foreground/85">{s.line}</p>
                </div>
                <div lang="th" className="md:col-span-8 font-thai thai-wrap text-[15px] md:text-[16px] leading-[1.85] text-foreground/80 max-w-[62ch]">
                  {s.body.map((b) => <p key={b} className="mb-3">{b}</p>)}
                  {s.list && (
                    <p className="my-4 font-mono text-[11px] tracking-[0.12em] uppercase text-foreground leading-[2]">
                      {s.list.join(" · ")}
                    </p>
                  )}
                  {s.close && <p className="text-foreground">{s.close}</p>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* OUR ROLE */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <SectionLabel label="Our Role" />
        </div>
        <div className="md:col-span-8">
          <Reveal>
            <p lang="th" className="font-thai text-[15px] md:text-[17px] leading-[1.8] text-foreground/80">เราอาจเข้ามาในฐานะ</p>
            <ul className="mt-6 border-t border-foreground/12">
              {roles.map((r) => (
                <li key={r} lang="th" className="py-4 border-b border-foreground/12 font-display text-[17px] md:text-[20px] tracking-[-0.015em]">{r}</li>
              ))}
            </ul>
            <p lang="th" className="mt-8 font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.8] text-foreground/80 max-w-[56ch]">
              Role สามารถเปลี่ยนได้ตาม Project แต่หน้าที่หลักของเราเหมือนเดิม
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 h-display-sm text-foreground">Make the story clearer.</p>
          </Reveal>
        </div>
      </div>
    </section>

    <ClosingCTA
      title={<>Have a story <em className="text-foreground">worth refining?</em></>}
      description="Talk to ORIONS."
      ctas={[
        { label: "Talk to ORIONS", to: "/contact" },
        { label: "ดูผลงาน", to: "/work", variant: "ghost" },
      ]}
    />
  </div>
);

export default Practice;
