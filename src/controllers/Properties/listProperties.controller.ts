import { Request, Response } from "express";
import listPropertiesService from "../../services/Properties/listProperties.service";

const listPropertiesController = async (req: Request, res: Response) => {
  const properties = await listPropertiesService();
  res.json(properties);
};

export default listPropertiesController;
