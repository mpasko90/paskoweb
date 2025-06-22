# 🤖 Instrukcje GitHub Copilot - Efektywne wykorzystanie serwerów MCP

## 📋 Przegląd dostępnych serwerów MCP

### 1. **@context7** - Dokumentacja w czasie rzeczywistym
- **Zastosowanie**: Aktualne API Next.js 15, React 18, TypeScript
- **Kiedy używać**: Implementacja nowych feature'ów, optymalizacja kodu
- **Przykład**: `@context7 get latest Next.js 15 App Router patterns`

### 2. **@memory** - Pamięć kontekstu projektu
- **Zastosowanie**: Zapamiętywanie decyzji projektowych, relacji komponentów
- **Kiedy używać**: Przed większymi zmianami, po implementacji feature'ów
- **Przykład**: `@memory remember component relationship: ModernHeroSection uses GradientText`

### 3. **@filesystem** - Bezpieczny dostęp do plików
- **Zastosowanie**: Czytanie/pisanie plików projektu, analiza struktury
- **Kiedy używać**: Refactoring, analiza zależności, backup kodu
- **Przykład**: `@filesystem read src/components/ui/magic-ui.tsx`

### 4. **@git** - Integracja Git/GitHub
- **Zastosowanie**: Status repo, commity, analiza zmian
- **Kiedy używać**: Przed/po implementacji, przegląd kodu
- **Przykład**: `@git status`, `@git diff`, `@git log --oneline -5`

### 5. **@magic-ui** - Generator komponentów UI
- **Zastosowanie**: Tworzenie nowoczesnych komponentów, animacji
- **Kiedy używać**: Nowe sekcje UI, efekty wizualne
- **Przykład**: `@magic-ui generate gradient button with hover animation`

### 6. **@firecrawl** - Web scraping i analiza
- **Zastosowanie**: Research konkurencji, inspiracje designu
- **Kiedy używać**: Analiza trendów, benchmarking
- **Przykład**: `@firecrawl crawl https://competitor-portfolio.com`

### 7. **@sequentialthinking** - Planowanie zadań
- **Zastosowanie**: Podział złożonych feature'ów na etapy
- **Kiedy używać**: Duże refactorings, nowe funkcjonalności
- **Przykład**: `@sequentialthinking plan redesign navigation component`

---

## 🎯 Workflow dla efektywnego wykorzystania MCP

### **Faza 1: Planowanie i Research** 
```bash
# 1. Zacznij od planowania
@sequentialthinking plan new portfolio section implementation

# 2. Sprawdź aktualny stan projektu
@git status
@memory recall recent component changes

# 3. Research najlepszych praktyk
@context7 get latest Next.js component patterns
@firecrawl crawl inspiration-website.com
```

### **Faza 2: Implementacja**
```bash
# 1. Przeanalizuj strukturę plików
@filesystem list src/components/sections/

# 2. Wygeneruj komponent bazowy
@magic-ui generate modern card component with animations

# 3. Zapamiętaj decyzje projektowe
@memory remember design decision: using framer-motion for animations
```

### **Faza 3: Testowanie i Optymalizacja**
```bash
# 1. Sprawdź zmiany
@git diff
@filesystem read updated-component.tsx

# 2. Zweryfikuj zgodność z best practices
@context7 validate React component structure

# 3. Commit zmian
@git add .
@git commit -m "feat: implement new component"
```

---

## 📝 Best Practices dla GitHub Copilot

### **💡 Smart Prompting z MCP**

#### ✅ **DOBRZE**:
```
@context7 get Next.js 15 server components best practices
Based on the documentation, create a server component for blog posts
```

#### ❌ **ŹLE**:
```
Create a blog component
```

### **🔄 Workflow Suggestions**

#### **Przed każdą większą zmianą:**
1. `@memory recall project context`
2. `@git status` - sprawdź aktualny stan
3. `@sequentialthinking plan implementation steps`

#### **Podczas implementacji:**
1. `@context7` - sprawdź aktualne API
2. `@filesystem` - czytaj/analizuj istniejący kod
3. `@magic-ui` - generuj komponenty UI

#### **Po implementacji:**
1. `@memory remember` - zapisz decyzje projektowe
2. `@git add . && @git commit` - zatwierdź zmiany
3. `@context7 validate` - sprawdź zgodność z best practices

---

## 🎨 Specyficzne przypadki użycia dla paskomichal-next

### **Rozwijanie portfolio section:**
```bash
@memory recall ModernPortfolioSection structure
@context7 get Next.js image optimization techniques
@magic-ui generate portfolio card with hover effects
@filesystem read src/components/sections/ModernPortfolioSection.tsx
```

### **SEO optimization:**
```bash
@context7 get Next.js 15 metadata API
@filesystem read src/app/layout.tsx
@memory remember SEO keywords: "web developer wrocław"
```

### **Performance optimization:**
```bash
@context7 get Next.js bundle analysis techniques
@git log --grep="performance"
@filesystem analyze src/app/ bundle size
```

### **New component creation:**
```bash
@sequentialthinking plan new hero section redesign
@magic-ui generate hero with gradient background
@memory remember hero dependencies: GradientText, BorderBeam
@context7 validate component architecture
```

---

## 🚀 Zaawansowane kombinacje MCP

### **Deep Code Analysis:**
```bash
@filesystem list src/components/ --recursive
@memory recall component relationships
@context7 analyze component architecture patterns
```

### **Competitive Research:**
```bash
@firecrawl crawl modern-portfolio-sites.com
@memory remember design inspiration from crawled sites
@magic-ui generate components based on trends
```

### **Project Maintenance:**
```bash
@git log --since="1 week ago"
@memory recall recent changes and decisions
@context7 check for deprecated patterns
@filesystem audit src/ for unused files
```

---

## ⚠️ Limitacje i uwagi

### **Rate Limits:**
- Context7: Maksymalnie 100 zapytań/godzinę
- Firecrawl: Zależny od planu API
- Git: Bez limitów (lokalne repo)

### **Security:**
- Filesystem: Tylko katalogi src/, public/, app/
- Git: Używa Personal Access Token
- Memory: Lokalny plik .mcp-memory.jsonl

### **Performance:**
- Używaj cache: `@memory recall` przed `@context7`
- Batch operations: grupuj podobne zapytania
- Lazy loading: ładuj dokumentację tylko gdy potrzebna

---

## 📊 Monitoring efektywności

### **Metryki do śledzenia:**
- Czas implementacji feature'ów
- Jakość wygenerowanego kodu
- Liczba błędów po implementacji
- Zgodność z best practices

### **Weekly Review:**
```bash
@git log --since="1 week ago" --oneline
@memory recall weekly decisions and learnings
@sequentialthinking validate completed tasks
```

**🎯 Cel: Maksymalizacja produktywności przy zachowaniu jakości kodu i zgodności z nowoczesymi standardami Next.js 15 + TypeScript!**

---

# GitHub Copilot Instructions - paskomichal.pl + MCP

## Workflow Zatwierdzania Zmian (Plan-Propose-Approve)

### ⚠️ OBOWIĄZKOWA PROCEDURA PRZED KAŻDĄ ZMIANĄ:

1. **PLAN** - Przeanalizuj żądanie i zaplanuj zmiany
2. **PROPOSE** - Przedstaw szczegółowy plan użytkownikowi
3. **APPROVE** - Poczekaj na wyraźne zatwierdzenie użytkownika
4. **IMPLEMENT** - Dopiero wtedy wprowadź zmiany

### Format propozycji zmian:
```
## Plan zmiany:
[Opis co ma zostać zmienione i dlaczego]

## Pliki do modyfikacji:
- `path/to/file1.ts` - [opis zmian]
- `path/to/file2.tsx` - [opis zmian]

## Szczegółowy plan działania:
1. [Krok 1]
2. [Krok 2] 
3. [Krok 3]

## Potencjalne ryzyka:
- [Ryzyko 1]
- [Ryzyko 2]

Czy zatwierdzasz wprowadzenie tych zmian?
```

### Wyjątki od tej zasady:
- Tylko czytanie plików i analiza kodu
- Odpowiedzi na pytania bez modyfikacji kodu
- Proste poprawki formatowania na wyraźne żądanie użytkownika
- Sytuacje awaryjne wyraźnie zidentyfikowane przez użytkownika
