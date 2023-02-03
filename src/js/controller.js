import { searchUserGitHub } from "./model.js";
import resultsView from "./view/resultsView.js";

const controleResults = async function () {
  // const data = await searchUserGitHub();

  // Pesquisando usuario
  const query = resultsView.getQuery();
  if (!query) return;
  const data = await searchUserGitHub(query);

  // Conexão com API
  resultsView.render(data);
};
controleResults();

const init = function () {
  resultsView.addHandleSeach(controleResults);
};
init();
