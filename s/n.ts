// not 

export class User {
  constructor(public name: string, public password: string) {}
  saveToFile(): void {}
}

const user: User = new User("name", "password");
user.saveToFile();
