import { Router } from "express";
import { registerUser, msgUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/msg").get(msgUser);

export default router;
