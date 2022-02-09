import { Request, Response} from "express";
import { container } from "tsyringe";
import { AthenticateUserUseCase } from "./AthenticateUserUseCase";

class AthenticateUserController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body
    const athenticateUserUseCase = container.resolve(AthenticateUserUseCase)

   const token = await athenticateUserUseCase.execute({email, password})
  
    return response.status(200).json({token})

  }


}

export {AthenticateUserController}