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
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
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
      icon: <Award className="w-6 h-6" />,
      title: "Performanțe și Recunoașteri",
      content: [
        "98% rata de promovabilitate la examenele internaționale",
        "Absolvenți acceptați la Harvard, Oxford, Cambridge, ETH Zurich",
        "Școală acreditată IB World School și Cambridge International",
        "Premii naționale și internaționale pentru excelența academică",
        "Certificare UNESCO pentru educația pentru dezvoltare durabilă",
        "Partener oficial al British Council România",
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
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <Globe className="w-6 h-6 text-blue-600" />
            <span className="text-blue-600 font-semibold tracking-wide text-lg">
              Informații Complete
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            F.A.Q - Intrebari Frecvente
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explorează programele noastre, comunitățile internaționale și
            oportunitățile care te așteaptă la cel mai prestigios centru
            educațional din România.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-6 text-left group hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      openItems.has(index)
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 group-hover:from-blue-200 group-hover:to-purple-200"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <h3
                    className={`text-xl font-bold transition-colors duration-300 ${
                      openItems.has(index)
                        ? "text-blue-600"
                        : "text-gray-900 group-hover:text-blue-600"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-gray-400 transition-all duration-300 ${
                    openItems.has(index)
                      ? "rotate-180 text-blue-600"
                      : "group-hover:text-blue-600"
                  }`}
                />
              </button>

              {/* Accordion Content */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openItems.has(index)
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="pl-16">
                    <div className="bg-gradient-to-r from-blue-50/80 to-purple-50/80 rounded-xl p-6 border border-blue-100/50">
                      <ul className="space-y-3">
                        {item.content.map((contentItem, contentIndex) => (
                          <li
                            key={contentIndex}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="font-medium leading-relaxed">
                              {contentItem}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pregătit să începi călătoria ta educațională?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contactează-ne astăzi pentru a afla mai multe despre procesul de
              admitere și pentru a programa o vizită la campus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Programează o Vizită
              </button>
              <button className="group bg-white/70 backdrop-blur-sm border border-white/60 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center">
                <Award className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
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
