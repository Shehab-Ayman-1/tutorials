import express from "express";
import { CUSTOME_METHODS } from "../controllers/custome.controllers.js";

export const router = express.Router();

// GET
router.get("/", CUSTOME_METHODS);
