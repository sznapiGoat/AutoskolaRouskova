/**
 * RouskovaPromo — 15s typographic promo on a crisp white backdrop.
 * Three minimal text layers morph in and out via frame-driven interpolation.
 * Crafted to feel calm and premium: slow fades, subtle upward drift, a single
 * royal-blue hairline that grows beneath each line.
 */
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { promoLayers } from "../../app/constants/siteData";

export const PROMO_FPS = 30;
export const PROMO_DURATION = 15 * PROMO_FPS; // 450 frames
export const PROMO_WIDTH = 1280;
export const PROMO_HEIGHT = 720;

const INK = "#111827";
const BRAND = "#1d4ed8";

const PER_LAYER = Math.floor(PROMO_DURATION / promoLayers.length); // 150 frames each

function Layer({ text, accent }: { text: string; accent?: boolean }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Enter: spring-driven fade + upward drift.
  const enter = spring({ frame, fps, config: { damping: 200 }, durationInFrames: 28 });
  // Exit: fade out over the final 24 frames of the layer's window.
  const exit = interpolate(frame, [PER_LAYER - 24, PER_LAYER], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = enter * exit;
  const translateY = interpolate(enter, [0, 1], [24, 0]);

  // Royal-blue hairline grows in beneath the text.
  const lineWidth = interpolate(enter, [0, 1], [0, 100]);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: "0 12%",
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div style={{ maxWidth: 980, textAlign: "center" }}>
        <p
          style={{
            margin: 0,
            fontFamily:
              "Manrope, Inter, system-ui, -apple-system, Segoe UI, sans-serif",
            fontWeight: accent ? 800 : 700,
            fontSize: accent ? 64 : 56,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: accent ? BRAND : INK,
          }}
        >
          {text}
        </p>
        <div
          style={{
            margin: "32px auto 0",
            height: 3,
            width: `${lineWidth}px`,
            maxWidth: 120,
            background: BRAND,
            borderRadius: 999,
          }}
        />
      </div>
    </AbsoluteFill>
  );
}

export function RouskovaPromo() {
  return (
    <AbsoluteFill style={{ backgroundColor: "#ffffff" }}>
      {promoLayers.map((text, i) => (
        <Sequence key={i} from={i * PER_LAYER} durationInFrames={PER_LAYER}>
          <Layer text={text} accent={i === promoLayers.length - 1} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
}
