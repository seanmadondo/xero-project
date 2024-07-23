import { Report } from "../types";

export const mockReport: Report = {
  ReportID: "1",
  ReportName: "Test Report",
  ReportDate: "2024-07-23",
  ReportType: "",
  ReportTitles: [],
  UpdatedDateUTC: "",
  Fields: [],
  Rows: [
    {
      Title: "Header",
      RowType: "Row",
      Cells: [{ Value: "Header Cell 1" }, { Value: "Header Cell 2" }],
    },
    {
      Title: "Section 1",
      RowType: "Section",
      Rows: [
        {
          Title: "Row 1",
          RowType: "Row",
          Cells: [{ Value: "Row 1 Cell 1" }, { Value: "Row 1 Cell 2" }],
        },
      ],
    },
  ],
};
