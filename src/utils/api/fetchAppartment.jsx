import { useState, useEffect } from 'react';

export default function useFetchGetAppartment() {
    const [dataAppartment, setData] = useState(undefined);
    const [isLoadingAppartment, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        async function fetchData() {
            try {
                const response = await fetch('./data/photographers.json');
                const data = await response.json();
                setData(data.appartment);
                setLoading(false);
                return true;
            } catch {
                return undefined;
            }
        }
        fetchData();
    }, []);
    return { dataAppartment, isLoadingAppartment };
}
