import { Link } from "react-router-dom";
import { Mail, MessageCircle, Globe, MapPin } from "lucide-react";
import { contact } from "@/data/contact";
import { navigation } from "@/data/navigation";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container container-px py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-gold-gradient grid place-items-center text-primary font-heading font-bold">
                FI
              </div>
              <div>
                <div className="font-heading font-bold">Future Intelligen</div>
                <div className="text-xs text-primary-foreground/70">شركة فيوتشر إنتليجنس</div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/75 leading-loose">
              شركة سعودية متخصصة في تقديم الحلول التقنية والاستشارية للشركات ورواد الأعمال، نساعدك على بناء أنظمة رقمية احترافية ودعم نموّك بثقة.
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
              <li className="flex items-center gap-2">
                <Globe className="size-4 text-accent shrink-0" />
                <span dir="ltr">{contact.domain}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-accent shrink-0" />
                <a href={`mailto:${contact.email}`} dir="ltr" className="hover:text-accent">{contact.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-accent shrink-0" />
                <a href={`mailto:${contact.ceoEmail}`} dir="ltr" className="hover:text-accent">{contact.ceoEmail}</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="size-4 text-accent shrink-0" />
                <a href={contact.whatsappSALink} target="_blank" rel="noopener noreferrer" dir="ltr" className="hover:text-accent">{contact.whatsappSA}</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="size-4 text-accent shrink-0" />
                <a href={contact.whatsappTRLink} target="_blank" rel="noopener noreferrer" dir="ltr" className="hover:text-accent">{contact.whatsappTR}</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-accent shrink-0" />
                <span>{contact.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Future Intelligen — جميع الحقوق محفوظة.</p>
          <p>صُمم بعناية للسوق السعودي</p>
        </div>
      </div>
    </footer>
  );
};
