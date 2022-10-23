import AppDataSource from "../../data-source";
import Categories from "../../entities/categories.entity";

const listCategorieService = async () => {
  const categorieRepository = AppDataSource.getRepository(Categories);
  const categories = await categorieRepository.find();

  return categories;
};

export default listCategorieService;
