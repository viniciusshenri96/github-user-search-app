import { searchUserGitHub } from "./model.js";
import resultsView from "./view/resultsView.js";

const controleResults = async function () {
  try {
    // const data = await searchUserGitHub();

    // Pesquisando usuario
    const query = resultsView.getQuery();
    if (!query) return;
    const data = await searchUserGitHub(query);

    // Conexão com API
    resultsView.render(data);
    resultsView.clearMessage();
  } catch (err) {
    resultsView.errorMessage();
  }
};
controleResults();

const init = function () {
  resultsView.addHandleSeach(controleResults);
};
init();
