import { useState, useEffect } from 'react';
import data from '../../data/logements.json';

export default function useFetchGetAppartment() {
    const [dataAppartment, setData] = useState(undefined);
    const [isLoadingAppartment, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        async function fetchData() {
            /*
            try {
                const response = await fetch('');
                const dataResponse = response.json();
                setData(dataResponse.appartment);
                setLoading(false);
                return true;
            } catch {
                return undefined;
            } */
            const dataResponse = data;
            setData(dataResponse.appartment);
            setLoading(false);
        }
        fetchData();
    }, []);
    return { dataAppartment, isLoadingAppartment };
}
