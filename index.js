const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
<<<<<<< HEAD
const maxPage = 3;
=======
let maxPage = 1;
>>>>>>> main
let page = 1;
const searchQuery = "";

// Fetch API

async function fetchCharacters() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    const characters = data.results;

    console.log(characters);

    return characters;
  } catch (error) {
    console.error("Oops:", error);
  }
}

fetchCharacters();

prevButton.addEventListener("click", () => {
  if (page <= 1) {
    throw new Error("Can not go over or under page-count");
  }
  page--;
  fetchCharacters();
  console.log(page);
});

nextButton.addEventListener("click", () => {
  if (page >= maxPage) {
    throw new Error("Can not go over or under page-count");
  }
  page++;
  fetchCharacters();
  console.log(page);
});
