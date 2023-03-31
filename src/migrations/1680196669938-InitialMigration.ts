import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1680196669938 implements MigrationInterface {
    name = 'InitialMigration1680196669938'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer_contacts" DROP CONSTRAINT "FK_ad09be97d3461d93380e05941b6"`);
        await queryRunner.query(`ALTER TABLE "customer_contacts" ADD CONSTRAINT "FK_ad09be97d3461d93380e05941b6" FOREIGN KEY ("client_id") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer_contacts" DROP CONSTRAINT "FK_ad09be97d3461d93380e05941b6"`);
        await queryRunner.query(`ALTER TABLE "customer_contacts" ADD CONSTRAINT "FK_ad09be97d3461d93380e05941b6" FOREIGN KEY ("client_id") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
