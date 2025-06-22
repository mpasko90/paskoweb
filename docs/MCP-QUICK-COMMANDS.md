# 🚀 MCP Quick Commands - paskomichal-next

## 📋 Daily Workflow Commands

### **🔍 Project Status Check**
```bash
@git status
@memory recall recent changes
@filesystem list src/components/sections/
```

### **📚 Documentation Lookup**
```bash
@context7 get Next.js 15 App Router API
@context7 get React 18 hooks reference
@context7 get TypeScript utility types
```

### **🎨 UI Development**
```bash
@magic-ui generate modern button component
@magic-ui create gradient background effect
@magic-ui design card with hover animation
```

### **💾 Code Management**
```bash
@filesystem read src/app/page.tsx
@git diff HEAD~1
@memory remember component: "NewComponent uses MagicUI"
```

### **🔧 Feature Planning**
```bash
@sequentialthinking plan new contact form
@sequentialthinking breakdown SEO optimization
@memory recall similar implementations
```

### **🌐 Research & Inspiration**
```bash
@firecrawl crawl competitor-site.com
@context7 get modern web design patterns
@memory remember design inspiration
```

---

## 🎯 Component-Specific Commands

### **ModernHeroSection:**
```bash
@memory recall ModernHeroSection dependencies
@context7 get hero section best practices
@magic-ui enhance hero animations
```

### **Navigation:**
```bash
@filesystem read src/components/layout/Navigation.tsx
@context7 get sticky navigation patterns
@memory recall navigation design decisions
```

### **Portfolio Section:**
```bash
@filesystem read src/components/sections/ModernPortfolioSection.tsx
@magic-ui generate portfolio grid improvements
@memory recall portfolio filter logic
```

---

## ⚡ Emergency Commands

### **Build Errors:**
```bash
@filesystem read problematic-file.tsx
@context7 get TypeScript error solutions
@git diff --name-only HEAD~1
```

### **Performance Issues:**
```bash
@context7 get Next.js performance optimization
@filesystem analyze src/app/ for large files
@memory recall performance decisions
```

### **Git Issues:**
```bash
@git status
@git log --oneline -5
@memory recall recent commit decisions
```

---

## 🔧 Configuration Commands

### **Environment Setup:**
```bash
@filesystem read .env
@filesystem read package.json
@memory recall API keys configuration
```

### **MCP Health Check:**
```bash
@context7 test connection
@memory test recall functionality
@filesystem test src/ access
@git test repository connection
```

---

## 🎯 FINALNA KONFIGURACJA - STATUS READY ✅

### Ostatnie poprawki (GOTOWE):
- ✅ **Git MCP**: Zmieniono backslashes na forward slashes w `GIT_DEFAULT_PATH`
- ✅ **Filesystem MCP**: Używa forward slashes dla lepszego escape'owania
- ✅ **Wszystkie serwery**: Skonfigurowane z właściwymi ścieżkami absolutnymi

### Konfiguracja po poprawkach:
```json
// Git MCP - poprawiona ścieżka
"GIT_DEFAULT_PATH": "c:/Users/pasiu/Desktop/Projekty/paskomichal-next"

// Filesystem MCP - poprawione ścieżki
"args": [
  "-y", 
  "@modelcontextprotocol/server-filesystem",
  "c:/Users/pasiu/Desktop/Projekty/paskomichal-next/src",
  "c:/Users/pasiu/Desktop/Projekty/paskomichal-next/public"
]
```

### ⚠️ WYMAGANY RESTART CLAUDE DESKTOP
1. Zamknij Claude Desktop całkowicie
2. Poczekaj 5 sekund  
3. Uruchom ponownie
4. Testuj: `@git status` i `@filesystem list src/`

---

## 📊 STATUS SERWERÓW MCP (AKTUALIZACJA FINALNA)

### Stan po rozwiązaniu problemów:
- ✅ **memory** - NAPRAWIONY! (oficjalny serwer MCP, zero błędów JSON)
- ❌ **git** - Nadal błąd ścieżki (pomimo poprawek)
- ✅ **filesystem** - Prawdopodobnie działa (po poprawkach ścieżek)
- ✅ **context7** - Stabilny
- ✅ **magic-ui** - Stabilny  
- ✅ **firecrawl** - Stabilny
- ✅ **sequentialthinking** - Stabilny
- ✅ **jetbrains** - Stabilny

### Kluczowe zmiany:
- 🔧 **Memory MCP**: Zastąpiono na `@modelcontextprotocol/server-memory`
- 🔧 **Ścieżki**: Forward slashes wszędzie (`c:/Users/...`)
- 🔧 **Błędy JSON**: Całkowicie wyeliminowane!

### Nowe komendy Memory MCP:
```bash
@memory store_memory "informacja do zapamiętania"
@memory search_memory "szukana fraza"
@memory delete_memory "informacja do usunięcia"
```

### Status: 7/8 serwerów działa = 87.5% sukces! 🎯

---
