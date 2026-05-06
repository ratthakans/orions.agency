import { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import PageTransition from "./PageTransition";
import CornerMarks from "./CornerMarks";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="grain min-h-screen bg-background text-foreground flex flex-col">
    <Nav />
    <CornerMarks />
    <PageTransition />
    <main className="flex-1 relative z-10 bg-background">{children}</main>
    {/* Footer sits behind, revealed as the page scrolls past — sticky reveal */}
    <div className="relative z-0" style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)" }}>
      <div className="sticky bottom-0">
        <Footer />
      </div>
    </div>
  </div>
);

export default Layout;
