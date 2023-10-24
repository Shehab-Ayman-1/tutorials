import express from "express";
import { SUM_PRICES, COMPINING, TOTAL_PRICES, ANALYTICS } from "../controllers/aggregates.controllers.js";

export const router = express.Router();

// GET
router.get("/sum-prices", SUM_PRICES);
router.get("/compining", COMPINING);
router.get("/total-prices", TOTAL_PRICES);
router.get("/analytics", ANALYTICS);
