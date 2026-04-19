import { useState } from "react";
import { Play } from "lucide-react";

interface Props {
  videoId: string;
  title?: string;
  className?: string;
  /** Autoplay loop (muted) — used for hero ambient video */
  ambient?: boolean;
}

/**
 * Lightweight YouTube facade — shows thumbnail until clicked.
 * Massively reduces initial JS payload (saves ~500KB per embed).
 */
const YouTubeFacade = ({ videoId, title = "Video", className = "", ambient = false }: Props) => {
  const [active, setActive] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  if (active) {
    const params = ambient
      ? `autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3`
      : `autoplay=1&modestbranding=1&rel=0&playsinline=1`;
    return (
      <iframe
        className={`absolute inset-0 w-full h-full ${className}`}
        src={`https://www.youtube.com/embed/${videoId}?${params}`}
        title={title}
        allow="autoplay; encrypted-media; picture-in-picture"
        loading="lazy"
        frameBorder={0}
      />
    );
  }

  return (
    <button
      type="button"
      aria-label={`Play ${title}`}
      onClick={() => setActive(true)}
      className={`group absolute inset-0 w-full h-full overflow-hidden bg-foreground ${className}`}
    >
      <img
        src={thumb}
        alt={title}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-background/90 text-foreground flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
        </span>
      </span>
    </button>
  );
};

export default YouTubeFacade;
