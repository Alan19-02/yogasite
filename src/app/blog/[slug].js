// src/app/blog/[slug].js
import { useRouter } from "next/router";

export default function BlogPost({ post }) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="container mt-5">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export async function getStaticPaths() {
  // Fetch blog posts here to get dynamic paths
  const posts = [
    { id: 1, title: "Yoga Benefits" },
    { id: 2, title: "Posture Tips" },
  ];

  const paths = posts.map((post) => ({
    params: { slug: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  // Fetch the blog post data by slug
  const post = {
    id: slug,
    title: "Yoga Benefits", // Replace with actual fetching logic
    content: "Full blog post content...", // Replace with actual content
  };

  return { props: { post } };
}
