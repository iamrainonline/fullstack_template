import { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import roFlag from "./flags/romania.png";
import engFlag from "./flags/united-kingdom.png";
import {
  Key,
  User,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { i18n, t } = useTranslation("Navbar");
  const [activeMenu, setActiveMenu] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const { isAuthenticated } = useContext(AuthContext);
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
      {/* Fixed header container */}
      <div className="fixed w-full top-0 z-50">
        {/* Top info bar */}
        <div className="hidden md:block bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-900 text-slate-300 text-sm relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-20 w-16 h-16 bg-blue-500 rounded-full opacity-5 blur-lg"></div>
            <div className="absolute top-0 right-40 w-12 h-12 bg-purple-500 rounded-full opacity-5 blur-lg"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-8">
                <div className="flex items-center group">
                  <Phone className="w-4 h-4 mr-2 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:text-white transition-colors duration-300">
                    +40 123 456 789
                  </span>
                </div>
                <div className="flex items-center group">
                  <Mail className="w-4 h-4 mr-2 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:text-white transition-colors duration-300">
                    admitere@hortensia.int.edu
                  </span>
                </div>
              </div>
              <div className="flex items-center group">
                <MapPin className="w-4 h-4 mr-2 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:text-white transition-colors duration-300">
                  Alexandria, Romania
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main navbar */}
        <header
          className={`bg-white/95 backdrop-blur-md shadow-lg w-full transition-all duration-300 border-b border-white/20 
          
          }`}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <div className="flex items-center">
                <a href="/" className="flex items-center group">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-xl flex items-center justify-center mr-4 group-hover:scale-105 transition-all duration-300 shadow-lg">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                      HORTENSIA
                    </h1>
                    <p className="text-sm text-slate-500 hidden sm:block">
                      CENTRU DE STUDII
                    </p>
                  </div>
                </a>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveMenu(item.id)}
                    className={`relative px-6 py-3 font-medium transition-all duration-300 rounded-xl group ${
                      activeMenu === item.id
                        ? "text-blue-600 bg-blue-50"
                        : "text-slate-700 hover:text-blue-600 hover:bg-blue-50/50"
                    }`}
                  >
                    {item.label}
                    {activeMenu === item.id && (
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                ))}
              </nav>

              {/* Right side actions */}
              <div className="flex items-center space-x-3">
                {/* Language Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setLangMenuOpen(!langMenuOpen)}
                    className="flex items-center space-x-2 px-4 py-2.5 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 border border-slate-200/50 hover:border-blue-200"
                  >
                    <img
                      src={currentLanguage.flag}
                      alt={currentLanguage.name}
                      className="w-5 h-4 rounded shadow-sm"
                    />
                    <span className="font-medium hidden sm:inline">
                      {currentLanguage.name}
                    </span>
                    <span className="font-medium sm:hidden">
                      {currentLanguage.code.toUpperCase()}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        langMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {langMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-white/20 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`w-full text-left px-4 py-3 flex items-center space-x-3 transition-all duration-200 ${
                            lang.code === i18n.language
                              ? "bg-blue-50 text-blue-600"
                              : "hover:bg-slate-50"
                          }`}
                        >
                          <img
                            src={lang.flag}
                            alt={lang.name}
                            className="w-5 h-4 rounded shadow-sm"
                          />
                          <span className="font-medium">{lang.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Login Button */}

                {/* Dashboard Button */}
                {isAuthenticated ? (
                  <a
                    href="/dashboard"
                    className="hidden sm:flex items-center justify-center w-11 h-11 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                    title="Dashboard"
                  >
                    <User className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ) : (
                  <a
                    href="/login"
                    className="hidden sm:flex items-center justify-center w-11 h-11 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                    title="Login"
                  >
                    <Key className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                )}

                {/* Mobile menu button */}
                <button
                  className="lg:hidden p-2.5 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute top-20 md:top-[124px] right-0 w-80 bg-white/95 backdrop-blur-md shadow-2xl rounded-bl-2xl border-l border-b border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Navigation */}
            <div className="p-6 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`w-full text-left px-5 py-4 rounded-xl font-medium transition-all duration-300 ${
                    activeMenu === item.id
                      ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border border-blue-200"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-slate-200">
                <button className="w-full px-5 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  {t("applynow")}
                </button>

                <div className="flex space-x-3">
                  <a
                    href="/login"
                    className="flex-1 flex items-center justify-center py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-xl transition-all duration-300"
                  >
                    <Key className="w-5 h-5 mr-2" />
                    Login
                  </a>
                  <a
                    href="/dashboard"
                    className="flex-1 flex items-center justify-center py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl transition-all duration-300"
                  >
                    <User className="w-5 h-5 mr-2" />
                    Dashboard
                  </a>
                </div>
              </div>

              {/* Mobile Language Selector */}
              <div className="border-t border-slate-200 pt-4 mt-6">
                <p className="text-sm font-semibold text-slate-600 mb-3">
                  Language
                </p>
                <div className="space-y-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        lang.code === i18n.language
                          ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border border-blue-200"
                          : "hover:bg-slate-50"
                      }`}
                    >
                      <img
                        src={lang.flag}
                        alt={lang.name}
                        className="w-6 h-4 rounded shadow-sm"
                      />
                      <span className="font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
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
