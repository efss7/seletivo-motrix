import { Request, Response } from "express";
import historyBusiness, {HistoryBusiness} from "../business/HistoryBusiness"

export class HistoryController {
    constructor(
        private historyBusiness: HistoryBusiness
    ) { }


    public findHistoryById = async (req: Request, res: Response): Promise<void> => {
        try {
            const { idPost } = req.params
            const result = await this.historyBusiness.findHistoryById(idPost);
            res.status(200).send(result);
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ error: error.message });
        }
    }


}

export default new HistoryController(historyBusiness)