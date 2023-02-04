import { API_URL } from "./config.js";

export const searchUserGitHub = async function (query) {
  try {
    const data = await fetch(`${API_URL}${query}`);
    const res = await data.json();
    console.log(res);
    return res;
  } catch (err) {
    console.error(err);
  }
};
