import { Post } from "../../../src/model/Post";

export class PostDataMock {
    findAll = async (): Promise<Post[]> => [new Post("id1", "title1", "body1", "creationDate1", "updateDate1")];
    findOne = async (id: string) => [new Post("id1", "title1", "body1", "creationDate1", "updateDate1")];
    create = async (field: Post): Promise<void> => { };
    update = async (field: Post): Promise<void> => { };
    delete = async (id: string):Promise<void> => { };

}