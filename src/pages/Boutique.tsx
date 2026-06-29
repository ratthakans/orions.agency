import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";
import { workThumbs } from "@/data/portfolio";

const SITE_URL = "https://orions.agency";
const craft = workThumbs.slice(0, 3);

const included = [
  { k: "Positioning & Brand DNA", d: "จุดยืน แก่นตัวตน และเรื่องที่จริงของแบรนด์ — ต้นน้ำของทุกอย่าง" },
  { k: "Identity & CI", d: "โลโก้ · สี · ฟอนต์ · คู่มือแบรนด์ — ระบบที่ทำให้คนจำได้" },
  { k: "Big Idea / Campaign", d: "แนวคิดใหญ่ที่ร้อยทั้งแคมเปญให้พูดเรื่องเดียวกัน" },
  { k: "Brand Film & Premium Production", d: "ฟิล์ม · ภาพ · art direction ระดับโฆษณา โดยทีม senior" },
  { k: "The ORIONS Standard", d: "วัดผลแบรนด์ที่ 45 / 90 วัน แล้ว refine ต่อจนเข้าที่" },
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

    {/* HERO — editorial, serif-forward, quiet */}
    <section className="section-ink px-6 md:px-10">
      <div className="max-w-[1180px] mx-auto pt-28 md:pt-36 pb-20 md:pb-28">
        <SectionLabel label="ORIONS Boutique" />
        <Reveal delay={0.05}>
          <h1 lang="th" className="mt-10 font-serif font-medium text-[clamp(40px,7vw,104px)] leading-[1.04] tracking-[-0.02em] max-w-[16ch] thai-wrap">
            งานปั้น ที่คน<em className="text-cinnabar italic">จำและเลือก.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p lang="th" className="mt-10 max-w-[640px] font-serif text-[19px] md:text-[24px] leading-[1.55] text-foreground/80">
            ฝั่ง <span className="text-foreground italic">creative craft</span> ของ ORIONS — สำหรับแบรนด์ที่อยากถูกจำ ไม่ใช่แค่ถูกเห็น. นี่คือฝั่งของ <span className="text-foreground">อารมณ์</span> ที่ทำให้คนยอมจ่ายแพง (<Link to="/thinking" className="text-cinnabar hover:underline">emotion converts</Link>) — คิด · ปั้น · ถ่าย ระดับโฆษณา โดยทีมที่คุมมาตรฐานเอง.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mt-9 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
            <span className="text-cinnabar">—</span> ต่อแคมเปญ / โปรเจกต์ · ไม่มีเรทการ์ด · ตีราคาตามโจทย์จริง
          </p>
        </Reveal>
      </div>
    </section>

    {/* PULL-QUOTE — editorial statement */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1000px] mx-auto py-20 md:py-28">
        <Reveal>
          <blockquote lang="th" className="font-serif text-[26px] md:text-[40px] leading-[1.35] tracking-[-0.01em] text-foreground/90 thai-wrap">
            งานที่ดีที่สุดมักไม่ได้เกิดตอนมีอิสระเต็มที่ — แต่เกิดตอนมี<em className="text-cinnabar italic">กรอบ</em>ที่บีบให้คิดให้คม. เราไม่หนีข้อจำกัด เราถือว่ามันคือบรีฟ.
          </blockquote>
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

    {/* SELECTED CRAFT — editorial image spread */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1180px] mx-auto py-20 md:py-28">
        <SectionLabel index="02" label="Selected craft" />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-end">
          <Reveal className="md:col-span-8">
            <figure>
              <div className="overflow-hidden border border-foreground/12 bg-muted" style={{ aspectRatio: "16 / 10" }}>
                <img src={craft[0]} alt="ORIONS craft — art direction" loading="lazy"
                  className="w-full h-full object-cover grayscale-[0.4] hover:grayscale-0 hover:scale-[1.02] transition-[transform,filter] duration-700" />
              </div>
              <figcaption lang="th" className="mt-4 font-serif text-[16px] md:text-[18px] text-foreground/70 italic">Art direction &amp; key visuals — งานที่ตั้งใจทุกเฟรม.</figcaption>
            </figure>
          </Reveal>
          <Reveal className="md:col-span-4" delay={0.08}>
            <figure>
              <div className="overflow-hidden border border-foreground/12 bg-muted" style={{ aspectRatio: "4 / 5" }}>
                <img src={craft[1]} alt="ORIONS craft — brand visual" loading="lazy"
                  className="w-full h-full object-cover grayscale-[0.4] hover:grayscale-0 hover:scale-[1.02] transition-[transform,filter] duration-700" />
              </div>
            </figure>
          </Reveal>
        </div>
        <div className="mt-5 md:mt-8 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8">
          <Reveal className="md:col-span-5" delay={0.05}>
            <div className="overflow-hidden border border-foreground/12 bg-muted" style={{ aspectRatio: "3 / 2" }}>
              <img src={craft[2]} alt="ORIONS craft — campaign" loading="lazy"
                className="w-full h-full object-cover grayscale-[0.4] hover:grayscale-0 hover:scale-[1.02] transition-[transform,filter] duration-700" />
            </div>
          </Reveal>
          <div className="md:col-span-7 flex items-end">
            <Reveal delay={0.1}>
              <Link to="/work" viewTransition className="group inline-flex items-center gap-3 font-serif text-[22px] md:text-[28px] tracking-[-0.01em] hover:text-cinnabar transition-colors">
                ดูผลงานทั้งหมด <ArrowUpRight className="w-7 h-7 md:w-9 md:h-9 text-cinnabar group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>

    {/* PRICING — editorial note, no rate card */}
    <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1180px] mx-auto py-20 md:py-28 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20 items-baseline">
        <div>
          <SectionLabel index="03" label="ราคา" />
        </div>
        <Reveal delay={0.05}>
          <div>
            <h2 lang="th" className="font-serif text-[28px] md:text-[44px] leading-[1.2] tracking-[-0.015em] max-w-[18ch] thai-wrap">
              ไม่มีเรทการ์ด เพราะไม่มีงานไหน<em className="text-cinnabar italic">เหมือนกัน.</em>
            </h2>
            <p lang="th" className="mt-8 max-w-[620px] font-serif text-[17px] md:text-[20px] leading-[1.6] text-foreground/80">
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
