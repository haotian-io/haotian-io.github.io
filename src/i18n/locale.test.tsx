import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useLocale } from './locale-context';
import { LocaleProvider } from './locale';
import { parseLocale } from './locale-utils';

function Probe() {
  const { locale, setLocale } = useLocale();
  return <button onClick={() => setLocale('ja')}>{locale}</button>;
}

describe('locale', () => {
  it('parses supported values and falls back to English', () => {
    expect(parseLocale('zh')).toBe('zh');
    expect(parseLocale('invalid')).toBe('en');
    expect(parseLocale(null)).toBe('en');
  });

  it('defaults to English and persists changes', () => {
    localStorage.clear();
    render(
      <LocaleProvider>
        <Probe />
      </LocaleProvider>,
    );
    expect(screen.getByRole('button')).toHaveTextContent('en');
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('button')).toHaveTextContent('ja');
    expect(localStorage.getItem('portfolio-locale')).toBe('ja');
    expect(document.documentElement.lang).toBe('ja');
  });
});
