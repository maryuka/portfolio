import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticle } from "@/lib/newt";
import styles from "../blog.module.css";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getArticle((await params).slug);
  return { title: post ? `${post.title} | Yuka -engineer-` : "Yuka -engineer-" };
}

export default async function ArticlePage({ params }: Props) {
  const post = await getArticle((await params).slug);
  if (!post) notFound();

  return (
    <article>
      <h1 className={styles.postTitle}>
        {post.emoji} {post.title}
      </h1>
      <p className={styles.postDate}>{new Date(post.createdAt).toLocaleDateString()}</p>
      {/* 本文は自分で管理している Newt CMS の HTML */}
      <div className={styles.postBody} dangerouslySetInnerHTML={{ __html: post.body }} />
    </article>
  );
}
