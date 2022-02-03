import { IUsersCategoryDTO, IUsersRepository } from "../IUsersRepository";
import {getRepository, Repository} from "typeorm"
import { User } from "../../entities/User";
class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User)
  }

  async create({
    name,
    username,
    password,
    email,
    driver_license,
    admin,
  }: IUsersCategoryDTO ): Promise<void> {

    const user = this.repository.create({  name,
      username,
      password,
      email,
      driver_license,
      admin,})
    await this.repository.save(user)
  }
  async findByName({name}) : Promise<User> {
    const user = await this.repository.findOne({name})
    return user
  }
  list() : Promise<User[]> {
    const users = this.repository.find()
    return users
  }
}

export {UsersRepository}