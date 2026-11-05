import { Link } from 'react-router';

function NoEncontrado() {
    return (
        <section>
            <h2>Esta página no existe 🥀</h2>
            <Link to="/">Volver al inicio</Link>
        </section>
    );
}

export default NoEncontrado;