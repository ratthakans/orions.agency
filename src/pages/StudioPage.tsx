import { Link } from "react-router-dom";
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
  },
  {
    num: "02",
    title: "LOOK YOUR BEST",
    type: "Beauty Documentary",
    status: "Concept",
    desc: "สารคดีความงามและการแต่งหน้า เพื่อไปถึง moment สำคัญที่สุดในชีวิต — งานแต่ง, สัมภาษณ์งาน, วันที่กลับมาเชื่อมั่นในตัวเอง",
    descEn: "A beauty documentary about makeup as transformation — for weddings, job interviews, and the day you believe in yourself again.",
    format: "Short-form series · 10–15 min episodes · Weekly",
  },
  {
    num: "03",
    title: "ØRIONS TALK",
    type: "Podcast",
    status: "In Production",
    desc: "เชิญคนมาพูดคุยที่ออฟฟิศ ØRIONS แบบ podcast สบายๆ เรื่องทั่วไป เนื้อหา creative เท่ๆ ความคิดที่น่าสนใจ",
    descEn: "Casual conversations at the ØRIONS office. Creative people, interesting ideas, good energy. A podcast about the work and the thinking behind it.",
    format: "Audio + Video · 45–60 min episodes · Monthly",
  },
  {
    num: "04",
    title: "A LONG WAY",
    type: "Adventure Documentary",
    status: "Pre-production",
    desc: "สารคดีการเดินทางระยะยาว — trekking, hiking, trail ไปไกลๆ เรื่องของคนที่เดินไปข้างหน้าแม้ไม่รู้ว่าจะถึงเมื่อไหร่",
    descEn: "A long-distance journey documentary — trekking, hiking, trail running. Stories of people who keep walking forward without knowing when they'll arrive.",
    format: "Cinematic series · 4 episodes · 30–45 min each",
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
      <section className="min-h-[60vh] flex items-end px-4 sm:px-6 md:px-12 pb-16 md:pb-24 pt-24">
        <div className="max-w-5xl mx-auto w-full">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
              <span className="text-accent-warm mr-2">✦</span> Studio
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

      {/* Shows */}
      <section className="px-4 sm:px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-0">
            {shows.map((show, i) => (
              <AnimatedSection key={show.num} delay={i * 0.08}>
                <div className="group relative border-b border-border py-12 md:py-16 hover:bg-foreground/[0.02] transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                    {/* Number + Status */}
                    <div className="shrink-0 flex items-center gap-4 md:flex-col md:items-start md:gap-3 md:w-32">
                      <span className="font-display text-[36px] md:text-[48px] leading-none text-accent-warm/15 group-hover:text-accent-warm/40 transition-colors duration-500">
                        {show.num}
                      </span>
                      <span className="font-mono text-[9px] tracking-[0.1em] uppercase text-accent-warm/60 border border-accent-warm/20 px-2 py-1">
                        {show.status}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50">{show.type}</span>
                      </div>
                      <h2 className="font-display text-[clamp(28px,4vw,56px)] leading-[0.9] tracking-[0.02em] text-foreground group-hover:text-accent-warm transition-colors duration-300 mb-4">
                        {show.title}
                      </h2>
                      <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-xl mb-2">
                        {show.descEn}
                      </p>
                      <p className="font-body text-[14px] leading-[1.7] text-muted-foreground/60 max-w-xl mb-6">
                        {show.desc}
                      </p>
                      <span className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground/40">
                        {show.format}
                      </span>
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
