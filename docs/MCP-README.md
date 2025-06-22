# 🤖 MCP Configuration - paskomichal-next

## Przegląd serwerów Model Context Protocol (MCP)

Ten projekt wykorzystuje 8 serwerów MCP dla maksymalnej efektywności developmentu Next.js 15 portfolio:

### 📚 **Dokumentacja i pliki**

- [📋 Główne instrukcje dla Copilot](./MCP-COPILOT-INSTRUCTIONS.md)
- [⚡ Szybkie komendy](./MCP-QUICK-COMMANDS.md) 
- [🎯 Konkretne przykłady](./MCP-EXAMPLES.md)

### 🔧 **Skonfigurowane serwery MCP**

| Serwer | Pakiet | Status | Opis |
|--------|--------|--------|------|
| **context7** | `@upstash/context7-mcp` | ✅ | Dokumentacja Next.js 15, React 18 |
| **memory** | `@z503722728/mcp-knowledge-graph` | ✅ | Pamięć kontekstu projektu |
| **filesystem** | `@modelcontextprotocol/server-filesystem` | ✅ | Dostęp do plików projektu |
| **git** | `git-mcp-server` | ✅ | Integracja Git/GitHub |
| **magic-ui** | `@magicuidesign/mcp` | ✅ | Generator komponentów UI |
| **firecrawl** | `firecrawl-mcp` | ✅ | Web scraping i analiza |
| **sequentialthinking** | `@modelcontextprotocol/server-sequential-thinking` | ✅ | Planowanie zadań |
| **jetbrains** | `@jetbrains/mcp-proxy` | ✅ | Integracja JetBrains |

### 🚀 **Quick Start**

1. **Restart Claude Desktop** - aby załadować nowe serwery
2. **Sprawdź dostępność**: Powinieneś zobaczyć ikony serwerów w dolnej części Claude
3. **Test podstawowych funkcji**:
   ```bash
   @filesystem list src/components/
   @git status
   @memory recall project context
   ```

### 💡 **Najważniejsze komendy**

```bash
# Daily workflow
@git status && @memory recall recent changes

# Research i dokumentacja  
@context7 get Next.js 15 best practices

# Generowanie komponentów
@magic-ui create modern card component

# Planowanie feature'ów
@sequentialthinking plan new portfolio section
```

### ⚙️ **Konfiguracja środowiska**

#### Zmienne środowiskowe (`.env`):
- `GITHUB_PERSONAL_ACCESS_TOKEN` - ✅ Skonfigurowany
- `FIRECRAWL_API_KEY` - ✅ Skonfigurowany  
- `MEMORY_FILE_PATH` - ✅ `./.mcp-memory.jsonl`

#### Pliki konfiguracyjne:
- **Claude Desktop**: `%APPDATA%\Claude\claude_desktop_config.json`
- **Pamięć MCP**: `./.mcp-memory.jsonl`
- **Zmienne env**: `./.env`

### 📊 **Monitoring i troubleshooting**

#### Sprawdzenie statusu serwerów:

```bash
@context7 test connection
@memory test recall
@filesystem test src/ access
@git test repository
```

#### Typowe problemy:

1. **Serwer się nie ładuje**: Restart Claude Desktop
2. **Błąd permisji**: Sprawdź klucze API w `.env`
3. **Błąd filesystem**: Sprawdź ścieżki w konfiguracji

#### ⚠️ **Filesystem MCP - Known Issues:**

**Problem**: `Error: ENOENT: no such file or directory, stat '--allowed-directories'`

**Rozwiązanie**: Serwer filesystem akceptuje tylko ścieżki katalogów jako argumenty (zalecane forward slashes):

```json
"filesystem": {
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-filesystem",
    "c:/full/path/to/project/src",
    "c:/full/path/to/project/public"
  ]
}
```

**❌ Niepoprawne**: Używanie flag jak `--allowed-directories`
**✅ Poprawne**: Bezpośrednie podanie ścieżek katalogów (forward slashes zalecane)

#### ⚠️ **Git MCP - Known Issues:**

**Problem**: `Invalid GIT_DEFAULT_PATH: Path must be absolute. Received: .`

**Rozwiązanie**: Serwer git-mcp wymaga absolutnej ścieżki do repozytorium (zalecane forward slashes):

```json
"git": {
  "command": "npx",
  "args": ["-y", "git-mcp-server"],
  "env": {
    "GIT_DEFAULT_PATH": "c:/full/path/to/your/project",
    "GITHUB_PERSONAL_ACCESS_TOKEN": "your_token_here"
  }
}
```

**❌ Niepoprawne**: `"GIT_DEFAULT_PATH": "."`
**✅ Poprawne**: Użyj forward slashes zamiast backslashes (lepsze escape'owanie)
**✅ Poprawne**: `"GIT_DEFAULT_PATH": "c:\\Users\\user\\Desktop\\project"`

#### 4. **Memory MCP - rozwiązano błędy JSON ✅**

```bash
# Problem: "Unexpected token 'K', "[KnowledgeG"... is not valid JSON"
# Rozwiązanie: Zastąpiono niestabilny pakiet oficjalnym serwerem MCP

# Stara konfiguracja (problematyczna):
"args": ["-y", "@z503722728/mcp-knowledge-graph"]

# Nowa konfiguracja (stabilna):
"args": ["-y", "@modelcontextprotocol/server-memory"]
"alwaysAllow": ["store_memory", "search_memory", "delete_memory"]

# Status: ✅ Błędy JSON wyeliminowane!
```

#### Sprawdzenie logów MCP:

**Lokalizacja logów Claude Desktop:**
- Windows: `%APPDATA%\Claude\logs\`
- Pliki: `mcp-*.log`

**Typowe błędy i rozwiązania:**

1. **Server disconnected** → Restart Claude Desktop
2. **ENOENT errors** → Sprawdź ścieżki w konfiguracji  
3. **Authentication errors** → Sprawdź klucze API w `.env`
4. **Package not found** → Sprawdź czy pakiet jest zainstalowany globalnie

```bash
# Sprawdzenie zainstalowanych pakietów MCP
npm list -g | grep mcp
npm list -g | grep @modelcontextprotocol
```

### 🎯 **ROI - Return on Investment**

**Przed MCP:**
- Ręczne wyszukiwanie dokumentacji: ~15 min/task
- Analiza struktury plików: ~10 min/task  
- Planowanie feature'ów: ~30 min/feature

**Po MCP:**
- Dokumentacja: ~2 min/task (`@context7`)
- Analiza plików: ~1 min/task (`@filesystem`)
- Planowanie: ~5 min/feature (`@sequentialthinking`)

**Oszczędność czasu: ~75% na typowych zadaniach developmentu!**

### 📈 **Wykorzystanie w projekcie**

#### Już wykorzystane w:
- ✅ Redesign nawigacji (planning + implementation)
- ✅ ModernHeroSection (UI generation + optimization)
- ✅ ModernPortfolioSection (component architecture)
- ✅ Footer redesign (modern patterns research)

#### Planowane wykorzystanie:
- 🔄 Testimonials section
- 🔄 Contact form optimization  
- 🔄 SEO enhancements
- 🔄 Performance optimization

### 🔮 **Przyszłe rozszerzenia**

Potencjalne dodatkowe serwery MCP:
- **Database MCP** - dla CMS integration
- **Analytics MCP** - dla performance monitoring
- **AI Image MCP** - dla automatycznej optymalizacji obrazów
- **Testing MCP** - dla automatycznego testowania komponentów

---

**🎯 Cel: Stworzenie najbardziej efektywnego środowiska developmentu dla portfolio Next.js 15 z wykorzystaniem najnowszych technologii AI i automatyzacji!**

**📞 Kontakt**: Jeśli masz pytania o konfigurację MCP, sprawdź dokumentację lub skontaktuj się z maintainerem projektu.
