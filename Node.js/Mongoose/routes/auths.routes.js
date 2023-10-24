import express from "express";
import { REGISTER, LOGIN } from "../controllers/auths.controllers.js";
import { GET_AUTHS, UPDATE_AUTH, DELETE_AUTH } from "../controllers/auths.controllers.js";
import { verifyLogin, verifyRoles } from "../middlewares/verify.middleware.js";
import { authRoles } from "../configs/roles.js";

export const router = express.Router();

// GET
router.get("/get-auths", verifyLogin, verifyRoles(authRoles.admin), GET_AUTHS);

// CREATE
router.post("/login", LOGIN);
router.post("/register", REGISTER);

// UPDATE
router.put("/update-auth/:id", verifyLogin, verifyRoles(authRoles.admin, authRoles.user), UPDATE_AUTH);

// DELETE
router.delete("/delete-auth/:id", verifyLogin, verifyRoles(authRoles.admin), DELETE_AUTH);
