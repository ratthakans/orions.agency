import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SimpleMarquee from "@/components/SimpleMarquee";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import workHongmove from "@/assets/hongmove.png";
import workDemocrat from "@/assets/democrat.jpg";
import workRtaf from "@/assets/rtaf.jpg";
import workGcoo from "@/assets/gcoo.jpg";
import workHeavy from "@/assets/heavy-organizer.jpg";
import hongmoveLogo from "@/assets/logos/hongmove.png";

const services = [
  { n: "01", en: "Branding",           th: "วางตัวตนแบรนด์ให้คมและจำง่าย" },
  { n: "02", en: "Content Production", th: "ถ่ายทำ ตัดต่อ ครบจบในทีมเดียว" },
  { n: "03", en: "Social Media",       th: "ดูแลคอนเทนต์ครบทุกแพลตฟอร์ม" },
  { n: "04", en: "Paid Ads",           th: "ยิงแอดให้คุ้ม ทุกบาทมีเหตุผล" },
];

const projects = [
  { n: "01", title: "Hongmove",             niche: "PROPTECH",   scope: "Brand · Web · Content",     impact: "+312% sign-ups",      img: workHongmove },
  { n: "02", title: "Democrat Party",       niche: "POLITICS",   scope: "Campaign · Film · Social",  impact: "12M+ impressions",    img: workDemocrat },
  { n: "03", title: "Royal Thai Air Force", niche: "GOVERNMENT", scope: "Film · Production · Post",  impact: "2.1M views",          img: workRtaf },
  { n: "04", title: "GCOO",                 niche: "MOBILITY",   scope: "Brand · Launch campaign",   impact: "+540% downloads",     img: workGcoo },
  { n: "05", title: "Heavy Organizer",      niche: "EVENTS",     scope: "Brand · Event film · Recap", impact: "+88% conversion",    img: workHeavy },
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

    {/* COVER — split layout, image left, quote right */}
    <section className="relative min-h-screen flex flex-col">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2">
        {/* Left: full-bleed mockup image (replace with team/studio photo) */}
        <div className="relative bg-muted overflow-hidden order-2 md:order-1 min-h-[55vh] md:min-h-0">
          <img
            src={workDemocrat}
            alt="ØRIONS studio"
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />
        </div>

        {/* Right: quote */}
        <div className="relative flex flex-col justify-center px-6 md:px-14 lg:px-20 py-20 md:py-0 order-1 md:order-2">
          <Reveal>
            <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-10 md:mb-14">
              — BANGKOK · EST. 2026
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-[34px] md:text-[48px] lg:text-[60px] leading-[1.05] tracking-[-0.025em] text-balance">
              We don't just shoot content,<br />
              <span className="italic font-light">we shape brands.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-10 md:mt-12 font-thai text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground max-w-[420px]">
              ทีมเดียว ครบจบ ตั้งแต่ไอเดียถึง final cut.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="relative border-t border-foreground/15 py-5">
        <SimpleMarquee
          duration={42}
          items={["SOCIAL MEDIA", "BRANDING", "CONTENT PRODUCTION", "PAID ADVERTISING"]}
        />
      </div>
    </section>

    {/* SERVICES */}
    <section className="px-6 md:px-10">
      <div className="border-t border-foreground py-24 md:py-32 max-w-[1280px] mx-auto">
        <Reveal>
          <div>
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
              — WHAT WE DO
            </div>
            <h2 className="font-display h-display-xs">
              สี่สิ่งที่เราทำ ให้แบรนด์คุณ.
            </h2>
          </div>
        </Reveal>

        <ul className="mt-16 md:mt-24 border-t border-foreground">
          {services.map((s, i) => (
            <Reveal key={s.en} delay={0.04 * i}>
              <li className="group border-b border-foreground">
                <div className="grid grid-cols-[auto_1fr] md:grid-cols-[80px_1fr_1fr] items-baseline gap-x-6 md:gap-x-10 py-7 md:py-9 transition-[padding,color] duration-300 group-hover:md:pl-4">
                  <span className="font-mono text-[11px] tracking-[0.25em] text-muted-foreground self-center">
                    {s.n}
                  </span>
                  <h3 className="font-display text-[24px] md:text-[40px] leading-[1.05] tracking-[-0.02em]">
                    {s.en}
                  </h3>
                  <p className="col-span-2 md:col-span-1 mt-2 md:mt-0 font-thai text-[14px] md:text-[15px] leading-[1.65] text-muted-foreground md:text-right">
                    {s.th}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>

    {/* SELECTED WORK */}
    <section className="px-6 md:px-10">
      <div className="border-t border-foreground py-24 md:py-32 max-w-[1280px] mx-auto">
        <Reveal>
          <div>
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
              — SELECTED WORK
            </div>
            <h2 className="font-display h-display-xs">
              แบรนด์จริง ผลลัพธ์จริง.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Carousel opts={{ align: "start", loop: false }} className="mt-16 md:mt-20">
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
            <div className="mt-8 flex items-center justify-end gap-3">
              <CarouselPrevious className="static translate-y-0 h-10 w-10 rounded-none border-foreground" />
              <CarouselNext className="static translate-y-0 h-10 w-10 rounded-none border-foreground" />
            </div>
          </Carousel>
        </Reveal>
      </div>
    </section>

    {/* TRUSTED BY — light, borderless logo wall */}
    <section className="px-6 md:px-10">
      <div className="border-t border-foreground py-24 md:py-32 max-w-[1280px] mx-auto">
        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            — TRUSTED BY
          </div>
        </Reveal>

        <div className="mt-14 md:mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-10 gap-y-12 md:gap-y-16">
          {trustedBy.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center text-center cursor-default"
            >
              {brand.logo ? (
                <img
                  src={brand.logo}
                  alt={brand.name}
                  loading="lazy"
                  className="max-h-7 md:max-h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              ) : (
                <span className="font-display text-[11px] md:text-[12px] tracking-[0.06em] text-muted-foreground hover:text-foreground transition-colors">
                  {brand.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-24 md:py-36 max-w-[900px] mx-auto text-center">
        <Reveal>
          <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-8">
            — LET'S TALK
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display h-display-md text-balance">
            เริ่มจากไอเดีย จบที่ final cut.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 font-thai text-[15px] md:text-[16px] leading-[1.7] text-muted-foreground max-w-[480px] mx-auto">
            ทีมเดียว ไม่ต้องส่งต่อ คุยฟรี 30 นาที
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <Link
            to="/contact"
            className="mt-10 group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 index-badge border border-foreground hover:gap-4 transition-all duration-300"
          >
            <span>เริ่มคุยกับเรา</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  </div>
);

export default Index;
