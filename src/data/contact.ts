export const contact = {
  brand: "Future Intelligen",
  brandAr: "شركة فيوتشر إنتليجنس",
  domain: "futureintelligen.com",
  email: "info@futureintelligen.com",
  ceoEmail: "ceo@futureintelligen.com",
  location: "الرياض، المملكة العربية السعودية",
  designerName: "Abdo",
  designerUrl: "https://abdoessamcv.vercel.app/",
};

export const mailtoLink = (subject = "استفسار عن خدمات Future Intelligen") =>
  `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`;
