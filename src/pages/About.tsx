import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";
import SignalField from "@/components/SignalField";
import Picture from "@/components/Picture";
import founder from "@/assets/team/founder.jpg?as=picture";

// สิ่งที่เราไม่ทำ เด็ดขาด — from the 2026 brand direction.
const nevers = [
  { n: "i.",   en: "ไม่ตะโกน",                th: "ความมั่นใจจริงไม่ต้องใช้เครื่องหมายตกใจ — พูดน้อย ที่เหลือจะดังขึ้นเอง" },
  { n: "ii.",  en: "ไม่ใช้คำเวอร์",             th: "พูดเป็นข้อเท็จจริง ไม่ใช่คำเชิญชวน — เราขายความซื่อสัตย์ ไม่ขายฝัน" },
  { n: "iii.", en: "ไม่ทำเยอะเพื่อโชว์ขยัน",     th: "งานคราฟต์ที่ดีไม่เคยเกิดจากการทำเยอะ — เราคัด สกัด จนเหลือแต่สิ่งที่คนจำได้จริง" },
  { n: "iv.",  en: "ไม่แข่งราคา",              th: "แบรนด์ที่คมไม่ต้องลงไปเล่นสงครามราคา — และเราก็เช่นกัน" },
  { n: "v.",   en: "ไม่รับงานเกินกำลัง",        th: "เรารับงานจำกัดโดยตั้งใจ — ทุกโปรเจกต์ที่ตอบตกลง ต้องได้ทีมที่ทุ่มสุดตัวให้มัน" },
  { n: "vi.",  en: "ไม่ลงมือทำ ก่อนวินิจฉัย",     th: "เหมือนหมอที่ไม่จ่ายยาก่อนตรวจ — เราหาต้นตอของปัญหาก่อนเสมอ แล้วจึงลงมือแก้" },
];

// The plain facts — who / what / where, at a glance.
const facts = [
  { k: "What we are", v: "Boutique Creative Agency — เอเจนซี่ที่มีสมองของ consult" },
  { k: "What we do", v: "Brand Strategy · Creative Production · Communication Design" },
  { k: "The engine", v: "VÆST — AI creative director ที่มีรสนิยม เบื้องหลังทุกผลผลิตของ ORIONS" },
  { k: "Where", v: "กรุงเทพฯ ประเทศไทย — ทำงานกับแบรนด์ทั่วไทย (+ remote)" },
  { k: "Since", v: "2025 — นำโดยผู้ก่อตั้งและทีม senior ที่ลงมือทำเองทุกงาน" },
  { k: "How we price", v: "คิดต่อแคมเปญ/โปรเจกต์ — ไม่มีเรทการ์ด ตีตามการวินิจฉัย" },
  { k: "The work", v: "brand film · video · photography · music · งานสื่อสารระดับประเทศ" },
];

const notForYou = [
  { n: "01", th: "คุณต้องการแค่ยิงแอดเอายอดอย่างเดียว โดยไม่สนงานแบรนด์ระยะยาว — performance shop เพียว ๆ อาจคุ้มกว่า" },
  { n: "02", th: "คุณอยากได้คอนเทนต์เยอะที่สุดในราคาถูกที่สุด โดยไม่ต้องมีกลยุทธ์ — เราไม่ใช่ที่นั้น" },
  { n: "03", th: "ของหรือ unit economics ยังไม่พร้อม — เราจะบอก และยังไม่รับงานจนกว่าจะพร้อม" },
];

const About = () => (
  <div>
    <SEO
      title="About — ØRIONS คือใคร · Boutique Creative Agency, Bangkok"
      description="ØRIONS คือ boutique creative agency ในกรุงเทพฯ ที่มีสมองของ consult — วินิจฉัยก่อน แล้วลงมือแก้ด้วยงานคราฟต์จนจบ. brand strategy · creative production · communication design. นำโดยรัฐกันต์ สุวรรณภักดี และทีม senior. เรื่องที่คมที่สุดชนะ ไม่ใช่เรื่องที่ดังที่สุด."
      path="/about"
    />

    {/* 01 — WHAT WE BELIEVE */}
    <section className="relative overflow-hidden section-ink px-6 md:px-10 border-b border-foreground/15">
      <SignalField fx={0.82} fy={0.44} seed={6} intensity={0.85}
        className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="relative z-10 max-w-[1280px] mx-auto pt-28 md:pt-32 pb-20 md:pb-28">
        <SectionLabel label="What we believe" />
        <Reveal delay={0.1}>
          <h1 lang="th" className="mt-8 h-display-lg max-w-[20ch] thai-wrap">
            เรื่องที่คมที่สุด<em className="text-foreground">ชนะ</em> — ไม่ใช่เรื่องที่ดังที่สุด.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p lang="th" className="mt-8 max-w-[720px] font-thai thai-wrap text-[16px] md:text-[19px] leading-[1.8] text-foreground/80">
            ศัตรูของเรา — และของลูกค้าเรา — ไม่ใช่คู่แข่งของใคร แต่คือ <span className="text-foreground">Noise</span>: งานแมส เสียงรบกวน การถูกลืม และสงครามราคา. เราไม่ใช่ที่ปรึกษาที่ส่งแค่สไลด์ ไม่ใช่เอเจนซี่ที่รอบรีฟแล้วทำตามสั่ง — <span className="text-foreground">เราวินิจฉัยก่อน แล้วลงมือแก้ด้วยงานคราฟต์จนจบ.</span>
          </p>
        </Reveal>
      </div>
    </section>

    {/* WHO WE ARE — the plain facts: who / what / where */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
        <div>
          <SectionLabel label="Who we are" />
          <Reveal delay={0.05}>
            <h2 lang="th" className="mt-8 h-display-md max-w-[14ch] thai-wrap">
              ØRIONS <em className="text-foreground">โดยย่อ.</em>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div>
            <p lang="th" className="font-thai thai-wrap text-[16px] md:text-[18px] leading-[1.8] text-foreground/90 max-w-[60ch]">
              ØRIONS คือ <span className="text-foreground">Boutique Creative Agency</span> ในกรุงเทพฯ ที่ทำงานเหมือนหมอ ไม่เหมือนร้านขายยา — เราวินิจฉัย<span className="text-foreground">ด้วยหลักฐาน</span>ก่อนว่าแบรนด์ติดตรงไหน แล้วลงมือแก้ด้วยงานคราฟต์จนจบ.
            </p>
            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7 border-t border-foreground/12 pt-9">
              {facts.map((f) => (
                <div key={f.k}>
                  <dt className="font-mono text-[10px] tracking-[0.18em] uppercase text-foreground">— {f.k}</dt>
                  <dd lang="th" className="mt-2 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.8] text-foreground/85">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>

    {/* THE COMPASS → THE SIX NEVERS — one rule, then its practice */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36">
        <SectionLabel label="The compass" />
        <Reveal delay={0.05}>
          <blockquote lang="th" className="mt-8 font-serif text-[28px] md:text-[46px] leading-[1.25] tracking-[-0.015em] thai-wrap text-foreground max-w-[18ch]">
            "มันทำให้แบรนด์<em className="text-foreground italic">คมขึ้น</em> หรือแค่<em className="text-foreground italic">ดังขึ้น?</em>"
          </blockquote>
        </Reveal>
        <Reveal delay={0.1}>
          <p lang="th" className="mt-8 max-w-[640px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.8] text-foreground/80">
            ทุกการตัดสินใจวัดจากคำถามเดียวนี้ — จะรับงานไหม จะออกแบบยังไง จะพูดแบบไหน. ถ้าแค่ดังขึ้น เราไม่ทำ. ในทางปฏิบัติ มันแปลว่า<span className="text-foreground">หกอย่างที่เราไม่ทำ เด็ดขาด</span>:
          </p>
        </Reveal>
        <div className="mt-12 md:mt-14 border-t border-foreground/12">
          {nevers.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.05}>
              <div className="grid grid-cols-[46px_1fr] md:grid-cols-[92px_1fr] gap-5 md:gap-10 py-8 md:py-11 border-b border-foreground/12 items-baseline group">
                <div className="font-serif italic text-foreground text-[26px] md:text-[40px] leading-none">{p.n}</div>
                <div>
                  <h3 lang="th" className="font-thai text-[25px] md:text-[34px] leading-[1.1] tracking-[-0.01em] font-medium group-hover:text-foreground transition-colors">{p.en}</h3>
                  <p lang="th" className="mt-3.5 font-thai thai-wrap text-[14px] md:text-[16px] leading-[1.8] text-muted-foreground max-w-[62ch]">{p.th}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <Link to="/thinking" className="cta-link cta-link-muted mt-10">
            <span>อ่านเหตุผลเต็มใน Manifesto</span><ArrowUpRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>

    {/* 03 — FOUNDER'S NOTE */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36">
        <SectionLabel label="Founder's note" />
        <Reveal delay={0.05}>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-8 md:gap-16 items-start">
            <Picture
              data={founder}
              alt="Ratthakan Suwanphakdee — Founder & Creative Director, ØRIONS"
              className="w-44 h-56 md:w-60 md:h-[19rem] rounded-none object-cover object-top shrink-0"
            />
            <div>
              <div aria-hidden className="font-serif italic text-foreground text-[56px] md:text-[80px] leading-[0.4] select-none">“</div>
              <blockquote lang="th" className="mt-5 font-serif text-[24px] md:text-[38px] leading-[1.35] tracking-[-0.015em] thai-wrap text-foreground max-w-[42ch]">
                ผมเริ่ม ØRIONS เพราะเชื่อว่าแบรนด์ที่ดีไม่ต้องดังที่สุด — แค่ <em className="text-foreground">คมพอที่คนจะจำได้เอง.</em> เราจะบอกตรง ๆ เสมอ — ทั้งตอนที่มันใช่ และตอนที่ยังไม่พร้อม.
              </blockquote>
              <div className="mt-8">
                <p lang="th" className="font-thai text-[16px] font-medium text-foreground">รัฐกันต์ สุวรรณภักดี</p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">Ratthakan Suwanphakdee · Founder & Creative Director</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 04 — WHEN WE'RE NOT THE ANSWER */}
    <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36">
        <SectionHeading
          eyebrow="When we're not the answer"
          lang="th"
          title={<>ความซื่อสัตย์สำคัญกว่า <em className="text-foreground">การรับทุกงาน.</em></>}
          intro="เราจะบอกตรง ๆ ถ้า:"
        />
        <div className="mt-12 grid grid-cols-1 gap-4 md:gap-5">
          {notForYou.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.06}>
              <div className="card-soft grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-12 items-baseline p-8 md:p-10">
                <div className="font-serif text-foreground text-[28px] md:text-[36px] leading-none tabular-nums">{p.n}</div>
                <p lang="th" className="font-thai thai-wrap text-[16px] md:text-[19px] leading-[1.8] text-foreground/90">{p.th}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 05 — CTA */}
    <CTABand
      eyebrow="When you're ready"
      title={<>นั่นแหละคือ <em className="text-foreground">บรีฟ</em> ที่เราถนัด<span className="text-foreground">.</span></>}
      subtitle="เล่าโจทย์และเงื่อนไขของแบรนด์มาได้เลย — ไม่มีข้อผูกมัด."
      primary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
      secondary={{ label: "ดูผลงาน", to: "/work" }}
      tone="snow"
    />
  </div>
);

export default About;
