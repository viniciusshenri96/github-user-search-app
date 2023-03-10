import * as model from "./model.js";
import resultsView from "./view/resultsView.js";

const controleResults = async function () {
  try {
    const query = resultsView.getQuery();
    if (!query) return;

    await model.searchUserGitHub(query);

    resultsView.render(model.state.users);

    resultsView.clearMessage();
  } catch (err) {
    console.log(err);
    resultsView.errorMessage();
  }
};

const controlDarkMode = (el) => {
  const text = el.querySelector(".header__mode-text");
  const icon = el.querySelector("img");

  if (text.textContent === "Dark") {
    text.textContent = "Light";
    text.style.color = "#FFF";

    document.body.classList.add("dark-mode");

    localStorage.setItem("selected-theme", "Dark");
    icon.src = `./src/img/icon-sun.svg`;
    localStorage.setItem("selected-icon", `./src/img/icon-moon.svg`);
  } else {
    text.textContent = "Dark";
    text.style.color = "#4b6a9b";
    icon.src = `./src/img/icon-moon.svg`;
    document.body.classList.remove("dark-mode");

    localStorage.setItem("selected-theme", "Light");

    localStorage.setItem("selected-icon", `./src/img/icon-sun.svg`);
  }

  // else text.textContent === "Dark";
};

const getDarkMode = () => {
  const storageTheme = localStorage.getItem("selected-theme");

  console.log(storageTheme);

  // if (storageTheme === "Light") document.body.classList.add("dark-mode");
};

const init = function () {
  resultsView.addHandleSeach(controleResults);
  resultsView.addHandlerDarkMode(controlDarkMode);
  // resultsView.addHandlerAddFavorites(controlAddFavorites);
  // model.localStoraUsers();
  // resultsView.render(model.state.users);
  getDarkMode();
};
init();
