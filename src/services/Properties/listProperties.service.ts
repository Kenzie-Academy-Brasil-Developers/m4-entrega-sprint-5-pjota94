import AppDataSource from "../../data-source";
import Propertie from "../../entities/properties.entity";

const listPropertiesService = async () => {
  const propertiesRepository = AppDataSource.getRepository(Propertie);
  const properties = await propertiesRepository.find();
  return properties;
};

export default listPropertiesService;
