import { MigrationInterface, QueryRunner } from "typeorm";

export class updateAddresses1666309424131 implements MigrationInterface {
    name = 'updateAddresses1666309424131'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "state" character varying(2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "state" character varying NOT NULL`);
    }

}
