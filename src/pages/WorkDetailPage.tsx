import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { works } from "@/data/works";

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
            <h1 className="font-display text-[36px] text-foreground mb-4">Project Not Found</h1>
            <Link to="/work" className="font-mono text-[11px] tracking-[0.12em] uppercase text-accent-warm hover:text-foreground transition-colors">← Back to Work</Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO title={`${work.title} — ØRIONS`} description={work.brief.en} path={`/work/${work.slug}`} />
      <Navbar />

      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Link to="/work" className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300 mb-8">← All Work</Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm/60">{work.service}</span>
            <span className="text-muted-foreground/30 text-[8px]">●</span>
            <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-foreground/50">{work.type}</span>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-[clamp(28px,5vw,56px)] leading-[1] tracking-[0.02em] text-foreground mb-4">
            {work.title}
          </motion.h1>
          <p className="font-body text-[16px] leading-[1.7] text-muted-foreground max-w-2xl">{work.brief[lang]}</p>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="aspect-[16/9] overflow-hidden">
            <img src={work.image} alt={work.title} className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

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
                  <p className={`font-body text-[15px] leading-[1.8] ${item.accent ? 'text-foreground' : 'text-muted-foreground'}`}>{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm/60 mb-6">Deliverables</p>
          <div className="flex flex-wrap gap-3">
            {work.deliverables.map((d) => (
              <span key={d} className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground border border-border px-4 py-2">{d}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-12 py-16 md:py-24 border-t border-border">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-4">
          <Link to={`/work/${prevWork.slug}`} className="group text-left">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 block mb-2">← Previous</span>
            <span className="font-display text-[15px] md:text-[20px] tracking-[0.02em] text-foreground group-hover:text-accent-warm transition-colors duration-300">{prevWork.title}</span>
          </Link>
          <Link to={`/work/${nextWork.slug}`} className="group text-right">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 block mb-2">Next →</span>
            <span className="font-display text-[15px] md:text-[20px] tracking-[0.02em] text-foreground group-hover:text-accent-warm transition-colors duration-300">{nextWork.title}</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WorkDetailPage;
