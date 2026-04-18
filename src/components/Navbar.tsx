import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigation } from "@/data/navigation";
import { waLink } from "@/data/contact";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container container-px flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-10 w-10 rounded-xl bg-hero-gradient grid place-items-center text-primary-foreground font-heading font-bold shadow-elegant">
            FI
          </div>
          <div className="leading-tight">
            <div className="font-heading font-bold text-base text-primary">Future Intelligen</div>
            <div className="text-[11px] text-muted-foreground">شركة فيوتشر إنتليجنس</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navigation.map((n) => (
            <RouterNavLink
              key={n.href}
              to={n.href}
              end={n.href === "/"}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/5 text-primary"
                    : "text-muted-foreground hover:text-primary hover:bg-muted"
                )
              }
            >
              {n.label}
            </RouterNavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button asChild variant="outline" className="rounded-full border-primary/20">
            <Link to="/contact">تواصل معنا</Link>
          </Button>
          <Button asChild className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2">
            <a href={waLink("sa")} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4" />
              واتساب
            </a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg hover:bg-muted"
          onClick={() => setOpen(!open)}
          aria-label="فتح القائمة"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
          <nav className="container container-px py-4 flex flex-col gap-1">
            {navigation.map((n) => (
              <RouterNavLink
                key={n.href}
                to={n.href}
                end={n.href === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-3 rounded-xl text-sm font-medium",
                    isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  )
                }
              >
                {n.label}
              </RouterNavLink>
            ))}
            <div className="flex gap-2 mt-2">
              <Button asChild variant="outline" className="flex-1 rounded-full">
                <Link to="/contact">تواصل معنا</Link>
              </Button>
              <Button asChild className="flex-1 rounded-full bg-secondary text-secondary-foreground">
                <a href={waLink("sa")} target="_blank" rel="noopener noreferrer">واتساب</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
