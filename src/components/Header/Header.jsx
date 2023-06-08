import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import LogoKasa from '../LogoKasa/logoKasa.jsx';
import LogoKasaSmall from '../LogoKasa/logoKasaSmall.jsx';

export default function Header() {
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
                    Accueil
                </Link>
                <Link to="/about" className="nav__link">
                    A Propos
                </Link>
            </nav>
        </header>
    );
}
