import AnimatedSection from "./AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most projects range from 6–12 weeks depending on scope. Brand strategy engagements typically take 4–6 weeks, while full campaign builds run 8–12 weeks. We'll give you a clear timeline during discovery.",
  },
  {
    q: "What's your pricing model?",
    a: "We work on a project basis with transparent pricing agreed upfront. Typical engagements range from ฿300K–฿2M+ depending on scope. We don't do hourly billing — you pay for outcomes, not time.",
  },
  {
    q: "Do you work with startups?",
    a: "Yes. We work with both startups and established brands. What matters most is alignment on vision and commitment to building something meaningful. Early-stage brands often benefit most from strategic clarity.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We've delivered results across EV mobility, real estate, healthcare, fintech, hospitality, fashion, F&B, and education. Our process is industry-agnostic — great strategy adapts to any market.",
  },
  {
    q: "What makes ØRIONS different from other agencies?",
    a: "We don't chase trends or produce template work. Every engagement starts with strategy and meaning — then we build creative systems that compound over time. Our clients see 3.2× average ROI because we focus on long-term brand equity, not short-term noise.",
  },
  {
    q: "Do you offer ongoing retainers?",
    a: "Yes. After the initial project, many clients transition to a monthly retainer for ongoing content, campaigns, and strategic guidance. This ensures your brand stays consistent and continues to grow.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-32 md:py-44 px-6 md:px-12 border-t border-divider">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body mb-4">
                FAQ
              </p>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                Common<br />
                <span className="text-accent-gradient">Questions</span>
              </h2>
            </div>
            <div className="flex items-end">
              <p className="font-body text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
                Everything you need to know before starting a project with us.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Accordion type="single" collapsible className="border border-divider divide-y divide-divider">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-0">
                <AccordionTrigger className="px-8 py-6 font-display text-sm md:text-base font-medium text-foreground hover:no-underline hover:bg-secondary transition-colors duration-300 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 font-body text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQSection;
