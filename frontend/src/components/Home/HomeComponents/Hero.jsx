import React from "react";
import { ChevronRight, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import "../../../styles/theme.css";

const Hero = () => {
  const { t } = useTranslation("Home");

  return (
    <div className="transform origin-top m-0 p-0">
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
        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 mt-10">
              <Globe className="w-5 h-5 md:w-4 md:h-4 text-[var(--color-primary)]" />
              <span className="text-[var(--color-primary)] text-base md:text-sm font-medium tracking-wide">
                {t("top_info")}
              </span>
              <div className="h-px w-10 bg-[var(--color-primary)]"></div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug mb-4">
              <span className="block text-5xl md:text-4xl lg:text-5xl text-[var(--color-primary)] mt-1 tracking-wide">
                {t("main_title")}
              </span>
              <span className="text-5xl md:text-5xl">Hortensia</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-base lg:text-lg text-gray-700 leading-relaxed mb-8 max-w-md">
              {t("sub_title")}
            </p>

            {/* Stats */}
            <div className="flex items-center gap-8 mb-8">
              <div>
                <div className="text-2xl md:text-xl font-bold text-[var(--color-primary)] mb-1">
                  150+
                </div>
                <div className="text-gray-600 text-sm md:text-xs font-medium">
                  {t("students")}
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-xl font-bold text-[var(--color-primary)] mb-1">
                  3+
                </div>
                <div className="text-gray-600 text-sm md:text-xs font-medium">
                  {t("countries")}
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-xl font-bold text-[var(--color-primary)] mb-1">
                  98%
                </div>
                <div className="text-gray-600 text-sm md:text-xs font-medium">
                  {t("rate_os")}
                </div>
              </div>
            </div>

            {/* Button */}
            <div>
              <button className="bg-[var(--color-primary)] text-white px-6 py-3 md:px-5 md:py-2.5 rounded-full font-medium text-base md:text-sm flex items-center">
                {t("homeBtn")}
                <ChevronRight className="w-5 h-5 md:w-4 md:h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
