import Link from "next/link";
import { ArrowRight, Phone, Star } from "lucide-react";
import { Section } from "./components/Section";
import { FadeUp } from "./components/FadeUp";
import { Icon } from "./components/Icon";
import { HeroPromo } from "./components/HeroPromo";
import { actionCards, site, valueAnchors } from "./constants/siteData";

export default function HomePage() {
  const primary = site.phones[0];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-bg">
        <div className="container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            {/* 5.0 reputation */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5">
              <span className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} className="fill-gold text-gold" />
                ))}
              </span>
              <span className="text-sm font-600 text-ink">
                {site.rating.score} ·{" "}
                <span className="font-400 text-ink-muted">{site.rating.label}</span>
              </span>
            </div>

            <h1 className="mt-6 font-display text-4xl font-800 leading-[1.07] tracking-tight text-ink md:text-6xl">
              Autoškola <span className="text-brand">Roušková</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink-soft md:text-xl">
              {site.tagline}
            </p>
            <p className="mt-3 text-base text-ink-muted">
              Rodinná autoškola v {site.city} s tradicí od roku {site.established}.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`tel:${primary.tel}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-base font-600 text-white transition-colors hover:bg-brand-strong"
              >
                <Phone size={18} aria-hidden="true" />
                {primary.number}
              </a>
              <Link
                href="/mam-zajem"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border-strong px-6 py-3.5 text-base font-600 text-ink transition-colors hover:bg-surface"
              >
                Mám zájem
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
            <p className="mt-3 text-sm text-ink-muted">{site.phoneNote}</p>
          </div>

          {/* Remotion promo */}
          <FadeUp className="lg:justify-self-end lg:w-full">
            <HeroPromo />
          </FadeUp>
        </div>
      </section>

      {/* ── Action cards ─────────────────────────────────────── */}
      <Section muted aria-labelledby="kurzy-heading">
        <h2
          id="kurzy-heading"
          className="font-display text-2xl font-700 tracking-tight text-ink md:text-3xl"
        >
          Kudy se vydáte?
        </h2>
        <p className="mt-2 max-w-xl text-ink-soft">
          Vyberte si oblast, která vás zajímá. Vše ostatní s vámi rádi probereme po
          telefonu.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {actionCards.map((card, i) => (
            <FadeUp key={card.href} delay={i * 0.06} className="h-full">
              <Link
                href={card.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-bg p-6 transition-all hover:border-brand/40 hover:shadow-md"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-tint text-brand">
                  <Icon name={card.icon} size={22} />
                </span>
                <p className="mt-5 text-[13px] font-600 uppercase tracking-wider text-brand">
                  {card.subtitle}
                </p>
                <h3 className="mt-1 font-display text-lg font-700 text-ink">
                  {card.title}
                </h3>
                <p className="mt-2 flex-1 text-base leading-relaxed text-ink-muted">
                  {card.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-600 text-brand">
                  Více informací
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </Section>

      {/* ── Value anchors ────────────────────────────────────── */}
      <Section aria-labelledby="proc-heading">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="proc-heading"
            className="font-display text-2xl font-700 tracking-tight text-ink md:text-3xl"
          >
            Proč právě u nás
          </h2>
          <p className="mt-3 text-ink-soft">
            Tři desetiletí zkušeností a přístup, díky kterému se k řízení těšíte.
          </p>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {valueAnchors.map((a, i) => (
            <FadeUp key={a.title} delay={i * 0.06}>
              {/* Icon sits beside the heading (not stacked above) for a more
                  editorial, less templated rhythm. */}
              <div className="flex items-start gap-4 border-l-2 border-brand/15 pl-5">
                <span className="mt-0.5 shrink-0 text-brand">
                  <Icon name={a.icon} size={26} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-700 text-ink">{a.title}</h3>
                  <p className="mt-1.5 text-base leading-relaxed text-ink-muted">
                    {a.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Section>
    </>
  );
}
