import { Request, Response } from "express";
import listCategorieService from "../../services/Categories/listCategorie.service";

const listCategorieController = async (req: Request, res: Response) => {
  try {
    const categories = await listCategorieService();
    return res.json(categories);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
};

export default listCategorieController;
