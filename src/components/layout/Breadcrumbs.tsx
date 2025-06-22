"use client";

import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

const pathNameMap: Record<string, string> = {
  "/": "Strona główna",
  "/tworzenie-stron": "Tworzenie stron",
  "/pomoc-komputerowa": "Pomoc komputerowa",
  "/portfolio": "Portfolio",
  "/blog": "Blog",
  "/kontakt": "Kontakt",
  "/polityka-prywatnosci": "Polityka prywatności",
};

export function Breadcrumbs() {
  return (
    <Suspense fallback={null}>
      <BreadcrumbsContent />
    </Suspense>
  );
}

function BreadcrumbsContent() {
  const pathname = usePathname();

  // Nie wyświetlaj breadcrumbów na stronie głównej i artykułach bloga (mają własne)
  if (pathname === "/" || pathname.startsWith("/blog/")) {
    return null;
  }

  const pathSegments = pathname.split("/").filter(Boolean);
  const items: BreadcrumbItem[] = [];

  // Zawsze dodaj stronę główną
  items.push({
    name: "Strona główna",
    url: "https://paskomichal.pl/",
  }); // Buduj ścieżkę breadcrumbów
  let currentPath = "";
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;

    let name = pathNameMap[currentPath];

    // Jeśli to artykuł na blogu
    if (currentPath.startsWith("/blog/") && segment !== "blog") {
      // Dla artykułów na blogu używamy slug jako nazwy (będzie to później zastąpione rzeczywistym tytułem)
      name = segment
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
    }

    // Jeśli nie mamy nazwy w mapie, generuj z segmentu
    if (!name) {
      name = segment
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
    }

    items.push({
      name,
      url: `https://paskomichal.pl${currentPath}`,
    });
  });

  return (
    <div className="bg-gray-50/50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center space-x-2 text-sm"
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <div key={item.url} className="flex items-center">
                {index > 0 && (
                  <svg
                    className="w-4 h-4 text-gray-400 mx-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m9 18 6-6-6-6"
                    />
                  </svg>
                )}
                {isLast ? (
                  <span
                    className="text-gray-900 font-medium"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url.replace("https://paskomichal.pl", "")}
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
        <BreadcrumbSchema items={items} />
      </div>
    </div>
  );
}
