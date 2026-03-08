import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const servicesFaqs = [
  {
    q: { en: "What's included in a retainer plan?", th: "Retainer plan รวมอะไรบ้าง?" },
    a: { en: "Every retainer includes a dedicated creative lead, content calendar, performance reports, and direct communication channel. The scope scales with each tier — from 8 social posts/month (Signal) to full-service production with paid ads management (Constellation).", th: "ทุก retainer รวม creative lead เฉพาะ, content calendar, performance reports และช่องทางสื่อสารตรง ขอบเขตเพิ่มตามแต่ละ tier — ตั้งแต่ 8 social posts/เดือน (Signal) ไปจนถึง full-service production พร้อม paid ads management (Constellation)" },
  },
  {
    q: { en: "What's the minimum contract length?", th: "ระยะสัญญาขั้นต่ำเท่าไหร่?" },
    a: { en: "Retainer plans require a 3-month minimum commitment. After that, you can continue month-to-month, upgrade, or pause. Project-based work (Navigational Stars) has no ongoing commitment — we scope and price each project individually.", th: "Retainer plan ขั้นต่ำ 3 เดือน หลังจากนั้นต่อรายเดือน, อัปเกรด หรือ pause ได้ งาน project (Navigational Stars) ไม่มีสัญญาต่อเนื่อง — เรากำหนดขอบเขตและราคาแต่ละ project แยกกัน" },
  },
  {
    q: { en: "Can I switch between retainer tiers?", th: "เปลี่ยน tier ระหว่างทางได้ไหม?" },
    a: { en: "Yes. You can upgrade at any time — we'll prorate the difference. Downgrades take effect at the start of the next billing cycle. We'll always recommend the tier that matches your actual needs.", th: "ได้ครับ อัปเกรดได้ทุกเมื่อ — เราคิดส่วนต่างตามจริง ดาวน์เกรดมีผลรอบบิลถัดไป เราจะแนะนำ tier ที่ตรงกับความต้องการจริงของคุณเสมอ" },
  },
  {
    q: { en: "How does the onboarding process work?", th: "กระบวนการ onboarding เป็นยังไง?" },
    a: { en: "Week 1: Discovery call + brand audit. Week 2: Strategy presentation + content calendar. Week 3: First deliverables go live. You'll have a dedicated Slack/LINE channel and bi-weekly (or weekly) strategy calls depending on your plan.", th: "สัปดาห์ 1: Discovery call + brand audit สัปดาห์ 2: นำเสนอ strategy + content calendar สัปดาห์ 3: deliverable ชุดแรกขึ้น live — มี Slack/LINE channel เฉพาะ และ strategy call ทุก 2 สัปดาห์ (หรือรายสัปดาห์) ตามแพลน" },
  },
  {
    q: { en: "What if I need a one-time project, not a retainer?", th: "ถ้าต้องการงาน project ครั้งเดียว ไม่ใช่ retainer?" },
    a: { en: "That's what Navigational Stars are for. Brand identity, campaign development, content production, or digital experience — each scoped and priced as a standalone project. Contact us for a custom quote.", th: "นั่นคือ Navigational Stars — Brand identity, campaign development, content production หรือ digital experience — กำหนดขอบเขตและราคาเป็น project แยก ติดต่อเราเพื่อรับใบเสนอราคา" },
  },
  {
    q: { en: "Do you handle paid advertising?", th: "ดูแล paid ads ให้ด้วยไหม?" },
    a: { en: "Paid ads management (Meta & Google) is included in the Constellation tier. For Signal and Orbit plans, we can add it as an optional add-on. We handle creative, targeting, optimization, and reporting.", th: "Paid ads management (Meta & Google) รวมอยู่ใน Constellation tier สำหรับ Signal และ Orbit เพิ่มเป็น add-on ได้ เราดูแลทั้ง creative, targeting, optimization และ reporting" },
  },
];

const ServicesPage = () => (
  <main className="bg-background min-h-screen">
    <Helmet>
      <title>Services — ØRIONS Creative Agency</title>
      <meta name="description" content="AI-accelerated creative services. Brand strategy, campaigns, content production, social media, SEO, and retainer plans starting at ฿18,000/month." />
      <link rel="canonical" href="https://orions.agency/services" />
    </Helmet>
    <Navbar />
    <div className="pt-[62px]">
      <ServicesSection />
      <FAQSection
        customFaqs={servicesFaqs}
        title={{
          en: <>Pricing &<br />process<br /><span className="text-accent-gradient">FAQ</span></>,
          th: <>คำถาม<br />เรื่องราคา &<br /><span className="text-accent-gradient">กระบวนการ</span></>,
        }}
      />
    </div>
    <Footer />
  </main>
);

export default ServicesPage;