import { Service } from "schema-dts";

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  provider: {
    name: string;
    url: string;
  };
  areaServed: string;
  serviceType: string;
  priceRange: string;
}

export function ServiceSchema({
  name,
  description,
  url,
  provider,
  areaServed,
  serviceType,
  priceRange,
}: ServiceSchemaProps) {
  const schema: Service = {
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: provider.name,
      url: provider.url,
    },
    areaServed: {
      "@type": "Country",
      name: areaServed,
    },
    serviceType,
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "PLN",
        price: priceRange,
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Usługi IT",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: name,
            description: description,
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "0",
            priceCurrency: "PLN",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
