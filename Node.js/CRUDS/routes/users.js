// Hint: We Using Postman Application To Use REST API Methods => Get, Post, Patch, Delete

import express from "express";
import { getUsers, getUser, createUser, deleteUser, updateUser } from "../controllers/users.js";

// Create Users Express Router
const router = express.Router();

// Get All Users In /users
router.get("/", getUsers);

// Get Just One User In /users/:id
router.get("/:id", getUser);

// Add New User In /users Route By New User Details
router.post("/", createUser);

// Delete User In /users Route By ID
router.delete("/:id", deleteUser);

// Update User In /users Route By id & New { Key: Value }
router.patch("/:id", updateUser);

export default router;
