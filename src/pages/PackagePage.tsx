import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StartProjectDialog from "@/components/StartProjectDialog";
import AnimatedSection, { AnimatedChild } from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImg from "@/assets/hospitality-hero.jpg";
import lobbyImg from "@/assets/hospitality-lobby.jpg";

const PackagePage = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title="Hospitality Creative Layer — ØRIONS"
        description="We help hotels increase demand through narrative, campaigns, and cinematic content that drives real bookings."
        path="/package/hospitality"
      />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src={heroImg}
            alt="Luxury resort at golden hour"
            className="w-full h-full object-cover"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pb-16 md:pb-24">
          <Link to="/package" className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground hover:text-accent-warm transition-colors mb-12">
            <ArrowLeft className="w-3 h-3" /> {t("All Packages", "แพ็กเกจทั้งหมด")}
          </Link>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-5"
          >
            {t("For Hotels & Resorts", "สำหรับโรงแรมและรีสอร์ท")}
          </motion.p>
          <TextReveal as="h1" className="font-display text-[clamp(40px,7vw,110px)] leading-[0.88] tracking-[0.01em] text-foreground max-w-4xl">
            {t("MAKE PEOPLE WANT TO STAY AT YOUR HOTEL.", "ทำให้คนอยากมาพักที่โรงแรมคุณ")}
          </TextReveal>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-body text-[16px] text-muted-foreground max-w-[440px] leading-[1.7] mt-8"
          >
            {t(
              "We create the story, campaigns, and content that turn scrollers into guests.",
              "เราสร้างเรื่องราว แคมเปญ และคอนเทนต์ ที่เปลี่ยนคนเลื่อนผ่านให้กลายเป็นแขกของคุณ"
            )}
          </motion.p>
        </div>
      </section>

      {/* ── The Problem (simple, relatable) ── */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">
              {t("Sound Familiar?", "คุ้นไหม?")}
            </p>
            <h2 className="font-display text-[clamp(30px,4vw,56px)] leading-[0.92] text-foreground max-w-3xl">
              {t(
                "Your hotel is beautiful. But bookings don't reflect it.",
                "โรงแรมคุณสวย แต่ยอดจองไม่สะท้อนสิ่งนั้น"
              )}
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                icon: "📉",
                title: t("Weekdays are empty", "วันธรรมดาห้องว่าง"),
                desc: t(
                  "Occupancy drops to 40–65% without a compelling reason to visit outside weekends.",
                  "อัตราเข้าพักลดเหลือ 40–65% เพราะไม่มีเหตุผลให้มาพักวันธรรมดา"
                ),
              },
              {
                icon: "💸",
                title: t("Competing on price, not story", "แข่งด้วยราคา ไม่ใช่เรื่องราว"),
                desc: t(
                  "Without a narrative, guests choose the cheapest option. Your only lever is discounting.",
                  "ไม่มีเรื่องราว แขกก็เลือกที่ถูกที่สุด ทางเลือกเดียวคือลดราคา"
                ),
              },
              {
                icon: "👻",
                title: t("Content that doesn't create desire", "คอนเทนต์ที่ไม่สร้างความอยาก"),
                desc: t(
                  "You post content but people scroll past. It shows the room — it doesn't make them want it.",
                  "คุณโพสต์คอนเทนต์ แต่คนเลื่อนผ่าน มันแค่โชว์ห้อง — ไม่ได้ทำให้อยากจอง"
                ),
              },
              {
                icon: "🔄",
                title: t("Stuck on OTAs", "ติดอยู่กับ OTAs"),
                desc: t(
                  "60%+ revenue from OTAs and repeat guests. No engine to bring new people in.",
                  "รายได้ 60%+ มาจาก OTA และแขกเก่า ไม่มีระบบดึงคนใหม่เข้ามา"
                ),
              },
            ].map((item) => (
              <AnimatedChild key={String(item.title)}>
                <div className="border border-border p-6 md:p-8 group hover:border-accent-warm/30 transition-colors duration-400">
                  <span className="text-[28px] block mb-4">{item.icon}</span>
                  <h3 className="font-display text-[22px] leading-[1.05] text-foreground mb-3">{item.title}</h3>
                  <p className="font-body text-[14px] text-muted-foreground leading-[1.7]">{item.desc}</p>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── What We Do (simple 3-step) ── */}
      <section className="bg-secondary">
        <div className="px-6 md:px-12 py-24 md:py-32">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="mb-16">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">
                {t("What We Do", "สิ่งที่เราทำ")}
              </p>
              <h2 className="font-display text-[clamp(30px,4vw,56px)] leading-[0.92] text-foreground max-w-3xl">
                {t(
                  "Three things that change everything.",
                  "สามสิ่งที่เปลี่ยนทุกอย่าง"
                )}
              </h2>
            </AnimatedSection>

            <div className="space-y-0">
              {[
                {
                  num: "01",
                  title: t("Find your story", "ค้นหาเรื่องราวของคุณ"),
                  desc: t(
                    "We figure out what makes your hotel worth choosing — beyond rooms and rates. A clear positioning that makes people say 'I want to go there.'",
                    "เราค้นหาสิ่งที่ทำให้โรงแรมคุณน่าเลือก — ไม่ใช่แค่ห้องและราคา จุดยืนที่ชัดเจนที่ทำให้คนพูดว่า 'อยากไปที่นั่น'"
                  ),
                  output: t("Positioning + brand narrative", "จุดยืน + เรื่องราวแบรนด์"),
                },
                {
                  num: "02",
                  title: t("Create campaigns that move people", "สร้างแคมเปญที่ขยับคน"),
                  desc: t(
                    "Hero film, photography, social content — everything designed to make people feel something. Not just see your hotel, but want to be there.",
                    "Hero film, ภาพถ่าย, คอนเทนต์โซเชียล — ทุกอย่างออกแบบมาให้คนรู้สึก ไม่ใช่แค่เห็นโรงแรม แต่อยากอยู่ที่นั่น"
                  ),
                  output: t("Campaign + content suite", "แคมเปญ + ชุดคอนเทนต์"),
                },
                {
                  num: "03",
                  title: t("Keep demand alive", "รักษาความต้องการให้คงอยู่"),
                  desc: t(
                    "Campaigns fade after 4–8 weeks. We keep your creative direction alive with ongoing content, seasonal refreshes, and performance tracking.",
                    "แคมเปญจะจางไปใน 4–8 สัปดาห์ เรารักษาทิศทางครีเอทีฟให้คงอยู่ด้วยคอนเทนต์ต่อเนื่อง ธีมตามฤดูกาล และติดตามผล"
                  ),
                  output: t("Ongoing creative system", "ระบบครีเอทีฟต่อเนื่อง"),
                },
              ].map((step, i) => (
                <AnimatedSection key={step.num} delay={i * 0.08}>
                  <div className={`grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-4 md:gap-10 py-10 md:py-14 ${i < 2 ? 'border-b border-border' : ''} items-start`}>
                    <span className="font-display text-[clamp(48px,5vw,72px)] leading-[0.85] text-accent-warm/15">{step.num}</span>
                    <div>
                      <h3 className="font-display text-[clamp(24px,3vw,36px)] leading-[1] text-foreground mb-4">{step.title}</h3>
                      <p className="font-body text-[14px] text-muted-foreground leading-[1.7]">{step.desc}</p>
                    </div>
                    <div className="md:flex md:items-end md:justify-end md:h-full">
                      <div className="bg-background/50 px-5 py-3 inline-block mt-4 md:mt-0">
                        <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm">{step.output}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">
              {t("Who It's For", "เหมาะกับใคร")}
            </p>
            <h2 className="font-display text-[clamp(30px,4vw,56px)] leading-[0.92] text-foreground max-w-3xl">
              {t(
                "Hotels that want more guests — not more discounts.",
                "โรงแรมที่อยากได้แขกเพิ่ม — ไม่ใช่ส่วนลดเพิ่ม"
              )}
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {[
              { title: t("Boutique Hotels", "โรงแรมบูทีค"), desc: t("Beautiful property, but no one knows about it yet.", "โรงแรมสวย แต่ยังไม่มีใครรู้จัก") },
              { title: t("Resorts & Villas", "รีสอร์ทและวิลล่า"), desc: t("Weekdays are quiet. Need a reason for people to come.", "วันธรรมดาเงียบ ต้องการเหตุผลให้คนมา") },
              { title: t("Hotel Groups", "กลุ่มโรงแรม"), desc: t("Multiple properties, but no unified creative direction.", "หลายสาขา แต่ไม่มีทิศทางครีเอทีฟที่เป็นหนึ่งเดียว") },
              { title: t("New Openings", "เปิดใหม่"), desc: t("Launching soon and need a story that lands from day one.", "กำลังจะเปิด ต้องการเรื่องราวที่โดนใจตั้งแต่วันแรก") },
              { title: t("Wellness Retreats", "รีทรีทเพื่อสุขภาพ"), desc: t("High-value guests exist — you just need the right narrative.", "แขกที่มีกำลังซื้อสูงมีอยู่ — แค่ต้องการเรื่องราวที่ใช่") },
              { title: t("Heritage Properties", "โรงแรมมรดก"), desc: t("Rich history, but the story isn't reaching new audiences.", "ประวัติศาสตร์มีมาก แต่เรื่องราวยังไม่ถึงคนรุ่นใหม่") },
            ].map((seg) => (
              <AnimatedChild key={String(seg.title)}>
                <div className="bg-background p-7 md:p-9 h-full group hover:bg-secondary/60 transition-colors duration-300">
                  <h3 className="font-display text-[22px] leading-[1.05] text-foreground mb-3 group-hover:text-accent-warm transition-colors duration-300">{seg.title}</h3>
                  <p className="font-body text-[13px] text-muted-foreground leading-[1.7]">{seg.desc}</p>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── Investment (simplified) ── */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">
              {t("Investment", "การลงทุน")}
            </p>
            <h2 className="font-display text-[clamp(30px,4vw,56px)] leading-[0.92] text-foreground max-w-3xl">
              {t("Start where it makes sense.", "เริ่มจากจุดที่สมเหตุสมผล")}
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {[
              {
                label: t("UNDERSTAND", "เข้าใจ"),
                price: "฿60,000+",
                desc: t(
                  "Demand audit — find out where you're losing bookings and what to fix first.",
                  "วิเคราะห์ความต้องการ — หาว่าคุณเสียยอดจองตรงไหน และต้องแก้อะไรก่อน"
                ),
                note: t("Best for: Getting clarity", "เหมาะกับ: การหาความชัดเจน"),
              },
              {
                label: t("LAUNCH", "เปิดตัว"),
                price: "฿250,000+",
                desc: t(
                  "Full strategy + campaign + hero film + content — everything you need to relaunch your brand.",
                  "กลยุทธ์ + แคมเปญ + Hero Film + คอนเทนต์ ครบชุด — ทุกอย่างที่ต้องใช้เพื่อ relaunch แบรนด์"
                ),
                note: t("Best for: A new chapter", "เหมาะกับ: การเริ่มบทใหม่"),
                featured: true,
              },
              {
                label: t("GROW", "เติบโต"),
                price: "฿600,000+",
                desc: t(
                  "Complete system — audit, campaign, and 3 months of ongoing creative support.",
                  "ระบบครบวงจร — วิเคราะห์ แคมเปญ และซัพพอร์ตครีเอทีฟต่อเนื่อง 3 เดือน"
                ),
                note: t("Best for: Long-term growth", "เหมาะกับ: การเติบโตระยะยาว"),
              },
            ].map((tier) => (
              <AnimatedChild key={String(tier.label)}>
                <div className={`p-8 md:p-10 h-full flex flex-col justify-between ${tier.featured ? 'bg-accent-warm' : 'bg-background'}`}>
                  <div>
                    <p className={`font-mono text-[10px] tracking-[0.15em] uppercase mb-5 ${tier.featured ? 'text-accent-warm-foreground/60' : 'text-accent-warm'}`}>{tier.label}</p>
                    <p className={`font-display text-[clamp(36px,4vw,52px)] leading-[0.9] mb-6 tracking-[-0.02em] ${tier.featured ? 'text-accent-warm-foreground' : 'text-foreground'}`}>
                      {tier.price}
                    </p>
                    <p className={`font-body text-[14px] leading-[1.7] mb-8 ${tier.featured ? 'text-accent-warm-foreground/80' : 'text-muted-foreground'}`}>{tier.desc}</p>
                  </div>
                  <p className={`font-mono text-[11px] ${tier.featured ? 'text-accent-warm-foreground/40' : 'text-muted-foreground/40'}`}>{tier.note}</p>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={lobbyImg} alt="Hotel lobby" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-24">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-6">
              {t("Let's Talk", "คุยกัน")}
            </p>
            <h2 className="font-display text-[clamp(36px,6vw,80px)] leading-[0.88] text-foreground max-w-3xl mb-8">
              {t(
                "Ready to give people a reason to book?",
                "พร้อมจะให้เหตุผลคนจองหรือยัง?"
              )}
            </h2>
            <motion.button
              onClick={() => setDialogOpen(true)}
              className="font-mono text-[12px] tracking-[0.15em] uppercase text-accent-warm-foreground bg-accent-warm px-10 py-4 hover:brightness-110 transition-all duration-300 active:scale-[0.97]"
              whileHover={{ x: 4 }}
            >
              {t("Start a Project →", "เริ่มโปรเจกต์ →")}
            </motion.button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <StartProjectDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};

export default PackagePage;
