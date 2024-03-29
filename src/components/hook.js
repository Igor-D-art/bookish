import { useState, useEffect } from "react";
import axios from "axios";


const useRemoteService = (initial) => {

  const [data, setData] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

    useEffect(() => {
        const fetchBooks = async () => {
            setError(false);
            setLoading(true);

            try {
                const result = await axios.get('http://localhost:8080/books');
                setData(result.data);
            } catch (e) {
                setError(true);
            } finally {
                setLoading(false)
            }
        }
        fetchBooks()
    }, []);

    return {data, loading, error}
}

export default useRemoteService;