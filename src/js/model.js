import { API_URL } from "./config.js";
import { TIMEOUT_API } from "./config.js";
// const state = {
//   id,
//   user,
// };

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

    return data;
  } catch (err) {
    throw err;
  }
};
