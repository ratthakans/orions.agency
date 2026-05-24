import { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import CornerMarks from "./CornerMarks";
import StickyMobileCTA from "./StickyMobileCTA";
const Layout = ({ children }: { children: ReactNode }) => (
  <div className="grain min-h-screen bg-background text-foreground flex flex-col">
    <Nav />
    <CornerMarks />
    <main className="flex-1 relative z-10 bg-background pb-14 md:pb-0">{children}</main>
    <StickyMobileCTA />
    <Footer />
  </div>
);

export default Layout;
