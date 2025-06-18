"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Ile kosztuje stworzenie strony internetowej we Wrocławiu?",
    answer:
      "Ceny zależą od złożoności projektu. Strona wizytówkowa WordPress zaczyna się od 2000 zł, strona firmowa od 3500 zł, a nowoczesna aplikacja Next.js od 5000 zł. Każdy projekt wyceniam indywidualnie po analizie wymagań.",
  },
  {
    question: "Jak długo trwa tworzenie strony internetowej?",
    answer:
      "Czas realizacji zależy od skomplikowania projektu. Prosta strona wizytówkowa - 1-2 tygodnie, strona firmowa WordPress - 2-3 tygodnie, aplikacja Next.js - 3-6 tygodni. Zawsze ustalamy realny terminarz na początku współpracy.",
  },
  {
    question: "Czy oferujesz wsparcie techniczne po zakończeniu projektu?",
    answer:
      "Tak, oferuję wsparcie techniczne obejmujące aktualizacje WordPress, kopie zapasowe i pomoc w zarządzaniu treścią. W przypadku aplikacji Next.js pomagam też z deploymentem i monitoringiem.",
  },
  {
    question: "Czy strony są responsywne i zoptymalizowane pod SEO?",
    answer:
      "Wszystkie strony tworzę z podejściem mobile-first, są w pełni responsywne i zoptymalizowane pod kątem SEO. Dbam o szybkość ładowania, poprawną strukturę HTML i meta tagi.",
  },
  {
    question: "Jakimi technologiami się zajmujesz?",
    answer:
      "Specjalizuję się w WordPress (niestandardowe moduły w React.js), Next.js, React z TypeScript, Astro.js. Mam doświadczenie z HTML, CSS, JavaScript i Bootstrap. Jestem absolwentem informatyki WSB Wrocław.",
  },
  {
    question: "Czy możesz pomóc z migracją istniejącej strony?",
    answer:
      "Tak, pomagam w migracjach między różnymi platformami i modernizacji istniejących stron. Mam doświadczenie w pracy z różnymi systemami CMS i dbam o zachowanie pozycji SEO.",
  },
  {
    question: "Oferujesz także usługi pomocy komputerowej?",
    answer:
      "Tak, poza programowaniem oferuję kompleksowe usługi IT: naprawę komputerów, instalację oprogramowania, konfigurację sieci, usuwanie wirusów. Dojazd do klienta we Wrocławiu i okolicach.",
  },
  {
    question: "Jak wygląda proces współpracy?",
    answer:
      "1) Bezpłatna konsultacja i wycena, 2) Ustalenie zakresu prac i terminów, 3) Projektowanie i programowanie z regularnym feedbackiem, 4) Testowanie i poprawki, 5) Wdrożenie strony i przekazanie dostępów.",
  },
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Najczęściej zadawane pytania
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Odpowiedzi na najważniejsze pytania dotyczące tworzenia stron
            internetowych i usług IT
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {faqData.map((item, index) => (
              <Card
                key={index}
                className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader
                  className="cursor-pointer"
                  onClick={() => toggleItem(index)}
                >
                  <CardTitle className="text-left flex items-center justify-between text-lg text-gray-800">
                    <span>{item.question}</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${
                        openItems.includes(index) ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </CardTitle>
                </CardHeader>
                {openItems.includes(index) && (
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {item.answer}
                    </CardDescription>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Schema.org FAQ markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqData.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
