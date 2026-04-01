import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

import imgNoSignal from "@/assets/studio-no-signal.jpg";
import imgLookYourBest from "@/assets/studio-look-your-best.jpg";
import imgOrionsTalk from "@/assets/studio-orions-talk.jpg";
import imgALongWay from "@/assets/studio-a-long-way.jpg";
import imgInBetweenDay from "@/assets/studio-in-between-day.jpg";
import img365Days from "@/assets/studio-365-days.jpg";

const shows = [
  {
    num: "01",
    title: "NO SIGNAL",
    type: "Survival Documentary",
    status: "In Development",
    image: imgNoSignal,
    desc: "A raw survival travel documentary. Following people who leave the city to face nature head-on. No script. No signal.",
    format: "Cinematic series · 6 episodes · 20–30 min each",
    details: [
      "Follow real people who choose to disconnect from modern life and survive in raw nature.",
      "Each episode documents a different location — jungle, mountain, island — with zero preparation scripts.",
      "Shot in cinematic style with natural sound design. No narration, just pure experience.",
      "Platforms: YouTube, streaming partners.",
    ],
  },
  {
    num: "02",
    title: "LOOK YOUR BEST",
    type: "Beauty Documentary",
    status: "Concept",
    image: imgLookYourBest,
    desc: "A beauty documentary about makeup as transformation — for weddings, job interviews, and the day you believe in yourself again.",
    format: "Short-form series · 10–15 min episodes · Weekly",
    details: [
      "Each episode follows one person preparing for a pivotal life moment through beauty and self-care.",
      "Explores the emotional connection between appearance and confidence.",
      "Features real makeup artists, stylists, and their clients' stories.",
      "Platforms: YouTube, Instagram, TikTok (short cuts).",
    ],
  },
  {
    num: "03",
    title: "ØRIONS TALK",
    type: "Podcast",
    status: "In Production",
    image: imgOrionsTalk,
    desc: "Casual conversations at the ØRIONS office. Creative people, interesting ideas, good energy.",
    format: "Audio + Video · 45–60 min episodes · Monthly",
    details: [
      "Recorded at the ØRIONS office in Bangkok — intimate setting, natural conversation.",
      "Guests include creatives, founders, filmmakers, designers, and thinkers.",
      "Topics range from creative process, business philosophy, to cultural observations.",
      "Available as both video (YouTube) and audio (Spotify, Apple Podcasts).",
    ],
  },
  {
    num: "04",
    title: "A LONG WAY",
    type: "Adventure Documentary",
    status: "Pre-production",
    image: imgALongWay,
    desc: "A long-distance journey documentary — trekking, hiking, trail running. Stories of people who keep walking forward.",
    format: "Cinematic series · 4 episodes · 30–45 min each",
    details: [
      "Each episode follows a different long-distance trail — from Thailand to international routes.",
      "Focus on the mental and physical transformation that happens on multi-day treks.",
      "Cinematic drone and handheld footage capturing the scale of nature.",
      "Platforms: YouTube, outdoor/adventure streaming partners.",
    ],
  },
  {
    num: "05",
    title: "IN BETWEEN DAY",
    type: "Lifestyle Documentary",
    status: "Concept",
    image: imgInBetweenDay,
    desc: "A documentary that follows someone through selected moments of their day. Not the whole day — just the moments that reveal how they live, think, and see the world.",
    format: "Short-form series · 12–18 min episodes · Bi-weekly",
    details: [
      "Each episode picks one person and captures 2–3 meaningful moments from their day.",
      "Observational style — minimal interviews, mostly watching and listening.",
      "Subjects range from artists and chefs to monks and street vendors.",
      "Platforms: YouTube, social media (short edits).",
    ],
  },
  {
    num: "06",
    title: "365 DAYS",
    type: "Survival Documentary",
    status: "In Development",
    image: img365Days,
    desc: "A post-apocalypse survival simulation. One man. 365 days. What happens after the world collapses — and how you stay alive.",
    format: "Cinematic series · 12 episodes · 25–40 min each",
    details: [
      "A solo male protagonist simulates survival scenarios in a post-collapse world for 365 days.",
      "Each episode covers a different phase — shelter, food, defense, mental endurance.",
      "Filmed in remote and abandoned locations to create an authentic post-apocalyptic atmosphere.",
      "Blends documentary realism with cinematic storytelling. No scripts, real conditions.",
      "Platforms: YouTube, streaming partners.",
    ],
  },
];

const StudioPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="Studio — ØRIONS Original Productions"
        description="ØRIONS Studio produces original content — documentaries, podcasts, and shows that showcase our creative vision beyond client work."
        path="/studio"
      />
      <Navbar />

      {/* Hero */}
      <section className="min-h-[50vh] flex items-end px-4 sm:px-6 md:px-12 pb-16 md:pb-24 pt-24">
        <div className="max-w-5xl mx-auto w-full">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
              <span className="text-accent-warm mr-2">✦</span> Original Productions
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h1 className="font-display text-[clamp(40px,8vw,110px)] leading-[0.9] tracking-[0.01em] text-foreground">
              OUR <span className="text-accent-gradient">SHOWS.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <p className="font-body text-[16px] md:text-[18px] leading-[1.7] text-muted-foreground mt-8 max-w-2xl">
              We develop original projects to maintain our standard and explore ideas.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Shows */}
      <section className="px-4 sm:px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            {shows.map((show, i) => (
              <AnimatedSection key={show.num} delay={i * 0.06}>
                <div className="border border-border hover:border-accent-warm/30 transition-colors duration-300 overflow-hidden group">
                  {/* Clickable header */}
                  <button
                    onClick={() => toggle(i)}
                    className="w-full text-left"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {/* Image */}
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={show.image}
                          alt={show.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          loading="lazy"
                        />
                        {/* Status badge */}
                        <div className="absolute top-4 left-4">
                          <span className="font-mono text-[9px] tracking-[0.1em] uppercase text-accent-warm/80 border border-accent-warm/30 bg-background/80 backdrop-blur-sm px-3 py-1.5">
                            {show.status}
                          </span>
                        </div>
                        {/* Number overlay */}
                        <div className="absolute bottom-4 right-4">
                          <span className="font-display text-[48px] leading-none text-foreground/10">
                            {show.num}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-10 flex flex-col justify-center relative">
                        <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 mb-3 block">{show.type}</span>
                        <h2 className="font-display text-[clamp(28px,4vw,48px)] leading-[0.9] tracking-[0.02em] text-foreground mb-2">
                          {show.title}
                        </h2>
                        <p className="font-body text-[14px] leading-[1.7] text-muted-foreground mb-6 max-w-lg">
                          {show.desc}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground/40">
                            {show.format}
                          </p>
                          <motion.div
                            animate={{ rotate: openIndex === i ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-5 h-5 text-muted-foreground/40" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* Expandable details */}
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-border px-6 md:px-10 py-8 md:py-10">
                          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm/60 mb-6">Production Details</p>
                          <ul className="space-y-4 max-w-2xl">
                            {show.details.map((detail, j) => (
                              <li key={j} className="flex gap-3">
                                <span className="text-accent-warm/40 mt-1 shrink-0">—</span>
                                <span className="font-body text-[14px] leading-[1.7] text-muted-foreground">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-40 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
              <span className="text-accent-warm mr-2">△</span> Collaborate
            </p>
            <h2 className="font-display text-[clamp(32px,5vw,72px)] leading-[0.92] tracking-[0.01em] text-foreground mb-6">
              WANT TO BUILD<br />SOMETHING ORIGINAL?
            </h2>
            <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-xl mx-auto mb-10">
              If your brand wants branded entertainment, documentary storytelling, or a completely new content format — let's create it together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-primary-foreground bg-primary px-10 py-3.5 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
            >
              Start a Studio Brief <span>→</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default StudioPage;
