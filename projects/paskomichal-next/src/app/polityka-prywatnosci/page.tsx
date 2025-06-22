export const metadata = {
  title: "Polityka Prywatności | Michał Paśko - Web Developer Wrocław",
  description: "Zapoznaj się z polityką prywatności serwisu paskomichal.pl dotyczącą przetwarzania danych osobowych.",
};

export default function PolitykaPrywatnosciPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Polityka Prywatności</h1>

      <div className="prose max-w-none">
        <p>Ostatnia aktualizacja: 17.06.2025</p>

        <h2>Wprowadzenie</h2>
        <p>
          Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników
          w związku z korzystaniem z serwisu paskomichal.pl.
        </p>

        <h2>Administrator danych</h2>
        <p>
          Administratorem danych osobowych jest Michał Paśko, prowadzący działalność gospodarczą pod adresem we Wrocławiu.
        </p>

        <h2>Cel i zakres zbierania danych</h2>
        <p>
          Dane osobowe Użytkowników są zbierane w celu:
        </p>
        <ul>
          <li>Realizacji usług świadczonych przez Administratora</li>
          <li>Odpowiedzi na zapytania przesłane przez formularz kontaktowy</li>
          <li>Marketingu bezpośredniego własnych usług</li>
          <li>Tworzenia statystyk i analiz poprawiających funkcjonowanie serwisu</li>
        </ul>

        <h2>Rodzaj przetwarzanych danych</h2>
        <p>
          Administrator może przetwarzać następujące dane osobowe Użytkowników:
        </p>
        <ul>
          <li>Imię i nazwisko</li>
          <li>Adres e-mail</li>
          <li>Numer telefonu</li>
          <li>Adres IP</li>
          <li>Inne dane dobrowolnie przekazane przez Użytkownika</li>
        </ul>

        <h2>Prawa Użytkownika</h2>
        <p>
          Każdy Użytkownik ma prawo do:
        </p>
        <ul>
          <li>Dostępu do swoich danych</li>
          <li>Sprostowania danych</li>
          <li>Usunięcia danych</li>
          <li>Ograniczenia przetwarzania</li>
          <li>Przenoszenia danych</li>
          <li>Wniesienia sprzeciwu</li>
          <li>Cofnięcia zgody na przetwarzanie danych osobowych</li>
        </ul>

        <h2>Pliki cookies</h2>
        <p>
          Serwis wykorzystuje pliki cookies (tzw. ciasteczka) w celu poprawnego działania strony, 
          dostosowania zawartości do preferencji użytkownika oraz w celach statystycznych.
        </p>

        <h2>Zabezpieczenie danych</h2>
        <p>
          Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające ochronę 
          przetwarzanych danych osobowych adekwatną do zagrożeń oraz kategorii danych objętych ochroną.
        </p>

        <h2>Kontakt</h2>
        <p>
          W sprawach związanych z danymi osobowymi można kontaktować się z Administratorem pod adresem email: 
          kontakt@paskomichal.pl
        </p>
      </div>
    </main>
  );
}
