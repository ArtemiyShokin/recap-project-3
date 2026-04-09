export function createCharacterCard() {
    const li = document.createElement("li");
    li.className = "card";
    const episodeCount = character.episode.length;
    
    li.innerHtml = 
    `
    <div class="card__image-container">
            <img
              class="card__image"
              src="${Character.image}"
              alt="${Character.name}"
              
            />
    <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">${Character.image}</h2>
            <dl class="card__info">
              <dt class="card__info-title">Status</dt>
              <dd class="card__info-description">${Character.status}</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description">${Character.type}</dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">${episodeCount}</dd>
            </dl>
          </div>
        </li>
    `
}
