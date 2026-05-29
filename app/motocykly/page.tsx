import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Check } from "lucide-react";
import { Section, PageHeader } from "../components/Section";
import { FadeUp } from "../components/FadeUp";
import { JourneyFlow } from "../components/JourneyFlow";
import { motoPage, site } from "../constants/siteData";

export const metadata: Metadata = {
  title: "Výcvik motocyklů (AM, A1, A2, A)",
  description: motoPage.intro,
};

export default function MotocyklyPage() {
  return (
    <>
      <Section>
        <PageHeader eyebrow="AM · A1 · A2 · A" title={motoPage.title} lead={motoPage.intro} />
      </Section>

      <Section muted aria-labelledby="skupiny-heading">
        <h2
          id="skupiny-heading"
          className="font-display text-2xl font-700 tracking-tight text-ink md:text-3xl"
        >
          Motocyklové skupiny
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {motoPage.categories.map((c, i) => (
            <FadeUp key={c.code} delay={i * 0.06} className="h-full">
              <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-bg p-6">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-tint font-display text-lg font-800 text-brand">
                  {c.code}
                </span>
                <p className="text-ink-soft">{c.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Section>

      <Section aria-labelledby="cekani-heading">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2
              id="cekani-heading"
              className="font-display text-2xl font-700 tracking-tight text-ink md:text-3xl"
            >
              {motoPage.highlights.title}
            </h2>
            <ul className="mt-6 space-y-4">
              {motoPage.highlights.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-ink-soft">
                  <Check size={20} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-7">
            <h3 className="font-display text-lg font-700 text-ink">Postup výcviku</h3>
            <p className="mt-2 text-base leading-relaxed text-ink-muted">
              Stejná pečlivá cesta jako u automobilů — jen v sedle.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <JourneyFlow />
        </div>

        <div className="mt-12 rounded-2xl bg-brand p-8 text-center md:p-12">
          <p className="font-display text-xl font-700 text-white md:text-2xl">
            Vyrazte s námi do sedla
          </p>
          <p className="mt-2 text-blue-100">{site.phoneNote}</p>
          <a
            href={`tel:${site.phones[0].tel}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-600 text-brand transition-colors hover:bg-blue-50"
          >
            <Phone size={18} aria-hidden="true" />
            {site.phones[0].number}
          </a>
        </div>
      </Section>
    </>
  );
}
