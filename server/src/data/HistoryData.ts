import { CustomError } from "../business/errors/CustomError";
import { History } from "../model/History";
import BaseDatabase from "./BaseDatabase";

const tableName = "history_posts"

export class HistoryData extends BaseDatabase {

    insertInHistory = async (field: History): Promise<void> => {
        try {
            await BaseDatabase.connection(tableName)
                .insert({
                    id: field.getId(),
                    idPost: field.getIdPost(),
                    title: field.getTitle(),
                    body: field.getBody(),
                    creationDate: field.getCreationDate(),
                    updateDate: field.getUpdateDate()
                })
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage);
        }
    }

    findHistoryById = async (idPost:string) => {

        try {
            return BaseDatabase.connection(tableName)
                .select("*")
                .where({ idPost })
                .orderBy('updateDate', 'asc')
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage);
        }
    }
}