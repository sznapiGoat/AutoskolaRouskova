import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { navLinks, site } from "../constants/siteData";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-700 text-ink">
            Autoškola <span className="text-brand">Roušková</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-ink-muted">
            Rodinná autoškola v {site.city} s tradicí od roku {site.established}.
          </p>
        </div>

        <nav aria-label="Patička" className="text-sm">
          <p className="font-600 text-ink">Navigace</p>
          <ul className="mt-3 space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-ink-soft hover:text-brand">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm">
          <p className="font-600 text-ink">Kontakt</p>
          <ul className="mt-3 space-y-3 text-ink-soft">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
              <span>
                {site.address.street}
                <br />
                {site.address.cityZip}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="shrink-0 text-brand" aria-hidden="true" />
              <a href={`tel:${site.phones[0].tel}`} className="hover:text-brand">
                {site.phones[0].number}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="shrink-0 text-brand" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="hover:text-brand">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-1 py-5 text-[13px] text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Všechna práva vyhrazena.
          </p>
          <p>{site.owner} · {site.city}</p>
        </div>
      </div>
    </footer>
  );
}
