import Image from "next/image";
import { clsx } from "clsx";

/**
 * Optimized fixed-aspect photo. Uses next/image `fill` + object-cover so any
 * source ratio crops cleanly without distortion or layout shift.
 */
export function Photo({
  src,
  alt,
  ratio = "4 / 3",
  className,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority = false,
}: {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-2xl border border-border bg-surface-2",
        className
      )}
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
