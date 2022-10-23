import { Request, Response } from "express";
import AppError from "../../errors/appError";
import { IUserUpdate } from "../../interfaces/users";
import updateUserService from "../../services/Users/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
  const user: IUserUpdate = req.body;
  const id: string = req.params.id;
  const idBody: string = req.body.id;
  const admBody: boolean = req.body.isAdm;
  const activeBody: boolean = req.body.isActive;
  const updatedUser = await updateUserService(
    user,
    id,
    idBody,
    admBody,
    activeBody
  );
  res.json(updatedUser);
};

export default updateUserController;
