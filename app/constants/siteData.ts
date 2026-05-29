/**
 * Autoškola Roušková — single source of truth for all site content.
 * Edit copy, phones, pricing, and links HERE — never hardcode in components.
 * Pricing currency fields are intentionally left as editable strings.
 */

export const site = {
  name: "Autoškola Roušková",
  owner: "Zdeňka Roušková",
  city: "Náměšť nad Oslavou",
  tagline: "Vaše cesta k bezpečné a jisté jízdě začíná zde.",
  metaDescription:
    "Rodinná autoškola v Náměšti nad Oslavou s tradicí od roku 1987. Výcvik skupiny B i motocyklů (AM, A1, A2, A), kondiční jízdy a školení řidičů. Klidný a lidský přístup. Zavolejte: +420 607 892 209.",
  established: 1987,
  rating: {
    score: "5,0",
    label: "Hodnocení na místních katalozích",
  },
  phones: [
    { label: "Hlavní linka", number: "+420 607 892 209", tel: "+420607892209" },
    { label: "Záložní linka", number: "+420 607 782 211", tel: "+420607782211" },
  ],
  phoneNote: "(Preferujeme komunikaci po telefonu)",
  email: "autoskola-rouskova@seznam.cz",
  address: {
    street: "Lipová 342",
    cityZip: "675 71 Náměšť nad Oslavou",
  },
  facebookUrl: "https://www.facebook.com/",
  // Public consultation / office hours
  hours: [{ day: "Pátek", time: "15:30–17:00", note: "Konzultace pro veřejnost" }],
} as const;

export const navLinks = [
  { label: "Domů", href: "/" },
  { label: "Výcvik automobilů", href: "/vycvik-b" },
  { label: "Motocykly", href: "/motocykly" },
  { label: "Ceník", href: "/cenik" },
  { label: "Mám zájem", href: "/mam-zajem" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

/** Home — primary action cards leading into the deep pages. */
export const actionCards = [
  {
    title: "Výcvik automobilů",
    subtitle: "Skupina B",
    description: "Kompletní výcvik osobních automobilů — teorie i jízdy.",
    href: "/vycvik-b",
    icon: "Car",
  },
  {
    title: "Výcvik motocyklů",
    subtitle: "AM, A1, A2, A",
    description: "Všechny motocyklové skupiny s individuálním přístupem.",
    href: "/motocykly",
    icon: "Bike",
  },
  {
    title: "Ceník & služby",
    subtitle: "Přehledně a jasně",
    description: "Ceny výcviku, kondiční jízdy a doplňkové služby.",
    href: "/cenik",
    icon: "Receipt",
  },
  {
    title: "Mám zájem",
    subtitle: "Přihlášky & soubory",
    description: "Stáhněte si formuláře nebo nám napište nezávazný dotaz.",
    href: "/mam-zajem",
    icon: "FileDown",
  },
] as const;

/** Home — brand value anchors (icon grid). */
export const valueAnchors = [
  {
    title: "Dlouholetá praxe od roku 1987",
    description: "Více než tři desetiletí učíme řidiče bezpečné a jisté jízdě.",
    icon: "Award",
  },
  {
    title: "Klidný a lidský přístup",
    description: "Bez stresu a křiku. Jdeme tempem, které vám vyhovuje.",
    icon: "HeartHandshake",
  },
  {
    title: "Skvělá úspěšnost u zkoušek",
    description: "Naši žáci přicházejí ke zkouškám připravení a sebejistí.",
    icon: "BadgeCheck",
  },
  {
    title: "Zkušení lektoři-pohodáři",
    description: "Trpěliví instruktoři, se kterými je radost se učit.",
    icon: "Users",
  },
] as const;

/** Shared student journey — used as the horizontal flow indicator. */
export const journeySteps = [
  { title: "Lékařská prohlídka", description: "Posudek o zdravotní způsobilosti od lékaře." },
  { title: "Přihláška", description: "Vyplníte přihlášku a zařadíme vás do kurzu." },
  { title: "Teorie", description: "Výuka pravidel, techniky a zásad bezpečné jízdy." },
  { title: "Praktický výcvik", description: "Jízdy s instruktorem od autocvičiště po provoz." },
  { title: "Závěrečná zkouška", description: "Test z pravidel, ovládání vozidla a jízda." },
  { title: "Řidičský průkaz", description: "Gratulujeme — vyrážíte na cestu sami." },
] as const;

export const carPage = {
  title: "Výcvik automobilů — skupina B",
  intro:
    "Komplexní příprava na řidičské oprávnění skupiny B v klidné, přátelské atmosféře. Provedeme vás od první teoretické hodiny až po závěrečnou zkoušku.",
  theory: {
    title: "Teoretická výuka",
    points: [
      "Útulná učebna přímo v Náměšti nad Oslavou",
      "Pravidla provozu, zdravověda a teorie řízení",
      "Výuka srozumitelně a vlastním tempem",
    ],
  },
  practice: {
    title: "Praktický výcvik",
    points: [
      "Začínáme v bezpečí na cvičné ploše",
      "Postupný přechod do běžného provozu",
      "Důraz na sebejistotu, ne na rychlost",
    ],
  },
  fleet: {
    title: "Moderní vozový park",
    vehicles: ["Volkswagen Golf", "Peugeot"],
    note: "Udržovaná, spolehlivá a dobře ovladatelná auta pro pohodový výcvik.",
  },
} as const;

export const motoPage = {
  title: "Výcvik motocyklů",
  intro:
    "Získejte oprávnění pro skupiny AM, A1, A2 i neomezené A. Bezpečnost a sebejistota v sedle jsou pro nás na prvním místě.",
  categories: [
    { code: "AM", desc: "Mopedy a malé motocykly do 45 km/h, od 15 let." },
    { code: "A1", desc: "Lehké motocykly do 125 cm³, od 16 let." },
    { code: "A2", desc: "Motocykly do 35 kW, od 18 let." },
    { code: "A", desc: "Motocykly bez omezení výkonu, dle podmínek věku." },
  ],
  highlights: {
    title: "Co vás čeká",
    points: [
      "Požadavky na ochranné vybavení a bezpečnostní výbavu",
      "Couvání a vedení motocyklu, ovládání v nízkých rychlostech",
      "Individuální výcvik na cvičné ploše",
    ],
  },
} as const;

/** Pricing matrix — currency fields kept editable (placeholders). */
export const pricing = {
  currency: "Kč",
  note: "Uvedené ceny jsou orientační. Aktuální cenu a možnosti splátek vám rádi sdělíme telefonicky.",
  items: [
    { service: "Výcvik skupiny B", price: "—", detail: "Kompletní teorie i jízdy." },
    { service: "Výcvik motocyklů (AM, A1, A2, A)", price: "—", detail: "Dle zvolené skupiny." },
    { service: "Kondiční jízdy", price: "—", detail: "Pro ty, co dlouho neřídili." },
    { service: "Školení řidičů referentů", price: "—", detail: "Povinné školení pro firmy." },
    { service: "Profesní osvědčení", price: "—", detail: "Vstupní i pravidelná školení." },
    { service: "Rychlokurzy a individuální plány", price: "—", detail: "Termíny dle dohody." },
  ],
} as const;

/** Downloadable documents for /mam-zajem. */
export const downloads = [
  {
    title: "Přihláška k řidičskému oprávnění",
    description: "Vyplňte a přineste s sebou nebo zašlete předem.",
    file: "/dokumenty/prihlaska-ridicske-opravneni.pdf",
  },
  {
    title: "Lékařský posudek o zdravotní způsobilosti",
    description: "Potvrzení od lékaře o způsobilosti k řízení.",
    file: "/dokumenty/lekarsky-posudek.pdf",
  },
] as const;

/** Promo animation text layers (Remotion RouskovaPromo). */
export const promoLayers = [
  "Autoškola Roušková — Náměšť nad Oslavou",
  "Výcvik skupin A & B. Klidný přístup s dlouholetou tradicí.",
  "Zahajte svůj kurz na telefonu: 607 892 209.",
] as const;
