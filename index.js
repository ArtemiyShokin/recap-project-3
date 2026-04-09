//import { createCharacterCard } from "./components/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');

// States
export let maxPage = 1;
export let page = 1;
const searchQuery = "";
// Fetch API

async function fetchCharacters() {
try{
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  } catch (error) {
    console.error("Oops:", error);
  }
  const characters = data.results;
    return characters;
}

fetchCharacters();
