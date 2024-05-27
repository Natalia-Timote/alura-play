import { connectApi } from './connectAPI.js';
import newCard from './show-videos.js';

async function searchingVideo(event) {
    event.preventDefault();

    const searchData = document.querySelector('[data-search]').value;
    const search = await connectApi.searchVideo(searchData);

    const list = document.querySelector('[data-list]');

    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }

    search.forEach(element => list.appendChild(newCard
        (element.titulo, element.descricao, element.url, element.imagem)
    ));
}

const searchButton = document.querySelector('[data-search-button]');

searchButton.addEventListener('click', event => searchingVideo(event));