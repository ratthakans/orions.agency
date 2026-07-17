import { describe, expect, it } from "vitest";
import { inquirySchema } from "@/lib/contact";

describe("contact inquiry contract", () => {
  it("accepts the minimum useful lead", () => {
    const result = inquirySchema.safeParse({
      name: "สมชาย",
      email: "hello@example.com",
      phone: "0891234567",
      company: "",
      brief: "",
    });

    expect(result.success).toBe(true);
  });

  it("rejects missing contact details and malformed email", () => {
    const result = inquirySchema.safeParse({
      name: "",
      email: "not-an-email",
      phone: "123",
      company: "",
      brief: "",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.name).toBeDefined();
      expect(result.error.flatten().fieldErrors.email).toBeDefined();
      expect(result.error.flatten().fieldErrors.phone).toBeDefined();
    }
  });
});
