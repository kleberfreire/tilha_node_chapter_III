import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/AppError";

// @injectable()
// class RemoveUserUseCase {
//   constructor(
//     @inject("UserRepository")
//     private userRepository: IUsersRepository) {

//     }
  
//   async execute(id: string): Promise<void> {

//     const userAlreadyExists = await this.userRepository.findById(id);
//     if(!userAlreadyExists) {
//       // throw new AppError("user a not exists")
//     }

//     await this.userRepository.remove(id)
//   }
// }

// export { RemoveUserUseCase }
@injectable()
class RemoveUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUsersRepository) {
  }
  
  async execute(id: string) {
    const userAlreadyExists = await this.userRepository.findById(id);
    console.log(userAlreadyExists)
  }
}

export { RemoveUserUseCase }