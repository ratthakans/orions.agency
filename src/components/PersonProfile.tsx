import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import Picture from "@/components/Picture";
import Reveal from "@/components/Reveal";
import type { Person } from "@/data/team";

/** Portrait, name, bio and selected credits for one person. Used on /about. */
const PersonProfile = ({ person, lead }: { person: Person; lead?: string }) => (
  <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-start">
    <Picture
      data={person.portrait}
      alt={`${person.name} — ${person.role}, ORIONS`}
      loading="lazy"
      className="w-48 h-60 md:w-64 md:h-80 object-cover object-top grayscale-[0.2] saturate-[0.85]"
    />
    <div className="min-w-0">
      {lead ? (
        <Reveal emphasis="lead">
          <p lang="th" className="mb-8 font-body text-[25px] md:text-[34px] leading-[1.4] max-w-[40ch]">{lead}</p>
        </Reveal>
      ) : null}
      <p className="font-body text-[24px] md:text-[30px] leading-tight">{person.name}</p>
      <p lang="th" className="mt-1 font-thai text-[15px] text-foreground/75">{person.nameTh}</p>
      <p className="mt-2 font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">{person.role}</p>
      <p lang="th" className="mt-6 max-w-[62ch] font-thai thai-wrap text-[16px] md:text-[17px] leading-[1.8] text-foreground/85">{person.bio}</p>

      <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {person.credits.map((credit) => (
          <li key={credit.title}>
            <a href={credit.url} target="_blank" rel="noopener noreferrer" className="group block">
              <div className="aspect-video overflow-hidden border border-foreground/12 group-hover:border-foreground/40 transition-colors">
                <Picture data={credit.image} alt={`${credit.title} — ${credit.client}`} loading="lazy" className="w-full h-full object-cover group-hover:opacity-90 transition-opacity" />
              </div>
              <p className="mt-3 font-mono text-[10px] tracking-[0.16em] uppercase text-muted-foreground">{credit.client}</p>
              <p className="mt-1 flex items-center gap-1.5 font-body text-[17px]">
                <span lang="th">{credit.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              </p>
              <p lang="th" className="mt-1 font-thai text-[14px] text-foreground/70">{credit.line}</p>
            </a>
          </li>
        ))}
      </ul>

      {person.more ? (
        person.more.url.startsWith("/") ? (
          <Link to={person.more.url} className="mt-8 cta-link cta-link-muted">
            <span>{person.more.label}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        ) : (
          <a href={person.more.url} target="_blank" rel="noopener noreferrer" className="mt-8 cta-link cta-link-muted">
            <span>{person.more.label}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        )
      ) : null}
    </div>
  </div>
);

export default PersonProfile;
