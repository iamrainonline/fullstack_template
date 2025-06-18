import React from "react";
import { Palette, Microscope, Globe2, Code2, Sparkles } from "lucide-react";

const programs = [
  {
    title: "Exploratori Creativi (4-6 ani)",
    icon: <Palette className="w-10 h-10 text-pink-500 mb-4" />,
    description:
      "Un program artistic complet ce dezvoltă imaginația copiilor prin pictură, muzică, teatru și meșteșuguri. Încurajăm exprimarea liberă și descoperirea talentelor creative.",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    benefits: [
      "Ateliere săptămânale de pictură și colaje",
      "Introducere în instrumente muzicale",
      "Spectacole de teatru interactive",
    ],
  },
  {
    title: "Mini Științifici (6-8 ani)",
    icon: <Microscope className="w-10 h-10 text-blue-500 mb-4" />,
    description:
      "Program STEM pentru micii curioși care vor să înțeleagă cum funcționează lumea. Facem experimente distractive, învățăm despre spațiu, plante, animale și reciclare.",
    image: "https://images.pexels.com/photos/3662630/pexels-photo-3662630.jpeg",
    benefits: [
      "Laboratoare de știință cu materiale sigure",
      "Excursii la muzeul de științe",
      "Proiecte de grup și prezentări simple",
    ],
  },
  {
    title: "Global Citizens Club (8-10 ani)",
    icon: <Globe2 className="w-10 h-10 text-green-500 mb-4" />,
    description:
      "Îi învățăm pe copii despre empatie, diversitate culturală, valori internaționale și cum pot contribui pozitiv în lume. Încurajăm gândirea globală și respectul față de ceilalți.",
    image: "https://images.pexels.com/photos/8423353/pexels-photo-8423353.jpeg",
    benefits: [
      "Lecții despre culturi și limbi diferite",
      "Colaborări cu școli internaționale",
      "Campanii ecologice și umanitare",
    ],
  },
  {
    title: "Junior Coders (9-12 ani)",
    icon: <Code2 className="w-10 h-10 text-purple-500 mb-4" />,
    description:
      "Inițiere în programare, logică și rezolvare de probleme prin platforme vizuale și jocuri. Copiii creează mini-aplicații și își dezvoltă gândirea computațională.",
    image: "https://images.pexels.com/photos/3662630/pexels-photo-3662630.jpeg",
    benefits: [
      "Cursuri de Scratch, Blockly și introducere în HTML/CSS",
      "Ateliere de robotică pentru copii",
      "Tabere tematice IT pe timp de vară",
    ],
  },
];

const Programs = () => {
  return (
    <div className="bg-white py-40 text-gray-900 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Programele Noastre Educaționale
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Oferim o gamă variată de programe adaptate nevoilor fiecărei vârste
            — de la dezvoltarea creativității până la pregătirea pentru viitor
            prin tehnologie și colaborare globală.
          </p>
          <div className="h-px w-24 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={program.image}
                alt={program.title}
                className="h-64 w-full object-cover"
              />
              <div className="p-8">
                <div className="flex items-center justify-center">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-700 text-base mb-4 text-center">
                  {program.description}
                </p>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
                  {program.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
