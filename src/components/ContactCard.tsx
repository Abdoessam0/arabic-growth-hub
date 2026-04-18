import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  ltr?: boolean;
  accent?: "primary" | "secondary" | "accent";
}

export const ContactCard = ({ icon: Icon, label, value, href, ltr, accent = "accent" }: Props) => {
  const colorMap = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    accent: "bg-accent/10 text-accent",
  };
  const inner = (
    <div className="flex items-center gap-4 bg-card border border-border rounded-2xl p-5 hover:shadow-card hover:border-accent/30 transition-all h-full">
      <div className={`size-12 rounded-xl grid place-items-center shrink-0 ${colorMap[accent]}`}>
        <Icon className="size-6" />
      </div>
      <div className="min-w-0">
        <div className="text-xs text-muted-foreground mb-1">{label}</div>
        <div className={`font-heading font-semibold text-primary truncate ${ltr ? "text-left" : ""}`} dir={ltr ? "ltr" : "rtl"}>
          {value}
        </div>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a> : inner;
};
