import axios from "axios";
const key = import.meta.env.VITE_APP_GITHUB_API_KEY;
const baseURL = "https://api.github.com/users/";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${baseURL}${username}`, {
      headers: key ? { Authorization: `token ${key}` } : {},
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};
