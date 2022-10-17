import { Request, Response } from "express";
import postBusiness, { PostBusiness } from "../business/PostBusiness";
import { PostCreateDto } from "../model/dto/PostDto";

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) { }

    public create = async (req: Request, res: Response) => {
        try {
            const { title, body } = req.body
            const fields: PostCreateDto = { title, body }
            console.log(fields)
            await this.postBusiness.create(fields)
            res.status(201).send("Post registered successfully!")
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ error: error.message })
        }
    }
}

export default new PostController(postBusiness)