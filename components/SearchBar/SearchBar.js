export function createSearchBar({ onSubmit }) {
    const form = document.createElement("form");
    form.className = "search-bar";
    form.setAttribute("data-js", "search-bar");

    const input = document.createElement("input");
    input.type = "text";
    input.name = "query";
    input.className = "search-bar__input";
    input.placeholder = "search characters";
    input.setAttribute("aria-label", "character name");

    const button = document.createElement("button");
    button.className = "search-bar__button";
    button.setAttribute("aria-label", "search for character");
    button.type = "submit";

    const img = document.createElement("img");
    img.src = "assets/magnifying-glass.png";
    img.alt = "";
    img.className = "search-bar__icon";

    button.append(img);
    form.append(input, button);

    form.addEventListener("submit", (e)  => {
        e.preventDefault();
        console.log("SearchBar submit triggered:", input.value); 
        onSubmit(input.value.trim());
    });
    return form;
}