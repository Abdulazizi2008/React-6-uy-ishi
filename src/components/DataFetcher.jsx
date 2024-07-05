import React, { useState, useEffect } from "react";
import "../App.css";

const Spinner = () => <div className="spinner">Loading...</div>;

const DataFetcher = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const handlePostChange = async (e) => {
    const postId = e.target.value;
    if (postId === "") {
      setSelectedPost(null);
      return;
    }
    setLoading(true);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const data = await response.json();
    setSelectedPost(data);
    setLoading(false);
  };

  return (
    <div className="select">
      <select onChange={handlePostChange}>
        <option value="">Select a post</option>
        {posts.map((post) => (
          <option key={post.id} value={post.id}>
            {post.title}
          </option>
        ))}
      </select>
      {loading && <Spinner />}
      {selectedPost && (
        <div
          className="flex
        "
        >
          <h2>{selectedPost.title}</h2>
          <p className="abv">{selectedPost.body}</p>
        </div>
      )}
    </div>
  );
};
export default DataFetcher;
