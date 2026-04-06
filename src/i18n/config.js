import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { DEFAULT_LOCALE, LOCALE_STORAGE_KEY, SUPPORTED_LOCALES } from "./constants";
import en from "../locales/en/translation.json";
import hi from "../locales/hi/translation.json";

function readStoredLocale() {
  try {
    const v = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (SUPPORTED_LOCALES.includes(v)) return v;
  } catch {
    /* ignore */
  }
  return DEFAULT_LOCALE;
}

export function getStoredLocale() {
  return readStoredLocale();
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
  },
  lng: readStoredLocale(),
  fallbackLng: DEFAULT_LOCALE,
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, lng);
    document.documentElement.lang = lng === "hi" ? "hi" : "en";
  } catch {
    /* ignore */
  }
});

try {
  const lng = i18n.language?.startsWith("hi") ? "hi" : "en";
  document.documentElement.lang = lng === "hi" ? "hi" : "en";
  localStorage.setItem(LOCALE_STORAGE_KEY, lng);
} catch {
  /* ignore */
}

export default i18n;
