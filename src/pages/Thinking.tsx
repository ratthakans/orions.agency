import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";
import TopoField from "@/components/TopoField";
import Picture from "@/components/Picture";
import heroImg from "@/assets/thinking/hero.jpg?as=picture";
import assetsImg from "@/assets/thinking/assets.jpg?as=picture";
import translateImg from "@/assets/thinking/translate.jpg?as=picture";

const SITE_URL = "https://orions.agency";

const assets = [
  { k: "Trust", th: "ความไว้ใจ", d: "เกิดจากทำดีซ้ำๆ จนคนเชื่อ — เกราะที่ทำให้ลูกค้าพร้อมให้อภัยเมื่อแบรนด์พลาด" },
  { k: "Fandom", th: "ความเป็นแฟน", d: "เปลี่ยนลูกค้าเป็นสาวกที่ช่วยเชียร์ขายและออกโรงปกป้องแบรนด์ด้วยความรัก" },
  { k: "Belonging", th: "การเป็นส่วนหนึ่ง", d: "ไม่ใช่บัตรสมาชิกรับส่วนลด แต่คือความภูมิใจที่ได้อยู่ในวัฒนธรรมเดียวกับแบรนด์" },
  { k: "Meaning", th: "ความหมาย", d: "ปักหมุดอุดมการณ์ร่วมกัน — คนรู้สึกว่าแบรนด์ไปในทิศทางเดียวกับชีวิตเขา" },
  { k: "Human Feeling", th: "ความเป็นมนุษย์", d: "เติมจิตวิญญาณให้สิ่งของ — คุณค่าทางใจที่ส่งต่อได้ ไม่ใช่แค่ฟังก์ชัน" },
];

const translates = [
  { k: "Data → Feeling", d: "ถอดตัวเลขและพฤติกรรมบนจอ ให้ออกมาเป็นความรู้สึกส่วนลึก" },
  { k: "Trend → Tension", d: "เปลี่ยนกระแสรอบตัว ให้เป็นประเด็นที่คนอยากขบคิดและถกเถียง" },
  { k: "Product → Meaning", d: "ยกของจากฟังก์ชัน ให้กลายเป็นการสะท้อนตัวตนและรสนิยมของผู้ใช้" },
  { k: "Campaign → Culture", d: "ขยับจากแคมเปญสั้นๆ ไปสู่วัฒนธรรมร่วมที่คนอยากเข้ามามีส่วน" },
];

const questions = [
  { n: "01", q: "คนจะ “รู้สึก” อะไร?" },
  { n: "02", q: "คนจะ “พูดต่อ” มั้ย?" },
  { n: "03", q: "ถ้าไม่มีโลโก้… งานยังน่าสนใจมั้ย?" },
];

const Thinking = () => (
  <div>
    <SEO
      title="แนวคิด — Emotion Economy · ØRIONS"
      description="มุมมองของ ORIONS: โลกกำลังเปลี่ยนจาก Information Economy สู่ Emotion Economy — Logic Convinces, Emotion Converts. AI ทำได้แค่งานไร้หัวใจ ส่วนสิ่งที่ลอกไม่ได้คือ Trust · Fandom · Belonging · Meaning · Human Feeling."
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
          headline: "Emotion Economy — ทำไมอารมณ์คือสนามใหม่ของแบรนด์",
          description: "Logic Convinces, Emotion Converts. มุมมองของ ORIONS ต่อยุค Emotion Economy และสิ่งที่ AI ลอกเลียนแบบไม่ได้.",
          image: `${SITE_URL}/og.jpg`,
          author: { "@type": "Organization", name: "ØRIONS", url: SITE_URL },
          publisher: { "@type": "Organization", name: "ØRIONS", url: SITE_URL },
          mainEntityOfPage: `${SITE_URL}/thinking`,
        },
      ]}
    />

    {/* HERO — editorial */}
    <section className="relative overflow-hidden section-ink px-6 md:px-10">
      <TopoField fx={0.18} fy={0.5} seed={5} intensity={0.22}
        className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="relative z-10 max-w-[1180px] mx-auto pt-28 md:pt-36 pb-16 md:pb-20">
        <SectionLabel label="Our POV · แนวคิด" />
        <Reveal delay={0.05}>
          <h1 lang="th" className="mt-10 font-serif font-medium text-[clamp(38px,6.5vw,96px)] leading-[1.05] tracking-[-0.02em] max-w-[18ch] thai-wrap">
            โลกกำลังออกจากยุคข้อมูล — เข้าสู่ <em className="text-cinnabar italic">ยุคของอารมณ์.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p lang="th" className="mt-10 max-w-[680px] font-serif text-[18px] md:text-[23px] leading-[1.55] text-foreground/80">
            จาก <span className="italic">Information Economy</span> ที่ใครมีข้อมูลมากกว่าชนะ → สู่ <span className="text-foreground italic">Emotion Economy</span> ที่ใครเข้าถึงอารมณ์ได้มากกว่าเป็นผู้ชนะ. นี่คือสนามที่ ORIONS เล่น.
          </p>
        </Reveal>
      </div>
      <div className="relative z-10 max-w-[1180px] mx-auto pb-16 md:pb-20">
        <Reveal>
          <div className="w-full overflow-hidden border border-foreground/15 bg-muted" style={{ aspectRatio: "16 / 7" }}>
            <Picture data={heroImg} alt="" aria-hidden className="w-full h-full object-cover grayscale-[0.3]" />
          </div>
        </Reveal>
      </div>
    </section>

    {/* LOGIC vs EMOTION — bridge to the two sides */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1000px] mx-auto py-24 md:py-36">
        <Reveal>
          <blockquote lang="th" className="font-serif text-[28px] md:text-[44px] leading-[1.3] tracking-[-0.01em] text-foreground/90 thai-wrap">
            ตรรกะทำให้คน <em className="text-cinnabar italic">เชื่อ</em><br />— แต่อารมณ์ทำให้คน <em className="text-cinnabar italic">ซื้อ.</em>
          </blockquote>
        </Reveal>
        <Reveal delay={0.1}>
          <p lang="th" className="mt-8 max-w-[680px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.8] text-foreground/80">
            <span className="font-mono text-[12px] tracking-[0.1em] uppercase text-cinnabar">Logic Convinces, Emotion Converts.</span><br />
            อารมณ์คือสิ่งที่กระตุ้นการซื้อจริง และทำให้คนยอมจ่ายแพงกว่าปกติ — ทำไมคนต่อคิวซื้อกล่องสุ่ม หรือใส่นาฬิกาหรูแทนที่จะดูเวลาจากมือถือ. ตรรกะเปิดประตูด้วยข้อมูลที่ใช่ แต่ <span className="text-foreground">อารมณ์</span> คือสิ่งที่ปิดดีลและสร้างพรีเมียม — และนั่นคือฝั่งที่ ØRIONS เลือกยืน.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-10 p-7 md:p-9 card-accent max-w-[760px]">
            <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-cinnabar">Emotion · converts</div>
            <h3 lang="th" className="mt-3 font-serif text-[24px] md:text-[34px] leading-[1.2] tracking-[-0.015em]">
              เราเป็นบูทีคที่ปั้น <em className="text-cinnabar italic">อารมณ์ของแบรนด์</em> ให้คนจำและเลือก.
            </h3>
            <p lang="th" className="mt-4 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.8] text-muted-foreground">
              brand strategy · identity · big idea · brand film และ art direction ระดับโฆษณา — งานคราฟต์ที่ทำให้แบรนด์ถูกจำ ไม่ใช่แค่ถูกเห็น.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* WHY BRANDING — the sales-ceiling → branding → creativity arc */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1180px] mx-auto py-24 md:py-36 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20 items-baseline">
        <SectionLabel index="01" label="ทำไมต้อง branding" />
        <div>
          <Reveal delay={0.05}>
            <h2 lang="th" className="font-serif text-[28px] md:text-[42px] leading-[1.2] tracking-[-0.015em] max-w-[20ch] thai-wrap">
              ยอดพาไปได้ถึงจุดหนึ่ง — แล้ว<em className="text-cinnabar italic">มันตัน.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div lang="th" className="mt-8 max-w-[640px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.8] text-foreground/80 space-y-5">
              <p>ตอนเริ่มธุรกิจ ทุกคนต้องเน้นยอดก่อน — เพื่อเลี้ยงทีมและพาธุรกิจเดินต่อ. ไม่มีอะไรผิด. แต่ยอดที่มาจากการลด แลก แจกแถม และยิงแอดแลก attention มัน<span className="text-foreground">มีเพดาน</span>.</p>
              <p>เพราะยอดแบบนั้นไม่ได้สร้างความผูกพัน. วันที่คู่แข่งตั้งราคาถูกกว่าแม้แต่นิดเดียว ลูกค้าก็เดินจากไปทันที — เพราะไม่มีอะไรยึดเขาไว้กับแบรนด์นอกจาก<span className="text-foreground">ราคา</span>.</p>
              <p>จุดนั้นแหละที่ <span className="text-cinnabar">branding</span> เริ่มสำคัญ — สร้างความสัมพันธ์ เรื่องราว และทำให้ลูกค้ารู้สึกว่านี่คือ “ของเขา”. และเมื่อธุรกิจถึงจุดตัน <span className="text-foreground">ความคิดสร้างสรรค์และคุณภาพงาน</span> คือทางเดียวที่พาไปต่อได้.</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <blockquote lang="th" className="mt-10 font-serif text-[22px] md:text-[32px] leading-[1.35] tracking-[-0.01em] text-foreground max-w-[24ch] thai-wrap">
              ยุคหลัง social — <em className="text-cinnabar italic">connection ที่จริง มีค่ากว่า followers.</em>
            </blockquote>
          </Reveal>
          <Reveal delay={0.2}>
            <p lang="th" className="mt-6 max-w-[640px] font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.8] text-muted-foreground">
              เราถึงเลือกเป็น<span className="text-foreground">บูทีค</span> — ใส่ใจรายละเอียด ทำกับลูกค้าระยะยาว ไม่ทำงานฉาบฉวย. คุณภาพแบบนี้มีราคาขึ้นมาหน่อย แต่มันอยู่กับแบรนด์นานกว่าโปรโมชั่นครั้งเดียว.
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    {/* AI does soulless work */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1180px] mx-auto py-24 md:py-36 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20 items-baseline">
        <SectionLabel index="02" label="AI กับหัวใจ" />
        <Reveal delay={0.05}>
          <div>
            <h2 lang="th" className="font-serif text-[28px] md:text-[42px] leading-[1.2] tracking-[-0.015em] max-w-[20ch] thai-wrap">
              AI ไม่ได้มาแย่งงานคน — มันมาแทน<em className="text-cinnabar italic">งานที่ไร้หัวใจ.</em>
            </h2>
            <p lang="th" className="mt-8 max-w-[640px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.8] text-foreground/80">
              AI อ่านออกแค่ตัวหนังสือ แต่ไม่เคยเข้าใจความรู้สึกส่วนลึก — เช่นการประชดประชันแบบคนไทย ที่ระบบมักประมวลผลพลาดเป็นเชิงลบเสมอ. งานที่ "ผลิตเยอะ" AI ทำได้ดีกว่า. แบรนด์จึงต้องยกระดับจาก <span className="text-foreground">Content Factory</span> ไปเป็น <span className="text-cinnabar">Emotion Translator</span>.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 5 BRAND ASSETS — editorial numbered index */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1180px] mx-auto py-24 md:py-36">
        <SectionLabel index="03" label="5 สิ่งที่ AI ลอกไม่ได้" />
        <Reveal delay={0.05}>
          <h2 lang="th" className="mt-8 font-serif text-[26px] md:text-[38px] leading-[1.2] tracking-[-0.015em] max-w-[22ch] thai-wrap">
            สินทรัพย์ทางใจ ที่สร้างรากฐานใน<em className="text-cinnabar italic">ใจผู้บริโภค.</em>
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-10 lg:gap-16 items-start">
          <div className="border-t border-foreground/12">
            {assets.map((a, i) => (
              <Reveal key={a.k} delay={i * 0.05}>
                <div className="grid grid-cols-[44px_1fr] gap-4 md:gap-8 py-7 md:py-9 border-b border-foreground/12 items-baseline group">
                  <div className="font-serif text-cinnabar text-[24px] md:text-[34px] leading-none tabular-nums">{`0${i + 1}`}</div>
                  <div>
                    <h3 className="font-serif text-[22px] md:text-[30px] leading-[1.1] tracking-[-0.01em] group-hover:text-cinnabar transition-colors">{a.k} <span lang="th" className="text-foreground/55 text-[15px] md:text-[18px] italic">— {a.th}</span></h3>
                    <p lang="th" className="mt-2.5 font-thai thai-wrap text-[14px] leading-[1.8] text-muted-foreground">{a.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="hidden lg:block sticky top-28 overflow-hidden border border-foreground/15 bg-muted" style={{ aspectRatio: "4 / 5" }}>
              <Picture data={assetsImg} alt="" aria-hidden className="w-full h-full object-cover grayscale-[0.3]" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* EMOTION TRANSLATOR — 4 translates */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1180px] mx-auto py-24 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-16 items-start">
          <div>
            <SectionLabel index="04" label="Emotion Translator" />
            <Reveal delay={0.05}>
              <h2 lang="th" className="mt-8 font-serif text-[26px] md:text-[38px] leading-[1.2] tracking-[-0.015em] thai-wrap max-w-[14ch]">
                เราเป็น <em className="text-cinnabar italic">นักแปลอารมณ์</em> ไม่ใช่โรงงานคอนเทนต์.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 overflow-hidden border border-foreground/15 bg-muted" style={{ aspectRatio: "16 / 10" }}>
                <Picture data={translateImg} alt="" aria-hidden className="w-full h-full object-cover grayscale-[0.3]" />
              </div>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {translates.map((t, i) => (
              <Reveal key={t.k} delay={i * 0.06}>
                <div className="card-soft p-6 md:p-7 h-full">
                  <div className="font-mono text-[12px] tracking-[0.06em] text-cinnabar">{t.k}</div>
                  <p lang="th" className="mt-3 font-thai thai-wrap text-[14px] leading-[1.8] text-foreground/85">{t.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* 3 QUESTIONS — the filter */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1180px] mx-auto py-24 md:py-36">
        <SectionLabel index="05" label="ก่อนปล่อยงาน เราถาม 3 ข้อ" />
        <Reveal delay={0.05}>
          <p lang="th" className="mt-8 max-w-[640px] font-serif text-[18px] md:text-[22px] leading-[1.5] text-foreground/80">
            พฤติกรรมการซื้อยุคนี้คือ <span className="text-foreground italic">Emotional First, Rational Second</span> — ใช้อารมณ์นำ แล้วค่อยหาเหตุผลมารองรับ. ทุกงานก่อนปล่อย เราถามตัวเองและทีม:
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {questions.map((q, i) => (
            <Reveal key={q.n} delay={i * 0.08}>
              <div className="card-accent h-full p-8 md:p-10">
                <div className="num-display text-cinnabar text-[40px] leading-none">{q.n}</div>
                <h3 lang="th" className="mt-6 font-serif text-[24px] md:text-[30px] leading-[1.25] tracking-[-0.01em]">{q.q}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <CTABand
      eyebrow="ทำงานกับเรา"
      title={<>อยากให้แบรนด์คุณ <em className="text-cinnabar">ถูกรู้สึก</em> ไม่ใช่แค่ถูกเห็น?</>}
      subtitle="เล่าโจทย์มา เราช่วยมองว่าอารมณ์ไหนคือสนามของแบรนด์คุณ — ไม่มีข้อผูกมัด."
      primary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
      secondary={{ label: "ดูผลงาน", to: "/work" }}
      tone="snow"
    />
  </div>
);

export default Thinking;
