import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { Eye, Target, Heart, Building2, Sparkles, Clock, ShieldCheck, Zap, Award, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  { icon: Sparkles, title: "الوضوح", desc: "تواصل صريح وخطوات مفهومة." },
  { icon: ShieldCheck, title: "الالتزام", desc: "نحترم المواعيد والاتفاقات." },
  { icon: Award, title: "الجودة", desc: "تنفيذ بمعايير احترافية عالية." },
  { icon: Zap, title: "السرعة", desc: "نحرص على التسليم في الوقت المناسب." },
  { icon: Heart, title: "الثقة", desc: "علاقة طويلة المدى مع عملائنا." },
  { icon: RefreshCw, title: "التطوير المستمر", desc: "نواكب أحدث التقنيات والممارسات." },
];

const About = () => (
  <>
    <SEO title="من نحن | Future Intelligen" description="تعرف على شركة فيوتشر إنتليجنس، شركتنا للحلول التقنية والاستشارية في المملكة العربية السعودية." path="/about" />
    <PageHero tag="من نحن" title="نبني حلولًا تقنية واستشارية بثقة" desc="Future Intelligen شركة سعودية متخصصة في تقديم حلول رقمية واستشارية تساعد الشركات ورواد الأعمال على بناء أنظمتهم وتطوير حضورهم الرقمي." />

    <section className="container container-px py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-5 leading-tight">من نحن</h2>
          <p className="text-muted-foreground leading-loose mb-4">
            شركة فيوتشر إنتليجنس هي شركة تقنية واستشارية تجمع بين الخبرة الرقمية والفهم العميق لاحتياجات السوق السعودي. نعمل مع رواد الأعمال والشركات الناشئة والمتوسطة لمساعدتهم على بناء أنظمة فعّالة، تحسين عملياتهم، والوصول إلى عملائهم بطرق احترافية.
          </p>
          <p className="text-muted-foreground leading-loose">
            نؤمن بأن النجاح يُبنى على الوضوح والالتزام والتنفيذ الجيد، ولذلك نضع علاقاتنا مع عملائنا في صميم عملنا.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-hero-gradient rounded-3xl p-10 text-primary-foreground shadow-elegant relative overflow-hidden">
          <div className="absolute -top-20 -left-20 size-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative space-y-6">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-2xl bg-white/10 grid place-items-center shrink-0">
                <Building2 className="size-6" />
              </div>
              <div>
                <div className="text-xs text-primary-foreground/70 mb-1">السجل القانوني</div>
                <div className="font-heading font-bold">شركة فيوتشر إنتليجنس</div>
                <div className="text-sm text-primary-foreground/85">شركة ذات مسؤولية محدودة</div>
              </div>
            </div>
            <div className="h-px bg-white/15" />
            <div className="space-y-2 text-sm text-primary-foreground/85">
              <p>• خدمات تقنية واستشارية للشركات والأفراد</p>
              <p>• المملكة العربية السعودية</p>
              <p>• حضور إقليمي يشمل تركيا</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Vision / Mission */}
    <section className="container container-px py-12">
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { icon: Eye, title: "رؤيتنا", text: "أن نكون شريكًا موثوقًا للشركات في بناء حلول رقمية واستشارية تساعدها على النمو بثقة." },
          { icon: Target, title: "رسالتنا", text: "تقديم خدمات تقنية واستشارية عملية تجمع بين الجودة، الوضوح، وسرعة التنفيذ." },
        ].map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="bg-card border border-border rounded-3xl p-8 hover:shadow-elegant transition-all"
          >
            <div className="size-14 rounded-2xl bg-accent/10 grid place-items-center mb-5">
              <b.icon className="size-7 text-accent" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-primary mb-3">{b.title}</h3>
            <p className="text-muted-foreground leading-loose">{b.text}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Values */}
    <section className="container container-px py-16">
      <SectionHeader eyebrow="قيمنا" title="ما يحركنا في كل مشروع" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-card border border-border rounded-2xl p-6 hover:border-accent/40 hover:shadow-card transition-all"
          >
            <div className="size-11 rounded-xl bg-gold/10 grid place-items-center mb-4">
              <v.icon className="size-5 text-gold" />
            </div>
            <h4 className="font-heading font-bold text-primary mb-2">{v.title}</h4>
            <p className="text-sm text-muted-foreground leading-loose">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* How we work */}
    <section className="container container-px py-16">
      <SectionHeader eyebrow="منهجيتنا" title="كيف نعمل معك" desc="نلتزم بمنهجية واضحة تضمن الفهم العميق للاحتياج، وتسليمًا فعّالًا، ومتابعة بعد الإطلاق." />
      <div className="grid sm:grid-cols-3 gap-5">
        {[
          { icon: Clock, title: "اجتماع استكشافي", desc: "نلتقي ونفهم ما تحتاج بدقة." },
          { icon: Target, title: "خطة وتنفيذ", desc: "نعدّ خطة واضحة وننفّذ باحتراف." },
          { icon: RefreshCw, title: "متابعة وتطوير", desc: "ندعمك ونحسّن باستمرار." },
        ].map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="bg-card border border-border rounded-2xl p-6 text-center"
          >
            <div className="size-14 mx-auto rounded-2xl bg-primary/5 grid place-items-center mb-4">
              <s.icon className="size-7 text-primary" />
            </div>
            <h4 className="font-heading font-bold text-primary mb-2">{s.title}</h4>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <CTASection title="هل أنت جاهز لخطوة جديدة؟" text="تحدث معنا الآن واكتشف كيف يمكننا دعم نمو شركتك." />
  </>
);

export default About;
