"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary/90 to-primary/80 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPgo8L3N2Zz4=')] opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Gotowy na nową stronę internetową?
          </h2>{" "}
          <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
            Skontaktuj się ze mną już dziś i otrzymaj bezpłatną wycenę swojego
            projektu. Stworzę dla Ciebie nowoczesną stronę internetową, która
            będzie wyróżniać się na rynku.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {" "}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary-foreground/90 mb-2">
                  24h
                </div>
                <div className="text-sm">Odpowiedź na zapytanie</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary-foreground/90 mb-2">
                  10+
                </div>
                <div className="text-sm">lat doświadczenia</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary-foreground/90 mb-2">
                  50+
                </div>
                <div className="text-sm">zrealizowanych projektów</div>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {" "}
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-slate-50 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              <Link href="/kontakt">Bezpłatna wycena</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              <Link href="tel:+48881711211">Zadzwoń: 881 711 211</Link>
            </Button>
          </div>
          <div className="mt-8 text-primary-foreground/80 text-sm">
            <p>
              ✅ Bezpłatna konsultacja ✅ Transparentne ceny ✅ Terminowa
              realizacja
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
