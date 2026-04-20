import { useEffect, useRef, useState } from "react";

interface Props {
  videoId: string;
  text?: string;
}

/**
 * Hero text-as-video-mask.
 * Technique: full-bleed YouTube iframe in background; an SVG overlay covers
 * the entire hero with the paper color, with the wordmark cut out as a hole
 * (mask) so the video shows through the letters only.
 *
 * Uses YouTube IFrame Player API for true muted autoplay loop, no controls.
 */
const HeroVideoMask = ({ videoId, text = "ØRIONS" }: Props) => {
  const [paperHsl, setPaperHsl] = useState("40 14% 96%");

  useEffect(() => {
    // Read --background token so SVG fill matches paper exactly
    const v = getComputedStyle(document.documentElement)
      .getPropertyValue("--background")
      .trim();
    if (v) setPaperHsl(v);
  }, []);

  const paper = `hsl(${paperHsl})`;
  const src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&showinfo=0&disablekb=1&fs=0`;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
      {/* Background video — scaled up to hide YT chrome */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src={src}
          title="ØRIONS reel"
          allow="autoplay; encrypted-media; picture-in-picture"
          frameBorder={0}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "max(177.78vh, 100vw)",       // 16:9 cover
            height: "max(56.25vw, 100vh)",
            minWidth: "100%",
            minHeight: "100%",
            transform: "translate(-50%, -50%) scale(1.35)", // crop YT logo / chrome
          }}
        />
      </div>

      {/* SVG overlay — paper-colored, wordmark cut out as a window */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <mask id="orions-cutout">
            {/* white = visible (opaque paper); black = hole (video shows) */}
            <rect width="1600" height="900" fill="white" />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="central"
              fontFamily="Unbounded, sans-serif"
              fontWeight={800}
              fontSize="360"
              letterSpacing="-8"
              fill="black"
            >
              {text}
            </text>
          </mask>
        </defs>
        <rect width="1600" height="900" fill={paper} mask="url(#orions-cutout)" />
      </svg>
    </div>
  );
};

export default HeroVideoMask;
