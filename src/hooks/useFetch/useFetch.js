import { useEffect, useRef, useState } from 'react';

function useFetch(url) {
  const cache = useRef({});
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!url) {
      throw new Error('URL is required parameter when using the useFetch hook');
    }
    const fetchData = async () => {
      try {
        if (cache.current[url]) {
          const data = cache.current[url];
          setData(data);
        } else {
          const response = await fetch(url);
          const data = await response.json();
          cache.current[url] = data; // set response in cache;
          setData(data);
        }
      } catch (error) {
        setErrors(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return [isLoading, errors, data];
}

export default useFetch;
