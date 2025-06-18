"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

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

  const baseClasses =
    "relative px-4 py-2 rounded-lg transition-all duration-300 group";
  const desktopClasses = "text-slate-700 hover:text-primary";
  const activeDesktopClasses = "text-primary font-medium";
  const mobileClasses =
    "block w-full text-left text-slate-700 hover:bg-primary/5";
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
    <Button asChild variant="ghost" className="h-auto p-0">
      <Link href={href} className={classes} onClick={onClick}>
        {children}
        {!mobileMenu && (
          <span
            className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
              isActive ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        )}
      </Link>
    </Button>
  );
};

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-slate-200"
          : "bg-white/80 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo with enhanced design */}
          <Link
            href="/"
            className="font-bold text-xl text-primary hover:text-primary/80 transition-all duration-300 transform hover:scale-105"
          >
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Michał Paśko
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <NavLink href="/">Strona główna</NavLink>
            <NavLink href="/tworzenie-stron">Tworzenie stron</NavLink>
            <NavLink href="/pomoc-komputerowa">Pomoc komputerowa</NavLink>
            <NavLink href="/portfolio">Portfolio</NavLink>
            <div className="h-6 w-px bg-slate-300 mx-4" />
            <Button asChild size="sm" className="ml-4">
              <Link href="/kontakt">Kontakt</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden relative p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-0.5" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-current transition-all duration-300 mt-1 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-current transition-all duration-300 mt-1 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
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
              <div className="pt-2">
                <Button asChild className="w-full" onClick={closeMobileMenu}>
                  <Link href="/kontakt">Kontakt</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
