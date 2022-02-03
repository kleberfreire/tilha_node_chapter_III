import {inject, injectable} from "tsyringe"
import { IUsersRepository } from "../../repositories/IUsersRepository";

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {
    
  }
  async execute() {
    
  }
}