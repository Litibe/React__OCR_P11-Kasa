import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import GridAppartement from '../components/Appartment/GridAppartement.jsx';
import Loading from '../components/Loading/Loading.jsx';
import useFetchGetAppartment from '../utils/api/fetchAppartment.jsx';

export default function Appartment() {
    const { dataAppartment, isLoadingAppartment } = useFetchGetAppartment();
    const [appartment, setAppartment] = useState(undefined);
    const { idAppartment } = useParams();
    console.log(idAppartment);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        if (dataAppartment !== undefined && idAppartment !== undefined) {
            dataAppartment.map(
                (element) =>
                    element.id === idAppartment && setAppartment(element)
            );
        }
        if (appartment !== undefined) {
            document.title = 'Kasa - ' + appartment.title;
        }
        console.log(appartment);
    }, [dataAppartment, idAppartment]);

    return <main>{appartment === undefined ? 'TOTO' : <Loading />}</main>;
}
