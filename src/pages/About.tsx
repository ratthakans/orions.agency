import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";
import teamCd from "@/assets/team-cd.jpg";
import teamStrategist from "@/assets/team-strategist.jpg";
import teamArtDirector from "@/assets/team-artdirector.jpg";
import teamProducer from "@/assets/team-producer.jpg";
import teamDop from "@/assets/team-dop.jpg";
import teamEditor from "@/assets/team-editor.jpg";

// NOTE: placeholder portraits by role — swap with real team photos/names before launch.
const people = [
  { role: "Creative Director",         img: teamCd },
  { role: "Strategist",                img: teamStrategist },
  { role: "Art Director",              img: teamArtDirector },
  { role: "Producer",                  img: teamProducer },
  { role: "Director of Photography",   img: teamDop },
  { role: "Editor",                    img: teamEditor },
];

const principles = [
  { n: "i.",   en: "พูดตรง",              th: "บอกข้อจำกัดครบทั้งสองด้าน ถ้ายังไม่พร้อม เราบอกตรง ๆ" },
  { n: "ii.",  en: "ขายผล ไม่ใช่จำนวนโพสต์", th: "ผูกงานไว้กับผลที่วัดได้ ไม่ใช่จำนวนชิ้นงาน" },
  { n: "iii.", en: "ข้อจำกัดคือบรีฟ",       th: "เราออกแบบไอเดียรอบเงื่อนไข ไม่หนีมัน" },
  { n: "iv.",  en: "มองยาว",              th: "สร้างแบรนด์ที่ถูกจำ ไม่ใช่กระแสที่ผ่านไป" },
];

const notForYou = [
  { n: "01", th: "คุณต้องการแค่ยอดให้เร็วที่สุด โดยไม่สนภาพจำระยะยาว — performance shop เพียว ๆ อาจคุ้มกว่า" },
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

    {/* 01 — MANIFESTO */}
    <section className="section-ink min-h-[88vh] flex flex-col border-b border-foreground/15">
      <div className="px-6 md:px-10 pt-28 md:pt-32 pb-16 md:pb-20 flex-1 flex flex-col justify-center max-w-[1280px] mx-auto w-full">
        <SectionLabel index="01" label="What we believe" />
        <Reveal delay={0.1}>
          <h1 lang="th" className="mt-10 h-display-lg max-w-[20ch] thai-wrap">
            พูดให้ดังที่สุด ไม่เท่าพูดให้ <em className="italic text-cinnabar">ถูก.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p lang="th" className="mt-8 max-w-[680px] font-thai thai-wrap text-[16px] md:text-[18px] leading-[1.7] text-foreground/80">
            ถูกเรื่อง · ถูกคน · ถูกเวลา — และงานที่ดีที่สุดมักเกิดขึ้นใต้ข้อจำกัด ไม่ใช่ในที่ที่ทำอะไรก็ได้.
          </p>
        </Reveal>
      </div>

      <div className="px-6 md:px-10 pb-24 max-w-[1280px] mx-auto w-full">
        <div className="border-t border-foreground/20 pt-12 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16">
          <Reveal>
            <p lang="th" className="editorial-quote text-[17px] md:text-[21px]">
              ทุกแบรนด์ที่มาหาเรามีอุปสรรคของตัวเอง — คาเฟ่ที่เปิดบนถนนที่มีอีกสิบร้าน · แบรนด์แฟชันที่ต้องมีตัวตนในตลาดที่อิ่มตัว · พรรคการเมืองที่กฎหมายจำกัดเกือบทุกคำ · งานของเราเหมือนกันเสมอ: หาเรื่องที่จริง แล้ว refine มันจนคมพอจะลงในกรอบนั้นได้.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="principle-block h-full">
              <div className="principle-block__eyebrow">— Our stance</div>
              <div lang="th" className="mt-6 font-thai thai-wrap text-[26px] md:text-[34px] leading-[1.25] font-medium tracking-[0]">
                เราไม่หนีข้อจำกัด — <span className="text-cinnabar">เราถือว่ามันคือบรีฟ.</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* 02 — WHAT WE HOLD */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="02" label="What we hold" />
        <Reveal delay={0.1}>
          <h2 lang="th" className="mt-10 h-display-md max-w-[22ch] thai-wrap">
            สี่อย่างที่เรา <em className="italic text-cinnabar">ไม่ยอมต่อรอง.</em>
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 border border-foreground/20">
          {principles.map((p, i) => (
            <Reveal key={p.n} delay={(i % 2) * 0.06}>
              <div className={`p-10 md:p-12 h-full ${i % 2 === 1 ? "sm:border-l border-foreground/20" : ""} ${i >= 2 ? "border-t border-foreground/20" : ""} ${i > 0 && i < 2 ? "border-t sm:border-t-0 border-foreground/20" : ""}`}>
                <div className="font-serif italic text-cinnabar text-[22px] leading-none">{p.n}</div>
                <h3 lang="th" className="mt-8 font-thai text-[24px] md:text-[28px] leading-[1.1] tracking-[-0.01em] font-medium">{p.en}</h3>
                <p lang="th" className="mt-4 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">{p.th}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-12 border-l-2 border-cinnabar pl-6 md:pl-8 max-w-[760px]">
            <p lang="th" className="font-serif italic text-[17px] md:text-[21px] leading-[1.5] tracking-[-0.005em]">
              AI ช่วยให้เราเร็วขึ้นและทดสอบได้มากขึ้น — แต่คนยังเป็นคนคิดและรับผิดชอบงาน.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 03 — PEOPLE / STUDIO */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="03" label="The studio" />
        <Reveal delay={0.1}>
          <h2 lang="th" className="mt-10 h-display-md max-w-[24ch] thai-wrap">
            คนยังเป็นคนคิด — และ <em className="italic text-cinnabar">รับผิดชอบงาน.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p lang="th" className="mt-6 max-w-[640px] font-thai thai-wrap text-[15px] md:text-[16px] leading-[1.7] text-muted-foreground">
            ทีมเดียวตั้งแต่กลยุทธ์ถึงการผลิต — strategist, creative director, art director, producer, ช่างภาพ และ editor ที่อยู่กับงานของคุณจริง ไม่ใช่สายพาน.
          </p>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {people.map((p, i) => (
            <Reveal key={p.role} delay={(i % 6) * 0.05}>
              <div className="group">
                <div className="relative w-full overflow-hidden bg-muted" style={{ aspectRatio: "3 / 4" }}>
                  <img
                    src={p.img}
                    alt={p.role}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-500"
                  />
                </div>
                <div className="mt-3 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">{p.role}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 04 — WHEN WE'RE NOT THE ANSWER */}
    <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="04" label="When we're not the answer" />
        <Reveal delay={0.1}>
          <h2 lang="th" className="mt-10 h-display-md max-w-[24ch] thai-wrap">
            ความซื่อสัตย์สำคัญกว่า <em className="italic text-cinnabar">การรับทุกงาน.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p lang="th" className="mt-8 max-w-[620px] font-thai thai-wrap text-[15px] md:text-[16px] leading-[1.7] text-muted-foreground">
            เราจะบอกตรง ๆ ถ้า:
          </p>
        </Reveal>
        <div className="mt-12 border-t border-foreground/20">
          {notForYou.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.06}>
              <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-12 items-baseline py-8 md:py-10 border-b border-foreground/20">
                <div className="font-serif italic text-cinnabar text-[28px] md:text-[36px] leading-none tabular-nums">{p.n}</div>
                <p lang="th" className="font-thai thai-wrap text-[16px] md:text-[19px] leading-[1.6] text-foreground/90">{p.th}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 04 — CTA */}
    <CTABand
      eyebrow="When you're ready"
      title={<>นั่นแหละคือ <em className="italic text-cinnabar">บรีฟ</em> ที่เราถนัด.</>}
      subtitle="ไม่แน่ใจว่าควรเริ่มตรงไหน? ทำ Brand Audit 3 นาที — หรือทักมาคุยเลย."
      primary={{ label: "ทำ Brand Audit", to: "/diagnostic" }}
      secondary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
      tone="snow"
    />
  </div>
);

export default About;
