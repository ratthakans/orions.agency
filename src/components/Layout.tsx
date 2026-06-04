import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";
import CornerMarks from "./CornerMarks";
import StickyMobileCTA from "./StickyMobileCTA";

const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const reduced = useReducedMotion();
  return (
    <div className="grain min-h-screen bg-background text-foreground flex flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[80] focus:bg-foreground focus:text-background focus:px-4 focus:py-2 focus:font-mono focus:text-[11px] focus:tracking-[0.18em] focus:uppercase"
      >
        Skip to content
      </a>
      <Nav />
      <CornerMarks />
      <motion.main
        id="main"
        key={pathname}
        initial={reduced ? false : { opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 relative z-10 bg-background pb-14 md:pb-0"
      >
        {children}
      </motion.main>
      <StickyMobileCTA />
      <Footer />
    </div>
  );
};

export default Layout;
