import LogoKasaWhiteSmall from '../LogoKasa/logoKasaWhiteSmall.jsx';

export default function Footer() {
    const today = new Date();
    const date = today.getFullYear();
    return (
        <footer>
            <LogoKasaWhiteSmall />
            <div className="copyright">© {date} Kasa. All Rights reserved</div>
        </footer>
    );
}
