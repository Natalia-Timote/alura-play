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

    if(search.length == 0) {
        list.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo.</h2>`;
    }
}

const searchButton = document.querySelector('[data-search-button]');

searchButton.addEventListener('click', event => searchingVideo(event));