/* Hallmark · nav archetype: N6 Newspaper masthead (was N1a — wordmark-left,
   inline links, button-right, which is the most-recognised AI nav shape).
   Editorial genre routes to N6, and this site already calls its own sections
   chapters and its own record an argument, so a masthead is the shape it was
   describing. It compresses on scroll: a 132px masthead is right at rest, when
   the page is being judged, and wrong once you are reading. */
import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Logo from "@/components/Logo";

const links = [
  { label: "Practice", to: "/practice" },
  { label: "Work", to: "/work" },
  { label: "System", to: "/system" },
  { label: "Thinking", to: "/thinking" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu on route change.
  useEffect(() => setOpen(false), [pathname]);

  // Compress the masthead once the reader has started reading.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const compact = scrolled && !open;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background">
      {/* Edition line — the thin rule a newspaper carries above its mast. */}
      <div
        className={`hidden md:block overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          compact ? "max-h-0 opacity-0" : "max-h-[26px] opacity-100"
        }`}
      >
        <div className="px-6 md:px-10 h-[26px] flex items-center justify-between font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground border-b border-foreground/10">
          <span>Bangkok · Est. 2025</span>
          <span>Creative Agency</span>
          <span>Where aesthetic meets algorithm</span>
        </div>
      </div>

      {/* Mast — wordmark centred on desktop, left on mobile where the burger owns the right. */}
      <div
        className={`px-6 md:px-10 flex items-center justify-between md:justify-center transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          compact ? "h-[52px]" : "h-[64px] md:h-[60px]"
        }`}
      >
        <Link to="/" viewTransition aria-label="ØRIONS" className="text-foreground relative z-[60] inline-flex items-center">
          <Logo
            className={`w-auto block transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              compact ? "h-[15px] md:h-[16px]" : "h-[15px] md:h-[24px]"
            }`}
          />
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden relative z-[60] flex flex-col items-end gap-[5px] py-2"
        >
          <span className={`block h-px bg-foreground transition-[width,transform,opacity] duration-300 ${open ? "w-5 translate-y-[6px] rotate-45" : "w-5"}`} />
          <span className={`block h-px bg-foreground transition-[width,transform,opacity] duration-300 ${open ? "opacity-0" : "w-4"}`} />
          <span className={`block h-px bg-foreground transition-[width,transform,opacity] duration-300 ${open ? "w-5 -translate-y-[6px] -rotate-45" : "w-5"}`} />
        </button>
      </div>

      {/* Link row beneath the mast, then the double rule that closes a masthead. */}
      <nav className="hidden md:flex items-center justify-center gap-6 lg:gap-9 px-6 md:px-10 pb-2 border-b border-foreground/25">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            viewTransition
            className={({ isActive }) =>
              `relative font-mono text-[11px] tracking-[0.16em] uppercase transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-foreground after:transition-transform after:duration-300 after:origin-left ${
                isActive
                  ? "text-foreground after:scale-x-100"
                  : "text-foreground/55 hover:text-foreground after:scale-x-0 hover:after:scale-x-100"
              }`
            }
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
      <div className="hidden md:block border-b border-foreground/10 mt-[3px]" />
      <div className="md:hidden border-b border-foreground/10" />

      {/* Mobile menu overlay — `inert` when closed so hidden links stay out of
          tab order and the screen-reader tree. */}
      <div
        {...((!open ? { inert: "" } : {}) as Record<string, unknown>)}
        aria-hidden={!open}
        className={`md:hidden fixed inset-0 top-0 z-50 bg-background flex flex-col transition-[opacity,transform] duration-300 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="h-[64px] shrink-0" />
        <nav className="flex-1 px-6 flex flex-col justify-center gap-2">
          {links.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              viewTransition
              className="group flex items-baseline gap-4 py-3 border-b border-foreground/10 text-foreground"
            >
              <span className="font-mono text-[11px] tracking-[0.22em] text-foreground tabular-nums">0{i + 1}</span>
              <span className="h-display-md">{l.label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="px-6 pt-4 pb-8 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground flex flex-col gap-1.5">
          <a href="mailto:hello@orions.agency" className="hover:text-foreground transition-colors">hello@orions.agency</a>
          <a href="tel:+66893542628" className="hover:text-foreground transition-colors">+66 89 354 2628</a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
