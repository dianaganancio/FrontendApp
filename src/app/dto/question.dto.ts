import { AnswerDTO } from "./answer.dto";

export class QuestionDTO {
    constructor(
      public title: string,
      public possibleAnswers: AnswerDTO[],
      public correctAnswer: AnswerDTO,
      public subject: string
      ) {}
  }