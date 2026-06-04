// Thin wrapper around Plausible custom events.
// The queue stub in index.html makes window.plausible safe to call before the script loads.

type PlausibleProps = Record<string, string | number | boolean>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: PlausibleProps }) => void;
  }
}

export const track = (event: string, props?: PlausibleProps) => {
  if (typeof window !== "undefined" && typeof window.plausible === "function") {
    window.plausible(event, props ? { props } : undefined);
  }
};
