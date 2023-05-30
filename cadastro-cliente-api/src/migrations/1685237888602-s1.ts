import { MigrationInterface, QueryRunner } from "typeorm";

export class S11685237888602 implements MigrationInterface {
    name = 'S11685237888602'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" ALTER COLUMN "RegistrationDate" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" ALTER COLUMN "RegistrationDate" DROP DEFAULT`);
    }

}
