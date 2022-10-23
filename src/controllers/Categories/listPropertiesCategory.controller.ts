import { Request, Response } from "express";
import listPropertiesCategoryService from "../../services/Categories/listPropertiesCategory.service";

const listPropertiesCategoryController = async (
  req: Request,
  res: Response
) => {
  try {
    const id: string = req.params.id;
    const propertiesCategory = await listPropertiesCategoryService(id);
    if (propertiesCategory === null) {
      return res.status(404).json({ message: "Invalid id" });
    }
    return res.json(propertiesCategory);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ message: "Invalid id" });
    }
  }
};

export default listPropertiesCategoryController;
