const Footer = () => {
  return (
    <footer className="px-6 md:px-12 py-12 border-t border-border">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-mono text-[11px] tracking-[0.05em] text-muted-foreground">
          © {new Date().getFullYear()} ORIONS
        </p>
        <a
          href="mailto:hello@orions.agency"
          className="font-mono text-[11px] tracking-[0.05em] text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          hello@orions.agency
        </a>
      </div>
    </footer>
  );
};

export default Footer;
