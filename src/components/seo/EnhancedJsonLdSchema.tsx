"use client";

export function PersonBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://paskomichal.pl/#person",
        name: "Michał Paśko",
        alternateName: "Michał Paśko Web Developer",
        description:
          "Web Developer z Wrocławia z 4-letnim doświadczeniem w tworzeniu stron internetowych i aplikacji webowych. Absolwent informatyki WSB. Specjalizacja: WordPress, Next.js, React.",
        url: "https://paskomichal.pl",
        image: "https://paskomichal.pl/images/developer-photo.webp",
        sameAs: [
          "https://www.linkedin.com/in/michał-paśko/",
          "https://github.com/mpasko90",
          "https://useme.com/pl/roles/contractor/paskomichalpl,268582/",
        ],
        jobTitle: "WordPress Developer",
        worksFor: [
          {
            "@type": "Organization",
            name: "Dzielciuch",
          },
          {
            "@type": "Organization",
            name: "Militaria.pl",
          },
          {
            "@type": "Organization",
            name: "Freelancer",
          },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Wrocław",
          addressRegion: "Dolnośląskie",
          addressCountry: "PL",
        },
        knowsAbout: [
          "Web Development",
          "WordPress",
          "Next.js",
          "React",
          "TypeScript",
          "JavaScript",
          "HTML",
          "CSS",
          "Bootstrap",
          "Astro.js",
          "Frontend Development",
          "Computer Graphics",
          "Multimedia Technologies",
        ],
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Wyższa Szkoła Bankowa we Wrocławiu",
          alternateName: "WSB Wrocław",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://paskomichal.pl/#business",
        name: "Michał Paśko - Web Developer Wrocław",
        alternateName: "PaskoMichal.pl",
        description:
          "Profesjonalne tworzenie stron internetowych we Wrocławiu. Absolwent informatyki z 4-letnim doświadczeniem. WordPress, Next.js, React. Pomoc komputerowa.",
        url: "https://paskomichal.pl",
        telephone: "+48881711211",
        email: "kontakt@paskomichal.pl",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Wrocław",
          addressRegion: "Dolnośląskie",
          postalCode: "50-000",
          addressCountry: "PL",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "51.1079",
          longitude: "17.0385",
        },
        openingHours: "Mo-Fr 08:00-18:00",
        priceRange: "2000-8000 PLN",
        areaServed: [
          {
            "@type": "City",
            name: "Wrocław",
          },
          {
            "@type": "Country",
            name: "Polska",
          },
        ],
        serviceType: [
          "Web Development",
          "Tworzenie stron internetowych",
          "Sklepy internetowe",
          "Aplikacje webowe",
          "Pomoc komputerowa",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Usługi Web Development",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Tworzenie stron internetowych",
                description:
                  "Nowoczesne, responsywne strony internetowe z użyciem Next.js, React i TypeScript",
              },
              price: "2500",
              priceCurrency: "PLN",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Sklepy internetowe",
                description:
                  "Profesjonalne sklepy internetowe z panelem administracyjnym i płatnościami online",
              },
              price: "6000",
              priceCurrency: "PLN",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Pomoc komputerowa",
                description:
                  "Kompleksowe usługi IT: naprawa komputerów, instalacja oprogramowania, konfiguracja sieci",
              },
              price: "150",
              priceCurrency: "PLN",
            },
          ],
        },
        founder: {
          "@id": "https://paskomichal.pl/#person",
        },
        employee: {
          "@id": "https://paskomichal.pl/#person",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://paskomichal.pl/#website",
        url: "https://paskomichal.pl",
        name: "Michał Paśko - Web Developer Wrocław",
        description:
          "Web Developer Wrocław - Michał Paśko. Tworzenie nowoczesnych stron internetowych, sklepów online i aplikacji webowych. Next.js, React, TypeScript.",
        publisher: {
          "@id": "https://paskomichal.pl/#person",
        },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://paskomichal.pl/?s={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
        inLanguage: "pl-PL",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
