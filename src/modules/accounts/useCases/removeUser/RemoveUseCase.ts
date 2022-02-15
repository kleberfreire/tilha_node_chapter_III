import { inject, injectable } from "tsyringe";


import { UsersRepository } from "../../repositories/implementations/UsersRepository";

@injectable()
class RemoveUseCase { 
  constructor(@inject("UsersRepository")
    private usersRepository: UsersRepository
  ) { }

  async execute(id: string): Promise<void>{
    await this.usersRepository.RemoveUser(id)
  }
}

export {RemoveUseCase}