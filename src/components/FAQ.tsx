import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";

export const FAQ = () => (
  <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-3">
    {faqs.map((f, i) => (
      <AccordionItem
        key={i}
        value={`item-${i}`}
        className="bg-card border border-border/60 rounded-2xl px-6 data-[state=open]:shadow-card data-[state=open]:border-accent/30 transition-all"
      >
        <AccordionTrigger className="font-heading font-semibold text-primary hover:no-underline text-right">
          {f.q}
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground leading-loose">{f.a}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);
