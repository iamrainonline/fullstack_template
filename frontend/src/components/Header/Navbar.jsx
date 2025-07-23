import { useState, useContext, useEffect } from "react";
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
import { Link } from "react-router-dom";
import mylogo from "./mylogo.png";

const Navbar = () => {
  const { i18n, t } = useTranslation("Navbar");
  const [activeMenu, setActiveMenu] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const { isAuthenticated, authLoading, currentUser } = useContext(AuthContext);

  const menuItems = [
    { id: "Home", label: t("home") },
    { id: "About", label: t("about"), url: "/About" },
    { id: "Programs", label: t("programs"), url: "/Programs" },
    { id: "Contact", label: t("contact"), url: "/Contact" },
    { id: "Events", label: t("events"), url: "/Events" },
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

  // Watch for authentication changes to trigger re-render
  useEffect(() => {
    console.log("Auth state changed:", {
      isAuthenticated,
      currentUser,
      authLoading,
    });
  }, [isAuthenticated, currentUser, authLoading]);

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
                    0774518825
                  </span>
                </div>
                <div className="flex items-center group">
                  <Mail className="w-4 h-4 mr-2 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:text-white transition-colors duration-300">
                    cdshortensia.2024@gmail.com
                  </span>
                </div>
              </div>
              <div className="flex items-center group">
                <MapPin className="w-4 h-4 mr-2 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:text-white transition-colors duration-300">
                  Comuna Nanov, Romania
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main navbar */}
        <header className="bg-white/90 backdrop-blur-md shadow-md w-full border-b border-white/20  origin-top">
          <div className="max-w-7xl mx-auto px-3">
            <div className="flex justify-between items-center h-16">
              {/* Logo mic */}
              <Link to="/" className="flex items-center">
                <div className="w-10 h-10 bg-[var(--color-primary)] rounded-xl flex items-center justify-center mr-3 shadow">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-base font-bold text-slate-800">
                    {t("LogoTitle")}
                  </h1>
                  <p className="text-xs text-slate-500 hidden sm:block">
                    {t("LogoSubtitle")}
                  </p>
                </div>
              </Link>

              {/* Desktop Nav mic */}
              <nav className="hidden lg:flex items-center space-x-1">
                {menuItems.map((item) => (
                  <Link
                    to={item.url}
                    key={item.id}
                    onClick={() => setActiveMenu(item.id)}
                    className={`px-3 py-2 text-sm font-medium rounded-md ${
                      activeMenu === item.id
                        ? "text-[var(--color-primary)] bg-[var(--color-primary)]/10"
                        : "text-slate-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Dreapta mică */}
              <div className="flex items-center space-x-2">
                {/* Limba */}
                <div className="relative">
                  <button
                    onClick={() => setLangMenuOpen(!langMenuOpen)}
                    className="flex items-center gap-1 px-3 py-2 text-sm border border-slate-200 rounded-md"
                  >
                    <img
                      src={currentLanguage.flag}
                      alt={currentLanguage.name}
                      className="w-4 h-3 rounded"
                    />
                    <span className="hidden sm:inline">
                      {currentLanguage.name}
                    </span>
                    <span className="sm:hidden">
                      {currentLanguage.code.toUpperCase()}
                    </span>
                    <ChevronDown
                      className={`w-3 h-3 transition-transform ${
                        langMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {langMenuOpen && (
                    <div className="absolute right-0 mt-1 w-40 bg-white border border-slate-200 rounded-md shadow z-50 py-1">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`w-full flex items-center gap-2 px-3 py-2 text-sm ${
                            lang.code === i18n.language
                              ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                              : ""
                          }`}
                        >
                          <img
                            src={lang.flag}
                            alt={lang.name}
                            className="w-4 h-3 rounded"
                          />
                          <span>{lang.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Login / Dashboard */}
                {!authLoading ? (
                  isAuthenticated ? (
                    <Link
                      to="/dashboard"
                      className="hidden sm:flex items-center justify-center w-10 h-10 bg-[var(--color-primary)] text-white rounded-md"
                    >
                      <User className="w-4 h-4" />
                    </Link>
                  ) : (
                    <Link
                      to="/login"
                      className="hidden sm:flex items-center justify-center w-10 h-10 bg-[var(--color-primary)] text-white rounded-md"
                    >
                      <Key className="w-4 h-4" />
                    </Link>
                  )
                ) : (
                  <div className="w-10 h-10 flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-slate-300 border-t-[var(--color-primary)] rounded-full animate-spin"></div>
                  </div>
                )}

                {/* Buton meniu mobil */}
                <button
                  className="lg:hidden p-2 text-slate-700"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
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
                <Link to={item.url}>
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
                </Link>
              ))}

              {/* Mobile Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-slate-200">
                <button className="w-full px-5 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  {t("applynow")}
                </button>

                <div className="flex space-x-3">
                  {!authLoading && (
                    <>
                      {!isAuthenticated && (
                        <Link
                          to="/login"
                          className="flex-1 flex items-center justify-center py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-xl transition-all duration-300"
                        >
                          <Key className="w-5 h-5 mr-2" />
                          Login
                        </Link>
                      )}
                      {isAuthenticated && (
                        <Link
                          to="/dashboard"
                          className="flex-1 flex items-center justify-center py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl transition-all duration-300"
                        >
                          <User className="w-5 h-5 mr-2" />
                          Dashboard
                        </Link>
                      )}
                    </>
                  )}
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
