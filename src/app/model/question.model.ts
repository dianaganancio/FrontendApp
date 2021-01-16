import { Answer } from "./answer.model";

export class Question {
    constructor(
      public _id: Number,
      public title: string,
      public possibleAnswers: [Answer],
      public correctAnswers: [Answer],
      public value: Number
      ) {}
  }