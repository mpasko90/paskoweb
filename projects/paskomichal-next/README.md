# Paskomichal.pl Website

Oficjalna strona paskomichal.pl zbudowana przy użyciu nowoczesnych technologii web.

## Technologie

- Next.js 15 z App Router
- TypeScript
- Tailwind CSS
- Shadcn/UI
- React Server Components

## Struktura projektu

```
paskomichal-next/
├── public/              # Statyczne pliki
│   └── images/          # Obrazy i zasoby graficzne
├── src/
│   ├── app/             # App Router i strony
│   ├── components/      # Komponenty React
│   └── lib/             # Funkcje pomocnicze
├── next.config.ts       # Konfiguracja Next.js
├── package.json         # Zależności i skrypty
├── tailwind.config.ts   # Konfiguracja Tailwind CSS
└── tsconfig.json        # Konfiguracja TypeScript
```

## Uruchamianie lokalne

1. Zainstaluj zależności:
   ```bash
   npm install
   ```

2. Uruchom serwer deweloperski:
   ```bash
   npm run dev
   ```

3. Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

## Budowanie produkcyjne

```bash
npm run build
npm run start
```

## Strategie SEO

Strona implementuje:
- Server-side rendering dla lepszej indeksacji
- Metadata API dla tytułów i opisów
- Strukturalne dane JSON-LD
- Semantyczny HTML z prawidłową hierarchią nagłówków

## Wydajność

- Optymalizacja obrazów przez next/image
- Lazy loading komponentów
- Prefetching istotnych zasobów
- Zoptymalizowane Core Web Vitals