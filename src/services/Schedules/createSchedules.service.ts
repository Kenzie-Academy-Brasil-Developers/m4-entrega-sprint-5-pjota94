import AppDataSource from "../../data-source";
import Propertie from "../../entities/properties.entity";
import Schedules_user_properties from "../../entities/schedules_user_properties.entity";
import User from "../../entities/user.entity";
import AppError from "../../errors/appError";
import { IScheduleRequest } from "../../interfaces/schedules";

const createSchedulesService = async (
  { hour, date, propertyId }: IScheduleRequest,
  idUser: string
) => {
  if (propertyId.length < 36) {
    throw new AppError("Invalid Category", 404);
  }
  const schedulesRepository = AppDataSource.getRepository(
    Schedules_user_properties
  );
  const propertieRepository = AppDataSource.getRepository(Propertie);
  const userRepository = AppDataSource.getRepository(User);

  const propertie = await propertieRepository.findOneBy({ id: propertyId });
  const user = await userRepository.findOneBy({ id: idUser });

  if (!propertie) {
    throw new AppError("Propertie not Exist", 404);
  }

  const schedulesAlreadyExist = await schedulesRepository.findOneBy({
    date,
    hour,
  });

  const ajustDate: any = date.split("/");
  const formatDate = new Date(ajustDate[0], ajustDate[1] - 1, ajustDate[2]);
  const utilDay = formatDate.getDay();

  if (utilDay == 0) {
    throw new AppError("It is only possible to schedule on working days.");
  }

  if (utilDay == 6) {
    throw new AppError("It is only possible to schedule on working days.");
  }

  const ajustHour: any = hour.split(":");
  const joinHour = ajustHour.join("");
  const hourNumber = Number(joinHour);

  if (hourNumber < 800) {
    throw new AppError("It is only possible to schedule one business time");
  }

  if (hourNumber > 1800) {
    throw new AppError("It is only possible to schedule one business time");
  }

  //   if (propertie.id === propertyId) {
  //     throw new AppError("perai");
  //   }

  if (schedulesAlreadyExist) {
    throw new AppError("schedule already exists");
  }

  const schedules = schedulesRepository.create({
    hour,
    date,
    property: propertie,
    user: user!,
  });

  await schedulesRepository.save(schedules);

  return { message: "Schedule created" };
};

export default createSchedulesService;
