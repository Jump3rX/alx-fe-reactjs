import axios from "axios";

const key = import.meta.env.VITE_APP_GITHUB_API_KEY;
const baseURL = "https://api.github.com/search/users?q=";

export const fetchUserData = async (username, location, minRepos) => {
  try {
    let query = username ? `${username} in:login` : "";
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>${minRepos}`;

    const response = await axios.get(`${baseURL}${query}`, {
      headers: key ? { Authorization: `token ${key}` } : {},
    });

    return response.data.items; // API returns an array of users under 'items'
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
