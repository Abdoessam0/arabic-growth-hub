import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, TrendingUp, ShieldCheck, Zap, Building2, Languages } from "lucide-react";

const badges = [
  { icon: Sparkles, label: "حلول تقنية" },
  { icon: TrendingUp, label: "استشارات أعمال" },
  { icon: Building2, label: "استشارات عقارية" },
  { icon: ShieldCheck, label: "دعم فني" },
  { icon: Languages, label: "ترجمة وتوطين" },
];

export const HeroSection = () => (
  <section className="relative overflow-hidden">
    {/* background decorations */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-0 right-0 size-[500px] bg-accent/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 size-[400px] bg-secondary/10 blur-[120px] rounded-full" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>

    <div className="container container-px pt-10 pb-16 lg:pt-16 lg:pb-24">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        {/* Text */}
        <div className="lg:col-span-7 text-center lg:text-right">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border shadow-sm mb-6"
          >
            <span className="size-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs font-medium text-foreground/80">شركة سعودية للحلول التقنية والاستشارية</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-heading font-extrabold text-primary mb-6 text-[2rem] sm:text-5xl lg:text-[3.5rem] leading-[1.55] sm:leading-[1.5] tracking-[0.005em]"
            style={{ wordSpacing: "0.08em" }}
          >
            <span className="block">نحوّل أفكارك إلى</span>
            <span className="block text-gradient mt-2">حلول رقمية</span>
            <span className="block mt-2">واستشارية ذكية</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="text-base sm:text-lg text-muted-foreground leading-loose max-w-2xl lg:max-w-none mb-8 mx-auto lg:mx-0"
          >
            نساعد الشركات ورواد الأعمال على بناء الأنظمة، تطوير الحضور الرقمي، تنظيم الأعمال، ودعم النمو من خلال حلول تقنية واستشارية متكاملة.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
          >
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary-glow text-primary-foreground gap-2 shadow-elegant">
              <Link to="/contact">
                احجز استشارة <ArrowLeft className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-primary/20 hover:bg-primary/5">
              <Link to="/services">استكشف خدماتنا</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap justify-center lg:justify-start gap-2"
          >
            {badges.map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium text-foreground/75"
              >
                <b.icon className="size-3.5 text-accent" />
                {b.label}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            {/* main panel */}
            <div className="absolute inset-0 rounded-[2rem] bg-hero-gradient shadow-elegant overflow-hidden">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="absolute -top-20 -right-20 size-64 rounded-full bg-accent/30 blur-2xl" />
            </div>

            {/* floating cards */}
            <div className="absolute top-8 right-6 left-6 glass-card rounded-2xl p-4 animate-float">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-primary">لوحة الأداء</span>
                <span className="text-[10px] text-secondary font-bold">+ 24%</span>
              </div>
              <div className="flex items-end gap-1.5 h-16">
                {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-accent to-accent/40" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>

            <div
              className="absolute bottom-10 right-2 glass-card rounded-2xl p-4 w-44 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="size-8 rounded-lg bg-secondary/10 grid place-items-center">
                  <Building2 className="size-4 text-secondary" />
                </div>
                <span className="text-xs font-semibold text-primary">عملاء جدد</span>
              </div>
              <div className="text-2xl font-heading font-bold text-primary">+128</div>
              <div className="text-[11px] text-muted-foreground">آخر 30 يومًا</div>
            </div>

            <div
              className="absolute bottom-8 left-2 glass-card rounded-2xl p-3 animate-float"
              style={{ animationDelay: "2s" }}
            >
              <div className="flex items-center gap-2">
                <div className="size-9 rounded-full bg-gold-gradient grid place-items-center">
                  <Zap className="size-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-primary">تنفيذ سريع</div>
                  <div className="text-[10px] text-muted-foreground">جودة عالية</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
