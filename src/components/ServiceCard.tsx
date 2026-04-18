import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, type LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  desc: string;
  href?: string;
  index?: number;
}

export const ServiceCard = ({ icon: Icon, title, desc, href, index = 0 }: Props) => {
  const Card = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group relative h-full bg-card rounded-2xl p-7 border border-border/60 hover:border-accent/40 transition-all duration-300 hover:shadow-elegant overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="size-14 rounded-2xl bg-primary/5 grid place-items-center mb-5 group-hover:bg-accent/10 transition-colors">
          <Icon className="size-7 text-primary group-hover:text-accent transition-colors" />
        </div>
        <h3 className="font-heading font-bold text-lg text-primary mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-loose mb-4">{desc}</p>
        {href && (
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
            اعرف المزيد <ArrowLeft className="size-4" />
          </span>
        )}
      </div>
    </motion.div>
  );

  return href ? <Link to={href}>{Card}</Link> : Card;
};
