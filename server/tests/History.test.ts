import { HistoryBusiness } from "../src/business/HistoryBusiness"
import { HistoryDataMock } from "./mock/data/HistoryDataMock"



const HistoryBusinessMock = new HistoryBusiness(
    new HistoryDataMock(),
)


export const fields = {
    id: "id1",
    idPost: "id1",
    title: "title1",
    body: "body1",
    creationDate: "creationDate1",
    updateDate: "updateDate1"
}



describe("test HistoryBusiness class", () => {

    describe("test findHistoryById", () => {
        test("test response", async () => {
            const result = await HistoryBusinessMock.findHistoryById(fields.id);
            expect(result).toEqual([{ ...fields }])
        })
    })
})