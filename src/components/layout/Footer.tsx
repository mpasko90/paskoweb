import Link from 'next/link';
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Michał Paśko</h3>
            <p className="text-gray-600 mb-4">
              Profesjonalne tworzenie stron internetowych i pomoc komputerowa.
            </p>
          </div>

          {/* Szybkie linki */}
          <div>
            <h3 className="font-bold text-lg mb-4">Szybkie linki</h3>
            <ul className="space-y-2">
              <li><Button asChild><Link href="/">Strona główna</Link></Button></li>
              <li><Button asChild><Link href="/tworzenie-stron">Tworzenie stron</Link></Button></li>
              <li><Button asChild><Link href="/pomoc-komputerowa">Pomoc komputerowa</Link></Button></li>
              <li><Button asChild><Link href="/portfolio">Portfolio</Link></Button></li>
              <li><Button asChild><Link href="/kontakt">Kontakt</Link></Button></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kontakt</h3>
            <address className="not-italic text-gray-600">
              <p className="mb-2">Email: kontakt@paskomichal.pl</p>
              <p className="mb-2">Telefon: +48 XXX XXX XXX</p>
              <p>Warszawa, Polska</p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Michał Paśko. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex space-x-4">
            <Link href="/polityka-prywatnosci" className="text-gray-500 text-sm hover:text-blue-600 transition">
              Polityka prywatności
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
