// src/app/blog/page.js
"use client";
import { useEffect, useState } from "react";
import BlogCard from "@/components/BlogCard";

export default function BlogListing() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null); // For error handling

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blog");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError("Failed to load blogs");
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Our Blog</h1>
      {error && <p className="text-center text-danger">{error}</p>}{" "}
      {/* Display error message */}
      {blogs.length === 0 ? (
        <p className="text-center">No blogs available at the moment.</p>
      ) : (
        <div className="row">
          {blogs.map((blog) => (
            <div className="col-md-4 mb-4" key={blog.slug}>
              <BlogCard
                title={blog.title}
                excerpt={blog.excerpt}
                image={blog.image}
                slug={blog.slug}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
