/// <reference types="vite/client" />
import type { ReactNode } from "react";
import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import ErrorBoundary from "@/components/ErrorBoundary";
import NotFound from "@/pages/NotFound";
import { siteSchema } from "@/lib/site-schema";
import appCss from "@/index.css?url";

/** The document every page shares — what index.html used to hold. Per-page
 *  title, description, canonical and Open Graph come from each page's <SEO>. */
export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { name: "theme-color", content: "#0E0E0E" },
      { name: "author", content: "ORIONS" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.jpg", type: "image/jpeg" },
      { rel: "apple-touch-icon", href: "/favicon.jpg" },
      // Speed up third-party connections (analytics + embedded video)
      { rel: "preconnect", href: "https://plausible.io", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://www.youtube-nocookie.com" },
      { rel: "preconnect", href: "https://www.youtube.com" },
      { rel: "preconnect", href: "https://i.ytimg.com" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <RootDocument>
      <TooltipProvider>
        <Sonner />
        <Layout>
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </Layout>
      </TooltipProvider>
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="th">
      <head>
        <HeadContent />
        {/* Plausible analytics (privacy-friendly, no cookie banner needed) */}
        <script defer data-domain="orions.agency" src="https://plausible.io/js/script.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: "window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments)}",
          }}
        />
        {siteSchema.map((entry, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(entry).replace(/</g, "\\u003c") }}
          />
        ))}
        {/* Fail-safe: scroll-reveal blocks start at opacity:0 and are revealed by JS.
            With JS disabled, force them visible so no content is ever lost. */}
        <noscript>
          <style>{".reveal-root{opacity:1!important;transform:none!important}"}</style>
        </noscript>
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
