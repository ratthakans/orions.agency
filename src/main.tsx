import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./App";
import "./fonts";
import "./index.css";

// SSG/CSR entry — vite-react-ssg prerenders each route to static HTML at build
// (correct per-page <head> via <Head>), then hydrates on the client.
export const createRoot = ViteReactSSG({ routes });
