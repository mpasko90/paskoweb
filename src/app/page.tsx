import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimatedHeroSection } from "@/components/sections/AnimatedHeroSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import {
  BorderBeam,
  GradientText,
  AnimatedShimmer,
} from "@/components/ui/magic-ui";

const LazyReferences = dynamic(
  () =>
    import("@/components/sections/References").then((mod) => ({
      default: mod.References,
    })),
  {
    loading: () => <div className="min-h-[300px] animate-pulse bg-gray-100" />,
  }
);

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* Animated Hero Section */}
      <AnimatedHeroSection />

      {/* Wprowadzenie SEO Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
              Web Developer Wrocław - Nowoczesne Strony Internetowe
            </h2>
            <div className="prose prose-lg mx-auto text-slate-600">
              <p className="text-lg leading-relaxed mb-6">
                Jako doświadczony <strong>web developer z Wrocławia</strong>{" "}
                pomagam firmom i przedsiębiorcom tworzyć profesjonalne strony
                internetowe, które przyciągają klientów i zwiększają sprzedaż.
              </p>
              <p className="text-base leading-relaxed mb-8">
                Specjalizuję się w{" "}
                <strong>WordPress i nowoczesnych technologiach</strong> jak
                Next.js i React, co gwarantuje wysoką wydajność, bezpieczeństwo
                i łatwość zarządzania Twoją stroną. Jestem absolwentem
                informatyki WSB Wrocław z certyfikatami Coursera.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span>4+ lata doświadczenia</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span>WordPress & Next.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span>Absolwent informatyki WSB</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span>Pełna obsługa projektu</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span>Wsparcie techniczne</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usługi Section - Rozszerzone SEO */}
      <section id="uslugi" className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              <GradientText from="#2563eb" to="#1e40af">
                Usługi Web Development Wrocław
              </GradientText>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Kompleksowe usługi tworzenia stron internetowych i wsparcia
              technicznego dla firm we Wrocławiu i całej Polsce
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Tworzenie stron internetowych */}
            <Card className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-primary overflow-hidden">
              <AnimatedShimmer />
              <BorderBeam
                className="absolute inset-0 z-0"
                duration={20}
                colorFrom="#2563eb"
                colorTo="#3b82f6"
              />
              <div className="relative z-10">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center gap-3 text-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Tworzenie Stron Internetowych
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 mb-6">
                    <p className="mb-4">
                      Profesjonalne{" "}
                      <strong>tworzenie stron internetowych Wrocław</strong> z
                      wykorzystaniem najnowszych technologii:
                    </p>
                    <ul className="list-disc list-inside space-y-2 marker:text-blue-500 mb-6">
                      <li>
                        <strong>Strony wizytówkowe WordPress</strong> - od 2000
                        zł
                      </li>
                      <li>
                        <strong>Strony firmowe</strong> - od 3500 zł
                      </li>
                      <li>
                        <strong>Aplikacje Next.js</strong> - od 5000 zł
                      </li>
                      <li>
                        <strong>Modernizacja istniejących stron</strong> -
                        wycena indywidualna
                      </li>
                    </ul>

                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-blue-800 mb-2">
                        Technologie:
                      </h4>
                      <p className="text-sm text-blue-700">
                        WordPress, Next.js, React, TypeScript, Astro.js,
                        Bootstrap
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <div>🚀 Core Web Vitals &gt; 90</div>
                      <div>📱 Pełna responsywność</div>
                      <div>🔍 Optymalizacja SEO</div>
                      <div>⚡ Szybkość ładowania</div>
                    </div>
                  </CardDescription>
                  <Link
                    href="/tworzenie-stron"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                  >
                    Zobacz szczegóły i cennik
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </CardContent>
              </div>
            </Card>

            {/* Pomoc komputerowa */}
            <Card className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-emerald-500">
              <AnimatedShimmer />
              <CardHeader>
                <CardTitle className="text-emerald-600 flex items-center gap-3 text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Pogotowie Komputerowe Wrocław
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 mb-6">
                  <p className="mb-4">
                    Kompleksowe usługi IT dla firm i osób prywatnych we
                    Wrocławiu:
                  </p>
                  <ul className="list-disc list-inside space-y-2 marker:text-emerald-500 mb-6">
                    <li>Naprawa komputerów i laptopów</li>
                    <li>Instalacja i konfiguracja oprogramowania</li>
                    <li>Konfiguracja sieci i routerów</li>
                    <li>Usuwanie wirusów i malware</li>
                    <li>Przywracanie danych z dysków</li>
                    <li>Konsultacje IT i modernizacja</li>
                  </ul>

                  <div className="bg-emerald-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-emerald-800 mb-2">
                      Dojazd do klienta:
                    </h4>
                    <p className="text-sm text-emerald-700">
                      Wrocław i okolice • Szybka diagnoza • Transparentne ceny
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                      Dostępny 24/7
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                      Gwarancja serwisu
                    </span>
                  </div>
                </CardDescription>
                <Link
                  href="/pomoc-komputerowa"
                  className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group"
                >
                  Umów konsultację
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* O mnie Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Freelancer Programista Wrocław
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p className="text-lg leading-relaxed mb-4">
                    Jestem <strong>Michał Paśko</strong> - web developer z
                    Wrocławia z 4-letnim doświadczeniem w tworzeniu stron
                    internetowych i aplikacji webowych.
                  </p>
                  <p className="mb-6">
                    Swoją przygodę z IT rozpocząłem w 2020 roku, a od 2022
                    zajmuję się tym zawodowo. Obecnie pracuję jako WordPress
                    Developer w Dzielciuch oraz jako Junior Frontend Developer w
                    Militaria.pl.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Moja specjalizacja:
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        • <strong>WordPress</strong> - niestandardowe moduły i
                        optymalizacja
                      </li>
                      <li>
                        • <strong>Next.js</strong> i React z TypeScript
                      </li>
                      <li>
                        • <strong>Frontend Development</strong> - HTML, CSS,
                        JavaScript
                      </li>
                      <li>
                        • <strong>Astro.js</strong> i nowoczesne frameworki
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-blue-800 mb-2">
                      Wykształcenie i certyfikaty:
                    </h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Licencjat Informatyki - WSB Wrocław (2020-2023)</li>
                      <li>
                        • Specjalizacja: Grafika komputerowa i technologie
                        multimedialne
                      </li>
                      <li>
                        • Introduction to Front-End Development - Coursera
                      </li>
                      <li>• Version Control - Coursera</li>
                    </ul>
                  </div>

                  <h3 className="font-semibold text-gray-800 mb-3">
                    Dlaczego warto ze mną współpracować?
                  </h3>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-500">✓</span>
                      <span>Indywidualne podejście do każdego projektu</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-500">✓</span>
                      <span>Terminowość i transparentna komunikacja</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-500">✓</span>
                      <span>Kod najwyższej jakości z dokumentacją</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-500">✓</span>
                      <span>Długoterminowe wsparcie techniczne</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-500">✓</span>
                      <span>Konkurencyjne ceny freelancera</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="relative inline-block">
                  <Image
                    src="/images/developer-photo.webp"
                    alt="Michał Paśko - Web Developer Wrocław"
                    width={400}
                    height={400}
                    className="rounded-lg shadow-lg"
                    priority
                  />
                  <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    4+ lata doświadczenia
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Prawdziwe projekty */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Moje Realizacje
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Przykłady moich prac - strony internetowe stworzone dla
              rzeczywistych klientów
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* MC Klima */}
            <Card className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-gray-800 text-xl">
                  MC Klima - Montaż Klimatyzacji
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  <p className="mb-3">
                    Strona wizytówkowa dla firmy montażu klimatyzacji we
                    Wrocławiu. Stworzona w WordPress z działającym formularzem
                    kontaktowym.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                      WordPress
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                      Responsive
                    </span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                      SEO
                    </span>
                  </div>
                  <a
                    href="https://mcklima.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Zobacz stronę live
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </CardDescription>
              </CardContent>
            </Card>

            {/* Portfolio własne */}
            <Card className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-gray-800 text-xl">
                  Paskomichal.pl - Portfolio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  <p className="mb-3">
                    Moja strona portfolio stworzona od podstaw w HTML z
                    biblioteką Bootstrap. Dynamiczne elementy w JavaScript.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                      HTML
                    </span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                      Bootstrap
                    </span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                      JavaScript
                    </span>
                  </div>
                  <span className="text-green-600 font-semibold">
                    ✓ Aktualna strona
                  </span>
                </CardDescription>
              </CardContent>
            </Card>

            {/* Praca zawodowa */}
            <Card className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-gray-800 text-xl">
                  Dzielciuch Platform
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  <p className="mb-3">
                    Platforma e-commerce, nad którą pracuję jako WordPress
                    Developer. Niestandardowe moduły w React.js.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                      WordPress
                    </span>
                    <span className="px-2 py-1 bg-cyan-100 text-cyan-800 text-xs rounded">
                      React.js
                    </span>
                    <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">
                      E-commerce
                    </span>
                  </div>
                  <span className="text-blue-600 font-semibold">
                    💼 Praca zawodowa (2023-)
                  </span>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <LazyReferences />

      <FAQSection />

      <CTASection />
    </main>
  );
}
