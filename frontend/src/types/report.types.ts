export type Attribute = {
  Value: string;
  Id: string;
};

export type Cell = {
  Value: string;
  Attributes?: Attribute[];
};

export type Row = {
  RowType: "Header" | "Section" | "Row";
  Cells?: Cell[];
  Title?: string;
  Rows?: Row[];
};

export type Report = {
  ReportID: string;
  ReportName: string;
  ReportType: string;
  ReportTitles: string[];
  ReportDate: string;
  UpdatedDateUTC: string;
  Fields: any[];
  Rows: Row[];
};

export type ReportReponse = {
  Status: string;
  Reports: Report[];
};
