// Edge Function: send-contact-email
// - Receives validated contact form data
// - Stores it in `contact_submissions` (audit log / backup)
// - Sends a notification email to info@futureintelligen.com via Gmail connector
// - Sends a confirmation email to the visitor
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";
const NOTIFY_TO = "info@futureintelligen.com";
const BRAND = "Future Intelligen";

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

function validate(p: unknown): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  if (!p || typeof p !== "object") return { ok: false, error: "Invalid payload" };
  const o = p as Record<string, unknown>;
  const name = String(o.name ?? "").trim();
  const email = String(o.email ?? "").trim();
  const phone = String(o.phone ?? "").trim();
  const service = String(o.service ?? "").trim();
  const message = String(o.message ?? "").trim();
  if (!name || name.length > 120) return { ok: false, error: "Invalid name" };
  if (!/^\S+@\S+\.\S+$/.test(email) || email.length > 200) return { ok: false, error: "Invalid email" };
  if (!phone || phone.length > 40) return { ok: false, error: "Invalid phone" };
  if (!service || service.length > 120) return { ok: false, error: "Invalid service" };
  if (message.length < 10 || message.length > 4000) return { ok: false, error: "Invalid message" };
  return { ok: true, data: { name, email, phone, service, message } };
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function toBase64Url(s: string): string {
  // Convert UTF-8 string to base64url (Gmail raw format)
  const bytes = new TextEncoder().encode(s);
  let binary = "";
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function buildRfc2822(opts: {
  to: string;
  subject: string;
  htmlBody: string;
  replyTo?: string;
}): string {
  // Encode subject as RFC 2047 (UTF-8 base64) so Arabic shows correctly
  const encodedSubject = `=?UTF-8?B?${btoa(unescape(encodeURIComponent(opts.subject)))}?=`;
  const headers = [
    `To: ${opts.to}`,
    `Subject: ${encodedSubject}`,
    "MIME-Version: 1.0",
    'Content-Type: text/html; charset="UTF-8"',
    "Content-Transfer-Encoding: base64",
  ];
  if (opts.replyTo) headers.push(`Reply-To: ${opts.replyTo}`);
  const bodyB64 = btoa(unescape(encodeURIComponent(opts.htmlBody)));
  return [...headers, "", bodyB64].join("\r\n");
}

async function sendGmail(opts: {
  to: string;
  subject: string;
  htmlBody: string;
  replyTo?: string;
}): Promise<void> {
  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  const GOOGLE_MAIL_API_KEY = Deno.env.get("GOOGLE_MAIL_API_KEY");
  if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");
  if (!GOOGLE_MAIL_API_KEY) throw new Error("GOOGLE_MAIL_API_KEY is not configured");

  const raw = toBase64Url(buildRfc2822(opts));
  const res = await fetch(`${GATEWAY_URL}/users/me/messages/send`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": GOOGLE_MAIL_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ raw }),
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Gmail send failed [${res.status}]: ${text}`);
  }
}

function adminEmailHtml(d: ContactPayload, submissionId: string): string {
  const safe = {
    name: escapeHtml(d.name),
    email: escapeHtml(d.email),
    phone: escapeHtml(d.phone),
    service: escapeHtml(d.service),
    message: escapeHtml(d.message).replace(/\n/g, "<br/>"),
    id: escapeHtml(submissionId),
  };
  return `<!doctype html>
<html dir="rtl" lang="ar">
<body style="margin:0;padding:24px;background:#f5f7fb;font-family:Tahoma,Arial,sans-serif;color:#0b1a33">
  <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 6px 24px rgba(0,0,0,0.06)">
    <div style="background:#0b1a33;color:#ffffff;padding:20px 24px">
      <div style="font-size:18px;font-weight:bold">رسالة جديدة من نموذج التواصل</div>
      <div style="font-size:12px;opacity:0.8;margin-top:4px">${BRAND} — futureintelligen.com</div>
    </div>
    <div style="padding:24px">
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <tr><td style="padding:8px 0;color:#6b7280;width:140px">الاسم</td><td style="padding:8px 0;font-weight:bold">${safe.name}</td></tr>
        <tr><td style="padding:8px 0;color:#6b7280">البريد</td><td style="padding:8px 0" dir="ltr">${safe.email}</td></tr>
        <tr><td style="padding:8px 0;color:#6b7280">الجوال</td><td style="padding:8px 0" dir="ltr">${safe.phone}</td></tr>
        <tr><td style="padding:8px 0;color:#6b7280">الخدمة</td><td style="padding:8px 0">${safe.service}</td></tr>
      </table>
      <div style="margin-top:16px;padding:16px;background:#f5f7fb;border-radius:12px">
        <div style="color:#6b7280;font-size:12px;margin-bottom:8px">نص الرسالة</div>
        <div style="font-size:14px;line-height:1.8">${safe.message}</div>
      </div>
      <div style="margin-top:20px;font-size:12px;color:#9ca3af">معرّف الرسالة: ${safe.id}</div>
    </div>
  </div>
</body></html>`;
}

function userConfirmationHtml(d: ContactPayload): string {
  const name = escapeHtml(d.name);
  return `<!doctype html>
<html dir="rtl" lang="ar">
<body style="margin:0;padding:24px;background:#f5f7fb;font-family:Tahoma,Arial,sans-serif;color:#0b1a33">
  <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 6px 24px rgba(0,0,0,0.06)">
    <div style="background:linear-gradient(135deg,#0b1a33,#1e3a8a);color:#ffffff;padding:28px 24px;text-align:center">
      <div style="font-size:22px;font-weight:bold">شكراً لتواصلك مع ${BRAND}</div>
    </div>
    <div style="padding:28px 24px;line-height:1.9;font-size:15px">
      <p>مرحباً ${name}،</p>
      <p>تم استلام رسالتك بنجاح، وسيقوم فريقنا بالرد عليك خلال يوم عمل.</p>
      <p>للاستفسارات يمكنك الرد مباشرة على هذا البريد أو مراسلتنا على
        <a href="mailto:info@futureintelligen.com" style="color:#1e3a8a;font-weight:bold;text-decoration:none" dir="ltr">info@futureintelligen.com</a>.
      </p>
      <p style="margin-top:24px">مع تحيات فريق ${BRAND}</p>
    </div>
    <div style="padding:16px 24px;background:#f5f7fb;font-size:12px;color:#6b7280;text-align:center">
      Future Intelligen — الرياض، المملكة العربية السعودية<br/>
      info@futureintelligen.com · futureintelligen.com
    </div>
  </div>
</body></html>`;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json().catch(() => null);
    const result = validate(body);
    if (!result.ok) {
      return new Response(JSON.stringify({ error: result.error }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const data = result.data;

    // Persist submission (service role bypasses RLS — safe inside edge function)
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    const userAgent = req.headers.get("user-agent") ?? null;
    const { data: inserted, error: insertError } = await supabase
      .from("contact_submissions")
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        message: data.message,
        user_agent: userAgent,
      })
      .select("id")
      .single();

    if (insertError || !inserted) {
      console.error("DB insert failed:", insertError);
      return new Response(
        JSON.stringify({ error: "Failed to save submission" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const submissionId = inserted.id as string;
    let emailError: string | null = null;

    // Send notification + confirmation in parallel; degrade gracefully on failure
    const results = await Promise.allSettled([
      sendGmail({
        to: NOTIFY_TO,
        subject: `رسالة جديدة من ${data.name} — ${data.service}`,
        htmlBody: adminEmailHtml(data, submissionId),
        replyTo: data.email,
      }),
      sendGmail({
        to: data.email,
        subject: `شكراً لتواصلك مع ${BRAND}`,
        htmlBody: userConfirmationHtml(data),
      }),
    ]);

    const errors = results.filter((r): r is PromiseRejectedResult => r.status === "rejected");
    if (errors.length > 0) {
      emailError = errors.map((e) => String(e.reason)).join(" | ");
      console.error("Email send errors:", emailError);
    }

    await supabase
      .from("contact_submissions")
      .update({
        email_sent: emailError === null,
        email_error: emailError,
      })
      .eq("id", submissionId);

    // Even if the admin email fails, the submission is saved — return success to user
    return new Response(
      JSON.stringify({
        success: true,
        id: submissionId,
        emailDelivered: emailError === null,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});