import { HistoryData } from "../data/HistoryData";
import { CustomError } from "./errors/CustomError";

export class HistoryBusiness {
    constructor(
        private historyData: HistoryData,
    ) { }

    findHistoryById = async (idPost: string) => {
        try {

            if (!idPost || typeof idPost !== "string") {
                throw new CustomError(422, "Id invalid")
            }
            const historyDB = await this.historyData.findHistoryById(idPost);
            if (historyDB.length === 0) {
                throw new CustomError(404, "Post not found")
            }
            if (historyDB[0].getUpdateDate === null){
                throw new CustomError(404, "você ainda não fez alteração nesse post")
            }
            

            return historyDB

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    };
}
export default new HistoryBusiness(
    new HistoryData(),
);