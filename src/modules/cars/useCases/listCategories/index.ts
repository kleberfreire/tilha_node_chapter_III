import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesControllers } from "./ListCategoriesControllers";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesControllers(
  listCategoriesUseCase
);

export { listCategoriesController };
