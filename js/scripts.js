const concatTitleAndUsername = () => {
  const delimeter = " | ";
  const websiteTitle = document.getElementById("title").value;
  const username = document.getElementById("username").value;

  /** 
   * Whether the username already has a title in it 
   * @type {string}
   */
  const titleAlreadyIncluded = username.startsWith(websiteTitle + delimeter);

  if (!websiteTitle || !username || titleAlreadyIncluded) return;

  const result = websiteTitle + delimeter + username;

  document.getElementById("username").value = result;
};