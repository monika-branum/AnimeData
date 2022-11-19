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
