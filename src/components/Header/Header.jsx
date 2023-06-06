import { Link } from 'react-router-dom';
import LogoKasa from '../LogoKasa/logoKasa.jsx';
import LogoKasaSmall from '../LogoKasa/logoKasaSmall.jsx';

export default function Header() {
    return (
        <header>
            <div className="logo-brand">
                {window.innerWidth > 767 ? <LogoKasa /> : <LogoKasaSmall />}
            </div>
            <nav className="nav">
                <Link to="/" className="nav__link">
                    Accueil
                </Link>
                <Link to="/about" className="nav__link">
                    A Propos
                </Link>
            </nav>
        </header>
    );
}
