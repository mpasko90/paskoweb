'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Ile kosztuje stworzenie strony internetowej we Wrocławiu?",
    answer: "Ceny zależą od złożoności projektu. Strona wizytówkowa zaczyna się od 2500 zł, strona firmowa od 4000 zł, a sklep internetowy od 6000 zł. Wszystkie strony są tworzone z użyciem nowoczesnych technologii jak Next.js i React."
  },
  {
    question: "Jak długo trwa tworzenie strony internetowej?",
    answer: "Czas realizacji zależy od skomplikowania projektu. Prosta strona wizytówkowa - 1-2 tygodnie, strona firmowa - 2-4 tygodnie, sklep internetowy - 4-8 tygodni. Zawsze trzymam się ustalonych terminów."
  },
  {
    question: "Czy oferujesz wsparcie techniczne po zakończeniu projektu?",
    answer: "Tak, oferuję pełne wsparcie techniczne obejmujące aktualizacje, kopie zapasowe, monitoring bezpieczeństwa i pomoc w zarządzaniu treścią. Możesz liczyć na długoterminową współpracę."
  },
  {
    question: "Czy strony są responsywne i zoptymalizowane pod SEO?",
    answer: "Wszystkie strony tworzę z podejściem mobile-first, są w pełni responsywne i zoptymalizowane pod kątem SEO. Używam najnowszych technologii zapewniających wysokie wyniki w Core Web Vitals."
  },
  {
    question: "Jakimi technologiami się zajmujesz?",
    answer: "Specjalizuję się w nowoczesnych technologiach frontendowych: Next.js 15, React 19, TypeScript, Tailwind CSS. Do hostingu używam Vercel, co gwarantuje najwyższą wydajność i niezawodność."
  },
  {
    question: "Czy możesz pomóc z migracją istniejącej strony?",
    answer: "Tak, pomagam w migracjach z różnych platform (WordPress, Wix, innych CMS) do nowoczesnych rozwiązań. Dbam o zachowanie pozycji SEO i przekierowania wszystkich adresów URL."
  },
  {
    question: "Oferujesz także usługi pomocy komputerowej?",
    answer: "Tak, poza tworzeniem stron internetowych oferuję kompleksowe usługi IT: naprawę komputerów, instalację oprogramowania, konfigurację sieci. Dojazd do klienta we Wrocławiu i okolicach."
  },
  {
    question: "Jak wygląda proces współpracy?",
    answer: "1) Bezpłatna konsultacja i wycena, 2) Podpisanie umowy i zaliczka 50%, 3) Projektowanie i programowanie, 4) Testowanie i poprawki, 5) Wdrożenie i przekazanie strony, 6) Szkolenie i wsparcie techniczne."
  }
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
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
            Odpowiedzi na najważniejsze pytania dotyczące tworzenia stron internetowych i usług IT
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {faqData.map((item, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader 
                  className="cursor-pointer"
                  onClick={() => toggleItem(index)}
                >
                  <CardTitle className="text-left flex items-center justify-between text-lg text-gray-800">
                    <span>{item.question}</span>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-200 ${
                        openItems.includes(index) ? 'rotate-180' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
              "mainEntity": faqData.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer
                }
              }))
            })
          }}
        />
      </div>
    </section>
  );
}
