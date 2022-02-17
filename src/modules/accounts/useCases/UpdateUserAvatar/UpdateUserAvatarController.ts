import { Response, Request } from "express"
import { container } from "tsyringe"
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase"

class UpdateUserAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {id, avatar_file} = request.body
    
    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase)

    updateUserAvatarUseCase.execute({user_id: id, avatar_file})

    return response.send()
  }
}

export {UpdateUserAvatarController}