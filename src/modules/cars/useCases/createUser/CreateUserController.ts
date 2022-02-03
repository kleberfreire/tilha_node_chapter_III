import {Request , Response} from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle (request: Request , response: Response) {
    const {  
      name,
      username,
      password,
      email,
      driver_license,
      admin
    } = request.body
    const createUserUseCase = container.resolve(CreateUserUseCase)
    try {
      await createUserUseCase.execute({  
        name,
        username,
        password,
        email,
        driver_license,
        admin
      })
      return response.status(201).send()
    } catch (error) {
      return response.status(400).json({error: error})
    }

  }
}

export {CreateUserController}