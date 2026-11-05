import { useState, useEffect } from 'react';
import PlantaCard from './PlantaCard.jsx';

function Plantas() {
    const [plantas, setPlantas] = useState([]);
    const [filtro, setFiltro] = useState('Todas');

    useEffect(() => {
        async function cargar() {
            const respuesta = await fetch('/plantas.json');
            const datos = await respuesta.json();
            setPlantas(datos);
        }
        cargar();
    }, []);

    const visibles = plantas.filter((p) => filtro === 'Todas' || p.tipo === filtro);

    return (
        <section>
            <h2>Nuestras plantas</h2>
            <div className="filtros">
                <button onClick={() => setFiltro('Todas')}>Todas</button>
                <button onClick={() => setFiltro('Interior')}>Interior</button>
                <button onClick={() => setFiltro('Exterior')}>Exterior</button>
            </div>
            <div className="tarjetas">
                {visibles.map((planta) => (
                    <PlantaCard key={planta._id} {...planta} />
                ))}
            </div>
        </section>
    );
}

export default Plantas;