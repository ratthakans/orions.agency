import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

interface Props {
  items: FAQItem[];
  className?: string;
}

const FAQ = ({ items, className = "" }: Props) => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className={`border-t border-foreground/20 ${className}`}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q} className="border-b border-foreground/20">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-baseline justify-between gap-6 text-left py-6 md:py-7 group"
              aria-expanded={isOpen}
            >
              <span className="flex items-baseline gap-5 md:gap-8">
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-[19px] md:text-[24px] tracking-[-0.015em] leading-[1.2] group-hover:text-cinnabar transition-colors">
                  {it.q}
                </span>
              </span>
              <span className="shrink-0 text-foreground/60 group-hover:text-cinnabar transition-colors">
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            {isOpen && (
              <div className="pb-7 md:pb-8 pl-0 md:pl-[64px] pr-10 max-w-[760px]">
                <p lang="th" className="font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.75] text-muted-foreground">
                  {it.a}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;