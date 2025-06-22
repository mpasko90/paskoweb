# GitHub Setup Instructions

## Krok 1: Utworzenie repozytorium na GitHub

1. Przejdź na https://github.com/new
2. Ustaw nazwę repozytorium: `paskomichal-next`
3. Dodaj opis: "Portfolio i strona biznesowa Michała Paśko - Next.js 15, TypeScript, Tailwind CSS"
4. Ustaw jako publiczne
5. **NIE** dodawaj README, .gitignore lub LICENSE (już mamy te pliki)
6. Kliknij "Create repository"

## Krok 2: Połączenie lokalnego repo z GitHub

Uruchom następujące komendy w terminalu (zastąp YOUR_USERNAME swoim użytkownikiem GitHub):

```bash
# Dodaj zdalny origin
git remote add origin https://github.com/YOUR_USERNAME/paskomichal-next.git

# Zmień nazwę gałęzi na main
git branch -M main

# Wypchnij kod na GitHub
git push -u origin main
```

## Krok 3: Vercel Deployment

1. Zaloguj się na https://vercel.com
2. Kliknij "New Project"
3. Zaimportuj repozytorium GitHub `paskomichal-next`
4. Vercel automatycznie wykryje Next.js
5. Kliknij "Deploy"

### Konfiguracja domeny w Vercel (opcjonalnie)

1. W panelu projektu na Vercel przejdź do Settings → Domains
2. Dodaj domenę `paskomichal.pl`
3. Skonfiguruj DNS zgodnie z instrukcjami Vercel:
   - Typ A: `@` → IP adres Vercel
   - Typ CNAME: `www` → `cname.vercel-dns.com`

## Krok 4: Kontynuacja developmentu

Po skonfigurowaniu GitHub i Vercel:

```bash
# Sprawdź status
git status

# Następne commity (z działającymi hooks)
git add .
git commit -m "feat: opis zmian"
git push
```

## Przydatne komendy Git

```bash
# Sprawdzenie połączenia z GitHub
git remote -v

# Historia commitów
git log --oneline

# Status plików
git status

# Sprawdzenie różnic
git diff
```

## Auto-deployment

Po połączeniu z GitHub, każdy push na branch `main` automatycznie:

1. Uruchomi build na Vercel
2. Wdroży aplikację na produkcję
3. Udostępni URL podglądu dla pull requestów
