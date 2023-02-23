import * as model from "./model.js";
import resultsView from "./view/resultsView.js";

const controleResults = async function () {
  try {
    const query = resultsView.getQuery();
    if (!query) return;

    const data = await model.searchUserGitHub(query);

    resultsView.render(data);

    resultsView.clearMessage();
  } catch (err) {
    console.log(err);
    resultsView.errorMessage();
  }
};

const init = function () {
  resultsView.addHandleSeach(controleResults);
};
init();
