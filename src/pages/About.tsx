import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";
import TopoField from "@/components/TopoField";
import Picture from "@/components/Picture";
import founder from "@/assets/team/founder.jpg?as=picture";

const principles = [
  { n: "i.",   en: "พูดตรง",                  th: "บอกตรง ๆ ทั้งตอนที่ใช่และตอนที่ยังไม่พร้อม — เราขายความซื่อสัตย์ ไม่ขายฝัน" },
  { n: "ii.",  en: "ครบ กลยุทธ์ถึงงานคราฟต์",   th: "ทีมเดียวจบ — ตั้งแต่กลยุทธ์ · ไอเดียใหญ่ ถึงฟิล์มและ art direction ระดับโฆษณา ไม่ต้องวิ่งหาหลายเจ้า" },
  { n: "iii.", en: "วัดผลได้จริง",             th: "The ORIONS Standard — วัดผลแบรนด์แล้วปรับต่อจนเข้าที่ ไม่ส่งจบแล้วจบ" },
  { n: "iv.",  en: "ฝีมือระดับ senior",        th: "งานคราฟต์ทุกชิ้นลงมือโดยทีม senior — ยืดหยุ่นที่สไตล์ แต่ไม่เคยลดมาตรฐานฝีมือ" },
];

const notForYou = [
  { n: "01", th: "คุณต้องการแค่ยิงแอดเอายอดอย่างเดียว โดยไม่สนงานแบรนด์ระยะยาว — performance shop เพียว ๆ อาจคุ้มกว่า" },
  { n: "02", th: "คุณอยากได้คอนเทนต์เยอะที่สุดในราคาถูกที่สุด โดยไม่ต้องมีกลยุทธ์ — เราไม่ใช่ที่นั้น" },
  { n: "03", th: "ของหรือ unit economics ยังไม่พร้อม — เราจะบอก และยังไม่รับงานจนกว่าจะพร้อม" },
];

const About = () => (
  <div>
    <SEO
      title="About — สิ่งที่เราเชื่อ · ØRIONS"
      description="แบรนด์ที่ดีไม่ได้เกิดจากการพูดให้ดังที่สุด แต่จากการพูดให้ถูก. งานที่ดีที่สุดมักเกิดใต้ข้อจำกัด — เราถือว่ามันคือบรีฟ."
      path="/about"
    />

    {/* 01 — WHAT WE BELIEVE */}
    <section className="relative overflow-hidden section-ink px-6 md:px-10 border-b border-foreground/15">
      <TopoField fx={0.85} fy={0.42} seed={6} intensity={0.18}
        className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="relative z-10 max-w-[1280px] mx-auto pt-28 md:pt-32 pb-20 md:pb-28">
        <SectionLabel label="What we believe" />
        <Reveal delay={0.1}>
          <h1 lang="th" className="mt-8 h-display-lg max-w-[20ch] thai-wrap">
            พูดให้ดังที่สุด ไม่เท่าพูดให้ <em className="text-cinnabar">ถูก.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p lang="th" className="mt-8 max-w-[720px] font-thai thai-wrap text-[16px] md:text-[19px] leading-[1.8] text-foreground/80">
            ถูกเรื่อง · ถูกคน · ถูกเวลา. ทุกแบรนด์มีข้อจำกัดของตัวเอง — งานเราคือหาเรื่องที่จริง แล้ว refine จนคมพอจะลงในกรอบนั้น. <span className="text-cinnabar">เราไม่หนีข้อจำกัด — เราถือว่ามันคือบรีฟ.</span>
          </p>
        </Reveal>
      </div>
    </section>

    {/* BRAND IDEA — ถามก่อนขาย */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
        <div>
          <SectionLabel label="Brand idea" />
          <Reveal delay={0.05}>
            <h2 lang="th" className="mt-8 h-display-md max-w-[12ch] thai-wrap">
              เราถาม <em className="text-cinnabar">ก่อนขาย.</em>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div>
            <p lang="th" className="font-thai thai-wrap text-[16px] md:text-[18px] leading-[1.8] text-foreground/90">
              เราเปิดทุกดีลด้วยคำถาม — <span className="text-cinnabar">"แบรนด์นี้อยากให้คนรู้สึกอะไร?"</span> ก่อนเสนออะไร. ในตลาดที่เต็มไปด้วยเอเจนซีขายฝัน เราขายความซื่อสัตย์ที่กล้าบอกข้อจำกัด.
            </p>
            <p lang="th" className="mt-5 font-thai thai-wrap text-[15px] leading-[1.8] text-foreground/80">
              และเราไม่เชื่อในงานสวยที่ไม่ขยับธุรกิจ — <span className="text-foreground">ความคิดที่ดีต้องขายของได้</span>. เรายืดหยุ่นที่ <span className="text-foreground">สไตล์</span> แต่ไม่เคยยืดที่ <span className="text-cinnabar">มาตรฐานฝีมือ</span>. และก่อนปล่อยงานทุกชิ้น เรามีคำถาม 3 ข้อที่ต้องผ่านก่อนเสมอ (<Link to="/thinking" className="text-cinnabar hover:underline">อ่านแนวคิดเรา</Link>).
            </p>
            <Link to="/thinking" className="btn-ghost mt-8">
              <span>อ่านแนวคิดของเรา</span><ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 02 — WHAT WE WON'T COMPROMISE ON */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36">
        <SectionHeading
          eyebrow="What we won't compromise"
          lang="th"
          title={<>สี่อย่างที่เรา <em className="text-cinnabar">ไม่ยอมต่อรอง.</em></>}
        />
        <div className="mt-14 md:mt-16 border-t border-foreground/12">
          {principles.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.05}>
              <div className="grid grid-cols-[46px_1fr] md:grid-cols-[92px_1fr] gap-5 md:gap-10 py-8 md:py-11 border-b border-foreground/12 items-baseline group">
                <div className="font-serif italic text-cinnabar text-[26px] md:text-[40px] leading-none">{p.n}</div>
                <div>
                  <h3 lang="th" className="font-thai text-[25px] md:text-[34px] leading-[1.1] tracking-[-0.01em] font-medium group-hover:text-cinnabar transition-colors">{p.en}</h3>
                  <p lang="th" className="mt-3.5 font-thai thai-wrap text-[14px] md:text-[16px] leading-[1.8] text-muted-foreground max-w-[62ch]">{p.th}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
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
              alt="Ratthakan Suwanphakdee — Founder / Creative Director, ØRIONS"
              className="w-44 h-56 md:w-60 md:h-[19rem] rounded-none object-cover object-top shrink-0"
            />
            <div>
              <div aria-hidden className="font-serif italic text-cinnabar text-[56px] md:text-[80px] leading-[0.4] select-none">“</div>
              <blockquote lang="th" className="mt-5 font-serif text-[24px] md:text-[38px] leading-[1.35] tracking-[-0.015em] thai-wrap text-foreground max-w-[42ch]">
                ผมเริ่ม ØRIONS เพราะเชื่อว่าแบรนด์ที่ดีไม่ได้มาจากการพูดให้ดังที่สุด แต่จากการ <em className="text-cinnabar">พูดให้ถูก.</em> เราจะบอกตรง ๆ เสมอ — ทั้งตอนที่มันใช่ และตอนที่ยังไม่พร้อม.
              </blockquote>
              <div className="mt-8">
                <p lang="th" className="font-thai text-[16px] font-medium text-foreground">รัฐกันต์ สุวรรณภักดี</p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">Ratthakan Suwanphakdee · Founder / Creative Director</p>
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
          title={<>ความซื่อสัตย์สำคัญกว่า <em className="text-cinnabar">การรับทุกงาน.</em></>}
          intro="เราจะบอกตรง ๆ ถ้า:"
        />
        <div className="mt-12 grid grid-cols-1 gap-4 md:gap-5">
          {notForYou.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.06}>
              <div className="card-soft grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-12 items-baseline p-8 md:p-10">
                <div className="font-serif text-cinnabar text-[28px] md:text-[36px] leading-none tabular-nums">{p.n}</div>
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
      title={<>นั่นแหละคือ <em className="text-cinnabar">บรีฟ</em> ที่เราถนัด<span className="text-cinnabar">.</span></>}
      subtitle="เล่าโจทย์และเงื่อนไขของแบรนด์มาได้เลย — ไม่มีข้อผูกมัด."
      primary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
      secondary={{ label: "ดูผลงาน", to: "/work" }}
      tone="snow"
    />
  </div>
);

export default About;
