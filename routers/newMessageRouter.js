import { Router } from "express";
import { v4 as uuidv4 } from 'uuid';
import { addNewMessage } from "../controllers/indexController.js";

const newMessageRouter = new Router();

newMessageRouter.get("/", (req, res)=>{
    res.render('newForm');
});

newMessageRouter.post("/", (req, res)=>{
    const message = {...req.body, added: (new Date()).toLocaleDateString(), id: uuidv4()}
    addNewMessage(message);
    res.redirect("/")
})

export { newMessageRouter };