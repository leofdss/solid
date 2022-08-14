// yes

export class User {
  constructor(public name: string, public password: string) {}
}

export class Persistence {
  public saveToFile(user: User): void {
    //
  }
}

const user: User = new User("name", "password");
const persistence: Persistence = new Persistence();
persistence.saveToFile(user);
