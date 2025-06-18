import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedHeroSection } from "@/components/sections/AnimatedHeroSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

const LazyReferences = dynamic(() => import('@/components/sections/References').then(mod => ({ default: mod.References })), {
  loading: () => <div className="min-h-[300px] animate-pulse bg-gray-100" />,
});

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* Animated Hero Section */}
      <AnimatedHeroSection />

      {/* Wprowadzenie SEO Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Web Developer Wrocław - Nowoczesne Strony Internetowe
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                Jako doświadczony <strong>web developer z Wrocławia</strong> pomagam firmom i przedsiębiorcom 
                tworzyć profesjonalne strony internetowe, które przyciągają klientów i zwiększają sprzedaż.
              </p>
              <p className="text-base leading-relaxed mb-8">
                Specjalizuję się w najnowszych technologiach webowych jak <strong>Next.js 15, React i TypeScript</strong>, 
                co gwarantuje wysoką wydajność, bezpieczeństwo i łatwość zarządzania Twoją stroną.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span>10+ lat doświadczenia</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span>50+ projektów</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span>Next.js, React, TypeScript</span>
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
      <section id="uslugi" className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Usługi Web Development Wrocław
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kompleksowe usługi tworzenia stron internetowych i wsparcia technicznego dla firm we Wrocławiu i całej Polsce
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Tworzenie stron internetowych */}
            <Card className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-blue-500">
              <CardHeader>
                <CardTitle className="text-blue-600 flex items-center gap-3 text-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Tworzenie Stron Internetowych
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 mb-6">
                  <p className="mb-4">
                    Profesjonalne <strong>tworzenie stron internetowych Wrocław</strong> z wykorzystaniem najnowszych technologii:
                  </p>
                  <ul className="list-disc list-inside space-y-2 marker:text-blue-500 mb-6">
                    <li><strong>Strony wizytówkowe</strong> - od 2500 zł</li>
                    <li><strong>Strony firmowe</strong> - od 4000 zł</li>
                    <li><strong>Sklepy internetowe</strong> - od 6000 zł</li>
                    <li><strong>Aplikacje webowe</strong> - wycena indywidualna</li>
                  </ul>
                  
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Technologie:</h4>
                    <p className="text-sm text-blue-700">
                      Next.js 15, React 19, TypeScript, Tailwind CSS, Vercel
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
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>

            {/* Pomoc komputerowa */}
            <Card className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-green-500">
              <CardHeader>
                <CardTitle className="text-green-600 flex items-center gap-3 text-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                     <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Pogotowie Komputerowe Wrocław
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 mb-6">
                  <p className="mb-4">
                    Kompleksowe usługi IT dla firm i osób prywatnych we Wrocławiu:
                  </p>
                  <ul className="list-disc list-inside space-y-2 marker:text-green-500 mb-6">
                    <li>Naprawa komputerów i laptopów</li>
                    <li>Instalacja i konfiguracja oprogramowania</li>
                    <li>Konfiguracja sieci i routerów</li>
                    <li>Usuwanie wirusów i malware</li>
                    <li>Przywracanie danych z dysków</li>
                    <li>Konsultacje IT i modernizacja</li>
                  </ul>
                  
                  <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-green-800 mb-2">Dojazd do klienta:</h4>
                    <p className="text-sm text-green-700">
                      Wrocław i okolice • Szybka diagnoza • Transparentne ceny
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Dostępny 24/7
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Gwarancja serwisu
                    </span>
                  </div>
                </CardDescription>
                <Link
                  href="/pomoc-komputerowa"
                  className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors group"
                >
                  Umów konsultację
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
                    Jestem <strong>Michał Paśko</strong> - web developer z Wrocławia z ponad 10-letnim 
                    doświadczeniem w tworzeniu stron internetowych i aplikacji webowych.
                  </p>
                  <p className="mb-6">
                    Moja specjalizacja to nowoczesne technologie frontendowe, które gwarantują 
                    wysoką wydajność i doskonałe doświadczenia użytkowników.
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">Moja specjalizacja:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Next.js 15</strong> z App Router</li>
                      <li>• <strong>React 19</strong> i TypeScript</li>
                      <li>• <strong>Tailwind CSS</strong> i Shadcn/UI</li>
                      <li>• <strong>Vercel</strong> i cloud deployment</li>
                    </ul>
                  </div>
                  
                  <h3 className="font-semibold text-gray-800 mb-3">Dlaczego warto ze mną współpracować?</h3>
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
                    10+ lat doświadczenia
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LazyReferences />
      
      <FAQSection />
      
      <CTASection />
    </main>
  );
}