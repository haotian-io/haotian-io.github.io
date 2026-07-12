import type { Locale } from '../content/types';

export function parseLocale(value: string | null): Locale {
  return value === 'ja' || value === 'zh' || value === 'en' ? value : 'en';
}
