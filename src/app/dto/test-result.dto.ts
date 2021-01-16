import { TestDTO } from "./test.dto";
import { StudentDTO } from "./student.dto";

export class TestResultDTO {
    constructor(
      public student: string,
      public result: number,
      public testName: string
      ) {}
  }