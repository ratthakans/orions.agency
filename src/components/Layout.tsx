import { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import StudioStatusBar from "./StudioStatusBar";
import PageTransition from "./PageTransition";
import CornerMarks from "./CornerMarks";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="grain min-h-screen bg-background text-foreground flex flex-col">
    <StudioStatusBar />
    <Nav />
    <CornerMarks />
    <PageTransition />
    <main className="flex-1 pt-7">{children}</main>
    <Footer />
  </div>
);

export default Layout;
