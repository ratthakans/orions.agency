import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote: "ØRIONS didn't just redesign our brand — they redefined how we think about communication. The clarity they brought changed everything.",
    name: "Natcha Wongprasert",
    title: "CEO",
    company: "Northwind Electric",
  },
  {
    quote: "Working with ØRIONS felt like unlocking a part of our brand we always knew existed but could never articulate. Our engagement tripled.",
    name: "Prem Srisawat",
    title: "Head of Marketing",
    company: "Atlas Property Group",
  },
  {
    quote: "They don't follow trends — they build systems. Six months later, our content still performs because it's built on real strategy.",
    name: "Siriporn Klaewkla",
    title: "Founder",
    company: "Field Notes Coffee",
  },
  {
    quote: "The ROI speaks for itself. But beyond numbers, ØRIONS gave our team a shared language that aligned everyone overnight.",
    name: "Arisa Tanaka",
    title: "CMO",
    company: "Orbit Fintech",
  },
];

const TestimonialsSection = () => (
  <section className="py-32 md:py-44 px-6 md:px-12 border-t border-divider">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body mb-4">
              Testimonials
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              What Clients<br />
              <span className="text-accent-gradient">Say</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
              Real results from real partnerships. Here's what our clients have to say about working with us.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-divider border border-divider">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.08}>
            <div className="bg-background p-8 md:p-12 flex flex-col justify-between h-full">
              <blockquote className="font-body text-base md:text-lg text-foreground leading-relaxed mb-8">
                "{t.quote}"
              </blockquote>
              <div className="border-t border-divider pt-6">
                <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground mt-0.5">
                  {t.title}, {t.company}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
