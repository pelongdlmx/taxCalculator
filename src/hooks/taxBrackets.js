import { useState, useEffect } from "react";
import { fetchTaxBrackets } from "../api/taxApi";

export const useTaxBrackets = (year, trigger) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!trigger || !year) {
      return;
    }

    const fetchData = async (retries = 3) => {
      setIsLoading(true);
      setError(null);

      try {
        const brackets = await fetchTaxBrackets(year);
        setData(brackets);
      } catch (err) {
        if (retries > 0) {
          console.log(
            `Error detected, retrying... ${retries} attempts remaining`,
          );

          setTimeout(() => fetchData(retries - 1), 1000);
        } else {
          setError("The server is not responding after several attempts.");
        }
      } finally {
        if (retries === 0 || data) {
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, [year, trigger]);

  return { data, isLoading, error };
};
