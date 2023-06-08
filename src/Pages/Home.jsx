import GridAppartement from '../components/Appartment/GridAppartement.jsx';
import BannerTop from '../components/Banner/BannerTop.jsx';
import Loading from '../components/Loading/Loading.jsx';
import useFetchGetAppartment from '../utils/api/fetchAppartment.jsx';
import backgroundHome from '../assets/images/e270fc8fc902a1eb738458e7b29c1899.jpeg';

export default function HomePage() {
    document.title = 'Kasa - Chez Vous, partout et ailleurs';
    const { dataAppartment, isLoadingAppartment } = useFetchGetAppartment();
    return (
        <>
            <BannerTop
                title={'Chez vous, partout et ailleurs'}
                img={backgroundHome}
            />
            <main>
                {isLoadingAppartment === false &&
                dataAppartment !== undefined ? (
                    <GridAppartement data={dataAppartment} />
                ) : (
                    <Loading />
                )}
            </main>
        </>
    );
}
