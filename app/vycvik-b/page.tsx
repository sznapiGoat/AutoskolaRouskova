import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Check, Car } from "lucide-react";
import { Section, PageHeader } from "../components/Section";
import { FadeUp } from "../components/FadeUp";
import { Photo } from "../components/Photo";
import { JourneyFlow } from "../components/JourneyFlow";
import { carPage, classroomPhotos, fleetPhotos, site } from "../constants/siteData";

export const metadata: Metadata = {
  title: "Výcvik automobilů (skupina B)",
  description: carPage.intro,
};

function PointList({ title, points }: { title: string; points: readonly string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-bg p-7">
      <h2 className="font-display text-xl font-700 text-ink">{title}</h2>
      <ul className="mt-4 space-y-3">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-3 text-ink-soft">
            <Check size={20} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function VycvikBPage() {
  return (
    <>
      <Section>
        <PageHeader eyebrow="Skupina B" title={carPage.title} lead={carPage.intro} />
      </Section>

      <Section muted aria-labelledby="vyuka-heading">
        <h2 id="vyuka-heading" className="sr-only">
          Teorie a praktický výcvik
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <FadeUp>
            <PointList title={carPage.theory.title} points={carPage.theory.points} />
          </FadeUp>
          <FadeUp delay={0.08}>
            <PointList title={carPage.practice.title} points={carPage.practice.points} />
          </FadeUp>
        </div>

        {/* Classroom photos */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {classroomPhotos.map((p, i) => (
            <FadeUp key={p.src} delay={i * 0.08}>
              <Photo
                src={p.src}
                alt={p.alt}
                ratio="3 / 2"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </FadeUp>
          ))}
        </div>

        {/* Fleet */}
        <FadeUp delay={0.12}>
          <div className="mt-6 rounded-2xl border border-border bg-bg p-7">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-tint text-brand">
                <Car size={22} aria-hidden="true" />
              </span>
              <h2 className="font-display text-xl font-700 text-ink">
                {carPage.fleet.title}
              </h2>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {carPage.fleet.vehicles.map((v) => (
                <span
                  key={v}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-600 text-ink"
                >
                  {v}
                </span>
              ))}
            </div>
            <p className="mt-4 text-ink-muted">{carPage.fleet.note}</p>

            {/* Fleet photo grid */}
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {fleetPhotos.map((p) => (
                <Photo
                  key={p.src}
                  src={p.src}
                  alt={p.alt}
                  ratio="4 / 3"
                  sizes="(min-width: 640px) 22vw, 45vw"
                  className="rounded-xl"
                />
              ))}
            </div>
          </div>
        </FadeUp>
      </Section>

      <Section aria-labelledby="postup-heading">
        <h2
          id="postup-heading"
          className="font-display text-2xl font-700 tracking-tight text-ink md:text-3xl"
        >
          Jak to celé probíhá
        </h2>
        <p className="mt-2 max-w-xl text-ink-soft">
          Od lékařské prohlídky až po řidičský průkaz — krok za krokem.
        </p>
        <div className="mt-8">
          <JourneyFlow />
        </div>

        <div className="mt-12 rounded-2xl bg-brand p-8 text-center md:p-12">
          <p className="font-display text-xl font-700 text-white md:text-2xl">
            Chcete začít se skupinou B?
          </p>
          <p className="mt-2 text-blue-100">{site.phoneNote}</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${site.phones[0].tel}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-600 text-brand transition-colors hover:bg-blue-50"
            >
              <Phone size={18} aria-hidden="true" />
              {site.phones[0].number}
            </a>
            <Link
              href="/mam-zajem"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-base font-600 text-white transition-colors hover:bg-white/10"
            >
              Stáhnout přihlášku
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
