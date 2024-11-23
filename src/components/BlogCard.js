// src/components/BlogCard.js
import Link from "next/link";
import styles from "./blogCard.module.css";

export default function BlogCard({ slug, title, excerpt, image }) {
  return (
    <div className={styles.card}>
      {/* Display the blog's image */}
      <img src={image} alt={title} className={styles.cardImage} />

      {/* Card content */}
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardExcerpt}>{excerpt}</p>

        {/* Link to the blog details */}
        <Link href={`/blog/${slug}`} passHref>
          <a className={styles.cardButton}>Read More</a>
        </Link>
      </div>
    </div>
  );
}
