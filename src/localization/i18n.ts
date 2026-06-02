import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { defaultLocales } from ".";

/** Инициализация i18next с использованием нескольких источников перевода. */
i18n.use(initReactI18next).init({
  resources: defaultLocales,
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
