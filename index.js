import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { createSearchBar} from "./components/SearchBar/SearchBar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);
//const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');

// States
export let maxPage = 1;
export let page = 1;
let searchQuery = "";
// Fetch API

async function fetchCharacters() {
  
try{
  const url = new URL("https://rickandmortyapi.com/api/character");
  if (searchQuery !== "") {
      url.searchParams.set("name", searchQuery);
    }
    url.searchParams.set("page", page);
  const response = await fetch(url);
  const data = await response.json();

  const characters = data.results;
  console.log(characters); // just for debugging

  cardContainer.innerHTML = "";  // clear old cards
  // Here the cards will be fetched dynamically
  characters.forEach((character) => {
    const card = createCharacterCard(character);
    cardContainer.appendChild(card);
  });

  } catch (error) {
    console.error("Oops:", error);
  }
}
  // Search 
  const searchBar = createSearchBar({
  onSubmit: (query) => {
    console.log("Search query:", query);
    searchQuery = query;
    page = 1;
    fetchCharacters();
  },
});

searchBarContainer.append(searchBar);


fetchCharacters();
