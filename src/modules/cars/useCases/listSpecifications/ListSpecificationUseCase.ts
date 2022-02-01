import {inject, injectable } from "tsyringe"
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

@injectable()
class ListSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: SpecificationsRepository) {}

  async execute() {
    const all = await this.specificationsRepository.list();
    return all;
  }
}

export { ListSpecificationUseCase };
