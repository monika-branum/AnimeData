export function renderCharacterCard(Character) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('character-card');

    p.textContent = Character.Anime;
    a.href = `./details/?id=${Character.id}`;
    img.src = Character.Image;
    //check the details page and create if needed//

    div.append(img, p);

    a.append(div);

    return a;
}

export function renderDetailPage(item) {
    const detailDiv = document.createElement('div');
    const imgDisplay = document.createElement('img');
    const characterNameDisplay = document.createElement('h1');
    const animeTitleDisplay = document.createElement('h2');
    const animeTypeDisplay = document.createElement('p');
    const abilitiesDisplay = document.createElement('p');

    imgDisplay.src = item.Image;
    characterNameDisplay.textContent = item.character_name;
    animeTitleDisplay.textContent = item.Anime;
    animeTypeDisplay.textContent = `Genre: ${item.anime_type}`;
    abilitiesDisplay.textContent = `Abilities/ Powers: ${item.powers_abilities}`;
    detailDiv.append(
        imgDisplay,
        characterNameDisplay,
        animeTitleDisplay,
        animeTypeDisplay,
        abilitiesDisplay
    );
    return detailDiv;
}
