import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Section, PageHeader } from "../components/Section";
import { FadeUp } from "../components/FadeUp";
import { pricing, site } from "../constants/siteData";

export const metadata: Metadata = {
  title: "Ceník & doplňkové služby",
  description: pricing.note,
};

export default function CenikPage() {
  return (
    <>
      <Section>
        <PageHeader
          eyebrow="Přehledně a jasně"
          title="Ceník & doplňkové služby"
          lead={pricing.note}
        />
      </Section>

      <Section muted aria-labelledby="cenik-heading">
        <h2 id="cenik-heading" className="sr-only">
          Přehled cen
        </h2>

        <FadeUp>
          <div className="overflow-hidden rounded-2xl border border-border bg-bg">
            {/* Header row — desktop only */}
            <div className="hidden border-b border-border bg-surface px-6 py-4 text-sm font-600 uppercase tracking-wider text-ink-muted md:grid md:grid-cols-[1.4fr_1fr_auto] md:gap-6">
              <span>Služba</span>
              <span>Popis</span>
              <span className="text-right">Cena</span>
            </div>

            <ul>
              {pricing.items.map((item) => (
                <li
                  key={item.service}
                  className="grid gap-1 border-b border-border px-6 py-5 last:border-0 md:grid-cols-[1.4fr_1fr_auto] md:items-center md:gap-6"
                >
                  <p className="font-display text-base font-700 text-ink">
                    {item.service}
                  </p>
                  <p className="text-sm text-ink-muted">{item.detail}</p>
                  <p className="font-display text-base font-700 text-brand md:text-right">
                    {item.price === "—" ? (
                      <span className="text-ink-muted">Na dotaz</span>
                    ) : (
                      <>
                        {item.price} {pricing.currency}
                      </>
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>

        <p className="mt-6 text-base leading-relaxed text-ink-muted">{pricing.note}</p>

        <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-border bg-bg p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-lg font-700 text-ink">
              Chcete přesnou cenu na míru?
            </p>
            <p className="mt-1 text-ink-muted">
              Zavolejte nám — rádi probereme termíny i možnosti splátek.
            </p>
          </div>
          <a
            href={`tel:${site.phones[0].tel}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-base font-600 text-white transition-colors hover:bg-brand-strong"
          >
            <Phone size={18} aria-hidden="true" />
            {site.phones[0].number}
          </a>
        </div>
      </Section>
    </>
  );
}
