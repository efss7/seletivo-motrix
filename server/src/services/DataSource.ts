import { config } from "dotenv";
import { DataSource } from "typeorm";
import { posts1666017177107 } from "../migration/1666017177107-posts";

config()

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: false,
    entities: [],
    subscribers: [],
    migrations: [posts1666017177107],
})