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

const setDarkMode = (theme) => {
  model.setDarkModeStorage(theme);
};

const getDarkMode = () => {
  const theme = model.getDarkModeStorage();
  if (theme) resultsView.handlerDarkMode(theme);
};

const init = function () {
  getDarkMode();
  resultsView.addHandleSeach(controleResults);
  resultsView.addHandlerDarkMode(setDarkMode);
  resultsView.render(model.state.users);
};
init();
