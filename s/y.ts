// yes

export class User {
  constructor(public name: string, public password: string) {}
}

export class UserRepository {
  public saveToFile(user: User): void {
    //
  }
}

const user: User = new User("name", "password");
const userRepository: UserRepository = new UserRepository();
userRepository.saveToFile(user);
