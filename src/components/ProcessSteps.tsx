import { motion } from "framer-motion";
import { processSteps } from "@/data/process";

export const ProcessSteps = () => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
    {processSteps.map((s, i) => (
      <motion.div
        key={s.num}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: i * 0.08 }}
        className="relative bg-card border border-border/60 rounded-2xl p-6 hover:shadow-card transition-shadow"
      >
        <div className="text-5xl font-heading font-black text-gradient mb-3 leading-none">{s.num}</div>
        <h4 className="font-heading font-bold text-primary text-lg mb-2">{s.title}</h4>
        <p className="text-sm text-muted-foreground leading-loose">{s.desc}</p>
      </motion.div>
    ))}
  </div>
);
