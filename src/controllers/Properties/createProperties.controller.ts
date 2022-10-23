import { Request, Response } from "express";
import Address from "../../entities/addresses.entity";
import { IPropertyRequest } from "../../interfaces/properties";
import createAddressesService from "../../services/Properties/createAddresses.service";
import createPropertiesService from "../../services/Properties/createProperties.service";

const createPropertiesController = async (req: Request, res: Response) => {
  const propertie: IPropertyRequest = req.body;
  const address: Address = req.body.address;
  const createAddress = await createAddressesService(address);
  const createPropertie = await createPropertiesService(
    propertie,
    createAddress
  );
  return res.status(201).json(createPropertie);
};

export default createPropertiesController;
