// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// // NAVBAR Jsonn
import navEn from "../src/lang/pages/Navbar/en.json";
import navRo from "../src/lang/pages/Navbar/ro.json";

const resources = {
  en: {
    Navbar: navEn,
  },
  ro: {
    Navbar: navRo,
  },
};

// Initialize i18n once, outside of any component
i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources, // Provide the translations
    lng: "ro", // Default language
    fallbackLng: "en",
    ns: ["Navbar"], // Namespaces corresponding to each page
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
