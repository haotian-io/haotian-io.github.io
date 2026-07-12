import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SITE_CONTENT } from '../content/site-content';
import { HomePage } from './home';
import { ProjectsPage } from './projects';

describe('academic pages', () => {
  it('keeps the English homepage compact', () => {
    const { container } = render(<HomePage content={SITE_CONTENT.en} />);
    expect(screen.getAllByTestId('publication')).toHaveLength(3);
    expect(screen.getAllByTestId('selected-project')).toHaveLength(3);
    expect(container.querySelector('.hero-role')).not.toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: /skills|education/i }),
    ).not.toBeInTheDocument();
  });

  it('shows all six projects with accurate status wording', () => {
    render(<ProjectsPage content={SITE_CONTENT.en} />);
    expect(screen.getAllByTestId('project')).toHaveLength(6);
    expect(screen.getByText('Completed')).toBeInTheDocument();
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

  it('matches the corrected July 2026 CV wording', () => {
    const { rerender } = render(<HomePage content={SITE_CONTENT.en} />);
    expect(
      screen.getByText(/B\.Eng\. in Software Engineering/),
    ).toBeInTheDocument();
    rerender(<ProjectsPage content={SITE_CONTENT.en} />);
    expect(
      screen.getByText(
        /20 LLMs on 2,379 clinical questions and 16 VLMs across six brain-imaging tasks/,
      ),
    ).toBeInTheDocument();
    expect(screen.getByText(/Llama 3\.1 70B/)).toBeInTheDocument();
    expect(
      screen.getByText(/In controlled diagnostics, observed a 13\.3-point/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/contributed to a deployed procurement-search system/i),
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/IntrA|TOF-MRA|weak-label strategies|LLaMA-3\.1-70B/),
    ).not.toBeInTheDocument();
  });

  it('states the MLLM agent research direction consistently in all locales', () => {
    const { rerender } = render(<HomePage content={SITE_CONTENT.en} />);
    expect(
      screen.getByText(
        /research interests include multimodal large language model agents, AI for software engineering, and human–computer interaction/i,
      ),
    ).toBeInTheDocument();
    rerender(<HomePage content={SITE_CONTENT.zh} />);
    expect(
      screen.getByText(
        /研究兴趣包括多模态大语言模型智能体、人工智能赋能的软件工程，以及人机交互/,
      ),
    ).toBeInTheDocument();
    rerender(<HomePage content={SITE_CONTENT.ja} />);
    expect(
      screen.getByText(
        /研究分野は、マルチモーダル大規模言語モデルエージェント、AIを活用したソフトウェア工学、ヒューマン・コンピュータ・インタラクション/,
      ),
    ).toBeInTheDocument();
  });
});
