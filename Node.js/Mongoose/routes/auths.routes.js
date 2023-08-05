import express from "express";
import { REGISTER, LOGIN } from "../controller/auths.controller.js";
import { GET_AUTHS, UPDATE_AUTH, DELETE_AUTH } from "../controller/auths.controller.js";
import { verifyLogin, verifyRoles } from "../middlewares/verify.middleware.js";
import { authRoles } from "../configs/roles.js";

const router = express.Router();

router.get("/get-auths", verifyLogin, verifyRoles(authRoles.admin), GET_AUTHS);
router.post("/login", LOGIN);
router.post("/register", REGISTER);
router.put("/update-auth/:id", verifyLogin, verifyRoles(authRoles.admin, authRoles.user), UPDATE_AUTH);
router.delete("/delete-auth/:id", verifyLogin, verifyRoles(authRoles.admin), DELETE_AUTH);

export default router;
