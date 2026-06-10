import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/CTABand";

const principles = [
  { n: "i.",   en: "พูดตรง",                 th: "ถ้ายังไม่พร้อม เราบอกตรง ๆ — ครบทั้งสองด้าน" },
  { n: "ii.",  en: "ขายผล ไม่ใช่จำนวนโพสต์", th: "ผูกงานไว้กับผลที่วัดได้ ไม่ใช่จำนวนชิ้นงาน" },
  { n: "iii.", en: "ข้อจำกัดคือบรีฟ",         th: "เราออกแบบไอเดียรอบเงื่อนไข ไม่หนีมัน" },
  { n: "iv.",  en: "มองยาว",                 th: "สร้างแบรนด์ที่ถูกจำ ไม่ใช่กระแสที่ผ่านไป" },
];

const notForYou = [
  { n: "01", th: "คุณต้องการแค่ยอดให้เร็วที่สุด โดยไม่สนภาพจำระยะยาว — performance shop เพียว ๆ อาจคุ้มกว่า" },
  { n: "02", th: "คุณอยากได้คอนเทนต์เยอะที่สุดในราคาถูกที่สุด โดยไม่ต้องมีกลยุทธ์ — เราไม่ใช่ที่นั้น" },
  { n: "03", th: "ของหรือ unit economics ยังไม่พร้อม — เราจะบอก และยังไม่รับงานจนกว่าจะพร้อม" },
];

// PLACEHOLDER: replace names + photos with the real 12-person team
// Roles are real; names/portraits are clearly placeholders — honest by design
// (no fabricated identities). Avatars show initials, not fake photos.
const team = [
  { role: "Founder / Creative Director" },
  { role: "Strategy Lead" },
  { role: "Art Director" },
  { role: "Senior Designer" },
  { role: "Copywriter" },
  { role: "Social Strategist" },
  { role: "Performance / Ads Lead" },
  { role: "SEO Specialist" },
  { role: "Producer" },
  { role: "Photographer / DP" },
  { role: "Video Editor" },
  { role: "Account Manager" },
];

const About = () => (
  <div>
    <SEO
      title="About — สิ่งที่เราเชื่อ · ØRIONS"
      description="แบรนด์ที่ดีไม่ได้เกิดจากการพูดให้ดังที่สุด แต่จากการพูดให้ถูก. งานที่ดีที่สุดมักเกิดใต้ข้อจำกัด — เราถือว่ามันคือบรีฟ."
      path="/about"
    />

    {/* 01 — WHAT WE BELIEVE */}
    <section className="section-ink px-6 md:px-10 border-b border-foreground/15">
      <div className="max-w-[1280px] mx-auto pt-28 md:pt-32 pb-20 md:pb-28">
        <Reveal>
          <div className="eyebrow-mono">What we believe</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 lang="th" className="mt-8 h-display-lg max-w-[20ch] thai-wrap">
            พูดให้ดังที่สุด ไม่เท่าพูดให้ <em className="text-cinnabar">ถูก.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p lang="th" className="mt-8 max-w-[720px] font-thai thai-wrap text-[16px] md:text-[19px] leading-[1.7] text-foreground/80">
            ถูกเรื่อง · ถูกคน · ถูกเวลา. ทุกแบรนด์ที่มาหาเรามีข้อจำกัดของตัวเอง — งานของเราเหมือนกันเสมอ: หาเรื่องที่จริง แล้ว refine จนคมพอจะลงในกรอบนั้นได้. <span className="text-cinnabar">เราไม่หนีข้อจำกัด — เราถือว่ามันคือบรีฟ.</span>
          </p>
        </Reveal>
      </div>
    </section>

    {/* 02 — WHAT WE WON'T COMPROMISE ON */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionHeading
          eyebrow="02 — What we hold"
          lang="th"
          title={<>สี่อย่างที่เรา <em className="text-cinnabar">ไม่ยอมต่อรอง.</em></>}
        />
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {principles.map((p, i) => (
            <Reveal key={p.n} delay={(i % 2) * 0.06}>
              <div className="card-soft p-10 md:p-12 h-full">
                <div className="font-serif text-cinnabar text-[22px] leading-none">{p.n}</div>
                <h3 lang="th" className="mt-8 font-thai text-[24px] md:text-[28px] leading-[1.1] tracking-[-0.01em] font-medium">{p.en}</h3>
                <p lang="th" className="mt-4 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">{p.th}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 03 — THE TEAM */}
    {/* PLACEHOLDER: replace names + photos with the real 12-person team */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionHeading
          eyebrow="The team"
          lang="th"
          title={<>ทีมที่อยู่กับ <em className="text-cinnabar">งานของคุณ.</em></>}
          intro="ทีมเดียวตั้งแต่กลยุทธ์ถึงการผลิต — คนที่อยู่กับงานของคุณจริง ไม่ใช่สายพาน."
        />
        <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {team.map((p, i) => (
            <Reveal key={p.role} delay={(i % 6) * 0.04}>
              <div className="card-soft p-3.5 md:p-4 h-full">
                <div
                  aria-hidden="true"
                  className="aspect-square w-full rounded-lg bg-surface-2 flex items-center justify-center num-display text-cinnabar text-[18px]"
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-2.5 font-mono text-[9px] tracking-[0.1em] uppercase text-cinnabar leading-[1.35]">
                  {p.role}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p lang="th" className="mt-8 font-thai thai-wrap text-[13px] md:text-[14px] leading-[1.7] text-muted-foreground max-w-[680px]">
            เราเพิ่งตั้งสตูดิโอในชื่อ ØRIONS — แต่คนทำงานไม่ได้เพิ่งเริ่มต้น. AI ช่วยให้เราเร็วขึ้นและทดสอบได้มากขึ้น แต่คนยังเป็นคนคิดและรับผิดชอบงาน.
          </p>
        </Reveal>
      </div>
    </section>

    {/* 04 — WHEN WE'RE NOT THE ANSWER */}
    <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionHeading
          eyebrow="04 — When we're not the answer"
          lang="th"
          title={<>ความซื่อสัตย์สำคัญกว่า <em className="text-cinnabar">การรับทุกงาน.</em></>}
          intro="เราจะบอกตรง ๆ ถ้า:"
        />
        <div className="mt-12 grid grid-cols-1 gap-4 md:gap-5">
          {notForYou.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.06}>
              <div className="card-soft grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-12 items-baseline p-8 md:p-10">
                <div className="font-serif text-cinnabar text-[28px] md:text-[36px] leading-none tabular-nums">{p.n}</div>
                <p lang="th" className="font-thai thai-wrap text-[16px] md:text-[19px] leading-[1.6] text-foreground/90">{p.th}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 05 — CTA */}
    <CTABand
      eyebrow="When you're ready"
      title={<>นั่นแหละคือ <em className="text-cinnabar">บรีฟ</em> ที่เราถนัด.</>}
      subtitle="ไม่แน่ใจว่าควรเริ่มตรงไหน? ทำ Brand Audit 1 นาที — หรือทักมาคุยเลย."
      primary={{ label: "ทำ Brand Audit", to: "/diagnostic" }}
      secondary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
      tone="snow"
    />
  </div>
);

export default About;
