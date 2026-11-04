import BlogList from "@/components/BlogList";
import { useFetch } from "@/lib/useFetch";
import type { Post, Tag } from "@/lib/types";

export default function BlogIndex() {
  const posts = useFetch<Post[]>("/api/articles");
  const tags = useFetch<Tag[]>("/api/tag");

  return <BlogList posts={posts ?? []} tags={tags ?? []} />;
}
