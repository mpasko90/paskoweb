# Workspace projektów Next.js

Repozytorium zawiera uporządkowaną strukturę przestrzeni roboczej dla projektów bazujących na Next.js, TypeScript i Tailwind CSS.

## Struktura katalogów

```
├── .github/                # Konfiguracja GitHub i szablony
├── docs/                   # Dokumentacja projektowa
├── projects/               # Projekty aplikacji
│   ├── paskomichal-next/   # Projekt strony paskomichal.pl
│   └── ...                 # Miejsce na kolejne projekty
├── scripts/                # Skrypty pomocnicze
├── templates/              # Szablony do tworzenia nowych projektów
└── README.md               # Ten plik
```

## Dostępne projekty

### paskomichal-next

Strona internetowa dostępna pod adresem paskomichal.pl, zbudowana przy użyciu:

- Next.js 15 z App Router
- TypeScript
- Tailwind CSS
- Shadcn/UI
- React Server Components

Aby uruchomić projekt:

1. Przejdź do katalogu projektu:

   ```bash
   cd projects/paskomichal-next
   ```

2. Zainstaluj zależności:

   ```bash
   npm install
   ```

3. Uruchom serwer deweloperski:

   ```bash
   npm run dev
   ```

## Tworzenie nowego projektu

Aby stworzyć nowy projekt, możesz:

1. Skopiować istniejący szablon z katalogu `templates/`
2. Skopiować istniejący projekt i dostosować go do swoich potrzeb
3. Utworzyć nowy projekt od podstaw w katalogu `projects/[nazwa-projektu]/`

## Dobre praktyki

- Utrzymuj wspólną dokumentację w katalogu `docs/`
- Używaj konwencji nazewnictwa zgodnych z Next.js i TypeScript
- Stosuj się do instrukcji kodowania zawartych w plikach dokumentacji
- Stwórz własne szablony projektów dla przyspieszenia pracy
- Utrzymuj aktualne wersje zależności w każdym projekcie

## Narzędzia i skrypty

W katalogu `scripts/` znajdują się pomocne skrypty:

- `install-mcp.ps1` - instalacja Model Context Protocol dla Windows
- `install-mcp.sh` - instalacja Model Context Protocol dla Linux/macOS

## Dokumentacja

Szczegółowa dokumentacja projektowa znajduje się w katalogu `docs/`:

- Instrukcje kodowania i konwencje
- Opisy konfiguracji projektu
- Plany SEO i zawartości
- Podsumowania i raporty z implementacji
 
 
 
 # #   U w a g a :   D u p l i k a c j a   p l i k � w 
 
 W   t r a k c i e   o r g a n i z a c j i   r e p o z y t o r i u m   z a u w a |o n o   d u p l i k a c j   k a t a l o g � w : 
 -   K a t a l o g   s r c /   w y s t p u j e   z a r � w n o   w   k o r z e n i u   j a k   i   w   p r o j e c t s / p a s k o m i c h a l - n e x t / 
 -   K a t a l o g   p u b l i c /   w y s t p u j e   z a r � w n o   w   k o r z e n i u   j a k   i   w   p r o j e c t s / p a s k o m i c h a l - n e x t / 
 
 T e   p l i k i   s   i d e n t y c z n e   i   p o w i n n y   z n a j d o w a   s i   t y l k o   w   p r o j e c t s / p a s k o m i c h a l - n e x t / ,   z g o d n i e   z   o b e c n   s t r u k t u r   p r o j e k t u . 
 
 
