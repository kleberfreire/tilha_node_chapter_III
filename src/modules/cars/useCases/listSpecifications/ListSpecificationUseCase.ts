import { Specification } from "../../model/Specification";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

class ListSpecificationUseCase {
  constructor(private specificationsRepository: SpecificationsRepository) {}

  execute() {
    const all = this.specificationsRepository.list();
    return all;
  }
}

export { ListSpecificationUseCase };
