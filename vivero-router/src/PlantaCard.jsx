import { useState } from 'react';
import { Link } from 'react-router';

function PlantaCard({ _id, nombre, tipo, riego, precio, emoji }) {
    const [cantidad, setCantidad] = useState(0);

    return (
        <article className="tarjeta">
            <div className="emoji">{emoji}</div>
            <h3>{nombre}</h3>
            <p>Tipo: {tipo}</p>
            <p>Riego: {riego}</p>
            <p className="precio">$ {precio.toLocaleString('es-EC')}</p>
            <button onClick={() => setCantidad(cantidad + 1)}>Agregar</button>
            <p>En tu pedido: {cantidad}</p>
            <Link to={`/plantas/${_id}`}>Ver detalle →</Link>
        </article>
    );
}

export default PlantaCard;