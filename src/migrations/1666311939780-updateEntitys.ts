import { MigrationInterface, QueryRunner } from "typeorm";

export class updateEntitys1666311939780 implements MigrationInterface {
    name = 'updateEntitys1666311939780'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" DROP CONSTRAINT "FK_d38c8782cbb21122d7c6c531a78"`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" DROP CONSTRAINT "FK_235777864d81d2513cb8d6118f0"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_ca9977669df4807ef2202584495"`);
        await queryRunner.query(`ALTER TABLE "properties" RENAME COLUMN "categoriesId" TO "categoryIdId"`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" DROP COLUMN "propertyId"`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" ADD "propertyIdId" uuid`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" ADD "userIdId" uuid`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "zipCode"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "zipCode" character varying(8) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" ADD CONSTRAINT "FK_2aa78e5e744b297606333042d50" FOREIGN KEY ("propertyIdId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" ADD CONSTRAINT "FK_d69e0ce50198d158f0f87721ad0" FOREIGN KEY ("userIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_f051b757f8e45139549dceb39af" FOREIGN KEY ("categoryIdId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_f051b757f8e45139549dceb39af"`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" DROP CONSTRAINT "FK_d69e0ce50198d158f0f87721ad0"`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" DROP CONSTRAINT "FK_2aa78e5e744b297606333042d50"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "zipCode"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "zipCode" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" DROP COLUMN "userIdId"`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" DROP COLUMN "propertyIdId"`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" ADD "propertyId" uuid`);
        await queryRunner.query(`ALTER TABLE "properties" RENAME COLUMN "categoryIdId" TO "categoriesId"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_ca9977669df4807ef2202584495" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" ADD CONSTRAINT "FK_235777864d81d2513cb8d6118f0" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" ADD CONSTRAINT "FK_d38c8782cbb21122d7c6c531a78" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
