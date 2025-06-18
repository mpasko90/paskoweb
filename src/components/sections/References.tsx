"use client";

import Image from "next/image";
import { GradientText, BorderBeam } from "@/components/ui/magic-ui";

interface ReferenceProps {
  name: string;
  company: string;
  content: string;
  imgSrc: string;
}

export const Reference = ({
  name,
  company,
  content,
  imgSrc,
}: ReferenceProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center mb-4">
        <Image
          src={imgSrc}
          alt={name}
          width={60}
          height={60}
          className="rounded-full mr-4"
        />
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-gray-600 text-sm">{company}</p>
        </div>
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

interface ReferenceData {
  name: string;
  company: string;
  content: string;
  image: string;
}

const references: ReferenceData[] = [
  {
    name: "Współpracownik z LinkedIn",
    company: "Militaria.pl",
    content:
      "Z pełnym przekonaniem polecam Michała jako pracownika w roli Front-End Developera. Miałem przyjemność współpracować z nim w Militaria.pl i mogę śmiało powiedzieć, że jest osobą, na której można polegać zarówno pod względem umiejętności technicznych, jak i zaangażowania w powierzone zadania.",
    image: "/images/testimonials/person1.webp",
  },
  {
    name: "Natalia Bednarz",
    company: "Militaria.pl",
    content:
      "Pracowałam z Michałem kilka lat i obserwowałam jego rozwój zawodowy. Michał jest otwarty na naukę, lubi nowe wyzwania i szukanie nieoczywistych rozwiązań. Potrafi też szerzej patrzeć na różne problemy pojawiające się podczas realizacji zadań. Jest również pomocny i sympatyczny dla zespołu.",
    image: "/images/testimonials/person2.webp",
  },
  {
    name: "Klient MC Klima",
    company: "Montaż Klimatyzacji",
    content:
      "Michał stworzył dla nas profesjonalną stronę internetową dla firmy montażu klimatyzacji. Strona jest czytelna, funkcjonalna i dobrze pozycjonuje się w Google. Polecamy!",
    image: "/images/testimonials/person3.webp",
  },
];

export const References = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <GradientText>Co mówią klienci</GradientText>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {references.map((reference, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100"
            >
              <BorderBeam />
              <div className="flex items-center mb-4">
                <div className="mr-4 relative w-16 h-16 overflow-hidden rounded-full border-2 border-primary/20">
                  <Image
                    src={reference.image}
                    alt={reference.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-800">
                    {reference.name}
                  </h3>
                  <p className="text-slate-600 text-sm">{reference.company}</p>
                </div>
              </div>
              <p className="text-slate-700 italic leading-relaxed">
                &ldquo;{reference.content}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
