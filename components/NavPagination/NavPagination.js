const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');
import { maxPage } from "../../index.js";
import { page } from "../../index.js";

export const PrevButton = prevButton.addEventListener("click", () => {
  if (page <= 1) {
    throw new Error("Can not go over or under page-count");
  }
  if (page < 1) {
    page--;
    fetchCharacters();
    pagination.textContent = `${page}/${maxPage}`;
    console.log(page);
  }
});

export const NextButton = nextButton.addEventListener("click", () => {
  if (page >= maxPage) {
    throw new Error("Can not go over or under page-count");
  }
  if (page <= maxPage) page++;
  fetchCharacters();
  pagination.textContent = `${page}/${maxPage}`;
  console.log(page);
});

// https://rickandmortyapi.com/api/character ?page=<pageIndex>  add this to the fetch url
