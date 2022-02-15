import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";


interface IUsersRepository {
  create(data: ICreateUserDTO) : Promise<void>
  findByEmail(email: string) : Promise<User>
  findById(id: string) : Promise<User>
  list() : Promise<User[]>
<<<<<<< HEAD
  RemoveUser(id: string) : Promise<void>
=======
  remove(id:string): Promise<void>
>>>>>>> 6f90351a3a9a9c7e0ffa7935e4ab93f5b0cf9f67
}

export { IUsersRepository } 