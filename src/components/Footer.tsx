import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border px-6 md:px-12 py-16 bg-surface">
    <div className="max-w-[1400px] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="font-brand text-[22px]">ØRIONS</Link>
          <p className="mt-4 text-[13px] leading-[1.65] text-muted-foreground font-thai">
            Idea-led Creative Agency. Bangkok.
          </p>
        </div>
        <div>
          <div className="label-mono text-muted-foreground">Navigate</div>
          <ul className="mt-4 space-y-2 text-[14px] font-thai">
            <li><Link to="/services" className="hover:text-foreground text-muted-foreground">Services</Link></li>
            <li><Link to="/work" className="hover:text-foreground text-muted-foreground">Work</Link></li>
            <li><Link to="/about" className="hover:text-foreground text-muted-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground text-muted-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="label-mono text-muted-foreground">Contact</div>
          <ul className="mt-4 space-y-2 text-[14px] font-thai">
            <li><a href="mailto:hello@orions.agency" className="hover:text-foreground text-muted-foreground">hello@orions.agency</a></li>
            <li><a href="tel:+66923905464" className="hover:text-foreground text-muted-foreground">+66 92 390 5464</a></li>
            <li><a href="https://orions.agency" className="hover:text-foreground text-muted-foreground">orions.agency</a></li>
          </ul>
        </div>
        <div>
          <div className="label-mono text-muted-foreground">Studio</div>
          <p className="mt-4 text-[13px] leading-[1.65] text-muted-foreground font-thai">
            246/8 Soi Yothinphatthana<br />Bang Kapi, Bangkok 10240
          </p>
        </div>
      </div>

      <div className="mt-12 hairline" />
      <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="label-mono text-accent">SHARPER IDEAS. CLEARER DIRECTION.</p>
        <p className="font-mono text-[10px] text-muted-foreground/70">
          © {new Date().getFullYear()} ØRIONS · Tax ID 0105568220629
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
