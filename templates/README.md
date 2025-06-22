# Szablony Next.js

W tym katalogu umieszczaj szablony projektów, które będą służyć jako punkt wyjścia do tworzenia nowych aplikacji.

## Zalecana struktura szablonu

```
template-name/
├── .vscode/             # Konfiguracja dla VS Code
├── public/              # Statyczne pliki
├── src/                 # Kod źródłowy
├── next.config.ts       # Konfiguracja Next.js
├── package.json         # Zależności i skrypty
├── tailwind.config.ts   # Konfiguracja Tailwind CSS
├── tsconfig.json        # Konfiguracja TypeScript
└── README.md            # Dokumentacja szablonu
```

## Tworzenie nowego szablonu

1. Utwórz nowy katalog w `templates/`
2. Dodaj podstawowe pliki konfiguracyjne
3. Przygotuj przykładowe komponenty i strukturę
4. Dołącz plik README.md z opisem i instrukcją użycia

## Przykład użycia

```bash
# Kopiowanie szablonu do nowego projektu
cp -r templates/next-tailwind-template projects/my-new-project

# Przejście do katalogu nowego projektu
cd projects/my-new-project

# Instalacja zależności
npm install

# Uruchomienie projektu
npm run dev
```