import { useEffect, useState } from 'react';
import { routeFromHash } from './app-route';
import { SiteShell } from './components/site-shell';
import { SITE_CONTENT } from './content/site-content';
import { useLocale } from './i18n/locale-context';
import { LocaleProvider } from './i18n/locale';
import { HomePage } from './pages/home';
import { ProjectsPage } from './pages/projects';

function RoutedContent() {
  const { locale } = useLocale();
  const [route, setRoute] = useState(() => routeFromHash(window.location.hash));
  useEffect(() => {
    const update = () => setRoute(routeFromHash(window.location.hash));
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);
  const content = SITE_CONTENT[locale];
  return (
    <SiteShell>
      {route === 'projects' ? (
        <ProjectsPage content={content} />
      ) : (
        <HomePage content={content} />
      )}
    </SiteShell>
  );
}

export function App() {
  return (
    <LocaleProvider>
      <RoutedContent />
    </LocaleProvider>
  );
}
