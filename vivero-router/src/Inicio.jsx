import { Link } from 'react-router';

function Inicio() {
    return (
        <section className="hero">
            <h2>Bienvenido a Vivero Verde 🌱</h2>
            <p>Plantas de interior y exterior para tu hogar.</p>
            <Link to="/plantas">Ver catálogo</Link>
        </section>
    );
}

export default Inicio;