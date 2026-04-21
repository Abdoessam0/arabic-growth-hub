import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const placeholders = [
  {
    title: "تنفيذ احترافي وتواصل واضح",
    text: "ساعدنا فريق Future Intelligen في تحويل فكرتنا إلى موقع عملي وواضح، مع اهتمام ممتاز بالتفاصيل وسرعة في التعديلات.",
  },
  {
    title: "فهم جيد لاحتياج العمل",
    text: "كان التعامل منظمًا، وتم فهم احتياج المشروع بسرعة وتقديم حلول مناسبة بدلًا من تنفيذ تقليدي فقط.",
  },
  {
    title: "تجربة سلسة من البداية للنهاية",
    text: "أعجبنا وضوح الخطوات وجودة التصميم وسهولة التواصل خلال مراحل المشروع.",
  },
];

export const TestimonialPlaceholder = () => (
  <div>
    <p className="text-center text-xs text-muted-foreground mb-8 max-w-xl mx-auto">
      هذه نماذج مؤقتة لعرض شكل القسم، ويتم استبدالها لاحقًا بآراء حقيقية بعد موافقة العملاء.
    </p>
    <div className="grid md:grid-cols-3 gap-5">
      {placeholders.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="bg-card border border-border/60 rounded-2xl p-7 hover:shadow-elegant hover:-translate-y-1 hover:border-accent/30 transition-all"
        >
          <div className="flex items-start justify-between mb-4">
            <Quote className="size-9 text-accent/30" />
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-muted text-[10px] font-semibold text-muted-foreground">
              نموذج رأي عميل
            </span>
          </div>
          <h4 className="font-heading font-bold text-primary text-base mb-3 leading-relaxed">
            {p.title}
          </h4>
          <p className="text-sm leading-loose text-foreground/80 mb-5">{p.text}</p>
          <div className="flex items-center gap-1 pt-4 border-t border-border/60">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} className="size-4 fill-gold text-gold" />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);
