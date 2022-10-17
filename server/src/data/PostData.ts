import { CustomError } from "../business/errors/CustomError";
import { Post } from "../model/Post";
import BaseDatabase from "./BaseDatabase";

const tableName = "posts"

export class PostData extends BaseDatabase {

    findAll = async (): Promise<Post[]> => {
        try {
            return BaseDatabase.connection(tableName)
                .select("*")
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage)
        }
    }

    findOne = async (id: string) => {
        try {
            return BaseDatabase.connection(tableName)
                .select("*")
                .where({ id })
        } catch (error:any) {
            throw new CustomError(500, error.sqlMessage);
        }
    }

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