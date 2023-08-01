import express from "express";
import { GET_USERS, GET_USER, POST_USER, UPDATE_USER, DELETE_USER } from "../controllers/users.controller.js";
import { MIDDLE_WARE } from "../middleware/users.middleware.js";

let router = express.Router();

// GET All Users
router.get("/", GET_USERS);

// Get One User With ID, Name, And Query
router.get("/:id/:name", MIDDLE_WARE, GET_USER);

// Add New User
router.post("/", POST_USER);

// Update User [put || patch]
router.put("/:id", UPDATE_USER);

// Delete User(s)
router.delete("/:id", DELETE_USER);

export default router;
