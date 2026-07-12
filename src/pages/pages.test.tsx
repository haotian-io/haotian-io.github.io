import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SITE_CONTENT } from '../content/site-content';
import { HomePage } from './home';
import { ProjectsPage } from './projects';

describe('academic pages', () => {
  it('keeps the English homepage compact', () => {
    render(<HomePage content={SITE_CONTENT.en} />);
    expect(screen.getAllByTestId('publication')).toHaveLength(3);
    expect(screen.getAllByTestId('selected-project')).toHaveLength(3);
    expect(
      screen.queryByRole('heading', { name: /skills|education/i }),
    ).not.toBeInTheDocument();
  });

  it('shows all six projects with accurate status wording', () => {
    render(<ProjectsPage content={SITE_CONTENT.en} />);
    expect(screen.getAllByTestId('project')).toHaveLength(6);
    expect(screen.getByText(/accepted at IJCNN 2026/i)).toBeInTheDocument();
    expect(screen.getAllByText('Under review')).toHaveLength(2);
  });

  it('uses the corrected project links and experience details', () => {
    render(<ProjectsPage content={SITE_CONTENT.en} />);
    const links = screen
      .getAllByRole('link')
      .map((link) => link.getAttribute('href'));
    expect(links).toContain('https://github.com/haotian-io/NeuroMark');
    expect(links).toContain(
      'https://github.com/haotian-io/Long-Horizon-Memory-Governance-for-LLM-Agents',
    );
    expect(links).toContain('https://github.com/haotian-io/ProcuraClaw');

    const { rerender } = render(<HomePage content={SITE_CONTENT.en} />);
    expect(screen.getByText(/Jan\. 2026 – Apr\. 2026/)).toBeInTheDocument();
    expect(screen.getByAltText('H World Group logo')).toBeInTheDocument();
    expect(
      screen.queryByText(/Conflict update accuracy/i),
    ).not.toBeInTheDocument();
    rerender(<HomePage content={SITE_CONTENT.zh} />);
    expect(screen.getByText(/2026 年 1 月 – 4 月/)).toBeInTheDocument();
  });
});
