import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import workNorthwind from "@/assets/work-northwind.jpg";
import workAtlas from "@/assets/work-atlas.jpg";
import workKoha from "@/assets/work-koha.jpg";
import workLumen from "@/assets/work-lumen.jpg";
import workSera from "@/assets/work-sera.jpg";
import workMuse from "@/assets/work-muse.jpg";
import workOrbit from "@/assets/work-orbit.jpg";
import workField from "@/assets/work-field.jpg";
import workVela from "@/assets/work-vela.jpg";

const works = [
  {
    slug: "northwind-electric",
    title: "Northwind Electric",
    service: "Film & Production",
    type: "Campaign Film",
    brief: { en: "A cinematic campaign film launching Northwind's entry into the Southeast Asian EV market.", th: "Campaign film ระดับภาพยนตร์สำหรับการเปิดตัว Northwind ในตลาด EV" },
    deliverables: ["Campaign Film", "Director's Cut", "Social Cutdowns", "Behind the Scenes"],
    challenge: "Northwind needed to launch in Southeast Asia — a market already crowded with established EV brands. They had no brand awareness and no emotional connection with the audience.",
    approach: "We created a cinematic campaign film that focused on the feeling of driving electric in Bangkok's streets — not the specs. The film positioned Northwind as a lifestyle brand, not just an EV company.",
    result: "The launch campaign generated 2.3M organic views in the first week. Brand search volume increased 180% in Thailand within 3 months.",
    image: workNorthwind,
  },
  {
    slug: "atlas-property-group",
    title: "Atlas Property Group",
    service: "Film & Production",
    type: "Documentary",
    brief: { en: "A brand documentary capturing the vision behind Atlas's luxury developments.", th: "Brand documentary ถ่ายทอดวิสัยทัศน์เบื้องหลังโครงการ luxury ของ Atlas" },
    deliverables: ["Documentary Film", "Interview Series", "Sizzle Reel", "Photography"],
    challenge: "Atlas was perceived as just another luxury property developer. They needed to differentiate in an oversaturated premium real estate market.",
    approach: "We produced a documentary that told the founder's story — why these buildings exist and who they're built for. It shifted the conversation from square meters to meaning.",
    result: "The documentary became Atlas's most shared piece of content. Pre-sales for the featured development exceeded targets by 40%.",
    image: workAtlas,
  },
  {
    slug: "koha-culture-studio",
    title: "Koha Culture Studio",
    service: "Creative Communication",
    type: "Brand Story",
    brief: { en: "A brand story video series exploring contemporary art and community.", th: "ซีรีส์วิดีโอเรื่องราวแบรนด์สำรวจศิลปะร่วมสมัยและชุมชน" },
    deliverables: ["Brand Video", "Artist Profiles", "Event Documentation", "Social Content"],
    challenge: "Koha was a hidden gem in Bangkok's art scene — incredible work but almost invisible to a broader audience.",
    approach: "We created a video series profiling the artists and their processes, making the studio accessible without dumbing it down. Each piece was designed for shareability.",
    result: "Social following grew 300% in 4 months. Three artist profiles went viral, bringing international attention to the studio.",
    image: workKoha,
  },
  {
    slug: "lumen-health",
    title: "Lumen Health",
    service: "Creative Partner",
    type: "Content System",
    brief: { en: "A comprehensive content system for a digital health platform.", th: "ระบบ content ครบวงจรสำหรับแพลตฟอร์มสุขภาพดิจิทัล" },
    deliverables: ["Content Strategy", "Editorial Calendar", "Video Series", "Blog System"],
    challenge: "Lumen had great technology but couldn't communicate its value in a way that resonated with everyday users.",
    approach: "We built a complete content system — from editorial strategy to monthly video series — that translated complex health tech into human stories people actually cared about.",
    result: "User engagement increased 4x. The content system now generates 60% of new user signups organically.",
    image: workLumen,
  },
  {
    slug: "sera-hospitality",
    title: "Sera Hospitality",
    service: "Film & Production",
    type: "Campaign Film",
    brief: { en: "A campaign film capturing the essence of Sera's luxury hospitality.", th: "Campaign film ถ่ายทอดแก่นแท้ของ luxury hospitality ของ Sera" },
    deliverables: ["Hero Film", "Property Films", "Social Series", "Print Campaign"],
    challenge: "Sera's properties were stunning but their marketing felt generic — indistinguishable from any other luxury hotel brand.",
    approach: "We filmed a hero campaign that focused on the moments between the amenities — the quiet, personal, human moments that make a stay memorable.",
    result: "Direct bookings increased 35%. The campaign won recognition at two regional hospitality marketing awards.",
    image: workSera,
  },
  {
    slug: "muse-education",
    title: "Muse Education",
    service: "Creative Communication",
    type: "Brand Story",
    brief: { en: "A brand story film positioning Muse as the future of creative education.", th: "Brand story film วาง positioning ให้ Muse เป็นอนาคตของ creative education" },
    deliverables: ["Brand Film", "Student Stories", "Campus Tour", "Recruitment Video"],
    challenge: "Muse was competing against established universities with bigger budgets and longer reputations.",
    approach: "Instead of competing on prestige, we told the stories of Muse students who were already doing remarkable work.",
    result: "Applications increased 55% year-over-year. The brand film became the most-watched education content in Thailand that quarter.",
    image: workMuse,
  },
  {
    slug: "orbit-fintech",
    title: "Orbit Fintech",
    service: "Creative Transformation",
    type: "Brand Transformation",
    brief: { en: "Complete creative transformation for a fintech startup — from positioning to campaign.", th: "Creative transformation ครบวงจรสำหรับ fintech startup — จาก positioning สู่ campaign" },
    deliverables: ["Positioning", "Narrative", "Campaign Concept", "Content Direction"],
    challenge: "Orbit was just another fintech app in a sea of similar products. Users couldn't tell what made them different.",
    approach: "We repositioned Orbit from 'easy payments' to 'financial freedom for freelancers' — a specific audience with a specific need.",
    result: "35% increase in average deal size. User acquisition cost dropped 40% as messaging became more targeted and resonant.",
    image: workOrbit,
  },
  {
    slug: "field-notes-coffee",
    title: "Field Notes Coffee",
    service: "Film & Production",
    type: "Documentary",
    brief: { en: "A documentary following the journey from farm to cup.", th: "สารคดีตามเส้นทางจากไร่ถึงแก้ว" },
    deliverables: ["Documentary", "Origin Series", "Barista Profiles", "Social Content"],
    challenge: "Field Notes had an incredible supply chain story — direct trade, fair prices, amazing farms — but nobody knew about it.",
    approach: "We followed the coffee from mountain farms in northern Thailand to the cup in Bangkok. Raw, beautiful, honest filmmaking.",
    result: "The documentary series generated 800K+ views. Wholesale inquiries increased 200%.",
    image: workField,
  },
  {
    slug: "vela-fashion",
    title: "Vela Fashion",
    service: "Creative Transformation",
    type: "Brand Transformation",
    brief: { en: "A complete brand transformation for Vela's debut collection launch.", th: "Brand transformation ครบวงจรสำหรับการเปิดตัวคอลเลกชันแรกของ Vela" },
    deliverables: ["Positioning", "Campaign Film", "Lookbook", "Launch Strategy"],
    challenge: "Vela was launching their debut collection with zero brand recognition in a saturated fashion market.",
    approach: "We built everything from scratch — positioning, visual identity, campaign film, and launch strategy. The concept centered on 'quiet confidence.'",
    result: "The debut collection sold out in 2 weeks. Vela was featured in 5 major fashion publications within the first month.",
    image: workVela,
  },
];

const WorkDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const work = works.find((w) => w.slug === slug);

  if (!work) {
    return (
      <main className="bg-background min-h-screen grain-overlay">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-[48px] text-foreground mb-4">Project Not Found</h1>
            <Link to="/work" className="font-mono text-[11px] tracking-[0.12em] uppercase text-accent-warm hover:text-foreground transition-colors">
              ← Back to Work
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title={`${work.title} — ØRIONS`}
        description={work.brief.en}
        path={`/work/${work.slug}`}
      />
      <Navbar />

      {/* Hero Image */}
      <section className="pt-[60px]">
        <div className="w-full aspect-[21/9] md:aspect-[2.5/1] overflow-hidden relative">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            src={work.image}
            alt={work.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      </section>

      {/* Project Info */}
      <section className="px-4 sm:px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <Link to="/work" className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300">
                ← Work
              </Link>
              <span className="text-muted-foreground/30 text-[8px]">●</span>
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm/60">{work.service}</span>
              <span className="text-muted-foreground/30 text-[8px]">●</span>
              <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-foreground/50">{work.type}</span>
            </div>
            <h1 className="font-display text-[clamp(44px,7vw,100px)] leading-[0.9] tracking-[0.01em] text-foreground mb-6">
              {work.title}
            </h1>
            <p className="font-body text-[18px] leading-[1.7] text-muted-foreground max-w-2xl">
              {work.brief[lang]}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Challenge / Approach / Result */}
      <section className="px-4 sm:px-6 md:px-12 py-16 md:py-24 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <AnimatedSection delay={0}>
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm/60 mb-4">Challenge</p>
                <p className="font-body text-[15px] leading-[1.8] text-muted-foreground">{work.challenge}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm/60 mb-4">Approach</p>
                <p className="font-body text-[15px] leading-[1.8] text-muted-foreground">{work.approach}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm/60 mb-4">Result</p>
                <p className="font-body text-[15px] leading-[1.8] text-foreground">{work.result}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="px-4 sm:px-6 md:px-12 py-16 md:py-24 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm/60 mb-8">Deliverables</p>
          </AnimatedSection>
          <div className="space-y-0">
            {work.deliverables.map((d, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="py-5 border-b border-border flex items-center justify-between group">
                  <span className="font-body text-[16px] text-foreground/80 group-hover:text-accent-warm transition-colors duration-300">{d}</span>
                  <span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground/30">{String(i + 1).padStart(2, "0")}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 md:px-12 py-24 md:py-32 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-display text-[clamp(32px,5vw,64px)] leading-[0.92] tracking-[0.01em] text-foreground mb-6">
              WANT WORK LIKE THIS?
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-8 mt-10">
              <Link to="/contact" className="font-mono text-[11px] tracking-[0.12em] uppercase text-primary-foreground bg-primary px-10 py-3.5 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300">
                Start a Project
              </Link>
              <Link to="/work" className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300">
                View All Work <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WorkDetailPage;
