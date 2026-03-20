import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection, { AnimatedChild } from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";
import SEO from "@/components/SEO";
import hospitalityImg from "@/assets/hospitality-hero.jpg";
import golfImg from "@/assets/golf-hero.jpg";
import concertImg from "@/assets/concert-hero.jpg";
import techImg from "@/assets/tech-hero.jpg";

const packages = [
  {
    slug: "hospitality",
    label: "For Hotels & Resorts",
    title: "Hospitality Creative Layer",
    desc: "A creative layer on your marketing team — we don't replace your team, we make everything they do more powerful. From positioning to cinematic campaigns that drive real bookings.",
    image: hospitalityImg,
    price: "Starting from ฿60,000",
  },
  {
    slug: "golf",
    label: "For Golf Clubs",
    title: "Golf Creative Layer",
    desc: "A creative layer that unlocks new demand — from positioning and campaigns to cinematic content that attracts the next generation of golfers.",
    image: golfImg,
    price: "Starting from ฿50,000",
  },
  {
    slug: "concert",
    label: "For Concerts & Live Events",
    title: "Concert Creative Layer",
    desc: "A creative layer that turns concerts into cultural moments — through narrative, FOMO-driven campaigns, and content that makes people feel they have to be there.",
    image: concertImg,
    price: "Starting from ฿60,000",
  },
  {
    slug: "tech",
    label: "For Tech Companies",
    title: "Tech Creative Layer",
    desc: "A creative layer that helps tech companies clarify their product, build narrative, and drive real adoption through creative systems.",
    image: techImg,
    price: "Starting from ฿60,000",
  },
];

const PackageListPage = () => {
  return (
    <>
      <SEO
        title="Creative Solutions by Industry | ØRIONS"
        description="Industry-specific creative systems that transform how brands connect with their audience. From strategy to cinematic production — built to drive measurable growth."
        path="/package"
      />
      <Navbar />

      {/* Hero */}
      <section className="px-6 md:px-12 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-6"
          >
            Creative Solutions
          </motion.p>
          <TextReveal as="h1" className="font-display text-[clamp(40px,7vw,100px)] leading-[0.9] tracking-[0.01em] text-foreground max-w-4xl">
            CREATIVE THAT MAKES EVERYTHING BETTER
          </TextReveal>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-body text-[16px] text-muted-foreground max-w-[500px] leading-[1.7] mt-8"
          >
            We design creative systems tailored to your industry — from strategy and positioning to cinematic production that drives real revenue.
          </motion.p>
        </div>
      </section>

      {/* Package Cards */}
      <section className="px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packages.map((pkg) => (
              <AnimatedChild key={pkg.slug}>
                <Link to={`/package/${pkg.slug}`} className="group block h-full">
                  <div className="relative overflow-hidden aspect-[4/3] md:aspect-[3/2]">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                      <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-3">{pkg.label}</p>
                      <h2 className="font-display text-[clamp(24px,3vw,36px)] leading-[0.95] text-foreground mb-3">{pkg.title}</h2>
                      <p className="font-body text-[14px] text-muted-foreground leading-[1.7] mb-4 max-w-sm">{pkg.desc}</p>
                      <div className="flex items-center justify-between">
                        <p className="font-mono text-[12px] tracking-[0.1em] text-foreground/60">{pkg.price}</p>
                        <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-accent-warm group-hover:gap-3 transition-all duration-300">
                          View Details <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PackageListPage;
