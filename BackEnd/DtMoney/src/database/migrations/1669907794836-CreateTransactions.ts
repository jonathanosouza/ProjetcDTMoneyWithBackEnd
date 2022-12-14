import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTransactions1669907059598 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: 'transactions',
            columns : [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'description',
                    type: 'varchar',
                  },
                {
                    name: 'price',
                    type: 'decimal',
                    precision: 10,
                    scale: 2,
                },
                {
                    name: 'typeoper',
                    type: 'varchar'
                },
                {
                    name: 'category',
                    type: 'varchar',
                  },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                  },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('transactions')
    }

}
