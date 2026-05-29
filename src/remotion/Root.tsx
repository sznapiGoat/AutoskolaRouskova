import { Composition } from "remotion";
import {
  RouskovaPromo,
  PROMO_FPS,
  PROMO_DURATION,
  PROMO_WIDTH,
  PROMO_HEIGHT,
} from "./RouskovaPromo";

export function RemotionRoot() {
  return (
    <Composition
      id="RouskovaPromo"
      component={RouskovaPromo}
      durationInFrames={PROMO_DURATION}
      fps={PROMO_FPS}
      width={PROMO_WIDTH}
      height={PROMO_HEIGHT}
    />
  );
}
