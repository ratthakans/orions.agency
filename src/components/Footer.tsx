const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 md:px-12 py-12 md:py-16 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <span className="font-logo text-[12px] font-medium tracking-[0.08em] text-foreground uppercase">ØRIONS</span>
            <span className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground/40">Creative Growth Partner</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:hello@orions.agency" className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors duration-300">hello@orions.agency</a>
            <span className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground/30">Bangkok, Thailand</span>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground/30">
            © {new Date().getFullYear()} ØRIONS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
