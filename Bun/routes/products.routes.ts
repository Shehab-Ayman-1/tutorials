import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import {
   getProducts,
   getProduct,
   createProduct,
   updateProduct,
   deleteProduct,
} from "../controllers/products.controllers.ts";
import { productSchema } from "../utilities/products.schema.ts";

export const products = new Hono();

// GET
products.get("/get-products", getProducts);
products.get("/get-product/:productId", getProduct);

// CREATE
products.post("/create-product", zValidator("json", productSchema), createProduct);

// UPDATE
products.put("/update-product/:productId", updateProduct);

// DELETE
products.delete("/delete-product/:productId", deleteProduct);
