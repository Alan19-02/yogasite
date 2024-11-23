// src/app/api/blog.js
let mockBlogs = [
  {
    id: 1,
    title: "The Benefits of Yoga",
    content: "Yoga improves flexibility, strength, and mindfulness...",
    author: "Admin",
    date: "2024-11-20",
  },
  {
    id: 2,
    title: "How to Choose the Right Yoga Mat",
    content: "Choosing the right yoga mat can enhance your practice...",
    author: "Admin",
    date: "2024-11-18",
  },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    // Return all blog posts
    res.status(200).json(mockBlogs);
  } else if (req.method === "POST") {
    // Add a new blog post
    const { title, content, author, date } = req.body;

    if (!title || !content || !author || !date) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newBlog = {
      id: mockBlogs.length + 1,
      title,
      content,
      author,
      date,
    };

    mockBlogs.push(newBlog);
    res.status(201).json(newBlog);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
