import { Router } from "express";
import { messageDelete, messageGet, messagesGet } from "../controllers/indexController.js";
import { newMessageRouter } from "./newMessageRouter.js";

const indexRouter = new Router();

indexRouter.get("/", messagesGet)

indexRouter.use("/new", newMessageRouter);

indexRouter.get("/message/:messageId", messageGet);

indexRouter.post("/delete/:messageId", messageDelete);

export { indexRouter };