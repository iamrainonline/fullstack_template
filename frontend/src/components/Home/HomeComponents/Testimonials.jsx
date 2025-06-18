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

const Testimonials = () => {
  // Just 3 testimonials to display
  const testimonials = [
    {
      id: 1,
      name: "Alexandra Popescu",
      role: "Absolventă 2023",
      university: "University of Oxford",
      program: "Philosophy, Politics & Economics",
      country: "Marea Britanie",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote:
        "Hortensia m-a pregătit nu doar academic, ci și personal pentru provocările universitare. Profesorii aici nu te învață doar materia - te învață să gândești critic.",
      achievement: "Bursă completă la Oxford",
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Student Anul 12",
      university: "Aplicant la MIT",
      program: "Computer Science & Engineering",
      country: "China",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote:
        "Coming from Shanghai, I was nervous about adapting to a new education system. But Hortensia's international environment made the transition seamless.",
      achievement: "Câștigător Olimpiada Națională de Informatică",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Absolventă 2022",
      university: "Harvard University",
      program: "International Relations",
      country: "Spania",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote:
        "Lo que más me impresionó de Hortensia fue la diversidad cultural. Estudiar junto a compañeros de 65 países me abrió la mente de maneras increíbles.",
      achievement: "Președinte Consiliul Studențesc",
    },
  ];

  const stats = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      number: "98%",
      label: "Rata de acceptare universitară",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "150+",
      label: "Burse obținute în ultimii 3 ani",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "65",
      label: "Țări reprezentate",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "2,100+",
      label: "Alumni de succes",
      color: "from-teal-500 to-teal-600",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <Star className="w-6 h-6 text-yellow-500 fill-current" />
            <span className="text-blue-600 font-semibold tracking-wide text-lg">
              Povești de Succes
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ce spun{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              studenții noștri
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descoperă experiențele transformatoare ale comunității Hortensia -
            de la studenți actuali la absolvenți care studiază la cele mai
            prestigioase universități din lume.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div
                className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
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
            <div
              key={testimonial.id}
              className={`${index === 1 ? "lg:scale-105" : ""}`}
            >
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                {/* Profile Section */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
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
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
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
                  <p className="text-gray-700 leading-relaxed text-sm italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Achievement */}
                <div className="bg-gray-50 rounded-xl p-4 mt-auto">
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
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-gray-600 text-xs">
                    <GraduationCap className="w-3 h-3" />
                    <span>{testimonial.university}</span>
                  </div>
                  <div className="text-gray-500 text-xs mt-1">
                    {testimonial.program}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Vrei să fii următoarea poveste de succes?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Alătură-te comunității Hortensia și descoperă-ți potențialul în
              cel mai stimulant mediu educațional internațional din România.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-2" />
                Programează o Vizită
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Vorbește cu un Alumni
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
