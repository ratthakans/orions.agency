import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import SelectedWorkReel from "@/components/SelectedWorkReel";
import VideoReel, { type VideoReelItem } from "@/components/VideoReel";
import LongFormStack from "@/components/LongFormStack";

import CTA from "@/components/CTA";
import SEO from "@/components/SEO";
import hongmove from "@/assets/hongmove.png";
import rtaf from "@/assets/rtaf.jpg";
import khaoyai from "@/assets/khaoyai.jpg";
import democrat from "@/assets/democrat.jpg";
import gcoo from "@/assets/gcoo.jpg";
import myhotel from "@/assets/myhotel.png";
import heavyOrganizer from "@/assets/heavy-organizer.jpg";

const heroProjects = [
  { tag: "MOBILITY", name: "HONGMOVE", body: "เปลี่ยนความซับซ้อนให้ดูง่าย ระบบสื่อสาร Seamless สำหรับ Taxi VIP", stat: "+25%", statLabel: "CONVERSION CLARITY", img: hongmove },
  { tag: "DEFENCE", name: "RTAF", body: "ยึดความน่าเชื่อถือคืนมา ปรับโฉมภาพลักษณ์ผ่าน High-end Production", stat: "2×", statLabel: "ENGAGEMENT QUALITY", img: rtaf },
  { tag: "HOSPITALITY", name: "KHAO YAI", body: "ยกระดับด้วยรสนิยม เปลี่ยนสนามกอล์ฟดั้งเดิมสู่ประสบการณ์พรีเมียม", stat: "30%", statLabel: "DECISION SPEED", img: khaoyai },
];

const worksAcrossIndustries = [
  { tag: "Political Communication", name: "DEMOCRAT PARTY", body: "การสื่อสารเชิงกลยุทธ์ภายใต้เงื่อนไขที่ท้าทาย", img: democrat },
  { tag: "Mobility", name: "GCOO", body: "Localization ระบบการเดินทางคนเมือง", img: gcoo },
  { tag: "Hospitality Tech", name: "MY HOTEL", body: "Smart Hotel ที่ใช้งานได้จริงรายแรกของไทย", img: myhotel },
  { tag: "National Campaign", name: "HEAVY ORGANIZER", body: "แคมเปญสื่อสารระดับประเทศที่สร้างแรงกระเพื่อมจริง", img: heavyOrganizer },
];

const socialCommercials: VideoReelItem[] = [
  { tag: "Sports · Football", name: "LEICESTER CITY", body: "แคมเปญสื่อสารแบรนด์ระดับสากล สำหรับสโมสรฟุตบอลพรีเมียร์ลีก", videoId: "T8j2S_Zewes" },
  { tag: "Esports", name: "BURIRAM ESPORT", body: "สร้างตัวตนทีม Esport ไทยให้ก้าวสู่เวทีระดับภูมิภาค", videoId: "KwHy9KieUxg" },
  { tag: "Healthcare", name: "SIRIRAJ HOSPITAL", body: "Storytelling ที่สื่อสารความน่าเชื่อถือของสถาบันการแพทย์ชั้นนำ", videoId: "z5JyydIxOwo" },
  { tag: "Automotive", name: "AUDI THAILAND", body: "High-end Production ที่ตีความ Premium Mobility ในแบบไทย", videoId: "_aEZ3MWhjV4" },
];

const musicRow1: VideoReelItem[] = [
  { tag: "Music Video", name: "MV · 01", body: "Original music video production", videoId: "sCjPTr0CfXc" },
  { tag: "Music Video", name: "MV · 02", body: "Original music video production", videoId: "YQb_ueBfplM" },
  { tag: "Music Video", name: "MV · 03", body: "Original music video production", videoId: "p4JICbYbDow" },
  { tag: "Music Video", name: "MV · 04", body: "Original music video production", videoId: "ysrayxcXoF8" },
  { tag: "Music Video", name: "MV · 05", body: "Original music video production", videoId: "GH-hH8PXQ5E" },
  { tag: "Music Video", name: "MV · 06", body: "Original music video production", videoId: "OVU8YA9zLns" },
];

const musicRow2: VideoReelItem[] = [
  { tag: "Visual Single", name: "VS · 01", body: "Creative content for music release", videoId: "WyDvMegEqBQ" },
  { tag: "Visual Single", name: "VS · 02", body: "Creative content for music release", videoId: "XMUshHa10xI" },
  { tag: "Visual Single", name: "VS · 03", body: "Creative content for music release", videoId: "EmitC7dokS0" },
  { tag: "Visual Single", name: "VS · 04", body: "Creative content for music release", videoId: "ey-M7sCsz-o" },
  { tag: "Visual Single", name: "VS · 05", body: "Creative content for music release", videoId: "2VNNdj4UjXY" },
  { tag: "Visual Single", name: "VS · 06", body: "Creative content for music release", videoId: "i2xgZRTqK_c" },
];

const musicRow3: VideoReelItem[] = [
  { tag: "Creative Cut", name: "CC · 01", body: "Creative storytelling cut", videoId: "LKFAtp_oxf0" },
  { tag: "Creative Cut", name: "CC · 02", body: "Creative storytelling cut", videoId: "YBXpSXAkej4" },
  { tag: "Creative Cut", name: "CC · 03", body: "Creative storytelling cut", videoId: "n2_rKXXzg8w" },
  { tag: "Creative Cut", name: "CC · 04", body: "Creative storytelling cut", videoId: "IOJV7hOB-9c" },
  { tag: "Creative Cut", name: "CC · 05", body: "Creative storytelling cut", videoId: "WFEAPxB47qc" },
  { tag: "Creative Cut", name: "CC · 06", body: "Creative storytelling cut", videoId: "8K6iMvHI_F8" },
];

const entertainmentLongForm: VideoReelItem[] = [
  { tag: "Travel · EP 01", name: "เถื่อน TRAVEL · 01", body: "รายการสารคดีเดินทางที่ผสานวัฒนธรรมและการค้นหาตัวตน", videoId: "s1x7o-sqphY" },
  { tag: "Travel · EP 02", name: "เถื่อน TRAVEL · 02", body: "ตอนใหม่ของการเดินทางสู่พื้นที่ที่ไม่คุ้นเคย", videoId: "2oyy7-2SuLU" },
  { tag: "Travel · EP 03", name: "เถื่อน TRAVEL · 03", body: "บทสนทนาและภาพระหว่างทางที่ไม่เคยถูกเล่า", videoId: "A5Bce6V_Sv4" },
  { tag: "Travel · EP 04", name: "เถื่อน TRAVEL · 04", body: "การค้นหาความหมายผ่านเส้นทางที่เลือกเอง", videoId: "Oz3id2nOmDE" },
  { tag: "Travel · EP 05", name: "เถื่อน TRAVEL · 05", body: "ภาพและเสียงของผู้คนในที่ห่างไกล", videoId: "KsQpdA359Jw" },
  { tag: "Travel · EP 06", name: "เถื่อน TRAVEL · 06", body: "ตอนพิเศษว่าด้วยมิตรภาพและการเดินทาง", videoId: "peLn0WISMrM" },
  { tag: "Documentary", name: "THE UPGRADE", body: "เรื่องราวการยกระดับชีวิตผ่านมุมมองที่จริงและจริงใจ", videoId: "nVkxo3pfrVE" },
  { tag: "Original Series", name: "เกิด/แก่/เจ็บ/โต", body: "ซีรีส์สารคดีว่าด้วยช่วงชีวิตของผู้คนในสังคมไทย", videoId: "W5mnOSlWVb4" },
  { tag: "Music · Culture", name: "เพลงลำคำเขื่อนแก้ว", body: "บันทึกเสียงและภาพของวัฒนธรรมหมอลำในยุคปัจจุบัน", videoId: "rx-a8myzwVg" },
  { tag: "Music · Heritage", name: "ท่วงทำนองที่เลือนหาย", body: "ตามรอยเสียงดนตรีพื้นบ้านที่กำลังจะสูญหายไปจากแผ่นดิน", videoId: "ASjm7TKqf-M" },
];

const Work = () => (
  <div>
    <SEO title="Work — ØRIONS" description="Selected projects across politics, mobility, hospitality, healthcare and culture." path="/work" />

    <PageHero
      eyebrow="WORK · INDEX"
      title={<>Sharper <span className="text-gradient">ideas</span>.<br />Real outcomes<span className="text-muted-foreground">.</span></>}
    />

    {/* SELECTED WORK */}
    <section className="relative px-6 md:px-10 py-20 md:py-24 border-t border-foreground">
      <SectionHeader left="SELECTED WORK" right="applied creative in action" />
      <SelectedWorkReel projects={heroProjects} />

      <div className="mt-20">
        <SelectedWorkReel projects={worksAcrossIndustries} size="sm" />
      </div>
    </section>

    {/* MASTERY IN STORYTELLING — 21:9 cinematic video */}
    <section className="relative w-full overflow-hidden border-t border-foreground bg-foreground">
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "21 / 9" }}>
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full pointer-events-none"
          src="https://www.youtube.com/embed/u4r7Szy3uxI?autoplay=1&mute=1&loop=1&playlist=u4r7Szy3uxI&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1&fs=0"
          title="Mastery in Storytelling"
          allow="autoplay; encrypted-media"
          frameBorder={0}
        />
      </div>
    </section>

    {/* SOCIAL & COMMERCIALS — video reel */}
    <section className="relative px-6 md:px-10 py-16 md:py-20 border-t border-foreground">
      <h2
        className="font-display leading-[1] tracking-[-0.02em]"
        style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
      >
        Social &amp; <span className="italic opacity-70">Commercials</span>
      </h2>
      <VideoReel items={socialCommercials} />
    </section>

    {/* ENTERTAINMENT & LONG-FORM — editorial alternating stack */}
    <section className="relative px-6 md:px-10 py-16 md:py-24 border-t border-foreground">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <h2
          className="font-display leading-[1] tracking-[-0.02em]"
          style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
        >
          Entertainment &amp; <span className="italic opacity-70">Long-form</span>
        </h2>
        <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
          {String(entertainmentLongForm.length).padStart(2, "0")} films · documentary · culture
        </span>
      </div>
      <LongFormStack items={entertainmentLongForm} />

      {/* เถื่อน TRAVEL — series row */}
      <div className="mt-16 md:mt-20">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h3
            className="font-display leading-[1] tracking-[-0.02em]"
            style={{ fontSize: "clamp(20px, 2.2vw, 30px)" }}
          >
            เถื่อน <span className="italic opacity-70">TRAVEL</span>
          </h3>
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
            {String(thuanTravel.length).padStart(2, "0")} episodes · travel series
          </span>
        </div>
        <VideoReel items={thuanTravel} />
      </div>
    </section>

    {/* MUSIC & CREATIVE CONTENT — auto-scrolling marquees */}
    <section className="relative py-16 md:py-20 border-t border-foreground overflow-hidden">
      <div className="px-6 md:px-10 flex items-end justify-between gap-6 flex-wrap mb-8 md:mb-10">
        <h2
          className="font-display leading-[1] tracking-[-0.02em]"
          style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
        >
          Music &amp; <span className="italic opacity-70">Creative Content</span>
        </h2>
        <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
          18 films · music · culture
        </span>
      </div>

      <div className="space-y-10 md:space-y-14">
        <div className="px-6 md:px-10">
          <VideoReel items={musicRow1} hideMeta />
        </div>
        <div className="px-6 md:px-10">
          <VideoReel items={musicRow2} hideMeta />
        </div>
        <div className="px-6 md:px-10">
          <VideoReel items={musicRow3} hideMeta />
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 md:px-10 py-24 md:py-32 border-t border-foreground">
      <Reveal>
        <h2 className="font-display leading-[0.92] tracking-[-0.03em] max-w-[800px]" style={{ fontSize: "clamp(40px, 6vw, 72px)" }}>
          Have a project in mind?
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-10">
          <CTA to="/contact">Start a conversation</CTA>
        </div>
      </Reveal>
    </section>
  </div>
);

export default Work;
