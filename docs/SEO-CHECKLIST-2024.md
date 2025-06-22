# Kompleksowa Checklista SEO - Projekt paskomichal.pl (2024-2025)

## Wprowadzenie

Niniejszy dokument stanowi kompleksową checklistę zadań SEO do wdrożenia i weryfikacji w projekcie `paskomichal-next`. Celem jest systematyczne monitorowanie postępów i zapewnienie, że wszystkie kluczowe aspekty technicznego i contentowego SEO zostały zaimplementowane zgodnie z najlepszymi praktykami na rok 2024/2025.

---

### 1. Implementacja Sitemap XML

- **Status:** ✅ Zakończone
- **Co zostało zrobione:**
  - Utworzono dynamiczną mapę strony, która automatycznie uwzględnia wszystkie strony statyczne oraz dynamicznie generowane wpisy blogowe.
  - Zdefiniowano `lastModified`, `changeFrequency` i `priority` dla każdego typu URL, aby dać wskazówki crawlerom Google.
- **Miejsce implementacji:** `src/app/sitemap.ts`
- **Priorytet:** Wysoki

### 2. Implementacja robots.txt

- **Status:** ✅ Zakończone
- **Co zostało zrobione:**
  - Utworzono plik `robots.txt`, który zezwala na indeksowanie całej zawartości serwisu przez wszystkie boty (`User-agent: *`, `Allow: /`).
  - Dodano bezpośredni link do mapy strony (`sitemap.xml`), co ułatwia jej odnalezienie przez roboty.
- **Miejsce implementacji:** `src/app/robots.ts`
- **Priorytet:** Wysoki
