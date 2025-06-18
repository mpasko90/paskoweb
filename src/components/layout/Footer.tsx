import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-slate-800">
              Michał Paśko
            </h3>
            <p className="text-slate-600 mb-4">
              Profesjonalne tworzenie stron internetowych i pomoc komputerowa.
            </p>
          </div>

          {/* Szybkie linki */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-slate-800">
              Szybkie linki
            </h3>
            <ul className="space-y-2">
              <li>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start p-0 h-auto text-slate-600 hover:text-primary"
                >
                  <Link href="/">Strona główna</Link>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start p-0 h-auto text-slate-600 hover:text-primary"
                >
                  <Link href="/tworzenie-stron">Tworzenie stron</Link>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start p-0 h-auto text-slate-600 hover:text-primary"
                >
                  <Link href="/pomoc-komputerowa">Pomoc komputerowa</Link>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start p-0 h-auto text-slate-600 hover:text-primary"
                >
                  <Link href="/portfolio">Portfolio</Link>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start p-0 h-auto text-slate-600 hover:text-primary"
                >
                  <Link href="/kontakt">Kontakt</Link>
                </Button>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-slate-800">Kontakt</h3>
            <address className="not-italic text-slate-600 space-y-2">
              <p>Email: kontakt@paskomichal.pl</p>
              <p>Telefon: +48 XXX XXX XXX</p>
              <p>Warszawa, Polska</p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Michał Paśko. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/polityka-prywatnosci"
              className="text-slate-500 text-sm hover:text-primary transition-colors"
            >
              Polityka prywatności
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
