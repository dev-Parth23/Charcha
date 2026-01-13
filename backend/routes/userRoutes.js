import express from "express";
import {
  registerUser,
  authUser,
  refreshAccessToken,
} from "../controllers/userControllers.js";

const router = express.Router();

router.post("/login", authUser);
router.get("/refresh", refreshAccessToken);
router.post("/", registerUser);

export default router;