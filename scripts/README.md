# Skrypty pomocnicze

W tym katalogu znajdują się skrypty pomocnicze do automatyzacji zadań związanych z projektami.

## Dostępne skrypty

### MCP (Model Context Protocol)

- `install-mcp.ps1` - Skrypt instalacyjny dla MCP na Windows (PowerShell)
- `install-mcp.sh` - Skrypt instalacyjny dla MCP na Linux/macOS (Bash)

## Używanie skryptów

### Instalacja MCP na Windows

```powershell
cd scripts
.\install-mcp.ps1
```

### Instalacja MCP na Linux/macOS

```bash
cd scripts
chmod +x install-mcp.sh
./install-mcp.sh
```

## Tworzenie nowych skryptów

Nowe skrypty powinny:
1. Zawierać komentarz opisujący ich działanie
2. Obsługiwać błędy i wyświetlać czytelne komunikaty
3. Zapewniać możliwość użycia w trybie "dry-run" (jeśli dotyczy)
4. Być umieszczone w odpowiednim podkatalogu (jeśli potrzeba kategoryzacji)