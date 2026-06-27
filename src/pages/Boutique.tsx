import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";

const SITE_URL = "https://orions.agency";

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
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "ORIONS Boutique — Creative craft, brand & identity",
        serviceType: "Brand strategy, identity, campaign & premium production",
        description: "Premium creative craft billed per campaign/project (quoted, no rate card).",
        provider: { "@type": "Organization", name: "ØRIONS", url: SITE_URL },
        areaServed: { "@type": "Country", name: "Thailand" },
      }}
    />

    {/* HERO */}
    <section className="section-ink px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto pt-28 md:pt-32 pb-20 md:pb-24">
        <SectionLabel label="ORIONS Boutique" />
        <Reveal delay={0.05}>
          <h1 lang="th" className="mt-8 h-display-xl max-w-[16ch] thai-wrap">
            งานปั้น ที่คน<em className="text-cinnabar">จำและเลือก.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p lang="th" className="mt-8 max-w-[680px] font-thai thai-wrap text-[16px] md:text-[19px] leading-[1.7] text-foreground/85">
            ฝั่ง <strong className="text-foreground">creative craft</strong> ของ ORIONS — สำหรับแบรนด์ที่อยากถูกจำ ไม่ใช่แค่ถูกเห็น. คิด · ปั้น · ถ่าย ระดับโฆษณา โดยทีม senior ที่คุมมาตรฐานเอง.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-7 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
            <span className="text-cinnabar">—</span> ต่อแคมเปญ / โปรเจกต์ · ไม่มีเรทการ์ด · ตีราคาตามโจทย์จริง
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/contact?pkg=Boutique" viewTransition className="btn-accent">
              <span>คุยโจทย์ / ขอใบเสนอราคา</span><ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link to="/work" viewTransition className="btn-ghost">
              <span>ดูผลงานคราฟต์</span><ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>

    {/* WHAT'S INCLUDED */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="01" label="สิ่งที่คุณได้" />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {included.map((it, i) => (
            <Reveal key={it.k} delay={(i % 2) * 0.06}>
              <div className="card-soft p-7 md:p-9 h-full">
                <h3 className="font-display text-[19px] md:text-[22px] font-semibold tracking-[-0.01em]">{it.k}</h3>
                <p lang="th" className="mt-3 font-thai thai-wrap text-[14px] leading-[1.7] text-muted-foreground">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* PRICING PHILOSOPHY — no rate card */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
        <div>
          <SectionLabel index="02" label="ราคา" />
          <Reveal delay={0.05}>
            <h2 lang="th" className="mt-6 h-display-md max-w-[14ch] thai-wrap">
              ไม่มีเรทการ์ด <em className="text-cinnabar">เพราะไม่มีงานไหนเหมือนกัน.</em>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div>
            <p lang="th" className="font-thai thai-wrap text-[15px] md:text-[16px] leading-[1.8] text-foreground/85">
              งานคราฟต์คิดราคาเป็น <strong className="text-foreground">แคมเปญ</strong> หรือ <strong className="text-foreground">โปรเจกต์</strong> — ตีตามขอบเขต ความลึก และมาตรฐานที่โจทย์ต้องการ. เราคุยโจทย์ก่อนเสมอ แล้วเสนอสโคป + ราคาที่ตรงงานคุณ ไม่มีราคาตายตัวหน้าเว็บ.
            </p>
            <p lang="th" className="mt-5 font-thai thai-wrap text-[13px] leading-[1.8] text-muted-foreground">
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
