import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const services = [
  "الحلول التقنية والبرمجية",
  "الاستشارات العقارية",
  "استشارات الأعمال",
  "الإدارة المالية",
  "الترجمة والتوطين",
  "الدعم الفني",
  "أخرى",
];

export const ContactForm = () => {
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "الاسم مطلوب";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "بريد إلكتروني غير صحيح";
    if (!form.phone.trim()) errs.phone = "رقم الجوال مطلوب";
    if (!form.service) errs.service = "اختر نوع الخدمة";
    if (!form.message.trim() || form.message.length < 10) errs.message = "الرسالة قصيرة جدًا";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: form,
      });
      if (error) throw error;
      if (!data?.success) throw new Error("فشل الإرسال");

      setDone(true);
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (err) {
      console.error("Contact form submission failed:", err);
      toast({
        title: "تعذّر إرسال الرسالة",
        description: "حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى أو مراسلتنا على info@futureintelligen.com.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card border border-border rounded-3xl p-10 text-center shadow-card"
      >
        <CheckCircle2 className="size-16 text-secondary mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-bold text-primary mb-2">تم استلام طلبك بنجاح</h3>
        <p className="text-muted-foreground leading-loose mb-6">
          شكرًا لتواصلك مع Future Intelligen. سيقوم فريقنا بالرد عليك في أقرب وقت ممكن.
        </p>
        <Button variant="outline" className="rounded-full" onClick={() => setDone(false)}>
          إرسال رسالة أخرى
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-card space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="name">الاسم</Label>
          <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="اسمك الكامل" />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">البريد الإلكتروني</Label>
          <Input id="email" type="email" dir="ltr" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="name@example.com" />
          {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="phone">رقم الجوال</Label>
          <Input id="phone" type="tel" dir="ltr" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+966 5X XXX XXXX" />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">نوع الخدمة</Label>
          <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
            <SelectTrigger id="service"><SelectValue placeholder="اختر الخدمة" /></SelectTrigger>
            <SelectContent>
              {services.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectContent>
          </Select>
          {errors.service && <p className="text-xs text-destructive">{errors.service}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">الرسالة</Label>
        <Textarea id="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="اكتب تفاصيل احتياجك أو سؤالك..." />
        {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
      </div>

      <Button type="submit" size="lg" disabled={submitting} className="w-full rounded-full bg-primary hover:bg-primary-glow gap-2 disabled:opacity-70">
        {submitting ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
        {submitting ? "جارٍ الإرسال..." : "إرسال الرسالة"}
      </Button>
    </form>
  );
};
