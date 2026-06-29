export const getWhatsAppLink = () => {
  const text = "Hello,\n\nI would like to enquire about admission at R.S. International School.\n\nPlease share details regarding admission, fees, and the admission process.\n\nThank you.";
  return `https://wa.me/919833577183?text=${encodeURIComponent(text)}`;
};
