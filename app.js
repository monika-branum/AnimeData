/* Imports */

import { getCharacters } from './fetch-utils.js';
import { renderCharacterCard } from './render-utils.js';

/* Get DOM Elements */
const animeList = document.getElementById('character-list-container');
/* State */

/* Events */
window.addEventListener('load', async () => {
    const characters = await getCharacters();
    for (let character of characters) {
        const characterRender = renderCharacterCard(character);
        animeList.append(characterRender);
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
