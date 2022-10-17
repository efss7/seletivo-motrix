import { CustomError } from "../business/errors/CustomError";
import { Post } from "../model/Post";
import BaseDatabase from "./BaseDatabase";

const tableName = "posts"

export class PostData extends BaseDatabase {
    create = async (field: Post): Promise<void> => {
        try {
            await BaseDatabase.connection(tableName)
                .insert({
                    id: field.getId(),
                    title: field.getTitle(),
                    body: field.getBody(),
                    creationDate: field.getCreationDate()
                })
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage);
        }
    }
}