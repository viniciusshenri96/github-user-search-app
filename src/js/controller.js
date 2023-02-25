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

const init = function () {
  resultsView.addHandleSeach(controleResults);
  // resultsView.addHandlerAddFavorites(controlAddFavorites);
  // model.localStoraUsers();
  resultsView.render(model.state.users);
};
init();
