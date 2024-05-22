async function videosList() {
    const connection = await fetch("http://localhost:3000/videos");
    const convertConnection = await connection.json();
    return convertConnection;
}

async function createVideo(titulo, descricao, url, imagem) {
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


export const connectApi = {
    videosList,
    createVideo
};
