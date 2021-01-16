import { User } from "./user.model";

export class Admin {
    constructor(
      public _id: Number,
      public user: User,
      public office: string
      ) {}
  }