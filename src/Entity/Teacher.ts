import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Teacher extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64 })
  fullname: string;

  @Column({ nullable: true })
  img?: string;
}
