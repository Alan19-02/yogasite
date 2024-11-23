"use client";

import { useState } from "react";

export default function ManageBlogs() {
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogData),
      });

      if (response.ok) {
        alert("Blog published successfully!");
        setBlogData({ title: "", content: "" });
      } else {
        alert("Failed to publish blog");
      }
    } catch (error) {
      console.error("Error publishing blog:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Manage Blogs</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={blogData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="Content"
          value={blogData.content}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Publish Blog</button>
      </form>
    </div>
  );
}
