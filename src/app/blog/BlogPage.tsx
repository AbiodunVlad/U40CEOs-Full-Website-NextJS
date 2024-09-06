"use client";
import { useRouter } from "next/router";
import ReadBlog from "./[id]/page";

export default function BlogPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <div className="flex justify-center items-center">Loading...</div>;
  }

  return <ReadBlog />;
}
