import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Coisa {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn( { type: 'timestamp with time zone' } )
  createdAt: Date;

  @UpdateDateColumn( { type: 'timestamp with time zone' } )
  updatedAt: Date;

  @Column()
  name: string;
}
