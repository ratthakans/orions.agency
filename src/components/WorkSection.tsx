import AnimatedSection from "./AnimatedSection";
import workNorthwind from "@/assets/work-northwind.jpg";
import workAtlas from "@/assets/work-atlas.jpg";
import workKoha from "@/assets/work-koha.jpg";
import workLumen from "@/assets/work-lumen.jpg";
import workSera from "@/assets/work-sera.jpg";
import workMuse from "@/assets/work-muse.jpg";
import workOrbit from "@/assets/work-orbit.jpg";
import workField from "@/assets/work-field.jpg";

const works = [
  { title: "Northwind Electric", desc: "EV mobility brand repositioning and campaign launch.", image: workNorthwind },
  { title: "Atlas Property Group", desc: "Narrative website and brand platform.", image: workAtlas },
  { title: "Koha Culture Studio", desc: "Community storytelling and content system.", image: workKoha },
  { title: "Lumen Health", desc: "Digital experience and search visibility strategy.", image: workLumen },
  { title: "Sera Hospitality", desc: "Brand refresh and digital campaign.", image: workSera },
  { title: "Muse Education", desc: "Campaign platform and storytelling.", image: workMuse },
  { title: "Orbit Fintech", desc: "Authority building and content ecosystem.", image: workOrbit },
  { title: "Field Notes Coffee", desc: "Editorial storytelling and creative campaigns.", image: workField },
];

const WorkSection = () => (
  <section id="work" className="py-32 md:py-44 px-6 md:px-12">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body mb-4">
          Portfolio
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-20">
          Selected Work
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {works.map((w, i) => (
          <AnimatedSection key={w.title} delay={i * 0.06}>
            <div className="group cursor-pointer">
              <div className="overflow-hidden mb-4">
                <img
                  src={w.image}
                  alt={w.title}
                  className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-1">
                {w.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">{w.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WorkSection;
