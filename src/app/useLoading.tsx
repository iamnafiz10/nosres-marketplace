import {useState, useEffect} from 'react';

const useLoading = () => {
    const [loading, setLoading] = useState(true); // Set loading state

    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return loading;
};

export default useLoading;