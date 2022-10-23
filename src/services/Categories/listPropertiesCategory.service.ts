import AppDataSource from "../../data-source";
import Categories from "../../entities/categories.entity";

const listPropertiesCategoryService = async (id: string) => {
  const propertiesRepository = AppDataSource.getRepository(Categories);

  const propertiesCategory = await propertiesRepository.findOne({
    where: {
      id,
    },
    relations: {
      properties: true,
    },
  });

  return propertiesCategory;
};

export default listPropertiesCategoryService;
