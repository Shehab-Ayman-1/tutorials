import express from "express";
import { GET_PRODUCTS, GET_PRODUCT } from "../controller/products.controller.js";
import { ADD_PRODUCTS, UPDATE_PRODUCTS, DELETE_PRODUCTS } from "../controller/products.controller.js";

let router = express.Router();

router.get("/", GET_PRODUCTS);
router.get("/:id", GET_PRODUCT);
router.post("/", ADD_PRODUCTS);
router.put("/:id", UPDATE_PRODUCTS);
router.delete("/:id", DELETE_PRODUCTS);

export default router;
