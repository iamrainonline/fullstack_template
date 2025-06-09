// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// // NAVBAR Jsonn
import navEn from "../src/lang/pages/Navbar/en.json";
import navRo from "../src/lang/pages/Navbar/ro.json";

import homeEn from "../src/lang/pages/Home/en.json";
import homeRo from "../src/lang/pages/Home/ro.json";

const resources = {
  en: {
    Navbar: navEn,
    Home: homeEn,
  },
  ro: {
    Navbar: navRo,
    Home: homeRo,
  },
};

// Initialize i18n once, outside of any component
i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources, // Provide the translations
    lng: "ro", // Default language
    fallbackLng: "ro",
    ns: ["Navbar", "Home"], // Namespaces corresponding to each page
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
