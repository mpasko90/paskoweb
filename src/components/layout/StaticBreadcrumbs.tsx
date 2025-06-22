import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import Link from "next/link";

interface StaticBreadcrumbsProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function StaticBreadcrumbs({ items }: StaticBreadcrumbsProps) {
  if (items.length <= 1) return null;

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
