import { MigrationInterface, QueryRunner } from "typeorm";

export class TreMigration1684974747880 implements MigrationInterface {
    name = 'TreMigration1684974747880'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "UQ_20c34cf5c42dcbaaaeaef34c654"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "UQ_20c34cf5c42dcbaaaeaef34c654" UNIQUE ("fullName")`);
    }

}
