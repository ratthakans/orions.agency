import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import ClosingCTA from "@/components/ClosingCTA";
import { depthMap, depths, pricingLogic } from "@/data/practice";

const SITE_URL = "https://orions.agency";

const Practice = () => (
  <div>
    <SEO
      title="The Practice — สี่ชั้นความลึก · ØRIONS"
      description="วิธีที่ ØRIONS รับงาน — สี่ชั้นความลึก: Sounding (หยั่งความลึก · ประตูเดียว) · Mass (จัดมวล) · Waterline (สิ่งที่ตลาดเห็น) · Roll (พลิก). ทุกงานเริ่มที่ Sounding ไม่มีทางลัด."
      path="/practice"
      schema={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "ØRIONS — The Practice",
        itemListElement: depths.map((d, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: d.name,
          description: d.kind,
          url: `${SITE_URL}/practice#${d.slug}`,
        })),
      }}
    />

    {/* HERO */}
    <section className="section-ink px-6 md:px-10 border-b border-foreground/15">
      <div className="max-w-[1280px] mx-auto pt-28 md:pt-32 pb-16 md:pb-20">
        <SectionLabel label="The Practice" />
        <Reveal delay={0.05} emphasis="lead">
          <h1 lang="th" className="mt-8 h-display-lg max-w-[15ch] thai-wrap">
            คุณเลือกยอดไม่ได้ — <em className="text-foreground">ยอดคือผลลัพธ์ของมวล.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p lang="th" className="mt-8 max-w-[640px] font-thai thai-wrap text-[16px] md:text-[19px] leading-[1.8] text-foreground/80">
            โลโก้ หนัง แคมเปญ โทนภาพ — ทั้งหมดคือยอด และตลาดทั้งตลาดกำลังรับจ้างแกะยอด.
            เราจัดมวลก่อน แล้วจึงแกะยอด <span className="text-foreground">และไม่แกะยอดให้ใครที่ไม่ให้เราแตะมวล.</span>
          </p>
        </Reveal>

        {/* Depth map — the mental model, surface to floor */}
        <Reveal delay={0.18}>
          <div className="mt-14 md:mt-16 border-t border-foreground/20">
            {depthMap.map((d, i) => (
              <div
                key={d.m}
                className={`grid grid-cols-[68px_1fr] md:grid-cols-[110px_190px_1fr] items-baseline gap-x-4 gap-y-1 py-4 border-b border-foreground/12 ${i === 0 ? "" : "opacity-95"}`}
              >
                <span className={`font-mono text-[11px] md:text-[12px] tracking-[0.14em] tabular-nums ${d.gate ? "text-cinnabar" : "text-muted-foreground"}`}>{d.m}</span>
                <span className="font-display text-[19px] md:text-[22px] font-medium tracking-[-0.01em]">{d.name}</span>
                <span lang="th" className="col-span-2 md:col-span-1 font-thai text-[13px] md:text-[14px] leading-[1.7] text-muted-foreground">
                  {d.d}
                  {d.gate && (
                    <span className="ml-3 font-mono text-[10px] tracking-[0.2em] uppercase text-cinnabar">ประตูเดียว</span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.22}>
          <p lang="th" className="mt-6 font-mono text-[10px] md:text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
            ทุกงานเริ่มที่ −40m เสมอ · ไม่มีทางลัด
          </p>
        </Reveal>
      </div>
    </section>

    {/* THE FOUR DEPTHS — in engagement order */}
    {depths.map((d, i) => (
      <section
        key={d.slug}
        id={d.slug}
        className={`px-6 md:px-10 border-t border-foreground/15 scroll-mt-16 ${i % 2 === 1 ? "bg-surface" : ""}`}
      >
        <div className="max-w-[1280px] mx-auto py-24 md:py-36 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-4">
            <Reveal>
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[12px] tracking-[0.14em] text-muted-foreground tabular-nums">{d.m}</span>
                {d.gate && (
                  <span className="meta-chip">ประตูเดียว</span>
                )}
              </div>
            </Reveal>
            <Reveal delay={0.05} emphasis="lead">
              <h2 className="mt-4 font-display font-medium text-[clamp(38px,6vw,68px)] leading-[0.95] tracking-[-0.03em]">
                {d.name}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p lang="th" className="mt-5 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.75] text-muted-foreground max-w-[34ch]">
                {d.kind}
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p lang="th" className="mt-6 font-mono text-[10px] tracking-[0.14em] uppercase text-foreground/70 leading-[1.9]">
                {d.terms}
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <Reveal delay={0.05}>
              <p lang="th" className="editorial-quote max-w-[680px] text-[19px] md:text-[24px]">
                {d.body}
              </p>
            </Reveal>

            {d.deliverable && (
              <div className="mt-12 border-t border-foreground/12">
                {d.deliverable.map((x, xi) => (
                  <Reveal key={x.k} delay={xi * 0.05} emphasis="quiet">
                    <div className="py-5 md:py-6 border-b border-foreground/12 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-2 md:gap-8">
                      <h3 lang="th" className="font-display text-[16px] md:text-[18px] font-medium tracking-[-0.01em]">{x.k}</h3>
                      <p lang="th" className="font-thai thai-wrap text-[13px] md:text-[14px] leading-[1.8] text-muted-foreground max-w-[54ch]">{x.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}

            {d.note && (
              <Reveal delay={0.1}>
                <p lang="th" className="mt-8 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.8] text-foreground/85 max-w-[62ch]">
                  {d.note}
                </p>
              </Reveal>
            )}
          </div>
        </div>
      </section>
    ))}

    {/* PRICING LOGIC */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <SectionLabel label="ตรรกะราคา" />
        </div>
        <div className="md:col-span-8">
          <Reveal emphasis="lead">
            <h2 lang="th" className="h-display-sm max-w-[22ch] thai-wrap">
              คุณไม่ได้จ่ายให้ยอด — <em className="text-foreground">คุณจ่ายให้ 90% ที่ไม่มีใครเห็น.</em>
            </h2>
          </Reveal>
          <ul className="mt-10 space-y-5">
            {pricingLogic.map((p) => (
              <Reveal key={p} emphasis="quiet">
                <li className="flex gap-4">
                  <span aria-hidden className="mt-2.5 h-px w-6 shrink-0 bg-foreground/40" />
                  <span lang="th" className="font-thai thai-wrap text-[15px] md:text-[16px] leading-[1.8] text-foreground/85 max-w-[56ch]">{p}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <ClosingCTA
      title={<>เริ่มที่ <em className="text-foreground">Sounding.</em></>}
      description="สามสัปดาห์ ตอบคำถามเดียว: ทาสี หรือ พลิก — เล่าโจทย์มาก่อนได้ ไม่มีข้อผูกมัด."
      ctas={[
        { label: "เริ่มต้นบทสนทนา", to: "/contact" },
        { label: "ดูบันทึกคำวินิจฉัย", to: "/work", variant: "ghost" },
      ]}
    />
  </div>
);

export default Practice;
