import { TestDTO } from "./test.dto";
import { StudentDTO } from "./student.dto";
import { AnswerToQuestionDTO } from "./answer-to-question.dto";

export class TestAnswerDTO {
    constructor(
      public test: TestDTO,
      public student: StudentDTO,
      public answersToQuestions: AnswerToQuestionDTO[]
      ) {}
  }