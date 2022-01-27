import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default (): CreateCategoryController => {
  const categoriesRepository = new CategoriesRepository();
  
  const createCatagoryUseCase = new CreateCategoryUseCase(categoriesRepository);
  
  const createCatagoryController = new CreateCategoryController(
    createCatagoryUseCase
  );
  
  return createCatagoryController;

}


