import { History } from "../../../src/model/History";


export class HistoryDataMock {
    insertInHistory = async (field: History): Promise<void> => { }
    findHistoryById = async (idPost: string) => [new History("id1", "id1", "title1", "body1", "creationDate1", "updateDate1")];
}