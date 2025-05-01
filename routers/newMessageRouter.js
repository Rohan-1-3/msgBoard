import { Router } from "express";
import {  newFormGet, newFormPost } from "../controllers/indexController.js";

const newMessageRouter = new Router();

newMessageRouter.get("/", newFormGet);

newMessageRouter.post("/", newFormPost)

export { newMessageRouter };