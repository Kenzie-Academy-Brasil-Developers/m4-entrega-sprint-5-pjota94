import { Router } from "express";
import createUserController from "../controllers/Users/createUser.controller";
import deleteUserController from "../controllers/Users/deleteUser.controller";
import listUsersController from "../controllers/Users/listUsers.controller";
import updateUserController from "../controllers/Users/updateUser.controller";
import authAdmMiddleware from "../middlewares/authAdm.middleware";
import authTokenMiddleware from "../middlewares/authToken.middleware";
import updateNoAdmMiddleware from "../middlewares/updateNoAdm.middleware";

const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get("", authTokenMiddleware, authAdmMiddleware, listUsersController);
userRoutes.patch(
  "/:id",
  authTokenMiddleware,
  updateNoAdmMiddleware,
  updateUserController
);
userRoutes.delete(
  "/:id",
  authTokenMiddleware,
  authAdmMiddleware,
  deleteUserController
);

export default userRoutes;
