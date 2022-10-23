import { Router } from "express";
import createPropertiesController from "../controllers/Properties/createProperties.controller";
import listPropertiesController from "../controllers/Properties/listProperties.controller";
import authAdmMiddleware from "../middlewares/authAdm.middleware";
import authTokenMiddleware from "../middlewares/authToken.middleware";

const propertieRoutes = Router();

propertieRoutes.post(
  "",
  authTokenMiddleware,
  authAdmMiddleware,
  createPropertiesController
);
propertieRoutes.get("", listPropertiesController);

export default propertieRoutes;
