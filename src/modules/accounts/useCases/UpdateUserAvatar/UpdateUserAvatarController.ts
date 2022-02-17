import { Response, Request } from "express"

class UpdateUserAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    return response.send()
  }
}

export {UpdateUserAvatarController}