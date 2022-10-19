import { Request, Response } from "express";
import deleteUserService from "../../services/Users/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const deleteUser = await deleteUserService(id);
    if (deleteUser === null) {
      res.status(404).json({ message: "id not exist" });
    }
    res.status(204).json(deleteUser);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
};

export default deleteUserController;
