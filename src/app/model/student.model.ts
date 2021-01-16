import { User } from "./user.model";

export class Student {
    constructor(
      public _id: Number,
      public user: User,
      public number: Number
      ) {}
  }