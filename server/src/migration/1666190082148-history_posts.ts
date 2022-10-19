import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class historyPosts1666190082148 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "history_posts",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                        comment: "id do histórico"
                    },
                    {
                        name: "idPost",
                        type: "varchar",
                        comment: "(fk) id do post"
                    },
                    {
                        name: "title",
                        type: "varchar",
                        comment: "titulo do post"
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
                        isNullable: true
                    },
                ],
            }),
        )
        await queryRunner.createForeignKey("history_posts", new TableForeignKey({
            name: "posts_history_posts",
            columnNames: ["idPost"],
            referencedColumnNames: ["id"],
            referencedTableName: "posts"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("history_posts", "posts_history_posts")
        await queryRunner.dropTable("history_posts")
    }

}
