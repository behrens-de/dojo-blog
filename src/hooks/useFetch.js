import { useState, useEffect } from "react"

// The Custom Hook
const useFetch = (url) => {
    // useState Hook
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    // UseEffect
    useEffect(() => {

        const abortCtlr = new AbortController();

        setTimeout(() => { // <= for testing the loading 
            fetch(url, { signal: abortCtlr.signal }) // <= API ENDPOINT
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
                    if (error.name === 'AbortError') {
                        console.log('fetch abort');
                    }
                    else {
                        setError(error.message);
                        setIsLoading(false);
                    }
                })
            // CLEAN UP
        }, 200);
        
        return () => abortCtlr.abort();

    }, [url]); // <= beim ersten laden 

    return { data, isLoading, error }
}

export default useFetch;