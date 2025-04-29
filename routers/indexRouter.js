import { Router } from "express";
import { getAllMessages, getMessageById } from "../controllers/indexController.js";
import { newMessageRouter } from "./newMessageRouter.js";

const indexRouter = new Router();

indexRouter.get("/", (req, res)=>{
    const messages = getAllMessages();
    res.render('index', {messages: messages});
})

indexRouter.use("/new", newMessageRouter);

indexRouter.get("/:messageId", (req, res)=>{
    const message = getMessageById(req.params.messageId);
    res.render('message', {message: message})
})

indexRouter.delete("/:messageId", (req, res)=>{
    res.send("Deleted")
})

export { indexRouter };