import Subject from "./Subject";

export default interface Teacher{
  teacherId: number
  teacherName: string
  img: string
  subjects: Subject[]
}