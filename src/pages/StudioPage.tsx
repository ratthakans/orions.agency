import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const shows = [
  {
    num: "01",
    title: "NO SIGNAL",
    type: "Survival Documentary",
    status: "In Development",
    desc: "สารคดีท่องเที่ยวเอาชีวิตรอด — ตามคนที่เลือกออกจากเมืองไปเจอธรรมชาติดิบๆ เรื่องจริง ไม่มีสคริปต์ ไม่มีสัญญาณ",
    descEn: "A raw survival travel documentary. Following people who leave the city to face nature head-on. No script. No signal.",
    format: "Cinematic series · 6 episodes · 20–30 min each",
    gradient: "from-emerald-900/30 to-background",
  },
  {
    num: "02",
    title: "LOOK YOUR BEST",
    type: "Beauty Documentary",
    status: "Concept",
    desc: "สารคดีความงามและการแต่งหน้า เพื่อไปถึง moment สำคัญที่สุดในชีวิต — งานแต่ง, สัมภาษณ์งาน, วันที่กลับมาเชื่อมั่นในตัวเอง",
    descEn: "A beauty documentary about makeup as transformation — for weddings, job interviews, and the day you believe in yourself again.",
    format: "Short-form series · 10–15 min episodes · Weekly",
    gradient: "from-rose-900/30 to-background",
  },
  {
    num: "03",
    title: "ØRIONS TALK",
    type: "Podcast",
    status: "In Production",
    desc: "เชิญคนมาพูดคุยที่ออฟฟิศ ØRIONS แบบ podcast สบายๆ เรื่องทั่วไป เนื้อหา creative เท่ๆ ความคิดที่น่าสนใจ",
    descEn: "Casual conversations at the ØRIONS office. Creative people, interesting ideas, good energy.",
    format: "Audio + Video · 45–60 min episodes · Monthly",
    gradient: "from-amber-900/30 to-background",
  },
  {
    num: "04",
    title: "A LONG WAY",
    type: "Adventure Documentary",
    status: "Pre-production",
    desc: "สารคดีการเดินทางระยะยาว — trekking, hiking, trail ไปไกลๆ เรื่องของคนที่เดินไปข้างหน้าแม้ไม่รู้ว่าจะถึงเมื่อไหร่",
    descEn: "A long-distance journey documentary — trekking, hiking, trail running. Stories of people who keep walking forward.",
    format: "Cinematic series · 4 episodes · 30–45 min each",
    gradient: "from-sky-900/30 to-background",
  },
  {
    num: "05",
    title: "ระหว่างวัน",
    titleEn: "RAWANGWAN",
    type: "Lifestyle Documentary",
    status: "Concept",
    desc: "สารคดีที่พาไปรู้จักใครบางคน ผ่านช่วงเวลาระหว่างวันของเขา เราไม่ได้ตามทั้งวัน แต่เลือกอยู่กับบางช่วงเวลา เพื่อค่อยๆ เห็นว่าเขาใช้ชีวิต คิด และมองโลกอย่างไร",
    descEn: "A documentary that follows someone through selected moments of their day. Not the whole day — just the moments that reveal how they live, think, and see the world.",
    format: "Short-form series · 12–18 min episodes · Bi-weekly",
    gradient: "from-violet-900/30 to-background",
  },
];

const StudioPage = () => {
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
              Beyond client work, we produce original content — documentaries, podcasts, and shows that represent our taste, vision, and creative point of view.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Shows Grid */}
      <section className="px-4 sm:px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8 md:space-y-12">
            {shows.map((show, i) => (
              <AnimatedSection key={show.num} delay={i * 0.08}>
                <div className="group border border-border hover:border-accent-warm/20 transition-colors duration-500 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* 16:9 Visual Mockup */}
                    <div className={`aspect-video bg-gradient-to-br ${show.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                        <span className="font-display text-[64px] md:text-[80px] leading-none text-foreground/5 group-hover:text-foreground/10 transition-colors duration-700">
                          {show.num}
                        </span>
                        <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-foreground/20">
                          {show.format.split("·")[0]}
                        </span>
                      </div>
                      {/* Status badge */}
                      <div className="absolute top-4 left-4">
                        <span className="font-mono text-[9px] tracking-[0.1em] uppercase text-accent-warm/80 border border-accent-warm/30 bg-background/80 backdrop-blur-sm px-3 py-1.5">
                          {show.status}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-10 flex flex-col justify-center">
                      <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 mb-3 block">{show.type}</span>
                      <h2 className="font-display text-[clamp(28px,4vw,48px)] leading-[0.9] tracking-[0.02em] text-foreground group-hover:text-accent-warm transition-colors duration-300 mb-2">
                        {show.title}
                      </h2>
                      {show.titleEn && (
                        <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-accent-warm/40 mb-4">{show.titleEn}</p>
                      )}
                      <p className="font-body text-[14px] leading-[1.7] text-muted-foreground mb-3 max-w-lg">
                        {show.descEn}
                      </p>
                      <p className="font-body text-[13px] leading-[1.7] text-muted-foreground/50 mb-6 max-w-lg">
                        {show.desc}
                      </p>
                      <p className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground/40">
                        {show.format}
                      </p>
                    </div>
                  </div>
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
