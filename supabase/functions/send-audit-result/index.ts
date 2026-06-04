// Supabase Edge Function — emails a Brand Audit result via Resend.
//
// Deploy:
//   supabase functions deploy send-audit-result --no-verify-jwt
//   supabase secrets set RESEND_API_KEY=re_xxx  AUDIT_FROM="ORIONS <hello@orions.agency>"
//
// Then either:
//   (a) call it from the client after a successful lead insert, or
//   (b) attach a Supabase Database Webhook on brand_audit_leads INSERT → this function.
//
// Body: { name, email, score, tier, weakest?: {name,pct}[] }

import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const FROM = Deno.env.get("AUDIT_FROM") ?? "ORIONS <hello@orions.agency>";
const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  try {
    const { name, email, score, tier, weakest = [] } = await req.json();
    if (!email || typeof score !== "number") {
      return new Response(JSON.stringify({ error: "email and score required" }), { status: 400, headers: cors });
    }

    const gaps = (weakest as { name: string; pct: number }[])
      .map((w) => `<li>${w.name} — <strong>${w.pct}%</strong></li>`)
      .join("");

    const html = `
      <div style="font-family:Georgia,serif;max-width:560px;margin:auto;color:#0E0E0E">
        <p style="font-family:monospace;letter-spacing:.2em;text-transform:uppercase;font-size:11px;color:#EB5939">ØRIONS — Brand Audit</p>
        <h1 style="font-size:28px;margin:8px 0">สวัสดี ${name ?? ""} — คะแนนแบรนด์ของคุณคือ ${score}/100 (${tier})</h1>
        ${gaps ? `<p>จุดที่ควรเริ่มก่อน:</p><ul>${gaps}</ul>` : ""}
        <p>อยากให้เราช่วยมองว่าจะ refine ตรงไหนก่อน? นัดคุยผล 45 นาที ฟรี ไม่มีข้อผูกมัด —
          <a href="https://orions.agency/diagnostic" style="color:#EB5939">orions.agency</a></p>
        <p style="font-family:monospace;font-size:11px;color:#888">Stories, refined. · Bangkok</p>
      </div>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: FROM, to: [email], subject: `Brand Audit — ${score}/100 (${tier})`, html }),
    });

    if (!res.ok) {
      return new Response(JSON.stringify({ error: await res.text() }), { status: 502, headers: cors });
    }
    return new Response(JSON.stringify({ ok: true }), { headers: { ...cors, "Content-Type": "application/json" } });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), { status: 500, headers: cors });
  }
});
