import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";
import TopoField from "@/components/TopoField";
import Picture from "@/components/Picture";
import { portfolio } from "@/data/portfolio";

const SITE_URL = "https://orions.agency";

// Real ORIONS craft — pull from the photography (brand shoots) + art-direction galleries.
const photoG = (portfolio.find((c) => c.key === "photo")?.gallery ?? []).map((g) => g.src);
const artG = (portfolio.find((c) => c.key === "artdir")?.gallery ?? []).map((g) => g.src);
const heroImg = photoG[0] ?? artG[0];
const craft = [artG[0], photoG[1], artG[1], photoG[2], artG[2], photoG[3]].filter(Boolean);

const included = [
  { k: "Positioning & Brand DNA", d: "จุดยืน แก่นตัวตน และเรื่องที่จริงของแบรนด์ — ต้นน้ำของทุกอย่าง" },
  { k: "Identity & CI", d: "โลโก้ · สี · ฟอนต์ · คู่มือแบรนด์ — ระบบที่ทำให้คนจำได้" },
  { k: "Big Idea / Campaign", d: "แนวคิดใหญ่ที่ร้อยทั้งแคมเปญให้พูดเรื่องเดียวกัน" },
  { k: "Brand Film & Premium Production", d: "ฟิล์ม · ภาพ · art direction ระดับโฆษณา โดยทีม senior" },
  { k: "The ORIONS Standard", d: "วัดผลแบรนด์ที่ 45 / 90 วัน แล้ว refine ต่อจนเข้าที่" },
];

const process = [
  { k: "ฟังโจทย์ & ตีกรอบ", d: "เข้าใจธุรกิจ เป้าหมาย ข้อจำกัด และงบก่อน — กรอบที่ชัดคือบรีฟที่ดี" },
  { k: "กลยุทธ์ & Big Idea", d: "หาจุดยืนและแนวคิดใหญ่ที่จริง ร้อยทั้งแคมเปญให้พูดเรื่องเดียวกัน" },
  { k: "ออกแบบ & ผลิต", d: "identity · ฟิล์ม · art direction ระดับโฆษณา ลงมือโดยทีม senior" },
  { k: "ส่งมอบ & วัดผล", d: "วัดผลแบรนด์ที่ 45 / 90 วัน ตาม The ORIONS Standard แล้ว refine ต่อจนเข้าที่" },
];

const Boutique = () => (
  <div>
    <SEO
      title="ORIONS Boutique — งานปั้นที่คนจำและเลือก · ØRIONS"
      description="ฝั่งงานคราฟต์ของ ORIONS — brand strategy, identity, big idea, brand film และ art direction ระดับโฆษณา. คิดราคาเป็นแคมเปญ/โปรเจกต์ ไม่มีเรทการ์ด ตีตามโจทย์จริง."
      path="/boutique"
      schema={[
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Boutique", item: `${SITE_URL}/boutique` },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "ORIONS Boutique — Creative craft, brand & identity",
          serviceType: "Brand strategy, identity, campaign & premium production",
          description: "Premium creative craft billed per campaign/project (quoted, no rate card).",
          provider: { "@type": "Organization", name: "ØRIONS", url: SITE_URL },
          areaServed: { "@type": "Country", name: "Thailand" },
        },
      ]}
    />

    {/* HERO — editorial, serif-forward, dramatic */}
    <section className="relative overflow-hidden section-ink px-6 md:px-10">
      <TopoField fx={0.22} fy={0.38} seed={7} intensity={0.35}
        className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="relative z-10 max-w-[1180px] mx-auto pt-28 md:pt-36 pb-12 md:pb-16">
        <SectionLabel label="ORIONS Boutique" />
        <Reveal delay={0.05}>
          <h1 lang="th" className="editorial-display mt-10 font-serif font-medium text-[clamp(46px,9vw,128px)] max-w-[13ch] thai-wrap">
            งานปั้น ที่คน<em className="text-cinnabar italic">จำและเลือก.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p lang="th" className="mt-10 max-w-[640px] font-serif text-[19px] md:text-[25px] leading-[1.55] text-foreground/80">
            ฝั่ง <span className="text-foreground italic">creative craft</span> ของ ORIONS — สำหรับแบรนด์ที่อยากถูกจำ ไม่ใช่แค่ถูกเห็น. นี่คือฝั่งของ <span className="text-foreground">อารมณ์</span> ที่ทำให้คนยอมจ่ายแพง (<Link to="/thinking" className="text-cinnabar hover:underline">emotion converts</Link>).
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mt-9 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
            <span className="text-cinnabar">—</span> ต่อแคมเปญ / โปรเจกต์ · ไม่มีเรทการ์ด · ตีราคาตามโจทย์จริง
          </p>
        </Reveal>
      </div>
      {/* Hero image band — real craft, graded */}
      <div className="relative z-10 max-w-[1180px] mx-auto pb-16 md:pb-24">
        <Reveal>
          <div className="grade-orion overflow-hidden border border-foreground/15 bg-muted" style={{ aspectRatio: "21 / 9" }}>
            <Picture data={heroImg} alt="" aria-hidden className="w-full h-full object-cover object-center grayscale-[0.25]" />
          </div>
        </Reveal>
      </div>
    </section>

    {/* PULL-QUOTE — editorial statement */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1000px] mx-auto py-20 md:py-28">
        <Reveal>
          <blockquote lang="th" className="font-serif text-[28px] md:text-[46px] leading-[1.3] tracking-[-0.015em] text-foreground/90 thai-wrap">
            งานที่ดีที่สุดมักไม่ได้เกิดตอนมีอิสระเต็มที่ — แต่เกิดตอนมี<em className="text-cinnabar italic">กรอบ</em>ที่บีบให้คิดให้คม. เราไม่หนีข้อจำกัด เราถือว่ามันคือบรีฟ.
          </blockquote>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">— ปรัชญาการทำงานของ ORIONS</p>
        </Reveal>
      </div>
    </section>

    {/* WHAT'S INCLUDED — editorial numbered index */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1180px] mx-auto py-20 md:py-28">
        <SectionLabel index="01" label="สิ่งที่คุณได้" />
        <div className="mt-12 border-t border-foreground/12">
          {included.map((it, i) => (
            <Reveal key={it.k} delay={i * 0.05}>
              <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-3 md:gap-12 py-8 md:py-11 border-b border-foreground/12 items-baseline group">
                <div className="font-serif text-cinnabar text-[28px] md:text-[44px] leading-none tabular-nums">{`0${i + 1}`}</div>
                <div className="max-w-[640px]">
                  <h3 className="font-serif text-[24px] md:text-[34px] leading-[1.12] tracking-[-0.01em] group-hover:text-cinnabar transition-colors">{it.k}</h3>
                  <p lang="th" className="mt-3 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">{it.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* SELECTED CRAFT — editorial gallery, real work */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1180px] mx-auto py-20 md:py-28">
        <SectionLabel index="02" label="Selected craft" />
        <Reveal delay={0.05}>
          <h2 lang="th" className="editorial-display mt-8 font-serif text-[26px] md:text-[40px] max-w-[20ch] thai-wrap">
            งานที่เราภูมิใจ — <em className="text-cinnabar italic">ตั้งใจทุกเฟรม.</em>
          </h2>
        </Reveal>

        {/* row 1 — lead + portrait */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-7 items-end">
          <Reveal className="md:col-span-7">
            <figure>
              <div className="overflow-hidden border border-foreground/12 bg-muted" style={{ aspectRatio: "16 / 11" }}>
                <Picture data={craft[0]} alt="ORIONS craft — art direction" loading="lazy"
                  className="w-full h-full object-cover grayscale-[0.35] hover:grayscale-0 hover:scale-[1.02] transition-[transform,filter] duration-700" />
              </div>
              <figcaption lang="th" className="mt-4 font-serif text-[16px] md:text-[19px] text-foreground/65 italic">Art direction &amp; key visuals</figcaption>
            </figure>
          </Reveal>
          <Reveal className="md:col-span-5" delay={0.08}>
            <figure>
              <div className="overflow-hidden border border-foreground/12 bg-muted" style={{ aspectRatio: "4 / 5" }}>
                <Picture data={craft[1]} alt="ORIONS craft — brand photoshoot" loading="lazy"
                  className="w-full h-full object-cover grayscale-[0.35] hover:grayscale-0 hover:scale-[1.02] transition-[transform,filter] duration-700" />
              </div>
              <figcaption lang="th" className="mt-4 font-serif text-[16px] md:text-[19px] text-foreground/65 italic">Brand &amp; identity shoot</figcaption>
            </figure>
          </Reveal>
        </div>

        {/* row 2 — three frames */}
        <div className="mt-5 md:mt-7 grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
          {craft.slice(2, 5).map((src, i) => (
            <Reveal key={src.img.src} delay={i * 0.06} className={i === 2 ? "col-span-2 md:col-span-1" : ""}>
              <div className="overflow-hidden border border-foreground/12 bg-muted" style={{ aspectRatio: "4 / 5" }}>
                <Picture data={src} alt="ORIONS craft" loading="lazy"
                  className="w-full h-full object-cover grayscale-[0.35] hover:grayscale-0 hover:scale-[1.02] transition-[transform,filter] duration-700" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <Link to="/work" viewTransition className="group mt-12 inline-flex items-center gap-3 font-serif text-[24px] md:text-[32px] tracking-[-0.01em] hover:text-cinnabar transition-colors">
            ดูผลงานทั้งหมด <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 text-cinnabar group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </Reveal>
      </div>
    </section>

    {/* HOW WE WORK — process, editorial */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1180px] mx-auto py-20 md:py-28">
        <SectionLabel index="03" label="ทำงานกับเรายังไง" />
        <Reveal delay={0.05}>
          <h2 lang="th" className="editorial-display mt-8 font-serif text-[26px] md:text-[40px] max-w-[22ch] thai-wrap">
            จากโจทย์ ถึงงานที่<em className="text-cinnabar italic">คนจำ</em> — สี่จังหวะ.
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
          {process.map((p, i) => (
            <Reveal key={p.k} delay={(i % 2) * 0.06}>
              <div className="flex gap-6 py-7 md:py-8 border-b border-foreground/12">
                <div className="font-serif text-cinnabar text-[26px] md:text-[36px] leading-none tabular-nums shrink-0">{`0${i + 1}`}</div>
                <div>
                  <h3 className="font-serif text-[22px] md:text-[28px] leading-[1.15] tracking-[-0.01em]">{p.k}</h3>
                  <p lang="th" className="mt-2.5 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">{p.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p lang="th" className="mt-9 font-thai thai-wrap text-[13px] leading-[1.8] text-muted-foreground max-w-[660px]">
            เริ่มด้วยคุยฟรี 45 นาที — เราจะบอกตรง ๆ ว่าโจทย์คุณควรเริ่มที่ฝั่ง <span className="text-foreground/85">แบรนด์ (Boutique)</span> หรือ <Link to="/online" className="text-cinnabar hover:underline">ยอด (Online)</Link> ก่อน.
          </p>
        </Reveal>
      </div>
    </section>

    {/* PRICING — editorial note, no rate card */}
    <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1180px] mx-auto py-20 md:py-28 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20 items-baseline">
        <div>
          <SectionLabel index="04" label="ราคา" />
        </div>
        <Reveal delay={0.05}>
          <div>
            <h2 lang="th" className="editorial-display font-serif text-[28px] md:text-[46px] max-w-[18ch] thai-wrap">
              ไม่มีเรทการ์ด เพราะไม่มีงานไหน<em className="text-cinnabar italic">เหมือนกัน.</em>
            </h2>
            <p lang="th" className="mt-8 max-w-[620px] font-serif text-[17px] md:text-[21px] leading-[1.6] text-foreground/80">
              งานคราฟต์คิดราคาเป็น <span className="italic">แคมเปญ</span> หรือ <span className="italic">โปรเจกต์</span> — ตีตามขอบเขต ความลึก และมาตรฐานที่โจทย์ต้องการ. เราคุยโจทย์ก่อนเสมอ แล้วเสนอสโคป + ราคาที่ตรงงานคุณ.
            </p>
            <p lang="th" className="mt-6 font-thai thai-wrap text-[13px] leading-[1.8] text-muted-foreground">
              อยากได้เร็ว ไว ไม่แพง สำหรับ ads / social? นั่นคือฝั่ง <Link to="/online" className="text-cinnabar hover:underline">ORIONS Online</Link> ที่มีเรทการ์ดและแพ็กเกจชัดเจน.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <CTABand
      eyebrow="When you're ready"
      title={<>มีโจทย์ที่อยาก <em className="text-cinnabar">ปั้นให้คม</em> ไหม?</>}
      subtitle="คุยฟรี 45 นาที ไม่มีข้อผูกมัด — เล่าโจทย์และเงื่อนไขมา เราช่วยมองว่าจะ refine มันยังไง."
      primary={{ label: "ขอใบเสนอราคา", to: "/contact?pkg=Boutique" }}
      secondary={{ label: "ดูผลงาน", to: "/work" }}
      tone="snow"
    />
  </div>
);

export default Boutique;
