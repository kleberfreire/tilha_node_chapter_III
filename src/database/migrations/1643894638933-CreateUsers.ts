import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1643894638933 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      queryRunner.createTable(new Table({
        name: "Users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "password",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "driver_license",
            type: "varchar",
          },
          {
            name: "admin",
            type: "boolean",
          },
          {
            name: "created_at",
            type: "timestamp",
            default:"now()",
          }
        ]
        
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}