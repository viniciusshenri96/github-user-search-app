import { API_URL } from "./config.js";

export const searchUserGitHub = async function () {
  const data = await fetch(`${API_URL}viniciusshenri96`);
  const res = await data.json();

  return res;
};
