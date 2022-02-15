import { IUsersRepository } from "../IUsersRepository";
import {getRepository, Repository} from "typeorm"
import { User } from "../../entities/User";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User)
  }

  async create({
    name,
    password,
    email,
    driver_license,
  }: ICreateUserDTO ): Promise<void> {

    const user = this.repository.create({  
      name,
      password,
      email,
      driver_license,
    })

    await this.repository.save(user)
  }
  async findById(id: string) : Promise<User> {
    const user = await this.repository.findOne({id})
    return user
  }
  async findByEmail(email: string) : Promise<User> {
    const user = await this.repository.findOne({email})
    return user
  }
  async list() : Promise<User[]> {
    const users = await this.repository.find()
    return users
  }

  async RemoveUser(id: string) : Promise<void> {
    await this.repository.delete({id})
  }
}

export {UsersRepository}