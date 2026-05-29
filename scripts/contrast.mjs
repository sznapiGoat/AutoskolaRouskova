// WCAG 2.1 relative-luminance contrast check for the design tokens.
function lum(hex) {
  const c = hex.replace("#", "");
  const v = [0, 2, 4].map((i) => {
    let x = parseInt(c.substr(i, 2), 16) / 255;
    return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2];
}
function ratio(a, b) {
  const L1 = lum(a), L2 = lum(b);
  return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
}
const pairs = [
  ["ink #111827 on white", "#111827", "#ffffff"],
  ["ink-soft #374151 on white", "#374151", "#ffffff"],
  ["ink-muted #6b7280 on white", "#6b7280", "#ffffff"],
  ["ink-muted on surface #f9fafb", "#6b7280", "#f9fafb"],
  ["brand #1d4ed8 on white", "#1d4ed8", "#ffffff"],
  ["brand on brand-tint #eff6ff", "#1d4ed8", "#eff6ff"],
  ["white on brand (primary btn)", "#ffffff", "#1d4ed8"],
  ["white on brand-strong (hover)", "#ffffff", "#1e3a8a"],
  ["gold #b45309 on white (label)", "#b45309", "#ffffff"],
  ["blue-100 on brand (CTA subtext)", "#dbeafe", "#1d4ed8"],
];
for (const [n, a, b] of pairs) {
  const r = ratio(a, b);
  const grade = r >= 7 ? "AAA" : r >= 4.5 ? "AA" : r >= 3 ? "AA-large" : "FAIL";
  console.log((r.toFixed(2) + ":1").padEnd(9), grade.padEnd(9), n);
}
