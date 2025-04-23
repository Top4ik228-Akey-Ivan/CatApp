import { useState, useEffect, useCallback } from 'react';
import { ICat } from '../types/catTypes';

const useCatApi = (autoRefresh = false) => {
    const [catData, setCatData] = useState<ICat[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchCat = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch('https://api.thecatapi.com/v1/images/search', {
                credentials: 'omit',
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setCatData(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error occurred');
            setCatData(null);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (autoRefresh) {
            const intervalId = setInterval(fetchCat, 5000);
            return () => clearInterval(intervalId);
        }
    }, [fetchCat, autoRefresh]);

    return { catData, loading, error, fetchCat };
};

export default useCatApi;
