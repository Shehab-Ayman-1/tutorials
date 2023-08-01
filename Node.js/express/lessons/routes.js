import express from "express";
import { sendFile, getUsers, getUser, getUsersByLimit, createUser, updateUser, deleteUser, page404 } from "./(MVC) model-view-controller.js";
import { getAuths, getAuth, register, login } from "./authentication.js";
import { verifyLogin, verifyLogout, verifyRefresh, verifyRoles } from "./jwt-verify.js";
import { roles } from "../public/configs/roles.js";

const router = express.Router();

// Send File
router.get("/", sendFile);

// Auth
router.get("/login", login);
router.post("/register", register);

// Test
router.get("/refresh-token", verifyRefresh);
router.get("/logout", verifyLogout);

// GET
router.get("/get-users", getUsers);
router.get("/get-auths", verifyLogin, getAuths);
router.get("/get-auth/:id", verifyLogin, getAuth);

// GET/Params
router.get("/get-user/:id", getUser);

// GET/Query
router.get("/get-users-by-limit", getUsersByLimit);

// CREATE
router.post("/create-user", verifyLogin, verifyRoles(roles.admin, roles.editor), createUser);

// UPDATE
router.put("/update-user/:id", verifyLogin, verifyRoles(roles.admin, roles.editor), updateUser);

// DELETE
router.delete("/delete-user/:id", verifyLogin, verifyRoles(roles.admin), deleteUser);

// 404 Page
router.all("*", page404);

export { router };
