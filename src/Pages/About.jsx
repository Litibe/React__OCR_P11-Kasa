import GridAppartement from '../components/Appartment/GridAppartement.jsx';
import BannerTopHome from '../components/Banner/BannerTop.home.jsx';
import Loading from '../components/Loading/Loading.jsx';
import useFetchGetAppartment from '../utils/api/fetchAppartment.jsx';

export default function AboutPage() {
    document.title = 'Kasa - A propos de nous';
    return (
        <>
            <div className="banner__top about"></div>
            <main>"test"</main>
        </>
    );
}
