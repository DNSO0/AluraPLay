async function listarVideos() {
    const conexion = await fetch("http://localhost:3001/videos"); 

    const conexionConvertida = await conexion.json();

    //console.log(conexionConvertida);
    return conexionConvertida
}

export const conexionAPI={
    listarVideos
}

listarVideos();