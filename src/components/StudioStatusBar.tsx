import { useEffect, useState } from "react";

const taglines = [
  "✦ NOW BOOKING — Q3 2026",
  "FROM HELLO → LIVE IN 4 WEEKS",
  "11 PEOPLE · IN-HOUSE",
  "F&B · FASHION · HOSPITALITY",
];

const StudioStatusBar = () => {
  const [time, setTime] = useState("");
  const [tagIdx, setTagIdx] = useState(0);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const bkk = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Bangkok" }));
      const hh = String(bkk.getHours()).padStart(2, "0");
      const mm = String(bkk.getMinutes()).padStart(2, "0");
      setTime(`${hh}:${mm}`);
    };
    tick();
    const t = setInterval(tick, 1000 * 30);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTagIdx((i) => (i + 1) % taglines.length), 4000);
    return () => clearInterval(t);
  }, []);

  // Bangkok hours: 09:00–19:00
  const hourStr = time.split(":")[0];
  const hour = hourStr ? parseInt(hourStr, 10) : 12;
  const open = hour >= 9 && hour < 19;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-7 bg-cinnabar text-background">
      <div className="h-full px-6 md:px-10 flex items-center justify-between text-[10px] tracking-[0.12em] uppercase font-mono">
        <span className="flex items-center gap-2">
          <span
            className={`w-1.5 h-1.5 rounded-full ${open ? "bg-background animate-pulse" : "bg-background/40"}`}
          />
          <span className="opacity-90 inline-flex items-center">
            {open ? "STUDIO OPEN" : "AFTER HOURS"} · BKK&nbsp;{time}
            <span className="ml-0.5 inline-block w-[0.5ch] animate-pulse" aria-hidden>|</span>
            &nbsp;ICT
          </span>
        </span>

        <span className="hidden md:block opacity-90 transition-opacity duration-300" key={tagIdx}>
          {taglines[tagIdx]}
        </span>

        <span className="hidden sm:block opacity-60">N 13.756° · E 100.501°</span>
      </div>
    </div>
  );
};

export default StudioStatusBar;
