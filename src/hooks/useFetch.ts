import { useState, useEffect, useCallback } from "react";

interface Post {
    id: number;
    title: string;
    body: string;
}

const useFetch = (url: string) => {
    const [data, setData] = useState<Post[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                setError(`Failed to fetch data: ${response.statusText}`);
                return;
            }
            const result: Post[] = await response.json();
            setData(result);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unknown error occurred");
            }
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        (async () => {
            await fetchData();
        })();
    }, [fetchData]);

    return { data, loading, error, refetch: fetchData };
};

export default useFetch;
