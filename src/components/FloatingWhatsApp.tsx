import { MessageCircle } from "lucide-react";
import { waLink } from "@/data/contact";

export const FloatingWhatsApp = () => {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل عبر واتساب"
      className="fixed bottom-6 left-6 z-50 size-14 rounded-full grid place-items-center shadow-elegant bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all animate-pulse-glow"
    >
      <MessageCircle className="size-7" />
    </a>
  );
};
