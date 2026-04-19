import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";

type Cat = "All" | "Brand" | "Film" | "Digital" | "Campaign";

interface Project {
  name: string;
  client: string;
  category: string;
  cat: Exclude<Cat, "All">;
  body: string;
  impact?: string;
  impactLabel?: string;
  year: string;
  feature?: boolean;
  film?: boolean;
}

const projects: Project[] = [
  { name: "HONGMOVE", client: "HONGMOVE", category: "APPLIED UTILITY", cat: "Digital", body: "เปลี่ยนความซับซ้อนให้ดูง่าย ระบบสื่อสาร Seamless สำหรับ Taxi VIP", impact: "+25%", impactLabel: "CONVERSION CLARITY", year: "2024", feature: true },
  { name: "RTAF",     client: "Royal Thai Air Force", category: "APPLIED IMAGE", cat: "Brand", body: "ยึดความน่าเชื่อถือคืนมา ปรับโฉมภาพลักษณ์ผ่าน High-end Production", impact: "2X", impactLabel: "ENGAGEMENT", year: "2024" },
  { name: "KHAO YAI", client: "Khao Yai Country Club", category: "APPLIED AESTHETIC", cat: "Brand", body: "ยกระดับด้วยรสนิยม เปลี่ยนสนามกอล์ฟดั้งเดิมสู่ประสบการณ์พรีเมียม", impact: "30%", impactLabel: "DECISION SPEED", year: "2024" },
  { name: "Democrat Party",  client: "Democrat Party", category: "POLITICAL COMMUNICATION", cat: "Campaign", body: "การสื่อสารเชิงกลยุทธ์ภายใต้เงื่อนไขที่ท้าทาย", year: "2023" },
  { name: "GCOO",            client: "GCOO Mobility",  category: "MOBILITY",  cat: "Digital", body: "Localization และระบบที่เปลี่ยนพฤติกรรมการเดินทางคนเมือง", year: "2023" },
  { name: "MY HOTEL",        client: "MY HOTEL",       category: "HOSPITALITY TECH", cat: "Digital", body: "วางระบบ Smart Hotel ที่ใช้งานได้จริงรายแรกของไทย", year: "2023" },
  { name: "Heavy Organizer", client: "Heavy Organizer", category: "NATIONAL CAMPAIGN", cat: "Campaign", body: "แคมเปญสื่อสารระดับประเทศที่สร้างแรงกระเพื่อมได้จริง", year: "2024" },
  { name: "Leicester × Buriram Esport", client: "Buriram Esport", category: "SPORTS BRAND",       cat: "Film", body: "งานสื่อสารแบรนด์กีฬาระดับสากล", year: "2024", film: true },
  { name: "Siriraj Hospital",            client: "Siriraj",        category: "HEALTHCARE",         cat: "Film", body: "การเล่าเรื่องความเชื่อมั่นทางการแพทย์ให้เข้าถึงง่าย", year: "2023", film: true },
  { name: "Audi Thailand",               client: "Audi Thailand",  category: "AUTOMOTIVE PREMIUM", cat: "Film", body: "งานโปรดักชันที่สะท้อนภาพลักษณ์พรีเมียมระดับโลก", year: "2024", film: true },
];

const filters: Cat[] = ["All", "Brand", "Film", "Digital", "Campaign"];

const Work = () => {
  const [active, setActive] = useState<Cat>("All");
  const list = useMemo(() => active === "All" ? projects : projects.filter(p => p.cat === active), [active]);
  const featured = list.find(p => p.feature) ?? list[0];
  const rest = list.filter(p => p !== featured);

  return (
    <div>
      <SEO title="Work — ØRIONS" description="Applied Creative in action. Selected projects across mobility, hospitality, healthcare and culture." path="/work" />

      <PageHero
        eyebrowNumber="01"
        eyebrowLabel="SELECTED WORK"
        title="Applied Creative in action."
        subtitle="งานที่เราเลือกมาเพื่อแสดง 'วิธีคิด' ของ ØRIONS — ตั้งแต่การวางกลยุทธ์ การออกแบบการสื่อสาร ไปจนถึงงานผลิตที่สร้างผลลัพธ์จริง"
      />

      {/* FILTER BAR */}
      <section className="px-6 md:px-12 border-t border-border sticky top-[68px] bg-background/85 backdrop-blur-md z-30">
        <div className="max-w-[1400px] mx-auto py-5 flex items-center gap-3 flex-wrap">
          <span className="label-mono text-muted-foreground mr-2">Filter</span>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`label-mono px-4 py-2 border transition-colors ${active === f ? "border-foreground text-foreground" : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"}`}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto label-mono text-muted-foreground">{list.length} projects</span>
        </div>
      </section>

      {/* GRID */}
      <section className="px-6 md:px-12 py-16 md:py-24 border-t border-border">
        <div className="max-w-[1400px] mx-auto space-y-6">
          {featured && (
            <Reveal>
              <article className="group border border-border ring-grad-hover transition-colors grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-7 aspect-[16/10] md:aspect-auto md:min-h-[460px] bg-grad-radial relative overflow-hidden after:absolute after:inset-0 after:bg-background/55 group-hover:after:bg-background/30 after:transition-colors flex items-end p-8 md:p-10">
                  <div className="relative z-10">
                    <div className="label-mono text-grad-soft">{featured.category}</div>
                    <h3 className="mt-3 display-l text-foreground">{featured.name}</h3>
                  </div>
                </div>
                <div className="md:col-span-5 p-8 md:p-10 flex flex-col justify-between gap-8">
                  <div>
                    <div className="flex items-center gap-3 label-mono text-muted-foreground">
                      <span>{featured.client}</span><span className="text-foreground/30">/</span><span>{featured.year}</span>
                    </div>
                    <p className="mt-6 body-l text-foreground/90 font-thai">{featured.body}</p>
                  </div>
                  {featured.impact && (
                    <div className="pt-6 border-t border-border">
                      <div className="font-display text-grad text-[44px] leading-none">{featured.impact}</div>
                      <div className="mt-2 label-mono text-muted-foreground">{featured.impactLabel}</div>
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 0.08}>
                <article className="group border border-border ring-grad-hover transition-colors h-full flex flex-col">
                  <div className="aspect-[16/10] bg-grad-radial relative overflow-hidden after:absolute after:inset-0 after:bg-background/55 group-hover:after:bg-background/30 after:transition-colors flex items-end p-5">
                    {p.film && (
                      <div className="absolute top-4 right-4 z-10 w-10 h-10 border border-foreground/60 flex items-center justify-center group-hover:bg-foreground transition-colors">
                        <Play className="w-3.5 h-3.5 text-foreground group-hover:text-background" fill="currentColor" />
                      </div>
                    )}
                    <div className="relative z-10 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="label-mono text-grad-soft">{p.category}</div>
                      <h3 className="mt-2 display-s text-foreground">{p.name}</h3>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 label-mono text-muted-foreground">
                      <span>{p.client}</span><span className="text-foreground/30">/</span><span>{p.year}</span>
                    </div>
                    <p className="mt-4 body-m text-muted-foreground font-thai flex-1">{p.body}</p>
                    {p.impact && (
                      <div className="mt-5 pt-4 border-t border-border flex items-baseline gap-3">
                        <span className="font-display text-grad text-[24px] leading-none">{p.impact}</span>
                        <span className="label-mono text-muted-foreground">{p.impactLabel}</span>
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <h2 className="display-m">Have a project in mind?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-3 bg-grad text-background px-7 py-4 label-mono hover:opacity-90 transition-opacity">
              Start a conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Work;
