# This is NOT the Next.js you know

This version (16.x, App Router) has breaking changes — APIs, conventions, and file structure may differ from training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing routing/data code. Heed deprecation notices.

## Project: Autoškola Roušková (Náměšť nad Oslavou)

- **Design system:** Premium Minimalist Light. `#FFFFFF` base, `#F9FAFB` soft sections, `#111827` charcoal text, deep royal blue accent (`--brand`) used sparingly.
- **Content source of truth:** `app/constants/siteData.ts`. All copy, phones, pricing, and links live there — never hardcode in components.
- **Stack:** Next 16 App Router (no `src/`), Tailwind v4 (CSS-first `@theme`), framer-motion, lucide-react, Remotion (`src/remotion/`).
- **Verification:** `npm run build`, then `npx impeccable`, then Playwright mobile audit at 375px.
