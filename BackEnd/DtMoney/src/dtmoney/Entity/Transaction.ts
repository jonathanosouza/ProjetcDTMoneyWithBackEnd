import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('transactions') 
export class Transaction {
  
@PrimaryGeneratedColumn('uuid')
id: string;

@Column()
description: string;

@Column('decimal')
price: number;

@Column()
typeoper : string;

@Column()
category : string;

@CreateDateColumn()
created_at: Date;
}

export default {Transaction}