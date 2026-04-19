import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";

const clients = [
  "DEMOCRAT PARTY",
  "GCOO",
  "MY HOTEL",
  "HONG MOVE",
  "RTAF",
  "KHAO YAI CC",
  "HEAVY ORGANIZER",
  "LEICESTER CITY",
  "AUDI THAILAND",
  "BURIRAM ESPORT",
  "SIRIRAJ HOSPITAL",
  "THAI PBS",
  "เถื่อน TRAVEL",
  "THE UPGRADE",
];

const Footer = () => (
  <footer className="bg-foreground text-background">
    {/* Top section: navigation + contact */}
    <div className="px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-20">
      {/* Index header */}
      <div className="border-t border-background/20 pt-3 pb-3 flex items-center justify-between gap-6">
        <span className="index-badge font-bold inline-flex items-center gap-3 opacity-90">
          <span className="opacity-50 font-mono">∞</span>
          <span className="block w-4 h-px bg-background/30" />
          <span>SIGN-OFF</span>
        </span>
        <span className="index-badge font-medium opacity-50 hidden sm:inline">ØRIONS · BANGKOK · TH</span>
      </div>

      {/* Two-column editorial: links / contact */}
      <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        {/* Index links */}
        <div className="md:col-span-5">
          <div className="index-badge opacity-50">— INDEX</div>
          <ul className="mt-8 grid grid-cols-2 gap-y-4 gap-x-8 font-display text-[20px] md:text-[26px] leading-[1.1] tracking-[-0.02em]">
            {[
              { to: "/services", label: "Services" },
              { to: "/work", label: "Work" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="group inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
                >
                  <span>{l.label}</span>
                  <span className="opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5 -translate-x-1 transition-all duration-300">↗</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact block */}
        <div className="md:col-span-7 md:pl-12 md:border-l border-background/20 grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div>
            <div className="index-badge opacity-50">— REACH</div>
            <div className="mt-8 space-y-6">
              <div>
                <div className="index-badge opacity-40 mb-1">EMAIL</div>
                <a href="mailto:hello@orions.agency" className="font-display text-[16px] md:text-[18px] hover:opacity-70 transition-opacity break-all">
                  hello@orions.agency
                </a>
              </div>
              <div>
                <div className="index-badge opacity-40 mb-1">TEL</div>
                <a href="tel:+66923905464" className="font-display text-[16px] md:text-[18px] hover:opacity-70 transition-opacity">
                  +66 92 390 5464
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="index-badge opacity-50">— STUDIO</div>
            <p className="mt-8 font-thai text-[14px] leading-[1.7] opacity-80">
              246/8 Soi Yothinphatthana<br />
              Bang Kapi, Bangkok 10240<br />
              Thailand
            </p>
            <div className="mt-8 flex items-center gap-2.5">
              <a href="https://instagram.com/orions.bkk" target="_blank" rel="noreferrer" aria-label="Instagram"
                 className="w-9 h-9 border border-background/30 flex items-center justify-center hover:bg-background hover:text-foreground hover:border-background transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com/orions.bkk" target="_blank" rel="noreferrer" aria-label="Facebook"
                 className="w-9 h-9 border border-background/30 flex items-center justify-center hover:bg-background hover:text-foreground hover:border-background transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="mailto:hello@orions.agency" aria-label="Email"
                 className="w-9 h-9 border border-background/30 flex items-center justify-center hover:bg-background hover:text-foreground hover:border-background transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Client marquee — subtle, hairline-bordered */}
    <div className="border-y border-background/15 py-4 overflow-hidden">
      <div className="marquee">
        {[0, 1].map((k) => (
          <div key={k} className="marquee-track" aria-hidden={k === 1}>
            {clients.map((c, i) => (
              <span key={`${k}-${i}`} className="index-badge opacity-40 hover:opacity-90 transition-opacity flex items-center gap-12 whitespace-nowrap">
                <span>{c}</span>
                <span className="opacity-50">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>

    {/* Massive editorial wordmark — letter stagger on hover */}
    <div className="px-6 md:px-10 pt-12 md:pt-16">
      <Link to="/" aria-label="ØRIONS home" className="block group">
        <span
          className="font-brand block leading-[0.82] tracking-[-0.05em]"
          style={{ fontSize: "clamp(80px, 19vw, 280px)" }}
          aria-hidden
        >
          {"ØRIONS".split("").map((c, i) => (
            <span
              key={i}
              className="inline-block transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:opacity-70"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {c}
            </span>
          ))}
        </span>
      </Link>
    </div>

    {/* Legal row */}
    <div className="px-6 md:px-10 pb-8 mt-10 pt-5 border-t border-background/15 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
      <p className="index-badge opacity-70">PRACTICAL · BOLD · DONE</p>
      <p className="font-mono text-[10px] opacity-50">
        © {new Date().getFullYear()} ØRIONS · TAX ID 0105568220629 · BANGKOK · TH
      </p>
    </div>
  </footer>
);

export default Footer;
