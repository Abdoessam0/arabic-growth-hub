import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const placeholders = [
  { role: "عميل من القطاع العقاري", text: "نص توضيحي مؤقت يُستبدل لاحقًا برأي حقيقي بعد موافقة العميل، ويعكس تجربة العمل مع فريق Future Intelligen." },
  { role: "عميل من قطاع الخدمات", text: "نموذج رأي توضيحي يبيّن جودة التواصل وسرعة التسليم وفهم احتياج العميل بدقة." },
  { role: "صاحب شركة ناشئة", text: "نموذج نصي مؤقت لإظهار شكل القسم. سيتم تحديثه بآراء حقيقية بعد إذن أصحابها." },
];

export const TestimonialPlaceholder = () => (
  <div>
    <p className="text-center text-xs text-muted-foreground mb-8 max-w-xl mx-auto">
      سيتم استبدال هذه النماذج لاحقًا بآراء حقيقية بعد موافقة العملاء.
    </p>
    <div className="grid md:grid-cols-3 gap-5">
      {placeholders.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="bg-card border border-border/60 rounded-2xl p-6 hover:shadow-card hover:-translate-y-1 hover:border-accent/30 transition-all"
        >
          <Quote className="size-8 text-accent/40 mb-4" />
          <p className="text-sm leading-loose text-foreground/85 mb-5">{p.text}</p>
          <div className="flex items-center gap-3 pt-4 border-t border-border/60">
            <div className="size-10 rounded-full bg-muted grid place-items-center text-primary font-heading font-bold">؟</div>
            <div>
              <div className="text-sm font-semibold text-primary">عميل توضيحي</div>
              <div className="text-xs text-muted-foreground">{p.role}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);
