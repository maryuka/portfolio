import type { Metadata } from "next";
import BlogList from "@/components/BlogList";
import { getArticles, getTags } from "@/lib/newt";

export const metadata: Metadata = { title: "日常 | Yuka -engineer-" };

export default async function BlogPage() {
  const [posts, tags] = await Promise.all([getArticles(), getTags()]);
  return <BlogList posts={posts} tags={tags} />;
}
