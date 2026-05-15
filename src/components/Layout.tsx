import { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import CornerMarks from "./CornerMarks";
import StickyMobileCTA from "./StickyMobileCTA";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="grain min-h-screen bg-foreground text-background flex flex-col">
    <Nav />
    <CornerMarks />
    <main className="flex-1 relative z-10 bg-background pb-14 md:pb-0">{children}</main>
    <StickyMobileCTA />
    {/* Footer sits behind, revealed as the page scrolls past — sticky reveal */}
    <div className="relative z-0" style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)" }}>
      <div className="sticky bottom-0">
        <Footer />
      </div>
    </div>
  </div>
);

export default Layout;
