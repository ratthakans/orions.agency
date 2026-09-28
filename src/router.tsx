import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import NotFound from "./pages/NotFound";

export const getRouter = () =>
  createRouter({
    routeTree,
    // Replaces the old ScrollToTop component: a new page starts at the top, a
    // link with a hash (/services#creative-unlock) scrolls to that section, and
    // Back returns to where the reader was.
    scrollRestoration: true,
    defaultPreload: "intent",
    // Matches vercel.json (trailingSlash: false), so no link costs a redirect.
    trailingSlash: "never",
    defaultNotFoundComponent: NotFound,
  });
