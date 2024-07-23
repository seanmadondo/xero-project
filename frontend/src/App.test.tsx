import { render, screen } from "@testing-library/react";
import { App } from "./App";
import { useReport } from "./hooks/useReport";
import { Report } from "./types";
import { mockReport } from "./utils/mockReport";

const mockReports: Report[] = [mockReport];

// Mock the useReport hook
jest.mock("./hooks/useReport");

describe("App Component", () => {
  test("renders loading state", () => {
    (useReport as jest.Mock).mockReturnValue({
      reports: null,
      loading: true,
      error: null,
    });

    render(<App />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("renders error state", () => {
    const errorMessage = "Failed to fetch data";
    (useReport as jest.Mock).mockReturnValue({
      reports: null,
      loading: false,
      error: new Error(errorMessage),
    });

    render(<App />);

    expect(
      screen.getByText(`Failed to load report: ${errorMessage}`)
    ).toBeInTheDocument();
  });

  test("renders no reports available state", () => {
    (useReport as jest.Mock).mockReturnValue({
      reports: [],
      loading: false,
      error: null,
    });

    render(<App />);

    expect(
      screen.getByText("No reports available to view")
    ).toBeInTheDocument();
  });

  test("renders report component", () => {
    (useReport as jest.Mock).mockReturnValue({
      reports: mockReports,
      loading: false,
      error: null,
    });

    render(<App />);

    // Verify the first report is rendered
    expect(screen.getByText("Test Report")).toBeInTheDocument();
    expect(screen.getByText("2024-07-23")).toBeInTheDocument();
  });
});
