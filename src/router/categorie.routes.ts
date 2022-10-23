import { Router } from "express";
import createCategorieController from "../controllers/Categories/createCategorie.controller";
import listCategorieController from "../controllers/Categories/listCategorie.controller";
import listPropertiesCategoryController from "../controllers/Categories/listPropertiesCategory.controller";
import authAdmMiddleware from "../middlewares/authAdm.middleware";
import authTokenMiddleware from "../middlewares/authToken.middleware";

const categorieRoutes = Router();

categorieRoutes.post(
  "",
  authTokenMiddleware,
  authAdmMiddleware,
  createCategorieController
);
categorieRoutes.get("", listCategorieController);
categorieRoutes.get("/:id/properties", listPropertiesCategoryController);

export default categorieRoutes;
