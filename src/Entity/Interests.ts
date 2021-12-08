import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Interests {
  @PrimaryGeneratedColumn()
  id: number;
}
