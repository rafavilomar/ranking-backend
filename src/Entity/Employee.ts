import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import School from "./School";
import Subject from "./Subject";
import Teacher from "./Teacher";

@Entity()
export default class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Subject, (subject) => subject.id)
  @JoinColumn()
  subjectId: Subject;

  @ManyToOne((type) => School, (school) => school.id)
  @JoinColumn()
  school: School;

  @ManyToOne((type) => Teacher, (teacher) => teacher.id)
  @JoinColumn()
  teacher: Teacher;
}
