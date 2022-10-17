import { Router } from "express";
import postController from "../../controller/PostController";

export const postRouter = Router();

postRouter.get("",postController.findAll)
postRouter.post("", postController.create)
