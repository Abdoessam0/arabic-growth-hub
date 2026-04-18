import { motion } from "framer-motion";

interface Props {
  eyebrow?: string;
  title: string;
  desc?: string;
  align?: "center" | "right";
}

export const SectionHeader = ({ eyebrow, title, desc, align = "center" }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5 }}
    className={`max-w-3xl mb-12 ${align === "center" ? "mx-auto text-center" : "text-right"}`}
  >
    {eyebrow && (
      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-accent/10 text-accent mb-4">
        {eyebrow}
      </span>
    )}
    <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
      {title}
    </h2>
    {desc && <p className="text-base sm:text-lg text-muted-foreground leading-loose">{desc}</p>}
  </motion.div>
);
