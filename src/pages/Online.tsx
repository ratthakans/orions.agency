import { Link } from "react-router-dom";
import { ArrowUpRight, Download } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";

const SITE_URL = "https://orions.agency";
const RATECARD_PDF = "/ORIONS_RateCard_2026.pdf";

const included = [
  { k: "Media Buying", d: "ยิงแอด full-funnel — Meta · TikTok · Google · LINE วัดผลทุกบาท" },
  { k: "Social & Content", d: "ดูแลเพจ · คอนเทนต์ลงฟีด · ถ่ายคอนเทนต์เร็วสำหรับโซเชียล" },
  { k: "KOL / Influencer", d: "จัดดีล + บรีฟ + ออเคสเตรตให้เข้าแคมเปญ" },
  { k: "Tracking & ROAS", d: "Pixel · CAPI · รายงานผลทุกเดือน เห็นยอดจริง" },
];

const Online = () => (
  <div>
    <SEO
      title="ORIONS Online — เร็ว ไว ไม่แพง · Ads & Social · ØRIONS"
      description="ฝั่ง performance ของ ORIONS — ยิงแอด โซเชียล คอนเทนต์ วัดผล. มีเรทการ์ดและแพ็กเกจชัดเจน คิดราคารายเดือน เริ่มได้เร็ว."
      path="/online"
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "ORIONS Online — Performance, ads & social media",
        serviceType: "Performance marketing, social media & content",
        description: "Fast, affordable ads & social — transparent rate card and monthly packages.",
        provider: { "@type": "Organization", name: "ØRIONS", url: SITE_URL },
        areaServed: { "@type": "Country", name: "Thailand" },
      }}
    />

    {/* HERO */}
    <section className="section-ink px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto pt-28 md:pt-32 pb-20 md:pb-24">
        <SectionLabel label="ORIONS Online" />
        <Reveal delay={0.05}>
          <h1 lang="th" className="mt-8 h-display-xl max-w-[16ch] thai-wrap">
            เร็ว ไว <em className="text-cinnabar">ไม่แพง.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p lang="th" className="mt-8 max-w-[680px] font-thai thai-wrap text-[16px] md:text-[19px] leading-[1.7] text-foreground/85">
            ฝั่ง <strong className="text-foreground">performance</strong> ของ ORIONS — ยิงแอด ทำโซเชียล คอนเทนต์ วัดผล. สำหรับแบรนด์ที่มีของพร้อมขายและอยากเห็นยอดเดี๋ยวนี้. มี <strong className="text-foreground">เรทการ์ดและแพ็กเกจ</strong> ชัดเจน เริ่มได้เร็ว.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-7 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
            <span className="text-cinnabar">—</span> รายเดือน / แพ็กเกจ · มีเรทการ์ด · ไม่บวก % ค่าแอด
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/package" viewTransition className="btn-accent">
              <span>ดูแพ็กเกจ & ราคา</span><ArrowUpRight className="w-4 h-4" />
            </Link>
            <a href={RATECARD_PDF} download className="btn-ghost">
              <Download className="w-4 h-4" /><span>ดาวน์โหลด Rate Card 2026</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>

    {/* WHAT'S INCLUDED */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="01" label="สิ่งที่คุณได้" />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
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

    {/* PRICING — has rate card */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
        <div>
          <SectionLabel index="02" label="ราคา" />
          <Reveal delay={0.05}>
            <h2 lang="th" className="mt-6 h-display-md max-w-[14ch] thai-wrap">
              ราคาชัด <em className="text-cinnabar">เริ่มได้เลย.</em>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div>
            <p lang="th" className="font-thai thai-wrap text-[15px] md:text-[16px] leading-[1.8] text-foreground/85">
              ฝั่ง Online คิดราคาเป็น <strong className="text-foreground">รายเดือน</strong> หรือ <strong className="text-foreground">แพ็กเกจ</strong> — มีเรทการ์ดให้ดูช่วงราคาอ้างอิงก่อนคุย. ลูกค้าถือบัญชีโฆษณาเอง เติมเงินเอง เห็นยอดจริงทุกบาท เราไม่บวก % ค่าแอด.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-4">
              <Link to="/package" viewTransition className="btn-accent justify-center">
                <span>ดูแพ็กเกจทั้งหมด</span><ArrowUpRight className="w-4 h-4" />
              </Link>
              <a href={RATECARD_PDF} download className="btn-ghost justify-center">
                <Download className="w-4 h-4" /><span>Rate Card (PDF)</span>
              </a>
            </div>
            <p lang="th" className="mt-6 font-thai thai-wrap text-[13px] leading-[1.8] text-muted-foreground">
              อยากได้งานปั้นแบรนด์ระดับโฆษณา (ฟิล์ม · identity · big idea)? นั่นคือฝั่ง <Link to="/boutique" className="text-cinnabar hover:underline">ORIONS Boutique</Link> ที่คิดเป็นโปรเจกต์.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <CTABand
      eyebrow="Start fast"
      title={<>มีของพร้อมขาย <em className="text-cinnabar">อยากเห็นยอด?</em></>}
      subtitle="คุยฟรี 45 นาที — เล่ายอด งบ และเป้าหมายมา เราช่วยจัดแพ็กเกจให้พอดี."
      primary={{ label: "เริ่มต้นบทสนทนา", to: "/contact?pkg=Digital" }}
      secondary={{ label: "ดูแพ็กเกจ", to: "/package" }}
      tone="snow"
    />
  </div>
);

export default Online;
