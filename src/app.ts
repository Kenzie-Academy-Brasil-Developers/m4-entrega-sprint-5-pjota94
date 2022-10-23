import "reflect-metadata";
import express from "express";
import "express-async-errors";
import userRoutes from "./router/user.routes";
import loginRoutes from "./router/login.routes";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import categorieRoutes from "./router/categorie.routes";
import propertieRoutes from "./router/propertie.routes";
import schedulesRoutes from "./router/schedules.routes";

const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/categories", categorieRoutes);
app.use("/properties", propertieRoutes);
app.use("/schedules", schedulesRoutes);
app.use(handleErrorMiddleware);

export default app;
