"use client";

import { useState } from "react";

export default function UpdateSocials() {
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSocialLinks({ ...socialLinks, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/socials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(socialLinks),
      });

      if (response.ok) {
        alert("Social links updated successfully!");
      } else {
        alert("Failed to update social links");
      }
    } catch (error) {
      console.error("Error updating social links:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Update Social Media Links</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="facebook"
          placeholder="Facebook URL"
          value={socialLinks.facebook}
          onChange={handleChange}
        />
        <input
          type="text"
          name="twitter"
          placeholder="Twitter URL"
          value={socialLinks.twitter}
          onChange={handleChange}
        />
        <input
          type="text"
          name="instagram"
          placeholder="Instagram URL"
          value={socialLinks.instagram}
          onChange={handleChange}
        />
        <button type="submit">Update Links</button>
      </form>
    </div>
  );
}
