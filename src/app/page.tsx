import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedHeroSection } from "@/components/sections/AnimatedHeroSection";

const LazyReferences = dynamic(() => import('@/components/sections/References').then(mod => ({ default: mod.References })), {
  loading: () => <div className="min-h-[300px] animate-pulse bg-gray-100" />,
});

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* Animated Hero Section */}
      <AnimatedHeroSection />

      {/* Usługi Section - Ulepszony */}
      <section id="uslugi" className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            Moje usługi
          </h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <Card className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-blue-500">
              <CardHeader>
                <CardTitle className="text-blue-600 flex items-center gap-3 text-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Tworzenie stron internetowych
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 mb-6">
                  <ul className="list-disc list-inside space-y-2 marker:text-blue-500">
                    <li>Responsywne strony internetowe</li>
                    <li>Sklepy internetowe</li>
                    <li>Strony wizytówkowe</li>
                    <li>Optymalizacja SEO</li>
                    <li>Hosting i domeny</li>
                  </ul>
                </CardDescription>
                <Link
                  href="#portfolio"
                  scroll={false}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                >
                  Zobacz portfolio
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-green-500">
              <CardHeader>
                <CardTitle className="text-green-600 flex items-center gap-3 text-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                     <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Optymalizacja i pozycjonowanie
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 mb-6">
                  <ul className="list-disc list-inside space-y-2 marker:text-green-500">
                    <li>Audyt SEO</li>
                    <li>Optymalizacja prędkości strony</li>
                    <li>Link building</li>
                    <li>Content marketing</li>
                    <li>Analityka internetowa</li>
                  </ul>
                </CardDescription>
                <Link
                  href="/tworzenie-stron#seo"
                  scroll={false}
                  className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors group"
                >
                  Dowiedz się więcej
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <LazyReferences />
    </main>
  );
}