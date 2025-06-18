'use client';

interface PersonBusinessSchemaProps {
  name?: string;
  jobTitle?: string;
  description?: string;
  telephone?: string;
  email?: string;
  url?: string;
  image?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
}

export function PersonBusinessSchema({
  name = "Michał Paśko",
  jobTitle = "Web Developer",
  description = "Profesjonalne tworzenie stron internetowych i pomoc komputerowa we Wrocławiu. Doświadczony web developer, freelancer z 10+ lat doświadczenia.",
  telephone = "+48123456789",
  email = "kontakt@paskomichal.pl",
  url = "https://paskomichal.pl",
  image = "https://paskomichal.pl/images/developer-photo.webp",
  address = {
    streetAddress: "ul. Example 123",
    addressLocality: "Wrocław",
    addressRegion: "Dolnośląskie",
    postalCode: "50-000",
    addressCountry: "PL"
  }
}: PersonBusinessSchemaProps = {}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Person", "LocalBusiness"],
    "@id": url,
    name,
    jobTitle,
    description,
    telephone,
    email,
    url,
    image,
    address: {
      "@type": "PostalAddress",
      ...address
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "51.1079",
      longitude: "17.0385"
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "51.1079",
        longitude: "17.0385"
      },
      geoRadius: "30000"
    },
    priceRange: "$$",
    openingHours: "Mo-Fr 09:00-17:00"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
