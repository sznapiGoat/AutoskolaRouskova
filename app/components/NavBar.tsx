"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { navLinks, site } from "../constants/siteData";

export function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const primary = site.phones[0];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-md">
      <nav
        aria-label="Hlavní navigace"
        className="container-page flex h-16 items-center justify-between gap-4 md:h-20"
      >
        <Link
          href="/"
          className="font-display text-lg font-700 tracking-tight text-ink md:text-xl"
        >
          Autoškola <span className="text-brand">Roušková</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.slice(1).map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-lg px-3 py-2 text-sm font-500 transition-colors ${
                    active
                      ? "text-brand"
                      : "text-ink-soft hover:text-ink hover:bg-surface"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Sticky phone callout */}
        <a
          href={`tel:${primary.tel}`}
          className="hidden items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-sm font-600 text-white transition-colors hover:bg-brand-strong sm:inline-flex"
        >
          <Phone size={16} aria-hidden="true" />
          {primary.number}
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div id="mobile-menu" className="border-t border-border bg-bg lg:hidden">
          <ul className="container-page flex flex-col py-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-500 text-ink-soft hover:bg-surface"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={`tel:${primary.tel}`}
                className="flex items-center justify-center gap-2 rounded-full bg-brand px-4 py-3 text-base font-600 text-white"
              >
                <Phone size={18} aria-hidden="true" />
                {primary.number}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
