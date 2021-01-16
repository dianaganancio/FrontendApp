
import { TestResult } from "./testResult.model";
import { Admin } from "./admin.model";
import { Question } from "./question.model";

export class Test {
    constructor(
      public _id: Number,
      public results: [TestResult],
      public admin: Admin,
      public questions: [Question]
      ) {}
  }