export class AdminDTO {
    constructor(
      public login: string,
      public password: string,
      public name: string,
      public office: string,
      public subject: string
      ) {}
  }