import { Link } from "react-router-dom";
import { ArrowUpRight, Download } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";
import CountUp from "@/components/CountUp";

const SITE_URL = "https://orions.agency";
const RATECARD_PDF = "/ORIONS_RateCard_2026.pdf";

const included = [
  { k: "Media Buying", d: "ยิงแอด full-funnel — Meta · TikTok · Google · LINE วัดผลทุกบาท" },
  { k: "Social & Content", d: "ดูแลเพจ · คอนเทนต์ลงฟีด · ถ่ายคอนเทนต์เร็วสำหรับโซเชียล" },
  { k: "KOL / Influencer", d: "จัดดีล + บรีฟ + ออเคสเตรตให้เข้าแคมเปญ" },
  { k: "Tracking & ROAS", d: "Pixel · CAPI · รายงานผลทุกเดือน เห็นยอดจริง" },
];

const ticker = ["META", "TIKTOK", "GOOGLE ADS", "LINE", "REELS", "SHORTS", "ROAS", "ยิงไว", "วัดผล", "ปรับเร็ว", "เริ่มได้เลย"];

const Online = () => (
  <div>
    <SEO
      title="ORIONS Online — เร็ว ไว ไม่แพง · Ads & Social · ØRIONS"
      description="ฝั่ง performance ของ ORIONS — ยิงแอด โซเชียล คอนเทนต์ วัดผล. มีเรทการ์ดและแพ็กเกจชัดเจน คิดราคารายเดือน เริ่มได้เร็ว."
      path="/online"
      schema={[
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Online", item: `${SITE_URL}/online` },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "ORIONS Online — Performance, ads & social media",
          serviceType: "Performance marketing, social media & content",
          description: "Fast, affordable ads & social — transparent rate card and monthly packages.",
          provider: { "@type": "Organization", name: "ØRIONS", url: SITE_URL },
          areaServed: { "@type": "Country", name: "Thailand" },
        },
      ]}
    />

    {/* HERO — dynamic, bold sans, punchy */}
    <section className="section-ink px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto pt-28 md:pt-32 pb-14 md:pb-16">
        <SectionLabel label="ORIONS Online" />
        <Reveal delay={0.05}>
          <h1 lang="th" className="mt-8 font-thai font-bold text-[clamp(48px,10vw,150px)] leading-[0.92] tracking-[-0.03em]">
            เร็ว ไว <span className="text-cinnabar">ไม่แพง.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p lang="th" className="mt-8 max-w-[680px] font-thai thai-wrap text-[16px] md:text-[19px] leading-[1.6] text-foreground/85">
            ฝั่ง <strong className="text-foreground">performance</strong> ของ ORIONS — ยิงแอด ทำโซเชียล คอนเทนต์ วัดผล. สำหรับแบรนด์ที่มีของพร้อมขายและอยากเห็นยอดเดี๋ยวนี้. มี <strong className="text-foreground">เรทการ์ดและแพ็กเกจ</strong> ชัดเจน เริ่มได้เร็ว.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
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

    {/* KINETIC TICKER — platforms & keywords */}
    <section aria-hidden className="bg-cinnabar text-background border-y border-cinnabar overflow-hidden py-3.5 md:py-4">
      <div className="marquee">
        <div className="marquee-track items-center">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-6 shrink-0">
              <span className="font-unbounded uppercase tracking-[-0.01em] whitespace-nowrap text-[clamp(13px,2vw,22px)] leading-none">{t}</span>
              <span className="text-[clamp(13px,2vw,22px)] opacity-70">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* WHAT'S INCLUDED — energetic hover cards */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="01" label="สิ่งที่คุณได้" />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {included.map((it, i) => (
            <Reveal key={it.k} delay={(i % 2) * 0.06}>
              <div className="card-soft p-7 md:p-9 h-full hover:border-cinnabar hover:bg-cinnabar/[0.06] hover:-translate-y-0.5 transition-all duration-200">
                <div className="num-display text-cinnabar text-[26px] leading-none">{`0${i + 1}`}</div>
                <h3 className="mt-4 font-unbounded text-[18px] md:text-[22px] tracking-[-0.01em]">{it.k}</h3>
                <p lang="th" className="mt-3 font-thai thai-wrap text-[14px] leading-[1.7] text-muted-foreground">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* STATS — honest, energetic */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-16 md:py-20 grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-10">
        {[
          { to: 4, suffix: "+", label: "แพลตฟอร์มหลัก", sub: "Meta · TikTok · Google · LINE" },
          { to: 100, suffix: "%", label: "คุณถือบัญชีเอง", sub: "เติมเอง เห็นยอดจริงทุกบาท" },
          { to: 0, suffix: "%", label: "บวกค่าแอด", sub: "เราไม่กิน % ของงบ ad spend" },
        ].map((s, i) => (
          <Reveal key={s.label} delay={i * 0.07}>
            <div>
              <CountUp to={s.to} suffix={s.suffix} decimals={0}
                className="num-display text-cinnabar text-[clamp(48px,7vw,80px)] leading-none"
                suffixClassName="text-[0.5em] ml-0.5" />
              <div lang="th" className="mt-4 font-unbounded text-[15px] md:text-[17px] tracking-[-0.01em]">{s.label}</div>
              <div lang="th" className="mt-1.5 font-mono text-[10px] tracking-[0.1em] uppercase text-muted-foreground">{s.sub}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* PRICING — has rate card */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
        <div>
          <SectionLabel index="02" label="ราคา" />
          <Reveal delay={0.05}>
            <h2 lang="th" className="mt-6 font-thai font-bold text-[clamp(30px,5vw,56px)] leading-[1.0] tracking-[-0.02em] max-w-[12ch]">
              ราคาชัด <span className="text-cinnabar">เริ่มได้เลย.</span>
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
      primary={{ label: "เริ่มต้นบทสนทนา", to: "/contact?pkg=Online" }}
      secondary={{ label: "ดูแพ็กเกจ", to: "/package" }}
      tone="snow"
    />
  </div>
);

export default Online;
