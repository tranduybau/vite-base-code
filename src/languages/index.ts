import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import LOCAL_STORAGE_KEYS from "@/constants/local-storage-keys";
import resources from "@/languages/translator/";
import { Language } from "@/types/locales";

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem(LOCAL_STORAGE_KEYS.LANG) || Language.EN,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
