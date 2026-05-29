interface Props {
  label: string;
  href: string;
  link: string;
  external?: boolean;
  className?: string;
}

const StackedCTA = ({ label, href, link, external, className = "" }: Props) => (
  <div className={`cta-stack ${className}`}>
    <span className="cta-stack__label">{label}</span>
    <span className="cta-stack__chev" aria-hidden>›</span>
    <a
      className="cta-stack__link"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {link}
    </a>
  </div>
);

export default StackedCTA;