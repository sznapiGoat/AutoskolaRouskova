/**
 * Playwright mobile audit @375px:
 *  - screenshots every route
 *  - asserts no horizontal overflow
 *  - body paragraphs (long-form copy) must render >= 16px
 *  - no text below a 13px micro-label floor
 */
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = process.env.BASE_URL || "http://localhost:3002";
const ROUTES = ["/", "/vycvik-b", "/motocykly", "/cenik", "/mam-zajem", "/kontakt"];
const OUT = "screenshots";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 375, height: 812 },
  deviceScaleFactor: 2,
});
const page = await ctx.newPage();

let failures = 0;
for (const route of ROUTES) {
  await page.goto(`${BASE}${route}`, { waitUntil: "networkidle" });

  // Scroll through the whole page so scroll-triggered reveals fire, then
  // return to top — mirrors a real visitor and un-hides FadeUp content.
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.6;
    for (let y = 0; y <= document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 200));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 450));
  });

  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth
  );

  // Measure smallest text overall + smallest "body paragraph" (long copy).
  const { minFont, minBody } = await page.evaluate(() => {
    let min = Infinity;
    let minBody = Infinity;
    for (const el of document.querySelectorAll(
      "p,span,a,li,h1,h2,h3,button,label,input,td,th,address"
    )) {
      const t = el.textContent?.trim();
      if (!t) continue;
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) continue;
      const fs = parseFloat(getComputedStyle(el).fontSize);
      if (fs < min) min = fs;
      // Body copy = a <p> of real prose, excluding chrome microcopy
      // (footer legal, form helper hints) which is intentionally small.
      const isChrome = el.closest("footer") || el.closest("form");
      if (el.tagName === "P" && t.length >= 40 && !isChrome && fs < minBody) {
        minBody = fs;
      }
    }
    return {
      minFont: min === Infinity ? null : min,
      minBody: minBody === Infinity ? null : minBody,
    };
  });

  const name = route === "/" ? "home" : route.replace(/\//g, "");
  await page.screenshot({ path: `${OUT}/mobile-${name}.png`, fullPage: true });

  const overflowBad = overflow > 1;
  const floorBad = minFont !== null && minFont < 13; // micro-label floor
  const bodyBad = minBody !== null && minBody < 16; // body copy must be >= 16px
  if (overflowBad || floorBad || bodyBad) failures++;

  console.log(
    `${overflowBad || floorBad || bodyBad ? "✗" : "✓"} ${route.padEnd(12)} ` +
      `overflow=${overflow}px  minFont=${minFont}px  minBody=${minBody}px`
  );
}

await browser.close();
console.log(failures === 0 ? "\nALL MOBILE CHECKS PASSED" : `\n${failures} ROUTE(S) FAILED`);
process.exit(failures === 0 ? 0 : 1);
