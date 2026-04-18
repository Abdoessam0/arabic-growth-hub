import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { ServiceCategorySection } from "@/components/ServiceCategorySection";
import { CTASection } from "@/components/CTASection";
import { serviceCategories } from "@/data/services";

const Services = () => (
  <>
    <SEO title="خدماتنا | Future Intelligen" description="تعرف على خدمات Future Intelligen في الحلول التقنية، الاستشارات العقارية، خدمات الأعمال، المحاسبة، الترجمة، والدعم الفني." path="/services" />
    <PageHero tag="خدماتنا" title="حلول مصمّمة لاحتياج عملك" desc="مجموعة خدمات تقنية واستشارية متكاملة، نقدمها لشركات وأفراد في المملكة العربية السعودية والمنطقة." />

    <div className="divide-y divide-border/40">
      {serviceCategories.map((c, i) => (
        <ServiceCategorySection key={c.id} {...c} reverse={i % 2 === 1} />
      ))}
    </div>

    <CTASection />
  </>
);

export default Services;
