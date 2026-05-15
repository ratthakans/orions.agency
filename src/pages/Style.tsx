import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";
import CTA from "@/components/CTA";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

/** Hidden design-system reference page. Not linked from nav. Use to QA regressions. */
const Swatch = ({ name, varName, fg = "background" }: { name: string; varName: string; fg?: "background" | "foreground" }) => (
  <div className="border border-foreground">
    <div
      className="h-24 flex items-end p-3"
      style={{ backgroundColor: `hsl(var(${varName}))`, color: `hsl(var(--${fg}))` }}
    >
      <span className="index-badge font-bold">{name}</span>
    </div>
    <div className="px-3 py-2 font-mono text-[10px] tracking-[0.08em] text-muted-foreground border-t border-foreground">
      hsl(var({varName}))
    </div>
  </div>
);

const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="grid grid-cols-12 gap-4 md:gap-6 py-6 border-b border-soft items-baseline">
    <div className="col-span-12 md:col-span-2 index-badge text-muted-foreground">{label}</div>
    <div className="col-span-12 md:col-span-10">{children}</div>
  </div>
);

const Style = () => (
  <div>
    <SEO title="Style — ØRIONS" description="Internal design system reference." path="/style" />

    <PageHero
      eyebrow="STYLE · INDEX"
      title={<>Design <span className="text-gradient">System</span><span className="text-muted-foreground">.</span></>}
      subtitle="Single-page reference for type, color, components and motion. Hidden route — not linked from public nav."
    />

    {/* TYPE SCALE */}
    <section className="px-6 md:px-10 py-16 md:py-20 border-t border-foreground">
      <SectionHeader index="01" left="TYPE SCALE" right="font-display · Unbounded" />
      <div className="mt-10">
        <Row label="h-display-xl">
          <h2 className="font-display h-display-xl">ØRIONS</h2>
          <p className="mt-2 font-mono text-[10px] text-muted-foreground">Home hero only · clamp(56px, 14vw, 180px)</p>
        </Row>
        <Row label="h-display-lg">
          <h2 className="font-display h-display-lg">Page Hero<span className="text-muted-foreground">.</span></h2>
          <p className="mt-2 font-mono text-[10px] text-muted-foreground">PageHero · clamp(40px, 11vw, 132px)</p>
        </Row>
        <Row label="h-display-md">
          <h2 className="font-display h-display-md">Section Headline</h2>
          <p className="mt-2 font-mono text-[10px] text-muted-foreground">Section + closing CTA · clamp(32px, 6.5vw, 88px)</p>
        </Row>
        <Row label="h-display-sm">
          <h2 className="font-display h-display-sm">Sub-section title</h2>
          <p className="mt-2 font-mono text-[10px] text-muted-foreground">Reel headers · clamp(24px, 4vw, 48px)</p>
        </Row>
        <Row label="h-display-xs">
          <h2 className="font-display h-display-xs">Card / inline title</h2>
          <p className="mt-2 font-mono text-[10px] text-muted-foreground">clamp(18px, 2.2vw, 28px)</p>
        </Row>
      </div>
    </section>

    {/* UTILITY TYPE */}
    <section className="px-6 md:px-10 py-16 md:py-20 border-t border-foreground">
      <SectionHeader index="02" left="UTILITY TYPE" right="labels · body · mono" />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-5">
          <div>
            <div className="index-badge text-muted-foreground mb-2">.index-badge</div>
            <span className="index-badge">SELECTED WORK · 04 ITEMS</span>
          </div>
          <div>
            <div className="index-badge text-muted-foreground mb-2">.label-soft</div>
            <span className="label-soft">soft label</span>
          </div>
          <div>
            <div className="index-badge text-muted-foreground mb-2">.font-mono</div>
            <span className="font-mono text-[12px] tracking-[0.12em]">[01/05] · BKK 14:32 ICT</span>
          </div>
        </div>
        <div className="space-y-5">
          <div>
            <div className="index-badge text-muted-foreground mb-2">.font-thai (body)</div>
            <p className="font-thai text-[16px] leading-[1.7] text-muted-foreground max-w-[420px]">
              เริ่มจากบทสนทนา 30 นาที — ไม่มีค่าใช้จ่าย ไม่มีพันธะ เราฟังก่อน แล้วบอกตรงๆ ว่าจะลากเส้นไปทางไหน
            </p>
          </div>
          <div>
            <div className="index-badge text-muted-foreground mb-2">italic accent (in heading)</div>
            <h3 className="font-display h-display-sm">Have a problem<br /><span className="italic">worth solving</span>?</h3>
          </div>
        </div>
      </div>
    </section>

    {/* COLOR */}
    <section className="px-6 md:px-10 py-16 md:py-20 border-t border-foreground">
      <SectionHeader index="03" left="COLOR TOKENS" right="HSL · semantic" />
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        <Swatch name="background" varName="--background" fg="foreground" />
        <Swatch name="foreground" varName="--foreground" fg="background" />
        <Swatch name="surface" varName="--surface" fg="foreground" />
        <Swatch name="surface-2" varName="--surface-2" fg="foreground" />
        <Swatch name="muted" varName="--muted" fg="foreground" />
        <Swatch name="muted-foreground" varName="--muted-foreground" fg="background" />
        <Swatch name="accent-from" varName="--accent-from" fg="background" />
        <Swatch name="accent-to" varName="--accent-to" fg="foreground" />
      </div>

      <div className="mt-8 border border-foreground">
        <div className="h-24 bg-gradient-accent flex items-end p-3 text-foreground">
          <span className="index-badge font-bold">Sunset Ink — gradient</span>
        </div>
        <div className="px-3 py-2 font-mono text-[10px] tracking-[0.08em] text-muted-foreground border-t border-foreground">
          .bg-gradient-accent · .text-gradient
        </div>
      </div>
    </section>

    {/* CTA VARIANTS */}
    <section className="px-6 md:px-10 py-16 md:py-20 border-t border-foreground">
      <SectionHeader index="04" left="CTA VARIANTS" right="primary · invert · ghost" />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-foreground p-6 md:p-8">
          <div className="index-badge text-muted-foreground mb-6">primary</div>
          <CTA to="/style">Request the Audit</CTA>
        </div>
        <div className="border border-foreground p-6 md:p-8 bg-background text-foreground">
          <div className="index-badge opacity-60 mb-6">invert (on dark)</div>
          <CTA to="/style" variant="invert">Request the Audit</CTA>
        </div>
        <div className="border border-foreground p-6 md:p-8">
          <div className="index-badge text-muted-foreground mb-6">ghost</div>
          <CTA to="/style" variant="ghost">Or start a project</CTA>
        </div>
      </div>
    </section>

    {/* SECTION HEADER VARIANTS */}
    <section className="px-6 md:px-10 py-16 md:py-20 border-t border-foreground">
      <SectionHeader index="05" left="SECTION HEADER" right="light · dark · soft" />
      <div className="mt-10 space-y-6">
        <div className="border border-foreground p-6 md:p-8">
          <div className="index-badge text-muted-foreground mb-6">variant="light" + index</div>
          <SectionHeader index="01" left="SELECTED WORK" right="applied creative in action" />
        </div>
        <div className="border border-foreground p-6 md:p-8">
          <div className="index-badge text-muted-foreground mb-6">variant="light" · soft</div>
          <SectionHeader left="THE PROCESS" right="06 STEPS" soft />
        </div>
        <div className="border border-foreground p-6 md:p-8 bg-background text-foreground">
          <div className="index-badge opacity-60 mb-6">variant="dark"</div>
          <SectionHeader index="02" left="METHOD" right="06 STEPS" variant="dark" />
        </div>
      </div>
    </section>

    {/* MOTION */}
    <section className="px-6 md:px-10 py-16 md:py-20 border-t border-foreground">
      <SectionHeader index="06" left="MOTION" right="reveal · hover" />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Reveal>
          <div className="border border-foreground p-8">
            <div className="index-badge text-muted-foreground mb-4">{"<Reveal>"} fade + lift</div>
            <p className="font-thai text-[15px] leading-[1.7]">Wraps any block; triggers on scroll into view.</p>
          </div>
        </Reveal>
        <div className="border border-foreground p-8 group cursor-default">
          <div className="index-badge text-muted-foreground mb-4">CTA arrow gradient hover</div>
          <p className="font-thai text-[15px] leading-[1.7]">Hover the buttons above — arrow shifts to Sunset Ink gradient.</p>
        </div>
      </div>
    </section>

    {/* SPACING */}
    <section className="px-6 md:px-10 py-16 md:py-20 border-t border-foreground">
      <SectionHeader index="07" left="SPACING" right="px · py scale" />
      <div className="mt-10 font-mono text-[12px] leading-[1.9] text-muted-foreground">
        <div><span className="text-foreground">px-6 md:px-10</span> — section horizontal padding</div>
        <div><span className="text-foreground">py-24 md:py-32</span> — major section</div>
        <div><span className="text-foreground">py-16 md:py-20</span> — secondary row</div>
        <div><span className="text-foreground">p-6 md:p-8</span> — card inner</div>
        <div><span className="text-foreground">gap-10 md:gap-12</span> — grid gap</div>
      </div>
    </section>

    <section className="px-6 md:px-10 py-24 md:py-32 border-t border-foreground bg-background text-foreground">
      <Reveal>
        <h2 className="font-display h-display-md max-w-[800px]">
          End of <span className="italic">reference</span><span className="opacity-60">.</span>
        </h2>
      </Reveal>
      <div className="mt-10">
        <CTA to="/" variant="invert">Back to home</CTA>
      </div>
    </section>
  </div>
);

export default Style;
