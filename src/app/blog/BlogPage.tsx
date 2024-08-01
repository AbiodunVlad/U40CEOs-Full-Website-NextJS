"use client";
// import ReadBlog from "@/app/pages/blog/ReadBlog";
import { useRouter } from "next/router";
import ReadBlog from "./ReadBlog";

export default function BlogPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <div>Loading...</div>;
  }

  return <ReadBlog />;
}
