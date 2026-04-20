"use client";

import { useParams, useRouter } from "next/navigation";
import { BlogDetailPage } from "../../../route-pages/BlogDetailPage";

export default function BlogDetailRoutePage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const blogId = Number(params.id);

  const handleNavigate = (page: string, nextBlogId?: number) => {
    if (page === "blog") {
      router.push("/blog");
      return;
    }

    if (page === "blog-detail" && nextBlogId) {
      router.push(`/blog/${nextBlogId}`);
      return;
    }

    if (page === "contact") {
      router.push("/contact");
      return;
    }

    router.push("/");
  };

  return <BlogDetailPage blogId={Number.isNaN(blogId) ? 1 : blogId} onNavigate={handleNavigate} />;
}
