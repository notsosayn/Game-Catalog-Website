const searchInput = document.querySelector(".search-bar input");
const categoryLinks = document.querySelectorAll("#tabs a");
const tabsContainer = document.querySelector("#tabs");

const noResultsMsg = document.createElement("p");
noResultsMsg.textContent = "No matching game categories found.";
noResultsMsg.style.display = "none";
noResultsMsg.style.textAlign = "center";
noResultsMsg.style.fontSize = "40px";
noResultsMsg.style.marginTop = "10px";
tabsContainer.insertAdjacentElement("afterend", noResultsMsg);

searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase().trim();
  let visibleCount = 0;

  for (let i = 0; i < categoryLinks.length; i++) {
    const link = categoryLinks[i];
    const img = link.querySelector("img");
    const categoryText = img ? img.title.toLowerCase() : "";

    if (categoryText.includes(query)) {
      link.style.display = "inline-block";
      visibleCount++;
    } else {
      link.style.display = "none";
    }
  }

  if (visibleCount === 0) {
    noResultsMsg.style.display = "block";
  } else {
    noResultsMsg.style.display = "none";
  }
});