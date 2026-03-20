import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection, { AnimatedChild } from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";
import SEO from "@/components/SEO";

const packages = [
  {
    slug: "hospitality",
    label: "Hotels & Resorts",
    title: "Hospitality",
    outcome: "Drive bookings through positioning & cinematic campaigns",
    price: "From ฿60,000",
  },
  {
    slug: "golf",
    label: "Golf Clubs",
    title: "Golf",
    outcome: "Attract the next generation of golfers",
    price: "From ฿50,000",
  },
  {
    slug: "concert",
    label: "Concerts & Live Events",
    title: "Concert",
    outcome: "Turn events into cultural moments people can't miss",
    price: "From ฿60,000",
  },
  {
    slug: "tech",
    label: "Tech Companies",
    title: "Tech",
    outcome: "Clarify your product & drive real adoption",
    price: "From ฿60,000",
  },
];

const PackageListPage = () => {
  return (
    <>
      <SEO
        title="Creative Solutions by Industry | ØRIONS"
        description="Industry-specific creative systems — from strategy to production — built to drive measurable growth."
        path="/package"
      />
      <Navbar />

      {/* Hero */}
      <section className="px-6 md:px-12 pt-16 md:pt-24 pb-8 md:pb-12">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-6"
          >
            Packages
          </motion.p>
          <TextReveal as="h1" className="font-display text-[clamp(40px,7vw,80px)] leading-[0.9] tracking-[0.01em] text-foreground max-w-3xl">
            PICK YOUR INDUSTRY
          </TextReveal>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-body text-[15px] text-muted-foreground max-w-[440px] leading-[1.7] mt-6"
          >
            A creative layer on your team — we don't replace anyone, we make everything better.
          </motion.p>
        </div>
      </section>

      {/* Package List */}
      <section className="px-6 md:px-12 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection stagger className="flex flex-col">
            {packages.map((pkg, i) => (
              <AnimatedChild key={pkg.slug}>
                <Link
                  to={`/package/${pkg.slug}`}
                  className="group flex items-center justify-between py-8 md:py-10 border-t border-border last:border-b hover:pl-4 transition-all duration-500"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12 flex-1 min-w-0">
                    <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground w-[140px] shrink-0">
                      {pkg.label}
                    </span>
                    <h2 className="font-display text-[clamp(32px,4vw,56px)] leading-[0.95] text-foreground group-hover:text-accent-warm transition-colors duration-300">
                      {pkg.title}
                    </h2>
                    <p className="font-body text-[14px] text-muted-foreground leading-[1.6] max-w-sm hidden md:block">
                      {pkg.outcome}
                    </p>
                  </div>
                  <div className="flex items-center gap-6 shrink-0">
                    <span className="font-mono text-[12px] tracking-[0.1em] text-foreground/50 hidden sm:block">
                      {pkg.price}
                    </span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent-warm group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </Link>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Note */}
      <section className="px-6 md:px-12 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[12px] tracking-[0.1em] text-muted-foreground text-center">
              Each package includes strategy, creative direction, and production — tailored to your industry.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PackageListPage;
