import { createFileRoute, notFound } from "@tanstack/react-router";
import CaseStudy from "@/pages/CaseStudy";
import { getCaseStudy } from "@/data/caseStudies";

export const Route = createFileRoute("/work/$slug")({
  // An unknown slug is a real 404, not a silent redirect to /work.
  loader: ({ params }) => {
    if (!getCaseStudy(params.slug)) throw notFound();
  },
  component: CaseStudy,
});
