import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1679491768458 implements MigrationInterface {
    name = 'InitialMigration1679491768458'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" ADD "is_client" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "is_client"`);
    }

}
