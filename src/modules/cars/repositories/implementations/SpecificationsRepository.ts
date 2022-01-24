import { v4 as uuidV4 } from "uuid";

import { Specification } from "../../model/Specification";
import {
  ISpecificationRepository,
  ICreateSpecificationDTO,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationRepository {
  private specifications: Specification[] = [];

  public static INSTANCE;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance() {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANCE;
  }

  findByName(name: string) {
    const specification = this.specifications.find(
      (spec) => spec.name === name
    );
    return specification;
  }
  list() {
    return this.specifications;
  }
  create({ name, description }: ICreateSpecificationDTO) {
    const specification: Specification = new Specification();

    Object.assign(specification, {
      id: uuidV4(),
      name,
      description,
      create_at: new Date(),
    });

    this.specifications.push(specification);
  }
}

export { SpecificationsRepository };
