export function renderCharacterCard(Character) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('character-card');

    p.textContent = Character.Anime;
    a.href = `./detail/?id=${Character.id}`;
    img.src = Character.Image;
    //check the details page and create if needed//

    div.append(img, p);

    a.append(div);

    return a;
}

export function renderDetailPage(item) {
    const imgDisplay = document.createElement('img');
    const characterNameDisplay = document.createElement('h1');
    const animeTitleDisplay = document.createElement('h2');
    const animeTypeDisplay = document.createElement('p');
    const abilitiesDisplay = document.createElement('p');

    imgDisplay.src = item.Image;
}
