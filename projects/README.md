# Projekty Next.js

W tym katalogu znajdują się wszystkie projekty aplikacji, z których każdy ma własną strukturę i zależności.

## Struktura projektów

Każdy projekt powinien być samodzielny i zawierać wszystkie niezbędne pliki konfiguracyjne:

```
project-name/
├── public/              # Statyczne pliki
├── src/                 # Kod źródłowy
├── next.config.ts       # Konfiguracja Next.js
├── package.json         # Zależności i skrypty
├── tailwind.config.ts   # Konfiguracja Tailwind CSS
├── tsconfig.json        # Konfiguracja TypeScript
└── README.md            # Dokumentacja projektu
```

## Dostępne projekty

### paskomichal-next

Strona internetowa paskomichal.pl zbudowana przy użyciu Next.js 15, TypeScript, Tailwind CSS i Shadcn/UI.

## Tworzenie nowego projektu

1. Stwórz nowy katalog w `projects/`:
   ```bash
   mkdir projects/my-new-project
   ```

2. Zainicjuj projekt Next.js:
   ```bash
   cd projects/my-new-project
   npx create-next-app .
   ```

3. Alternatywnie, skopiuj jeden z szablonów z katalogu `templates/`:
   ```bash
   cp -r templates/next-tailwind-template projects/my-new-project
   ```

## Dobre praktyki

- Każdy projekt powinien być niezależny od innych
- Zachowaj spójność w strukturze katalogów między projektami
- Używaj konwencji nazewnictwa zgodnych z Next.js i TypeScript
- Twórz szczegółową dokumentację dla każdego projektu