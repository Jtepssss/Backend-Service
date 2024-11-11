import "reflect-metadata";
import { DataSource } from "typeorm";
import { Essence } from "./entities/Essence";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [Essence],
    migrations: [],
    subscribers:[]
});