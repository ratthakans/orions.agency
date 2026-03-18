
เป้าหมายตามที่คุณเลือก: เน้น 4 เรื่องพร้อมกัน คือ ติดอันดับ Google, Local SEO, Rich Results, และ Lead Conversion

สถานะปัจจุบันที่ตรวจแล้ว
- มีพื้นฐาน SEO ดีอยู่แล้ว: `Helmet` ทุกหน้า, canonical, `robots.txt`, `sitemap.xml`, JSON-LD ระดับ global ใน `index.html`
- แต่ยังมีช่องว่างสำคัญที่ทำให้โตต่อยาก:
  1. metadata รายหน้ายังสั้นและซ้ำกันพอสมควร
  2. ไม่มี Open Graph / Twitter metadata รายหน้า
  3. internal linking ยังอ่อน โดยเฉพาะ industries และ service-to-work/contact flow
  4. sitemap ไม่ตรงกับ route จริงบางส่วน (`/careers` vs route จริง `/career`) และยังไม่ครบบางหน้า
  5. หน้าสำคัญยังไม่มี structured data แบบ page-specific เช่น `Service`, `BreadcrumbList`
  6. งานในหน้า Work เปิดเป็น modal ทำให้ case study แต่ละชิ้นไม่มี URL ให้ Google index
  7. หน้า 404 ยังไม่มี `noindex`

แผนปรับ SEO ที่แนะนำ

1) แก้ technical SEO ให้ “ถูกต้องก่อน”
- สร้าง SEO component กลาง เช่น `SEO.tsx` เพื่อรวม:
  - title
  - meta description
  - canonical
  - og:title / og:description / og:url / og:image
  - twitter tags
  - optional `noindex`
  - optional JSON-LD per page
- ใช้แทน `Helmet` ตรงๆ ทุกหน้า เพื่อให้ metadata สม่ำเสมอและดูแลง่าย
- แก้ `sitemap.xml` ให้ตรง route จริง:
  - `/career` แทน `/careers`
  - เพิ่ม `/studio`
  - ตัด URL ที่ไม่มี route จริง หรือเพิ่ม route ให้ตรง sitemap
- เพิ่ม `noindex` ใน `NotFound.tsx`

2) ทำ page-level SEO ให้แต่ละหน้ามี keyword intent ชัดขึ้น
- Home: โฟกัส “creative agency Bangkok”, “branding / campaign / production house Thailand”
- About: ใส่ positioning, team, Bangkok/Thailand context
- Services: แยก intent ว่า agency ทำอะไรบ้าง + pricing/packages
- Work: เน้น portfolio/case studies/creative production
- Contact: เน้น “creative agency Bangkok contact / start a project”
- Career: เน้น recruitment intent
- Studio: เน้น original content / production capability
- ปรับ title + description ของทุกหน้าให้เฉพาะเจาะจงมากขึ้นและมีคำค้นเชิง location/intent
- ปรับ H1/H2 บางหน้าให้รองรับคำค้นมากขึ้นโดยไม่เสีย mood เดิม

3) เพิ่ม Rich Results / structured data แบบ page-specific
- Services page:
  - เพิ่ม `Service` / `OfferCatalog` schema จากแพ็กเกจที่มีอยู่แล้ว
- Contact page:
  - เสริม `ProfessionalService` หรือ `LocalBusiness` ระดับหน้าติดต่อให้ผูกกับ address/phone/opening hours
- About / Work / Services:
  - เพิ่ม `BreadcrumbList`
- Career page:
  - ถ้าต้องการจริงจังเรื่อง SEO งาน สามารถเพิ่ม `JobPosting` schema ต่อแต่ละตำแหน่งได้
- Home/Services:
  - เพิ่ม FAQ section แบบ crawlable บนหน้า แล้ว sync กับ `FAQPage` schema แทนการมีเฉพาะ JSON-LD อย่างเดียว

4) เสริม Local SEO ให้แรงขึ้น
- เพิ่ม copy ที่บอก location ชัดขึ้นในหลายหน้า:
  - Bangkok, Thailand, Southeast Asia
  - “creative agency in Bangkok”
  - “film production / campaign / branding for Thai and regional brands”
- ทำหน้า Contact ให้มี local trust signal มากขึ้น:
  - address แบบครบ
  - business hours
  - service areas
  - map link / directions link
- ทำ footer และบาง CTA ให้ reinforce location + service coverage

5) แก้ internal linking เพื่อช่วยทั้ง ranking และ conversion
- ทำ industries chips ใน `ServicesPage` ให้คลิกไปหน้า industries จริง หรือสร้าง section/route ที่ใช้ได้จริง
- เพิ่ม link จาก:
  - Home → Services / Work / Contact
  - Services → filtered Work + Contact
  - Work → Contact / specific service
  - About → Contact
  - Career → Contact/About
- เพิ่ม link ไปหน้า `Industries` ใน navbar หรือ footer ถ้าจะใช้หน้านี้จริง
- ทำ anchor/CTA copy ให้ descriptive มากขึ้น ไม่ใช่ generic อย่างเดียว

6) ยกระดับ content SEO ที่มีผลจริงกับอันดับ
- เพิ่ม section ที่ตอบ search intent มากขึ้นใน Services:
  - process
  - who it’s for
  - deliverables
  - timeline
  - budget / pricing expectations
  - FAQs
- เพิ่มข้อความเชิง proof ใน Work:
  - industry
  - business challenge
  - what was delivered
  - outcome/result (ถ้ามี)
- ถ้าพร้อมลงทุนเพิ่มในอนาคต: แยก work modal เป็นหน้า detail ต่อโปรเจกต์ (`/work/northwind-electric`) จะดีกับ SEO มากที่สุด

ลำดับลงมือที่คุ้มที่สุด
Phase 1: technical correctness
- SEO component กลาง
- แก้ sitemap / canonical / noindex 404
- เพิ่ม page-level OG/Twitter metadata

Phase 2: ranking + rich results
- ปรับ title/description/H1 รายหน้า
- เพิ่ม BreadcrumbList
- เพิ่ม Service/Offer schema
- เพิ่ม FAQ section ที่เป็นเนื้อหาจริง

Phase 3: local + conversion
- เพิ่ม local copy, trust signals, internal links
- ปรับ CTA และ link architecture

Phase 4: biggest SEO win ระยะกลาง
- เปลี่ยน Work จาก modal เป็น indexable case study pages

ไฟล์ที่จะเกี่ยว
- `index.html`
- `public/sitemap.xml`
- `src/pages/Index.tsx`
- `src/pages/AboutPage.tsx`
- `src/pages/ServicesPage.tsx`
- `src/pages/WorkPage.tsx`
- `src/pages/StudioPage.tsx`
- `src/pages/ContactPage.tsx`
- `src/pages/CareerPage.tsx`
- `src/pages/NotFound.tsx`
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- เพิ่มใหม่: shared SEO component เช่น `src/components/SEO.tsx`

ข้อสังเกตสำคัญจากโค้ดตอนนี้
- `sitemap.xml` ยังมี `/careers` แต่ route จริงคือ `/career`
- มี `IndustriesPage.tsx` แต่ใน `App.tsx` ยังไม่มี route และไม่มีลิงก์เข้าใช้งานจริง
- Open Graph/Twitter รายหน้าตอนนี้ยังพึ่งของ global ใน `index.html`
- หน้า Work ยังไม่มี URL รายโปรเจกต์ จึงเสียโอกาสด้าน SEO มาก

ถ้าจะเริ่มแบบ “คุ้มสุดก่อน” ผมแนะนำให้ทำ 3 อย่างนี้ก่อน:
1. รวม metadata เป็น SEO component + แก้ sitemap/canonical ให้ถูก
2. เพิ่ม page-specific OG/Twitter + BreadcrumbList + Service schema
3. ปรับ Services / Contact / Home ให้มี keyword + local intent + FAQ ชัดขึ้น

ผลลัพธ์ที่คาดหวัง
- Google เข้าใจแต่ละหน้าชัดขึ้น
- แชร์ลิงก์แล้ว preview สวยขึ้น
- internal authority flow ดีขึ้น
- local intent ดีขึ้นสำหรับคำค้น agency/production/creative ใน Bangkok
- conversion ดีขึ้นเพราะ CTA และโครงสร้างลิงก์ดีขึ้น

ถ้าคุณอนุมัติ implementation ผมจะแนะนำให้ทำแบบ 2 รอบ:
- รอบ 1: technical + metadata + schema + sitemap
- รอบ 2: content SEO + internal linking + FAQ + conversion improvements
