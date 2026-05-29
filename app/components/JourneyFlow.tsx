import { journeySteps } from "../constants/siteData";

/**
 * Horizontal step-by-step indicator of the student journey from medical check
 * to driver's license. Scrolls horizontally on small screens, no clipping.
 */
export function JourneyFlow() {
  return (
    <ol className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-6 md:gap-3 md:overflow-visible">
      {journeySteps.map((step, i) => (
        <li
          key={step.title}
          className="relative min-w-[200px] shrink-0 rounded-xl border border-border bg-bg p-5 md:min-w-0"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-tint text-sm font-700 text-brand">
            {i + 1}
          </span>
          <p className="mt-3 font-display text-base font-700 text-ink">{step.title}</p>
          <p className="mt-1 text-base leading-relaxed text-ink-muted">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
