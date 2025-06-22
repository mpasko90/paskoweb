"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { GradientText, BorderBeam } from "@/components/ui/magic-ui";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  link: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description:
      "Nowoczesna platforma e-commerce zbudowana w Next.js z integracją płatności.",
    category: "E-commerce",
    image: "/images/projects/ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    link: "/portfolio/ecommerce",
    featured: true,
  },
  {
    id: "2",
    title: "Corporate Website",
    description:
      "Responsywna strona korporacyjna z CMS WordPress i optymalizacją SEO.",
    category: "Corporate",
    image: "/images/projects/corporate.jpg",
    technologies: ["WordPress", "PHP", "MySQL", "SEO"],
    link: "/portfolio/corporate",
  },
  {
    id: "3",
    title: "SaaS Dashboard",
    description:
      "Dashboard analityczny dla aplikacji SaaS z real-time updates.",
    category: "SaaS",
    image: "/images/projects/dashboard.jpg",
    technologies: ["React", "TypeScript", "D3.js", "WebSockets"],
    link: "/portfolio/dashboard",
    featured: true,
  },
  {
    id: "4",
    title: "Restaurant App",
    description: "Aplikacja mobilna dla restauracji z systemem rezerwacji.",
    category: "Mobile",
    image: "/images/projects/restaurant.jpg",
    technologies: ["React Native", "Firebase", "Stripe"],
    link: "/portfolio/restaurant",
  },
];

const categories = ["Wszystkie", "E-commerce", "Corporate", "SaaS", "Mobile"];

export const ModernPortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("Wszystkie");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects =
    activeCategory === "Wszystkie"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <GradientText from="#2563eb" to="#3b82f6">
              Wybrane projekty
            </GradientText>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Odkryj najnowsze realizacje - od sklepów internetowych po
            zaawansowane aplikacje SaaS
          </p>
        </motion.div>
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white shadow-lg"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>{" "}
        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-primary/30 transition-all duration-500 ${
                  project.featured ? "lg:col-span-1" : ""
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <BorderBeam className="opacity-0 group-hover:opacity-100" />

                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-slate-100 to-slate-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold text-slate-400">
                      {project.title
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </div>
                  </div>

                  {/* Overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-primary/90 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredProject === project.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <div className="text-center text-white">
                      <h4 className="text-lg font-semibold mb-2">
                        Zobacz projekt
                      </h4>
                      <svg
                        className="w-8 h-8 mx-auto"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                        Wyróżniony
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action */}
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group"
                  >
                    Zobacz szczegóły
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-slate-600 mb-6">
            Chcesz zobaczyć więcej projektów?
          </p>
          <Button asChild size="lg" className="px-8">
            <Link href="/portfolio">
              Pełne portfolio
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
