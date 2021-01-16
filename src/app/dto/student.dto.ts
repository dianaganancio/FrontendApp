export class StudentDTO {
    constructor(
      public login: string,
      public password: string,
      public name: string,
      public number: number,
      public subject: string
      ) {}
  }