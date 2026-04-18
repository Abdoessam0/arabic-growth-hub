import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  items: string[];
  reverse?: boolean;
}

export const ServiceCategorySection = ({ id, icon: Icon, title, desc, items, reverse }: Props) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5 }}
    className="container container-px py-14"
  >
    <div className={`grid lg:grid-cols-2 gap-10 items-start ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <div>
        <div className="size-16 rounded-2xl bg-hero-gradient grid place-items-center mb-6 shadow-elegant">
          <Icon className="size-8 text-primary-foreground" />
        </div>
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-muted-foreground leading-loose mb-6">{desc}</p>
        <Button asChild className="rounded-full bg-primary hover:bg-primary-glow">
          <Link to="/contact">اطلب الخدمة</Link>
        </Button>
      </div>
      <div className="bg-card border border-border/60 rounded-3xl p-6 sm:p-8 shadow-card">
        <ul className="grid sm:grid-cols-2 gap-3">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm">
              <span className="mt-1 size-5 rounded-full bg-accent/10 text-accent grid place-items-center shrink-0">
                <Check className="size-3" />
              </span>
              <span className="text-foreground/85">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.section>
);
