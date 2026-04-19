import { Link } from "react-router-dom";

const services = [
  { label: "Creative Solution", to: "/services" },
  { label: "Applied Communication", to: "/services" },
  { label: "Social Media Marketing", to: "/services" },
  { label: "High Impact Production", to: "/services" },
];

const navigate = [
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => (
  <footer className="border-t border-border px-6 md:px-12 pt-20 pb-10">
    <div className="max-w-[1400px] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="font-brand text-[24px]">ØRIONS</Link>
          <p className="mt-5 text-[13px] leading-[1.65] text-muted-foreground font-thai max-w-[260px]">
            Applied Creative Agency. Bangkok-based. Outcome-driven.
          </p>
          <p className="mt-6 label-mono text-grad">PRACTICAL · BOLD · DONE</p>
        </div>

        {/* Services */}
        <div>
          <div className="label-mono text-muted-foreground">Services</div>
          <ul className="mt-5 space-y-2.5 text-[13px]">
            {services.map((s) => (
              <li key={s.label}>
                <Link to={s.to} className="hover:text-foreground text-muted-foreground transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Site */}
        <div>
          <div className="label-mono text-muted-foreground">Navigate</div>
          <ul className="mt-5 space-y-2.5 text-[13px]">
            {navigate.map((n) => (
              <li key={n.label}>
                <Link to={n.to} className="hover:text-foreground text-muted-foreground transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Studio */}
        <div>
          <div className="label-mono text-muted-foreground">Contact</div>
          <ul className="mt-5 space-y-2.5 text-[13px]">
            <li><a href="mailto:hello@orions.agency" className="hover:text-foreground text-muted-foreground transition-colors">hello@orions.agency</a></li>
            <li><a href="tel:+66923905464" className="hover:text-foreground text-muted-foreground transition-colors">+66 92 390 5464</a></li>
          </ul>
          <div className="mt-7 label-mono text-muted-foreground">Studio</div>
          <p className="mt-4 text-[13px] leading-[1.65] text-muted-foreground font-thai">
            246/8 Soi Yothin Pattana 3<br />Bang Kapi, Bangkok 10240
          </p>
        </div>
      </div>

      <div className="mt-16 h-px divider-grad" />
      <div className="mt-7 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <p className="font-mono text-[10px] text-muted-foreground/70 tracking-[0.18em] uppercase">
          © {new Date().getFullYear()} ØRIONS · Bangkok · All rights reserved
        </p>
        <p className="font-mono text-[10px] text-muted-foreground/60">
          Tax ID 0105568220629
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
