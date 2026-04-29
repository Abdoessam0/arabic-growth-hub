import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import { ContactCard } from "@/components/ContactCard";
import { Mail, MapPin } from "lucide-react";
import { contact } from "@/data/contact";
import { CTASection } from "@/components/CTASection";
import { organizationJsonLd } from "@/lib/structuredData";

const Contact = () => (
  <>
    <SEO
      title="تواصل معنا | Future Intelligen"
      description="تواصل مع Future Intelligen عبر البريد الإلكتروني للحصول على استشارة تقنية أو عقارية أو خدمات أعمال."
      path="/contact"
      jsonLd={organizationJsonLd}
    />
    <PageHero tag="تواصل معنا" title="نحن هنا لخدمتك" desc="تواصل معنا عبر البريد الإلكتروني فقط حالياً، أو املأ النموذج وسنرد عليك خلال يوم عمل." />

    <section className="container container-px py-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        <ContactCard icon={Mail} label="البريد الإلكتروني" value={contact.email} href={`mailto:${contact.email}`} ltr accent="accent" />
        <ContactCard icon={Mail} label="إيميل الإدارة" value={contact.ceoEmail} href={`mailto:${contact.ceoEmail}`} ltr accent="primary" />
        <ContactCard icon={MapPin} label="الموقع" value={contact.location} accent="primary" />
      </div>

      <div className="grid lg:grid-cols-5 gap-8 items-start">
        <div className="lg:col-span-3">
          <SectionHeader eyebrow="نموذج التواصل" title="أرسل لنا رسالتك" align="right" desc="املأ البيانات أدناه وسيتم التواصل معك خلال يوم عمل." />
          <ContactForm />
        </div>
        <div className="lg:col-span-2 bg-hero-gradient rounded-3xl p-8 text-primary-foreground shadow-elegant relative overflow-hidden lg:sticky lg:top-28">
          <div className="absolute -top-20 -right-20 size-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative">
            <h3 className="font-heading text-2xl font-bold mb-4">لماذا تتواصل معنا؟</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/85 mb-6">
              <li>• استشارة مجانية لفهم احتياجك</li>
              <li>• اقتراح خطة واضحة بخطوات عملية</li>
              <li>• تواصل مباشر مع فريقنا</li>
              <li>• ردّ سريع خلال يوم عمل</li>
            </ul>
            <div className="space-y-2 text-sm">
              <a href={`mailto:${contact.email}`} className="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">
                <span className="font-semibold">بريد إلكتروني</span>
                <span dir="ltr" className="text-primary-foreground/80 text-xs">{contact.email}</span>
              </a>
              <a href={`mailto:${contact.ceoEmail}`} className="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">
                <span className="font-semibold">إيميل الإدارة</span>
                <span dir="ltr" className="text-primary-foreground/80 text-xs">{contact.ceoEmail}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CTASection variant="dark" title="هل لديك استفسار؟" text="تواصل معنا عبر البريد الإلكتروني فقط حالياً وسنرد عليك خلال يوم عمل." />
  </>
);

export default Contact;
