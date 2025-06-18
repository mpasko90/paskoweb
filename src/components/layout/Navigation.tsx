"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  mobileMenu?: boolean;
  onClick?: () => void;
}

const NavLink = ({ href, children, mobileMenu, onClick }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(href));

  const baseClasses = "px-3 py-2 rounded-md transition-all duration-200";
  const desktopClasses = "text-slate-600 hover:text-primary hover:bg-primary/5";
  const activeDesktopClasses = "text-primary bg-primary/10 font-medium";
  const mobileClasses =
    "block w-full text-left text-slate-600 hover:bg-slate-50";
  const activeMobileClasses = "text-primary bg-primary/10 font-medium";

  const classes = [
    baseClasses,
    mobileMenu
      ? `${mobileClasses} ${isActive ? activeMobileClasses : ""}`
      : `${desktopClasses} ${isActive ? activeDesktopClasses : ""}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Button asChild variant="ghost">
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    </Button>
  );
};

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-xl text-primary hover:text-primary/80 transition-colors"
          >
            Michał Paśko
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 items-center">
            <NavLink href="/">Strona główna</NavLink>
            <NavLink href="/tworzenie-stron">Tworzenie stron</NavLink>
            <NavLink href="/pomoc-komputerowa">Pomoc komputerowa</NavLink>
            <NavLink href="/portfolio">Portfolio</NavLink>
            <NavLink href="/kontakt">Kontakt</NavLink>
          </nav>{" "}
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>{" "}
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-slate-100 shadow-lg">
          <div className="container mx-auto px-4 py-2 space-y-1">
            <NavLink href="/" mobileMenu onClick={closeMobileMenu}>
              Strona główna
            </NavLink>
            <NavLink
              href="/tworzenie-stron"
              mobileMenu
              onClick={closeMobileMenu}
            >
              Tworzenie stron
            </NavLink>
            <NavLink
              href="/pomoc-komputerowa"
              mobileMenu
              onClick={closeMobileMenu}
            >
              Pomoc komputerowa
            </NavLink>
            <NavLink href="/portfolio" mobileMenu onClick={closeMobileMenu}>
              Portfolio
            </NavLink>
            <NavLink href="/kontakt" mobileMenu onClick={closeMobileMenu}>
              Kontakt
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};
