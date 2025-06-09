import React from "react";
import { Globe, GraduationCap, Users } from "lucide-react";

const WhyHortensia = () => {
  return (
    <div>
      {" "}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              De ce să alegem Centrul de Studii Hortensia?
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-8 relative">
                <Globe className="w-full h-full text-blue-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Curriculum global
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Programe de Bacalaureat Internațional de la ciclul primar până
                la Programul de Diplomă, promovând gândirea critică și cetățenia
                globală la fiecare elev.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-8 relative">
                <Users className="w-full h-full text-purple-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Comunitate diversificată
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Studenți din 65 de țări creează o bogată tapiserie de culturi,
                limbi și perspective care îmbogățesc fiecare experiență de
                învățare.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-8 relative">
                <GraduationCap className="w-full h-full text-indigo-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Pregătit pentru viitor
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Metode inovatoare de predare și căi de învățare personalizate
                care pregătesc elevii pentru provocările și oportunitățile de
                mâine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHortensia;
