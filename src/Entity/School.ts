import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class School {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64 })
  name: string;

  @Column({ length: 30, unique: true })
  category: string;
}
