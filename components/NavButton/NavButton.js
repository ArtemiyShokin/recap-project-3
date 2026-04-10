export function NavButton ({ text, onClick }) {
    const button = document.createElement("button");
    button.className = "button";
    button.textContent = text;

    if(onClick) {
        button.addEventListener("click" , onClick);
    }
    return button;
}