import { MigrationInterface, QueryRunner } from "typeorm";

export class SecondMigrations1684973069605 implements MigrationInterface {
    name = 'SecondMigrations1684973069605'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" ALTER COLUMN "RegistrationDate" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" ALTER COLUMN "RegistrationDate" DROP DEFAULT`);
    }

}
