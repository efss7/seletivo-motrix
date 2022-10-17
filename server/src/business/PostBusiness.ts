import { PostData } from "../data/PostData";
import { PostCreateDto } from "../model/dto/PostDto";
import { Post } from "../model/Post";
import IdGenerator from "../services/IdGenerator";
import { CustomError } from "./errors/CustomError";

export class PostBusiness {
    constructor(
        private postData: PostData,
        private idGenerator: IdGenerator
    ) { }
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
            const creationDate = new Date(Date.now()).toLocaleString()

            const post = new Post(id, title, body, creationDate)
            await this.postData.create(post)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}
export default new PostBusiness(
    new PostData(),
    new IdGenerator(),
);