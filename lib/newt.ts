import "server-only";
import type { Post, Tag } from "./types";

const BASE_URL = "https://portfolio-806585.cdn.newt.so/v1/blog";

/* eslint-disable @typescript-eslint/no-explicit-any */
async function fetchNewt(path: string): Promise<any[]> {
  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      headers: { Authorization: `Bearer ${process.env.BLOG_ACCESS_TOKEN}` },
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.items ?? [];
  } catch (e) {
    console.error(`Failed to fetch Newt: ${path}`, e);
    return [];
  }
}

function toPost(post: any): Post {
  return {
    id: post._id,
    slug: post.slug,
    emoji: post.emoji?.value ?? "",
    title: post.title,
    titleOfImage: post.titleOfImage,
    body: post.body ?? "",
    tags: (post.tags ?? []).map((tag: any) => ({ name: tag.name, slug: tag.slug })),
    createdAt: post._sys.createdAt,
    updatedAt: post._sys.updatedAt,
  };
}

export async function getArticles(): Promise<Post[]> {
  return (await fetchNewt("/article")).map(toPost);
}

export async function getArticle(slug: string): Promise<Post | undefined> {
  const items = await fetchNewt(`/article?slug=${encodeURIComponent(slug)}`);
  return items[0] ? toPost(items[0]) : undefined;
}

export async function getTags(): Promise<(Tag & { id: string })[]> {
  return (await fetchNewt("/tag")).map((tag: any) => ({
    id: tag._id,
    slug: tag.slug,
    name: tag.name,
  }));
}
