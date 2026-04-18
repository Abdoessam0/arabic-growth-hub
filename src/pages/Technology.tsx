import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { Globe2, LayoutDashboard, Users, Cog, Plug, Server, Gauge, Sparkles } from "lucide-react";

const techServices = [
  { icon: Globe2, title: "المواقع الإلكترونية", desc: "مواقع شركات ومتاجر إلكترونية بتصميم عصري وأداء عالٍ." },
  { icon: LayoutDashboard, title: "لوحات التحكم", desc: "لوحات إدارية مخصّصة لمتابعة بياناتك واتخاذ القرار." },
  { icon: Users, title: "أنظمة CRM", desc: "إدارة العملاء والصفقات والفرص بشكل احترافي." },
  { icon: Cog, title: "أتمتة العمليات", desc: "نقلّل العمل اليدوي ونرفع كفاءة فريقك." },
  { icon: Plug, title: "تكاملات API", desc: "نربط أنظمتك بخدمات خارجية مثل واتساب والدفع والشحن." },
  { icon: Server, title: "الاستضافة والصيانة", desc: "إعداد الدومين والاستضافة والبريد الرسمي مع متابعة دورية." },
  { icon: Gauge, title: "تحسين الأداء", desc: "نسرّع موقعك ونحسّن تجربته على جميع الأجهزة." },
  { icon: Sparkles, title: "تجربة مستخدم متقدمة", desc: "تصميم يركز على الوضوح وسهولة الاستخدام." },
];

const Technology = () => (
  <>
    <SEO title="الحلول التقنية | Future Intelligen" description="حلول تقنية ومواقع وأنظمة CRM وأتمتة عمليات وتكاملات API لشركتك." path="/technology" />
    <PageHero tag="الحلول التقنية" title="حلول تقنية مصممة لتشغيل أعمالك بكفاءة" desc="من تطوير المواقع والمتاجر إلى بناء الأنظمة الداخلية ولوحات التحكم وأتمتة العمليات." />

    <section className="container container-px py-16">
      <SectionHeader eyebrow="ماذا نقدم" title="باقة تقنية متكاملة" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {techServices.map((s, i) => (
          <ServiceCard key={s.title} {...s} index={i} />
        ))}
      </div>
    </section>

    <CTASection />
  </>
);

export default Technology;
