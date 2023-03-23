import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1679497548439 implements MigrationInterface {
    name = 'InitialMigration1679497548439'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer_contacts" DROP COLUMN "password"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer_contacts" ADD "password" character varying NOT NULL`);
    }

}
