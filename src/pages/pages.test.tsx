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
});
