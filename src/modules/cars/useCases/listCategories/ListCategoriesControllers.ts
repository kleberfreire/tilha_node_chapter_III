import { Response, Request } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesControllers {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.listCategoriesUseCase.execute();
    return response.json(all);
  }
}

export { ListCategoriesControllers };
