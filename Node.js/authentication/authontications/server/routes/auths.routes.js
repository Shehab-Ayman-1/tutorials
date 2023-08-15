import express from "express";
import { LOGIN, REGISTER } from "../controllers/auths.controllers.js";
import { GET_AUTHS, GET_AUTH, UPDATE_AUTH, DELETE_AUTH } from "../controllers/auths.controllers.js";
import { verifyLogin, verifyLogout, refreshToken, verifyRoles } from "../middlewares/verify.middleware.js";
import { admin, editor, user } from "../configs/roles.js";

const router = express.Router();

router.get("/refresh-token", refreshToken);
router.get("/logout", verifyLogout);

router.post("/login", LOGIN);
router.post("/register", REGISTER);

router.get("/get-auths", verifyLogin, verifyRoles(admin), GET_AUTHS);
router.get("/get-auth/:id", verifyLogin, verifyRoles(admin, editor, user), GET_AUTH);

router.put("/update-auth/:id", verifyLogin, verifyRoles(admin, editor), UPDATE_AUTH);
router.delete("/delete-auth/:id", verifyLogin, verifyRoles(admin), DELETE_AUTH);

export default router;
