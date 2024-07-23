import { useEffect, useState } from "react";
import { fetchReport } from "../services";
import { Report } from "../types";

/* A Custom hook for managing the API call and state management of the report data. */

export const useReport = () => {
  const [reports, setReports] = useState<Report[] | null>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getReport = async () => {
      try {
        const data = await fetchReport();
        setReports(data.Reports);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    getReport();
  }, []);

  console.log(reports);

  return { reports, loading, error };
};
