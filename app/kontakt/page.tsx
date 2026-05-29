import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Section, PageHeader } from "../components/Section";
import { site } from "../constants/siteData";

/** lucide v1 dropped brand glyphs — inline a minimal Facebook mark. */
function Facebook({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Kontakt",
  description: `${site.name}, ${site.address.street}, ${site.address.cityZip}. Telefon ${site.phones[0].number}, e-mail ${site.email}.`,
};

const mapSrc =
  "https://maps.google.com/maps?q=" +
  encodeURIComponent("Lipová 342, 675 71 Náměšť nad Oslavou") +
  "&z=15&output=embed";

export default function KontaktPage() {
  return (
    <>
      <Section>
        <PageHeader
          eyebrow="Najdete nás"
          title="Kontakt"
          lead={`Rádi vás přivítáme v ${site.city}. ${site.phoneNote}`}
        />
      </Section>

      <Section muted aria-labelledby="kontakt-detail-heading">
        <h2 id="kontakt-detail-heading" className="sr-only">
          Kontaktní údaje a poloha
        </h2>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          {/* Left — details */}
          <div className="rounded-2xl border border-border bg-bg p-7 md:p-8">
            <h3 className="font-display text-xl font-700 text-ink">{site.name}</h3>

            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <p className="font-600 text-ink">Adresa</p>
                  <address className="not-italic text-ink-soft">
                    {site.address.street}
                    <br />
                    {site.address.cityZip}
                  </address>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Clock size={20} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <p className="font-600 text-ink">Konzultační hodiny</p>
                  {site.hours.map((h) => (
                    <p key={h.day} className="text-ink-soft">
                      <span className="font-600">{h.day}</span> {h.time}
                      <span className="block text-sm text-ink-muted">{h.note}</span>
                    </p>
                  ))}
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <p className="font-600 text-ink">Telefon</p>
                  {site.phones.map((p) => (
                    <a
                      key={p.tel}
                      href={`tel:${p.tel}`}
                      className="block text-ink-soft hover:text-brand"
                    >
                      {p.number}{" "}
                      <span className="text-sm text-ink-muted">· {p.label}</span>
                    </a>
                  ))}
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail size={20} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <p className="font-600 text-ink">E-mail</p>
                  <a href={`mailto:${site.email}`} className="text-ink-soft hover:text-brand">
                    {site.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Facebook size={20} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <p className="font-600 text-ink">Facebook</p>
                  <a
                    href={site.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-soft hover:text-brand"
                  >
                    Oficiální stránka
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Right — grayscale map */}
          <div className="min-h-[360px] overflow-hidden rounded-2xl border border-border bg-surface-2">
            <iframe
              src={mapSrc}
              title={`Mapa — ${site.name}, ${site.address.cityZip}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[360px] w-full grayscale"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
