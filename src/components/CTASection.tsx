import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { contact } from "@/data/contact";
import { motion } from "framer-motion";

interface Props {
  title?: string;
  text?: string;
  variant?: "dark" | "light";
}

export const CTASection = ({
  title = "جاهز تبدأ مشروعك الرقمي أو الاستشاري؟",
  text = "تواصل معنا الآن ودعنا نفهم احتياجك ونقترح عليك الخطوة الأنسب.",
  variant = "dark",
}: Props) => (
  <section className="container container-px py-14">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden rounded-3xl p-10 sm:p-14 text-center ${
        variant === "dark"
          ? "bg-hero-gradient text-primary-foreground"
          : "bg-card border border-border text-primary"
      } shadow-elegant`}
    >
      <div className="absolute -top-24 -right-24 size-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-secondary/20 blur-3xl" />

      <div className="relative max-w-2xl mx-auto">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4 leading-[1.5]">{title}</h2>
        <p className={`mb-8 leading-loose ${variant === "dark" ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
          {text}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2">
            <a href={`mailto:${contact.email}`}>
              <Mail className="size-5" /> تواصل عبر البريد الإلكتروني
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  </section>
);
