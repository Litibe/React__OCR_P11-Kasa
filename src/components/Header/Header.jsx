import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import LogoKasa from '../LogoKasa/logoKasa.jsx';
import LogoKasaSmall from '../LogoKasa/logoKasaSmall.jsx';

export default function Header(props) {
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight,
    });
    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener('resize', setDimension);

        return () => {
            window.removeEventListener('resize', setDimension);
        };
    }, [screenSize]);
    return (
        <header>
            <div className="logo-brand">
                {screenSize.dynamicWidth > 767 ? (
                    <LogoKasa />
                ) : (
                    <LogoKasaSmall />
                )}
            </div>
            <nav className="nav">
                <Link to="/" className="nav__link">
                    {props.url === 'home' ? (
                        <span className="active">Accueil</span>
                    ) : (
                        <span>Accueil</span>
                    )}
                </Link>
                <Link to="/about" className="nav__link">
                    {props.url === 'about' ? (
                        <span className="active">A propos</span>
                    ) : (
                        <span>A propos</span>
                    )}
                </Link>
            </nav>
        </header>
    );
}
