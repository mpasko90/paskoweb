'use client';

import Image from 'next/image';

interface ReferenceProps {
  name: string;
  company: string;
  content: string;
  imgSrc: string;
}

export const Reference = ({ name, company, content, imgSrc }: ReferenceProps) => {
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
    name: "Anna Kowalska",
    company: "ABC Design",
    content: "Współpraca z Michałem była czystą przyjemnością. Profesjonalne podejście, terminowość i zrozumienie potrzeb klienta na najwyższym poziomie. Strona, którą stworzył dla naszej firmy, spełnia wszystkie oczekiwania i świetnie się sprawdza.",
    image: "/images/testimonials/person1.webp"
  },
  {
    name: "Jan Nowak",
    company: "Tech Solutions",
    content: "Michał wykonał dla nas profesjonalną stronę internetową w ekspresowym tempie. Zawsze służy pomocą i doradza najlepsze rozwiązania. Zdecydowanie polecam współpracę!",
    image: "/images/testimonials/person2.webp"
  },
  {
    name: "Marta Wiśniewska",
    company: "Cafe Bistro",
    content: "Nasza kawiarnia potrzebowała nowoczesnej strony, która przyciągnie klientów. Michał stworzył dla nas idealny projekt, który łączy funkcjonalność z estetyką. Jesteśmy bardzo zadowoleni z efektów!",
    image: "/images/testimonials/person3.webp"
  }
];

export const References = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Co mówią klienci
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {references.map((reference, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="mr-4 relative w-16 h-16 overflow-hidden rounded-full border-2 border-blue-500">
                  <Image 
                    src={reference.image}
                    alt={reference.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{reference.name}</h3>
                  <p className="text-gray-600 text-sm">{reference.company}</p>
                </div>
              </div>              <p className="text-gray-700 italic">
                &ldquo;{reference.content}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
