const PAGEREGEX = "Page not found";

const sections = location.pathname.split("/").slice(1);
const pageNotFound = document.title.search(PAGEREGEX);

if (sections[0] === "new" && sections.length === 1) {
  const urlParams = new URLSearchParams(location.search);
  const nameParam = urlParams.get("name");
  const ownerParam = urlParams.get("owner");
  if (nameParam !== "") {
    document.getElementById("repository_name").value = nameParam;
  }
  if (ownerParam !== "") {
    const currOwner = document
      .getElementById("repository-owner")
      .innerText.toLowerCase()
      .trim();
    if (ownerParam.toLowerCase().trim() !== currOwner) {
      document.getElementById(
        "repository_description"
      ).value = `☝️ REMEMBER CHANGE THIS OWNER TO "${ownerParam}" `;
    }
  }
} else if (pageNotFound !== -1 && sections.length === 2) {
  // These are "fake" query params that we can farm
  location.replace(
    `https://github.com/new?name=${sections[1]}&owner=${sections[0]}`
  );
}
