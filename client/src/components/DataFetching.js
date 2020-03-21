import React, { useState, useEffect } from "react";
import axios from "axios";

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
      <ul>
        {posts.map(post => (
          <div key={post._id}>
            <h6 className="center-align">{post.title}</h6>
            <p className="center-align">{post.description}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DataFeching;
