import React from "react";
import {
  Star,
  Quote,
  GraduationCap,
  MapPin,
  Calendar,
  Award,
  Users,
  Globe,
} from "lucide-react";
import ParentImg from "../../../images/abc.png";

const Testimonials = () => {
  // Just 3 testimonials to display
  const testimonials = [
    {
      id: 1,
      name: "Irina Dobre",
      role: "Mama lui Andrei, clasa a III-a",
      university: null,
      program: null,
      country: "România",
      image: ParentImg,
      rating: 5,
      quote:
        "La Hortensia, am văzut o transformare incredibilă în încrederea și curiozitatea lui Andrei. Profesorii sunt dedicați, iar mediul este cald și stimulant. E locul ideal pentru a crește un copil fericit și inteligent.",
      achievement: "Andrei a început să citească fluent și iubește matematica",
    },
    {
      id: 2,
      name: "Cristian Marinescu",
      role: "Tatăl Mariei, grupa mare",
      university: null,
      program: null,
      country: "România",
      image: ParentImg,
      rating: 5,
      quote:
        "Maria abia așteaptă fiecare zi la Hortensia. Învățarea prin joacă și atenția la dezvoltarea emoțională ne-au convins că am ales cel mai bun început pentru copilul nostru.",
      achievement: "Maria s-a adaptat excelent și are prieteni noi",
    },
    {
      id: 3,
      name: "Sofia Grigorescu",
      role: "Mama lui Luca, clasa pregătitoare",
      university: null,
      program: null,
      country: "România",
      image: ParentImg,
      rating: 5,
      quote:
        "Ceea ce m-a impresionat la Hortensia a fost grija cu care fiecare copil este încurajat să se dezvolte în ritmul său. Luca a prins drag de școală și vine mereu cu povești frumoase.",
      achievement: "Luca și-a depășit timiditatea și participă activ la ore",
    },
  ];

  const stats = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      number: "98%",
      label: "Rata de acceptare universitară",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "25+",
      label: "Burse obținute în ultimii 3 ani",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "2",
      label: "Țări reprezentate",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "100+",
      label: "Alumni de succes",
      color: "bg-teal-100 text-teal-600",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <Star className="w-6 h-6 text-yellow-500 fill-current" />
            <span className="text-blue-600 font-semibold tracking-wide text-lg">
              Povești de Succes
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Ce spun{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              studenții noștri
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Descoperă experiențele transformatoare ale comunității Hortensia -
            de la studenți actuali la absolvenți care studiază la cele mai
            prestigioase universități din lume.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className={`w-20 h-20 mx-auto mb-4 rounded-2xl ${stat.color} flex items-center justify-center shadow-sm`}
              >
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* 3 Fixed Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="h-full">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full flex flex-col">
                {/* Profile Section */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-blue-600 font-medium text-sm">
                      {testimonial.role}
                    </p>
                    <div className="flex items-center gap-1 text-gray-500 text-xs mt-1">
                      <MapPin className="w-3 h-3" />
                      <span>{testimonial.country}</span>
                    </div>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Quote */}
                <div className="flex-1 mb-6">
                  <Quote className="w-8 h-8 text-blue-200 mb-3" />
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Achievement */}
                <div className="bg-gray-50 rounded-xl p-4 mt-auto mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-purple-600" />
                    <span className="font-semibold text-purple-600 text-sm">
                      Realizare
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    {testimonial.achievement}
                  </p>
                </div>

                {/* University Info */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
                    <GraduationCap className="w-4 h-4" />
                    <span className="font-medium">
                      {testimonial.university}
                    </span>
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.program}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-blue-100">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Vrei să fii următoarea poveste de succes?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Alătură-te comunității Hortensia și descoperă-ți potențialul în
              cel mai stimulant mediu educațional internațional din România.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-sm flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-2" />
                Programează o Vizită
              </button>
              <button className="bg-white text-blue-600 border-2 border-blue-200 px-8 py-4 rounded-xl font-semibold flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Vorbește cu un Învățător
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
