import { useEffect, useState } from "react";
import Picture, { type PictureData } from "@/components/Picture";
import reel from "@/assets/hero-reel.mp4";

/** The opening frame: a still that is always there, and a muted loop that
 *  arrives on top of it once we know the visitor should get it.
 *
 *  The still is the LCP element and ships in the prerendered HTML, so the
 *  headline never waits on video. The clip mounts only after hydration, and
 *  only when all three are true — wide screen, motion allowed, data saver off —
 *  which keeps 2 MB off phones and honours prefers-reduced-motion by simply
 *  never requesting the file. */
const HeroReel = ({ still }: { still: PictureData }) => {
  const [showReel, setShowReel] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const motionOk = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
    const wideEnough = window.matchMedia("(min-width: 768px)").matches;
    const saveData = Boolean(
      (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData,
    );
    if (motionOk && wideEnough && !saveData) setShowReel(true);
  }, []);

  return (
    <div className={`cinematic-hero-media${ready ? " has-reel" : ""}`} aria-hidden="true">
      <Picture data={still} alt="" loading="eager" fetchPriority="high" />
      {showReel && (
        <video
          className={`hero-reel${ready ? " is-ready" : ""}`}
          src={reel}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          tabIndex={-1}
          onCanPlay={() => setReady(true)}
        />
      )}
    </div>
  );
};

export default HeroReel;
