import { Link } from "react-router-dom";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { contact } from "@/data/contact";
import { navigation } from "@/data/navigation";
import logo from "@/assets/logo-future-intelligen-light.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container container-px py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Future Intelligen Logo"
                width={56}
                height={56}
                loading="lazy"
                className="h-14 w-14 object-contain"
              />
              <div>
                <div className="font-heading font-bold">Future Intelligen</div>
                <div className="text-xs text-primary-foreground/70">شركة فيوتشر إنتليجنس</div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/75 leading-loose">
              شركة سعودية متخصصة في تقديم الحلول التقنية والاستشارية، نساعد الشركات ورواد الأعمال على بناء أنظمة رقمية احترافية ودعم نموهم بثقة.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-base">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              {navigation.map((n) => (
                <li key={n.href}>
                  <Link to={n.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-base">خدماتنا</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/technology" className="hover:text-accent">الحلول التقنية</Link></li>
              <li><Link to="/real-estate" className="hover:text-accent">الاستشارات العقارية</Link></li>
              <li><Link to="/services" className="hover:text-accent">استشارات الأعمال</Link></li>
              <li><Link to="/services" className="hover:text-accent">المحاسبة والزكاة</Link></li>
              <li><Link to="/services" className="hover:text-accent">الترجمة والتوطين</Link></li>
              <li><Link to="/services" className="hover:text-accent">الدعم الفني</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-base">تواصل معنا</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="size-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-primary-foreground/60 mb-0.5">الموقع</div>
                  <div>{contact.location}</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="size-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-primary-foreground/60 mb-0.5">البريد الإلكتروني</div>
                  <a href={`mailto:${contact.email}`} dir="ltr" className="hover:text-accent">{contact.email}</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="size-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-primary-foreground/60 mb-0.5">إيميل الإدارة</div>
                  <a href={`mailto:${contact.ceoEmail}`} dir="ltr" className="hover:text-accent">{contact.ceoEmail}</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="size-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-primary-foreground/60 mb-0.5">واتساب</div>
                  <a href={contact.whatsappSALink} target="_blank" rel="noopener noreferrer" dir="ltr" className="hover:text-accent">{contact.whatsappSA}</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm text-primary-foreground/70">
            © 2026 Future Intelligen — جميع الحقوق محفوظة.
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-gold/30 backdrop-blur-sm">
            <span className="text-base sm:text-lg text-primary-foreground/90 font-medium">
              تم التصميم والتطوير بواسطة
            </span>
            <a
              href={contact.designerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading font-extrabold text-lg sm:text-xl text-gold hover:text-gold/80 underline underline-offset-4 decoration-gold/40 hover:decoration-gold transition-colors"
              style={{ textShadow: "0 0 24px hsl(var(--gold) / 0.35)" }}
            >
              Abdo Kolay TEC
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
