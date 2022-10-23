import { Request, Response } from "express";
import createSchedulesService from "../../services/Schedules/createSchedules.service";
import { IScheduleRequest } from "../../interfaces/schedules/index";

const createSchedulesController = async (req: Request, res: Response) => {
  const idUser: string = req.user.id;
  const schedules: IScheduleRequest = req.body;
  const createSchedules = await createSchedulesService(schedules, idUser);
  res.status(201).json(createSchedules);
};

export default createSchedulesController;
