import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import roFlag from "./flags/romania.png";
import engFlag from "./flags/united-kingdom.png";

const Navbar = () => {
  const { i18n, t } = useTranslation("Navbar");
  const [activeMenu, setActiveMenu] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { id: "Home", label: t("home") },
    { id: "About", label: t("about") },
    { id: "Programs", label: t("programs") },
    { id: "Contact", label: t("contact") },
  ];

  const languages = [
    { code: "en", name: "English", flag: engFlag },
    { code: "ro", name: "Română", flag: roFlag },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setLangMenuOpen(false);
  };

  const handleMenuClick = (itemId) => {
    setActiveMenu(itemId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top info bar */}
      <div className="hidden md:block bg-slate-800 text-slate-300 text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +40 123 456 789
            </span>
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              admissions@international-school.edu
            </span>
          </div>
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            Alexandria, Romania
          </span>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={`bg-white shadow-lg fixed w-full top-0 z-50 transition-shadow duration-300 ${
          scrolled ? "shadow-xl" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg sm:text-xl">
                  IS
                </span>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-slate-800">
                  {t("International_School")}
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 hidden sm:block">
                  {t("Excellence_in_education")}
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveMenu(item.id)}
                  className={`px-4 py-2 font-medium transition-colors ${
                    activeMenu === item.id
                      ? "text-blue-600"
                      : "text-slate-700 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                  {activeMenu === item.id && (
                    <div className="h-0.5 bg-blue-600 rounded-full mt-1"></div>
                  )}
                </button>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="flex items-center space-x-2 px-3 py-2 text-slate-700 hover:text-blue-600 rounded-lg transition-colors"
                >
                  <img
                    src={currentLanguage.flag}
                    alt={currentLanguage.name}
                    className="w-5 h-4 rounded"
                  />
                  <span className="font-medium hidden sm:inline">
                    {currentLanguage.name}
                  </span>
                  <span className="font-medium sm:hidden">
                    {currentLanguage.code.toUpperCase()}
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      langMenuOpen ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {langMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border py-2 z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full text-left px-4 py-2 flex items-center space-x-3 ${
                          lang.code === i18n.language
                            ? "bg-blue-50 text-blue-600"
                            : "hover:bg-slate-50"
                        }`}
                      >
                        <img
                          src={lang.flag}
                          alt={lang.name}
                          className="w-5 h-4 rounded"
                        />
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Apply Button */}
              <button className="hidden sm:flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-colors">
                {t("applynow")}
              </button>

              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 text-slate-700 hover:text-blue-600 rounded-lg"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <span
                    className={`block h-0.5 bg-current transition-all ${
                      mobileMenuOpen ? "rotate-45 translate-y-1.5" : "w-6"
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 w-6 bg-current transition-all ${
                      mobileMenuOpen ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 bg-current transition-all ${
                      mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : "w-4"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Simple Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute top-16 sm:top-20 right-0 w-64 bg-white shadow-xl rounded-bl-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Navigation */}
            <div className="p-4 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium ${
                    activeMenu === item.id
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile Apply Button */}
              <button className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg">
                {t("applynow")}
              </button>

              {/* Mobile Language Selector */}
              <div className="border-t pt-4 mt-4">
                <p className="text-sm font-medium text-slate-600 mb-2">
                  Language
                </p>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg ${
                      lang.code === i18n.language
                        ? "bg-blue-50 text-blue-600"
                        : "hover:bg-slate-50"
                    }`}
                  >
                    <img
                      src={lang.flag}
                      alt={lang.name}
                      className="w-5 h-4 rounded"
                    />
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Close language dropdown when clicking outside */}
      {langMenuOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setLangMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
