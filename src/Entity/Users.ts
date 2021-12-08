import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64 })
  email: string;

  @Column({ nullable: true })
  img?: string;

  // @Column()
  // idAccount: number;
}
