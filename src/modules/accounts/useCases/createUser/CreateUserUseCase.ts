import {inject, injectable} from "tsyringe"
import bcrypt from "bcryptjs"

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/AppError";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository) {
  }



  async execute({ 
    name,
    password,
    email,
    avatar,
    driver_license,
  }: ICreateUserDTO):Promise<void> {
  
    const userAlreadyExists = await this.usersRepository.findByEmail(email)
        
    if (userAlreadyExists) {
      throw new AppError("User already exists");
    }
  
    const encryptedPassword = await bcrypt.hash(password, 8)
    await this.usersRepository.create({  
      name,
      password: encryptedPassword,
      email,
      avatar,
      driver_license,
    });
  }
}

export {CreateUserUseCase}