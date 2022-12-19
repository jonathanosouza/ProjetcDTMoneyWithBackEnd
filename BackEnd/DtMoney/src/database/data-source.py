import { DataSource } from "typeorm";



export const AppDataSource = new DataSource({
    type: "postgres",
    port: 5432,
    host: "localhost", 
    username: "finance",
    password: "finance",
    database: "financejohn",
    synchronize: true,
    migrations : ["/src/database/migrations/**/*.ts"],
    entities: ["/src/Transactions/Entity/**/*.ts"], 
})


