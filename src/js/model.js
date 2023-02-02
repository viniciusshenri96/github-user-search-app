const userGit = async function () {
  const data = await fetch("https://api.github.com/users/iuricode");
  const res = await data.json();
  console.log(res);
};
userGit();
