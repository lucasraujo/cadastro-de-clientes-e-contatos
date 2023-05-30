import { MigrationInterface, QueryRunner } from "typeorm";

export class S31685280561231 implements MigrationInterface {
    name = 'S31685280561231'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "UQ_7f384ae6c871fa9f96e7349f87e"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "UQ_7f384ae6c871fa9f96e7349f87e" UNIQUE ("fullName")`);
    }

}
