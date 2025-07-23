import React, { useState } from "react";
import {
  ChevronDown,
  GraduationCap,
  Users,
  Globe,
  BookOpen,
  Award,
  MapPin,
} from "lucide-react";

const Accordion = () => {
  const [openItems, setOpenItems] = useState(new Set([null]));

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    newOpenItems.has(index)
      ? newOpenItems.delete(index)
      : newOpenItems.add(index);
    setOpenItems(newOpenItems);
  };

  const accordionData = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Programe Educaționale",
      content: [
        "Bacalaureat Internațional (IB) - Programul de Diplomă pentru clasele 11-12",
        "Cambridge International - IGCSE și A-Levels",
        "Programul Național Român adaptat standardelor internaționale",
        "Programe bilingve Română-Engleză",
        "Cursuri de pregătire pentru universitățile din străinătate",
        "Activități extracurriculare: robotică, debate, arte vizuale și performative",
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Comunitatea Noastră",
      content: [
        "Peste 2,400 de studenți activi din 65 de țări",
        "Corpul profesoral format din educatori certificați internațional",
        "Rația profesor-student de 1:12 pentru atenție personalizată",
        "Comunitate de alumni în peste 50 de universități de top mondiale",
        "Parteneriate cu familii diplomatice și organizații internaționale",
        "Program de mentorat între studenții de vârste diferite",
      ],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Oportunități Internaționale",
      content: [
        "Programe de schimb cu școli partenere din Europa, Asia și America",
        "Conferințe Model UN și competiții academice internaționale",
        "Tabere de vară la universități prestigioase: Oxford, Cambridge, MIT",
        "Proiecte de colaborare cu studenți din întreaga lume",
        "Certificări lingvistice: IELTS, TOEFL, DELF, Goethe",
        "Orientare universitară pentru aplicații în străinătate",
      ],
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Facilități și Resurse",
      content: [
        "Campus modern cu laboratoare științifice de ultimă generație",
        "Bibliotecă digitală cu acces la peste 50,000 de resurse online",
        "Săli de sport, piscină olimpică și terenuri de sport",
        "Studiouri de artă, muzică și tehnologie creativă",
        "Dormitoare moderne pentru studenții internaționali",
        "Transport școlar și servicii de catering internaționale",
      ],
    },

    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Admitere și Contact",
      content: [
        "Proces de admitere: test de evaluare + interviu motivațional",
        "Perioade de înscriere: septembrie-martie pentru anul următor",
        "Burse de merit pentru studenții cu performanțe excepționale",
        "Adresa: Str. Educației nr. 15, Alexandria, Teleorman",
        "Telefon: +40 123 456 789",
        "Email: admitere@hortensia.int.edu",
        "Zile de Porți Deschise: ultima sâmbătă din fiecare lună",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Globe className="w-5 h-5 text-indigo-600" />
            <span className="text-indigo-600 font-medium text-sm uppercase tracking-wider">
              Informații Complete
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            F.A.Q - Întrebări Frecvente
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explorează programele și oportunitățile noastre educaționale
            internaționale.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-2 rounded-lg transition ${
                      openItems.has(index)
                        ? "bg-indigo-600 text-white"
                        : "bg-indigo-100 text-indigo-600"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <h3
                    className={`text-lg font-semibold transition ${
                      openItems.has(index) ? "text-indigo-700" : "text-gray-800"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openItems.has(index)
                      ? "rotate-180 text-indigo-600"
                      : "text-gray-400"
                  }`}
                />
              </button>

              {/* Content */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openItems.has(index)
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5">
                  <ul className="pl-12 pt-2 space-y-2 text-gray-700 text-sm leading-relaxed">
                    {item.content.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-2 h-2 mt-2 rounded-full bg-indigo-500 flex-shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Pregătit să începi călătoria ta educațională?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contactează-ne pentru a afla mai multe despre procesul de
              admitere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
                <BookOpen className="w-4 h-4 mr-2 inline-block" />
                Programează o Vizită
              </button>
              <button className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                <Award className="w-4 h-4 mr-2 inline-block" />
                Descarcă Broșura
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
