import { HistoryData } from "../data/HistoryData";
import { PostData } from "../data/PostData";
import { PostCreateDto, PostUpdateDto } from "../model/dto/PostDto";
import { History } from "../model/History";
import { Post } from "../model/Post";
import IdGenerator from "../services/IdGenerator";
import { CustomError } from "./errors/CustomError";

export class PostBusiness {
    constructor(
        private postData: PostData,
        private historyData: HistoryData,
        private idGenerator: IdGenerator
    ) { }

    findAll = async (): Promise<Post[] | undefined> => {
        try {

            return this.postData.findAll();

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    };

    findOne = async (id: string) => {
        try {

            if (!id || typeof id !== "string") {
                throw new CustomError(422, "Id invalid")
            }
            const result = await this.postData.findOne(id);
            if (result.length === 0) {
                throw new CustomError(404, "Post not found")
            }

            return result

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    };

    create = async (fields: PostCreateDto) => {
        try {
            const { title, body } = fields

            if (!title || typeof title !== "string") {
                throw new CustomError(422, "Title is invalid")
            }
            if (!body || typeof body !== "string") {
                throw new CustomError(422, "Body is invalid")
            }

            const id = this.idGenerator.generateId()
            const date = new Date(Date.now()).toLocaleDateString().split('/').reverse().join('-')
            const time = new Date(Date.now()).toLocaleTimeString()
            const creationDate = date + " " + time

            const post = new Post(id, title, body, creationDate)
            await this.postData.create(post)

            const idHistory = this.idGenerator.generateId()
            const history = new History(idHistory, id, title, body, creationDate)
            await this.historyData.insertInHistory(history)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    update = async (inputs: PostUpdateDto) => {
        try {
            const { id, title, body } = inputs

            if (!id || typeof id !== "string") {
                throw new CustomError(422, "Id is invalid")
            }
            if (!title || typeof title !== "string") {
                throw new CustomError(422, "Title is invalid")
            }
            if (!body || typeof body !== "string") {
                throw new CustomError(422, "Body is invalid")
            }

            const date = new Date(Date.now()).toLocaleDateString().split('/').reverse().join('-')
            const time = new Date(Date.now()).toLocaleTimeString()
            const updateDate = date + " " + time

            const postDB = await this.findOne(id)
            if (postDB.length === 0) {
                throw new CustomError(404, "Post não encontrado")
            }

            const idHistory = this.idGenerator.generateId()
            const history = new History(idHistory, id, title, body, postDB[0].creationDate, updateDate)
            await this.historyData.insertInHistory(history)

            const post = new Post(id, title, body, postDB[0].creationDate, updateDate)
            await this.postData.update(post)
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    };

    delete = async (id: string): Promise<void> => {
        try {

            if (!id || typeof id !== "string") {
                throw new CustomError(422, "Id is invalid");
            }

            await this.historyData.deleteHistory(id)
            await this.postData.delete(id);
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    };
}
export default new PostBusiness(
    new PostData(),
    new HistoryData(),
    new IdGenerator(),
);