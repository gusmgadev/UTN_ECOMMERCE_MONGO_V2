import express from "express";  

import getPingController from "../controllers/status.controller.js";
import { verifyApikeyMiddleware, verifyTokenMiddleware } from "../middlewares/auth.middleware.js";

const statusRouter = express.Router();  


statusRouter.use(verifyApikeyMiddleware) 


statusRouter.get("/ping",getPingController )

//statusRouter.get("/protected-route/ping", verifyTokenMiddleware,getPingController )
statusRouter.get("/protected-route/ping", verifyTokenMiddleware(["admin"]),getPingController )
export default statusRouter;