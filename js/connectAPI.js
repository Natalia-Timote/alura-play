async function videosList() {
    const connection = await fetch("http://localhost:3000/videos");
    const convertConnection = await connection.json();
    return convertConnection;
}

async function newVideo(titulo, descricao, url, imagem) {
    const connection = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    const convertConnection = await connection.json();
    return convertConnection;
}

async function searchVideo(searchTerm) {
    const connection = await fetch(`http://localhost:3000/videos?q=${searchTerm}`)

    const convertConnection = await connection.json();
    return convertConnection;
}

export const connectApi = {
    videosList,
    newVideo,
    searchVideo
};
