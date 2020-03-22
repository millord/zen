import React, { useState, useEffect } from "react";
import axios from "axios";
import "./post-style.css";

const DataFeching = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/post")
      .then(res => {
        setPosts(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ul className="card-list">
        {posts.map(post => (
          <div key={post._id}>
            <strong>
              <p>{post.title}</p>
            </strong>
            <p>{post.description}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DataFeching;
