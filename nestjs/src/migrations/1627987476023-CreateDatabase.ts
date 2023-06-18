import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDatabase1627987476023 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createDatabase('yourproduct', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropDatabase('yourproduct', true);
  }
}
