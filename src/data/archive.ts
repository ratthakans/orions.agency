/** The Archive — twelve short pieces, three per layer of the blueprint, each
 *  with a Pexels photograph chosen for what it says.
 *
 *  Voice: observational, precise, human, unexpected. No buzzwords. Any client
 *  named here is quoted only from what src/data/caseStudies.ts already records;
 *  nothing about a client is added in an essay that the case file does not say.
 *
 *  Pieces are numbered, not dated: they are published together, and a
 *  backdated byline would claim a history the archive does not have.
 *
 *  Body format: one string per paragraph. A paragraph that starts with "> "
 *  renders as a pull line. */

import type { PictureData } from "@/components/Picture";
import photo01 from "@/assets/archive/01.jpg?as=picture";
import photo02 from "@/assets/archive/02.jpg?as=picture";
import photo03 from "@/assets/archive/03.jpg?as=picture";
import photo04 from "@/assets/archive/04.jpg?as=picture";
import photo05 from "@/assets/archive/05.jpg?as=picture";
import photo06 from "@/assets/archive/06.jpg?as=picture";
import photo07 from "@/assets/archive/07.jpg?as=picture";
import photo08 from "@/assets/archive/08.jpg?as=picture";
import photo09 from "@/assets/archive/09.jpg?as=picture";
import photo10 from "@/assets/archive/10.jpg?as=picture";
import photo11 from "@/assets/archive/11.jpg?as=picture";
import photo12 from "@/assets/archive/12.jpg?as=picture";

export type ArchiveTheme = "Point of View" | "Brand Idea" | "Method" | "Signature Approaches";

export type ArchivePiece = {
  slug: string;
  n: string;
  theme: ArchiveTheme;
  title: string;
  dek: string;
  /** A Pexels photograph (free to use under the Pexels licence), saved in
   *  src/assets/archive and credited to its photographer with a link back. */
  image: PictureData;
  credit: string;
  source: string;
  /** object-position for the 3:2 and 4:3 crops */
  focus: string;
  body: string[];
};

export const archive: ArchivePiece[] = [
  {
    slug: "more-isnt-the-answer",
    n: "01",
    theme: "Point of View",
    title: "More isn't the answer.",
    dek: "ทำไมแบรนด์ที่พูดเยอะที่สุด มักถูกจำได้น้อยที่สุด",
    image: photo01,
    credit: "Photo by Kyle Miller on Pexels",
    source: "https://www.pexels.com/photo/18335917/",
    focus: "center",
    body: [
      "ลองนึกถึงแบรนด์ที่คุณจำได้จริง ๆ สักสามแบรนด์ แล้วถามตัวเองว่าจำได้เพราะอะไร แทบไม่มีใครตอบว่า เพราะเขาโพสต์ทุกวัน",
      "ความถี่เคยเป็นข้อได้เปรียบ ในวันที่พื้นที่ยังมีน้อยและการพูดยังมีต้นทุนสูง แต่วันนี้ทุกแบรนด์ผลิต content ได้แทบไม่จำกัด เมื่อทุกคนพูดได้เท่ากัน การพูดมากขึ้นจึงไม่ได้ทำให้ถูกได้ยินมากขึ้น มันแค่ทำให้เสียงของเรากลืนไปกับเสียงรอบข้างเร็วขึ้น",
      "ปัญหาของคำว่ามากขึ้นคือ มันไม่เคยบอกว่าอะไรสำคัญ ทุกชิ้นมีน้ำหนักเท่ากัน ทุกข้อความแข่งกันเอง คนดูต้องเป็นฝ่ายคัดเลือกเอง และส่วนใหญ่เลือกที่จะไม่จำอะไรเลย",
      "> More = Better เป็นสมการที่ง่าย เพราะมันวัดได้ง่าย",
      "จำนวนโพสต์ จำนวน reach จำนวนแคมเปญ ล้วนนับได้ แต่สิ่งที่แบรนด์ต้องการจริง ๆ คือการถูกเข้าใจ ซึ่งนับยากกว่ามาก และเพราะมันนับยาก มันจึงถูกลืมในห้องประชุมบ่อยกว่าที่ควร",
      "ในงานการเมืองที่เราทำ กรอบกฎหมายบีบทุกประโยคจนพูดได้น้อยลงอย่างเห็นได้ชัด ทางออกไม่ใช่การหาช่องให้พูดได้มากเท่าเดิม แต่คือทำให้ประโยคที่เหลืออยู่คมพอจะทำงานแทนประโยคที่หายไป ข้อจำกัดครั้งนั้นสอนสิ่งที่ใช้ได้กับทุกแบรนด์",
      "เราไม่ได้บอกว่าแบรนด์ควรเงียบ แต่ทุกอย่างที่แบรนด์พูดควรมีเหตุผลที่จะมีอยู่ ถ้าตัดชิ้นไหนออกแล้วไม่มีใครรู้สึกว่าขาด ชิ้นนั้นไม่ได้ช่วยเรื่องของแบรนด์ มันแค่เติมพื้นที่",
      "> More isn't the answer. Better is.",
    ],
  },
  {
    slug: "the-cost-of-one-more-post",
    n: "02",
    theme: "Point of View",
    title: "The cost of one more post",
    dek: "content ที่ไม่มีเหตุผลรองรับ ค่อย ๆ กัดกร่อนตัวตนของแบรนด์อย่างเงียบ ๆ",
    image: photo02,
    credit: "Photo by Leon on Pexels",
    source: "https://www.pexels.com/photo/2341258/",
    focus: "center",
    body: [
      "ไม่มีโพสต์ไหนทำลายแบรนด์ได้ในครั้งเดียว นั่นคือเหตุผลที่มันอันตราย",
      "ชิ้นงานที่ทำเพราะถึงรอบต้องลง มีต้นทุนที่ไม่เคยปรากฏในใบเสนอราคา และต้นทุนนั้นจ่ายเป็นงวด ๆ จนไม่มีใครสังเกต",
      "งวดแรกคือความสนใจของคนดู ทุกครั้งที่แบรนด์พูดเรื่องที่ไม่จำเป็น คนดูเรียนรู้ว่าไม่ต้องตั้งใจฟังแบรนด์นี้ก็ได้ พอถึงวันที่มีเรื่องสำคัญจริง ๆ เขาก็เลื่อนผ่านไปแล้ว",
      "งวดที่สองคือตัวตน แต่ละชิ้นถูกทำโดยคนละคน คนละวัน คนละอารมณ์ ถ้าไม่มีจุดยืนร่วมกันคอยกำกับ ผลรวมของมันจะค่อย ๆ วาดภาพแบรนด์ที่ไม่มีใครตั้งใจให้เป็น",
      "งวดที่สามคือทีม เวลาที่ใช้ผลิตชิ้นที่ไม่จำเป็น คือเวลาที่ไม่ได้ใช้คิดชิ้นที่จำเป็น",
      "> ก่อนจะถามว่าจะลงอะไร ควรถามว่าทำไมต้องลง",
      "คำถามนี้ไม่ได้ทำให้งานช้าลง มันทำให้ปฏิทิน content สั้นลง และทุกชิ้นที่เหลืออยู่มีงานของมันเอง",
      "Nothing exists without intention. สำหรับเรา ประโยคนี้ไม่ใช่คำขวัญ มันคือเกณฑ์ในการตัดออก",
    ],
  },
  {
    slug: "refinement-is-not-polish",
    n: "03",
    theme: "Point of View",
    title: "Refinement is not polish.",
    dek: "ทำให้สวย กับทำให้คม ต่างกันตรงไหน",
    image: photo03,
    credit: "Photo by Tima Miroshnichenko on Pexels",
    source: "https://www.pexels.com/photo/6713852/",
    focus: "center",
    body: [
      "เวลาคนได้ยินคำว่า refine มักนึกถึงขั้นตอนสุดท้ายก่อนส่งงาน ปรับสีอีกนิด เกลาคำอีกหน่อย ขยับระยะให้ลงตัว",
      "นั่นคือ polish และ polish มีค่า แต่มันทำงานกับผิวของงาน ส่วน refine ทำงานกับแก่นของมัน",
      "งานที่ polish มาอย่างดีแต่ไม่ได้ refine จะสวยและลื่นไหล แต่ถ้าถามว่ามันพูดอะไร คำตอบจะยาวและไม่แน่ใจ งานที่ refine แล้วอาจยังไม่สวยที่สุดในวันแรก แต่ตอบได้ในประโยคเดียวว่ามันมีอยู่เพื่ออะไร",
      "Refine คือการตัดสินใจซ้ำ ๆ ว่าอะไรไม่ต้องมี ทุกครั้งที่ตัดบางอย่างออก สิ่งที่เหลือจะมีน้ำหนักมากขึ้น",
      "ตอนทำงานให้ HONG MOVE บริการแท็กซี่ VIP EV ในสนามบิน ผู้โดยสารไม่ได้พูดภาษาเดียวกัน เราทำงานสื่อสารสี่ภาษา แต่สิ่งที่ต้องออกแบบจริง ๆ ไม่ใช่ปริมาณสื่อ คือความเร็วในการเข้าใจ สารจึงถูก refine ให้สั้น คม และข้ามกำแพงภาษาได้",
      "ความแม่นยำแบบนี้มองไม่เห็นในงานที่เสร็จแล้ว คนเห็นแค่ว่ามันง่าย ไม่มีใครเห็นร้อยทางเลือกที่ถูกตัดทิ้งไป",
      "> Refinement is not polish. It is precision.",
    ],
  },
  {
    slug: "a-story-is-what-people-understand",
    n: "04",
    theme: "Brand Idea",
    title: "A story is what people come to understand",
    dek: "เรื่องของแบรนด์ไม่ได้อยู่ใน tagline",
    image: photo04,
    credit: "Photo by Ketut Subiyanto on Pexels",
    source: "https://www.pexels.com/photo/5054673/",
    focus: "center",
    body: [
      "แบรนด์ส่วนใหญ่คิดว่าเรื่องของตัวเองคือสิ่งที่เขียนไว้ใน brand book ย่อหน้าที่ถูกแก้มาสิบรอบ tagline ที่ผ่านการโหวต",
      "แต่เรื่องที่คนจำได้ไม่ใช่สิ่งที่แบรนด์พูด มันคือสิ่งที่คนสรุปได้เอง หลังจากเจอแบรนด์หลายครั้งในหลายที่",
      "เหมือนที่เรารู้จักใครสักคน ไม่ใช่จากที่เขาบอกว่าตัวเองเป็นคนแบบไหน แต่จากสิ่งที่เขาทำซ้ำ ๆ วิธีที่เขาตอบเมื่อถูกถาม และความรู้สึกที่เหลืออยู่หลังจากคุยกัน",
      "เราจึงมองเรื่องของแบรนด์ผ่านสี่ชั้น Story คือมันหมายถึงอะไร Behavior คือมันทำตัวอย่างไร Aesthetic คือมันมีรูปร่างแบบไหน และ Experience คือมันถูกจดจำอย่างไร",
      "ถ้าชั้นใดชั้นหนึ่งพูดคนละเรื่องกับที่เหลือ คนจะเชื่อชั้นที่เขาสัมผัสได้จริง มากกว่าชั้นที่ถูกเขียนไว้เสมอ",
      "> A story is not what a brand says. It is what people come to understand.",
      "งานของเราจึงไม่ได้จบที่การเขียนเรื่องให้ดี แต่อยู่ที่การทำให้ทุกชั้นพาคนไปสู่ความเข้าใจเดียวกัน เรื่องที่ดีไม่ควรถูกแค่เล่า มันควรถูกสัมผัส",
    ],
  },
  {
    slug: "behavior-is-the-brand",
    n: "05",
    theme: "Brand Idea",
    title: "Behavior is the brand",
    dek: "สิ่งที่แบรนด์ทำ ดังกว่าสิ่งที่แบรนด์พูด",
    image: photo05,
    credit: "Photo by Kampus Production on Pexels",
    source: "https://www.pexels.com/photo/6684768/",
    focus: "center",
    body: [
      "โฆษณาบอกว่าใส่ใจลูกค้า แต่สายด่วนให้รอยี่สิบนาที คนจะเชื่ออย่างไหน",
      "Behavior คือส่วนของแบรนด์ที่แทบไม่มีใครออกแบบอย่างตั้งใจ นโยบายคืนสินค้า น้ำเสียงในการตอบ comment ความเร็วในการแก้ปัญหา สิ่งเหล่านี้มักถูกตัดสินโดยฝ่ายปฏิบัติการ ไม่ใช่ทีมแบรนด์ แต่คนดูไม่ได้แยกว่าใครเป็นคนตัดสิน เขาเห็นแค่ว่าแบรนด์นี้ทำตัวแบบนี้",
      "HEAVY ORGANIZER อยากให้คนที่มางานรู้ว่าเทศกาลดนตรีนี้เป็นงานสีเขียว คาร์บอนต่ำ วิธีที่ตรงที่สุดคือบอก แต่สิ่งที่เราเห็นคือ คนร่วมมือตอนรู้สึกเป็นเจ้าของ ไม่ใช่ตอนถูกสั่งสอน ความยั่งยืนจึงต้องกลายเป็นส่วนหนึ่งของความสนุก ไม่ใช่กฎที่ติดไว้หน้างาน",
      "เรื่องของงานครั้งนั้นไม่ได้อยู่ในข้อความใดข้อความหนึ่ง มันอยู่ในสิ่งที่คนทำระหว่างอยู่ในงาน",
      "> Identity should be embedded, not applied.",
      "Behavior ไม่ต้องยิ่งใหญ่ บ่อยครั้งมันคือรายละเอียดเล็ก ๆ ที่ทำซ้ำอย่างสม่ำเสมอ จนคนเริ่มคาดเดาได้ว่าแบรนด์นี้จะทำอย่างไรในสถานการณ์ที่ไม่เคยเห็น และความคาดเดาได้แบบนั้นคือสิ่งที่เราเรียกว่าความเชื่อใจ",
    ],
  },
  {
    slug: "aesthetic-is-a-decision",
    n: "06",
    theme: "Brand Idea",
    title: "Aesthetic is a decision, not a style",
    dek: "รสนิยมคือการเลือก ไม่ใช่การตกแต่ง",
    image: photo06,
    credit: "Photo by H&CO on Pexels",
    source: "https://www.pexels.com/photo/29939683/",
    focus: "center",
    body: [
      "หลายโปรเจกต์เริ่มจากภาพ reference ชุดหนึ่ง พร้อมประโยคว่า อยากได้แบบนี้",
      "สิ่งที่อยู่ในภาพเหล่านั้นคือ style ผลลัพธ์ที่มองเห็นได้ ส่วน aesthetic คือเหตุผลที่อยู่ข้างหลังมัน ทำไมสีนี้ ทำไมพื้นที่ว่างเท่านี้ ทำไมตัวอักษรหนักแค่นี้",
      "Style ลอกได้ในหนึ่งสัปดาห์ Aesthetic ลอกไม่ได้ เพราะมันไม่ได้มาจากการตัดสินใจครั้งเดียว มันมาจากการตัดสินใจหลายร้อยครั้งที่มีเหตุผลเดียวกันรองรับ",
      "ในวันที่ใครก็สร้างภาพสวยได้ในไม่กี่วินาที ความสวยไม่ได้หายากอีกต่อไป สิ่งที่หายากคือความสวยที่มีเหตุผล ความสวยที่ถ้าเปลี่ยนไปเป็นอย่างอื่น แบรนด์จะเสียบางอย่างไปจริง ๆ",
      "คำถามที่เราใช้ทดสอบคือ ถ้าเปลี่ยนสิ่งนี้เป็นอย่างอื่น แบรนด์จะเสียอะไรไป ถ้าตอบไม่ได้ สิ่งนั้นคือการตกแต่ง และการตกแต่งคือสิ่งแรกที่ควรถูกตัดออก",
      "> Aesthetic is what form a story takes.",
    ],
  },
  {
    slug: "see-what-others-overlook",
    n: "07",
    theme: "Method",
    title: "See what others overlook",
    dek: "งานเริ่มก่อน brief จะมาถึง",
    image: photo07,
    credit: "Photo by Pixabay on Pexels",
    source: "https://www.pexels.com/photo/247781/",
    focus: "center",
    body: [
      "Brief ส่วนใหญ่มาพร้อมคำตอบอยู่แล้ว อยากได้แคมเปญ อยากได้เว็บใหม่ อยากได้วิดีโอเปิดตัว",
      "Observe คือขั้นแรกของวิธีทำงานของเรา และเป็นขั้นที่เราถามว่าโจทย์จริงคืออะไร ก่อนจะรีบตอบโจทย์ที่ถูกส่งมา",
      "My Hotel มาหาเราพร้อม brief ว่าอยากได้เว็บและคอนเทนต์เปิดตัวแพลตฟอร์มจองโรงแรม แต่แพลตฟอร์มยังไม่มีห้องให้ขาย เพราะยังไม่มีโรงแรมไหนเชื่อพอจะเอาห้องมาวาง งานจริงจึงอยู่ฝั่งโรงแรม ไม่ใช่ฝั่งคนจอง",
      "GCOO อยากนำแคมเปญที่เคยได้ผลจากตลาดแม่มาใช้ในไทย โจทย์ดูเหมือนเรื่องการแปลภาษา แต่สิ่งที่ขาดจริง ๆ คือความเชื่อใจในของที่คนไทยยังไม่เคยใช้",
      "ทั้งสองครั้ง สิ่งที่คนอื่นมองข้ามไม่ได้ซ่อนอยู่ มันอยู่ตรงหน้า แต่ทุกคนเคยชินกับมันจนไม่เห็น",
      "> See what others overlook.",
      "การสังเกตไม่ใช่การรีเสิร์ชให้หนาขึ้น มันคือการยอมช้าลงนิดหนึ่งตอนเริ่ม เพื่อไม่ต้องย้อนกลับมาแก้ตอนจบ",
    ],
  },
  {
    slug: "a-different-reason-to-care",
    n: "08",
    theme: "Method",
    title: "Same product, a different reason to care",
    dek: "บางครั้งไม่ต้องเปลี่ยนสินค้า แค่เปลี่ยนกรอบที่ใช้มองมัน",
    image: photo08,
    credit: "Photo by Bob Jenkin on Pexels",
    source: "https://www.pexels.com/photo/39589737/",
    focus: "center",
    body: [
      "เมื่อยอดขายไม่ขยับ ปฏิกิริยาแรกมักเป็นการแก้ตัวสินค้า เปลี่ยนแพ็กเกจ เพิ่มฟีเจอร์ ลดราคา",
      "บางครั้งตัวสินค้าไม่ได้มีปัญหา ปัญหาคือเรายังมองมันผ่านกรอบเดิม และกรอบเดิมนั้นมีความหมายกับคนกลุ่มเดิมเท่านั้น",
      "Khao Yai Country Club อยากรีแบรนด์ให้ดูใหม่และเข้าถึงลูกค้ากลุ่มไลฟ์สไตล์มากขึ้น สิ่งที่เราพบก่อนจะไปถึงเรื่องภาพคือ ตราบใดที่คนในสนามยังถือ positioning กันคนละแบบ สื่อสารอะไรออกไปก็ขัดกันเอง งานแรกจึงเป็นการหา positioning ที่ทุกฝ่ายยอมรับร่วมกัน แล้วค่อยขยับภาพจำทีละขั้น โดยไม่ทำให้คนที่รักของเดิมหายไป",
      "Reframe ไม่ใช่การทำให้ของเดิมดูใหม่เพื่อหลอกตา มันคือการหา context ที่ของเดิมมีความหมาย กับคนอีกกลุ่ม ในอีกช่วงเวลา ด้วยอีกเหตุผลหนึ่ง",
      "> Find another way forward.",
      "เป้าหมายไม่ใช่แค่การหากลุ่มเป้าหมายใหม่ แต่คือการหาเหตุผลใหม่ที่ทำให้คนสนใจ",
    ],
  },
  {
    slug: "turning-meaning-into-form",
    n: "09",
    theme: "Method",
    title: "Turning meaning into form",
    dek: "จากความหมาย ไปเป็นภาพ คำ และประสบการณ์",
    image: photo09,
    credit: "Photo by Greta Hoffman on Pexels",
    source: "https://www.pexels.com/photo/7858845/",
    focus: "center",
    body: [
      "ทุกโปรเจกต์มีช่วงหนึ่งที่ทุกคนเห็นด้วยกับไอเดีย แต่ยังไม่มีใครเห็นมันจริง ๆ",
      "Shape คือการแปลความหมายที่ยังเป็นนามธรรม ให้กลายเป็นสิ่งที่จับต้องได้ คำไหน สีอะไร จังหวะแบบไหน ภาพควรเงียบหรือควรดัง",
      "ความผิดพลาดที่พบบ่อยคือการกระโดดจาก strategy ไปที่ execution โดยข้ามขั้นนี้ ผลคืองานที่สวยแต่ไม่ได้พูดสิ่งที่ strategy ตั้งใจ หรือ strategy ที่ถูกต้องแต่ไม่มีใครอยากมอง",
      "Movement Party เป็นพรรคใหม่ที่ต้องเปิดตัวในเวลาจำกัด คำถามแรกที่ทุกคนถามคือ จะทำให้คนรู้จักเร็วที่สุดได้อย่างไร แต่คำถามที่สำคัญกว่าคือ จะถูกจำในฐานะอะไร เมื่อจุดยืนชัดแล้ว การเลือกคำ ภาพ และลำดับของสารก็มีเกณฑ์ให้ตัดสิน",
      "ทุกการตัดสินใจเรื่องรูปแบบควรตอบได้ว่า มันรับใช้ความหมายข้อไหน ถ้าตอบไม่ได้ มันคือความชอบส่วนตัวของใครสักคน",
      "> Turn meaning into form.",
    ],
  },
  {
    slug: "what-havent-we-seen-yet",
    n: "10",
    theme: "Signature Approaches",
    title: "What haven't we seen yet?",
    dek: "Creative Unlock — การหา S-curve ใหม่ เริ่มจากสิ่งที่แบรนด์มีอยู่แล้ว",
    image: photo10,
    credit: "Photo by Buğra on Pexels",
    source: "https://www.pexels.com/photo/14350482/",
    focus: "center",
    body: [
      "เมื่อ growth เริ่มชะลอ คำตอบแรกมักคือทำเพิ่ม เพิ่มงบ เพิ่มช่องทาง เพิ่มแคมเปญ",
      "Creative Unlock เริ่มจากคำถามอีกแบบ อะไรที่เรายังไม่เคยเห็น ทั้งที่มันอยู่ในมือแบรนด์มาตลอด",
      "แบรนด์ที่อยู่มาระยะหนึ่งมักมีทรัพย์สินที่ยังไม่ได้ใช้ ความเชื่อใจที่สะสมไว้ ความสามารถที่ใช้แค่ครึ่งเดียว ความหมายทางวัฒนธรรมที่ยังไม่มีใครหยิบขึ้นมา สิ่งเหล่านี้อาจกลายเป็นสินค้าใหม่ บริการใหม่ กลุ่มคนใหม่ หรือหมวดใหม่ทั้งหมด",
      "สิ่งที่แยก Creative Unlock ออกจาก innovation เพื่อให้ดูใหม่ คือเหตุผล ทุก S-curve ใหม่ต้องตอบได้ว่า ทำไมต้องเป็นแบรนด์นี้ ถ้าคู่แข่งทำสิ่งเดียวกันได้ดีเท่ากัน มันไม่ใช่การเติบโตของแบรนด์ มันคือการเข้าไปแข่งในสนามของคนอื่น",
      "มันจึงไม่ใช่ service เดียว เราหยิบสิ่งที่โจทย์ต้องการจาก Brand & Strategy, Creative & Communication และ Brand Experience มาประกอบเข้าด้วยกัน บางโจทย์เริ่มที่ positioning บางโจทย์เริ่มที่ประสบการณ์หน้างาน",
      "> Creative Unlock = Possibility",
    ],
  },
  {
    slug: "embedded-not-applied",
    n: "11",
    theme: "Signature Approaches",
    title: "Identity should be embedded, not applied",
    dek: "Stories Embed — ตัวตนที่แท้จริงไม่ได้อยู่ใน logo",
    image: photo11,
    credit: "Photo by K on Pexels",
    source: "https://www.pexels.com/photo/3794748/",
    focus: "center",
    body: [
      "มีแบรนด์จำนวนมากที่ผ่าน brand guideline ครบทุกข้อ logo ถูกที่ สีถูกค่า ฟอนต์ถูกน้ำหนัก แต่พอเอาทุกจุดสัมผัสมาวางเรียงกัน กลับไม่รู้สึกว่าเป็นแบรนด์เดียวกัน",
      "นั่นคือตัวตนแบบ applied แปะไว้ด้านนอก ถูกต้องทุกจุด แต่ไม่ได้อยู่ข้างใน",
      "ตัวตนแบบ embedded อยู่ในการตัดสินใจ วิธีเขียนข้อความเวลาระบบขัดข้อง วิธีที่พนักงานพูดเมื่อไม่มีคำตอบ จังหวะของเว็บเมื่อคนกำลังรีบ ไม่มีจุดไหนที่ logo ช่วยได้",
      "Royal Thai Air Force ต้องสื่อสารในภาวะตึงเครียด และอยากตอบโต้ข่าวปลอมให้เร็วและหนักแน่น แต่ยิ่งตอบแรง ยิ่งขยายข่าวปลอม งานจริงจึงเป็นการวางระบบให้พูดได้ทันโดยไม่หลุดเส้น ตัวตนของการสื่อสารครั้งนั้นไม่ได้อยู่ในหน้าตาของคอนเทนต์ มันอยู่ในวิธีตอบ",
      "Stories Embed ใช้กับแบรนด์ที่มีทิศทางแล้ว แต่ product, channel, communication และ experience ยังไม่รู้สึกเป็นเรื่องเดียวกัน เรานำ strategy, narrative, identity, creative, digital, behavior และ experience มาคราฟต์ให้ทุกจุดสัมผัสมี DNA เดียวกัน",
      "> Stories Embed = Coherence",
    ],
  },
  {
    slug: "one-story-many-expressions",
    n: "12",
    theme: "Signature Approaches",
    title: "One story. Many expressions.",
    dek: "ความสม่ำเสมอ ไม่ได้แปลว่าทุกอย่างต้องเหมือนกัน",
    image: photo12,
    credit: "Photo by Lars Mai on Pexels",
    source: "https://www.pexels.com/photo/5583574/",
    focus: "center",
    body: [
      "Brand consistency มักถูกเข้าใจว่าเป็นการทำให้ทุกอย่างหน้าตาเหมือนกัน template เดียวกัน โทนเดียวกัน ประโยคปิดเดียวกัน",
      "แต่คนคนหนึ่งพูดกับเพื่อนไม่เหมือนพูดในที่ประชุม เขียนข้อความถึงแม่ไม่เหมือนเขียนอีเมลงาน แล้วเราก็ยังรู้ว่าเป็นคนเดิม สิ่งที่คงที่ไม่ใช่รูปแบบ มันคือมุมมอง",
      "แบรนด์ก็เหมือนกัน ป้ายหน้าร้านไม่จำเป็นต้องพูดแบบเดียวกับโพสต์ ประสบการณ์ในแอปไม่จำเป็นต้องหน้าตาเหมือนงานเปิดตัว ทุกจุดสัมผัสไม่ต้องเหมือนกัน แต่ต้องมองโลกจากจุดเดียวกัน",
      "ความเหมือนเกินไปมีต้นทุนของมันเอง มันทำให้แบรนด์แข็งและคาดเดาได้ในทางที่น่าเบื่อ ส่วนความต่างที่ไม่มีแก่นร่วมทำให้แบรนด์แตกเป็นเสี่ยง ๆ งานยากอยู่ตรงกลาง คือการรู้ว่าอะไรต้องคงไว้ และอะไรควรได้รับอิสระ",
      "> One story. Many expressions.",
      "นี่คือสิ่งที่เราสัญญากับทุกแบรนด์ที่ทำงานด้วย First, we find what matters. Then, we make it matter everywhere.",
    ],
  },
];

export const archiveThemes: ArchiveTheme[] = ["Point of View", "Brand Idea", "Method", "Signature Approaches"];

export const getPiece = (slug: string) => archive.find((p) => p.slug === slug);

export const getAdjacentPieces = (slug: string) => {
  const i = archive.findIndex((p) => p.slug === slug);
  return { prev: i > 0 ? archive[i - 1] : null, next: i < archive.length - 1 ? archive[i + 1] : null };
};
