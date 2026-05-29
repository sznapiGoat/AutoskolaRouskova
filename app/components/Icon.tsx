import {
  Award,
  BadgeCheck,
  Bike,
  Car,
  FileDown,
  HeartHandshake,
  Receipt,
  Users,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Award,
  BadgeCheck,
  Bike,
  Car,
  FileDown,
  HeartHandshake,
  Receipt,
  Users,
};

/** Resolve a lucide icon by the string name stored in siteData. */
export function Icon({
  name,
  size = 24,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Cmp = map[name] ?? Award;
  return <Cmp size={size} className={className} aria-hidden="true" />;
}
