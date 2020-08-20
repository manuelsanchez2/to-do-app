import { useEffect, useState } from "react";

function useAsync(asyncFunction) {
  const waitFor = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const doFetch = async () => {
      try {
        setLoading(true);
        setData(null);
        const data = await asyncFunction();
        await waitFor(1000);
        setData(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    doFetch();
  }, [asyncFunction]);
  return { data, loading, error };
}

export default useAsync;
