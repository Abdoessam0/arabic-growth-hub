/**
 * JSON-LD structured data builders for Future Intelligen.
 * Only includes verifiable, real information. No fake socials.
 */

import { contact } from "@/data/contact";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Future Intelligen",
  alternateName: "شركة فيوتشر إنتليجنس",
  url: "https://futureintelligen.com/",
  email: contact.email,
  description:
    "شركة سعودية متخصصة في الحلول التقنية والاستشارية: تطوير المواقع، الأنظمة، CRM، الاستشارات العقارية، استشارات الأعمال، المحاسبة والزكاة، الترجمة والتوطين، والدعم الفني.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Riyadh",
    addressCountry: "SA",
  },
  areaServed: {
    "@type": "Country",
    name: "Saudi Arabia",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: contact.email,
      areaServed: "SA",
      availableLanguage: ["Arabic", "English"],
    },
    {
      "@type": "ContactPoint",
      contactType: "executive",
      email: contact.ceoEmail,
      areaServed: "SA",
    },
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Future Intelligen",
  url: "https://futureintelligen.com/",
  inLanguage: "ar-SA",
};
