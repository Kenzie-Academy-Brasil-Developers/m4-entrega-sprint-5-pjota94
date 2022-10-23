import AppDataSource from "../../data-source";
import Categories from "../../entities/categories.entity";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategorieService = async ({ name }: ICategoryRequest) => {
  const categorieRepository = AppDataSource.getRepository(Categories);

  const categorieAlreadyExist = await categorieRepository.findOne({
    where: { name },
  });

  if (categorieAlreadyExist) {
    throw new Error("Categorie already exist");
  }

  const categorie = categorieRepository.create({
    name,
  });

  await categorieRepository.save(categorie);

  return categorie;
};

export default createCategorieService;
