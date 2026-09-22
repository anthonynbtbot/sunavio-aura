import { Helmet } from "react-helmet-async";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  name: "SUNAVIO SARL",
  url: "https://sunavio.com",
  logo: "https://sunavio.com/logo.png",
  image: "https://sunavio.com/og/sunavio-og.jpg",
  description:
    "Bureau d'études et intégrateur photovoltaïque : centrales solaires en autoconsommation, stockage et micro-réseaux pour l'industrie, l'hôtellerie et l'agriculture.",
  telephone: "+212663284424",
  email: "contact@sunavio.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Zenith Business Center, Bab Doukala",
    addressLocality: "Marrakech",
    addressCountry: "MA",
  },
  areaServed: "MA",
  slogan: "L'excellence solaire",
  knowsAbout: [
    "photovoltaïque",
    "autoconsommation",
    "stockage d'énergie",
    "micro-réseaux",
    "loi 82-21",
  ],
};

export function SiteStructuredData() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
    </Helmet>
  );
}