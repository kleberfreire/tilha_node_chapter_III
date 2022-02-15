<<<<<<< HEAD
import { Request ,Response } from "express";
import { container } from "tsyringe";
import { RemoveUseCase } from "./RemoveUseCase";


class RemoveUseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {id} = request.params  
    const removeUseCase = await container.resolve(RemoveUseCase) 

    await removeUseCase.execute(id)

    return response.send()
 }
}

export { RemoveUseController }
=======
import {Response, Request} from "express"
import { container } from "tsyringe"
import { RemoveUserUseCase } from "./RemoveUserUseCase"

class RemoveUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const removeUserUseCase = container.resolve(RemoveUserUseCase)
    await removeUserUseCase.execute(id)
    return response.send()
  }
}

export {RemoveUserController}
>>>>>>> 6f90351a3a9a9c7e0ffa7935e4ab93f5b0cf9f67
