"use client";

import * as React from "react";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { initReactI18next } from "react-i18next";

import ptBR from "../../public/i18n/pt_BR/common.json";
import enUS from "../../public/i18n/en_US/common.json";

const resources = {
  pt_BR: { common: ptBR },
  en_US: { common: enUS },
};

if (!i18next.isInitialized) {
  i18next.use(initReactI18next).init({
    resources,
    lng: "pt_BR",
    fallbackLng: "pt_BR",
    ns: ["common"],
    defaultNS: "common",
    interpolation: { escapeValue: false },
  });
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // @ts-expect-error: ReactNode type mismatch due to monorepo or types conflict
  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}
