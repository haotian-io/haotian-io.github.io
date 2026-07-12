import { useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Locale } from '../content/types';
import { LocaleContext } from './locale-context';
import { parseLocale } from './locale-utils';

const STORAGE_KEY = 'portfolio-locale';

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() =>
    parseLocale(localStorage.getItem(STORAGE_KEY)),
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale }), [locale]);
  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}
