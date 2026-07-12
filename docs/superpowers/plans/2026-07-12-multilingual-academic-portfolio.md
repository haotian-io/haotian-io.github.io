# Multilingual Academic Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the existing GitProfile site into a concise English-first academic homepage with Japanese and Chinese switching plus a compact projects page.

**Architecture:** Keep React, Vite, and the GitHub Pages build. Replace the broad configuration-driven screen with a typed multilingual content module, a small locale provider, a hash-routed two-page shell, and focused semantic sections. Curated content is local and therefore independent of GitHub API availability.

**Tech Stack:** React 19, TypeScript 5.8, Vite 7, CSS, Vitest, Testing Library, GitHub Pages.

## Global Constraints

- Preserve the existing React/Vite/GitHub Pages stack and root deployment.
- English is the default and canonical language; Japanese and Simplified Chinese are complete translations.
- Homepage sections are limited to hero, about, at most three publications, at most three selected projects, and one current-experience entry.
- Projects contains six short entries: PilotBench, LHMG, ProcuraClaw, DDRG, ConcordCoder, and NeuroMark.
- Public contact is limited to email, GitHub, LinkedIn, Google Scholar, and CV.
- Use a single light visual system with no gradients, dark mode, theme catalogue, statistics, GitHub feed, or entry animation.
- Under-review work must never be described as accepted or published.

---

## File Structure

- `src/content/types.ts`: shared multilingual content types.
- `src/content/site-content.ts`: verified English, Japanese, and Chinese site records.
- `src/i18n/locale.tsx`: locale parsing, persistence, context, and document metadata.
- `src/app.tsx`: hash route parsing and top-level application composition.
- `src/components/site-shell.tsx`: navigation, locale control, footer, and page frame.
- `src/pages/home.tsx`: compact academic homepage.
- `src/pages/projects.tsx`: all six curated projects.
- `src/assets/index.css`: restrained responsive visual system.
- `src/test/setup.ts`: DOM test setup.
- `src/**/*.test.tsx`: behavior tests.
- `vite.config.ts`, `package.json`: test configuration and scripts.
- `public/CV_Haotian_Liu_202607_SGU.pdf`: latest downloadable CV.

### Task 1: Locale and Content Foundation

**Files:**

- Create: `src/content/types.ts`
- Create: `src/content/site-content.ts`
- Create: `src/i18n/locale.tsx`
- Create: `src/i18n/locale.test.tsx`
- Create: `src/test/setup.ts`
- Modify: `package.json`
- Modify: `vite.config.ts`

**Interfaces:**

- Produces: `Locale = 'en' | 'ja' | 'zh'`, `SITE_CONTENT: Record<Locale, SiteContent>`, `parseLocale(value): Locale`, `LocaleProvider`, and `useLocale()`.

- [ ] Add Vitest, jsdom, and Testing Library dependencies plus `test` and `test:run` scripts.
- [ ] Write tests proving English default, valid locale parsing, invalid locale fallback, persisted selection, and `document.documentElement.lang` updates.
- [ ] Run `npm run test:run -- src/i18n/locale.test.tsx` and confirm failure because the locale module does not exist.
- [ ] Implement the types, concise verified three-language content, and locale provider.
- [ ] Re-run the focused test and confirm all locale tests pass.
- [ ] Commit with `git commit -m "feat: add multilingual content foundation"`.

### Task 2: Application Shell and Routing

**Files:**

- Create: `src/app.tsx`
- Create: `src/app.test.tsx`
- Create: `src/components/site-shell.tsx`
- Modify: `src/main.tsx`

**Interfaces:**

- Consumes: `LocaleProvider`, `useLocale()`, and `SITE_CONTENT`.
- Produces: `routeFromHash(hash): 'home' | 'projects'` and accessible global navigation.

- [ ] Write tests proving the empty hash renders Home, `#/projects` renders Projects, locale controls expose EN/日本語/中文, and private/lifestyle contact labels are absent.
- [ ] Run `npm run test:run -- src/app.test.tsx` and confirm failure because `app.tsx` does not exist.
- [ ] Implement hash routing, semantic shell, navigation, locale controls, professional links, and minimal footer.
- [ ] Re-run the focused test and confirm it passes.
- [ ] Commit with `git commit -m "feat: add concise portfolio shell"`.

### Task 3: Home and Projects Pages

**Files:**

- Create: `src/pages/home.tsx`
- Create: `src/pages/projects.tsx`
- Create: `src/pages/pages.test.tsx`

**Interfaces:**

- Consumes: localized `SiteContent` records.
- Produces: `HomePage({ content })` and `ProjectsPage({ content })`.

- [ ] Write tests asserting exactly three homepage publications, exactly three selected projects, six full project entries, PilotBench accepted wording, LHMG/ProcuraClaw under-review wording, and absence of Skills/Education standalone headings.
- [ ] Run `npm run test:run -- src/pages/pages.test.tsx` and confirm failure because page modules do not exist.
- [ ] Implement the hero, short about text, compact publication rows, three selected-project rows, current experience, and six-project page.
- [ ] Re-run the focused test and confirm it passes in all three locales.
- [ ] Commit with `git commit -m "feat: build academic home and projects pages"`.

### Task 4: Restrained Styling, CV, and Release Verification

**Files:**

- Modify: `src/assets/index.css`
- Modify: `index.html`
- Copy: `../output/pdf/CV_Haotian_Liu_202607_SGU.pdf` to `public/CV_Haotian_Liu_202607_SGU.pdf`
- Remove from runtime: legacy theme and GitProfile composition imports no longer reached from `src/main.tsx`.

**Interfaces:**

- Consumes: semantic class names from the shell and pages.
- Produces: responsive desktop/mobile layout and deployable production bundle.

- [ ] Write a structural test asserting the rendered app has one `main`, ordered headings, an image alt value, and CV link to `/CV_Haotian_Liu_202607_SGU.pdf`.
- [ ] Run the test and confirm failure while the old metadata/CV target remains.
- [ ] Implement the single restrained light visual system, responsive rules, focus styles, and print/reduced-motion safeguards; update metadata and copy the latest CV.
- [ ] Run `npm run test:run`, `npm run lint`, `npm run prettier`, and `npm run build`; all must exit 0 without warnings.
- [ ] Serve the production build and visually inspect desktop and mobile Home/Projects in English, Japanese, and Chinese; verify links and locale persistence.
- [ ] Run `git diff --check` and verify no phone number or lifestyle social domains remain in runtime source or built output.
- [ ] Commit with `git commit -m "style: finish restrained academic portfolio"`.

## Plan Self-Review

- Every design requirement is mapped to one of the four tasks.
- Locale/content types are defined before consumers.
- Each behavior change begins with a focused failing test.
- The plan contains no deferred placeholders or unrelated feature work.
