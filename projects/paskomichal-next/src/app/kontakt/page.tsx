export const metadata = {
  title: "Kontakt | Michał Paśko - Web Developer Wrocław",
  description: "Skontaktuj się ze mną w sprawie tworzenia stron internetowych, pomocy komputerowej lub innych usług IT.",
};

import { Button } from "@/components/ui/button";

export default function KontaktPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Kontakt</h1>
      <p className="text-lg mb-8 max-w-3xl">
        Skontaktuj się ze mną w sprawie tworzenia stron internetowych, pomocy komputerowej lub innych usług IT.
      </p>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="text-gray-700">
          <p className="mb-3 text-lg">
            <strong>Telefon:</strong> <a href="tel:+48123456789" className="text-blue-600 hover:underline">+48 123 456 789</a>
          </p>
          <p className="mb-3 text-lg">
            <strong>Email:</strong> <a href="mailto:kontakt@paskomichal.pl" className="text-blue-600 hover:underline">kontakt@paskomichal.pl</a>
          </p>
          <p className="text-lg">
            <strong>Lokalizacja:</strong> Wrocław, Dolnośląskie
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Formularz kontaktowy</h3>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Imię i nazwisko</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Telefon</label>
              <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <Button type="submit" className="w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Wyślij zapytanie
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
