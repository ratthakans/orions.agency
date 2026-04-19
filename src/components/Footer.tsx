import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-foreground px-6 md:px-10 pt-16 pb-8">
    {/* Editorial signature: massive wordmark + index */}
    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
      <div className="md:col-span-8">
        <Link to="/" aria-label="ØRIONS home" className="block">
          <span
            className="font-brand block leading-[0.85] tracking-[-0.05em]"
            style={{ fontSize: "clamp(72px, 16vw, 220px)" }}
          >
            ØRIONS
          </span>
        </Link>
      </div>
      <div className="md:col-span-4 md:pl-6 md:border-l border-soft">
        <div className="index-badge text-muted-foreground">— INDEX</div>
        <ul className="mt-5 space-y-2 text-[15px]">
          <li><Link to="/services" className="hover:underline">Services</Link></li>
          <li><Link to="/work" className="hover:underline">Work</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
    </div>

    {/* Bottom legal row */}
    <div className="mt-16 border-t border-soft pt-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
      <p className="index-badge">PRACTICAL · BOLD · DONE</p>
      <p className="font-mono text-[10px] text-muted-foreground">
        © {new Date().getFullYear()} ØRIONS · TAX ID 0105568220629 · BANGKOK · TH
      </p>
    </div>
  </footer>
);

export default Footer;
