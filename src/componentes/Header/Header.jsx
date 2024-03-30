import logo from "../../assets/images/logo.svg"
import "./Header.css";

function Header() {
    return (
        <header className="headerContanier">
            <div className="logo">
                <img src={logo} alt="logo.svg" />
            </div>
            <ul className="navMenu">
                <li>
                    <a className="item" href="inicio">Inicio</a>
                </li>
                <li>
                    <a className="item" href="evento">Evento</a>
                </li>
                <li>
                    <a className="item" href="palestrantes">Palestrantes</a>
                </li>
                <li>
                    <a className="item" href="oficinas">Oficinas</a>
                </li>
                <li>
                    <a className="item" href="cronograma">Cronograma</a>
                </li>
                <li>
                    <a className="item" href="inscricao">Inscrição</a>
                </li>
            </ul>
        </header>
    )
}

export default Header;