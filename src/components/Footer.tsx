import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-foreground px-6 md:px-10 pt-12 pb-8">
    <div className="grid grid-cols-2 md:grid-cols-12 gap-10">
      <div className="md:col-span-4">
        <Link to="/" className="font-brand text-[28px] tracking-[-0.02em]">ØRIONS</Link>
        <p className="mt-4 text-[13px] leading-[1.6] text-muted-foreground font-thai max-w-[260px]">
          Idea-led Creative Agency. Sharper ideas. Clearer direction.
        </p>
      </div>
      <div className="md:col-span-2">
        <div className="index-badge text-muted-foreground">Index</div>
        <ul className="mt-4 space-y-2 text-[14px]">
          <li><Link to="/services" className="hover:underline">Services</Link></li>
          <li><Link to="/work" className="hover:underline">Work</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
      <div className="md:col-span-3">
        <div className="index-badge text-muted-foreground">Contact</div>
        <ul className="mt-4 space-y-2 text-[14px]">
          <li><a href="mailto:hello@orions.agency" className="hover:underline">hello@orions.agency</a></li>
          <li><a href="tel:+66923905464" className="hover:underline">+66 92 390 5464</a></li>
          <li className="text-muted-foreground">orions.agency</li>
        </ul>
      </div>
      <div className="md:col-span-3">
        <div className="index-badge text-muted-foreground">Studio</div>
        <p className="mt-4 text-[13px] leading-[1.6] text-muted-foreground font-thai">
          246/8 Soi Yothinphatthana<br />Bang Kapi, Bangkok 10240<br />Thailand
        </p>
      </div>
    </div>

    <div className="mt-16 border-t border-foreground pt-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
      <p className="index-badge">SHARPER IDEAS. CLEARER DIRECTION.</p>
      <p className="font-mono text-[10px] text-muted-foreground">
        © {new Date().getFullYear()} ØRIONS · Tax ID 0105568220629
      </p>
    </div>
  </footer>
);

export default Footer;
