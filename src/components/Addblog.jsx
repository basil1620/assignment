import React, { useState } from "react";

function Addblog() {
  const [blog, setBlog] = useState({
    name: "",
    description: "",
    author: "",
  });

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Blog Submitted:", blog);
    // You can send blog data to your own backend here
  };

  return (
    <div>
      <h2>Add Blog</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Blog Name" onChange={handleChange} required />
        <br />
        <textarea name="description" placeholder="Description" onChange={handleChange} required />
        <br />
        <input name="author" placeholder="Author Name" onChange={handleChange} required />
        <br />
        <button type="submit">Submit Blog</button>
      </form>
    </div>
  );
}

export default Addblog;
