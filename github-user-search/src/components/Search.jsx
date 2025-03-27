import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleSetUsername(e) {
    setUsername(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!username.trim()) return; // Prevent empty search

    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const userInfo = await fetchUserData(username);
      if (userInfo) {
        setUserData(userInfo);
      } else {
        setError("Looks like we cant find the user");
      }
    } catch (err) {
      setError("An error occurred while fetching data");
    } finally {
      setLoading(false);
    }

    setUsername("");
  }

  return (
    <div>
      <h2>Search a GitHub user</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={handleSetUsername}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div className="card">
          <img src={userData.avatar_url} alt="User Avatar" />
          <h3>Name: {userData.login || "N/A"}</h3>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Profile Link
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
