import { Response, Request } from "express";
import { IUserLogin } from "../../interfaces/users";
import loginService from "../../services/Login/login.service";

const loginController = async (req: Request, res: Response) => {
  const data: IUserLogin = req.body;
  const token = await loginService(data);
  res.json({ token });
};

export default loginController;
