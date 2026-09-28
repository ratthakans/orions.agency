import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/pages/Contact";

/** ?pkg= preselects the "where do you want to start" field. */
export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { pkg?: string } =>
    typeof search.pkg === "string" && search.pkg ? { pkg: search.pkg } : {},
  component: Contact,
});
