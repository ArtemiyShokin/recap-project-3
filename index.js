import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";
//pagination data
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');
//card container data
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);
//search engine
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');

// States
let page = 1;
const pageResponse = await fetch(
  `https://rickandmortyapi.com/api/character?page=${page}`,
);
const pageData = await pageResponse.json();
// console.log("hello?" + pageData.info.pages);
let maxPage = pageData.info.pages;
const searchQuery = "";

// Fetch API
//generating the page info from the API

async function fetchCharacters() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}` /* I changed the fetchCharacters function to allow different page numbers to load */,
    );
    const data = await response.json();

    const characters = data.results;
    console.log(characters); // just for debugging

    cardContainer.innerHTML = ""; // clear old cards
    // Here the cards will be fetched dynamically
    characters.forEach((character) => {
      const card = createCharacterCard(character);
      cardContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Oops:", error);
  }
}

fetchCharacters();

//pagination features
//1. pagination checker
let pageChecker = (pagination.textContent = `${page}/${maxPage}`);
//2. page navigation buttons
//( let's move them to navpagination.js in the last step)
prevButton.addEventListener("click", () => {
  if (page <= 1) {
    throw new Error("Can not go under 1");
  }
  /* i had to remove the if page is under 1 function as it stops the function */
  page--;
  fetchCharacters();
  pageChecker =
    pagination.textContent = `${page}/${maxPage}`; /* i wanted to change this to < pageChecker = `${page}/${maxPage}` > but it does not work */
  console.log(page);
});

nextButton.addEventListener("click", () => {
  if (page >= maxPage) {
    throw new Error(`Can not go over page ${maxPage}`);
  }
  if (page <= maxPage) page++;
  fetchCharacters();
  pageChecker = pagination.textContent = `${page}/${maxPage}`;
  console.log(page);
});
