import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
  en: {
    translation: {
      welcome: "Welcome to our website!",
      // ... other translations in English
    },
  },
  es: {
    translation: {
      welcome: "¡Bienvenido a nuestro sitio web!",
      // ... other translations in Spanish
    },
  },
  // ... add more languages as needed
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Set your default language
  interpolation: {
    escapeValue: false, // This ensures React interprets translated text correctly
  },
});
