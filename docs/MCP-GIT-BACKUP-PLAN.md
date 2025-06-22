# 🔧 BACKUP PLAN - Git MCP Troubleshooting

## Jeśli git MCP nadal nie działa po restarcie

### Opcja 1: Czasowe wyłączenie git MCP
```json
"git": {
  "command": "npx",
  "args": ["-y", "git-mcp-server"],
  "env": {
    "GIT_DEFAULT_PATH": "c:/Users/pasiu/Desktop/Projekty/paskomichal-next",
    "GITHUB_PERSONAL_ACCESS_TOKEN": "github_pat_..."
  },
  "disabled": true,  // ← Dodaj to pole!
  "alwaysAllow": ["git_status", "git_log", "git_diff", "github_issues"],
  "description": "Pełna integracja z Git i GitHub (tymczasowo wyłączone)"
}
```

### Opcja 2: Alternatywne podejście do ścieżki
```json
// Spróbuj względnej ścieżki z katalogu home
"GIT_DEFAULT_PATH": "~/Desktop/Projekty/paskomichal-next"

// Lub użyj zmiennej środowiskowej
"GIT_DEFAULT_PATH": "%USERPROFILE%/Desktop/Projekty/paskomichal-next"
```

### Opcja 3: Sprawdzenie alternatywnego serwera git
```bash
# Sprawdź czy dostępny jest inny git MCP server
npm search git-mcp
npm list -g | grep git

# Ewentualnie użyj innego git MCP
"command": "npx",
"args": ["-y", "@modelcontextprotocol/server-git"]
```

### Opcja 4: Manual Git integration (fallback)
```bash
# Jeśli MCP Git nie działa, używaj git bezpośrednio:
git status
git log --oneline -10  
git diff
git add .
git commit -m "message"
git push
```

## 📋 Checklist po problemach z git MCP:

- [ ] Sprawdzono logi po restarcie Claude Desktop
- [ ] Przetestowano alternative ścieżki (relative, env vars)
- [ ] Rozważono tymczasowe wyłączenie (`"disabled": true`)
- [ ] Sprawdzono dostępność alternatywnych git MCP servers
- [ ] Przygotowano manual workflow jako backup

## 🎯 Cel: 7/8 serwerów MCP działających = 87.5% coverage!

**Memory + Context7 + Filesystem + Magic-UI + Firecrawl + Sequential + JetBrains** = Wystarczające dla pełnej produktywności!

Git można tymczasowo zastąpić manual commands w terminalu.

---

**Po rozwiązaniu problemu git MCP - przywróć `"disabled": false` i usuń ten backup plan!**
