import "reflect-metadata";
import express from "express";
import "express-async-errors";
import userRoutes from "./router/user.routes";
import loginRoutes from "./router/login.routes";
import handleErrorMiddleware from "./middlewares/handleError.middleware";

const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use(handleErrorMiddleware);

export default app;
