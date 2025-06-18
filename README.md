# Portfolio & Strona Biznesowa - Michał Paśko

Nowoczesna strona internetowa pełniąca funkcję portfolio oraz wizytówki biznesowej, zbudowana w oparciu o najnowsze technologie webowe. Projekt wykorzystuje Next.js 15 z App Router, TypeScript oraz Tailwind CSS z komponentami Shadcn/UI.

## Architektura i Technologie

Aplikacja została zaprojektowana z myślą o wydajności, skalowalności i optymalizacji SEO, wykorzystując architekturę React Server Components.

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Język**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Komponenty UI**: [Shadcn/UI](https://ui.shadcn.com/)
- **Linting**: [ESLint](https://eslint.org/)
- **Formatowanie kodu**: [Prettier](https://prettier.io/)

### Struktura Projektu

Struktura katalogów jest oparta o najlepsze praktyki dla aplikacji Next.js:

```
/public
  /images         # Zoptymalizowane zasoby graficzne (WebP)
/src
  /app            # Routing, layouty i strony (App Router)
  /components     # Komponenty UI (Shadcn/UI, layout, sekcje)
  /lib            # Funkcje pomocnicze (np. utils.ts)
...               # Pliki konfiguracyjne (tailwind, postcss, tsconfig, etc.)
```

## Uruchomienie Projektu

1.  **Instalacja zależności:**

    ```bash
    npm install
    ```

2.  **Konfiguracja zmiennych środowiskowych:**
    Utwórz plik `.env.local` na podstawie `.env.example` (jeśli istnieje) i uzupełnij wymagane klucze API.

3.  **Uruchomienie serwera deweloperskiego:**
    ```bash
    npm run dev
    ```
    Aplikacja będzie dostępna pod adresem [http://localhost:3000](http://localhost:3000).

## Dostępne Skrypty

- `npm run dev`: Uruchamia aplikację w trybie deweloperskim.
- `npm run build`: Buduje aplikację do wersji produkcyjnej.
- `npm run start`: Uruchamia zbudowaną aplikację.
- `npm run lint`: Uruchamia analizę kodu za pomocą ESLint.

## Deployment

Projekt jest wdrażany na platformie Vercel i automatycznie budowany po każdym pushu do gałęzi `main`.

### Pre-commit Hooks

Projekt wykorzystuje Husky i lint-staged do automatycznej kontroli jakości kodu:

- **Pre-commit**: Automatyczne formatowanie i linting
- **Commit-msg**: Walidacja konwencjonalnych commitów

#### Przykłady poprawnych commitów

```bash
git commit -m "feat: dodanie animowanej sekcji hero"
git commit -m "fix: naprawa responsywności na mobile"
git commit -m "docs: aktualizacja README"
git commit -m "style: formatowanie kodu"
```

## Deployment Commands

```bash
# Development
npm run dev

# Production build
npm run build
npm run start

# Linting & formatowanie
npm run lint
npm run lint:fix
npm run format
npm run type-check
```
