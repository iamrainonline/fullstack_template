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
    <div className="min-h-screen relative overflow-hidden">
      {/* Decorative Background Elements - MAI MULTE ELEMENTE */}
      <div className="absolute top-20 left-10 text-8xl opacity-10 transform rotate-12">
        🌈
      </div>
      <div className="absolute top-40 right-20 text-7xl opacity-10 transform -rotate-12">
        ⭐
      </div>
      <div className="absolute bottom-20 left-20 text-9xl opacity-10 transform rotate-45">
        🌸
      </div>
      <div className="absolute bottom-40 right-10 text-8xl opacity-10 transform -rotate-45">
        🦋
      </div>

      {/* Mai multe flori și fluturi distribuiți pe pagină */}
      <div
        className="absolute"
        style={{
          top: "240px",
          left: "33%",
          fontSize: "7rem",
          opacity: 0.1,
          transform: "rotate(30deg)",
        }}
      >
        🌺
      </div>

      <div
        className="absolute"
        style={{
          bottom: "240px",
          left: "50%",
          fontSize: "6rem",
          opacity: 0.1,
          transform: "rotate(60deg)",
        }}
      >
        🌷
      </div>
      <div
        className="absolute"
        style={{
          bottom: "40px",
          right: "50%",
          fontSize: "7rem",
          opacity: 0.1,
          transform: "rotate(-60deg)",
        }}
      >
        🦋
      </div>

      <div
        className="absolute"
        style={{
          top: "30%",
          left: "5%",
          fontSize: "6rem",
          opacity: 0.1,
          transform: "rotate(45deg)",
        }}
      >
        🌻
      </div>
      <div
        className="absolute"
        style={{
          top: "30%",
          right: "5%",
          fontSize: "7rem",
          opacity: 0.1,
          transform: "rotate(-45deg)",
        }}
      >
        🦋
      </div>
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "15%",
          fontSize: "8rem",
          opacity: 0.1,
          transform: "rotate(90deg)",
        }}
      >
        🌸
      </div>
      <div
        className="absolute"
        style={{
          top: "50%",
          right: "15%",
          fontSize: "6rem",
          opacity: 0.1,
          transform: "rotate(-90deg)",
        }}
      >
        🌹
      </div>

      <div
        className="absolute"
        style={{
          top: "70%",
          left: "25%",
          fontSize: "7rem",
          opacity: 0.1,
          transform: "rotate(180deg)",
        }}
      >
        🦋
      </div>
      <div
        className="absolute"
        style={{
          top: "70%",
          right: "25%",
          fontSize: "6rem",
          opacity: 0.1,
          transform: "rotate(0deg)",
        }}
      >
        🌺
      </div>
      <div
        className="absolute"
        style={{
          top: "15%",
          left: "50%",
          fontSize: "8rem",
          opacity: 0.1,
          transform: "rotate(135deg)",
        }}
      >
        🌼
      </div>
      <div
        className="absolute"
        style={{
          bottom: "30%",
          left: "40%",
          fontSize: "7rem",
          opacity: 0.1,
          transform: "rotate(-135deg)",
        }}
      >
        🦋
      </div>

      {/* Elemente suplimentare pentru acoperire completă */}
      <div
        className="absolute"
        style={{
          top: "45%",
          left: "60%",
          fontSize: "6rem",
          opacity: 0.1,
          transform: "rotate(75deg)",
        }}
      >
        🌷
      </div>
      <div
        className="absolute"
        style={{
          bottom: "45%",
          right: "60%",
          fontSize: "7rem",
          opacity: 0.1,
          transform: "rotate(-75deg)",
        }}
      >
        🌻
      </div>
      <div
        className="absolute"
        style={{
          top: "80%",
          left: "80%",
          fontSize: "6rem",
          opacity: 0.1,
          transform: "rotate(15deg)",
        }}
      >
        🦋
      </div>
      <div
        className="absolute"
        style={{
          top: "20%",
          right: "80%",
          fontSize: "7rem",
          opacity: 0.1,
          transform: "rotate(-15deg)",
        }}
      >
        🌸
      </div>

      {/* Header */}
      <div className=" shadow-sm relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center">
            <div
              className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              <BookOpen
                className="w-8 h-8"
                style={{ color: "var(--color-bg)" }}
              />
            </div>
            <h1
              className="text-4xl font-bold"
              style={{ color: "var(--color-text)" }}
            >
              Centru Studii Hortensia
            </h1>
            <p className="text-lg" style={{ color: "var(--color-text)" }}>
              Sistem de studii bilingv din prima zi
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Îngrijire de Calitate - Large Card */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md">
            <div className="h-48 bg-gray-200 rounded-t-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/8422248/pexels-photo-8422248.jpeg"
                alt="Copii la școală"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h2
                className="text-3xl font-bold mb-8 flex items-center"
                style={{ color: "var(--color-text)" }}
              >
                Îngrijire de Calitate
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  >
                    <Bus
                      className="w-5 h-5"
                      style={{ color: "var(--color-bg)" }}
                    />
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Transport Școlar</strong> - în funcție de
                      necesitățile fiecărei familii.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  >
                    <Calendar
                      className="w-5 h-5"
                      style={{ color: "var(--color-bg)" }}
                    />
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
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-secondary)" }}
                  >
                    <Users
                      className="w-5 h-5"
                      style={{ color: "var(--color-bg)" }}
                    />
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
            <h2
              className="text-3xl font-bold mb-8"
              style={{ color: "var(--color-text)" }}
            >
              Mențiuni
            </h2>

            <div className="space-y-6">
              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Award
                    className="w-5 h-5 mr-2"
                    style={{ color: "var(--color-secondary)" }}
                  />
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
                  <Globe
                    className="w-5 h-5"
                    style={{ color: "var(--color-primary)" }}
                  />
                </div>
                <p className="text-gray-700 text-sm">
                  Oferta de cursuri opționale poate fi extinsă pe parcursul
                  anului școlar.
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Users
                    className="w-5 h-5 mr-2"
                    style={{ color: "var(--color-secondary)" }}
                  />
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
          <div
            className="lg:col-span-3 rounded-lg shadow-md text-white p-8"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Heart
                  className="w-8 h-8"
                  style={{ color: "var(--color-bg)" }}
                />
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
                  <Users
                    className="w-6 h-6"
                    style={{ color: "var(--color-bg)" }}
                  />
                </div>
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <BookOpen
                    className="w-6 h-6"
                    style={{ color: "var(--color-bg)" }}
                  />
                </div>
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Heart
                    className="w-6 h-6"
                    style={{ color: "var(--color-bg)" }}
                  />
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
