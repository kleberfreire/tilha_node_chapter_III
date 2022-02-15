import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class RemoveUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUsersRepository) {}
  
  async execute(id: string): Promise<void> {
    await this.userRepository.remove(id)
  }
}

export { RemoveUserUseCase }