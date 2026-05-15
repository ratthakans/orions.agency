import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles, Camera, Megaphone, LineChart, Palette } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SimpleMarquee from "@/components/SimpleMarquee";
import TypingLoop from "@/components/TypingLoop";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import workHongmove from "@/assets/hongmove.png";
import workDemocrat from "@/assets/democrat.jpg";
import workRtaf from "@/assets/rtaf.jpg";
import workGcoo from "@/assets/gcoo.jpg";
import hongmoveLogo from "@/assets/logos/hongmove.png";

const accent = "text-gradient";

const services = [
  { icon: Palette,    en: "Branding",     th: "วางตัวตนแบรนด์ให้คมและจำง่าย",  tag: "01" },
  { icon: Camera,     en: "Content",      th: "ถ่ายทำ ตัดต่อ ครบจบในทีมเดียว",  tag: "02" },
  { icon: Megaphone,  en: "Paid Ads",     th: "ยิงแอดให้คุ้ม ทุกบาทมีเหตุผล",   tag: "03" },
  { icon: LineChart,  en: "Strategy",     th: "วางแผน วัดผล ปรับจริงทุกเดือน",  tag: "04" },
  { icon: Sparkles,   en: "Social Media", th: "ดูแลคอนเทนต์ครบทุกแพลตฟอร์ม",   tag: "05" },
];

const projects = [
  { n: "01", title: "Hongmove",             niche: "PROPTECH",   scope: "Brand · Web · Content",     impact: "+312% sign-ups",      body: "เปิดตัวแพลตฟอร์มเช่าบ้านครบทั้งระบบแบรนด์ เว็บไซต์ และคอนเทนต์", img: workHongmove },
  { n: "02", title: "Democrat Party",       niche: "POLITICS",   scope: "Campaign · Film · Social",  impact: "12M+ impressions",    body: "แคมเปญระดับชาติ ตัดต่อไว ส่งทันทุกแพลตฟอร์ม",                  img: workDemocrat },
  { n: "03", title: "Royal Thai Air Force", niche: "GOVERNMENT", scope: "Film · Production · Post",  impact: "2.1M views",          body: "งานโปรดักชันและโพสต์โปรดักชันของหนังทางการ RTAF",            img: workRtaf },
  { n: "04", title: "GCOO",                 niche: "MOBILITY",   scope: "Brand · Launch campaign",   impact: "+540% downloads",     body: "แคมเปญเปิดตัวแอป e-scooter ครบทั้งแบรนด์ OOH และโซเชียล",     img: workGcoo },
];

type TrustedBrand = { name: string; logo?: string };
const trustedBy: TrustedBrand[] = [
  { name: "HONGMOVE", logo: hongmoveLogo },
  { name: "RTAF" }, { name: "DEMOCRAT" }, { name: "GCOO" },
  { name: "MAISON LUMIÈRE" }, { name: "SAINT MANOR" },
  { name: "HÔTEL VERGÉ" }, { name: "CALA / BKK" },
  { name: "NORTH MERIDIAN" }, { name: "AT.09" },
  { name: "CAFÉ ORSAY" }, { name: "STUDIO — KIN" },
  { name: "PLAYA NORTE" }, { name: "CASA · SOL" },
  { name: "MARLOW & CO." }, { name: "HEAVY ORG." },
  { name: "MYHOTEL" }, { name: "KHAOYAI CC" },
];

const Index = () => (
  <div id="top">
    <SEO
      title="ØRIONS — Boutique creative agency · Bangkok"
      description="A boutique Bangkok agency for branding, content and paid ads. From idea to final cut — one team, no handoff."
      path="/"
    />

    {/* COVER */}
    <section className="relative min-h-screen flex flex-col bg-foreground text-background overflow-hidden">
      <div className="relative flex-1 flex flex-col items-center justify-center text-center px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-[10px] tracking-[0.4em] text-background/60 mb-10 md:mb-14">
            BANGKOK · EST. 2026
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-brand h-display-xl leading-[0.85] text-background">ØRIONS</h1>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-12 md:mt-16 font-display text-[14px] md:text-[18px] tracking-[-0.01em] max-w-[640px]">
            Boutique <TypingLoop text="creative agency" className={accent} /> · เล่าแบรนด์ให้คนจำ
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <Link
            to="/services"
            className="mt-14 group inline-flex items-center gap-3 bg-background text-foreground px-7 py-4 index-badge border border-background hover:gap-4 transition-all duration-300"
          >
            <span>ดูบริการของเรา · See services</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>

      <div className="pointer-events-none absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="font-mono text-[9px] tracking-[0.4em] text-background/45">SCROLL</div>
        <div className="w-px h-10 bg-background/25" />
      </div>

      <div className="relative border-t border-background/15 py-5">
        <SimpleMarquee
          duration={42}
          items={["SOCIAL MEDIA", "BRANDING", "CONTENT PRODUCTION", "PAID ADVERTISING", "STRATEGY"]}
        />
      </div>
    </section>

    {/* SERVICES */}
    <section className="px-6 md:px-10">
      <div className="border-t border-foreground py-20 md:py-28 max-w-[1280px] mx-auto">
        <Reveal>
          <div className="flex items-end justify-between gap-8 flex-wrap">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
                — WHAT WE DO · บริการของเรา
              </div>
              <h2 className="font-display h-display-sm">
                ทีมเดียว จบครบ <span className={accent}>ตั้งแต่ idea ถึง final cut.</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              ดูทั้งหมด · All services
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-foreground">
          {services.map((s, i) => (
            <Reveal key={s.en} delay={0.04 * i}>
              <div className="group relative h-full p-6 md:p-7 border-r border-b border-foreground hover:bg-foreground hover:text-background transition-colors duration-300">
                <div className="flex items-center justify-between">
                  <s.icon className="w-5 h-5" strokeWidth={1.25} />
                  <span className="font-mono text-[9px] tracking-[0.25em] text-muted-foreground group-hover:text-background/55">— {s.tag}</span>
                </div>
                <h3 className="mt-10 font-display text-[20px] md:text-[22px] tracking-[-0.01em]">{s.en}</h3>
                <p className="mt-3 font-thai text-[13px] leading-[1.65] text-muted-foreground group-hover:text-background/70">
                  {s.th}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* SELECTED WORK — slide right */}
    <section className="px-6 md:px-10">
      <div className="border-t border-foreground py-20 md:py-28 max-w-[1280px] mx-auto">
        <Reveal>
          <div className="flex items-end justify-between gap-8 flex-wrap">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
                — SELECTED WORK · งานที่ผ่านมา
              </div>
              <h2 className="font-display h-display-sm">
                แบรนด์จริง <span className={accent}>ผลลัพธ์จริง.</span>
              </h2>
            </div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              {projects.length} CASES · SLIDE →
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Carousel opts={{ align: "start", loop: false }} className="mt-14 md:mt-16">
            <CarouselContent className="ml-0">
              {projects.map((w) => (
                <CarouselItem key={w.n} className="pl-0 pr-6 md:pr-8 basis-[85%] sm:basis-1/2 lg:basis-1/3">
                  <Link to="/work" className="group block">
                    <div className="relative w-full overflow-hidden bg-muted" style={{ aspectRatio: "4 / 5" }}>
                      <img
                        src={w.img}
                        alt={`${w.title} — ${w.scope}`}
                        loading="lazy"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-[1.04]"
                      />
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[9px] tracking-[0.25em] text-background/95 mix-blend-difference">
                        <span>— {w.n}</span>
                        <span>{w.niche}</span>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 bg-foreground text-background translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out p-5 md:p-6">
                        <div className="font-mono text-[9px] tracking-[0.25em] text-background/55">
                          — {w.scope}
                        </div>
                        <div className={`mt-2 font-display ${accent} text-[20px] md:text-[24px] leading-[1.05] tracking-[-0.02em] tabular-nums`}>
                          {w.impact}
                        </div>
                        <h3 className="mt-3 font-display text-[13px] md:text-[14px] tracking-[-0.005em] leading-tight text-background/85">
                          {w.title}
                        </h3>
                        <p className="mt-2 font-thai text-[11px] leading-[1.6] text-background/55 line-clamp-3">
                          {w.body}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-[15px] md:text-[16px] tracking-[-0.01em] truncate">
                        {w.title}
                      </h3>
                      <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-muted-foreground shrink-0">
                        {w.niche}
                      </span>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex items-center justify-between gap-4">
              <Link
                to="/work"
                className="group inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                ดูงานทั้งหมด · See all work
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <div className="flex gap-3">
                <CarouselPrevious className="static translate-y-0 h-10 w-10 rounded-none border-foreground" />
                <CarouselNext className="static translate-y-0 h-10 w-10 rounded-none border-foreground" />
              </div>
            </div>
          </Carousel>
        </Reveal>
      </div>
    </section>

    {/* TRUSTED BY */}
    <section className="bg-foreground text-background px-6 md:px-10">
      <div className="border-t border-background/20 py-24 md:py-32 max-w-[1280px] mx-auto">
        <Reveal delay={0.05}>
          <div className="flex items-end justify-between gap-8 flex-wrap">
            <h2 className="font-display h-display-sm max-w-[820px]">
              40+ แบรนด์ไว้ใจเรา <br className="hidden md:block" />
              ทั่ว F&amp;B, fashion, <span className={accent}>และ hospitality.</span>
            </h2>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-background/45">
              [ Selected · Q2 2026 ]
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-background/15">
          {trustedBy.map((brand, i) => {
            const cols = 6;
            const isLastCol = (i % cols) === cols - 1;
            const totalRows = Math.ceil(trustedBy.length / cols);
            const currentRow = Math.floor(i / cols);
            const isLastRow = currentRow === totalRows - 1;
            return (
              <div
                key={brand.name}
                className={`relative aspect-[2/1] flex items-center justify-center text-center px-4 cursor-default ${!isLastCol ? "border-r border-background/15" : ""} ${!isLastRow ? "border-b border-background/15" : ""}`}
              >
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    loading="lazy"
                    className="max-h-8 md:max-h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity invert"
                  />
                ) : (
                  <span className="font-display text-[11px] md:text-[12px] tracking-[0.04em] text-background/55">{brand.name}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-20 md:py-28 max-w-[900px] mx-auto text-center">
        <Reveal>
          <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-8">
            — READY WHEN YOU ARE
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display h-display-md text-balance">
            เริ่มจากไอเดีย <span className={accent}>จบที่ final cut.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 font-thai text-[15px] md:text-[16px] leading-[1.7] text-muted-foreground max-w-[520px] mx-auto">
            ทีมเดียว ไม่ต้องส่งต่อ คุยฟรี 30 นาที ตอบกลับใน 24 ชั่วโมง
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 index-badge border border-foreground hover:gap-4 transition-all duration-300"
            >
              <span>เริ่มคุยกับเรา · Work with us</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 px-7 py-4 index-badge border border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              <span>ดูบริการ · Services</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);

export default Index;
