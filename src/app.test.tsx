import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { routeFromHash } from './app-route';
import { App } from './app';

describe('app shell', () => {
  it('routes hashes to the two-page site', () => {
    expect(routeFromHash('')).toBe('home');
    expect(routeFromHash('#/projects')).toBe('projects');
  });

  it('shows concise navigation and only professional contact links', () => {
    localStorage.clear();
    render(<App />);
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '日本語' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '中文' })).toBeInTheDocument();
    expect(
      screen.queryByText(/instagram|zhihu|bilibili|phone/i),
    ).not.toBeInTheDocument();
  });

  it('uses a semantic main, portrait text, CV target, and safe external links', () => {
    localStorage.clear();
    const { container } = render(<App />);
    expect(container.querySelectorAll('main')).toHaveLength(1);
    expect(screen.getByAltText('Portrait of Haotian Liu')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'CV' })).toHaveAttribute(
      'href',
      '/CV_Haotian_Liu_202607_SGU.pdf',
    );
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'rel',
      'noreferrer',
    );
  });
});
