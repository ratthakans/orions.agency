import { useState, useEffect } from "react";

const links = [
  { label: "Work", href: "#hero-projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-[64px] flex items-center justify-between">
        <a href="#top" className="font-display text-[18px] tracking-tight text-foreground">
          ØRIONS
        </a>
        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="label-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#audit"
          className="label-mono bg-accent text-accent-foreground px-4 py-2.5 hover:bg-accent/90 transition-colors"
        >
          Book Audit
        </a>
      </div>
    </header>
  );
};

export default Nav;
