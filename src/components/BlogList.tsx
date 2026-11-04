import { Link } from "react-router";
import { useState } from "react";
import type { Post, Tag } from "@/lib/types";
import styles from "./BlogList.module.css";

const stripTags = (html: string) => html.replace(/<\/?[^>]+(>|$)/g, "");

const excerpt = (html: string, length = 70) => {
  const text = stripTags(html);
  return text.length > length ? `${text.substring(0, length)}...` : text;
};

export default function BlogList({ posts, tags }: { posts: Post[]; tags: Tag[] }) {
  const [selectedTag, setSelectedTag] = useState("");

  return (
    <>
      <div className={styles.chips}>
        {tags.map((tag) => (
          <button
            key={tag.slug}
            type="button"
            className={`${styles.chip} ${selectedTag === tag.slug ? styles.selected : ""}`}
            aria-pressed={selectedTag === tag.slug}
            onClick={() => setSelectedTag((cur) => (cur === tag.slug ? "" : tag.slug))}
          >
            {tag.name}
          </button>
        ))}
      </div>
      <div className={styles.grid}>
        {posts.map((post) => (
          <div key={post.id} className={styles.item}>
            <Link to={`/blog/${post.slug}`} className={styles.link}>
              <div className={styles.image}>
                <span className={styles.imageText}>
                  {post.emoji} {post.titleOfImage}
                </span>
              </div>
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.body}>{excerpt(post.body)}</p>
              <span className={styles.date}>{new Date(post.createdAt).toLocaleDateString()}</span>
              <span className={styles.tags}>
                {post.tags.map((tag) => (
                  <span key={tag.slug} className={styles.tag}>
                    {tag.name}
                  </span>
                ))}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
