import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { Building2, Users, MapPin, Layers, MessageCircle, Briefcase, Search, FileText, Smartphone, Filter, ListChecks, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const audience = [
  { icon: Building2, label: "مكتب عقاري" },
  { icon: Layers, label: "مطور عقاري" },
  { icon: Users, label: "وسيط عقاري" },
  { icon: Briefcase, label: "شركة إدارة أملاك" },
  { icon: MapPin, label: "مشروع سكني" },
  { icon: BarChart3, label: "شركة تسويق عقاري" },
];

const reServices = [
  "موقع عقاري احترافي",
  "منصة عرض عقارات",
  "صفحات هبوط للمشاريع",
  "إدارة العملاء المحتملين",
  "ربط واتساب",
  "نماذج طلب معاينة",
  "لوحة تحكم لإدارة العقارات",
  "تحسين SEO للعقارات",
  "محتوى تسويقي للعقارات",
  "تقارير أداء",
];

const features = [
  { icon: FileText, t: "عرض العقارات بالصور والتفاصيل" },
  { icon: Filter, t: "فلترة حسب المدينة، النوع، السعر، والمساحة" },
  { icon: ListChecks, t: "نموذج طلب تواصل" },
  { icon: MessageCircle, t: "زر واتساب مباشر" },
  { icon: Building2, t: "صفحة لكل عقار" },
  { icon: BarChart3, t: "لوحة إدارة للعقارات" },
  { icon: Smartphone, t: "تصميم سريع ومتجاوب" },
  { icon: Search, t: "تحسين الظهور في محركات البحث" },
];

const RealEstate = () => (
  <>
    <SEO title="الاستشارات العقارية | Future Intelligen" description="حلول واستشارات عقارية رقمية للمكاتب، المطورين، والوسطاء في المملكة العربية السعودية." path="/real-estate" />
    <PageHero
      tag="الاستشارات العقارية"
      title="حلول واستشارات عقارية تساعدك على جذب العملاء وإدارة الفرص"
      desc="نساعد المكاتب العقارية، المطورين، والوسطاء على بناء حضور رقمي احترافي وتحويل الاهتمام إلى فرص حقيقية."
    />

    <section className="container container-px py-16">
      <SectionHeader eyebrow="لمن هذه الخدمة" title="نخدم كافة فاعلي القطاع العقاري" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {audience.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-card border border-border rounded-2xl p-6 flex items-center gap-4 hover:shadow-card hover:border-accent/40 transition-all"
          >
            <div className="size-12 rounded-xl bg-secondary/10 grid place-items-center shrink-0">
              <a.icon className="size-6 text-secondary" />
            </div>
            <span className="font-heading font-semibold text-primary">{a.label}</span>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="container container-px py-12">
      <SectionHeader eyebrow="خدماتنا العقارية" title="باقة متكاملة لتسويق وإدارة العقارات" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reServices.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="bg-card border border-border rounded-2xl p-5 text-foreground/85 hover:border-accent/40 hover:shadow-card transition-all"
          >
            <span className="size-7 rounded-lg bg-accent/10 text-accent grid place-items-center text-sm font-bold mb-3">{i + 1}</span>
            <p className="font-medium">{s}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="container container-px py-16">
      <div className="bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-card">
        <SectionHeader eyebrow="مميزات الموقع" title="مميزات موقعك العقاري معنا" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="text-center p-5 rounded-2xl bg-muted/40"
            >
              <div className="size-12 mx-auto rounded-xl bg-primary text-primary-foreground grid place-items-center mb-3">
                <f.icon className="size-6" />
              </div>
              <p className="text-sm font-medium text-primary leading-snug">{f.t}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="container container-px py-12">
      <SectionHeader eyebrow="CRM وتدفق العملاء" title="نظام إدارة عملاء عقاريين متكامل" desc="من التقاط العميل المحتمل حتى متابعة الصفقة وإغلاقها — كل شيء في مكان واحد ومرتبط مباشرة بواتساب." />
      <div className="grid md:grid-cols-3 gap-5">
        {[
          { num: "1", title: "التقاط العميل", desc: "نماذج تواصل وأزرار واتساب على الموقع تنقل البيانات تلقائيًا." },
          { num: "2", title: "تأهيل وتوزيع", desc: "تصنيف وتوزيع الفرص على فريق المبيعات حسب المنطقة أو نوع العقار." },
          { num: "3", title: "متابعة وإغلاق", desc: "متابعة المراحل والمذكرات حتى إتمام الصفقة بنجاح." },
        ].map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="bg-card border border-border rounded-2xl p-6"
          >
            <div className="text-4xl font-heading font-black text-gradient mb-3">{s.num}</div>
            <h4 className="font-heading font-bold text-primary mb-2">{s.title}</h4>
            <p className="text-sm text-muted-foreground leading-loose">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="container container-px py-12 text-center">
      <Button asChild size="lg" className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
        <Link to="/contact">ابدأ استشارتك العقارية</Link>
      </Button>
    </section>

    <CTASection />
  </>
);

export default RealEstate;
