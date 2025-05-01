import expressAsyncHandler from "express-async-handler";
import { v4 as uuidv4 } from "uuid";
import { addNewMessage, deleteMessage, getAllMessages, getMessage } from "../db/queries.js";

export const messagesGet = expressAsyncHandler(async(req, res)=>{
  const messages = await  getAllMessages();
  res.status(200).render("index",{
    messages: messages
  });
})

export const newFormGet = (req, res)=>{
  res.render('newForm');
}

export const newFormPost = expressAsyncHandler(async (req, res)=>{
  const message = await {...req.body, id: uuidv4()}
  await addNewMessage(message);
  res.redirect("/")
})

export const messageGet = expressAsyncHandler(async (req, res)=>{
    const message = await getMessage(req.params.messageId);
    res.status(200).render('message', {message: message});
})

export const messageDelete = expressAsyncHandler(async (req, res)=>{
  await deleteMessage(req.params.messageId);
  res.redirect("/")
})