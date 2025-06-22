import { FAQPage } from "schema-dts";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQPageSchemaProps {
  questions: FAQItem[];
  url: string;
}

export function FAQPageSchema({ questions, url }: FAQPageSchemaProps) {
  const schema: FAQPage = {
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
    url,
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
