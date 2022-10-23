import { Router } from "express";
import createSchedulesController from "../controllers/Schedules/createSchedules.controller";
import listSchedulesController from "../controllers/Schedules/listSchedules.controller";
import authAdmMiddleware from "../middlewares/authAdm.middleware";
import authTokenMiddleware from "../middlewares/authToken.middleware";

const schedulesRoutes = Router();

schedulesRoutes.post("", authTokenMiddleware, createSchedulesController);
schedulesRoutes.get(
  "/properties/:id",
  authTokenMiddleware,
  authAdmMiddleware,
  listSchedulesController
);

export default schedulesRoutes;
