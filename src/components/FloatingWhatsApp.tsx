import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { waLink } from "@/data/contact";
import { cn } from "@/lib/utils";

export const FloatingWhatsApp = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {open && (
        <div className="mb-3 glass-card rounded-2xl p-3 w-60 shadow-elegant animate-fade-in">
          <p className="text-xs text-muted-foreground mb-2 font-medium">اختر القناة الأنسب لك:</p>
          <div className="flex flex-col gap-2">
            <a
              href={waLink("sa")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 text-sm font-medium transition-colors"
            >
              <span>واتساب السعودية</span>
              <span className="text-lg">🇸🇦</span>
            </a>
            <a
              href={waLink("tr")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium transition-colors"
            >
              <span>واتساب تركيا</span>
              <span className="text-lg">🇹🇷</span>
            </a>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        aria-label="تواصل عبر واتساب"
        className={cn(
          "size-14 rounded-full grid place-items-center shadow-elegant transition-all",
          open ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground animate-pulse-glow"
        )}
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-7" />}
      </button>
    </div>
  );
};
