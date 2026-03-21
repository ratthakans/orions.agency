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

export const works = [
  {
    slug: "northwind-electric",
    title: "Northwind Electric",
    service: "Film & Production",
    type: "Campaign Film",
    brief: { en: "A cinematic campaign film launching Northwind's entry into the Southeast Asian EV market.", th: "Campaign film ระดับภาพยนตร์สำหรับการเปิดตัว Northwind ในตลาด EV" },
    deliverables: ["Campaign Film", "Director's Cut", "Social Cutdowns", "Behind the Scenes"],
    challenge: "Northwind needed to launch in Southeast Asia — a market already crowded with established EV brands. They had no brand awareness and no emotional connection with the audience.",
    approach: "We created a cinematic campaign film that focused on the feeling of driving electric in Bangkok's streets — not the specs. The film positioned Northwind as a lifestyle brand, not just an EV company.",
    result: "2.3M organic views in the first week. Brand search volume increased 180% in Thailand within 3 months.",
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
    result: "Pre-sales for the featured development exceeded targets by 40%.",
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
    approach: "We created a video series profiling the artists and their processes, making the studio accessible without dumbing it down.",
    result: "Social following grew 300% in 4 months. Three artist profiles went viral.",
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
    approach: "We built a complete content system that translated complex health tech into human stories people actually cared about.",
    result: "User engagement increased 4x. Content now generates 60% of new signups organically.",
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
    approach: "We filmed a hero campaign that focused on the quiet, personal, human moments that make a stay memorable.",
    result: "Direct bookings increased 35%. Won recognition at two regional hospitality marketing awards.",
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
    result: "Applications increased 55% year-over-year.",
    image: workMuse,
  },
  {
    slug: "orbit-fintech",
    title: "Orbit Fintech",
    service: "Creative Transformation",
    type: "Brand Transformation",
    brief: { en: "Complete creative transformation for a fintech startup.", th: "Creative transformation ครบวงจรสำหรับ fintech startup" },
    deliverables: ["Positioning", "Narrative", "Campaign Concept", "Content Direction"],
    challenge: "Orbit was just another fintech app. Users couldn't tell what made them different.",
    approach: "We repositioned Orbit from 'easy payments' to 'financial freedom for freelancers' — a specific audience with a specific need.",
    result: "35% increase in average deal size. User acquisition cost dropped 40%.",
    image: workOrbit,
  },
  {
    slug: "field-notes-coffee",
    title: "Field Notes Coffee",
    service: "Film & Production",
    type: "Documentary",
    brief: { en: "A documentary following the journey from farm to cup.", th: "สารคดีตามเส้นทางจากไร่ถึงแก้ว" },
    deliverables: ["Documentary", "Origin Series", "Barista Profiles", "Social Content"],
    challenge: "Field Notes had an incredible supply chain story but nobody knew about it.",
    approach: "We followed the coffee from mountain farms in northern Thailand to the cup in Bangkok. Raw, beautiful, honest filmmaking.",
    result: "800K+ views. Wholesale inquiries increased 200%.",
    image: workField,
  },
  {
    slug: "vela-fashion",
    title: "Vela Fashion",
    service: "Creative Transformation",
    type: "Brand Transformation",
    brief: { en: "A complete brand transformation for Vela's debut collection launch.", th: "Brand transformation ครบวงจรสำหรับการเปิดตัวคอลเลกชันแรกของ Vela" },
    deliverables: ["Positioning", "Campaign Film", "Lookbook", "Launch Strategy"],
    challenge: "Vela was launching with zero brand recognition in a saturated fashion market.",
    approach: "We built everything from scratch — positioning, visual identity, campaign film, and launch strategy centered on 'quiet confidence.'",
    result: "Debut collection sold out in 2 weeks. Featured in 5 major fashion publications.",
    image: workVela,
  },
];

const WorkDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const work = works.find((w) => w.slug === slug);
  const workIndex = works.findIndex((w) => w.slug === slug);
  const nextWork = works[(workIndex + 1) % works.length];
  const prevWork = works[(workIndex - 1 + works.length) % works.length];

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

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Link to="/work" className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300 mb-8">
            ← All Work
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm/60">{work.service}</span>
            <span className="text-muted-foreground/30 text-[8px]">●</span>
            <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-foreground/50">{work.type}</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-[clamp(36px,6vw,80px)] leading-[0.9] tracking-[0.01em] text-foreground mb-4"
          >
            {work.title}
          </motion.h1>
          <p className="font-body text-[16px] leading-[1.7] text-muted-foreground max-w-2xl">
            {work.brief[lang]}
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 sm:px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-[16/9] overflow-hidden"
          >
            <img src={work.image} alt={work.title} className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Challenge → Approach → Result */}
      <section className="px-4 sm:px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
            {[
              { label: "Challenge", text: work.challenge },
              { label: "Approach", text: work.approach },
              { label: "Result", text: work.result, accent: true },
            ].map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.1}>
                <div className={`p-8 md:p-10 h-full ${i < 2 ? 'border-b md:border-b-0 md:border-r border-border' : ''}`}>
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm/60 mb-4">{item.label}</p>
                  <p className={`font-body text-[15px] leading-[1.8] ${item.accent ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {item.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="px-4 sm:px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm/60 mb-6">Deliverables</p>
          <div className="flex flex-wrap gap-3">
            {work.deliverables.map((d) => (
              <span key={d} className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground border border-border px-4 py-2">
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Prev / Next Navigation */}
      <section className="px-4 sm:px-6 md:px-12 py-16 md:py-24 border-t border-border">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-4">
          <Link to={`/work/${prevWork.slug}`} className="group text-left">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 block mb-2">← Previous</span>
            <span className="font-display text-[20px] md:text-[28px] tracking-[0.02em] text-foreground group-hover:text-accent-warm transition-colors duration-300">
              {prevWork.title}
            </span>
          </Link>
          <Link to={`/work/${nextWork.slug}`} className="group text-right">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 block mb-2">Next →</span>
            <span className="font-display text-[20px] md:text-[28px] tracking-[0.02em] text-foreground group-hover:text-accent-warm transition-colors duration-300">
              {nextWork.title}
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WorkDetailPage;
