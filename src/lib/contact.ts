import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().trim().min(1, "กรุณากรอกชื่อ").max(100),
  email: z.string().trim().email("อีเมลไม่ถูกต้อง").max(255),
  phone: z.string().trim().min(8, "กรุณากรอกเบอร์ติดต่อ").max(20),
  company: z.string().trim().max(150),
  brief: z.string().trim().max(2000),
});

export type Inquiry = z.infer<typeof inquirySchema>;
