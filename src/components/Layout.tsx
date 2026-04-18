import { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="grain min-h-screen bg-background text-foreground flex flex-col">
    <Nav />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
