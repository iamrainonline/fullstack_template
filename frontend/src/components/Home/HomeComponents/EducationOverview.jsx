import React from "react";
import {
  BookOpen,
  Users,
  Calendar,
  Star,
  MapPin,
  Heart,
  Award,
  Baby,
  GraduationCap,
  School,
  Home,
} from "lucide-react";

const educationData = [
  {
    title: "DE CE SĂ NE ALEGEȚI",
    icon: <Award className="w-8 h-8 text-blue-600" />,
    content: [
      "Primul Centru de Studii din zona în care copilul tău va avea o atenție personalizată pe tot parcursul perioadei de învățare, creștere și dezvoltare cuprinse între 1 și 18 ani.",
      'Familia "pilar principal al societății", primul loc unde copiii își împărtășesc dragostea cu sinceritate și încredere. Împreună vom crea o atmosferă în care fiecare copil și adolescent din centrul nostru va fi ascultat și i se va acorda acel sprijin de care are nevoie în fiecare etapă a vârstei.',
      "Punem accent pe cunoaștere și comunicare, oferind atât copiilor cât și părinților să facă parte dintr-un mediu creativ, în care valorile (toleranța, aprecierea, onestitatea responsabilitatea și respectul pentru ceilalți), activitățile creative și comunicarea sunt principalele obiective.",
      "Locație spațioasă, luminoasă, primitoare, echipament adecvate studiului și de recreere, cu spații de joacă proprii, ateliere de lectură și de limbi străine, ateliere de artă, de cultură generală și activități sportive, etc.",
    ],
    highlight: true,
    color: "blue",
  },
  {
    title: "Primii pași",
    icon: <Baby className="w-8 h-8 text-pink-600" />,
    content: [
      "Acomodare blândă realizată în ritmul fiecărui copil într-o nouă etapă de dezvoltare socială și emoțională.",
      "Jocuri educative și experiențe care îi vor ajuta să își dezvolte abilitățile, imaginația și creativitatea",
    ],
    color: "pink",
  },
  {
    title: "After School",
    icon: <BookOpen className="w-8 h-8 text-green-600" />,
    content: [
      "4 ani până la clasa IV",
      "Realizarea temelor asistate de cadre didactice, meditații la materiile solicitate, limbi străine, activități culturale bazate pe teme diverse.",
      "Activități cu Clubul Sportiv Karateka- Alexandria.",
    ],
    color: "green",
  },
  {
    title: "Before School",
    icon: <School className="w-8 h-8 text-orange-600" />,
    content: [
      "Clasele V - VIII",
      "Pregătire înainte de școală, realizarea temelor, meditații la materiile solicitate, activități culturale și sportive.",
    ],
    color: "orange",
  },
  {
    title: "High School",
    icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
    content: [
      "Pentru adolescenții noștri, clasele IX - XII",
      "Oferim spațiu luminos și adecvat pentru realizarea temelor, clase de meditații opționale, dar și conversații în care își pot împărți opiniile și experiențele din diverse domenii de studiu.",
      "Activități de pregătire a examenelor de bacalaureat și admitere la facultate",
    ],
    color: "purple",
  },
  {
    title: "Școala de Familie",
    icon: <Home className="w-8 h-8 text-rose-600" />,
    content: [
      "Sesiuni trimestriale cu familiile: mediul familiar însoțit de teme diverse cu care ne confruntăm în fiecare zi.",
      "Clubul mămicilor unde ne putem cunoaște și perioada Familiei împreună după-amiază împreună și realiza activități tematice.",
      "Evenimente speciale cu părinții, bunicii și prietenii.",
    ],
    color: "rose",
  },
];

const getColorClasses = (color) => {
  const colors = {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-800",
      badge: "bg-blue-100 text-blue-700",
    },
    pink: {
      bg: "bg-pink-50",
      border: "border-pink-200",
      text: "text-pink-800",
      badge: "bg-pink-100 text-pink-700",
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-800",
      badge: "bg-green-100 text-green-700",
    },
    orange: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      text: "text-orange-800",
      badge: "bg-orange-100 text-orange-700",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-800",
      badge: "bg-purple-100 text-purple-700",
    },
    rose: {
      bg: "bg-rose-50",
      border: "border-rose-200",
      text: "text-rose-800",
      badge: "bg-rose-100 text-rose-700",
    },
  };
  return colors[color] || colors.blue;
};

const EducationOverview = () => {
  const highlightSection = educationData.find((section) => section.highlight);
  const regularSections = educationData.filter((section) => !section.highlight);

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Învățare pentru{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              toate vârstele
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            De la primii pași până la liceu și colaborarea cu părinții, fiecare
            etapă este sprijinită printr-un mediu educațional personalizat și
            atent la nevoile individuale ale fiecărui copil.
          </p>
        </div>

        {/* Highlight Section */}
        {highlightSection && (
          <div className="mb-16">
            <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-8 md:p-12">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  {highlightSection.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {highlightSection.title}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {highlightSection.content.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {regularSections.map((section, index) => {
            const colorClasses = getColorClasses(section.color);
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-sm border-2 ${colorClasses.border} overflow-hidden`}
              >
                <div
                  className={`${colorClasses.bg} p-6 border-b ${colorClasses.border}`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                      {section.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {section.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <ul className="space-y-3">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div
                          className={`w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0 ${
                            section.color === "pink"
                              ? "bg-pink-500"
                              : section.color === "green"
                              ? "bg-green-500"
                              : section.color === "orange"
                              ? "bg-orange-500"
                              : section.color === "purple"
                              ? "bg-purple-500"
                              : "bg-rose-500"
                          }`}
                        ></div>
                        <span className="text-gray-700 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote Section */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12 text-center border-2 border-emerald-100 shadow-sm">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl text-emerald-300 mb-4">"</div>
            <blockquote className="text-xl md:text-2xl text-emerald-800 font-medium leading-relaxed italic mb-6">
              DEZVOLTARE PERSONALĂ: CREȘTEREA ESTE O PARTE ESENȚIALĂ ÎN
              EXISTENȚA ORICĂRUI INDIVID; NE AJUTĂ SĂ EXPLORĂM LUCRURILE PE CARE
              SUNTEM CAPABILI SĂ NI LE ÎNSUȘIM (PLANUL MENTAL, SOCIAL,
              SPIRITUAL, EMOȚIONAL ȘI FIZIC)
            </blockquote>
            <div className="w-16 h-1 bg-emerald-300 mx-auto"></div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-8 py-4 shadow-lg border border-gray-100">
            <Heart className="w-5 h-5 text-red-500" />
            <span className="text-gray-700 font-medium">
              Un mediu sigur și îngrijitor pentru dezvoltarea copilului tău
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationOverview;
