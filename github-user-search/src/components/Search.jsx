import React from "react";
import { useState } from "react";
import { fetchUserData } from "../services/githubService";
function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  function handleSetUsername(e) {
    setUsername(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let userInfo = await fetchUserData(username);
    console.log(userInfo);
    setUserData(userInfo);
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
          onChange={(e) => handleSetUsername(e)}
        />
        <button type="submit">Search</button>
      </form>

      {userData ? (
        <div className="card">
          <img src={userData.avatar_url} alt="" />
          <h3>Name: {userData.name}</h3>
          <a href={userData.html_url} target="_blank">
            Profile Link
          </a>
        </div>
      ) : (
        <h2>No user data available!</h2>
      )}
    </div>
  );
}

export default Search;
