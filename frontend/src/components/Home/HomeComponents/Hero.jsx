import React from "react";
import { ChevronRight, Globe, GraduationCap, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
const Hero = () => {
  const { t } = useTranslation("Home");

  return (
    <div>
      {/* Hero section with faded image */}
      <div className="relative min-h-screen flex items-center">
        {/* Background video with left-to-right fade */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://videos.pexels.com/video-files/7945191/7945191-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
          </video>

          {/* Gradient fade from left to right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"></div>

          {/* Additional subtle overlay for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 via-purple-50/40 to-transparent"></div>
        </div>

        {/* Content on the left side where image is faded */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8">
              <Globe className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-medium tracking-wide">
                {t("top_info")}
              </span>
              <div className="h-px w-16 bg-gradient-to-r from-blue-400 to-purple-400"></div>
            </div>

            {/* Main title */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-none mb-6">
              <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-purple-600 mt-2 tracking-wide">
                {t("main_title")}
              </span>
              <span>Hortensia</span>
            </h1>

            {/* Mission statement */}
            <p className="text-xl md:text-1xl text-gray-700 leading-relaxed mb-12 font-medium max-w-xl">
              {t("sub_title")}
            </p>

            {/* Stats row */}
            <div className="flex items-center gap-12 mb-12">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  2,400+
                </div>
                <div className="text-gray-600 text-sm tracking-wide font-medium">
                  {t("students")}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  65+
                </div>
                <div className="text-gray-600 text-sm tracking-wide font-medium">
                  {t("countries")}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-1">
                  98%
                </div>
                <div className="text-gray-600 text-sm tracking-wide font-medium">
                  {t("rate_os")}
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-6">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center">
                {t("homeBtn")}
                <ChevronRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
