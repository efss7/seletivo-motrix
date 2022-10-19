import { PostBusiness } from "../src/business/PostBusiness";
import { PostDataMock } from "./mock/data/PostDataMock";
import IdGeneratorMock from "./mock/IdGeneratorMock";

const PostBusinessMock = new PostBusiness(
    new PostDataMock(),
    new IdGeneratorMock()
)

export const fields = {
    id: "id1",
    title: "title1",
    body: "body1",
    creationDate: "creationDate1",
    updateDate: "updateDate1"
}

describe("test PostBusiness class", () => {
    describe("test findAll", () => {
        test("test response", async () => {
            const result = await PostBusinessMock.findAll();
            expect(result).toMatchObject([{ ...fields }])
        })
    })
    describe("test findOne", () => {
        test("test response", async () => {
            const result = await PostBusinessMock.findOne(fields.id);
            expect(result).toEqual([{ ...fields }])
        })
    })
    describe("test create", () => {
        test("test missing title", async () => {
            fields.title = "";
            try {
                await PostBusinessMock.create(fields)
            } catch (error: any) {
                fields.title = "title1";
                expect(error.message).toEqual("Title is invalid");
                expect(error.statusCode).toStrictEqual(422);
            } finally {
                expect.assertions(2);
            }
        })
        test("test missing body", async () => {
            fields.body = "";
            try {
                await PostBusinessMock.create(fields)
            } catch (error: any) {
                fields.body = "body1";
                expect(error.message).toEqual("Body is invalid");
                expect(error.statusCode).toStrictEqual(422);
            } finally {
                expect.assertions(2);
            }
        })
    })
    describe("test update", () => {
        test("test missing id", async () => {
            fields.id = "";
            try {
                await PostBusinessMock.update(fields)
            } catch (error: any) {
                fields.id = "id1";
                expect(error.message).toEqual("Id is invalid");
                expect(error.statusCode).toStrictEqual(422);
            } finally {
                expect.assertions(2);
            }
        })
        test("test missing title", async () => {
            fields.title = "";
            try {
                await PostBusinessMock.update(fields)
            } catch (error: any) {
                fields.title = "title1";
                expect(error.message).toEqual("Title is invalid");
                expect(error.statusCode).toStrictEqual(422);
            } finally {
                expect.assertions(2);
            }
        })
        test("test missing body", async () => {
            fields.body = "";
            try {
                await PostBusinessMock.update(fields)
            } catch (error: any) {
                fields.body = "body1";
                expect(error.message).toEqual("Body is invalid");
                expect(error.statusCode).toStrictEqual(422);
            } finally {
                expect.assertions(2);
            }
        })
    })
    describe("test delete", () => {
        test("test missing id", async () => {
            fields.id = "";
            try {
                await PostBusinessMock.delete(fields.id)
            } catch (error: any) {
                fields.id = "id1";
                expect(error.message).toEqual("Id is invalid");
                expect(error.statusCode).toStrictEqual(422);
            } finally {
                expect.assertions(2);
            }
        })
    })
})