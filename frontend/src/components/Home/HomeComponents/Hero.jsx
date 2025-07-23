import React from "react";
import { ChevronRight, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import "../../../styles/theme.css";

const Hero = () => {
  const { t } = useTranslation("Home");

  return (
    <div className="transform scale-[0.9] origin-top m-0 p-0">
      <div className="relative w-screen h-screen flex items-center overflow-hidden m-0 p-0">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full m-0 p-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover m-0 p-0"
          >
            <source
              src="https://videos.pexels.com/video-files/8612325/8612325-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
          </video>

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/80 via-[var(--color-primary)]/40 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8 mt-12">
              <Globe className="w-5 h-5 text-[var(--color-primary)]" />
              <span className="text-[var(--color-primary)] font-medium tracking-wide">
                {t("top_info")}
              </span>
              <div className="h-px w-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)]"></div>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              <span className="block text-2xl md:text-3xl lg:text-4xl text-[var(--color-primary)] mt-2 tracking-wide">
                {t("main_title")}
              </span>
              <span className="text-6xl">Hortensia</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10 max-w-xl">
              {t("sub_title")}
            </p>

            {/* Stats */}
            <div className="flex items-center gap-10 mb-10">
              <div>
                <div className="text-2xl font-bold text-[var(--color-primary)] mb-1">
                  150+
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  {t("students")}
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--color-primary)] mb-1">
                  10+
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  {t("countries")}
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--color-primary)] mb-1">
                  98%
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  {t("rate_os")}
                </div>
              </div>
            </div>

            {/* Button fără hover */}
            <div>
              <button className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center">
                {t("homeBtn")}
                <ChevronRight className="w-5 h-5 ml-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
