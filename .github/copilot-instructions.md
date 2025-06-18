# GitHub Copilot Instructions - paskomichal.pl

## Stack technologiczny
- Projekt wykorzystuje Next.js 15 z App Router (NIGDY nie sugeruj Pages Router)
- TypeScript jako główny język
- Tailwind CSS do stylowania
- Shadcn/UI do komponentów
- React Server Components jako domyślne podejście

## Zasady kodowania
- Używaj TypeScript dla wszystkich plików
- Preferuj interfejsy zamiast typów
- Używaj funkcjonalnych komponentów React
- Nazwy plików: kebab-case dla katalogów, PascalCase dla komponentów
- Eksportuj komponenty z użyciem named exports

## Konwencje Next.js 15
- Wykorzystuj App Router i file-system routing
- Minimalizuj użycie 'use client' - preferuj Server Components
- Używaj next/image do optymalizacji obrazów
- Implementuj Metadata API zamiast next-seo
- Strukturalne dane JSON-LD dla SEO

## Stylowanie i UI
- Mobile-first approach z Tailwind CSS
- Używaj Shadcn/UI jako podstawy komponentów
- Implementuj responsive design
- Optymalizuj dla Core Web Vitals

## Wydajność i SEO
- Lazy loading dla nie-krytycznych komponentów
- Optymalizacja obrazów (WebP, AVIF)
- Proper heading hierarchy
- Semantyczny HTML
- Meta descriptions i Open Graph tags

## Bezpieczeństwo i jakość
- Walidacja wszystkich inputów
- Sanityzacja danych użytkownika
- Używaj ESLint i Prettier
- Testy dla nowych funkcjonalności
- Conventional commits format
