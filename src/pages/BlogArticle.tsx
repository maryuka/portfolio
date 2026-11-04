import { useParams } from "react-router";
import { useFetch } from "@/lib/useFetch";
import type { Post } from "@/lib/types";
import styles from "./Blog.module.css";

export default function BlogArticle() {
  const { slug = "" } = useParams();
  const post = useFetch<Post[]>(`/api/article/${encodeURIComponent(slug)}`)?.[0];

  if (!post) return null;

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
