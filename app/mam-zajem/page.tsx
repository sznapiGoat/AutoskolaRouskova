import type { Metadata } from "next";
import { Download, Phone, Mail } from "lucide-react";
import { Section, PageHeader } from "../components/Section";
import { FadeUp } from "../components/FadeUp";
import { downloads, site } from "../constants/siteData";

export const metadata: Metadata = {
  title: "Mám zájem — přihlášky & soubory",
  description:
    "Stáhněte si přihlášku k řidičskému oprávnění a lékařský posudek, nebo nám napište nezávazný dotaz.",
};

export default function MamZajemPage() {
  return (
    <>
      <Section>
        <PageHeader
          eyebrow="Přihlášky & soubory"
          title="Mám zájem"
          lead="Stáhněte si potřebné formuláře nebo nám napište nezávazný dotaz. Vše ostatní rádi doladíme po telefonu."
        />
      </Section>

      <Section muted aria-labelledby="ke-stazeni-heading">
        <h2
          id="ke-stazeni-heading"
          className="font-display text-2xl font-700 tracking-tight text-ink md:text-3xl"
        >
          Dokumenty ke stažení
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {downloads.map((doc, i) => (
            <FadeUp key={doc.file} delay={i * 0.06} className="h-full">
              <a
                href={doc.file}
                download
                className="group flex h-full items-start gap-4 rounded-2xl border-2 border-border bg-bg p-6 transition-colors hover:border-brand"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-tint text-brand">
                  <Download size={22} aria-hidden="true" />
                </span>
                <span className="flex-1">
                  <span className="block font-display text-base font-700 text-ink">
                    {doc.title}
                  </span>
                  <span className="mt-1 block text-sm text-ink-muted">
                    {doc.description}
                  </span>
                  <span className="mt-3 inline-block text-sm font-600 text-brand">
                    Stáhnout PDF
                  </span>
                </span>
              </a>
            </FadeUp>
          ))}
        </div>
      </Section>

      <Section aria-labelledby="dotaz-heading">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2
              id="dotaz-heading"
              className="font-display text-2xl font-700 tracking-tight text-ink md:text-3xl"
            >
              Raději si promluvíme?
            </h2>
            <p className="mt-3 text-ink-soft">{site.phoneNote}</p>
            <div className="mt-6 space-y-3">
              {site.phones.map((p) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  className="flex items-center gap-3 rounded-xl border border-border bg-bg p-4 transition-colors hover:border-brand/40"
                >
                  <Phone size={20} className="text-brand" aria-hidden="true" />
                  <span className="font-600 text-ink">{p.number}</span>
                  <span className="text-sm text-ink-muted">· {p.label}</span>
                </a>
              ))}
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 rounded-xl border border-border bg-bg p-4 transition-colors hover:border-brand/40"
              >
                <Mail size={20} className="text-brand" aria-hidden="true" />
                <span className="font-600 text-ink">{site.email}</span>
              </a>
            </div>
          </div>

          {/* Online request placeholder — non-intrusive */}
          <form
            className="rounded-2xl border border-border bg-surface p-7"
            aria-labelledby="form-heading"
          >
            <h3 id="form-heading" className="font-display text-lg font-700 text-ink">
              Nezávazný dotaz
            </h3>
            <p className="mt-1 text-sm text-ink-muted">
              Napište nám a ozveme se vám zpět.
            </p>

            <div className="mt-5 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-600 text-ink">
                  Jméno a příjmení
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="mt-1.5 w-full rounded-lg border border-border-strong bg-bg px-4 py-3 text-base text-ink outline-none focus:border-brand"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-600 text-ink">
                  Telefon
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="mt-1.5 w-full rounded-lg border border-border-strong bg-bg px-4 py-3 text-base text-ink outline-none focus:border-brand"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-600 text-ink">
                  Zpráva
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1.5 w-full rounded-lg border border-border-strong bg-bg px-4 py-3 text-base text-ink outline-none focus:border-brand"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-brand px-6 py-3.5 text-base font-600 text-white transition-colors hover:bg-brand-strong"
              >
                Odeslat dotaz
              </button>
              <p className="text-[13px] text-ink-muted">
                Formulář je připraven k napojení (Formspree / vlastní endpoint).
              </p>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}
