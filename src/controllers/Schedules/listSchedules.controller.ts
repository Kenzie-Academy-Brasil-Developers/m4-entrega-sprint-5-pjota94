import { Request, Response } from "express";
import listSchedulesService from "../../services/Schedules/listSchedules.service";

const listSchedulesController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const schedules = await listSchedulesService(id);
  res.json(schedules);
};

export default listSchedulesController;
