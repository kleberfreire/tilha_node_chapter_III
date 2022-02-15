import { Router } from "express";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { RemoveUserController } from "../modules/accounts/useCases/removeUser/RemoveUseController";

const createUserController = new CreateUserController()
const removeUserController = new RemoveUserController()

const userRoutes = Router();

userRoutes.post('/', createUserController.handle)
userRoutes.delete('/:id', removeUserController.handle)


export {userRoutes}