import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import ClosingCTA from "@/components/ClosingCTA";
import SEO from "@/components/SEO";
import FlipNumber from "@/components/FlipNumber";
import whoOrionsTeam from "@/assets/orions-team.jpg";
import founderImg from "@/assets/team/founder.jpg";
import ceoImg from "@/assets/team/ceo.jpg";
import cdImg from "@/assets/team/creative-director.jpg";
import creativeImg from "@/assets/team/creative.jpg";
import pmImg from "@/assets/team/pm.jpg";
import editorImg from "@/assets/team/editor.jpg";
import dopImg from "@/assets/team/dop.jpg";
import directorImg from "@/assets/team/director.jpg";

const SITE_URL = "https://orions.agency";
const accent = "text-gradient";

type Person = { role: string; name: string; img?: string };

type Group = { label: string; people: Person[] };

const groups: Group[] = [
  {
    label: "Leadership",
    people: [
      { role: "Founder", name: "Ratthakan Suwanphakdee", img: founderImg },
      { role: "Managing Director", name: "Kanakhom Kittisakulnam", img: ceoImg },
    ],
  },
  {
    label: "Strategy & Account",
    people: [
      { role: "Account Executive", name: "Namfon Kamnoedklang", img: pmImg },
      { role: "Project Manager", name: "Niti Paladkong", img: directorImg },
      { role: "Marketing Strategist", name: "Akaphant Apirugpong", img: creativeImg },
    ],
  },
  {
    label: "Creative & Production",
    people: [
      { role: "Creative Director", name: "Manrut Rojrattanavichai", img: cdImg },
      { role: "Creative Senior", name: "—", img: undefined },
      { role: "Creative Editor", name: "Achitpon Repaichit", img: editorImg },
      { role: "DOP", name: "Teerawat Singkam", img: dopImg },
      { role: "Social Media Manager", name: "—", img: undefined },
    ],
  },
];

const totalPeople = groups.reduce((sum, g) => sum + g.people.length, 0);

const whyUs = [
  { n: "01", title: "Small team. Your team.", body: "You talk to who's doing the work. No telephone game." },
  { n: "02", title: "Strategy before pretty.", body: "We plan before we post." },
  { n: "03", title: "Ads inside the plan.", body: "Paid ads built into your strategy from day one." },
  { n: "04", title: "Built for boutique brands.", body: "We work with brands who care about quality." },
];

const PersonCard = ({ p, index, total }: { p: Person; index: number; total: number }) => (
  <Reveal delay={index * 0.04}>
    <div className="bg-background h-full flex flex-col group">
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface">
        {p.img ? (
          <img
            src={p.img}
            alt={`${p.name} — ${p.role} at ØRIONS`}
            loading="lazy"
            width={640}
            height={800}
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.05] brightness-95 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-surface-2">
            <span className="font-display italic text-[44px] text-muted-foreground/40">
              {p.role.split(" ").map((w) => w[0]).join("").slice(0, 2)}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-foreground/10 mix-blend-multiply pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent pointer-events-none" />
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
          <span className="font-display text-background text-[18px] md:text-[22px] leading-none tracking-[-0.02em]">
            {String(index + 1).padStart(2, "0")}
            <span className="text-background/50 text-[12px] md:text-[14px]">/{String(total).padStart(2, "0")}</span>
          </span>
          <span className="font-mono text-[9px] tracking-[0.2em] text-background/70">ØRIONS</span>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <div className="index-badge text-background/90">{p.role}</div>
        </div>
      </div>
      <div className="pt-3 pb-1">
        <div className="font-display tracking-[-0.02em] leading-[1.1] text-[13px] md:text-[15px]">{p.name}</div>
      </div>
    </div>
  </Reveal>
);

const About = () => (
  <div>
    <SEO
      title="About — ØRIONS"
      description="A boutique creative agency in Bangkok. 11 people, in-house. Branding, content, and paid ads for F&B, fashion, and hospitality brands."
      path="/about"
      schema={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
        ],
      }}
    />

    <PageHero
      eyebrow="ABOUT · INDEX"
      verticalLabel="/ 04 · ABOUT"
      title={<>A <span className={accent}>boutique</span><br />creative agency.</>}
    />

    {/* WHO IS ØRIONS */}
    <section className="relative px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        <div className="md:col-span-7 order-2 md:order-1">
          <Reveal>
            <div className="aspect-[4/5] md:aspect-[5/4] overflow-hidden bg-surface-2 border border-foreground">
              <img src={whoOrionsTeam} alt="ØRIONS team in Bangkok" loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-3 flex items-center justify-between font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
              <span>01 — ØRIONS TEAM</span>
              <span>BANGKOK STUDIO</span>
              <span>EST. 2026</span>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-5 order-1 md:order-2">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">— WHO IS ØRIONS</p>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display h-display-sm">
              Boutique <span className={accent}>creative</span> agency.
              <span className="block mt-4 font-mono text-[12px] md:text-[14px] tracking-[0.2em] text-muted-foreground uppercase">From Bangkok · Est. 2026</span>
            </h2>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-8 font-thai text-[15px] md:text-[16px] leading-[1.7] text-foreground/70">
              We help unique brands grow on social — through <span className="text-foreground">branding, content, and paid ads</span>. Built for <span className="text-foreground">F&amp;B, fashion, and hospitality</span> brands who care about quality.
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-12 border-t border-foreground pt-6 grid grid-cols-3 gap-3 md:gap-4">
              {[
                { v: 11, suffix: "", l: "PEOPLE · IN-HOUSE" },
                { v: 40, suffix: "+", l: "BRANDS" },
                { v: 4, suffix: "wk", l: "TO LIVE" },
              ].map((s, i) => (
                <div key={s.l} className={`min-w-0 ${i > 0 ? "border-l border-soft pl-3 md:pl-4" : ""}`}>
                  <div className={`font-display ${accent} text-[28px] md:text-[44px] leading-none tracking-[-0.04em] tabular-nums`}>
                    <FlipNumber to={s.v} suffix={s.suffix} suffixClassName="ml-0.5" />
                  </div>
                  <div className="mt-2 font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* WHY US */}
    <section className="relative px-6 md:px-10 bg-foreground text-background">
      <div className="border-t border-background/30 py-24 md:py-32 max-w-[1200px] mx-auto">
        <Reveal delay={0.05}>
          <h2 className="font-display h-display-sm">
            Why <span className={accent}>us?</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 border-t border-background/30">
          {whyUs.map((w, i) => (
            <Reveal key={w.n} delay={0.08 * i}>
              <article className={`relative h-full py-10 md:py-12 md:px-8 flex flex-col ${i % 2 === 1 ? "md:border-l border-background/20" : ""} ${i < 2 ? "md:border-b border-background/20" : ""}`}>
                <div className="font-mono text-[10px] tracking-[0.2em] text-background/50">— {w.n}</div>
                <h3 className="mt-6 font-display text-[22px] md:text-[26px] tracking-[-0.02em]">{w.title}</h3>
                <p className="mt-3 font-thai text-[14px] leading-[1.7] text-background/70 max-w-[300px]">{w.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* THE TEAM */}
    <section className="px-6 md:px-10">
      <div className="border-t border-foreground py-24 md:py-32">
        <Reveal delay={0.05}>
          <h2 className="font-display h-display-sm max-w-[900px]">
            <FlipNumber to={totalPeople} className={`font-display ${accent} tabular-nums`} /> people, <span className={accent}>in-house.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[520px] font-thai text-[15px] md:text-[16px] leading-[1.7] text-foreground/70">
            You'll work directly with the people building your brand. No account-manager middle layer.
          </p>
        </Reveal>

        {(() => {
          let runningIdx = 0;
          return (
            <div className="mt-16 space-y-16">
              {groups.map((g) => (
                <div key={g.label}>
                  <div className="flex items-baseline justify-between border-t border-foreground pt-3">
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground">— {g.label}</span>
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                      {String(g.people.length).padStart(2, "0")} {g.people.length === 1 ? "PERSON" : "PEOPLE"}
                    </span>
                  </div>
                  <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
                    {g.people.map((p) => {
                      const i = runningIdx++;
                      return <PersonCard key={`${g.label}-${p.role}-${i}`} p={p} index={i} total={totalPeople} />;
                    })}
                  </div>
                </div>
              ))}
            </div>
          );
        })()}
      </div>
    </section>

    <ClosingCTA
      title={<>Tell us about <span className={accent}>the brand.</span></>}
      description="30-min discovery call. Free. We reply within 24 hours."
      ctas={[
        { label: "Start the conversation", to: "/contact" },
        { label: "See services & pricing", to: "/services", variant: "ghost" },
      ]}
    />
  </div>
);

export default About;
