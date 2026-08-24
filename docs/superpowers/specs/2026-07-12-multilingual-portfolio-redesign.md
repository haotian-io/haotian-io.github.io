# Multilingual Portfolio Redesign

## Objective

Upgrade Haotian Liu's existing GitProfile-based site into a concise general-purpose personal homepage for academic and industry audiences. Preserve the React, Vite, DaisyUI, GitHub data integration, and GitHub Pages deployment foundation while improving information architecture, visual hierarchy, and multilingual support.

The site must remain academically restrained: short factual copy, evidence-led project summaries, limited animation, and no decorative clutter.

## Audience and Language

- Primary audiences: researchers, professors, graduate admissions readers, and technical recruiters.
- English is the default and canonical content language.
- Japanese and Simplified Chinese provide complete translations of the same information structure.
- A compact `EN / 日本語 / 中文` control switches languages and persists the visitor's selection locally.
- Missing translations fall back to English so content never disappears.

## Information Architecture

### Global navigation

- Home
- Projects
- CV
- Language switcher

### Home

1. Hero: name, one-sentence professional identity, three research-interest labels, portrait, and professional links.
2. About: a short paragraph that incorporates current education and research focus.
3. Publications: at most three entries with accurate status and direct links where available.
4. Selected projects: at most three high-signal projects, each limited to one sentence and one key result.
5. Current experience: one compact entry.

Do not add separate education, skills, contact, GitHub activity, or statistics sections. The homepage should read as a compact academic calling card rather than a full CV rendered on the web.

### Projects

Display all six current research projects:

- PilotBench
- Long-Horizon Memory Governance for LLM Agents (LHMG)
- ProcuraClaw
- DDRG
- ConcordCoder
- NeuroMark

Each entry is a short card containing a one-sentence summary, one key result where available, status, and relevant paper/repository link. The page does not add complex filters or ornamental interactions.

### Footer

Show only concise copyright and professional contact information. Remove the GitProfile promotional footer.

## Content Source and Claims

The latest workspace CV and project materials are the factual source of truth. Content should be synchronized with `简历/CV/cv-shared.tex` and the corresponding folders under `个人项目/`.

Required updates include:

- Use `haotianliu.me@gmail.com` as the public email.
- Add Google Scholar alongside GitHub and LinkedIn.
- Update research interests to LLM Agents, Multimodal Large Language Models, and AI for Software Engineering and Human--Computer Interaction.
- Update education, skills, project dates, roles, and experience from the latest CV.
- Replace the hosted CV with the latest `CV_Haotian_Liu_202607_SGU.pdf` artifact.
- Remove the phone number and all lifestyle/social accounts, including Instagram, Zhihu, Xiaohongshu, and Bilibili.

Publication status must be precise:

- PilotBench: accepted at IJCNN 2026; link to arXiv where available.
- LHMG: under review at EMNLP 2026.
- ProcuraClaw: under review at ICASSP 2027.

Under-review work must not be presented as accepted or published. Project links should point to the specific repository or paper when available, not the general GitHub profile.

## Technical Design

Retain the existing React/Vite application and reuse sound GitProfile components and GitHub-fetching behavior. Reorganize the application around the following bounded units:

- Typed multilingual content module containing English, Japanese, and Chinese records with a shared schema.
- Locale provider responsible for locale selection, persistence, English fallback, and document-language metadata.
- Shared site shell containing navigation, language control, main content, and footer.
- Home page composed from focused hero, about, publication, selected-project, and current-experience sections.
- Projects page rendering the complete manually curated project collection.
- Reusable restrained card and section primitives shared across both pages.

Use lightweight client-side routing compatible with GitHub Pages. Direct visits and refreshes must resolve correctly under the existing root deployment. GitHub API content is supplementary: manually curated projects remain visible when the API is unavailable, rate-limited, or returns malformed data.

## Visual System

- Use a single light visual system: white and soft gray surfaces, deep navy text, and restrained cyan-blue links.
- Remove the theme catalogue, dark-mode toggle, avatar ring, heavy shadows, bright theme colors, gradients, and decorative card styling.
- Use a clear responsive grid, fine separators, moderate whitespace, minimal borders, and compact typography.
- Keep the portrait in the hero at secondary visual priority to the name and research identity.
- Desktop layouts may use two columns where they improve scanning; mobile layouts collapse to a natural single column.
- Do not use entry animation. Interaction feedback is limited to color and underline changes.

## Error Handling and Resilience

- Fall back to English for any absent translated field.
- Preserve curated project content when GitHub requests fail.
- Display a quiet inline fallback for non-critical remote failures; do not replace whole sections with error pages.
- External links open safely and include appropriate relationship attributes.
- CV and navigation links remain usable without JavaScript-dependent animation.

## Accessibility and Metadata

- Use semantic landmarks and heading order.
- Ensure keyboard access and visible focus states for navigation, language, theme, and links.
- Maintain WCAG-appropriate text contrast.
- Provide meaningful alternative text for the portrait and project imagery, if imagery is retained.
- Update page title, description, Open Graph metadata, and document language for the selected locale.

## Verification

Before release:

- Run formatting, TypeScript checks, linting, and production build.
- Verify Home and Projects routes under the GitHub Pages base path.
- Verify English default, Japanese and Chinese switching, persistence, fallback, and document metadata.
- Check publication wording, project results, dates, professional links, CV download, and removal of private/social contact data.
- Test GitHub API failure behavior.
- Visually inspect representative desktop and mobile sizes.
- Check keyboard navigation, focus visibility, heading structure, contrast, and reduced-motion behavior.

## Explicit Non-goals

- Replacing React/Vite/GitHub Pages with a new stack.
- A blog, content-management system, visitor dashboard, or complex project filters.
- A standalone skills section, separate education section, GitHub activity feed, statistics, or verbose project narratives.
- Dark mode, elaborate animation, 3D effects, gradients, or decorative technology motifs.
- Separate independently maintained pages for each language.
- Publishing unverified claims or elevating under-review work to accepted status.
