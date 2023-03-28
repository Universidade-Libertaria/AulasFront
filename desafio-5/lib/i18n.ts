import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Cookies from "js-cookie";

import enJson from "../locale/en.json";
import ptBrJson from "../locale/ptBr.json";
import esJson from "../locale/es.json";
import kuJson from "../locale/ku.json";

i18n.use(initReactI18next).init({
  fallbackLng: Cookies.get("i18next") || "ptBR",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: enJson,
    ptBR: ptBrJson,
    es: esJson,
    ku: kuJson,
  },
});

export default i18n;
