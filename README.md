# G K Sagar Portfolio

An editorial portfolio built with the existing Vite, React 19, JavaScript, and Tailwind v4 setup. Five case studies connect the problem, engineering decisions, and delivered result. The visual system uses warm paper, ink, a vermilion accent, Inter Tight, and Instrument Serif.

## Run locally

```sh
npm ci
npm run dev
```

On Windows PowerShell with script execution disabled, use `npm.cmd` in place of `npm`. Node 20.19+ or 22.12+ is required by the retained Vite 7 setup; development was verified with Node 24.

## Content and design

| File                     | Edit here                                                |
| ------------------------ | -------------------------------------------------------- |
| `src/data/profile.js`    | Name, positioning, links, about, and production proof    |
| `src/data/projects.js`   | Five case studies, metrics, stack, and screenshots       |
| `src/data/skills.js`     | Technology groups                                        |
| `src/data/experience.js` | Employment and education                                 |
| `src/styles/tokens.css`  | Colors, fonts, type, spacing, and component measurements |
| `public/resume.docx`     | Downloadable resume supplied for this redesign           |

Content is based on `GK_Sagar_Resume_Full_Stack_v3.docx`. Internal application visuals are explanatory diagrams, not screenshots. Results describe the scope and samples documented in the resume; they do not imply unmeasured time or cost savings. TypeScript is listed as a skill, while this portfolio stays in JavaScript.

Local WOFF2 fonts and their licenses live in `public/fonts`. Existing project screenshots are converted to 640px and 1200px WebP variants. Run `npm run images` after replacing the PNG source images in `src/assets`, then update the image dimensions and alt text in the project data.

## Routes

- `/`
- `/work/patient-journey`
- `/work/invoice-auditor`
- `/work/live-quiz`
- `/work/rapidraw`
- `/work/corenote`
- Unknown paths show a custom 404 with `noindex` metadata.

React Router handles navigation. Pages use `React.lazy` and `Suspense`; Motion handles section reveals and page transitions with reduced-motion support. The site includes semantic landmarks, a keyboard skip link, route focus management, visible focus states, lazy-loaded images with intrinsic dimensions, and an email-copy button with a failure message.

## Production and SEO

1. Copy `.env.example` to `.env.local` and set `VITE_SITE_URL` to the actual public origin. The provisional value is `https://gksagar.online`.
2. Run `npm run build`. Deploy the resulting `dist` directory.
3. Keep real files ahead of the SPA fallback when configuring the host. Vercel clean URLs and a Netlify-style `_redirects` fallback are included.
4. Verify a direct case-study URL, browser refresh, sitemap URLs, and social preview after deployment.

The build generates `sitemap.xml`, `robots.txt`, a 1200 × 630 Open Graph image, and separate HTML entry points with static metadata for all six public routes. The static HTML metadata gives crawlers and social preview services a title, description, canonical URL, and share image before JavaScript runs. React Helmet Async manages per-route metadata after startup; static fallback tags are removed so metadata is not duplicated. See the [Helmet documentation](https://github.com/staylor/react-helmet-async) for its React 19 behavior.

Page bodies remain client-rendered. If the chosen host supports prerendering, prerender all six public routes to put their full content in the initial HTML. Configure hydration as part of that integration, and retain the SPA fallback for client navigation. A browser Lighthouse SEO score does not establish how every crawler indexes a client-rendered page.

## Verification

```sh
npm run lint
npm run build
npm test
npm run preview
npm run lighthouse
```

Playwright uses installed Chrome and verifies all six routes at 375, 768, and 1440px, plus navigation, browser history, route focus, keyboard focus, reduced motion, clipboard behavior, resume download, unknown routes, assets, and static metadata. Its preview server starts automatically.

For phase screenshots, keep the dev server running and execute `npm run screenshots`. To check a production server, set `QA_URL` to its local URL before running screenshot or Lighthouse scripts. Lighthouse defaults to `http://127.0.0.1:4173` and audits the homepage on mobile and desktop, plus every case study on mobile. Run audits while other heavy browser tasks are idle for consistent measurements.

Screenshots, test reports, and full Lighthouse reports are written under the git-ignored `artifacts` directory. Lighthouse scores are local lab measurements and can vary with hosting, network, and hardware.
