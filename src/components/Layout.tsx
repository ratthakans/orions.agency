import { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import StickyMobileCTA from "./StickyMobileCTA";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grain min-h-screen bg-background text-foreground flex flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[80] focus:bg-foreground focus:text-background focus:px-4 focus:py-2 focus:font-mono focus:text-[11px] focus:tracking-[0.18em] focus:uppercase"
      >
        Skip to content
      </a>
      <Nav />
      <main
        id="main"
        className="flex-1 relative z-10 bg-background pb-14 md:pb-0"
      >
        {children}
      </main>
      <StickyMobileCTA />
      <Footer />
    </div>
  );
};

export default Layout;
