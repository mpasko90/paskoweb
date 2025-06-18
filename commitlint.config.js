module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // nowa funkcjonalność
        'fix',      // naprawa błędu
        'docs',     // dokumentacja
        'style',    // formatowanie, brakujące średniki, itp.
        'refactor', // refaktoryzacja kodu
        'test',     // dodanie testów
        'chore',    // aktualizacja zadań budowania, konfiguracji menedżera pakietów, itp.
        'perf',     // poprawa wydajności
        'ci',       // zmiany w CI
        'build',    // zmiany w systemie budowania
        'revert'    // cofnięcie zmian
      ]
    ],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-max-length': [2, 'always', 100],
    'body-max-line-length': [2, 'always', 100]
  }
};
