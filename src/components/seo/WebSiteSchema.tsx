import { WebSite } from "schema-dts";

interface WebSiteSchemaProps {
  siteUrl: string;
  name: string;
  description: string;
}

export function WebSiteSchema({
  siteUrl,
  name,
  description,
}: WebSiteSchemaProps) {
  const schema: WebSite = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name,
    description,
    url: siteUrl,
    publisher: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Michał Paśko",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.webp`,
      },
    },
    potentialAction: [
      {
        "@type": "SearchAction",
        target: `${siteUrl}/search?q={search_term_string}`,
        query: "required name=search_term_string",
      },
    ],
    sameAs: [
      "https://github.com/paskomichal",
      "https://www.linkedin.com/in/paskomichal/",
    ],
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
