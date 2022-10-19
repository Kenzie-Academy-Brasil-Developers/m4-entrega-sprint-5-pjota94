import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import listUsersService from "../../services/Users/listUsers.service";

const listUsersController = async (req: Request, res: Response) => {
  try {
    const users = await listUsersService();
    res.json(instanceToPlain(users));
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
};

export default listUsersController;
