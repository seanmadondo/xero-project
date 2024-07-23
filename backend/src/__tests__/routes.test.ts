import axios from "axios";
import request from "supertest";
import app from "../index";

// Mock the axios module
jest.mock("axios");

describe("GET /api/balance-sheet", () => {
  it("should return the balance-sheet data", async () => {
    const mockData = {
      Reports: [
        {
          Rows: [
            {
              Cells: [{ Value: "Assets" }, { Value: "1000" }],
            },
            {
              Cells: [{ Value: "Liabilities" }, { Value: "500" }],
            },
          ],
        },
      ],
    };

    // Mock the axios get call to return the mock data
    (axios.get as jest.Mock).mockResolvedValue({ data: mockData });

    const response = await request(app).get("/api/balance-sheet");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockData);
  });

  it("should return an error message if the fetch fails", async () => {
    // Mock the axios get call to throw an error
    (axios.get as jest.Mock).mockRejectedValue(new Error("Failed to fetch"));

    const response = await request(app).get("/api/balance-sheet");

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      message: "Failed to fetch balance sheet data",
    });
  });
});
