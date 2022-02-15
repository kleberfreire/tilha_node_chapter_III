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