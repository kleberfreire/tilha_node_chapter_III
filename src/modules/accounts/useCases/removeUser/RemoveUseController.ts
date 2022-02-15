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

