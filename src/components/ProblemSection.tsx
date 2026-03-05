import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";

const problems = [
  {
    title: "Oversaturation",
    desc: { en: "Every brand is publishing, advertising, and competing for the same attention.", th: "ทุกแบรนด์ต่างเผยแพร่ โฆษณา และแข่งขันเพื่อความสนใจเดียวกัน" },
    detail: { en: "The digital landscape is flooded with content. Brands publish across 10+ channels daily, creating an overwhelming amount of noise. Without a clear voice, even great brands get lost in an endless scroll of sameness.", th: "โลกดิจิทัลเต็มไปด้วยคอนเทนต์ แบรนด์เผยแพร่ผ่านกว่า 10+ ช่องทางทุกวัน สร้างเสียงรบกวนมหาศาล หากไม่มีเสียงที่ชัดเจน แม้แบรนด์ดีๆ ก็จะหายไปในกระแสความซ้ำซาก" },
    impact: { en: "Audiences develop content blindness, reducing engagement rates by up to 60% across saturated channels.", th: "กลุ่มเป้าหมายเกิดอาการตาบอดต่อคอนเทนต์ ทำให้อัตราการมีส่วนร่วมลดลงถึง 60% ในช่องทางที่อิ่มตัว" },
    solution: { en: "We audit your communication landscape, identify where signal gets lost, and build a focused channel strategy that cuts through — not adds to — the noise.", th: "เราตรวจสอบภูมิทัศน์การสื่อสารของคุณ ระบุจุดที่สัญญาณหายไป และสร้างกลยุทธ์ช่องทางที่ตัดผ่าน — ไม่ใช่เพิ่ม — เสียงรบกวน" },
  },
  {
    title: "Lost Meaning",
    desc: { en: "Brands are visible — but not understood. Noise replaces substance.", th: "แบรนด์มองเห็นได้ — แต่ไม่ถูกเข้าใจ เสียงรบกวนเข้าแทนที่สาระ" },
    detail: { en: "Visibility without meaning is just decoration. Many brands invest heavily in reach but forget to define what they actually stand for. The result: audiences see the brand but can't articulate what makes it different.", th: "การมองเห็นโดยปราศจากความหมายคือแค่การตกแต่ง หลายแบรนด์ลงทุนมหาศาลเพื่อการเข้าถึง แต่ลืมกำหนดว่าแบรนด์ยืนหยัดเพื่ออะไร" },
    impact: { en: "73% of consumers say they can't differentiate between brands in the same category — a direct result of meaning erosion.", th: "73% ของผู้บริโภคบอกว่าไม่สามารถแยกความแตกต่างระหว่างแบรนด์ในหมวดเดียวกันได้" },
    solution: { en: "We define your brand's core meaning through positioning workshops, competitive analysis, and narrative architecture that gives every message purpose.", th: "เรากำหนดความหมายหลักของแบรนด์ผ่าน positioning workshop วิเคราะห์คู่แข่ง และสถาปัตยกรรมเรื่องเล่าที่ให้ทุกข้อความมีจุดมุ่งหมาย" },
  },
  {
    title: "Scattered Messaging",
    desc: { en: "Without clear direction, communication becomes fragmented and forgettable.", th: "เมื่อไม่มีทิศทางที่ชัดเจน การสื่อสารกลายเป็นกระจัดกระจายและจำไม่ได้" },
    detail: { en: "When there's no central message framework, every team, agency, and channel creates its own version of the brand story. The result is a fragmented identity that confuses rather than converts.", th: "เมื่อไม่มีกรอบข้อความกลาง ทุกทีม เอเจนซี่ และช่องทาง ต่างสร้างเรื่องราวแบรนด์ในเวอร์ชันของตัวเอง ผลลัพธ์คืออัตลักษณ์ที่กระจัดกระจาย" },
    impact: { en: "Inconsistent messaging costs brands an average of 23% in potential revenue due to trust erosion and audience confusion.", th: "ข้อความที่ไม่สอดคล้องทำให้แบรนด์สูญเสียรายได้เฉลี่ย 23% จากความเชื่อมั่นที่ลดลง" },
    solution: { en: "We create unified message architectures — a single source of truth that aligns every touchpoint from social posts to sales decks.", th: "เราสร้างสถาปัตยกรรมข้อความแบบรวมศูนย์ — แหล่งข้อมูลเดียวที่จัดแนวทุก touchpoint" },
  },
  {
    title: "Template Culture",
    desc: { en: "Generic templates and AI-generated content flood every channel.", th: "เทมเพลตทั่วไปและคอนเทนต์ที่สร้างด้วย AI ท่วมท้นทุกช่องทาง" },
    detail: { en: "The rise of drag-and-drop tools and AI content generators has democratized creation but homogenized output. When everyone uses the same templates, no one stands out.", th: "การเพิ่มขึ้นของเครื่องมือลากวางและ AI ทำให้การสร้างสรรค์เป็นประชาธิปไตย แต่ผลลัพธ์กลับเหมือนกันหมด เมื่อทุกคนใช้เทมเพลตเดียวกัน ไม่มีใครโดดเด่น" },
    impact: { en: "Template-based content receives 45% less engagement than custom-crafted creative, yet 80% of brands default to templates.", th: "คอนเทนต์จากเทมเพลตได้รับ engagement น้อยกว่า 45% เมื่อเทียบกับงานสร้างสรรค์แบบ custom" },
    solution: { en: "We build bespoke creative systems — not templates — that give your brand a distinctive visual and verbal identity impossible to replicate.", th: "เราสร้างระบบสร้างสรรค์เฉพาะ — ไม่ใช่เทมเพลต — ที่ให้แบรนด์มีอัตลักษณ์ทางภาพและวาจาที่เป็นเอกลักษณ์" },
  },
  {
    title: "Short-Term Thinking",
    desc: { en: "Brands chase trends instead of building lasting communication systems.", th: "แบรนด์ไล่ตามเทรนด์แทนที่จะสร้างระบบการสื่อสารที่ยั่งยืน" },
    detail: { en: "The pressure for quick wins drives brands toward trend-hopping and viral chasing. But trends expire. What remains is a brand with no foundation.", th: "แรงกดดันเพื่อผลลัพธ์ระยะสั้นผลักดันแบรนด์ให้กระโดดตามเทรนด์ แต่เทรนด์หมดอายุ สิ่งที่เหลือคือแบรนด์ที่ไม่มีรากฐาน" },
    impact: { en: "Trend-dependent brands spend 3× more on customer acquisition because they never build lasting recognition or loyalty.", th: "แบรนด์ที่พึ่งพาเทรนด์ใช้จ่าย 3× มากกว่าในการหาลูกค้า เพราะไม่เคยสร้างการจดจำที่ยั่งยืน" },
    solution: { en: "We design long-term communication systems that compound over time — building brand equity that makes every future campaign more effective.", th: "เราออกแบบระบบการสื่อสารระยะยาวที่สะสมผลเมื่อเวลาผ่านไป — สร้าง brand equity ที่ทำให้ทุกแคมเปญในอนาคตมีประสิทธิภาพมากขึ้น" },
  },
  {
    title: "Disconnected Teams",
    desc: { en: "Without alignment, every department speaks a different brand language.", th: "เมื่อไม่มีการจัดแนว ทุกแผนกต่างพูดภาษาแบรนด์ที่แตกต่างกัน" },
    detail: { en: "Marketing says one thing, sales says another, and the product team has its own story. When internal teams aren't aligned, external communication becomes a contradiction.", th: "การตลาดพูดอย่างหนึ่ง ฝ่ายขายพูดอีกอย่าง และทีมผลิตภัณฑ์มีเรื่องราวของตัวเอง เมื่อทีมภายในไม่สอดคล้อง การสื่อสารภายนอกกลายเป็นความขัดแย้ง" },
    impact: { en: "Misaligned teams create 5× more off-brand content and take 40% longer to bring campaigns to market.", th: "ทีมที่ไม่สอดคล้องสร้างคอนเทนต์นอกแบรนด์มากกว่า 5× และใช้เวลานานกว่า 40% ในการเปิดตัวแคมเปญ" },
    solution: { en: "We run cross-functional alignment workshops and create brand guideline systems that ensure everyone speaks the same language.", th: "เราจัดเวิร์กช็อปการจัดแนวข้ามฝ่ายและสร้างระบบแนวทางแบรนด์ที่ทำให้ทุกคนพูดภาษาเดียวกัน" },
  },
];

const ProblemSection = () => {
  const [selectedProblem, setSelectedProblem] = useState<typeof problems[0] | null>(null);
  const { lang, t } = useLanguage();

  return (
    <section className="py-32 md:py-44 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-display text-[20vw] font-bold tracking-tighter whitespace-nowrap text-stroke-lg opacity-[0.04]">
            NOISE
          </span>
        </div>

        <div className="relative z-10">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body mb-4">
                  The Problem
                </p>
                <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                  The World Has<br />
                  <span className="text-accent-gradient">Too Much Noise</span>
                </h2>
              </div>
              <div className="flex items-end">
                <p className="font-body text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
                  {t("problem.desc")}
                </p>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-divider border border-divider mb-20">
            {problems.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.05}>
                <div
                  className="bg-background p-8 md:p-10 group/card cursor-pointer transition-colors duration-300 hover:bg-secondary relative overflow-hidden"
                  onClick={() => setSelectedProblem(p)}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-accent-gradient scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 origin-left" />
                  <span className="font-display text-xs text-accent-warm mb-4 block transition-transform duration-300 group-hover/card:translate-x-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-display text-base font-semibold text-foreground mb-2 transition-colors duration-300 group-hover/card:text-accent-gradient">
                    {p.title}
                  </h4>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{p.desc[lang]}</p>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-body group-hover/card:text-foreground transition-colors duration-300">
                    Learn more →
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="border-t border-divider pt-10 max-w-2xl">
              <p className="font-logo text-base md:text-lg text-foreground tracking-tight mb-3">
                {t("problem.solution_title")}
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                {t("problem.solution_desc")}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <Dialog open={!!selectedProblem} onOpenChange={(open) => !open && setSelectedProblem(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-divider">
          {selectedProblem && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-xl md:text-2xl font-bold text-foreground">
                  {selectedProblem.title}
                </DialogTitle>
                <DialogDescription className="font-body text-muted-foreground text-sm mt-1">
                  {selectedProblem.desc[lang]}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-8 mt-6">
                <div>
                  <h4 className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                    The Reality
                  </h4>
                  <p className="font-body text-sm text-foreground leading-relaxed">
                    {selectedProblem.detail[lang]}
                  </p>
                </div>
                <div className="border-t border-divider pt-8">
                  <h4 className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                    The Impact
                  </h4>
                  <p className="font-body text-sm text-foreground leading-relaxed">
                    {selectedProblem.impact[lang]}
                  </p>
                </div>
                <div className="border-t border-divider pt-8">
                  <h4 className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                    How We Solve It
                  </h4>
                  <p className="font-body text-sm text-foreground leading-relaxed">
                    {selectedProblem.solution[lang]}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProblemSection;
