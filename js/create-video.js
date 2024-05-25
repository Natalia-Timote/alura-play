import { connectApi } from './connectAPI.js';
const form = document.querySelector('[data-formulario]');

async function createVideo(event) {
    event.preventDefault();

    const imagem = document.querySelector('[data-imagem]').value;
    const url = document.querySelector('[data-url]').value;
    const titulo = document.querySelector('[data-titulo]').value;
    const descricao = Math.floor(Math.random() * 10).toString();

    await connectApi.newVideo(titulo, descricao, url, imagem);

    window.location.href = '../pages/envio-concluido.html';
}

form.addEventListener('submit', event => createVideo(event));
