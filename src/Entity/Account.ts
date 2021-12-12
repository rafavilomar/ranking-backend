import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 15, nullable: false })
  username: string;

  @Column({ length: 64, nullable: false })
  password: string;

  @Column({ nullable: false })
  timestamp: Date = new Date();
}
