import React from 'react';

function DetalleUltimaCancionCreada() {

    let nombre = "IDGAF";
    let genero = ["Pop","Electronica"];

    return (
        <div>
        <h2>Detalle Ultima Canción Creada {nombre} </h2>
        <ul>
            {genero.map(genero=> <li>{genero}</li>)}
        </ul>

        </div>
    );
}

export default DetalleUltimaCancionCreada;