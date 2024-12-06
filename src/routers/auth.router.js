import express from "express";

import { registerUserController,loginController,verifyValidationTokenEmailController, forgotPasswordController,resetTokenController} from "../controllers/auth.controller.js";
import { verifyApikeyMiddleware } from "../middlewares/auth.middleware.js";


const authRouter = express.Router();

authRouter.post("/register",verifyApikeyMiddleware ,registerUserController);
authRouter.post("/login",verifyApikeyMiddleware,loginController);
authRouter.get("/verify/:verification_token",verifyValidationTokenEmailController);
authRouter.post("/forgot-Password",verifyApikeyMiddleware,forgotPasswordController);
authRouter.put("/reset-password/:reset_token",verifyApikeyMiddleware,resetTokenController);
export default authRouter;  