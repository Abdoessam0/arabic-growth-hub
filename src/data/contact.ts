export const contact = {
  brand: "Future Intelligen",
  brandAr: "شركة فيوتشر إنتليجنس",
  domain: "futureintelligen.com",
  email: "info@futureintelligen.com",
  ceoEmail: "ceo@futureintelligen.com",
  whatsappSA: "+966508414332",
  whatsappTR: "+905527508202",
  whatsappSALink: "https://wa.me/966508414332",
  whatsappTRLink: "https://wa.me/905527508202",
  defaultMessage: "مرحبًا، أود الاستفسار عن خدمات Future Intelligen.",
  location: "المملكة العربية السعودية",
};

export const waLink = (number: "sa" | "tr") => {
  const base = number === "sa" ? contact.whatsappSALink : contact.whatsappTRLink;
  return `${base}?text=${encodeURIComponent(contact.defaultMessage)}`;
};
