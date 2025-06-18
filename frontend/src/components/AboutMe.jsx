import React from "react";
import { BookOpen, Mail, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h3 className="text-2xl font-bold mb-6 text-slate-900">Despre Mine</h3>

      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 rounded-full bg-slate-200 overflow-hidden">
            <img
              src="https://picsum.photos/200?grayscale"
              alt="Mihaela"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Mihaela Popescu</h4>
            <p className="text-sm text-slate-600">
              Profesoară la școala internațională pentru copii
            </p>
          </div>
        </div>

        <p className="text-slate-600 text-sm">
          Sunt o profesoară pasionată de educație și dezvoltarea armonioasă a
          copiilor, cu peste 5 ani de experiență în învățământul internațional.
          Cred într-o abordare modernă și empatică a predării, unde fiecare
          copil este încurajat să-și descopere potențialul, să pună întrebări și
          să învețe cu bucurie. Mă dedic zilnic construirii unui mediu sigur,
          prietenos și inspirațional pentru toți elevii mei.
        </p>

        <div className="pt-4 border-t border-slate-100">
          <div className="text-sm text-slate-600 mb-2">Mă poți contacta:</div>
          <div className="flex space-x-3">
            <Link
              to="#"
              className="p-2 text-slate-600 hover:text-blue-700 transition-colors"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              to="#"
              className="p-2 text-slate-600 hover:text-red-600 transition-colors"
            >
              <Mail size={20} />
            </Link>
            <Link
              to="#"
              className="p-2 text-slate-600 hover:text-green-600 transition-colors"
            >
              <BookOpen size={20} />
            </Link>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="text-sm">
            <span className="font-medium text-slate-700">Locație:</span>
            <span className="text-slate-600 ml-2">Navov, Teleorman</span>
          </div>
          <div className="text-sm">
            <span className="font-medium text-slate-700">Specializări:</span>
            <span className="text-slate-600 ml-2">
              Educație timpurie, dezvoltare socio-emoțională, învățare prin joc
            </span>
          </div>
          <div className="text-sm">
            <span className="font-medium text-slate-700">Limbi vorbite:</span>
            <span className="text-slate-600 ml-2">
              Română, Engleză, Spaniola
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
