import express from "express";
import {
  DeleteUser,
  test,
  updateUser,
  getUserListings,
  getUser,
  
} from "../controllers/user.controller.js";
import { VerifyToken } from "../utils/VerifyUser.js";
const router = express.Router();

router.get("/test", test);
router.post("/update/:id", VerifyToken, updateUser);
router.delete("/delete/:id", VerifyToken, DeleteUser);
router.get("/listings/:id", VerifyToken, getUserListings);
router.get("/:id", VerifyToken, getUser);

export default router;
