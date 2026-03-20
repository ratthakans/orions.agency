import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

const industries = [
  {
    slug: "hospitality",
    num: "01",
    title: "Hospitality",
    subtitle: "Hotels & Resorts",
    desc: { en: "We help hotels create demand beyond OTA and price wars — through narrative, campaign, and content that makes people want to book directly.", th: "เราช่วยโรงแรมสร้าง demand นอกเหนือจาก OTA และสงครามราคา — ผ่าน narrative, campaign และ content ที่ทำให้คนอยากจองตรง" },
    capabilities: ["Demand Narrative", "Campaign Film", "Booking Demand", "Content System"],
    stat: { label: "Weekday demand lift", value: "+10–25%" },
  },
  {
    slug: "golf",
    num: "02",
    title: "Golf",
    subtitle: "Golf Clubs & Courses",
    desc: { en: "We redefine how golf clubs attract the next generation — transforming traditional sport into lifestyle experience through creative.", th: "เราปรับเปลี่ยนวิธีที่สนามกอล์ฟดึงดูดคนรุ่นใหม่ — เปลี่ยนกีฬาดั้งเดิมให้เป็น lifestyle experience ผ่าน creative" },
    capabilities: ["Lifestyle Positioning", "Demand Strategy", "Hero Film", "Audience Growth"],
    stat: { label: "New segment entry", value: "1.5–2×" },
  },
  {
    slug: "concert",
    num: "03",
    title: "Concert",
    subtitle: "Concerts & Live Events",
    desc: { en: "We turn events into cultural moments — creating narrative, FOMO, and hype systems that sell tickets faster.", th: "เราเปลี่ยนอีเวนต์ให้เป็น cultural moment — สร้าง narrative, FOMO และระบบ hype ที่ขายบัตรได้เร็วขึ้น" },
    capabilities: ["Narrative Design", "FOMO Campaign", "Hype System", "Ticket Demand"],
    stat: { label: "Sell-out acceleration", value: "Faster" },
  },
  {
    slug: "tech",
    num: "04",
    title: "Tech",
    subtitle: "Tech Companies & Startups",
    desc: { en: "We help tech products become easier to understand, easier to use, and easier to choose — through clarity, narrative, and adoption campaigns.", th: "เราช่วยให้ผลิตภัณฑ์เทคโนโลยีเข้าใจง่าย ใช้ง่าย และเลือกง่าย — ผ่านความชัดเจน narrative และ adoption campaign" },
    capabilities: ["Product Clarity", "Adoption Narrative", "Campaign", "Conversion Content"],
    stat: { label: "Product understanding", value: "10× Clearer" },
  },
];

const PackageListPage = () => {
  const { lang, t } = useLanguage();

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="Industries We Excel In | ØRIONS"
        description="Hospitality, Golf, Concert, and Tech — we apply creative transformation to industries where ideas drive demand."
        path="/package"
      />
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <section className="pt-16 md:pt-24 pb-8 md:pb-12 px-4 sm:px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
                <span className="text-accent-warm mr-2">⬡</span> {t("Industries", "อุตสาหกรรม")}
              </p>
            </AnimatedSection>
            <TextReveal className="font-display text-[clamp(44px,6vw,96px)] leading-[0.9] tracking-[0.01em] text-foreground mb-6 max-w-5xl">
              WHERE WE EXCEL.
            </TextReveal>
            <AnimatedSection delay={0.2}>
              <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-2xl">
                {t(
                  "We go deep, not wide. These are the industries where our creative approach drives the most impact — because we understand the business, the audience, and the demand gaps.",
                  "เราลงลึก ไม่กว้าง นี่คืออุตสาหกรรมที่แนวทาง creative ของเราสร้าง impact ได้มากที่สุด — เพราะเราเข้าใจธุรกิจ กลุ่มเป้าหมาย และ demand gap"
                )}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Industries */}
        <section className="px-4 sm:px-6 md:px-12 py-12 md:py-20">
          <div className="max-w-7xl mx-auto space-y-0">
            {industries.map((ind, i) => (
              <AnimatedSection key={ind.slug} delay={i * 0.06}>
                <Link
                  to={`/package/${ind.slug}`}
                  className="group block border-t border-border hover:border-accent-warm/30 transition-colors duration-500"
                >
                  <div className="py-10 md:py-14">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-baseline gap-6 md:gap-10">
                        <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground/40">{ind.num}</span>
                        <div>
                          <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-[0.9] tracking-[0.01em] text-foreground group-hover:text-accent-warm transition-colors duration-500 mb-2">
                            {ind.title}
                          </h2>
                          <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-foreground/50">
                            {ind.subtitle}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0 mt-4">
                        <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground group-hover:text-accent-warm transition-colors duration-300 hidden md:inline">
                          {t("Explore", "ดูรายละเอียด")}
                        </span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent-warm group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>

                    <div className="pl-[calc(11px+1.5rem)] md:pl-[calc(11px+2.5rem)]">
                      <p className="font-body text-[14px] leading-[1.7] text-foreground/50 max-w-2xl mb-6">
                        {ind.desc[lang]}
                      </p>
                      <div className="flex flex-wrap items-center gap-3">
                        {ind.capabilities.map((cap) => (
                          <span key={cap} className="font-mono text-[9px] tracking-[0.1em] uppercase text-muted-foreground/50 border border-border/50 px-2.5 py-1">
                            {cap}
                          </span>
                        ))}
                        <span className="font-mono text-[10px] tracking-[0.1em] text-accent-warm/60 ml-2">
                          {ind.stat.label}: <span className="text-accent-warm">{ind.stat.value}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
            <div className="border-t border-border" />
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 md:px-12 py-20 md:py-32 pb-32 md:pb-48">
          <div className="max-w-7xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-[0.92] tracking-[0.01em] text-foreground mb-4">
                DON'T SEE YOUR
              </h2>
              <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-[0.92] tracking-[0.01em] text-foreground mb-6">
                <span className="text-accent-gradient">INDUSTRY?</span>
              </h2>
              <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-xl mx-auto mb-10">
                {t(
                  "Our creative approach works across industries. If you have a demand problem, we have the ideas to solve it.",
                  "แนวทาง creative ของเราใช้ได้กับทุกอุตสาหกรรม ถ้าคุณมีปัญหาเรื่อง demand เรามีไอเดียที่จะแก้ไข"
                )}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8">
                <Link to="/contact" className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-background bg-foreground px-8 py-3 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300">
                  Talk to Us <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
                <Link to="/services" className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300">
                  View All Services <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default PackageListPage;
