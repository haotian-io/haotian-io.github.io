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
    expect(container.querySelector('.interest-list')).not.toBeInTheDocument();
    expect(
      screen.queryByText('Xiamen University · Software Engineering'),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: /skills/i }),
    ).not.toBeInTheDocument();
  });

  it('shows a concise education entry with official rankings', () => {
    render(<HomePage content={SITE_CONTENT.en} />);
    expect(
      screen.getByRole('heading', { name: 'Education' }),
    ).toBeInTheDocument();
    expect(screen.getByAltText('Xiamen University emblem')).toBeInTheDocument();
    expect(screen.getByText('Xiamen University')).toBeInTheDocument();
    expect(
      screen.getByText(
        /B\.Eng\. in Software Engineering · Sep\. 2023 – Jun\. 2027/,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'U.S. News: #189' }),
    ).toHaveAttribute(
      'href',
      'https://www.usnews.com/education/best-global-universities/xiamen-university-506410',
    );
    expect(
      screen.getByRole('link', { name: 'ARWU: #101–150' }),
    ).toHaveAttribute(
      'href',
      'https://www.shanghairanking.com/universities/Xiamen-University',
    );
  });

  it('shows both experience entries with concise details', () => {
    render(<HomePage content={SITE_CONTENT.en} />);
    expect(screen.getByRole('heading', { name: 'Experience' })).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: 'Current Experience' }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByText(/Contributed to ProcuraClaw and its LFUSE retrieval layer/),
    ).toBeInTheDocument();
    expect(screen.getByText('ZGC LAB, Beijing')).toBeInTheDocument();
    expect(
      screen.getByText('Research Intern · Aug. 2026 – Present'),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Researching multimodal LLM agents for software engineering and human–computer interaction.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByAltText('ZGC LAB logo')).toBeInTheDocument();
    const entries = screen
      .getByText('H World Group, Shanghai')
      .closest('.profile-entries');
    expect(entries).not.toBeNull();
    expect(entries).toBe(
      screen.getByText('ZGC LAB, Beijing').closest('.profile-entries'),
    );
  });

  it('uses the high-resolution local portrait', () => {
    render(<HomePage content={SITE_CONTENT.en} />);
    expect(screen.getByAltText('Portrait of Haotian Liu')).toHaveClass(
      'hero-portrait-large',
    );
    expect(screen.getByAltText('Portrait of Haotian Liu')).toHaveAttribute(
      'src',
      '/Avatar.jpg',
    );
  });

  it('shows all four projects with accurate status wording', () => {
    render(<ProjectsPage content={SITE_CONTENT.en} />);
    expect(screen.getAllByTestId('project')).toHaveLength(4);
    expect(screen.getByText('Completed')).toBeInTheDocument();
    expect(screen.getAllByText('Under review')).toHaveLength(2);
  });

  it('shows the current LHMG submission venue', () => {
    render(<HomePage content={SITE_CONTENT.en} />);
    expect(screen.getAllByText('Under review')).toHaveLength(4);
    expect(screen.queryByText(/EMNLP 2026/)).not.toBeInTheDocument();
  });

  it('links only to public project materials and uses consistent experience details', () => {
    render(<ProjectsPage content={SITE_CONTENT.en} />);
    const links = screen
      .getAllByRole('link')
      .map((link) => link.getAttribute('href'));
    expect(links).toEqual([
      'https://arxiv.org/abs/2604.08987',
      'https://github.com/haotian-io/ProcuraClaw',
    ]);

    const { rerender } = render(<HomePage content={SITE_CONTENT.en} />);
    expect(screen.getByText(/Nov\. 2025 – Apr\. 2026/)).toBeInTheDocument();
    expect(screen.getByAltText('H World Group logo')).toBeInTheDocument();
    expect(
      screen.queryByText(/Conflict update accuracy/i),
    ).not.toBeInTheDocument();
    rerender(<HomePage content={SITE_CONTENT.ja} />);
    expect(screen.getByText(/2025年11月 – 2026年4月/)).toBeInTheDocument();
    rerender(<HomePage content={SITE_CONTENT.zh} />);
    expect(
      screen.getByText(/2025 年 11 月 – 2026 年 4 月/),
    ).toBeInTheDocument();
  });

  it('matches the current academic wording', () => {
    const { rerender } = render(<HomePage content={SITE_CONTENT.en} />);
    expect(
      screen.getByText(/B\.Eng\. in Software Engineering/),
    ).toBeInTheDocument();
    rerender(<ProjectsPage content={SITE_CONTENT.en} />);
    expect(screen.getByText(/LFUSE retrieval layer/)).toBeInTheDocument();
    expect(screen.getByText(/24 participants and 72 cases/)).toBeInTheDocument();
    expect(
      screen.getByText(/contributed to a deployed procurement-search system/i),
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/EMNLP 2026|AAAI 2027/),
    ).not.toBeInTheDocument();
  });

  it('keeps research interests only in the biography', () => {
    const { rerender } = render(<HomePage content={SITE_CONTENT.en} />);
    expect(
      screen.getByText(
        /I study multimodal LLM agents and their use in software engineering and human–computer interaction/i,
      ),
    ).toBeInTheDocument();
    expect(screen.queryByText('Multimodal LLM Agents')).not.toBeInTheDocument();
    rerender(<HomePage content={SITE_CONTENT.zh} />);
    expect(
      screen.getByText(
        /我研究多模态大语言模型智能体，以及其在软件工程与人机交互中的应用/,
      ),
    ).toBeInTheDocument();
    rerender(<HomePage content={SITE_CONTENT.ja} />);
    expect(
      screen.getByText(
        /マルチモーダルLLMエージェントと、ソフトウェア工学・ヒューマンコンピュータインタラクションへの応用を研究しています/,
      ),
    ).toBeInTheDocument();
  });
});
