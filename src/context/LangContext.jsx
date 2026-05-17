/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import en from '../i18n/en';
import it from '../i18n/it';

const dictionaries = { en, it };
const LangContext = createContext(null);

const getInitialLang = () => {
  const stored = localStorage.getItem('lang');
  return stored === 'it' ? 'it' : 'en';
};

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLang);

  const setLanguage = (next) => {
    const valid = next === 'it' ? 'it' : 'en';
    setLang(valid);
    localStorage.setItem('lang', valid);
    document.documentElement.lang = valid;
  };

  const t = useCallback((key) => dictionaries[lang][key] ?? dictionaries.en[key] ?? key, [lang]);

  const value = useMemo(() => ({ lang, setLanguage, t }), [lang, t]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside LangProvider');
  return ctx;
};
