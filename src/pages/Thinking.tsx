import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";

const SITE_URL = "https://orions.agency";

// All copy on this page is the founder's brand book, verbatim.

const contents = [
  { n: "01", t: "Every star has its own light.", id: "big-idea" },
  { n: "02", t: "We reveal the constellation.", id: "constellation" },
  { n: "03", t: "Less noise. More meaning.", id: "belief" },
  { n: "04", t: "Understand before we create.", id: "stories" },
  { n: "05", t: "An act of subtraction.", id: "refine" },
  { n: "06", t: "Manifesto", id: "manifesto" },
];

/* Point → line → shape → meaning, set as a progression rather than drawn as
   stars: the constellation is a principle, not an aesthetic. */
const cascade = [
  ["จากจุด", "กลายเป็นเส้น"],
  ["จากเส้น", "กลายเป็นรูปทรง"],
  ["จากรูปทรง", "กลายเป็นความหมาย"],
];

const Chapter = ({ id, n, label, children, tone }: { id: string; n: string; label: string; children: React.ReactNode; tone?: "surface" }) => (
  <section id={id} className={`px-6 md:px-10 border-t border-foreground/15 scroll-mt-16 ${tone === "surface" ? "bg-surface" : ""}`}>
    <div className="max-w-[1400px] mx-auto py-28 md:py-44 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20 items-baseline">
      <SectionLabel index={n} label={label} />
      <div>{children}</div>
    </div>
  </section>
);

const Body = ({ children }: { children: React.ReactNode }) => (
  <div lang="th" className="mt-10 max-w-[640px] font-thai thai-wrap text-[15px] md:text-[18px] leading-[1.9] text-foreground/80 space-y-5">
    {children}
  </div>
);

const Line = ({ children }: { children: React.ReactNode }) => (
  <p className="mt-12 pt-8 border-t border-foreground/15 max-w-[640px] font-serif text-[22px] md:text-[34px] leading-[1.2] tracking-[-0.03em] text-foreground">
    {children}
  </p>
);

const Thinking = () => (
  <div>
    <SEO
      title="Thinking — Every star has its own light · ØRIONS"
      description="ดาวทุกดวงมีแสงของตัวเอง — แต่เมื่อเริ่มเชื่อมบางดวงเข้าด้วยกัน จุดกลายเป็นเส้น เส้นกลายเป็นรูปทรง รูปทรงกลายเป็นความหมาย. We don't create the stars. We reveal the constellation."
      path="/thinking"
      schema={[
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Thinking", item: `${SITE_URL}/thinking` },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Every star has its own light. We reveal the constellation.",
          description: "Most brands don't need more content. They need more clarity. Stories, refined.",
          image: `${SITE_URL}/og.jpg`,
          author: { "@type": "Organization", name: "ØRIONS", url: SITE_URL },
          publisher: { "@type": "Organization", name: "ØRIONS", url: SITE_URL },
          mainEntityOfPage: `${SITE_URL}/thinking`,
        },
      ]}
    />

    {/* HERO */}
    <section className="section-ink px-6 md:px-10 min-h-[80svh] flex flex-col justify-center">
      <div className="max-w-[1400px] mx-auto w-full pt-32 md:pt-40 pb-20 md:pb-28">
        <Reveal>
          <SectionLabel label="Thinking" />
        </Reveal>
        <Reveal delay={0.05} emphasis="lead">
          <h1 className="mt-10 h-display-xl max-w-[14ch]">
            Every star has <em className="text-foreground">its own light.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p lang="th" className="mt-10 max-w-[640px] font-thai text-[19px] md:text-[25px] leading-[1.6] text-foreground/80 thai-wrap">
            ดาวทุกดวงมีแสงของตัวเอง
          </p>
        </Reveal>
      </div>
    </section>

    {/* CONTENTS */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-16 md:py-24">
        <div className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-muted-foreground">— Contents</div>
        <ol className="mt-10 border-t border-foreground/12">
          {contents.map((c) => (
            <li key={c.n}>
              <a href={`#${c.id}`} className="grid grid-cols-[52px_1fr] md:grid-cols-[110px_1fr] gap-4 md:gap-10 items-baseline border-b border-foreground/12 py-6 md:py-7 hover:bg-foreground/[0.03] transition-colors">
                <span className="font-mono text-[12px] md:text-[13px] tabular-nums text-muted-foreground">{c.n}</span>
                <span className="font-serif text-[20px] md:text-[34px] leading-none tracking-[-0.03em] text-foreground/90">{c.t}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* 01 — THE BIG IDEA */}
    <Chapter id="big-idea" n="01" label="The Big Idea">
      <h2 className="h-display-md max-w-[18ch]">Every star has its own light.</h2>
      <Body>
        <p>ดาวทุกดวงมีแสงของตัวเอง</p>
        <p>แต่เมื่อเรามองท้องฟ้าที่เต็มไปด้วยดาว สิ่งที่เราเห็นอาจเป็นเพียงจุดแสงนับพันที่กระจัดกระจายอยู่เต็มฟ้า</p>
        <p>จนกระทั่งเราเริ่มเชื่อมบางดวงเข้าด้วยกัน</p>
      </Body>
      <div lang="th" className="mt-10 max-w-[640px] border-t border-foreground/15">
        {cascade.map(([from, to]) => (
          <div key={from} className="grid grid-cols-[1fr_auto_1fr] items-baseline gap-4 py-4 border-b border-foreground/12 font-thai text-[16px] md:text-[20px]">
            <span className="text-muted-foreground">{from}</span>
            <span aria-hidden className="text-foreground/40">→</span>
            <span className="text-foreground">{to}</span>
          </div>
        ))}
      </div>
      <Body>
        <p>และจากความหมาย เกิดเป็นเรื่องราวที่มนุษย์เล่าต่อกันมาหลายพันปี</p>
        <p>เราเรียกมันว่า <span className="text-foreground">Constellation.</span></p>
        <p>สำหรับเรา แบรนด์ก็ไม่ต่างกัน แบรนด์หนึ่งแบรนด์ประกอบขึ้นจากรายละเอียดมากมาย</p>
        <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-foreground leading-[2.2]">
          เรื่องราว · ผู้คน · ผลิตภัณฑ์ · ความเชื่อ · วัฒนธรรม · ประสบการณ์ · ความตั้งใจ · และการตัดสินใจนับไม่ถ้วน
        </p>
        <p>แต่ไม่ใช่ทุกอย่างจะต้องถูกเล่า — หน้าที่ของ ORIONS คือการค้นหาว่า</p>
      </Body>
      <div lang="th" className="mt-8 max-w-[640px] font-thai text-[19px] md:text-[26px] leading-[1.5] text-foreground space-y-1">
        <p>อะไรคือดาวที่ควรถูกมองเห็น</p>
        <p>อะไรควรถูกเชื่อมเข้าด้วยกัน</p>
        <p>และเรื่องราวไหนที่ควรถูกจดจำ</p>
      </div>
    </Chapter>

    {/* 02 — WE DON'T CREATE THE STARS */}
    <Chapter id="constellation" n="02" label="We don't create the stars" tone="surface">
      <h2 className="h-display-md max-w-[18ch]">We reveal the constellation.</h2>
      <Body>
        <p>เราไม่ได้เข้าไปสร้างตัวตนใหม่ให้แบรนด์ เพียงเพื่อทำให้มันดูน่าสนใจ</p>
        <p>เราเข้าไปทำความเข้าใจว่า อะไรคือสิ่งที่แบรนด์มีอยู่แล้ว · อะไรคือสิ่งที่แบรนด์เชื่อจริง · และอะไรคือสิ่งที่คนควรมองเห็น</p>
        <p>จากนั้นจึงขัดเกลาให้เรื่องนั้นชัดขึ้น ผ่าน</p>
        <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-foreground leading-[2.2]">
          Brand Strategy · Creative Direction · Identity · Campaign · Film · Content · Digital Experience
        </p>
        <p>และรูปแบบอื่น ๆ ที่เหมาะกับเรื่องนั้นจริง ๆ</p>
      </Body>
      <Line>Different formats. One story.</Line>
    </Chapter>

    {/* 03 — OUR BELIEF */}
    <Chapter id="belief" n="03" label="Our Belief">
      <h2 className="h-display-md max-w-[20ch]">
        Most brands don&rsquo;t need more content. <em className="text-foreground">They need more clarity.</em>
      </h2>
      <Body>
        <p>วันนี้โลกไม่ได้ขาด Content</p>
        <p>เราอยู่ในโลกที่มีสิ่งต่าง ๆ ถูกผลิตออกมามากเกินกว่าที่คนจะจำได้ — โพสต์มากขึ้น วิดีโอมากขึ้น Campaign มากขึ้น ข้อความมากขึ้น เสียงดังขึ้น</p>
        <p>แต่การมีสิ่งให้พูดมากขึ้น ไม่ได้หมายความว่าคนจะเข้าใจแบรนด์มากขึ้น</p>
        <p>ORIONS จึงไม่ได้เริ่มจากคำถามว่า <span className="text-foreground">“เราควรทำ Content อะไร?”</span> แต่เริ่มจาก <span className="text-foreground">“อะไรคือสิ่งที่ควรถูกพูด?”</span></p>
        <p>เพราะ Creativity ที่ดี ไม่ใช่การเติมสิ่งต่าง ๆ เข้าไปเรื่อย ๆ แต่คือการรู้ว่า อะไรสำคัญ · อะไรไม่จำเป็น · อะไรควรถูกขยาย · และอะไรควรถูกตัดออก</p>
      </Body>
      <Line>Less noise. More meaning.</Line>
    </Chapter>

    {/* 04 — STORIES */}
    <Chapter id="stories" n="04" label="Stories" tone="surface">
      <h2 className="h-display-md max-w-[18ch]">Understand before we create.</h2>
      <Body>
        <p>ก่อนที่จะสร้าง เราต้องเข้าใจก่อน</p>
        <p>เราไม่ได้เริ่มจาก Reference · ไม่ได้เริ่มจาก Format · ไม่ได้เริ่มจาก Trend · และไม่ได้เริ่มจาก Execution</p>
        <p className="text-foreground">เราเริ่มจากแบรนด์</p>
      </Body>
      <ul className="mt-10 max-w-[640px] border-t border-foreground/15">
        {["Why does it exist?", "What does it believe?", "Why should anyone care?", "What makes it different?", "What should people remember?"].map((q) => (
          <li key={q} className="py-4 border-b border-foreground/12 font-serif text-[18px] md:text-[24px] leading-[1.25] tracking-[-0.02em]">{q}</li>
        ))}
      </ul>
      <Body>
        <p>เพราะถ้าเราไม่เข้าใจแบรนด์จริง ๆ งาน Creative อาจดูดี แต่ไม่จำเป็นว่าจะเป็นงานของแบรนด์นั้นจริง ๆ</p>
      </Body>
      <Line>Without understanding, creativity becomes decoration.</Line>
    </Chapter>

    {/* 05 — REFINE */}
    <Chapter id="refine" n="05" label="Refine">
      <h2 className="h-display-md max-w-[20ch]">Good creative is often an act of subtraction.</h2>
      <Body>
        <p>คำว่า <span className="text-foreground">Refine</span> สำหรับ ORIONS ไม่ได้หมายถึงแค่การทำให้งานดูประณีต แต่มันคือกระบวนการของการเลือก</p>
        <p>เลือกสิ่งที่สำคัญ · ตัดสิ่งที่ไม่จำเป็น · ทำ Idea ให้คมขึ้น · ทำ Message ให้ชัดขึ้น · ทำ Visual ให้มีเหตุผล · ทำทุกองค์ประกอบให้พูดเรื่องเดียวกัน</p>
        <p>เราขัดเกลาทุกอย่าง ตั้งแต่หนึ่งประโยค หนึ่งภาพ หนึ่ง Frame หนึ่ง Transition หนึ่ง Typeface ไปจนถึงความคิดใหญ่ของทั้ง Campaign</p>
      </Body>
      <Line>Craft is not the final layer. It is part of the idea.</Line>
    </Chapter>

    {/* 06 — MANIFESTO */}
    <section id="manifesto" className="section-ink px-6 md:px-10 border-t border-foreground/15 scroll-mt-16">
      <div className="max-w-[900px] mx-auto py-28 md:py-44">
        <SectionLabel index="06" label="Manifesto" />
        <div lang="th" className="mt-12 font-thai thai-wrap text-[18px] md:text-[24px] leading-[1.75] text-foreground/85 space-y-6">
          <p>ทุกแบรนด์มีเรื่องราวอยู่แล้ว</p>
          <p>แต่ไม่ใช่ทุกเรื่องจะถูกมองเห็น</p>
          <p>บางเรื่องถูกซ่อนอยู่ในรายละเอียด<br />บางเรื่องถูกกลบด้วยสิ่งที่ไม่จำเป็น<br />บางเรื่องมีคุณค่า แต่ยังไม่เคยถูกเล่าอย่างที่ควรจะเป็น</p>
          <p>เราเชื่อว่า Creativity ไม่ได้เริ่มจากการสร้างสิ่งใหม่เสมอไป</p>
          <p>บางครั้งมันเริ่มจากการมองสิ่งเดิมให้ลึกพอ</p>
          <p>มองให้เห็นว่าอะไรสำคัญ<br />อะไรเชื่อมโยงกัน<br />อะไรควรถูกเก็บไว้<br />และอะไรควรถูกตัดออก</p>
          <p>จนสิ่งที่เคยกระจัดกระจาย กลายเป็นภาพเดียวกัน</p>
          <p>เหมือนดาวบนท้องฟ้า — แต่ละดวงมีแสงอยู่แล้ว เราเพียงช่วยเชื่อมมันเข้าด้วยกัน จนคนมองเห็นเรื่องราว</p>
        </div>
        <p className="mt-14 pt-10 border-t border-foreground/15 font-serif text-[26px] md:text-[44px] leading-[1.12] tracking-[-0.035em] text-foreground">
          We don&rsquo;t create the stars.<br />We reveal the constellation.
        </p>
        <p className="mt-10 font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">ØRIONS — Stories, refined.</p>
      </div>
    </section>

    <CTABand
      eyebrow="Contact"
      title={<>Have a story <em className="text-foreground">worth refining?</em></>}
      primary={{ label: "Talk to ORIONS", to: "/contact" }}
      secondary={{ label: "ดูผลงาน", to: "/work" }}
      tone="snow"
    />
  </div>
);

export default Thinking;
