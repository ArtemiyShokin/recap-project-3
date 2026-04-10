// import { page } from "../../index.js";
// import { maxPage } from "../../index.js";

export function NavPagination({ page = 1, maxPage = 1 }) {
  const spanElement = document.createElement("span");
  spanElement.classList.add("navigation__pagination");
  spanElement.setAttribute("data-js", "pagination"); /* stolen from Priya :P" */
  spanElement.textContent = `${page}/${maxPage}`;
  //   navigation.append(spanElement);
  return spanElement;
}
