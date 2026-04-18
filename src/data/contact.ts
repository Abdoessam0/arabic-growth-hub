export const contact = {
  brand: "Future Intelligen",
  brandAr: "شركة فيوتشر إنتليجنس",
  domain: "futureintelligen.com",
  email: "info@futureintelligen.com",
  ceoEmail: "ceo@futureintelligen.com",
  whatsappSA: "+966508414332",
  whatsappSALink: "https://wa.me/966508414332",
  defaultMessage: "مرحبًا، أود الاستفسار عن خدمات Future Intelligen.",
  location: "الرياض، المملكة العربية السعودية",
  designerName: "Abdo",
  designerUrl: "https://abdoessamcv.vercel.app/",
};

export const waLink = () => {
  return `${contact.whatsappSALink}?text=${encodeURIComponent(contact.defaultMessage)}`;
};
