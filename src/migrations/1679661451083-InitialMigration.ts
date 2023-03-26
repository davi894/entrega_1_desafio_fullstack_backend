import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1679661451083 implements MigrationInterface {
    name = 'InitialMigration1679661451083'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "password"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" ADD "password" character varying NOT NULL`);
    }

}
