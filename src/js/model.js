import { API_URL } from "./config.js";
import { TIMEOUT_API } from "./config.js";

export const state = {
  users: {},
  darkMode: "",
};

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const searchUserGitHub = async function (query) {
  try {
    const res = await Promise.race([
      fetch(`${API_URL}${query}`),
      timeout(TIMEOUT_API),
    ]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    state.users = {
      query: query,
      avatar_url: data.avatar_url,
      bio: data.bio,
      blog: data.blog,
      company: data.company,
      created_at: data.created_at,
      followers: data.followers,
      following: data.following,
      location: data.location,
      login: data.login,
      name: data.name,
      public_repos: data.public_repos,
    };

    localStoraUsers();

    return data;
  } catch (err) {
    // It's throwing the error again, so I can use it in controller.js
    throw err;
  }
};

export const setDarkModeStorage = (theme) => {
  localStorage.setItem("selected-theme", theme);
};

export const getDarkModeStorage = () => {
  const storage = localStorage.getItem("selected-theme");

  if (storage) return (state.darkMode = storage);
};

export function localStoraUsers() {
  localStorage.setItem("users", JSON.stringify(state.users));
}

function init() {
  const storage = localStorage.getItem("users");
  if (storage) state.users = JSON.parse(storage);
}

init();
