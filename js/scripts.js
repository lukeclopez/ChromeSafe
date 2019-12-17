concatTitleAndUsername = () => {
  const websiteTitle = document.getElementById("title").value;
  const username = document.getElementById("username").value;

  if (!websiteTitle || !username) return;

  const result = websiteTitle + "|" + username;

  document.getElementById("username").value = result;
};
