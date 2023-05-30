import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1684872142840 implements MigrationInterface {
    name = 'InitialMigration1684872142840'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "company" ("id" SERIAL NOT NULL, "companyName" character varying(120) NOT NULL, "email" character varying(120) NOT NULL, "password" character varying(120) NOT NULL, CONSTRAINT "UQ_a7018eb2ac7b827608ba6856ca7" UNIQUE ("companyName"), CONSTRAINT "PK_056f7854a7afdba7cbd6d45fc20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contact" ("id" SERIAL NOT NULL, "fullName" character varying(120) NOT NULL, "email" character varying(120) NOT NULL, "phoneNumber" character varying(15) NOT NULL, "RegistrationDate" date NOT NULL, "clientId" integer, CONSTRAINT "UQ_7f384ae6c871fa9f96e7349f87e" UNIQUE ("fullName"), CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client" ("id" SERIAL NOT NULL, "fullName" character varying(120) NOT NULL, "email" character varying(120) NOT NULL, "phoneNumber" character varying(15) NOT NULL, "RegistrationDate" date NOT NULL, "companyId" integer, CONSTRAINT "UQ_20c34cf5c42dcbaaaeaef34c654" UNIQUE ("fullName"), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_e99f8e5bcbccaec7b0b7ed65526" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "FK_3d7a0b6e0f1d0c0ab1bc189645f" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "FK_3d7a0b6e0f1d0c0ab1bc189645f"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_e99f8e5bcbccaec7b0b7ed65526"`);
        await queryRunner.query(`DROP TABLE "client"`);
        await queryRunner.query(`DROP TABLE "contact"`);
        await queryRunner.query(`DROP TABLE "company"`);
    }

}
