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
    icon: <Award className="w-8 h-8 text-white" />,
    content: [
      "Primul Centru de Studii din zona în care copilul tău va avea o atenție personalizată pe tot parcursul perioadei de învățare, creștere și dezvoltare cuprinse între 1 și 18 ani.",
      'Familia "pilar principal al societății", primul loc unde copiii își împărtășesc dragostea cu sinceritate și încredere. Împreună vom crea o atmosferă în care fiecare copil și adolescent din centrul nostru va fi ascultat și i se va acorda acel sprijin de care are nevoie în fiecare etapă a vârstei.',
      "Punem accent pe cunoaștere și comunicare, oferind atât copiilor cât și părinților să facă parte dintr-un mediu creativ, în care valorile (toleranța, aprecierea, onestitatea responsabilitatea și respectul pentru ceilalți), activitățile creative și comunicarea sunt principalele obiective.",
      "Locație spațioasă, luminoasă, primitoare, echipament adecvate studiului și de recreere, cu spații de joacă proprii, ateliere de lectură și de limbi străine, ateliere de artă, de cultură generală și activități sportive, etc.",
    ],
    highlight: true,
    color: "primary",
  },
  {
    title: "Primii pași",
    icon: <Baby className="w-8 h-8 text-white" />,
    content: [
      "Acomodare blândă realizată în ritmul fiecărui copil într-o nouă etapă de dezvoltare socială și emoțională.",
      "Jocuri educative și experiențe care îi vor ajuta să își dezvolte abilitățile, imaginația și creativitatea",
    ],
    color: "primary",
  },
  {
    title: "After School",
    icon: <BookOpen className="w-8 h-8 text-white" />,
    content: [
      "4 ani până la clasa IV",
      "Realizarea temelor asistate de cadre didactice, meditații la materiile solicitate, limbi străine, activități culturale bazate pe teme diverse.",
      "Activități cu Clubul Sportiv Karateka- Alexandria.",
    ],
    color: "secondary",
  },
  {
    title: "Before School",
    icon: <School className="w-8 h-8 text-white" />,
    content: [
      "Clasele V - VIII",
      "Pregătire înainte de școală, realizarea temelor, meditații la materiile solicitate, activități culturale și sportive.",
    ],
    color: "accent",
  },
  {
    title: "High School",
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    content: [
      "Pentru adolescenții noștri, clasele IX - XII",
      "Oferim spațiu luminos și adecvat pentru realizarea temelor, clase de meditații opționale, dar și conversații în care își pot împărți opiniile și experiențele din diverse domenii de studiu.",
      "Activități de pregătire a examenelor de bacalaureat și admitere la facultate",
    ],
    color: "primary",
  },
  {
    title: "Școala de Familie",
    icon: <Home className="w-8 h-8 text-white" />,
    content: [
      "Sesiuni trimestriale cu familiile: mediul familiar însoțit de teme diverse cu care ne confruntăm în fiecare zi.",
      "Clubul mămicilor unde ne putem cunoaște și perioada Familiei împreună după-amiază împreună și realiza activități tematice.",
      "Evenimente speciale cu părinții, bunicii și prietenii.",
    ],
    color: "secondary",
  },
];

const EducationOverview = () => {
  const highlightSection = educationData.find((section) => section.highlight);
  const regularSections = educationData.filter((section) => !section.highlight);

  const getColorStyles = (color) => {
    const styles = {
      primary: {
        headerBg: "#a3c7f7", // --color-primary-light
        border: "#a0abb8ff", // --color-primary
        iconBg: "#0358b6", // --color-primary
        bulletColor: "#0358b6", // --color-primary
      },
      secondary: {
        headerBg: "#d2e085", // --color-secondary-light
        border: "#b4ca34", // --color-secondary
        iconBg: "#b4ca34", // --color-secondary
        bulletColor: "#b4ca34", // --color-secondary
      },
      accent: {
        headerBg: "#fcd97c", // --color-accent-light
        border: "#ffb300", // --color-accent
        iconBg: "#ffb300", // --color-accent
        bulletColor: "#ffb300", // --color-accent
      },
    };
    return styles[color] || styles.primary;
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen py-20">
      <style>{`
        :root {
          --color-primary: #0358b6;
          --color-primary-light: #a3c7f7;
          --color-secondary: #b4ca34;
          --color-secondary-light: #d2e085;
          --color-accent: #ffb300ff;
          --color-accent-light: #fcd97c;
          --color-text: #333333;
          --color-text-light: #666666;
          --color-bg: #ffffff;
          --color-bg-light: #f7f7f7;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Învățare pentru{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              toate vârstele
            </span>
          </h1>
          <p className="text-base md:text-base lg:text-lg text-gray-700 leading-relaxed mb-8 max-w-md mx-auto">
            De la primii pași până la liceu și colaborarea cu părinții, fiecare
            etapă este sprijinită printr-un mediu educațional personalizat și
            atent la nevoile individuale ale fiecărui copil.
          </p>
        </div>

        {/* Highlight Section */}
        {highlightSection && (
          <div className="mb-16">
            <div className="bg-white rounded-xl shadow-xl border-2 p-8 md:p-12">
              <div className="flex items-center gap-6 mb-8">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#0358b6" }}
                >
                  {highlightSection.icon}
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: "#333333" }}
                >
                  {highlightSection.title}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {highlightSection.content.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: "#b4ca34",
                        marginTop: "1rem",
                      }}
                    ></div>
                    <p
                      className="leading-relaxed text-lg"
                      style={{ color: "#333333" }}
                    >
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
            const colorStyles = getColorStyles(section.color);

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border-2 overflow-hidden"
              >
                <div
                  className="p-6 border-b-2"
                  style={{
                    backgroundColor: colorStyles.headerBg,
                    borderBottomColor: colorStyles.border,
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm"
                      style={{
                        backgroundColor: colorStyles.iconBg,
                      }}
                    >
                      {section.icon}
                    </div>
                    <h3
                      className="text-xl font-bold"
                      style={{ color: "#333333" }}
                    >
                      {section.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <ul className="space-y-3">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                          style={{
                            backgroundColor: colorStyles.bulletColor,
                          }}
                        ></div>
                        <span
                          className="leading-relaxed"
                          style={{ color: "#333333" }}
                        >
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
