import React, { useEffect, useState } from "react";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h2>Blog Dashboard</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.id}. </strong> {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
