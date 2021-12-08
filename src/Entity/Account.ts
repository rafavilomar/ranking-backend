import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 15 })
  username: string;

  @Column({ length: 64 })
  password: string;

  @Column()
  timestamp: Date;
}
