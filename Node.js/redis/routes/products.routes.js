import express from "express";
import { GET_ALL, POST_BRAND, POST_KIND, POST_NAME } from "../controllers/products.controller.js";

const router = express.Router();

router.get("/", GET_ALL);
router.post("/add-brand", POST_BRAND);
router.post("/add-kind", POST_KIND);
router.post("/add-name", POST_NAME);

export default router;
