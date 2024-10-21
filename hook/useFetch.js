import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (endpoint, query) => {  // Accept endpoint and query as parameters
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,  // Use endpoint parameter
        headers: {
            'x-rapidapi-key': 'e056d948efmsh5ea6eeb7c17513fp159bc3jsne887f03c4490',
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },  // Use query parameter
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            console.log(response.data.data)
        } catch (error) {
            setError(error);
            alert('There is an Error.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);  // Ensure the hook runs only once when the component mounts

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, refetch };
};

export default useFetch;  // Export the hook as default
