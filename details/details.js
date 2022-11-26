import { renderDetailPage } from '../render-utils.js';
import { getCharacter } from '../fetch-utils.js';

const displayContainer = document.getElementById('display-container');

window.addEventListener('load', async () => {
    const selector = new URLSearchParams(window.location.search);
    const id = selector.get('id');
    const returnData = await getCharacter(id);
    const renderEl = renderDetailPage(returnData.data);
    displayContainer.append(renderEl);
});
