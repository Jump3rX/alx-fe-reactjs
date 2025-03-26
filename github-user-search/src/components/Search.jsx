import React from "react";

function Search() {
  return (
    <div>
      <h2>Search a GitHub user</h2>

      <form>
        <label htmlFor="username">Enter Username</label>
        <input type="text" name="username" id="username" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
