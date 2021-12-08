import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Vote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vote: boolean;

  @Column({ nullable: true })
  comment?: string;
}
