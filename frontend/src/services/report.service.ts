import { ReportReponse } from "../types";

export const fetchReport = async (): Promise<ReportReponse> => {
  const response = await fetch("http://localhost:3001/api/balance-sheet");
  if (!response) {
    throw new Error("Failed to fetch report data");
  }
  const data = await response.json();
  return data;
};
