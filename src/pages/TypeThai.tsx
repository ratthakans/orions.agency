import SEO from "@/components/SEO";

type FontKey = "sarabun" | "taviraj" | "baijam";

const FONTS: Array<{
  key: FontKey;
  name: string;
  cls: string;
  type: string;
  pair: string;
  feel: string;
  best: string;
}> = [
  {
    key: "sarabun",
    name: "Sarabun",
    cls: "font-th-sarabun",
    type: "Serif (humanist)",
    pair: "คู่กับ Cormorant Garamond — serif × serif",
    feel: "นุ่ม คลาสสิก อ่านง่าย เป็นทางการเล็กน้อย",
    best: "Body text, ย่อหน้ายาว, editorial",
  },
  {
    key: "taviraj",
    name: "Taviraj",
    cls: "font-th-taviraj",
    type: "Serif (display)",
    pair: "คู่กับ Cormorant Garamond — elegant × elegant",
    feel: "หรู คลาสสิก มี contrast สูง เหมาะเป็น headline",
    best: "Headline, quote, ชื่อแบรนด์",
  },
  {
    key: "baijam",
    name: "Bai Jamjuree",
    cls: "font-th-baijam",
    type: "Sans-serif (geometric)",
    pair: "คู่กับ Inter — sans × sans",
    feel: "เรียบ ทันสมัย เป็นมิตร อ่านง่ายบนหน้าจอ",
    best: "Body text, UI, label",
  },
];

const BODY = `เราคือทีมครีเอทีฟบูทีคในกรุงเทพฯ ที่ทำงานกับแบรนด์อาหาร แฟชั่น และโรงแรมเล็ก ๆ ที่แคร์เรื่องคุณภาพ ตั้งแต่วางกลยุทธ์ ถ่ายทำ ตัดต่อ จนถึงยิงโฆษณา — ทีมเดียว ไม่มีส่งต่อ vendor ทุกชิ้นที่ปล่อยมีเป้าหมายชัดเจนและวัดผลได้`;

const BULLETS = [
  "วางแบรนด์และทิศทางคอนเทนต์",
  "ถ่ายทำและตัดต่อในทีมเดียว",
  "ยิงโฆษณาและรายงานผลรายเดือน",
  "ดูแลโซเชียลและเว็บไซต์ต่อเนื่อง",
];

const Column = ({ font }: { font: typeof FONTS[number] }) => (
  <div className="px-6 md:px-10 py-12 md:py-16 border-t md:border-t-0 md:border-l border-soft first:border-l-0 first:border-t">
    {/* Mono label */}
    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
      <div className="text-foreground">{font.name}</div>
      <div className="mt-1">{font.type}</div>
      <div className="mt-0.5">{font.pair}</div>
    </div>

    {/* Mixed headline */}
    <h2 className="mt-10 font-serif text-[40px] md:text-[48px] leading-[1.05] tracking-[-0.02em]">
      From idea to{" "}
      <em className={`italic ${font.cls}`}>ภาพสุดท้าย</em>{" "}
      — one team.
    </h2>

    {/* Sub copy */}
    <p className={`mt-6 text-[20px] md:text-[22px] leading-[1.5] ${font.cls}`}>
      หนึ่งทีม ตั้งแต่ความคิดแรกจนถึงคัตสุดท้าย ไม่มีส่งต่อ
    </p>

    {/* Body */}
    <p className={`mt-8 text-[15px] md:text-[16px] leading-[1.75] text-muted-foreground ${font.cls}`}>
      {BODY}
    </p>

    {/* Bullets */}
    <ul className={`mt-8 space-y-2 text-[15px] ${font.cls}`}>
      {BULLETS.map((b) => (
        <li key={b} className="flex gap-3">
          <span className="font-mono text-[11px] text-muted-foreground pt-1.5">—</span>
          <span>{b}</span>
        </li>
      ))}
    </ul>

    {/* Numerals */}
    <div className="mt-10 pt-6 border-t border-soft">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-3">Numerals</div>
      <div className={`text-[22px] leading-tight ${font.cls}`}>1234567890</div>
      <div className={`text-[22px] leading-tight mt-1 ${font.cls}`}>๑๒๓๔๕๖๗๘๙๐</div>
      <div className={`text-[15px] mt-3 text-muted-foreground ${font.cls}`}>
        ก ข ค ง จ ฉ ช ซ ญ ฎ ฐ ฒ ณ ฯ ๆ — ไทย/อังกฤษ ABC abc
      </div>
    </div>

    {/* CTA */}
    <button
      type="button"
      className={`mt-10 inline-flex items-center gap-3 border border-foreground px-6 py-3 text-[13px] uppercase tracking-[0.16em] font-mono hover:bg-foreground hover:text-background transition-colors`}
    >
      เลือก {font.name}
      <span aria-hidden>→</span>
    </button>
  </div>
);

const TypeThai = () => (
  <div>
    <SEO
      title="Thai Type Test — ØRIONS"
      description="A/B comparison of Sarabun, Taviraj, and Bai Jamjuree paired with Cormorant Garamond and Inter."
      path="/type-thai"
      noindex
    />

    {/* HERO */}
    <section className="px-6 md:px-10">
      <div className="max-w-[1480px] mx-auto pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Internal · Thai Type Test
        </div>
        <h1 className="mt-6 font-serif text-[52px] md:text-[88px] leading-[1.0] tracking-[-0.03em] max-w-[18ch]">
          เลือกฟอนต์ไทย <em className="italic">ที่ใช่</em> สำหรับ ØRIONS.
        </h1>
        <p className="mt-8 font-serif italic text-[18px] md:text-[22px] text-muted-foreground max-w-[640px] leading-[1.5]">
          เทียบสามตัวเลือกบน layout จริง — สังเกตน้ำหนัก, x-height, ระยะห่างบรรทัด, และวิธีที่มันคู่กับ Cormorant Garamond กับ Inter
        </p>
      </div>
    </section>

    {/* THREE COLUMNS */}
    <section className="border-t border-foreground">
      <div className="max-w-[1480px] mx-auto grid grid-cols-1 md:grid-cols-3">
        {FONTS.map((f) => (
          <Column key={f.key} font={f} />
        ))}
      </div>
    </section>

    {/* SUMMARY TABLE */}
    <section className="px-6 md:px-10 border-t border-foreground">
      <div className="max-w-[1480px] mx-auto py-20 md:py-28">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-10">
          Summary
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground border border-foreground">
          {FONTS.map((f) => (
            <div key={f.key} className="bg-background p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Character</div>
              <div className={`mt-2 text-[28px] leading-tight ${f.cls}`}>{f.name} · ไทยอังกฤษ Aa</div>

              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-6">Feel</div>
              <p className={`mt-2 text-[15px] leading-[1.6] ${f.cls}`}>{f.feel}</p>

              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-6">Best for</div>
              <p className={`mt-2 text-[15px] leading-[1.6] ${f.cls}`}>{f.best}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 font-serif italic text-[18px] text-muted-foreground max-w-[640px]">
          เลือกตัวที่ใช่แล้วบอกได้เลย — จะเปลี่ยน font ไทยของไซต์ทั้งหมดให้ในขั้นถัดไป
        </p>
      </div>
    </section>
  </div>
);

export default TypeThai;