import { searchUserGitHub } from "./model.js";
import { resultsView } from "./view/resultsView.js";

const controleResults = async function () {
  const data = await searchUserGitHub();

  resultsView(data);
};
controleResults();
