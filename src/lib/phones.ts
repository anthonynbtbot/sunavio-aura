export interface PhoneNumber {
  display: string;
  tel: string;
  whatsapp: string;
}

/** Numéro entreprises (B2B : hôtels, golfs, industrie, tertiaire). */
export const PHONE_BUSINESS: PhoneNumber = {
  display: "+212 6 63 28 44 24",
  tel: "tel:+212663284424",
  whatsapp: "https://wa.me/212663284424",
};

/** Numéro particuliers (villas, résidences privées). */
export const PHONE_PRIVATE: PhoneNumber = {
  display: "+212 6 60 44 91 50",
  tel: "tel:+212660449150",
  whatsapp: "https://wa.me/212660449150",
};
