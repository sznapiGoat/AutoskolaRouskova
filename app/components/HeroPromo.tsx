"use client";

import { Player } from "@remotion/player";
import {
  RouskovaPromo,
  PROMO_FPS,
  PROMO_DURATION,
  PROMO_WIDTH,
  PROMO_HEIGHT,
} from "../../src/remotion/RouskovaPromo";

/**
 * Hardware-accelerated Remotion player for the home hero.
 * Autoplays, loops, muted — purely decorative typographic motion, so it is
 * marked aria-hidden and the equivalent message is present as real hero text.
 */
export function HeroPromo() {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-2xl border border-border bg-bg shadow-sm"
    >
      <Player
        component={RouskovaPromo}
        durationInFrames={PROMO_DURATION}
        fps={PROMO_FPS}
        compositionWidth={PROMO_WIDTH}
        compositionHeight={PROMO_HEIGHT}
        style={{ width: "100%" }}
        autoPlay
        loop
        controls={false}
        acknowledgeRemotionLicense
      />
    </div>
  );
}
