import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { TestimonialPlaceholder } from "@/components/TestimonialPlaceholder";
import { StatsStrip } from "@/components/StatsStrip";
import { servicesOverview } from "@/data/services";
import { industries } from "@/data/industries";
import { motion } from "framer-motion";
import { Check, Building2, Code2, ArrowLeft, Briefcase, Globe2, Database, Home, Calculator, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const whyUs = [
  "فهم يجمع بين التقنية والاستشارات",
  "حلول مناسبة للسوق السعودي",
  "تنفيذ عملي واضح",
  "تواصل مباشر وسريع",
  "اهتمام بالتفاصيل وتجربة المستخدم",
  "قابلية للتوسع والتطوير",
];

const trustItems = [
  { label: "استشارات أعمال", icon: Briefcase, tint: "bg-primary/5", border: "border-primary/20", text: "text-primary" },
  { label: "تطوير مواقع", icon: Globe2, tint: "bg-accent/10", border: "border-accent/25", text: "text-accent" },
  { label: "أنظمة CRM", icon: Database, tint: "bg-indigo-500/10", border: "border-indigo-500/25", text: "text-indigo-600" },
  { label: "حلول عقارية", icon: Home, tint: "bg-secondary/10", border: "border-secondary/25", text: "text-secondary" },
  { label: "محاسبة وزكاة", icon: Calculator, tint: "bg-gold/15", border: "border-gold/30", text: "text-gold" },
  { label: "ترجمة وتوطين", icon: Languages, tint: "bg-teal-500/10", border: "border-teal-500/25", text: "text-teal-600" },
];

const Index = () => (
  <>
    <SEO
      title="Future Intelligen | حلول تقنية واستشارية للشركات"
      description="شركة فيوتشر إنتليجنس تقدم حلولًا تقنية واستشارية تشمل تطوير المواقع، الأنظمة، الاستشارات العقارية، خدمات الأعمال، الترجمة، والدعم الفني."
    />
    <HeroSection />

    {/* Trust strip — colored service pills */}
    <section className="border-y border-border/60 bg-muted/20">
      <div className="container container-px py-6">
        <div className="flex flex-wrap justify-center items-center gap-2.5">
          {trustItems.map((t) => (
            <span
              key={t.label}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${t.tint} ${t.border} ${t.text} text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-card cursor-default`}
            >
              <t.icon className="size-4" />
              {t.label}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* Stats */}
    <div className="py-16">
      <StatsStrip />
    </div>

    {/* Services overview */}
    <section className="container container-px py-12">
      <SectionHeader
        eyebrow="خدماتنا"
        title="حلول متكاملة لنمو أعمالك"
        desc="من التقنية إلى الاستشارة، نوفر مجموعة خدمات مصممة لمساعدة شركتك على التميز في السوق السعودي."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {servicesOverview.map((s, i) => (
          <ServiceCard key={s.title} {...s} index={i} />
        ))}
      </div>
    </section>

    {/* Real estate highlight */}
    <section className="container container-px py-16">
      <div className="relative overflow-hidden rounded-3xl bg-hero-gradient text-primary-foreground p-8 sm:p-14 shadow-elegant">
        <div className="absolute -top-32 -left-20 size-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="grid lg:grid-cols-2 gap-10 items-center relative">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur text-xs font-semibold mb-5">
              <Building2 className="size-4" /> خدمة مميزة
            </div>
            <h3 className="font-heading text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              حلول رقمية متكاملة للقطاع العقاري
            </h3>
            <p className="text-primary-foreground/85 leading-loose mb-6">
              نساعد المكاتب العقارية، المطورين، والوسطاء على بناء حضور رقمي احترافي وتحويل الاهتمام إلى فرص حقيقية عبر منصات وCRM وحملات تسويقية مدروسة.
            </p>
            <Button asChild size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 gap-2">
              <Link to="/real-estate">اكتشف الحلول العقارية <ArrowLeft className="size-4" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {["موقع عقاري احترافي", "منصة عرض عقارات", "نظام CRM عقاري", "ربط مع واتساب", "صفحات هبوط للمشاريع", "تحسين SEO عقاري"].map((it) => (
              <div key={it} className="glass-dark rounded-2xl p-4 text-sm font-medium">
                {it}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Tech highlight */}
    <section className="container container-px py-12">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="size-14 rounded-2xl bg-accent/10 grid place-items-center mb-5">
            <Code2 className="size-7 text-accent" />
          </div>
          <h3 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4 leading-tight">
            تقنية عصرية تحرّك أعمالك للأمام
          </h3>
          <p className="text-muted-foreground leading-loose mb-6">
            نبني المواقع، الأنظمة، لوحات التحكم، وحلول CRM المخصّصة، مع تكاملات API وأتمتة عمليات تحقّق فرقًا حقيقيًا في كفاءة فريقك.
          </p>
          <ul className="space-y-2 mb-7">
            {["مواقع شركات ومتاجر إلكترونية", "أنظمة داخلية ولوحات تحكم", "تكاملات API وأتمتة العمليات", "تحسين الأداء وSEO التقني"].map((it) => (
              <li key={it} className="flex items-start gap-2 text-sm text-foreground/85">
                <Check className="size-4 text-secondary mt-1 shrink-0" />
                {it}
              </li>
            ))}
          </ul>
          <Button asChild className="rounded-full bg-primary hover:bg-primary-glow gap-2">
            <Link to="/technology">استكشف الحلول التقنية <ArrowLeft className="size-4" /></Link>
          </Button>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative">
          <div className="bg-card border border-border rounded-3xl p-6 shadow-elegant">
            <div className="flex gap-1.5 mb-4">
              <div className="size-3 rounded-full bg-destructive/60" />
              <div className="size-3 rounded-full bg-gold/70" />
              <div className="size-3 rounded-full bg-secondary/70" />
            </div>
            <div className="space-y-3">
              {[
                { l: "إجمالي العملاء", v: "1,284", c: "bg-accent/10 text-accent" },
                { l: "صفقات نشطة", v: "47", c: "bg-secondary/10 text-secondary" },
                { l: "معدل التحويل", v: "32%", c: "bg-gold/10 text-gold" },
              ].map((r) => (
                <div key={r.l} className="flex items-center justify-between p-4 bg-muted/40 rounded-xl">
                  <span className="text-sm text-muted-foreground">{r.l}</span>
                  <span className={`px-3 py-1 rounded-lg font-heading font-bold text-sm ${r.c}`}>{r.v}</span>
                </div>
              ))}
              <div className="p-4 bg-muted/40 rounded-xl">
                <div className="text-xs text-muted-foreground mb-2">الأداء الأسبوعي</div>
                <div className="flex items-end gap-1.5 h-20">
                  {[55, 70, 45, 80, 60, 90, 75].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-primary to-accent" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Why us */}
    <section className="container container-px py-16">
      <SectionHeader
        eyebrow="لماذا نحن"
        title="شريكك الموثوق في التقنية والاستشارات"
        desc="نجمع بين الفهم العميق للسوق السعودي والخبرة التقنية لنقدّم حلولًا فعّالة وقابلة للتوسع."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {whyUs.map((p, i) => (
          <motion.div
            key={p}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-card border border-border rounded-2xl p-6 hover:border-accent/40 hover:shadow-card transition-all"
          >
            <div className="size-10 rounded-xl bg-secondary/10 grid place-items-center mb-4">
              <Check className="size-5 text-secondary" />
            </div>
            <p className="font-heading font-semibold text-primary">{p}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Process */}
    <section className="container container-px py-16 bg-muted/20 rounded-3xl mx-4 sm:mx-8 lg:mx-12">
      <SectionHeader eyebrow="منهجيتنا" title="من الفكرة إلى التنفيذ" desc="خطوات واضحة تقودك من تحديد الاحتياج إلى الإطلاق والتطوير المستمر." />
      <ProcessSteps />
    </section>

    {/* Industries */}
    <section className="container container-px py-16">
      <SectionHeader eyebrow="القطاعات" title="نخدم قطاعات متعددة" desc="نعمل مع شركات من مختلف القطاعات ونصمم الحلول وفق احتياجات كل صناعة." />
      <div className="flex flex-wrap justify-center gap-3">
        {industries.map((ind, i) => (
          <motion.div
            key={ind}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            className="px-5 py-3 rounded-full bg-card border border-border hover:border-accent/40 hover:shadow-card transition-all text-sm font-medium text-foreground/85"
          >
            {ind}
          </motion.div>
        ))}
      </div>
    </section>

    {/* Case study cards */}
    <section className="container container-px py-16">
      <SectionHeader eyebrow="نماذج عمل" title="أنواع المشاريع التي ننفذها" />
      <div className="grid md:grid-cols-3 gap-5">
        {[
          { tag: "تقني", title: "بناء منصة إدارة عملاء (CRM)", desc: "تصميم وتطوير نظام داخلي لإدارة العملاء والصفقات مع تقارير ذكية." },
          { tag: "عقاري", title: "موقع عرض مشروع سكني", desc: "صفحات هبوط احترافية مرتبطة بنماذج تواصل وواتساب لزيادة الفرص." },
          { tag: "أعمال", title: "إعداد دراسة جدوى متكاملة", desc: "تحليل السوق، الجدوى المالية، وخطة العمل لمشروع جديد." },
        ].map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className="bg-card border border-border rounded-3xl overflow-hidden hover:shadow-elegant transition-all group"
          >
            <div className="aspect-[16/10] bg-hero-gradient relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%)", backgroundSize: "20px 20px" }} />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/15 backdrop-blur text-white text-xs font-semibold">{c.tag}</div>
            </div>
            <div className="p-6">
              <h4 className="font-heading font-bold text-primary text-lg mb-2">{c.title}</h4>
              <p className="text-sm text-muted-foreground leading-loose">{c.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Testimonials placeholder */}
    <section className="container container-px py-16">
      <SectionHeader
        eyebrow="آراء العملاء"
        title="آراء عملائنا عن شركة Future Intelligen"
        desc="نماذج من تجارب العملاء مع خدماتنا التقنية والاستشارية."
      />
      <TestimonialPlaceholder />
    </section>

    {/* FAQ */}
    <section className="container container-px py-16">
      <SectionHeader eyebrow="الأسئلة الشائعة" title="إجابات على ما يهمك" />
      <FAQ />
    </section>

    <CTASection />
  </>
);

export default Index;
