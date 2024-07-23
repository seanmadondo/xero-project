import { Report } from "../../types";
import { Table } from "../Table";

export const ReportComponent = (report: Report) => {
  return (
    <div data-testid={`report-${report.ReportID}`}>
      <h1>{report.ReportName}</h1>
      <h2>{report.ReportDate}</h2>
      <Table rows={report.Rows} />
    </div>
  );
};
