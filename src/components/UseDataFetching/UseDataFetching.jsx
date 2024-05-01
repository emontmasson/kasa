import { useState, useEffect } from 'react';


function UseDataFetching(url) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const jsonData = await res.json();
                setData(jsonData);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url]);


    // Appelle la fonction de rendu conditionnel
    return { data, isLoading, error };
}

export default UseDataFetching;
