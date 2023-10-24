import express from "express";
import { GETS, GET, CREATE, UPDATE, DELETE } from "../controllers/CRUD.controllers.js";
import { verifyLogin, verifyRoles } from "../middlewares/verify.middleware.js";
import { authRoles } from "../configs/roles.js";

export const router = express.Router();

// GET
router.get("/gets", GETS);
router.get("/get/:id", GET);

// CREATE
router.post("/create", verifyLogin, verifyRoles(authRoles.admin, authRoles.editor), CREATE);

// UPDATE
router.put("/update/:id", verifyLogin, verifyRoles(authRoles.admin, authRoles.editor), UPDATE);

// DELETE
router.delete("/delete/:id", verifyLogin, verifyRoles(authRoles.admin, authRoles.editor), DELETE);
