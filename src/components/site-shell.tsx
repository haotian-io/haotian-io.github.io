import type { ReactNode } from 'react';
import { SITE_CONTENT } from '../content/site-content';
import type { Locale } from '../content/types';
import { useLocale } from '../i18n/locale-context';

export function SiteShell({ children }: { children: ReactNode }) {
  const { locale, setLocale } = useLocale();
  const content = SITE_CONTENT[locale];
  const locales: Array<[Locale, string]> = [
    ['en', 'EN'],
    ['ja', '日本語'],
    ['zh', '中文'],
  ];

  return (
    <div className="site">
      <header className="site-header">
        <a className="wordmark" href="#/">
          HL
        </a>
        <nav aria-label="Primary navigation">
          <a href="#/">{content.nav.home}</a>
          <a href="#/projects">{content.nav.projects}</a>
          <a href="/CV_Haotian_Liu.pdf">{content.nav.cv}</a>
        </nav>
        <div className="locale-switcher" aria-label="Language">
          {locales.map(([value, label]) => (
            <button
              aria-pressed={locale === value}
              key={value}
              onClick={() => setLocale(value)}
            >
              {label}
            </button>
          ))}
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <span>© 2026 Haotian Liu</span>
        <a href="mailto:haotianliu.me%40gmail.com">
          haotianliu.me[AT]gmail.com
        </a>
      </footer>
    </div>
  );
}
