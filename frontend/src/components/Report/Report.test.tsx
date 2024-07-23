import { render, screen } from "@testing-library/react";
import { mockReport } from "../../utils/mockReport";
import { ReportComponent } from "./Report.component";

describe("Report.test", () => {
  test("renders the report component", () => {
    render(<ReportComponent {...mockReport} />);

    // Check if the report title and date are in the document
    expect(screen.getByText("Test Report")).toBeInTheDocument();
    expect(screen.getByText("2024-07-23")).toBeInTheDocument();

    // Check if the report is rendered with the correct data-testid attribute
    const reportElement = screen.getByTestId(`report-1`);
    expect(reportElement).toBeInTheDocument();
  });
});
