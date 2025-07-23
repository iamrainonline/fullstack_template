import React from "react";
import {
  Globe2,
  Users,
  Heart,
  Award,
  BookOpenCheck,
  Languages,
  Palette,
  Baby,
  CheckCircle,
  Quote,
} from "lucide-react";

const AboutUs = () => {
  return (
    <div className="bg-white py-24 text-gray-900">
      {/* Secțiunea Hero - Grădiniță */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <Award className="w-4 h-4 mr-2" />
            Grădiniță Internațional
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Școala Internațională - Hortensia
            </span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Suntem o grădiniță/școală internațională plină de grijă unde copiii
            cu vârste între 5 și 10 ani descoperă bucuria învățării prin joacă,
            explorare și experiențe multiculturale. Mediul nostru cald îi ajută
            pe cei mici să-și dezvolte încrederea, curiozitatea și abilități
            fundamentale pentru învățarea pe tot parcursul vieții.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center text-gray-600">
              <Baby className="w-5 h-5 text-blue-600 mr-2" />
              Vârste 2-5 Ani
            </div>
            <div className="flex items-center text-gray-600">
              <Globe2 className="w-5 h-5 text-blue-600 mr-2" />
              Curriculum Internațional
            </div>
            <div className="flex items-center text-gray-600">
              <Languages className="w-5 h-5 text-blue-600 mr-2" />
              Educație Bilingvă
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl opacity-20 blur-3xl transform rotate-6"></div>
          <img
            src="https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg"
            alt="Copii fericiți jucându-se într-o clasă multiculturală"
            className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px] transform -rotate-2 hover:rotate-0 transition-transform duration-500"
          />
          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
            <div className="text-3xl font-bold text-blue-600">5+</div>
            <div className="text-sm text-gray-600 font-medium">
              Ani de experiență
            </div>
          </div>
        </div>
      </div>

      {/* Identitatea noastră */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Cine suntem</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              O comunitate de educatori pasionați dedicați dezvoltării timpurii
              a copilului prin învățare bazată pe joc și deschidere
              internațională.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Globe2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Istoricul nostru</h3>
              <p className="text-gray-600">
                Fondată în 2012, am evoluat de la un grup bilingv de joacă la o
                grădiniță recunoscută internațional, cu o comunitate diversă
                reprezentând peste 30 de naționalități.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Filosofia noastră</h3>
              <p className="text-gray-600">
                Credem că copilăria timpurie trebuie să fie plină de uimire,
                descoperire și bucuria învățării. Abordarea noastră echilibrează
                activitățile structurate cu explorarea ghidată de copii.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Comunitatea noastră</h3>
              <p className="text-gray-600">
                Un mediu cald și incluziv în care copii, familii și educatori
                din toate colțurile lumii învață și cresc împreună.
              </p>
            </div>
          </div>

          {/* Valorile noastre */}
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-center mb-12">
              Valorile noastre de bază
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Globe2 className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold mb-2">Gândire globală</h4>
                <p className="text-sm text-gray-600">
                  Încurajăm curiozitatea despre lume și aprecierea culturilor
                  diverse.
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold mb-2">Grijă autentică</h4>
                <p className="text-sm text-gray-600">
                  Cream un mediu sigur și iubitor în care copiii prosperă.
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <BookOpenCheck className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold mb-2">Învățare prin joacă</h4>
                <p className="text-sm text-gray-600">
                  Activități captivante, potrivite vârstei, ce stimulează
                  dezvoltarea armonioasă.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Abordarea educațională */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Abordarea noastră educațională
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              O metodologie echilibrată care combină cele mai bune practici
              internaționale din educația timpurie
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Curriculum */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-3xl p-10 shadow-lg">
              <div className="flex items-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-rose-500 rounded-3xl flex items-center justify-center mr-6">
                  <BookOpenCheck className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Curriculumul nostru
                </h3>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                Curriculumul nostru bazat pe joacă include elemente din
                abordările Reggio Emilia, Montessori și cadrul IB PYP adaptat
                pentru copiii mici.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <span className="text-gray-700">
                    <strong>Dezvoltare lingvistică:</strong> Imersiune bilingvă
                    (Engleză + Spaniolă/Franceză/Mandarină)
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <span className="text-gray-700">
                    <strong>Expresie creativă:</strong> Artă, muzică și mișcare
                    zilnic
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <span className="text-gray-700">
                    <strong>STEM timpuriu:</strong> Explorare practică în
                    știință, tehnologie, inginerie și matematică
                  </span>
                </div>
              </div>
            </div>

            {/* Educatori */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-3xl p-10 shadow-lg">
              <div className="flex items-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-3xl flex items-center justify-center mr-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Educatorii noștri
                </h3>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                Echipa noastră este formată din specialiști pasionați cu
                experiență internațională, vorbitori de mai multe limbi.
                Asigurăm un raport scăzut între educatori și copii.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <span className="text-gray-700">
                    <strong>Calificări:</strong> Toți educatorii principali au
                    diplome avansate în Educația Timpurie
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <span className="text-gray-700">
                    <strong>Raport:</strong> 1:5 pentru copii de 2-3 ani, 1:8
                    pentru 4-5 ani
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <span className="text-gray-700">
                    <strong>Formare continuă:</strong> Training regulat în cele
                    mai noi metode de educație timpurie
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mediu de învățare */}
      <div className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Mediul nostru educațional
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Spații concepute cu grijă pentru a inspira curiozitate,
              creativitate și descoperire
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Ateliere creative</h3>
              <p className="text-gray-600 mb-4">
                Spații luminoase pentru artă, muzică și joc imaginativ, cu
                materiale naturale și instrumente de calitate.
              </p>
              <div className="flex items-center text-sm text-blue-600 font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                Atelier de artă cu materiale sigure pentru copii
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <Baby className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Zone senzoriale</h3>
              <p className="text-gray-600 mb-4">
                Zone speciale pentru explorare tactilă, joc cu apă și activități
                de dezvoltare senzorială.
              </p>
              <div className="flex items-center text-sm text-blue-600 font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                Mese cu nisip/apă și pereți tactili
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Globe2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Explorare în aer liber</h3>
              <p className="text-gray-600 mb-4">
                Loc de joacă inspirat de natură, cu grădini, structuri de
                cățărare și stații de explorare.
              </p>
              <div className="flex items-center text-sm text-blue-600 font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                Loc de joacă natural certificat
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimoniale */}
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-16">Ce spun părinții</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <Quote className="w-12 h-12 text-blue-600 mx-auto mb-6" />
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                „Programul bilingv a fost extraordinar pentru fiica noastră.
                Trecerea între engleză și spaniolă este naturală, iar profesorii
                fac învățarea o bucurie.”
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  M
                </div>
                <div className="text-left">
                  <div className="font-semibold">Mariana Torres</div>
                  <div className="text-sm text-gray-600">
                    Mamă a Sofiei, 3 ani
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <Quote className="w-12 h-12 text-green-600 mx-auto mb-6" />
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                „Ne place focusul internațional – fiul nostru povestește acasă
                despre festivaluri din diferite culturi și a devenit foarte
                curios despre lume.”
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  J
                </div>
                <div className="text-left">
                  <div className="font-semibold">James Wilson</div>
                  <div className="text-sm text-gray-600">
                    Tatăl lui Noah, 4 ani
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
