import * as model from "./model.js";
import resultsView from "./view/resultsView.js";

const controleResults = async function () {
  try {
    // const data = await searchUserGitHub();

    // local storage
    resultsView.render(model.state.users);

    // Pesquisando usuario
    const query = resultsView.getQuery();
    if (!query) return;
    const data = await model.searchUserGitHub(query);

    // Conexão com API
    resultsView.render(data);

    resultsView.clearMessage();
  } catch (err) {
    resultsView.errorMessage();
  }
};

const init = function () {
  resultsView.addHandleSeach(controleResults);
  // model.localStoraUsers();
  controleResults();
};
init();
