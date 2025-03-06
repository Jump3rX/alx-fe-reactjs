import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
function BlogPost() {
  const { postId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!postId.match(/^[0-9]+$/)) {
      navigate("/");
    }
  }, [postId, navigate]);
  return (
    <div>
      <h1>Blog Post #{postId}</h1>
      <p>This is the content for blog post {postId}</p>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default BlogPost;
