import axios from "axios";
import { Router } from "express";

const router = Router();
const XERO_API_URL = "http://xero-api:3000/api.xro/2.0/Reports/BalanceSheet";

router.get("/balance-sheet", async (req, res) => {
  try {
    const response = await axios.get(XERO_API_URL);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch balance sheet data" });
  }
});

export default router;
