import AppDataSource from "../../data-source";
import Propertie from "../../entities/properties.entity";
import Schedules_user_properties from "../../entities/schedules_user_properties.entity";
import AppError from "../../errors/appError";

const listSchedulesService = async (id: string) => {
  const schedulesRepository = AppDataSource.getRepository(
    Schedules_user_properties
  );
  const propertiesRepository = AppDataSource.getRepository(Propertie);

  const propertie = await propertiesRepository.findOneBy({ id });

  if (!propertie) {
    throw new AppError("Propertie not Exist", 404);
  }

  const properties = await propertiesRepository.findOne({
    where: { id },
    relations: { schedulesProperty: true },
  });

  const schedules = await schedulesRepository.find();

  return { schedules: properties?.schedulesProperty };
};

export default listSchedulesService;
