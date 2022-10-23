import { Request, Response } from "express";
import { ICategoryRequest } from "../../interfaces/categories";
import createCategorieService from "../../services/Categories/createCategorie.service";

const createCategorieController = async (req: Request, res: Response) => {
  try {
    const name: ICategoryRequest = req.body;
    const createCategorie = await createCategorieService(name);
    return res.status(201).json(createCategorie);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    }
  }
};

export default createCategorieController;
