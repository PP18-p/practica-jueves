import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';

function DetallePlanta() {
    const { id } = useParams();
    const [planta, setPlanta] = useState(null);

    useEffect(() => {
        async function cargar() {
            const respuesta = await fetch('/plantas.json');
            const datos = await respuesta.json();
            setPlanta(datos.find((p) => p._id === id));
        }
        cargar();
    }, [id]);

    if (!planta) return <p>Cargando...</p>;

    return (
        <section className="tarjeta detalle">
            <div className="emoji">{planta.emoji}</div>
            <h2>{planta.nombre}</h2>
            <p>{planta.descripcion}</p>
            <p>Riego: {planta.riego}</p>
            <p className="precio">$ {planta.precio.toLocaleString('es-EC')}</p>
            <Link to="/plantas">← Volver</Link>
        </section>
    );
}

export default DetallePlanta;