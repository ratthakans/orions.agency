import { useState, useEffect, Fragment } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import Logo from "@/components/Logo";

const links = [
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Archive", to: "/archive" },
] as const;

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  // react-router's NavLink rule: a section is active on its page and below it.
  const isActive = (to: string) => pathname === to || pathname.startsWith(`${to}/`);

  // Close the mobile menu on route change.
  useEffect(() => setOpen(false), [pathname]);

  // Collapse the wordmark to just Ø once scrolled (Anthropic-style).
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-foreground/10">
      <div className="px-6 md:px-10 h-[64px] flex items-center justify-between text-foreground">
        <Link to="/" viewTransition aria-label="ORIONS" className="text-foreground relative z-[60] inline-flex items-center">
          <span
            className={`inline-block overflow-hidden align-middle transition-[max-width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              scrolled && !open ? "max-w-[18px] md:max-w-[22px]" : "max-w-[160px]"
            }`}
          >
            <Logo className="h-[15px] md:h-[18px] w-auto block" />
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Fragment key={l.to}>
              <Link
                to={l.to}
                viewTransition
                className={
                  `relative font-body text-[13px] font-medium tracking-[0.02em] transition-colors after:absolute after:left-0 after:-bottom-1.5 after:h-px after:bg-foreground after:transition-transform after:duration-300 after:w-full ${
                    isActive(l.to)
                      ? "text-foreground after:scale-x-100"
                      : "text-foreground/55 hover:text-foreground after:scale-x-0 hover:after:scale-x-100"
                  } after:origin-left`
                }
              >
                {l.label}
              </Link>
            </Fragment>
          ))}
          <Link
            to="/contact"
            viewTransition
            className={
              `ml-2 inline-flex items-center gap-2 rounded-none px-4 py-2 font-mono text-[11px] tracking-[0.12em] uppercase border transition-colors ${
                isActive("/contact")
                  ? "bg-foreground text-background border-foreground"
                  : "border-foreground/30 text-foreground hover:bg-foreground hover:text-background"
              }`
            }
          >
            Contact ↗
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="lg:hidden relative z-[60] flex flex-col items-end gap-[5px] py-2"
        >
          <span className={`block h-px bg-foreground transition-all duration-300 ${open ? "w-5 translate-y-[6px] rotate-45" : "w-5"}`} />
          <span className={`block h-px bg-foreground transition-all duration-300 ${open ? "opacity-0" : "w-4"}`} />
          <span className={`block h-px bg-foreground transition-all duration-300 ${open ? "w-5 -translate-y-[6px] -rotate-45" : "w-5"}`} />
        </button>
      </div>

      {/* Mobile menu overlay — `inert` when closed so hidden links stay out of
          tab order and the screen-reader tree. */}
      <div
        inert={!open}
        aria-hidden={!open}
        className={`lg:hidden fixed inset-0 top-0 z-50 bg-background flex flex-col transition-[opacity,transform] duration-300 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="h-[64px] shrink-0" />
        <nav className="flex-1 px-6 flex flex-col justify-center gap-2">
          {[...links, { label: "Contact", to: "/contact" } as const].map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              viewTransition
              className={
                `group flex items-baseline gap-4 py-3 border-b border-foreground/10 ${isActive(l.to) ? "text-foreground" : "text-foreground"}`
              }
            >
              <span className="font-mono text-[11px] tracking-[0.22em] text-foreground tabular-nums">0{i + 1}</span>
              <span className="h-display-md">{l.label}</span>
            </Link>
          ))}
        </nav>
        <div className="px-6 pt-4 pb-8 font-mono text-[11px] tracking-[0.22em] uppercase text-muted-foreground flex flex-col gap-1.5">
          <a href="mailto:hello@orions.agency" className="hover:text-foreground transition-colors">hello@orions.agency</a>
          <a href="tel:+66893542628" className="hover:text-foreground transition-colors">+66 89 354 2628</a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
