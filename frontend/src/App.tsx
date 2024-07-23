import React from "react";
import "./App.css";

import { ReportComponent } from "./components";
import { useReport } from "./hooks/useReport";

export const App: React.FC = () => {
  const { reports, loading, error } = useReport();

  if (loading) return <div className="loading">Loading...</div>;
  if (error)
    return <div className="error">Failed to load report: {error.message}</div>;
  if (!reports || reports.length === 0)
    return <div className="no-data"> No reports available to view</div>;

  return (
    <>
      {reports.map((report) => (
        <ReportComponent key={report.ReportID} {...report} />
      ))}
    </>
  );
};
