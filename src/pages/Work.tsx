import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import SelectedWorkReel from "@/components/SelectedWorkReel";
import VideoReel, { type VideoReelItem } from "@/components/VideoReel";
import ShowRow, { type Show } from "@/components/ShowRow";

import CTA from "@/components/CTA";
import SEO from "@/components/SEO";
import hongmove from "@/assets/hongmove.webp";
import rtaf from "@/assets/rtaf.webp";
import khaoyai from "@/assets/khaoyai.jpg";
import democrat from "@/assets/democrat.webp";
import gcoo from "@/assets/gcoo.webp";
import myhotel from "@/assets/myhotel.webp";
import heavyOrganizer from "@/assets/heavy-organizer.webp";
import YouTubeFacade from "@/components/YouTubeFacade";

const SITE_URL = "https://orions.agency";

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
  { tag: "Creative Cut", name: "CC · 01", body: "Creative storytelling cut", videoId: "sCjPTr0CfXc" },
  { tag: "Creative Cut", name: "CC · 02", body: "Creative storytelling cut", videoId: "YQb_ueBfplM" },
  { tag: "Creative Cut", name: "CC · 03", body: "Creative storytelling cut", videoId: "p4JICbYbDow" },
  { tag: "Creative Cut", name: "CC · 04", body: "Creative storytelling cut", videoId: "ysrayxcXoF8" },
  { tag: "Creative Cut", name: "CC · 05", body: "Creative storytelling cut", videoId: "GH-hH8PXQ5E" },
  { tag: "Creative Cut", name: "CC · 06", body: "Creative storytelling cut", videoId: "OVU8YA9zLns" },
];


const entertainmentShows: Show[] = [
  {
    name: "เถื่อน TRAVEL",
    meta: "Travel · Documentary",
    body: "รายการสารคดีเดินทางที่ผสานวัฒนธรรมและการค้นหาตัวตน ผ่านเส้นทางที่ไม่คุ้นเคย",
    episodes: [
      { videoId: "s1x7o-sqphY", label: "EP 01" },
      { videoId: "2oyy7-2SuLU", label: "EP 02" },
      { videoId: "A5Bce6V_Sv4", label: "EP 03" },
      { videoId: "Oz3id2nOmDE", label: "EP 04" },
      { videoId: "KsQpdA359Jw", label: "EP 05" },
      { videoId: "peLn0WISMrM", label: "EP 06" },
      { videoId: "s1x7o-sqphY", label: "EP 07" },
    ],
  },
  {
    name: "THE UPGRADE",
    meta: "Documentary · Series",
    body: "เรื่องราวการยกระดับชีวิตผ่านมุมมองที่จริงและจริงใจ",
    episodes: [
      { videoId: "1XuM19cfaCs", label: "EP 01" },
      { videoId: "nVkxo3pfrVE", label: "EP 02" },
      { videoId: "8OXMw66-CmM", label: "EP 03" },
      { videoId: "6ynFgJdBxIg", label: "EP 04" },
      { videoId: "hG1enPTHCeQ", label: "EP 05" },
      { videoId: "z1pu_lsKrPg", label: "EP 06" },
      { videoId: "PQCbew-6Di0", label: "EP 07" },
      { videoId: "dv1hWfTQH2I", label: "EP 08" },
    ],
  },
  {
    name: "เกิด/แก่/เจ็บ/โต",
    meta: "Original Series · Thai PBS",
    body: "ซีรีส์สารคดีว่าด้วยช่วงชีวิตของผู้คนในสังคมไทย",
    episodes: Array.from({ length: 16 }, (_, i) => ({
      label: `EP ${String(i + 1).padStart(2, "0")}`,
      isPlaceholder: true,
    })),
  },
  {
    name: "ท่วงทำนองที่เลือนหาย",
    meta: "Music · Heritage",
    body: "ตามรอยเสียงดนตรีพื้นบ้านที่กำลังจะสูญหายไปจากแผ่นดิน",
    episodes: Array.from({ length: 10 }, (_, i) => ({
      label: `EP ${String(i + 1).padStart(2, "0")}`,
      isPlaceholder: true,
    })),
  },
];

const Work = () => (
  <div>
    <SEO
      title="Work — ØRIONS"
      description="Selected projects across politics, mobility, hospitality, healthcare and culture."
      path="/work"
      schema={[
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/work` },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: heroProjects.map((p, i) => ({
            "@type": "CreativeWork",
            position: i + 1,
            name: p.name,
            description: p.body,
            genre: p.tag,
          })),
        },
      ]}
    />

    <PageHero
      eyebrow="WORK · INDEX"
      verticalLabel="/ 02 · WORK"
      title={<>Sharper ideas<span className="text-muted-foreground">.</span><br />Real <span className="text-muted-foreground">outcomes.</span></>}
    />

    {/* SELECTED WORK */}
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-16 md:py-24">
      <SectionHeader left="SELECTED WORK" right="applied creative in action" />
      <SelectedWorkReel projects={heroProjects} />

      <div className="mt-12">
        <SelectedWorkReel projects={worksAcrossIndustries} size="sm" />
      </div>
      </div>
    </section>

    {/* MASTERY IN STORYTELLING — 21:9 cinematic video (full bleed) */}
    <section className="relative w-full overflow-hidden bg-foreground">
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "21 / 9" }}>
        <YouTubeFacade videoId="u4r7Szy3uxI" title="Mastery in Storytelling" ambient />
      </div>
    </section>

    {/* SOCIAL & COMMERCIALS — video reel */}
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-16 md:py-20">
      <h2 className="font-display h-display-sm">
        Social &amp; <span className="text-muted-foreground">Commercials</span>
      </h2>
      <VideoReel items={socialCommercials} />
      </div>
    </section>

    {/* ENTERTAINMENT & LONG-FORM — editorial alternating stack */}
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-16 md:py-24">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <h2 className="font-display h-display-sm">
          Entertainment &amp; <span className="text-muted-foreground">Long-form</span>
        </h2>
        <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
          {String(entertainmentShows.length).padStart(2, "0")} shows · documentary · culture
        </span>
      </div>
      <div className="mt-8 md:mt-10 flex flex-col">
        {entertainmentShows.map((show, i) => (
          <ShowRow key={show.name} show={show} index={i} isLast={i === entertainmentShows.length - 1} />
        ))}
      </div>
      </div>
    </section>

    {/* MUSIC & CREATIVE CONTENT — auto-scrolling marquees */}
    <section className="relative px-6 md:px-10 overflow-hidden">
      <div className="border-t border-foreground py-16 md:py-24">
      <div className="flex items-end justify-between gap-6 flex-wrap mb-8 md:mb-10">
        <h2 className="font-display h-display-sm">
          Music &amp; <span className="text-muted-foreground">Creative Content</span>
        </h2>
        <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
          18 films · music · culture
        </span>
      </div>

      <div className="space-y-2 md:space-y-3">
        <div>
          <VideoReel items={musicRow1} hideMeta hideControls />
        </div>
        <div>
          <VideoReel items={musicRow2} hideMeta hideControls />
        </div>
        <div>
          <VideoReel items={musicRow3} hideMeta hideControls />
        </div>
      </div>
      </div>
    </section>

    {/* CTA — editorial close, centered & calm */}
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-16 md:py-20 max-w-[760px] mx-auto text-center">
        <Reveal>
          <div className="index-badge text-muted-foreground mb-6">READY WHEN YOU ARE</div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display h-display-sm text-balance">
            Have a project<br />in <span className="text-muted-foreground">mind.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-5">
            <CTA to="/contact">Start a conversation</CTA>
            <CTA to="/contact#audit" variant="ghost">Or request the audit</CTA>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 inline-flex items-center gap-6 md:gap-8 font-mono text-[11px] md:text-[12px] tracking-[0.2em] uppercase text-muted-foreground">
            <a href="mailto:hello@orions.agency" className="hover:text-foreground transition-colors">
              hello@orions.agency
            </a>
            <span aria-hidden className="block w-px h-3 bg-muted-foreground" />
            <a href="tel:+66923905464" className="hover:text-foreground transition-colors">
              +66 92 390 5464
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);

export default Work;
