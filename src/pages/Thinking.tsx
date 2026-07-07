import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";
import SignalField from "@/components/SignalField";
import Picture from "@/components/Picture";
import heroImg from "@/assets/thinking/hero.jpg?as=picture";
import proofImg from "@/assets/thinking/assets.jpg?as=picture";

const SITE_URL = "https://orions.agency";

// The manifesto's spine — shown as an editorial contents index up front.
const contents = [
  { n: "01", t: "The Noise" },
  { n: "02", t: "The Great Filter" },
  { n: "03", t: "Stories, Refined." },
  { n: "04", t: "The Proof" },
  { n: "05", t: "Limited by Design" },
];

// The Noise — the numbers behind the wall of sound.
const noise = [
  { k: "1.7 วินาที", d: "เวลาที่แบรนด์มี ก่อนนิ้วคนจะเลื่อนผ่าน" },
  { k: "4.6 เท่า", d: "ความเร็วที่งานแมสจาก AI ท่วมฟีดเข้ามา" },
  { k: "+40%", d: "ค่าโฆษณาที่แพงขึ้น แต่ได้ผลเท่าเดิม หรือแย่ลง" },
];

// What ØRIONS does — three disciplines, one lens.
const services = [
  { k: "Brand Strategy", d: "วางรากฐานและทิศทางให้ชัด เพื่อให้แบรนด์ไม่ต้องลงไปแข่งตัดราคา" },
  { k: "Creative Production", d: "งานภาพและเสียงคุณภาพบูทีค — brand film · video · photography · music production — ที่หยุดสายตาคนได้ใน 1.7 วินาที" },
  { k: "Communication Design", d: "ออกแบบการสื่อสารทุกจุดสัมผัส เปลี่ยนคนแปลกหน้าให้เป็นลูกค้าที่ภักดี" },
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
      title="Manifesto — Stories, Refined. · ØRIONS"
      description="Boutique creative agency ที่ data-driven แบบมีรสนิยม — วินิจฉัยด้วยหลักฐานผ่าน SONAR แล้วลงมือแก้ด้วยงานคราฟต์ วัดผลด้วย Vaest ว่าขยับ Signal จริงไหม. คิดแบบ Consult → ทำแบบ Craft → ส่งมอบแบบ Boutique. เรื่องที่คมที่สุดชนะ ไม่ใช่เรื่องที่ดังที่สุด."
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
          headline: "The ØRIONS Manifesto — Stories, Refined.",
          description: "Marketing rents attention. Creative earns belief. ทำไมเรื่องที่คมที่สุดชนะ ไม่ใช่เรื่องที่ดังที่สุด — The Noise, The Great Filter และเหตุผลที่เรารับงานจำกัด.",
          image: `${SITE_URL}/og.jpg`,
          author: { "@type": "Organization", name: "ØRIONS", url: SITE_URL },
          publisher: { "@type": "Organization", name: "ØRIONS", url: SITE_URL },
          mainEntityOfPage: `${SITE_URL}/thinking`,
        },
      ]}
    />

    {/* HERO — every brand is a point of light */}
    <section className="relative overflow-hidden section-ink px-6 md:px-10">
      <SignalField fx={0.76} fy={0.4} seed={5} intensity={0.9}
        className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="relative z-10 max-w-[1180px] mx-auto pt-28 md:pt-36 pb-16 md:pb-20">
        <SectionLabel label="The Manifesto" />
        <Reveal delay={0.05}>
          <h1 className="mt-10 font-serif font-medium text-[clamp(38px,6.5vw,96px)] leading-[1.05] tracking-[-0.02em] max-w-[16ch]">
            Every brand is a <em className="text-cinnabar italic">point of light.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p lang="th" className="mt-10 max-w-[680px] font-serif text-[18px] md:text-[23px] leading-[1.55] text-foreground/80 thai-wrap">
            ทุกแบรนด์คือจุดแสงหนึ่งจุด. ปัญหาคือ — ท้องฟ้าวันนี้สว่างจนไม่มีใครมองเห็นดาวดวงไหนอีกแล้ว.
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

    {/* CONTENTS — editorial index of the argument */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1180px] mx-auto py-12 md:py-16">
        <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">— The argument</div>
        <ol className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-0">
          {contents.map((c) => (
            <li key={c.n} className="flex items-baseline gap-4 border-t border-foreground/12 py-4">
              <span className="font-serif text-cinnabar text-[16px] tabular-nums leading-none">{c.n}</span>
              <span className="font-display text-[15px] md:text-[16px] font-medium leading-snug text-foreground/85">{c.t}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* 01 — THE NOISE */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1180px] mx-auto py-24 md:py-36 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20 items-baseline">
        <SectionLabel index="01" label="The Noise" />
        <div>
          <Reveal delay={0.05}>
            <h2 lang="th" className="font-serif text-[28px] md:text-[42px] leading-[1.2] tracking-[-0.015em] max-w-[20ch] thai-wrap">
              ยุคที่ทุกคนตะโกน จนไม่มีใคร<em className="text-cinnabar italic">ได้ยินใคร.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p lang="th" className="mt-8 max-w-[640px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.8] text-foreground/80">
              โลกไม่ได้ขาดคอนเทนต์ — โลก<span className="text-foreground">จมอยู่ในมัน</span>.
            </p>
          </Reveal>
          <div className="mt-10 border-t border-foreground/12 max-w-[640px]">
            {noise.map((s, i) => (
              <Reveal key={s.k} delay={i * 0.06}>
                <div className="grid grid-cols-[130px_1fr] md:grid-cols-[170px_1fr] gap-4 md:gap-8 py-5 md:py-6 border-b border-foreground/12 items-baseline">
                  <div lang="th" className="font-serif text-cinnabar text-[22px] md:text-[30px] leading-none tracking-[-0.01em]">{s.k}</div>
                  <p lang="th" className="font-thai thai-wrap text-[13px] md:text-[14px] leading-[1.8] text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <p lang="th" className="mt-10 max-w-[640px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.8] text-foreground/80">
              ผลคือวงจรที่ทุกคนติดกับ — ยิงแอดแพงขึ้น → ลดราคา → แจกของแถม → รอดไปอีกเดือน. แล้วพอคู่แข่งถูกกว่าคุณแค่ 100 บาท ลูกค้าก็เดินจากไป.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <blockquote lang="th" className="mt-10 font-serif text-[22px] md:text-[32px] leading-[1.35] tracking-[-0.01em] text-foreground max-w-[24ch] thai-wrap">
              นี่ไม่ใช่การเติบโต — นี่คือการพยายามหายใจ <em className="text-cinnabar italic">ใต้น้ำที่กำลังเดือด.</em>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>

    {/* 02 — THE GREAT FILTER */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1180px] mx-auto py-24 md:py-36 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20 items-baseline">
        <SectionLabel index="02" label="The Great Filter" />
        <div>
          <Reveal delay={0.05}>
            <h2 lang="th" className="font-serif text-[28px] md:text-[42px] leading-[1.2] tracking-[-0.015em] max-w-[22ch] thai-wrap">
              เส้นแบ่งระหว่างแบรนด์ที่คนจำได้ กับแบรนด์ที่<em className="text-cinnabar italic">คนลืม.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p lang="th" className="mt-8 max-w-[640px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.8] text-foreground/80">
              ในทางดาราศาสตร์ <span className="text-foreground italic">The Great Filter</span> คือกำแพงที่เกือบทุกอารยธรรมข้ามไม่พ้น. ในทางธุรกิจ มันคือเส้นบางๆ ที่ทุกแบรนด์ต้องเจอ — เพราะถึงจุดหนึ่ง งบการตลาดจะตัน และไม่มีงบไหนแพงพอที่จะ<span className="text-foreground">ซื้อใจ</span>คน.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <blockquote lang="th" className="mt-10 font-serif text-[22px] md:text-[32px] leading-[1.35] tracking-[-0.01em] text-foreground max-w-[24ch] thai-wrap">
              เงินพาคุณมาถึงหน้ากำแพงได้ — <em className="text-cinnabar italic">แต่พาข้ามไปไม่ได้.</em>
            </blockquote>
          </Reveal>
          <Reveal delay={0.18}>
            <p lang="th" className="mt-8 max-w-[640px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.8] text-foreground/80">
              และนี่คือจุดที่ธุรกิจส่วนใหญ่พลาด — พวกเขาแก้ <span className="text-foreground">อาการ</span> (ยอดตก → ยิงแอดเพิ่ม → ลดราคา) โดยไม่เคยวินิจฉัย <span className="text-cinnabar">โรค</span> (แบรนด์ไม่มีเรื่องที่คมพอให้คนจำ).
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p lang="th" className="mt-6 max-w-[640px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.8] text-foreground/80">
              สิ่งเดียวที่ข้ามกำแพงนี้ได้ คือ<span className="text-cinnabar">เรื่องราวที่คมพอ</span>. แบรนด์ที่ข้ามไปแล้ว ชีวิตต่างออกไปโดยสิ้นเชิง:
            </p>
          </Reveal>
          <div className="mt-7 max-w-[640px] border-t border-foreground/12">
            {crossed.map((c, i) => (
              <Reveal key={c} delay={i * 0.05}>
                <div className="flex items-baseline gap-5 py-4 border-b border-foreground/12">
                  <span className="font-serif italic text-cinnabar text-[15px] leading-none">◦</span>
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
      <div className="max-w-[1180px] mx-auto py-24 md:py-36">
        <SectionLabel index="03" label="Stories, Refined." />
        <Reveal delay={0.05}>
          <h2 lang="th" className="mt-8 font-serif text-[28px] md:text-[42px] leading-[1.2] tracking-[-0.015em] max-w-[22ch] thai-wrap">
            เราไม่ได้เพิ่มแสงให้คุณ — เรา<em className="text-cinnabar italic">โฟกัสมัน.</em>
          </h2>
        </Reveal>

        {/* the thesis, made visual — scattered vs focused */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <Reveal>
            <div className="card-soft h-full p-8 md:p-10">
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">แสงที่กระจาย</div>
              <h3 className="mt-4 font-serif text-[30px] md:text-[42px] leading-none tracking-[-0.02em] text-foreground/70">Noise.</h3>
              <p lang="th" className="mt-5 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.8] text-muted-foreground">
                ทุกแบรนด์แข่งกันทำ "ให้เยอะที่สุด" — งานแมสที่กลืนหายไปในฟีด และถูกลืมใน 1.7 วินาที.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card-accent h-full p-8 md:p-10">
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-cinnabar">แสงที่ถูกรวมผ่านเลนส์</div>
              <h3 className="mt-4 font-serif italic text-[30px] md:text-[42px] leading-none tracking-[-0.02em] text-cinnabar">Signal.</h3>
              <p lang="th" className="mt-5 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.8] text-foreground/85">
                เราทำตรงข้าม — คัด สกัด ตัดเสียงรบกวนออก จนเหลือแต่ข้อความที่คมที่สุดของคุณ. <span className="text-foreground">ØRIONS คือเลนส์นั้น.</span>
              </p>
            </div>
          </Reveal>
        </div>

        {/* how we work — like a doctor, not a pharmacy */}
        <div className="mt-16 md:mt-20">
          <Reveal>
            <p lang="th" className="font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.8] text-foreground/80 max-w-[640px]">
              และนี่คือวิธีทำงานของเรา — <span className="text-foreground">เหมือนหมอ ไม่เหมือนร้านขายยา:</span>
            </p>
          </Reveal>

          <div className="mt-10 border-t border-foreground/12">
            {/* 01 — Diagnosis */}
            <Reveal>
              <div className="grid grid-cols-[44px_1fr] gap-4 md:gap-8 py-8 md:py-11 border-b border-foreground/12 items-baseline">
                <div className="font-serif text-cinnabar text-[24px] md:text-[34px] leading-none tabular-nums">01</div>
                <div className="max-w-[640px]">
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-cinnabar">The Diagnosis · เราวินิจฉัยก่อน — powered by <span className="text-foreground">SONAR</span></div>
                  <h3 lang="th" className="mt-3 font-serif text-[22px] md:text-[30px] leading-[1.15] tracking-[-0.01em]">The Refinement Session</h3>
                  <p lang="th" className="mt-3 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.8] text-muted-foreground">
                    เราไม่เดาว่าแบรนด์ติดตรงไหน — เราฟังตลาดและแบรนด์ด้วย <span className="text-cinnabar">SONAR</span> เครื่องมือวินิจฉัยของเรา แล้วหา<span className="text-foreground">ด้วยหลักฐาน ไม่ใช่ความเห็น</span> ว่าปัญหาจริงอยู่ที่ไหน: ตัวตนไม่ชัด? เรื่องไม่คม? หรือสื่อสารผิดที่? ผลลัพธ์คือแผนที่ชัดเจนว่าต้องแก้อะไร ตามลำดับไหน และทำไม — ไม่ใช่สไลด์สวยๆ ที่เอาไปทำต่อไม่ได้.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* 02 — Treatment (the three disciplines, prescribed) */}
            <Reveal delay={0.05}>
              <div className="grid grid-cols-[44px_1fr] gap-4 md:gap-8 py-8 md:py-11 border-b border-foreground/12 items-baseline">
                <div className="font-serif text-cinnabar text-[24px] md:text-[34px] leading-none tabular-nums">02</div>
                <div>
                  <div className="max-w-[640px]">
                    <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-cinnabar">The Treatment · แล้วจึงลงมือแก้</div>
                    <h3 lang="th" className="mt-3 font-serif text-[22px] md:text-[30px] leading-[1.15] tracking-[-0.01em]">ยาถูกจ่ายตามการวินิจฉัย — ไม่ใช่เมนูให้เลือกซื้อ</h3>
                  </div>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                    {services.map((s) => (
                      <div key={s.k} className="card-soft p-5 md:p-6 h-full">
                        <h4 className="font-display text-[15px] md:text-[16px] font-medium tracking-[-0.01em]">{s.k}</h4>
                        <p lang="th" className="mt-2 font-thai thai-wrap text-[13px] leading-[1.75] text-muted-foreground">{s.d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 03 — Delivery */}
            <Reveal delay={0.1}>
              <div className="grid grid-cols-[44px_1fr] gap-4 md:gap-8 py-8 md:py-11 border-b border-foreground/12 items-baseline">
                <div className="font-serif text-cinnabar text-[24px] md:text-[34px] leading-none tabular-nums">03</div>
                <div className="max-w-[640px]">
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-cinnabar">The Delivery · ส่งมอบ + วัดผล — powered by <span className="text-foreground">Vaest</span></div>
                  <h3 lang="th" className="mt-3 font-serif text-[22px] md:text-[30px] leading-[1.15] tracking-[-0.01em]">อยู่จนเห็นว่ามันถูกแก้จริง</h3>
                  <p lang="th" className="mt-3 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.8] text-muted-foreground">
                    เราไม่ส่งงานแล้วหายไป — เราวัดด้วย <span className="text-cinnabar">Vaest</span> ว่าเรื่องที่ refine แล้ว ขยับ <span className="text-foreground">Signal ที่สำคัญจริง</span> ไหม (recall · คุณภาพ demand · pricing power — ไม่ใช่ vanity reach) แล้ววนกลับไป refine ต่อจนเข้าที่.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <blockquote className="mt-12 font-serif text-[22px] md:text-[32px] leading-[1.3] tracking-[-0.015em] text-foreground max-w-[24ch]">
              คิดแบบ <em className="text-cinnabar italic">Consult</em> → ทำแบบ <em className="text-cinnabar italic">Craft</em> → ส่งมอบแบบ <em className="text-cinnabar italic">Boutique.</em>
            </blockquote>
          </Reveal>
          <Reveal delay={0.12}>
            <p lang="th" className="mt-6 font-mono text-[10px] md:text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
              ทุกขั้นมีหลักฐานรองรับ — <span className="text-cinnabar">SONAR</span> ฟังหา Signal · <span className="text-cinnabar">Vaest</span> วัดว่ามันขยับจริง
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    {/* 04 — THE PROOF */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1180px] mx-auto py-24 md:py-36 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-start">
        <div>
          <SectionLabel index="04" label="The Proof" />
          <Reveal delay={0.05}>
            <h2 lang="th" className="mt-8 font-serif text-[26px] md:text-[38px] leading-[1.2] tracking-[-0.015em] max-w-[22ch] thai-wrap">
              ความคิดพิสูจน์ด้วยคำพูดไม่ได้ — <em className="text-cinnabar italic">ต้องพิสูจน์ด้วยงาน.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p lang="th" className="mt-8 max-w-[640px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.8] text-foreground/80">
              จาก brand film ระดับองค์กร ถึงมิวสิควิดีโอศิลปินแถวหน้า. จากแบรนด์ hospitality ถึงงานสื่อสารระดับประเทศ. งานทั้งหมดพิสูจน์เรื่องเดียวกัน — <span className="text-foreground">craft ที่แท้จริงไม่ขึ้นกับอุตสาหกรรม มันขึ้นกับความเข้าใจว่าอะไรทำให้คนหยุดดู.</span>
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link to="/work" viewTransition className="btn-ghost mt-10">
              <span>ดูผลงาน</span><ArrowUpRight className="w-4 h-4" />
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
      <div className="max-w-[1180px] mx-auto py-24 md:py-36 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20 items-baseline">
        <SectionLabel index="05" label="Limited by Design" />
        <div>
          <Reveal delay={0.05}>
            <h2 lang="th" className="font-serif text-[28px] md:text-[42px] leading-[1.2] tracking-[-0.015em] max-w-[20ch] thai-wrap">
              เรารับงานจำกัด — <em className="text-cinnabar italic">โดยตั้งใจ.</em>
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
          <Reveal delay={0.2}>
            <p lang="th" className="mt-8 max-w-[640px] font-thai text-[13px] leading-[1.8] text-muted-foreground">
              — เรายังเปิดรับงาน production สเกลย่อย เพื่อสนับสนุนระบบนิเวศธุรกิจเสมอ.
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    <CTABand
      eyebrow="ØRIONS"
      title={<>Don't get louder. <em className="text-cinnabar">Get unmistakable.</em></>}
      subtitle="เราไม่ทำให้คุณดังขึ้น — เราทำให้คุณเป็นตัวคุณที่ไม่มีใครแทนได้."
      primary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
      secondary={{ label: "ดูผลงาน", to: "/work" }}
      tone="snow"
    />
  </div>
);

export default Thinking;
