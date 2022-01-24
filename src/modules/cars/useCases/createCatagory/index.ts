import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();

const createCatagoryUseCase = new CreateCategoryUseCase(categoriesRepository);

const createCatagoryController = new CreateCategoryController(
  createCatagoryUseCase
);

export { createCatagoryController, createCatagoryUseCase };
