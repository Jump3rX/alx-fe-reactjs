import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome To KejaSmart</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, dolore.
      </p>
      <nav>
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/blog/123">Sample Blog Post</Link>
      </nav>
    </div>
  );
}

export default Home;
