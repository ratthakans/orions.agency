import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import Picture from "@/components/Picture";
import PersonProfile from "@/components/PersonProfile";
import { director, founder } from "@/data/team";
import elder from "@/assets/luciaka/elder.jpg?as=picture";
import care from "@/assets/luciaka/care.jpg?as=picture";
import comfort from "@/assets/luciaka/comfort.jpg?as=picture";
import siriraj from "@/assets/credits/siriraj-womens-day.jpg?as=picture";

/** A pitch for one client, sent as a link. Unlinked from the site and noindex
 *  (here and as an X-Robots-Tag header in vercel.json). Cut from the 20-slide
 *  credentials deck to what LUCIAKA needs to decide: that we understand the
 *  brand, who will make it, what we propose, and what it covers. */

const understanding = [
  { n: "01", title: "ผู้สูงอายุคือเจ้าของเรื่อง", body: "ให้เห็นเป้าหมาย ความตั้งใจ และชีวิตประจำวันที่มีความหมาย ผ่านมุมมองที่ให้เกียรติ" },
  { n: "02", title: "ครอบครัวคือคนร่วมทาง", body: "สื่อสารกับผู้ดูแลควบคู่กัน ทั้งความรู้สึก ความเข้าใจ และข้อมูลที่ช่วยตัดสินใจ" },
  { n: "03", title: "แบรนด์อยู่เบื้องหลัง", body: "ให้ LUCIAKA ปรากฏในบริบทของการดูแลตัวเองอย่างต่อเนื่อง ด้วยน้ำเสียงอบอุ่นและน่าเชื่อถือ" },
];

const principles = [
  { key: "Human", title: "เริ่มจากสิ่งที่ยังอยากทำ", body: "มองผู้สูงอายุเป็นคนที่มีความฝัน มีบทบาท และมีเรื่องของตัวเอง ให้คนดูรู้จักเขาก่อนรู้จักสินค้า" },
  { key: "Trust", title: "ทำให้ข้อมูลเข้าใจง่าย", body: "เลือกสารสำคัญที่แบรนด์ยืนยันได้ อธิบายผ่านภาพและภาษาที่ชัดเจน โดยไม่ขยายผลเกินข้อมูลสินค้า" },
  { key: "Continuity", title: "ทุกชิ้นเล่าเรื่องเดียวกัน", body: "ภาพยนตร์ ภาพนิ่ง และคอนเทนต์สั้น ใช้แกนเรื่องและน้ำเสียงเดียวกัน เพื่อสะสมความคุ้นเคยกับแบรนด์" },
];

const film = [
  { key: "Open", title: "นัดเล็ก ๆ ที่มีความหมาย", body: "คุณพ่อเตรียมกล้องไว้ถ่ายรูปลูก คุณแม่เตรียมไปร่วมมื้อเย็น ทุกคนมีนัดที่ตั้งใจจะไป" },
  { key: "Build", title: "เบื้องหลังของการไปต่อ", body: "เห็นกิจวัตรการดูแลตัวเอง และครอบครัวที่คอยสนับสนุน แทรกสินค้าอย่างเป็นธรรมชาติ" },
  { key: "Resolve", title: "ความพร้อมที่มีคนอยู่ข้าง ๆ", body: "จบที่การได้อยู่ในช่วงเวลาสำคัญ พร้อมภาพแบรนด์และข้อความที่พัฒนาต่อจาก Brandbook" },
];

const scope = [
  { n: "01", name: "Strategy & Concept", items: ["สรุปโจทย์และกลุ่มเป้าหมาย", "แกนสารและแนวคิดแคมเปญ", "Treatment และบทภาพยนตร์"] },
  { n: "02", name: "Pre-production", items: ["Moodboard และ Storyboard", "Casting · Location · Styling", "แผนถ่ายทำและรายการชิ้นงาน"] },
  { n: "03", name: "Production & Post", items: ["กำกับและควบคุมงานถ่ายทำ", "ตัดต่อ สี เสียง และกราฟิก", "ส่งออกตามรูปแบบที่ตกลง"] },
];

const Note = ({ children }: { children: string }) => (
  <p lang="th" className="mt-10 max-w-[70ch] font-thai thai-wrap text-[13px] leading-[1.7] text-muted-foreground">{children}</p>
);

const Luciaka = () => (
  <div>
    <SEO
      title="ORIONS × LUCIAKA — Creative credentials & approach"
      description="ข้อเสนองานสร้างสรรค์จาก ORIONS สำหรับ LUCIAKA — เล่าเรื่องคนไม่หยุดสู้ ให้คนรู้สึก และเชื่อมั่นในแบรนด์"
      path="/for/luciaka"
      noindex
    />

    {/* Hero — who it is for, and the one line the work has to land. */}
    <section className="section-ink px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto pt-28 md:pt-36 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-end">
        <div>
          <SectionLabel label="Prepared for LUCIAKA" />
          <Reveal emphasis="lead">
            <h1 className="mt-9 h-display-lg">ORIONS × LUCIAKA</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p lang="th" className="mt-8 max-w-[22ch] font-thai thai-wrap text-[26px] md:text-[38px] leading-[1.45]">
              เล่าเรื่อง “คนไม่หยุดสู้” ให้คนรู้สึก และเชื่อมั่นในแบรนด์
            </p>
          </Reveal>
          <p className="mt-10 font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">Understanding · Team · Proposed direction · Scope</p>
        </div>
        <Picture data={elder} alt="ภาพอ้างอิงจาก LUCIAKA Brandbook" className="w-full max-w-[460px] lg:ml-auto aspect-[880/930] object-cover" />
      </div>
    </section>

    {/* 01 — We read the brandbook; this is what we took from it. */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-16 md:py-24">
        <SectionLabel label="01 · Our understanding" />
        <Reveal emphasis="lead">
          <h2 lang="th" className="mt-8 font-thai thai-wrap text-[28px] md:text-[44px] leading-[1.35] max-w-[24ch]">คนไม่หยุดสู้ ยังมีเรื่องที่อยากไปต่อ</h2>
        </Reveal>
        <p lang="th" className="mt-4 font-thai text-[15px] text-muted-foreground">จากแนวคิดใน Brandbook ของ LUCIAKA</p>
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-3 border-t border-foreground/15">
          {understanding.map((item) => (
            <li key={item.n} className="py-8 md:pr-8 border-b md:border-b-0 md:border-r last:border-r-0 border-foreground/15 md:[&:not(:first-child)]:pl-8">
              <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground">{item.n}</p>
              <p lang="th" className="mt-4 font-thai text-[20px] md:text-[22px]">{item.title}</p>
              <p lang="th" className="mt-3 font-thai thai-wrap text-[15px] leading-[1.8] text-foreground/80">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* 02 — The two people who will make it, with their own credits. */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-16 md:py-24">
        <SectionLabel label="02 · Who makes it" />
        <p lang="th" className="mt-8 max-w-[60ch] font-thai thai-wrap text-[17px] md:text-[19px] leading-[1.8] text-foreground/85">
          Creative Director ดูแลแนวคิด สารหลัก และทิศทางภาพ ให้เรื่องของคนเชื่อมกับบทบาทของแบรนด์ตลอดทั้งแคมเปญ — ผู้กำกับนำประสบการณ์เล่าเรื่องชีวิตและครอบครัว มาถ่ายทอดเป็นภาพยนตร์ที่คนดูเข้าถึง
        </p>
        <div className="mt-14 space-y-20">
          <PersonProfile person={founder} />
          <PersonProfile person={director} />
        </div>
      </div>
    </section>

    {/* 03 — The nearest thing on the record: health, told through people. */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
        <a href="https://www.youtube.com/watch?v=eAmZwUalppo" target="_blank" rel="noopener noreferrer" className="group block aspect-video overflow-hidden border border-foreground/12 hover:border-foreground/40 transition-colors">
          <Picture data={siriraj} alt="Siriraj Hospital — International Women's Day" loading="lazy" className="w-full h-full object-cover group-hover:opacity-90 transition-opacity" />
        </a>
        <div>
          <SectionLabel label="03 · Relevant work" />
          <p className="mt-8 font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">Siriraj Hospital</p>
          <h2 lang="th" className="mt-3 font-thai thai-wrap text-[26px] md:text-[36px] leading-[1.4]">สื่อสารเรื่องสุขภาพ ให้คนรู้สึกใกล้ตัว</h2>
          <p lang="th" className="mt-6 font-thai thai-wrap text-[16px] leading-[1.8] text-foreground/80">
            งานสื่อสารที่มีคนเป็นศูนย์กลาง — สิ่งที่นำมาต่อยอดให้ LUCIAKA คือเล่าผ่านประสบการณ์และความสัมพันธ์ ให้ความรู้สึกนำไปสู่ความสนใจ แล้วใช้ข้อมูลที่ชัดเจนสร้างความเชื่อมั่น
          </p>
          <Link to="/work" className="mt-8 cta-link cta-link-muted">
            <span>See all work</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* 04 — Three rules every piece answers to. */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-16 md:py-24">
        <SectionLabel label="04 · Creative principles" />
        <Reveal emphasis="lead">
          <h2 lang="th" className="mt-8 font-thai thai-wrap text-[28px] md:text-[44px] leading-[1.35]">จริงใจ อบอุ่น และเห็นพลังของคน</h2>
        </Reveal>
        <ul className="mt-12 border-t border-foreground/15">
          {principles.map((item) => (
            <li key={item.key} className="py-7 border-b border-foreground/15 grid grid-cols-1 md:grid-cols-[180px_1fr_1.4fr] gap-2 md:gap-8">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground md:pt-1.5">{item.key}</p>
              <p lang="th" className="font-thai text-[20px]">{item.title}</p>
              <p lang="th" className="font-thai thai-wrap text-[15px] leading-[1.8] text-foreground/80">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* 05 — The hero film, as a structure to develop together, not a script. */}
    <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-16 md:py-24">
        <SectionLabel label="05 · Proposed hero film" />
        <Reveal emphasis="lead">
          <h2 lang="th" className="mt-8 font-thai thai-wrap text-[32px] md:text-[56px] leading-[1.3]">“ยังมีนัดที่อยากไปให้ถึง”</h2>
        </Reveal>
        <p lang="th" className="mt-4 font-thai text-[15px] text-muted-foreground">LUCIAKA — เบื้องหลังของคนไม่หยุดสู้</p>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16">
          <ol className="border-t border-foreground/15">
            {film.map((beat) => (
              <li key={beat.key} className="py-7 border-b border-foreground/15">
                <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">{beat.key}</p>
                <p lang="th" className="mt-3 font-thai text-[20px] md:text-[22px]">{beat.title}</p>
                <p lang="th" className="mt-2 font-thai thai-wrap text-[15px] leading-[1.8] text-foreground/80">{beat.body}</p>
              </li>
            ))}
          </ol>
          <div className="grid grid-cols-2 gap-4 content-start">
            <Picture data={care} alt="ภาพอ้างอิงจาก LUCIAKA Brandbook" loading="lazy" className="w-full aspect-[4/5] object-cover" />
            <Picture data={comfort} alt="ภาพอ้างอิงจาก LUCIAKA Brandbook" loading="lazy" className="w-full aspect-[4/5] object-cover" />
            <p lang="th" className="col-span-2 font-thai thai-wrap text-[14px] leading-[1.7] text-foreground/70">
              แสงธรรมชาติ โทนอุ่น เก็บสีหน้า ท่าทาง และความสัมพันธ์ในกิจวัตรที่คนดูคุ้นเคย — ยึดสีและการใช้โลโก้จาก Brandbook
            </p>
          </div>
        </div>
        <Note>โครงเรื่องเบื้องต้น — บท รายละเอียดสินค้า และข้อความปิดท้าย จะพัฒนาร่วมกับแบรนด์ก่อนผลิต ภาพในส่วนนี้เป็นภาพอ้างอิงจาก LUCIAKA Brandbook</Note>
      </div>
    </section>

    {/* 06 — What the engagement covers. Price and terms live in the quote. */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-16 md:py-24">
        <SectionLabel label="06 · Proposed scope" />
        <Reveal emphasis="lead">
          <h2 lang="th" className="mt-8 font-thai thai-wrap text-[28px] md:text-[44px] leading-[1.35]">จากแนวคิด ไปถึงชิ้นงานที่พร้อมใช้</h2>
        </Reveal>
        <ol className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/15 border border-foreground/15">
          {scope.map((phase) => (
            <li key={phase.n} className="bg-background p-7 md:p-8">
              <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground">{phase.n}</p>
              <p className="mt-4 font-body text-[20px]">{phase.name}</p>
              <ul className="mt-5 space-y-2">
                {phase.items.map((item) => (
                  <li key={item} lang="th" className="font-thai text-[15px] text-foreground/80">{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <Note>ขอบเขตเสนอสำหรับหารือ — งบประมาณ ระยะเวลา สิทธิการใช้งาน และจำนวนรอบแก้ไข สรุปในใบเสนอราคา</Note>
      </div>
    </section>

    {/* Close — one way to reply. */}
    <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel label="Let's create the next story" />
        <Reveal emphasis="lead">
          <h2 lang="th" className="mt-8 font-thai thai-wrap text-[30px] md:text-[48px] leading-[1.35]">เรื่องต่อไป เริ่มจากคนไม่หยุดสู้</h2>
        </Reveal>
        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5">
          <a href="mailto:hello@orions.agency?subject=LUCIAKA%20%C3%97%20ORIONS" className="cta-link">
            <span>hello@orions.agency</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a href="tel:+66893542628" className="cta-link cta-link-muted">
            <span>+66 89 354 2628 · คุณพลอย</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default Luciaka;
