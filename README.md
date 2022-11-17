![Wireframe](<./assets/Untitled%20(5).jpg>)

##HTML

<header>
-link supabase with key and url
<main><section class="main-section"><h2>Anime Characters and Media</h2><div></div></section>

##app.js
-import fetch utils and render utils
-on load, add if for for getting data, rendering, and appending it

##fetch-utils
-link supabase url and key here
-export async get Anime, await, and return all items

-   export async getAnime(id),await, and return response
    -check error function

##render-utils
-export function renderAnimeCard(anime)
-add dic class list for anime card
-add text/image content and link
-append and return

-export function renderAnimeDetail(anime)
-create const and tags as needed
-create div class animeDetail
-add classes as needed
-template literal
-append and return

##detail js
-import from fetch and render
-call animeDetailContainer
-async event listener on load
-url search params
-render and append
