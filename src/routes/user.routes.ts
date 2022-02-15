import { Router } from "express";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
<<<<<<< HEAD
import { RemoveUseController } from "../modules/accounts/useCases/removeUser/RemoveUseController";

const createUserController = new CreateUserController()
const removeUserController = new RemoveUseController()
=======
import { RemoveUserController } from "../modules/accounts/useCases/removeUser/RemoveUseController";

const createUserController = new CreateUserController()
const removeUserController = new RemoveUserController()
>>>>>>> 6f90351a3a9a9c7e0ffa7935e4ab93f5b0cf9f67

const userRoutes = Router();

userRoutes.post('/', createUserController.handle)
userRoutes.delete('/:id', removeUserController.handle)


export {userRoutes}