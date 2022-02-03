import { User } from "../entities/User";

interface IUsersCategoryDTO {
  name: string;
  username: string;
  password: string;
  email: string;
  driver_license: string;
  admin: boolean;
}

interface IUsersRepository {
  create({
    name,
    username,
    password,
    email,
    driver_license,
    admin,
  }: IUsersCategoryDTO) : Promise<void>
  findByName({name}) : Promise<User>
  list() : Promise<User[]>
}

export { IUsersRepository, IUsersCategoryDTO } 