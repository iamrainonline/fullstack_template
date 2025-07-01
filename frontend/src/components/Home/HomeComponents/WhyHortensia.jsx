import React from "react";
import {
  Bus,
  Utensils,
  Calendar,
  Users,
  BookOpen,
  Star,
  Phone,
  MapPin,
  Heart,
  Award,
  Globe,
} from "lucide-react";

const WhyHortensia = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Centru Studii Hortensia
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sistem de studii bilingv din prima zi
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Îngrijire de Calitate - Large Card */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md">
            <div className="h-48 bg-gray-200 rounded-t-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=400&fit=crop"
                alt="Copii la școală"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center">
                Îngrijire de Calitate
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Bus className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Transport Școlar</strong> - în funcție de
                      necesitățile fiecărei familii.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Utensils className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Catering de calitate:</strong> servicii oferite de
                      Restaurantul UNICOM.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Tabăra de vara și Școala de vara</strong> în care
                      copiii vor avea timp de divertisment, clase de <br />
                      limbi străine, fise pentru realizarea exercițiilor de
                      matematică și limba română, club de lectură.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Petreceri aniversare</strong> organizate în
                      week-end.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mențiuni */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Mențiuni</h2>

            <div className="space-y-6">
              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Award className="w-5 h-5 text-green-600 mr-2" />
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                    10% reducere
                  </span>
                </div>
                <p className="text-gray-700 text-sm">
                  Oferim 10% reducere pentru al doilea copil din familie
                  (frate/sora)
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Globe className="w-5 h-5 text-blue-600 mr-2" />
                </div>
                <p className="text-gray-700 text-sm">
                  Oferta de cursuri opționale poate fi extinsă pe parcursul
                  anului școlar.
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Users className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                    2024-2025
                  </span>
                </div>
                <p className="text-gray-700 text-sm">
                  Sunt deschise înscrierile pentru anul școlar 2024 - 2025.
                  Grupurile noastre sunt de maxim 10 copii, pentru a putea
                  explora și dezvolta cât mai bine potențialul fiecăruia dintre
                  ei.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Quote - Full width */}
          <div className="lg:col-span-3 bg-blue-600 rounded-lg shadow-md text-white p-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-6">
                Sistem de studii bilingv din prima zi
              </h2>
              <blockquote className="text-lg leading-relaxed italic">
                "Misiunea noastră este să facem copiii să se simtă la fel ca în
                căminul familial, asigurându-le un mediu plin de afecțiune și
                încredere bazat pe spiritul de libertate și responsabilitate"
              </blockquote>

              {/* Illustrated children representation */}
              <div className="flex justify-center space-x-4 mt-8">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHortensia;
