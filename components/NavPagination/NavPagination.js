prevButton.addEventListener("click", () => {
  if (page <= 1) {
    throw new Error("Can not go over or under page-count");
  }
  page--;
  //call fetchCharacters() function
  console.log(page);
});

nextButton.addEventListener("click", () => {
  if (page >= maxPage) {
    throw new Error("Can not go over or under page-count");
  }
  page++;
  //call fetchCharacters() function
  console.log(page);
});
