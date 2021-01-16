import { QuestionDTO } from "./question.dto";

export class TestDTO {
    constructor(
      public testName: string,
      public questions: QuestionDTO[],
      ) {}
  }