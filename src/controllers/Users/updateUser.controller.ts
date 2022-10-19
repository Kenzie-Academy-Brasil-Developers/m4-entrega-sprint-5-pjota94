import { Request, Response } from "express";
import { IUserUpdate } from "../../interfaces/users";
import updateUserService from "../../services/Users/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
  try {
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
  } catch (error) {
    if (error instanceof Error) {
      res.status(401).json({ message: error.message });
    }
  }
};

export default updateUserController;
