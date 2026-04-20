"use client";

import { useRouter } from "next/navigation";
import { BlogPage } from "../../route-pages/BlogPage";

export default function BlogListingPage() {
  const router = useRouter();

  const handleNavigate = (page: string, blogId?: number) => {
    if (page === "blog-detail" && blogId) {
      router.push(`/blog/${blogId}`);
      return;
    }

    if (page === "contact") {
      router.push("/contact");
      return;
    }

    if (page === "blog") {
      router.push("/blog");
      return;
    }

    router.push("/");
  };

  return <BlogPage onNavigate={handleNavigate} />;
}
