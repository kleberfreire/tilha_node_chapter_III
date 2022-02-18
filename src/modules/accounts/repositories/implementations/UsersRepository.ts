import { IUsersRepository } from "../IUsersRepository";
import {getRepository, Repository} from "typeorm"
import { User } from "../../entities/User";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
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
    avatar
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
  
  async update(id: string, data: IUpdateUserDTO) : Promise<void> {
    await this.repository.update(id, data)
    
  }
  
}

export {UsersRepository}