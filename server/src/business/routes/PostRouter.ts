import { Router } from "express";
import postController from "../../controller/PostController";

export const postRouter = Router();


postRouter.post("", postController.create)
