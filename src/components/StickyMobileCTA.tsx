import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, MessageCircle } from "lucide-react";

/** Sticky bottom action bar — mobile only. Hidden on /contact. */
const StickyMobileCTA = () => {
  const { pathname } = useLocation();
  if (pathname === "/contact") return null;

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-background text-foreground border-t border-foreground/15 grid grid-cols-2">
      <Link
        to="/contact"
        className="flex items-center justify-center gap-2 py-3.5 btn-label hover:bg-foreground hover:text-background transition-colors"
      >
        <span>Get a proposal</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </Link>
      <a
        href="https://line.me/ti/p/~orions"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 py-3.5 btn-label bg-background text-foreground border-l border-foreground/15 hover:bg-foreground hover:text-background hover:text-foreground transition-colors"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span>LINE</span>
      </a>
    </div>
  );
};

export default StickyMobileCTA;
