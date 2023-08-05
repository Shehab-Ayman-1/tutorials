import express from "express";
import { GET_PRODUCTS, GET_PRODUCT } from "../controller/products.controller.js";
import { ADD_PRODUCTS, UPDATE_PRODUCTS, DELETE_PRODUCTS } from "../controller/products.controller.js";
import { verifyLogin, verifyRoles } from "../middlewares/verify.middleware.js";
import { authRoles } from "../configs/roles.js";

let router = express.Router();

router.get("/get-products", GET_PRODUCTS);
router.get("/get-product/:id", GET_PRODUCT);
router.post("/create-product", verifyLogin, verifyRoles(authRoles.admin, authRoles.editor), ADD_PRODUCTS);
router.put("/update-product/:id", verifyLogin, verifyRoles(authRoles.admin, authRoles.editor), UPDATE_PRODUCTS);
router.delete("/delete-product/:id", verifyLogin, verifyRoles(authRoles.admin, authRoles.editor), DELETE_PRODUCTS);

export default router;
