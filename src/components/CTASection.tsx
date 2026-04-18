import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle, Mail } from "lucide-react";
import { contact, waLink } from "@/data/contact";
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
  <section className="container container-px py-16">
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
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
        <p className={`mb-8 leading-loose ${variant === "dark" ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
          {text}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2">
            <a href={waLink("sa")} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-5" /> واتساب السعودية
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20 hover:text-white gap-2">
            <a href={waLink("tr")} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-5" /> واتساب تركيا
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20 hover:text-white gap-2">
            <a href={`mailto:${contact.email}`}>
              <Mail className="size-5" /> أرسل بريدًا
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  </section>
);
