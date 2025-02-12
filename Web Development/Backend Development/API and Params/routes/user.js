import express from "express";
import { deleteUser, getAllUsers, getUser, register, updateUser } from "../controllers/user.js";

const router = express.Router();

router.get("/all",getAllUsers)

router.post("/new",register)

// params
router.route("/:id")
.get(getUser)
.put(updateUser)
.delete(deleteUser)

export default router;