import { motion } from "framer-motion";

const stats = [
  { num: "+6", label: "مجالات خدمة" },
  { num: "+50", label: "خدمة فرعية" },
  { num: "24/7", label: "دعم متواصل" },
  { num: "3", label: "لغات للترجمة" },
];

export const StatsStrip = () => (
  <section className="container container-px">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden shadow-card"
    >
      {stats.map((s) => (
        <div key={s.label} className="bg-card p-6 sm:p-8 text-center">
          <div className="font-heading text-3xl sm:text-4xl font-black text-gradient mb-1">{s.num}</div>
          <div className="text-xs sm:text-sm text-muted-foreground font-medium">{s.label}</div>
        </div>
      ))}
    </motion.div>
  </section>
);
