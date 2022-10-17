import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class posts1666017177107 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "posts",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                        comment: "id do post"
                    },
                    {
                        name: "body",
                        type: "text",
                        comment: "corpo do post"
                    },
                    {
                        name: "creationDate",
                        type: "timestamp",
                        comment: "data de criação do post",
                    },
                    {
                        name: "updateDate",
                        type: "timestamp",
                        comment: "data de atualização do post",
                    },
                ],
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("posts")
    }

}
