import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageTransition = () => {
  const { pathname } = useLocation();
  const [active, setActive] = useState(false);
  const [first, setFirst] = useState(true);

  useEffect(() => {
    if (first) {
      setFirst(false);
      return;
    }
    setActive(true);
    const t = setTimeout(() => setActive(false), 700);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[80]" aria-hidden>
      <div
        className={`absolute inset-0 bg-foreground origin-bottom transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          active ? "scale-y-100" : "scale-y-0"
        }`}
        style={{ transformOrigin: active ? "top" : "bottom" }}
      />
    </div>
  );
};

export default PageTransition;
