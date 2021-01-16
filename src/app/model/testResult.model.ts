import { Student } from "./student.model";
import { Answer } from "./answer.model";

export class TestResult {
    constructor(
      public _id: Number,
      public student: Student,
      public answers: [Answer],
      public grade: Number
      ) {}
  }