import { Router } from "express";
import postController from "../../controller/PostController";

export const postRouter = Router();

postRouter.get("", postController.findAll)
postRouter.get("/:id", postController.findOne)
postRouter.post("", postController.create)
postRouter.put("/:id", postController.update)
