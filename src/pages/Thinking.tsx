import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";
import SignalField from "@/components/SignalField";
import Picture from "@/components/Picture";
import proofImg from "@/assets/thinking/assets.jpg?as=picture";

const SITE_URL = "https://orions.agency";

// The manifesto's spine — shown as an editorial contents index up front.
const contents = [
  { n: "01", t: "The Noise" },
  { n: "02", t: "The Great Filter" },
  { n: "03", t: "Stories, Refined." },
  { n: "04", t: "The Record" },
  { n: "05", t: "Limited by Design" },
];

// The Noise — observable conditions, without unsupported headline statistics.
const noise = [
  { k: "Too much", d: "คอนเทนต์เพิ่มขึ้นทุกวัน แต่เวลาที่คนให้แต่ละแบรนด์กลับสั้นลง" },
  { k: "Too similar", d: "เครื่องมือเดียวกันทำให้งานจำนวนมากเริ่มพูดและหน้าตาคล้ายกัน" },
  { k: "Too costly", d: "เมื่อสารไม่ชัด แบรนด์ต้องซื้อการมองเห็นซ้ำเพื่อให้คนจำได้" },
];

// Life on the other side of the filter.
const crossed = [
  "ลูกค้ากลับมาเอง",
  "ต้นทุนหาลูกค้าลดลงทุกปี",
  "ไม่ต้องลดราคาให้ใครอีก",
];

const Thinking = () => (
  <div>
    <SEO
      title="Manifesto — Every brand is a point of light · ØRIONS"
      description="แนวคิดของ ORIONS — โลกไม่ได้ต้องการเสียงที่ดังขึ้น แต่โหยหาความลึก. เราวินิจฉัยก่อน แล้วลงมือแก้ด้วยงานคราฟต์ ยกระดับด้วย VÆST ปัญญาที่มีรสนิยม. เรื่องที่คมที่สุดชนะ ไม่ใช่เรื่องที่ดังที่สุด — where aesthetic meets algorithm."
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
          headline: "The ØRIONS Manifesto — Every brand is a point of light.",
          description: "โลกไม่ได้ต้องการเสียงที่ดังขึ้น แต่โหยหาความลึก. ทำไมเรื่องที่คมที่สุดชนะ ไม่ใช่เรื่องที่ดังที่สุด — The Noise, The Great Filter และเหตุผลที่เรารับงานจำกัด. Where aesthetic meets algorithm.",
          image: `${SITE_URL}/og.jpg`,
          author: { "@type": "Organization", name: "ØRIONS", url: SITE_URL },
          publisher: { "@type": "Organization", name: "ØRIONS", url: SITE_URL },
          mainEntityOfPage: `${SITE_URL}/thinking`,
        },
      ]}
    />

    {/* HERO — every brand is a point of light */}
    <section className="relative overflow-hidden section-ink px-6 md:px-10 min-h-[90svh] flex flex-col justify-center">
      <SignalField fx={0.78} fy={0.42} seed={5} intensity={0.9}
        className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="relative z-10 max-w-[1400px] mx-auto w-full pt-32 md:pt-40 pb-20 md:pb-28">
        <Reveal>
          <SectionLabel label="The Manifesto" />
        </Reveal>
        <Reveal delay={0.05} emphasis="lead">
          <h1 className="mt-10 font-serif font-medium text-[clamp(44px,8vw,120px)] leading-[0.98] tracking-[-0.025em] max-w-[15ch]">
            Every brand is a <em className="text-cinnabar italic">point of light.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p lang="th" className="mt-10 max-w-[720px] font-serif text-[20px] md:text-[27px] leading-[1.5] text-foreground/80 thai-wrap">
            ทุกแบรนด์คือจุดแสงหนึ่งจุด. ปัญหาคือ — ท้องฟ้าวันนี้สว่างจนไม่มีใครมองเห็นดาวดวงไหนอีกแล้ว.
          </p>
        </Reveal>
      </div>
    </section>

    {/* CONTENTS — editorial index of the argument */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-16 md:py-24">
        <div className="font-mono text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-muted-foreground">— The argument</div>
        <ol className="mt-10 border-t border-foreground/12">
          {contents.map((c) => (
            <li key={c.n} className="grid grid-cols-[52px_1fr] md:grid-cols-[110px_1fr] gap-4 md:gap-10 items-baseline border-b border-foreground/12 py-6 md:py-8">
              <span className="font-serif text-foreground text-[18px] md:text-[26px] tabular-nums leading-none">{c.n}</span>
              <span className="font-serif text-[24px] md:text-[40px] leading-none tracking-[-0.015em] text-foreground/85">{c.t}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* 01 — THE NOISE */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-28 md:py-52 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20 items-baseline">
        <SectionLabel index="01" label="The Noise" />
        <div>
          <Reveal delay={0.05}>
            <h2 lang="th" className="font-serif text-[34px] md:text-[60px] leading-[1.2] tracking-[-0.015em] max-w-[20ch] thai-wrap">
              ยุคที่ทุกคนตะโกน จนไม่มีใคร<em className="text-foreground italic">ได้ยินใคร.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p lang="th" className="mt-8 max-w-[640px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.8] text-foreground/80">
              โลกไม่ได้ขาดคอนเทนต์ — โลก<span className="text-foreground">กลบเสียงตัวเองด้วยมัน</span>.
            </p>
          </Reveal>
          <div className="mt-10 border-t border-foreground/12 max-w-[640px]">
            {noise.map((s, i) => (
              <Reveal key={s.k} delay={i * 0.06} emphasis="quiet">
                <div className="grid grid-cols-[130px_1fr] md:grid-cols-[190px_1fr] gap-4 md:gap-8 py-6 md:py-7 border-b border-foreground/12 items-baseline">
                  <div lang="th" className="font-serif text-foreground text-[26px] md:text-[40px] leading-none tracking-[-0.01em]">{s.k}</div>
                  <p lang="th" className="font-thai thai-wrap text-[13px] md:text-[14px] leading-[1.8] text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <p lang="th" className="mt-10 max-w-[640px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.8] text-foreground/80">
              ผลคือวงจรที่องค์กรจำนวนมากติดอยู่ — เพิ่มงบสื่อ → เร่งโปรโมชัน → ทวงยอดคืนเป็นรายไตรมาส. ทุกครั้งที่ทำ ต้นทุนของการถูกจำก็แพงขึ้นกว่าเดิม และไม่มีไตรมาสไหนที่หยุดจ่ายได้.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <blockquote lang="th" className="mt-10 font-serif text-[26px] md:text-[46px] leading-[1.35] tracking-[-0.01em] text-foreground max-w-[24ch] thai-wrap">
              นี่ไม่ใช่การเติบโต — นี่คือการ<em className="text-foreground italic">ซื้อเสียงของตัวเองคืนทุกไตรมาส.</em>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>

    {/* 02 — THE GREAT FILTER */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-28 md:py-52 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20 items-baseline">
        <SectionLabel index="02" label="The Great Filter" />
        <div>
          <Reveal delay={0.05}>
            <h2 lang="th" className="font-serif text-[34px] md:text-[60px] leading-[1.2] tracking-[-0.015em] max-w-[22ch] thai-wrap">
              เส้นแบ่งระหว่างแบรนด์ที่คนจำได้ กับแบรนด์ที่<em className="text-foreground italic">คนลืม.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p lang="th" className="mt-8 max-w-[640px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.8] text-foreground/80">
              ในทางดาราศาสตร์ <span className="text-foreground italic">The Great Filter</span> คือกำแพงที่เกือบทุกอารยธรรมข้ามไม่พ้น. ในทางธุรกิจ มันคือเส้นบางๆ ที่ทุกแบรนด์ต้องเจอ — เพราะถึงจุดหนึ่ง งบการตลาดจะตัน และไม่มีงบไหนแพงพอที่จะ<span className="text-foreground">ซื้อใจ</span>คน.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <blockquote lang="th" className="mt-10 font-serif text-[26px] md:text-[46px] leading-[1.35] tracking-[-0.01em] text-foreground max-w-[24ch] thai-wrap">
              เงินพาคุณมาถึงหน้ากำแพงได้ — <em className="text-foreground italic">แต่พาข้ามไปไม่ได้.</em>
            </blockquote>
          </Reveal>
          <Reveal delay={0.18}>
            <p lang="th" className="mt-8 max-w-[640px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.8] text-foreground/80">
              และนี่คือจุดที่ธุรกิจส่วนใหญ่พลาด — พวกเขาแก้ <span className="text-foreground">อาการ</span> (ยอดตก → ยิงแอดเพิ่ม → ลดราคา) โดยไม่เคยวินิจฉัย <span className="text-foreground">โรค</span> (แบรนด์ไม่มีเรื่องที่คมพอให้คนจำ).
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p lang="th" className="mt-6 max-w-[640px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.8] text-foreground/80">
              สิ่งเดียวที่ข้ามกำแพงนี้ได้ คือ<span className="text-foreground">เรื่องราวที่คมพอ</span>. แบรนด์ที่ข้ามไปแล้ว ชีวิตต่างออกไปโดยสิ้นเชิง:
            </p>
          </Reveal>
          <div className="mt-7 max-w-[640px] border-t border-foreground/12">
            {crossed.map((c, i) => (
              <Reveal key={c} delay={i * 0.05} emphasis="quiet">
                <div className="flex items-baseline gap-5 py-4 border-b border-foreground/12">
                  <span className="font-serif italic text-foreground text-[15px] leading-none">◦</span>
                  <p lang="th" className="font-thai thai-wrap text-[15px] md:text-[16px] leading-[1.8] text-foreground/85">{c}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.25}>
            <p lang="th" className="mt-10 max-w-[640px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.8] text-foreground/80">
              Creative จึงไม่ใช่ค่าใช้จ่ายที่ควรถูกตัดเป็นอันดับแรก — <span className="text-foreground">มันคืออาวุธเดียวที่พาคุณข้ามไป.</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    {/* 03 — STORIES, REFINED. (noise → signal, the lens) */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-28 md:py-52">
        <SectionLabel index="03" label="Stories, Refined." />
        <Reveal delay={0.05}>
          <h2 lang="th" className="mt-8 font-serif text-[34px] md:text-[60px] leading-[1.2] tracking-[-0.015em] max-w-[22ch] thai-wrap">
            เราไม่ได้เพิ่มแสงให้คุณ — เรา<em className="text-foreground italic">โฟกัสมัน.</em>
          </h2>
        </Reveal>

        {/* the thesis, made visual — scattered vs focused */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <Reveal>
            <div className="card-soft h-full p-8 md:p-10">
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">แสงที่กระจาย</div>
              <h3 className="mt-4 font-serif text-[30px] md:text-[42px] leading-none tracking-[-0.02em] text-foreground/70">Noise.</h3>
              <p lang="th" className="mt-5 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.8] text-muted-foreground">
                ทุกแบรนด์แข่งกันทำ "ให้เยอะที่สุด" — งานแมสจึงกลืนหายไปในฟีด ก่อนจะทิ้งความหมายไว้กับใคร.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card-accent h-full p-8 md:p-10">
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60">แสงที่ถูกรวมผ่านเลนส์</div>
              <h3 className="mt-4 font-serif italic text-[30px] md:text-[42px] leading-none tracking-[-0.02em] text-cinnabar">Signal.</h3>
              <p lang="th" className="mt-5 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.8] text-foreground/85">
                เราทำตรงข้าม — คัด สกัด ตัดเสียงรบกวนออก จนเหลือแต่ข้อความที่คมที่สุดของคุณ. <span className="text-foreground">ØRIONS คือเลนส์นั้น.</span>
              </p>
            </div>
          </Reveal>
        </div>

        {/* how we work — like a doctor, not a pharmacy */}
        {/* The method itself lives on /practice — one model, one place. This page
            states the belief; it does not re-list the offer. */}
        <div className="mt-16 md:mt-20">
          <Reveal emphasis="lead">
            <blockquote lang="th" className="font-serif text-[26px] md:text-[46px] leading-[1.3] tracking-[-0.015em] text-foreground max-w-[22ch]">
              เราไม่จ่ายยาให้ใคร <em className="text-foreground italic">ที่ไม่ให้เราตรวจ.</em>
            </blockquote>
          </Reveal>
          <Reveal delay={0.08}>
            <p lang="th" className="mt-8 font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.8] text-foreground/80 max-w-[640px]">
              ความเชื่อนี้ถูกแปลเป็นวิธีรับงานที่มีลำดับและมีประตูเดียว — สี่ขั้น
              ตั้งแต่การวินิจฉัยว่าปัญหาจริงอยู่ตรงไหน ไปจนถึงงานที่ออกสู่ตลาดซึ่งเราลงมือทำเอง.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <Link to="/practice" viewTransition className="cta-link mt-10">
              <span>ดูวิธีที่เรารับงาน</span><ArrowUpRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>

    {/* 04 — THE PROOF */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-28 md:py-52 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-start">
        <div>
          <SectionLabel index="04" label="The Record" />
          <Reveal delay={0.05}>
            <h2 lang="th" className="mt-8 font-serif text-[32px] md:text-[52px] leading-[1.2] tracking-[-0.015em] max-w-[22ch] thai-wrap">
              คำวินิจฉัยที่ดี ดูจากสิ่งที่<em className="text-foreground italic">กล้าตัดทิ้ง.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p lang="th" className="mt-8 max-w-[640px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.8] text-foreground/80">
              ทุกเคสในบันทึกของเราเปิดด้วยอาการที่ลูกค้าเดินเข้ามาบอก และปิดด้วยรายการสิ่งที่เราขอตัดทิ้ง — รวมถึงสิ่งที่ลูกค้าอยากได้ แต่เราปฏิเสธ. <span className="text-foreground">ส่วนหลังนั่นแหละ ที่บอกวิธีคิดของเราได้ตรงที่สุด.</span>
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link to="/work" viewTransition className="cta-link cta-link-muted mt-10">
              <span>ดูบันทึกคำวินิจฉัย</span><ArrowUpRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div className="hidden lg:block overflow-hidden border border-foreground/15 bg-muted" style={{ aspectRatio: "4 / 5" }}>
            <Picture data={proofImg} alt="" aria-hidden className="w-full h-full object-cover grayscale-[0.3]" />
          </div>
        </Reveal>
      </div>
    </section>

    {/* 05 — LIMITED BY DESIGN */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-28 md:py-52 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20 items-baseline">
        <SectionLabel index="05" label="Limited by Design" />
        <div>
          <Reveal delay={0.05}>
            <h2 lang="th" className="font-serif text-[34px] md:text-[60px] leading-[1.2] tracking-[-0.015em] max-w-[20ch] thai-wrap">
              เรารับงานจำกัด — <em className="text-foreground italic">โดยตั้งใจ.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p lang="th" className="mt-8 max-w-[640px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.8] text-foreground/80">
              <span className="text-foreground">การวินิจฉัยที่ดี ทำแบบสายพานไม่ได้</span> — และงานคราฟต์ที่ดี ไม่เคยเกิดจากการทำเยอะ. เราถามตัวเองด้วยคำถามเดียว — "ทีมยังทุ่มสุดตัวให้ทุกโปรเจกต์ได้อยู่ไหม?" ถ้าคำตอบคือไม่ เราหยุดรับ.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p lang="th" className="mt-6 max-w-[640px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.8] text-foreground/80">
              ทุกโปรเจกต์ที่เราตอบตกลง จึงได้เวลา ได้ความใส่ใจ และได้ทีมที่มองงานของคุณเป็นงานของตัวเอง.
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    <CTABand
      eyebrow="ØRIONS"
      title={<>Don't get louder. <em className="text-foreground">Get unmistakable.</em></>}
      subtitle="เราไม่ทำให้คุณดังขึ้น — เราทำให้คุณเป็นตัวคุณที่ไม่มีใครแทนได้."
      primary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
      secondary={{ label: "ดูผลงาน", to: "/work" }}
      tone="snow"
    />
  </div>
);

export default Thinking;
