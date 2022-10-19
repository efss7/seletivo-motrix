import { Router } from "express";
import historyController from "../../controller/HistoryController";



export const historyRouter = Router();


historyRouter.get("/:idPost", historyController.findHistoryById)
