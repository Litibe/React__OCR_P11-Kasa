import BannerTopHome from '../components/Banner/BannerTop.home.jsx';
import Loading from '../components/Loading/Loading.jsx';
import useFetchGetAppartment from '../utils/api/fetchAppartment.jsx';

export default function HomePage() {
    document.title = 'Kasa - Chez Vous, partout et ailleurs';
    const { dataAppartment, isLoadingAppartment } = useFetchGetAppartment();

    return (
        <>
            <BannerTopHome />
            <main>{isLoadingAppartment && <Loading />}</main>
        </>
    );
}
