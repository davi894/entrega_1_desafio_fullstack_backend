import "dotenv/config";
import path from "path";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { Client } from "./database/entities/client";
import { CustomerContacts } from "./database/entities/customerContacts";
import { InitialMigration1679491021452 } from "./migrations/1679491021452-InitialMigration";
import { InitialMigration1679491768458 } from "./migrations/1679491768458-InitialMigration";
import { InitialMigration1679497548439 } from "./migrations/1679497548439-InitialMigration";
import { InitialMigration1679661451083 } from "./migrations/1679661451083-InitialMigration";
import { InitialMigration1680196669938 } from "./migrations/1680196669938-InitialMigration";


const nodeEnv: string = process.env.NODE_ENV;

const dataSourceConfig = (): DataSourceOptions => {
    const entities = [Client, CustomerContacts]
    const migrations = [InitialMigration1679491021452, InitialMigration1679491768458, InitialMigration1679497548439, InitialMigration1679661451083, InitialMigration1680196669938]
    if (nodeEnv === "test") {
        return {
            type: "sqlite",
            database: ":memory:",
            synchronize: true,
            entities: ["src/entities/*.ts"],
        };
    }

    if (nodeEnv === "production") {
        return {
            type: "postgres",
            url: process.env.DATABASE_URL,
            entities: entities,
            migrations: migrations,
            synchronize: true,
        };
    }

    return {
        type: "postgres",
        host: process.env.PGHOST,
        port: parseInt(process.env.PGPORT!),
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        logging: false,
        entities: entities,
        migrations: migrations,
        synchronize: false,
    };
};

const AppDataSource = new DataSource(dataSourceConfig());

export { AppDataSource };
