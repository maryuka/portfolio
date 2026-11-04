// Newt CMS からブログデータを取得し、フロントで使う形に整形する。
// Cloudflare Pages Functions と開発用の Vite サーバーの両方から使う。

const BASE_URL = "https://portfolio-806585.cdn.newt.so/v1/blog";

type Tag = { name: string; slug: string };

export type Post = {
  id: string;
  slug: string;
  title: string;
  emoji: string;
  titleOfImage: string;
  body: string;
  tags: Tag[];
  createdAt: string;
  updatedAt: string;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
async function fetchNewt(path: string, token: string | undefined): Promise<any[]> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`Newt API error: ${res.status}`);
  const data: any = await res.json();
  return data.items ?? [];
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

export async function getArticles(token: string | undefined): Promise<Post[]> {
  return (await fetchNewt("/article", token)).map(toPost);
}

export async function getArticle(slug: string, token: string | undefined): Promise<Post[]> {
  return (await fetchNewt(`/article?slug=${encodeURIComponent(slug)}`, token)).map(toPost);
}

export async function getTags(token: string | undefined) {
  return (await fetchNewt("/tag", token)).map((tag: any) => ({
    id: tag._id as string,
    slug: tag.slug as string,
    name: tag.name as string,
  }));
}
