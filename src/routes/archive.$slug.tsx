import { createFileRoute, notFound } from "@tanstack/react-router";
import ArchivePost from "@/pages/ArchivePost";
import { getPiece } from "@/data/archive";

export const Route = createFileRoute("/archive/$slug")({
  loader: ({ params }) => {
    if (!getPiece(params.slug)) throw notFound();
  },
  component: ArchivePost,
});
