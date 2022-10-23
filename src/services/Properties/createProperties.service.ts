import AppDataSource from "../../data-source";
import Address from "../../entities/addresses.entity";
import Categories from "../../entities/categories.entity";
import Propertie from "../../entities/properties.entity";
import AppError from "../../errors/appError";
import { IPropertyRequest } from "../../interfaces/properties";

const createPropertiesService = async (
  { value, size, categoryId }: IPropertyRequest,
  createAddress: Address
) => {
  if (categoryId.length < 36) {
    throw new AppError("Invalid Category", 404);
  }

  const propertieRepository = AppDataSource.getRepository(Propertie);
  const categorieRepository = AppDataSource.getRepository(Categories);

  const categories = await categorieRepository.findOneBy({ id: categoryId });

  if (!categories) {
    throw new AppError("Category not exist", 404);
  }

  const propertie = propertieRepository.create({
    value,
    size,
    category: categories,
    address: createAddress,
  });

  await propertieRepository.save(propertie);
  return propertie;
};

export default createPropertiesService;
