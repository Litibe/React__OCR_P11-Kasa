import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import GridAppartement from '../components/Appartment/GridAppartement.jsx';
import Loading from '../components/Loading/Loading.jsx';
import useFetchGetAppartment from '../utils/api/fetchAppartment.jsx';
import NotationAppartement from '../components/Appartment/NotationAppartement.jsx';

export default function Appartment() {
    const { dataAppartment, isLoadingAppartment } = useFetchGetAppartment();
    const [appartment, setAppartment] = useState(undefined);
    const { idAppartment } = useParams();
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
    }, [dataAppartment]);
    return (
        <main>
            {appartment !== undefined ? (
                <>
                    <img
                        src={appartment.cover}
                        className="appart__cover-banner"
                        alt={appartment.title}
                        loading="lazy"
                    />
                    <div className="appart">
                        <div className="appart__header-details">
                            <h1>{appartment.title}</h1>
                            <p>{appartment.location}</p>
                            <div>
                                {appartment.tags !== undefined &&
                                    appartment.tags.map((tag) => (
                                        <span className="appart-tag" key={tag}>
                                            {tag}
                                        </span>
                                    ))}
                            </div>
                        </div>
                        <div className="appart__host">
                            <div className="appart__host-details">
                                <img
                                    src={appartment.host.picture}
                                    className="appart__host-details-img"
                                    alt={appartment.host.name}
                                    loading="lazy"
                                />
                                <p>
                                    {appartment.host.name
                                        .split(' ')
                                        .map((text) => (
                                            <span key={text}>{text}</span>
                                        ))}
                                </p>
                            </div>
                            <div className="appart__host-notation">
                                <NotationAppartement
                                    rating={parseInt(appartment.rating, 20)}
                                />
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <Loading />
            )}
        </main>
    );
}
