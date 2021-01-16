import { AnswerDTO } from "./answer.dto";
import { QuestionDTO } from "./question.dto";

export class AnswerToQuestionDTO {
    constructor(
      public question: QuestionDTO,
      public answer: AnswerDTO
      ) {}
  }