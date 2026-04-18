import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface Props {
  title: string;
  desc: string;
  tag?: string;
}

export const PageHero = ({ title, desc, tag }: Props) => (
  <section className="relative overflow-hidden border-b border-border/60">
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/40 to-background" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 size-[600px] bg-accent/8 blur-[120px] rounded-full -z-10" />
    <div className="container container-px py-20 lg:py-28 text-center">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {tag && (
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent mb-4">
            {tag}
          </span>
        )}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-primary mb-5 leading-tight">{title}</h1>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-loose">{desc}</p>
      </motion.div>
    </div>
  </section>
);

export const FeatureBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border text-sm text-foreground/80">
    <ArrowLeft className="size-3.5 text-accent rotate-180" />
    {children}
  </span>
);
