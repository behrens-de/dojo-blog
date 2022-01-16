import { useState, useEffect } from "react"

// The Custom Hook
const useFetch = (url) => {
    // useState Hook
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    // UseEffect
    useEffect(() => {
        fetch(url) // <= API ENDPOINT
            .then(response => {
                if (!response.ok) throw Error('Response is not ok');
                return response.json();
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(error => {
                setError(error.message);
                setIsLoading(false);
            })

    }, [url]); // <= beim ersten laden 

    return { data, isLoading, error }
}

export default useFetch;